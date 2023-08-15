import { ControlCommand, ControlCommandCode } from '../core/ui-control-commands';
import { CustomElement } from '../core/model/custom-element';
import { UiControllerClient } from './ui-controller-client';
import { RepeatError } from './repeat-error';
import { delay } from './misc';
import { InferenceClient } from './inference-client';
import { ControlCommandError } from './control-command-error';
import { Annotation } from '../core/annotation/annotation';
import { CustomElementJson } from '../core/model/custom-element-json';
import { logger } from '../lib/logger';
import { Base64Image } from '../utils/base_64_image/base-64-image';
import { DetectedElement } from '../core/model/annotation-result/detected-element';
import { UiControllerClientConnectionState } from './ui-controller-client-connection-state';
import { Instruction, Snapshot, StepReporter } from '../core/reporting';

export class ExecutionRuntime {
  constructor(
    private uiControllerClient: UiControllerClient,
    private inferenceClient: InferenceClient,
    private stepReporter: StepReporter,
  ) { }

  async connect(): Promise<UiControllerClientConnectionState> {
    return this.uiControllerClient.connect();
  }

  disconnect(): void {
    this.uiControllerClient.disconnect();
  }

  async startVideoRecording(): Promise<void> {
    await this.uiControllerClient.startVideoRecording();
  }

  async stopVideoRecording(): Promise<void> {
    await this.uiControllerClient.stopVideoRecording();
  }

  async readVideoRecording(): Promise<string> {
    const response = await this.uiControllerClient.readVideoRecording();
    return response.data.video;
  }

  private async requestControl(
    controlCommand: ControlCommand,
  ): Promise<void> {
    await this.uiControllerClient.requestControl(controlCommand);
  }

  async executeInstruction(instruction: Instruction): Promise<void> {
    const controlCommand = await this.predictCommandWithRetry(instruction);
    if (controlCommand.code === ControlCommandCode.OK) {
      return this.requestControl(controlCommand);
    }

    if (controlCommand.tryToRepeat) {
      await this.requestControl(controlCommand);
      return this.executeCommandRepeatedly(instruction);
    }

    throw new ControlCommandError(controlCommand.actions?.[0]?.text ?? '');
  }

  private readonly EXEC_REPETITION_COUNT = 25;

  private async executeCommandRepeatedly(instruction: Instruction): Promise<void> {
    /* eslint-disable no-await-in-loop */
    for (let repeatCount = this.EXEC_REPETITION_COUNT; repeatCount >= 0; repeatCount -= 1) {
      if (repeatCount === 0) {
        throw new RepeatError(
          `Max. number (${this.EXEC_REPETITION_COUNT}) of repetitions of command executions `
          + 'from a single test step reached',
        );
      }

      logger.debug('Repeat command execution....');
      const controlCommand = await this.predictCommandWithRetry(instruction);
      if (controlCommand.code === ControlCommandCode.OK) {
        break;
      }

      if (controlCommand.tryToRepeat) {
        await this.requestControl(controlCommand);
      } else {
        throw new ControlCommandError(controlCommand.actions?.[0]?.text ?? '');
      }
    }
    /* eslint-enable no-await-in-loop */
  }

  private readonly PREDICT_COMMAND_RETRY_COUNT = 2;

  /**
   * Command prediction may fail, e.g., due to application still loading
   * --> retry with linear back-off
   */
  /* eslint-disable-next-line consistent-return */
  private async predictCommandWithRetry(instruction: Instruction): Promise<ControlCommand> {
    let command = await this.predictCommand(instruction);
    /* eslint-disable no-await-in-loop */
    for (let k = 0; k < this.PREDICT_COMMAND_RETRY_COUNT; k += 1) {
      if (command.code === ControlCommandCode.OK) {
        return command;
      }
      const msUntilRetry = k * 1000;
      logger.debug(`Wait ${msUntilRetry} and retry predicting command...`);
      await delay(msUntilRetry);
      command = await this.predictCommand(instruction, new ControlCommandError(command.actions?.[0]?.text ?? ''));
    }
    /* eslint-enable no-await-in-loop */
    return command;
  }

  private isImageRequiredByConfig(): boolean {
    return this.stepReporter.config.withScreenshots === 'begin'
      || this.stepReporter.config.withScreenshots === 'always';
  }

  private async isImageRequired(instruction: string): Promise<boolean> {
    if (this.isImageRequiredByConfig()) return Promise.resolve(true);

    return this.inferenceClient.isImageRequired(instruction);
  }

  private isAnnotationRequired(): boolean {
    return this.stepReporter.config.withDetectedElements === 'begin'
      || this.stepReporter.config.withDetectedElements === 'always';
  }

  async getScreenshot(): Promise<string> {
    const requestScreenshotResponse = await this.uiControllerClient.requestScreenshot();
    return requestScreenshotResponse.data.image;
  }

  private async buildSnapshot(instruction: string): Promise<Snapshot> {
    const createdAt = new Date();
    const screenshot = await this.isImageRequired(instruction)
      ? await this.getScreenshot() : undefined;
    const annotation = this.isAnnotationRequired() ? await this.annotateImage() : undefined;
    return {
      createdAt,
      screenshot,
      detectedElements: annotation?.detected_elements,
    };
  }

  private async predictCommand(
    instruction: Instruction,
    retryError?: Error,
  ): Promise<ControlCommand> {
    const snapshot = await this.buildSnapshot(instruction.value);
    if (retryError !== undefined) this.stepReporter.onStepRetry(snapshot, retryError);
    else this.stepReporter.onStepBegin(snapshot);
    const controlCommand = await this.inferenceClient.predictControlCommand(
      instruction.value,
      instruction.customElements,
      snapshot.screenshot,
    );
    if (instruction.secretText !== undefined) {
      controlCommand.setTextToBeTyped(instruction.secretText);
    }
    return controlCommand;
  }

  async annotateInteractively() {
    const annotationResponse = await this.annotateImage();
    await this.uiControllerClient.annotateInteractively(
      annotationResponse.detected_elements,
      annotationResponse.image,
    );
  }

  async takeScreenshotIfImageisNotProvided(imagePath?: string): Promise<string> {
    let base64Image = '';
    if (imagePath !== undefined) {
      base64Image = (await Base64Image.fromPath(imagePath)).toString();
    }
    if (imagePath === undefined) {
      const screenshotResponse = await this.uiControllerClient.requestScreenshot();
      base64Image = screenshotResponse.data.image;
    }
    return base64Image;
  }

  async getDetectedElements(
    instruction: string,
    customElementJson?: CustomElementJson[],
  ): Promise<DetectedElement[]> {
    let customElements: CustomElement[] = [];
    const base64Image = await this.takeScreenshotIfImageisNotProvided();
    if (customElementJson !== undefined) {
      customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    }
    return this.inferenceClient.getDetectedElements(instruction, base64Image, customElements);
  }

  async annotateImage(
    imagePath?: string,
    customElementJson?: CustomElementJson[],
    elements?: DetectedElement[],
  ): Promise<Annotation> {
    let customElements: CustomElement[] = [];
    const base64Image = await this.takeScreenshotIfImageisNotProvided(imagePath);
    if (elements !== undefined) {
      if (elements.length === 0) {
        logger.warn("Parameter 'elements' is an empty list.");
      }
      return new Annotation(base64Image, elements);
    }
    if (customElementJson !== undefined) {
      customElements = await CustomElement.fromJsonListWithImagePathOrImage(customElementJson);
    }
    return this.inferenceClient.predictImageAnnotation(base64Image, customElements);
  }
}
