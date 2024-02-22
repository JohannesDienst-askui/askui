"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99698],{19744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(17624),s=n(4552);const o={sidebar_position:3,title:"Reporting run Results"},i="Reporting Run Results",l={id:"general/Integrations/reporting",title:"Reporting run Results",description:"We provide a package @askui/askui-reporters with reporters ready-to-use into your AskUI runs. Check out the repository for more details.",source:"@site/versioned_docs/version-0.13.1/general/05-Integrations/reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/reporting",permalink:"/docs/0.13.1/general/Integrations/reporting",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/05-Integrations/reporting.md",tags:[],version:"0.13.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reporting run Results"},sidebar:"docsSidebar",previous:{title:"Extracting Element Data",permalink:"/docs/0.13.1/general/Element Selection/scraping-and-storing-lements"},next:{title:"How to use Assertions",permalink:"/docs/0.13.1/general/Element Selection/assertions"}},a={},c=[{value:"Installation",id:"installation",level:2},{value:"AskUIAllureStepReporter",id:"askuiallurestepreporter",level:2},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>jest.setup.ts</code>",id:"configure-beforeeach-and-aftereach-in-jestsetupts",level:3},{value:"Enable the Test Environment <code>@askui/jest-allure-circus</code> in <code>jest.config.ts</code>",id:"enable-the-test-environment-askuijest-allure-circus-in-jestconfigts",level:3},{value:"AskUIJestHtmlStepReporter",id:"askuijesthtmlstepreporter",level:2},{value:"Install <code>ffmpeg</code> On Your System",id:"install-ffmpeg-on-your-system",level:3},{value:"Enable Reporter in <code>jest.setup.ts</code>",id:"enable-reporter-in-jestsetupts",level:3},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>jest.setup.ts</code>",id:"configure-beforeeach-and-aftereach-in-jestsetupts-1",level:3},{value:"Enable the Jest-Html-Reporters in <code>jest.config.ts</code>",id:"enable-the-jest-html-reporters-in-jestconfigts",level:3},{value:"AskUIXRayStepReporter",id:"askuixraystepreporter",level:2},{value:"Enable and Configure the AskUIXRayStepReporter in <code>askui-helper.ts</code> (former <code>jest.setup.ts</code>)",id:"enable-and-configure-the-askuixraystepreporter-in-askui-helperts-former-jestsetupts",level:3},{value:"Configure <code>jest-xray-environment</code> in <code>jest.config.ts</code>",id:"configure-jest-xray-environment-in-jestconfigts",level:3},{value:"AskUIAnnotationStepReporter",id:"askuiannotationstepreporter",level:2},{value:"Enable and Configure the AskUIAnnotationStepReporter in <code>jest.setup.ts</code>",id:"enable-and-configure-the-askuiannotationstepreporter-in-jestsetupts",level:3},{value:"Enable Multiple Reporters",id:"enable-multiple-reporters",level:2},{value:"Implement Your Own Reporter",id:"implement-your-own-reporter",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"reporting-run-results",children:"Reporting Run Results"}),"\n",(0,r.jsxs)(t.p,{children:["We provide a package ",(0,r.jsx)(t.code,{children:"@askui/askui-reporters"})," with reporters ready-to-use into your AskUI runs. ",(0,r.jsx)(t.a,{href:"https://github.com/askui/askui-reporters",children:"Check out the repository"})," for more details."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"@askui/askui-reporters"})," as a dev-dependency:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev @askui/askui-reporters\n"})}),"\n",(0,r.jsx)(t.h2,{id:"askuiallurestepreporter",children:"AskUIAllureStepReporter"}),"\n",(0,r.jsxs)(t.p,{children:["Add the reporter to the ",(0,r.jsx)(t.code,{children:"UiControlClient"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { AskUIAllureStepReporter } from \"@askui/askui-reporters\";\n...\n  const reporterConfig: ReporterConfig = {\n    withScreenshots: 'always', // See below for possible values\n    withDetectedElements: 'always', // See below for possible values\n  }\n\n  aui = await UiControlClient.build({\n    reporter: new AskUIAllureStepReporter(\n      reporterConfig\n    )\n  });\n...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can pass a ",(0,r.jsx)(t.code,{children:"ReporterConfig"})," object to the reporter to configure the level of detail for screenshots and detected elements."]}),"\n",(0,r.jsxs)(t.p,{children:["There are four possible values (See ",(0,r.jsx)(t.a,{href:"https://github.com/askui/askui-reporters/tree/main#allure-reporter",children:"the @askui/askui-reporters README for a detailed explanation"}),"):"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"onFailure (Default for both)"}),"\n",(0,r.jsx)(t.li,{children:"required"}),"\n",(0,r.jsx)(t.li,{children:"begin"}),"\n",(0,r.jsx)(t.li,{children:"always"}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"configure-beforeeach-and-aftereach-in-jestsetupts",children:["Configure ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"UiControlClient"})," retrieves the videos and images from your ",(0,r.jsx)(t.code,{children:"AskUI Controller"}),". You have to implement ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})," to start the recording and then add it to your report:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Allure Reporter"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"beforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIAllureStepReporter.attachVideo(video);\n});\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"enable-the-test-environment-askuijest-allure-circus-in-jestconfigts",children:["Enable the Test Environment ",(0,r.jsx)(t.code,{children:"@askui/jest-allure-circus"})," in ",(0,r.jsx)(t.code,{children:"jest.config.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"@askui/jest-allure-circus"})," environment:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev @askui/jest-allure-circus\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  // highlight-start\n  // Enables the test environment for Allure\n  testEnvironment: '@askui/jest-allure-circus',\n  // highlight-end\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"askuijesthtmlstepreporter",children:"AskUIJestHtmlStepReporter"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Due to restrictions of ",(0,r.jsx)(t.code,{children:"jest-html-reporters"})," you can either have screenshots or video with this reporter but not both at the same time. For screenshots omit the ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," hooks in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),". For video do not configure a ",(0,r.jsx)(t.code,{children:"reporter"})," in your ",(0,r.jsx)(t.code,{children:"UiControlClient"}),"."]})}),"\n",(0,r.jsxs)(t.h3,{id:"install-ffmpeg-on-your-system",children:["Install ",(0,r.jsx)(t.code,{children:"ffmpeg"})," On Your System"]}),"\n",(0,r.jsxs)(t.p,{children:["To use this reporter you have to have ",(0,r.jsx)(t.a,{href:"http://www.ffmpeg.org/",children:"ffmpeg"})," installed on your system (including all necessary encoding libraries like ",(0,r.jsx)(t.code,{children:"libmp3lame"})," or ",(0,r.jsx)(t.code,{children:"libx264"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Please follow the ",(0,r.jsx)(t.a,{href:"http://www.ffmpeg.org/download.html",children:"installation instructions"})," for your system."]}),"\n",(0,r.jsxs)(t.h3,{id:"enable-reporter-in-jestsetupts",children:["Enable Reporter in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["Add the reporter to the ",(0,r.jsx)(t.code,{children:"UiControlClient"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// Do not forget this import at the start of the file!\nimport { AskUIJestHtmlStepReporter } from \"@askui/askui-reporters\";\n...\n  aui = await UiControlClient.build({\n    reporter: new AskUIJestHtmlStepReporter({\n      withScreenshots: 'always' as const, // See below for possible values\n      withDetectedElements: 'always' as const, // See below for possible values\n    })\n  });\n...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can pass a ",(0,r.jsx)(t.code,{children:"ReporterConfig"})," object to the reporter to configure the level of detail for screenshots and detected elements:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"onFailure (Default for both)"}),"\n",(0,r.jsx)(t.li,{children:"required"}),"\n",(0,r.jsx)(t.li,{children:"begin"}),"\n",(0,r.jsx)(t.li,{children:"always"}),"\n"]}),"\n",(0,r.jsxs)(t.h3,{id:"configure-beforeeach-and-aftereach-in-jestsetupts-1",children:["Configure ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import path from "path";\nimport { AskUIJestHtmlStepReporter } from "@askui/askui-reporters";\n\nbeforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIJestHtmlStepReporter.attachVideo(video);\n});\n'})}),"\n",(0,r.jsxs)(t.h3,{id:"enable-the-jest-html-reporters-in-jestconfigts",children:["Enable the Jest-Html-Reporters in ",(0,r.jsx)(t.code,{children:"jest.config.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"jest-html-reporters"})," environment:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-html-reporters\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import type { Config } from "@jest/types";\n\nconst config: Config.InitialOptions = {\n  preset: "ts-jest",\n  testEnvironment: "node",\n  setupFilesAfterEnv: ["./helper/jest.setup.ts"],\n  sandboxInjectedGlobals: ["Math"],\n  reporters: ["default", "jest-html-reporters"],\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"askuixraystepreporter",children:"AskUIXRayStepReporter"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Due to restrictions this reporter only works when you run your workflows one after another (default for AskUI)!"})}),"\n",(0,r.jsxs)(t.h3,{id:"enable-and-configure-the-askuixraystepreporter-in-askui-helperts-former-jestsetupts",children:["Enable and Configure the AskUIXRayStepReporter in ",(0,r.jsx)(t.code,{children:"askui-helper.ts"})," (former ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["You have to do a few things in your ",(0,r.jsx)(t.code,{children:"askui-helper.ts"})," (former ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),") to enable the ",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"}),":"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["We will try to move this into the custom ",(0,r.jsx)(t.code,{children:"testEnvironment"})," we provide."]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Import the reporter"}),"\n",(0,r.jsx)(t.li,{children:"Initialize the reporter"}),"\n",(0,r.jsxs)(t.li,{children:["Add it to the ",(0,r.jsx)(t.code,{children:"UiControlClient"})]}),"\n",(0,r.jsxs)(t.li,{children:["Modify before ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," hook to create/finish ",(0,r.jsx)(t.code,{children:"TestEntries"})]}),"\n",(0,r.jsxs)(t.li,{children:["Add writing the report to ",(0,r.jsx)(t.code,{children:"afterAll()"})," hook"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { UiControlClient, UiController } from 'askui';\n\n/* 1 Import the reporter */\nimport { AskUIXRayStepReporter } from '@askui/askui-reporters';\n\n...\n\n/* 2 Initialize the reporter */\nlet xRayReporter = new AskUIXRayStepReporter({\n    withScreenshots: 'always',\n  });\n\nbeforeAll(async () => {\n  ...\n  aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    },\n    /* 3 Enable reporter */\n    reporter: xRayReporter,\n  });\n\n  await aui.connect();\n});\n\n/* 4 Create TestEntry with name of test from it-block */\nbeforeEach(async () => {\n  xRayReporter.createNewTestEntry(global.testName);\n});\n\n/* 4 Finish TestEntry with the test status */\nafterEach(async () => {\n  xRayReporter.finishTestEntry(global.testStatus);\n});\n\nafterAll(async () => {\n  /* 5 Writing the report */\n  await xRayReporter.writeReport();\n  aui.disconnect();\n  await uiController.stop();\n});\n\nexport { aui };\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"configure-jest-xray-environment-in-jestconfigts",children:["Configure ",(0,r.jsx)(t.code,{children:"jest-xray-environment"})," in ",(0,r.jsx)(t.code,{children:"jest.config.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["For the ",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"})," step reporter to work properly you need a special ",(0,r.jsx)(t.code,{children:"testEnvironment"})," that provides the names from the ",(0,r.jsx)(t.code,{children:"it"}),"-blocks used to create the JSON-Objects for each test. Configure the ",(0,r.jsx)(t.code,{children:"testEnvironment"})," in your ",(0,r.jsx)(t.code,{children:"jest.config.ts"})," as shown in the code below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  // This uses cjs module system\n  // Replace cjs with esm if your project uses esm\n  testEnvironment: '@askui/askui-reporters/dist/cjs/xray/jest-xray-environment.js',\n  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  reporters: [ \"default\", \"jest-junit\" ]\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"askuiannotationstepreporter",children:"AskUIAnnotationStepReporter"}),"\n",(0,r.jsxs)(t.h3,{id:"enable-and-configure-the-askuiannotationstepreporter-in-jestsetupts",children:["Enable and Configure the AskUIAnnotationStepReporter in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import { AskUIAnnotationStepReporter, AnnotationLevel } from \'@askui/askui-reporters\';\n...\n  aui = await UiControlClient.build({\n    ...\n    reporter: new AskUIAnnotationStepReporter(\n        // AnnotationLevel.ON_FAILURE, /* Uncomment and change to AnnotationLevel.ALL for reporting at every step */\n        // folderPath: "report", /* Uncomment and change property for different folder */\n        // fileNameSuffix: "_testStep_annotation" /* Uncomment and change property for different file name suffix */\n      ),\n  });\n...\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"AnnotationLevel"})," is implemented as an enum. You have two options:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ON_FAILURE"})," (Default Value): After a step failed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ALL"}),": After every step"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"folderPath"})," is the folder name, relative to the root of your project, the report-files will be saved to."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Default value: ",(0,r.jsx)(t.code,{children:"report"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fileNameSuffix"}),": The suffix for every report-file."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The generated report-filename has the following name convention:\n** ",(0,r.jsx)(t.code,{children:"{YYYYYYMMDDTHHmmsssss}_{passed|failed}{fileNameSuffix}.html"}),"\n** Example: 20230922072153421_failed_testStep_annotation.html"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"enable-multiple-reporters",children:"Enable Multiple Reporters"}),"\n",(0,r.jsxs)(t.p,{children:["You can enable multiple reporters simultaneously by passing an array of reporters in the ",(0,r.jsx)(t.code,{children:"reporter"})," property like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"aui = await UiControlClient.build({\n    reporter: [\n        new AskUIAnnotationStepReporter(\n          AnnotationLevel.ALL,\n          \"annotation_report\",\n          \"_annotation\"\n        ),\n        new AskUIJestHtmlStepReporter({\n          withScreenshots: 'always' as const, // See below for possible values\n          withDetectedElements: 'always' as const, // See below for possible values\n        })\n      ],\n  });\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"testEnvironment"})," setting has to be the ",(0,r.jsx)(t.strong,{children:"SAME"})," for all reporters in the array! The following table shows which reporters can be enabled together."]})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIAllureStepReporter"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIJestHtmlStepReporter"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIAnnotationStepReporter"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIXRayStepReporter"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AskUIAllureStepReporter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AskUIJestHtmlStepReporter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AskUIAnnotationStepReporter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AskUIXRayStepReporter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"implement-your-own-reporter",children:"Implement Your Own Reporter"}),"\n",(0,r.jsxs)(t.p,{children:["To write your own reporter you have to implement AskUI's ",(0,r.jsx)(t.code,{children:"Reporter"})," interface. It offers three optional methods you can overwrite to adapt to your specific reporter framework:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface Reporter {\n    config?: ReporterConfig;\n    onStepBegin?(step: Step): Promise<void>;\n    onStepRetry?(step: Step): Promise<void>;\n    onStepEnd?(step: Step): Promise<void>;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"https://github.com/askui/askui-reporters/blob/main/src/allure/askui-allure-step-reporter.ts",children:"Example implementation for Allure"})," on how that is used to extract the screenshot before/after each step and how to record a video of each step."]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var r=n(11504);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);