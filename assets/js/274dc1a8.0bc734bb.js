"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37264],{82112:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release-2024-03-04","metadata":{"permalink":"/release-notes/release-2024-03-04","source":"@site/blog/2024-03-04/2024-03-04.md","title":"2024.03.04 | AskUI SDK Convenience Methods","description":"Introduction","date":"2024-03-04T00:00:00.000Z","formattedDate":"March 4, 2024","tags":[{"label":"AskUI SDK","permalink":"/release-notes/tags/ask-ui-sdk"}],"readingTime":1.88,"hasTruncateMarker":false,"authors":[{"name":"Johannes Dienst","title":"Developer Advocate","email":"johannes.dienst@askui.com","imageURL":"/img/johannesdienst.jpeg","key":"johannesdienst"},{"name":"Jonas Menesklou","title":"CEO","email":"jonas.menesklou@askui.com","imageURL":"/img/jonasmenesklou.jpeg","key":"jonasmenesklou"}],"frontMatter":{"title":"2024.03.04 | AskUI SDK Convenience Methods","slug":"release-2024-03-04","authors":["johannesdienst","jonasmenesklou"],"tags":["AskUI SDK"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"2024.02.26 | AskUI Suite 24.2.2","permalink":"/release-notes/release-2024-02-26"}},"content":"## Introduction\\nThis week we improved on our docs. A guide for setting up your terminal and extensions in Visual Studio Code on Windows will improve your experience while developing AskUI Workflows.\\n\\nWe also fixed a display bug at the _Supported Keys_ page.\\n\\nIn version 0.14.0 of the AskUI SDK we introduced some convenience methods to free users from writing repetetive code. This speeds up the development of AskUI Workflows and improves readability. Make sure to read [the convenience docs](https://docs.askui.com/docs/api/Convenience/clickButton) which give you a detailed description on how to use each method.\\n\\n## Visual Studio Code Setup on Windows\\nVisual Studio Code is our recommended editor for developing AskUI workflows. Our [docs for the _AskUI Development Environment_](https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#ade--vscode-ide) now have a section that helps you to setup Visual Studio Code for developing AskUI workflows efficiently:\\n\\n* Terminal configuration\\n* Recommended extensions for Jest Runner, ESLint & Live View\\n\\n## Convenvience Methods\\nWe introduced the following methods:\\n\\n---\\n\\n### `clickButton(label: string)`\\nSearches for an element of type button with a label and clicks it when found.\\n\\n```typescript\\nawait aui.clickButton(\'Sign Up\');\\n```\\n\\n---\\n\\n### `clickIcon(description: string)`\\nClicks an icon based on a description.\\n\\n```typescript\\nawait aui.clickIcon(\'Logo looking like an apple\');\\n```\\n\\n---\\n\\n### `clickText(text: string)`\\nSearches for a text element and clicks it when found.\\n\\n```typescript\\nawait aui.clickText(\'A big bear\');\\n```\\n\\n---\\n\\n### `clickTexts(texts: string[])`\\nSearches for text elements and clicks them one after another when found.\\n\\n```typescript\\nawait aui.clickTexts([\'A big bear\', \'Brown Fox\', \'Walks into a bar\']);\\n```\\n\\n---\\n\\n### `clickTextfield(placeholder: string)`\\nSearches for an element of type textfield with a specific placeholder text. If found, clicks it.\\n\\n```typescript\\nawait aui.clickTextfield(\'E-Mail Address\');\\n```\\n\\n---\\n\\n### `dragTo(element1: Executable, element2: Executable)`\\nDrags element1 to element2.\\n\\nBoth must be a moveMouse() or moveMouseTo() instruction as in the example below.\\n\\n```typescript\\nawait aui.dragTo(\\n   aui.moveMouseTo().text(\'AskUI\'),\\n   aui.moveMouseTo().text(\'UI Automation\')\\n);\\n```\\n\\n---\\n\\n### `pressKeyNTimes(key: PC_AND_MODIFIER_KEY, times = 2)`\\nPress a key multiple times. At least two times.\\n\\n```typescript\\nawait aui.pressKeyNTimes(\'right\');\\nawait aui.pressKeyNTimes(\'left\', 3);\\n```\\n\\n---\\n\\n### `pressKeys(keys: PC_AND_MODIFIER_KEY[])`\\nPress an array of keys one after another.\\n\\n```typescript\\nawait aui.pressKeys([\'right\', \'left\', \'enter\']);\\n```\\n\\n---\\n\\n### `waitUntil(AskUICommand: Executable, maxTry = 5, waitTime = 2000)`\\nWait until an AskUICommand does not fail.\\n\\nUse it to wait for an element to appear like this:\\n\\n```typescript\\nawait waitUntil(aui.expect().text(\'Github\').exists());\\n```\\n\\n---"},{"id":"release-2024-02-26","metadata":{"permalink":"/release-notes/release-2024-02-26","source":"@site/blog/2024-02-26/2024-02-26.md","title":"2024.02.26 | AskUI Suite 24.2.2","description":"Introduction","date":"2024-02-26T00:00:00.000Z","formattedDate":"February 26, 2024","tags":[{"label":"Intent-Pilot","permalink":"/release-notes/tags/intent-pilot"},{"label":"AskUI Development Environment (ADE)","permalink":"/release-notes/tags/ask-ui-development-environment-ade"},{"label":"AskUI Runner","permalink":"/release-notes/tags/ask-ui-runner"},{"label":"AskUI Controller","permalink":"/release-notes/tags/ask-ui-controller"}],"readingTime":1.34,"hasTruncateMarker":false,"authors":[{"name":"Johannes Dienst","title":"Developer Advocate","email":"johannes.dienst@askui.com","imageURL":"/img/johannesdienst.jpeg","key":"johannesdienst"},{"name":"Jonas Menesklou","title":"CEO","email":"jonas.menesklou@askui.com","imageURL":"/img/jonasmenesklou.jpeg","key":"jonasmenesklou"}],"frontMatter":{"title":"2024.02.26 | AskUI Suite 24.2.2","slug":"release-2024-02-26","authors":["johannesdienst","jonasmenesklou"],"tags":["Intent-Pilot","AskUI Development Environment (ADE)","AskUI Runner","AskUI Controller"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"2024.03.04 | AskUI SDK Convenience Methods","permalink":"/release-notes/release-2024-03-04"},"nextItem":{"title":"2024.02.07 | AskUI Suite & Installer","permalink":"/release-notes/release-2024-02-07"}},"content":"## Introduction\\nThe main focus of the release AskUI Installer 24.2.2 was to polish the previous release 24.2.1 and therefore no major changes were introduced.\\n\\n## AskUI Installer Update 24.2.2\\nIntroduces a number of new steps: [Downloadlink](https://files.askui.com/releases/Installer/24.2.2/AskUI-Suite-24.2.2-System-Installer-Win-AMD64-Full.exe).\\n\\n### Installer for Windows\\nThe installer contains a number of new and modified dialogs. Furthermore, it contains additional components.\\n\\nMore information can be found [here](../../docs/general/Getting%20Started/Installing%20AskUI/getting-started).\\n\\n---\\n## New Features\\nThis release focuses on bug fixes.\\n\\n---\\n\\n## Improvements\\nThis release focuses on bug fixes.\\n\\n- Improved the robustness of the inter-process connection between Legacy Controller and Remote Device Controller.\\n- We only allow a single instance of the Legacy Controller for desktop scenarious (mobile platforms are untouched).\\n\\n---\\n\\n## Fixes\\nThis release focuses on bug fixes.\\n\\n- Fixed left and right arrow key mapping which were swapped.\\n- Fixed issues with stuck mouse cursor and not finished actions.\\n\\n---\\n\\n## Changes\\n- Mouse movement uses the OS\'s cursor position set instead of delta movement on a 1000hz update rate. Making it more reliable.\\n- Legacy Controller and Remote Device Controller are both shutdown with an error message if the connection is broken.\\n\\n## Known Issues\\n\\n### **Mouse Movement**\\n- You may encounter issues when mouse pointer acceleration is enabled.\\n- There might be issues with the mouse movement when it tries to move to invalid coordinates.\\n\\n---\\n## Versions\\n\\n### Components and Packages\\n- AskUI Controller  \\n        - AskUI Controller: v0.2.1.0 Preview  \\n        - AskUI Legacy UI Controller: 0.14.0\\n- AskUI Runner: 0.1.4\\n- AskUI Development Environment (ADE)\\n- AskUI Development Kit (ADK)\\n\\n### 3rd Party Versions\\n- Node.JS: 21.0.0\\n- PowerShell 7.3.8"},{"id":"release-2024-02-07","metadata":{"permalink":"/release-notes/release-2024-02-07","source":"@site/blog/2024-02-07/2024-02-07.md","title":"2024.02.07 | AskUI Suite & Installer","description":"Introduction","date":"2024-02-07T00:00:00.000Z","formattedDate":"February 7, 2024","tags":[{"label":"AskUI Development Environment (ADE)","permalink":"/release-notes/tags/ask-ui-development-environment-ade"},{"label":"AskUI Runner","permalink":"/release-notes/tags/ask-ui-runner"},{"label":"AskUI Controller","permalink":"/release-notes/tags/ask-ui-controller"}],"readingTime":2.33,"hasTruncateMarker":false,"authors":[{"name":"Dominique Mader","title":"Head of Software Engineering","email":"dominique.mader@askui.com","imageURL":"/img/dominiquemader.jpeg","key":"dominiquemader"},{"name":"Leon Meier","title":"Head of Product","email":"leon.meier@askui.com","imageURL":"/img/leonmeier.jpeg","key":"leonmeier"}],"frontMatter":{"title":"2024.02.07 | AskUI Suite & Installer","slug":"release-2024-02-07","authors":["dominiquemader","leonmeier"],"tags":["AskUI Development Environment (ADE)","AskUI Runner","AskUI Controller"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"2024.02.26 | AskUI Suite 24.2.2","permalink":"/release-notes/release-2024-02-26"},"nextItem":{"title":"2024.01.31 | OCR Model Enhancement","permalink":"/release-notes/release-2024-01-31"}},"content":"## Introduction\\n\\nAskUI offers a hassle-free installation experience for its products via a user-friendly installer. This installer facilitates the seamless installation of AskUI products with just a few clicks.\\n\\n## General\\n\\n### Installer for Windows\\nThe installer contains a number of new and modified dialogs. Furthermore, it contains additional components.\\n\\nMore information can be found [here](../../docs/general/Getting%20Started/Installing%20AskUI/getting-started).\\n\\n---\\n## New Features\\nWe introduced a couple of new features.\\n\\n### In Preview\\n- [AskUI Development Environment (ADE)](../../docs/general/Components/AskUI-Development-Environment)  \\n        - Introduces environment management  \\n        - Project management  \\n        - Dependency installation  \\n        - Shell  \\n- [AskUI Runner](../../docs/general/Components/AskUI-Runner)\\n- [AskUI Controller](../../docs/general/Components/AskUI-Controller)\\n\\n---\\n## Known Issues\\n\\n### Installation Dependencies\\n- AskUI Development Kit (former AskUI-Lib) is not included in the installer. It will be downloaded during the setup process.\\n\\n### **Mouse Movement**\\n- You may encounter issues when mouse pointer acceleration is enabled.\\n- There might be issues with the mouse movement when it tries to move to invalid coordinates.\\n\\n### **Log Files**\\n- Log files diskspace usage increased. They are stored in `~/.askui/` and can be deleted if that causes any issues.\\n\\n### **Android**\\n- Recording on an Android device is not stable.\\n- Recorded resolution might be lower than the device resolution.\\n- Recorded video might be empty or single frame in cases no screen updates occurred during recording.\\n- We don\'t support landscape mode on Android.\\n- Devices with high DPI screen might not work as expected.\\n- Video recording on MacOS is not supported.\\n\\n---\\n## Versions\\n\\n### Components and Packages\\n- AskUI Controller  \\n        - AskUI Controller: v0.2.0.0 Preview  \\n        - AskUI Legacy UI Controller: 0.13.0\\n- AskUI Runner: 0.1.4\\n- AskUI Development Environment (ADE)\\n- AskUI Development Kit (ADK)\\n\\n### 3rd Party Versions\\n- Node.JS: 21.0.0\\n- PowerShell 7.3.8\\n\\n---\\n\\n## Recommended First-Time User Journey\\n\\nTo ensure a smooth onboarding experience, follow these steps:\\n\\n1. **Download and Install:**\\n    - Download and install the installer\\n    - Run the installer.\\n2. **Initialization:**\\n    - Open the Command Prompt.\\n    - Type **`askui-shell`**.\\n3. **Configuration (First-Time Usage):**\\n    - Configure AskUI settings:\\n        1. Type **`AskUI-SetSettings -WorkspaceId <askui_workspace_id> -Token <askui_token>`**.\\n        2. (Optional for Proxy Users) Type **`AskUI-SetSettings -HttpProxy <http_proxy_address> -HttpsProxy <https_proxy_address>`**.\\n4. **Verify Settings:**\\n    - Type **`AskUI-ShowSettings`** to verify the configured settings.\\n5. **Create a New Project:**\\n    - Create a new project by typing **`AskUI-NewProject`**.\\n6. **Start AskUI Controller:**\\n    - _Note: You can skip this if you selected **Launch AskUI Controller** at the installation wizard._ \\n    - Start the AskUI Controller in background mode by typing **`AskUI-StartController -RunInBackground`**.\\n7. **Project Editing (Optional):**\\n    - Open the project directory and starts editing the project.\\n\\n:::info\\nYou have to disable mouse acceleration for the AskUI Controller to work properly!\\n:::\\n\\n8. **Run the Project:**\\n    - Run the project by typing **`AskUI-RunProject`**.\\n\\nBy following these steps, the user can efficiently set up AskUI Suite, configure essential settings, and seamlessly create and run projects."},{"id":"release-2024-01-31","metadata":{"permalink":"/release-notes/release-2024-01-31","source":"@site/blog/2024-01-31/2024-01-31.md","title":"2024.01.31 | OCR Model Enhancement","description":"Introduction","date":"2024-01-31T00:00:00.000Z","formattedDate":"January 31, 2024","tags":[{"label":"OCR","permalink":"/release-notes/tags/ocr"},{"label":"Performance Improvement","permalink":"/release-notes/tags/performance-improvement"}],"readingTime":0.69,"hasTruncateMarker":false,"authors":[{"name":"Leon Meier","title":"Head of Product","email":"leon.meier@askui.com","imageURL":"/img/leonmeier.jpeg","key":"leonmeier"}],"frontMatter":{"title":"2024.01.31 | OCR Model Enhancement","slug":"release-2024-01-31","authors":["leonmeier"],"tags":["OCR","Performance Improvement"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"2024.02.07 | AskUI Suite & Installer","permalink":"/release-notes/release-2024-02-07"},"nextItem":{"title":"2024.01.23","permalink":"/release-notes/release-2023-01-23"}},"content":"## Introduction\\n\\nWe\'re excited to announce a speed enhancement in our OCR model, reducing processing times by 300 milliseconds.\\n\\n### Feature Update\\n\\n**OCR Model Speed Improvement**\\n- Faster text recognition, significantly improving workflow efficiency.\\n- 1.62 sec down to 1.26 sec\\n\\n### Detailed Description\\n\\n#### OCR Model Speed Enhancement\\n\\nOur latest update has optimized the OCR model, achieving a notable speed increase while maintaining high accuracy.\\n\\n\\n```\\nModel: task=\'e2e_ocr\' architecture=\'easy_ocr\' version=\'1\' interface=\'im2txtbox\' use_case=\'faster\' tags=[]\\nAverage runtime: 1.2629041004180908\\nStandard deviation: 0.13027134152564313\\nMedian: 1.2297358512878418\\n```\\n\\n---\\n\\nWe are in the process of creating comprehensive documentation for our enhanced OCR model. We\'d love to hear from you about what specific aspects or features you\'d like to see covered in the documentation. Please share your thoughts and suggestions with us to ensure our documentation meets your needs and expectations.\\n\\n[Give Feedback >>>](https://6acn9cd9nzy.typeform.com/to/A3lFSEoU)"},{"id":"release-2023-01-23","metadata":{"permalink":"/release-notes/release-2023-01-23","source":"@site/blog/2024-01-15/2024-01-23.md","title":"2024.01.23","description":"Introduction","date":"2024-01-23T00:00:00.000Z","formattedDate":"January 23, 2024","tags":[{"label":"SSO","permalink":"/release-notes/tags/sso"},{"label":"Reporting","permalink":"/release-notes/tags/reporting"}],"readingTime":1.055,"hasTruncateMarker":false,"authors":[{"name":"Leon Meier","title":"Head of Product","email":"leon.meier@askui.com","imageURL":"/img/leonmeier.jpeg","key":"leonmeier"}],"frontMatter":{"title":"2024.01.23","slug":"release-2023-01-23","authors":["leonmeier"],"tags":["SSO","Reporting"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"2024.01.31 | OCR Model Enhancement","permalink":"/release-notes/release-2024-01-31"},"nextItem":{"title":"2023.12.13","permalink":"/release-notes/release-2023-12-13"}},"content":"## Introduction\\n\\nWe\'re introducing two significant enhancements to our platform: Single Sign-On (SSO) Integration for various identity providers and the AskUIXRayStepReporter for automation workflows in Xray for Jira. These features are designed to streamline the authentication process and improve test reporting, respectively.\\n\\n### Overview of Features\\n\\n1. **Single Sign-On Integration**\\n   - **Documentation**: [SSO Setup Guide](https://docs.askui.com/docs/general/Integrations/sso)\\n   - This feature allows seamless integration with various identity providers including Azure AD, Google Workspace, and Okta, enhancing security and simplifying user management.\\n\\n2. **AskUIXRayStepReporter**\\n   - **Documentation**: [AskUIXRayStepReporter Guide](https://docs.askui.com/docs/general/Integrations/reporting#askuixraystepreporter)\\n   - This feature integrates with Xray for Jira to provide detailed reporting of automation workflows, including screenshots and test statuses.\\n\\n### Detailed Descriptions\\n\\n#### Single Sign-On Integration\\n\\nOur new SSO Integration feature supports a wide range of identity providers. It offers enhanced security, unified login experiences, and streamlined user account management, significantly reducing the overhead of managing separate login credentials.\\n\\n#### AskUIXRayStepReporter\\n\\nThe AskUIXRayStepReporter is a powerful tool for reporting test automation results directly to Xray for Jira. It helps teams maintain comprehensive documentation of their test executions, complete with visual evidence and detailed status reports.\\n\\n---\\n\\nWe are excited to see how these new features will enhance your experience with our platform, providing greater convenience, security, and efficiency in your automated testing and user management processes."},{"id":"release-2023-12-13","metadata":{"permalink":"/release-notes/release-2023-12-13","source":"@site/blog/2023-12-13/annotate-detected-elements.md","title":"2023.12.13","description":"Introduction","date":"2023-12-13T00:00:00.000Z","formattedDate":"December 13, 2023","tags":[{"label":"Selection","permalink":"/release-notes/tags/selection"},{"label":"Annotation","permalink":"/release-notes/tags/annotation"}],"readingTime":0.7,"hasTruncateMarker":false,"authors":[{"name":"Leon Meier","title":"Head of Product","email":"leon.meier@askui.com","imageURL":"/img/leonmeier.jpeg","key":"leonmeier"}],"frontMatter":{"title":"2023.12.13","slug":"release-2023-12-13","authors":["leonmeier"],"tags":["Selection","Annotation"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"2024.01.23","permalink":"/release-notes/release-2023-01-23"}},"content":"## Introduction\\n\\nOn December 13, we introduced three new features: the **Visual Description Matching Method** for selecting diverse visual elements, **Targeted Annotations** for precise debugging, and **Precision Text Matching** for flexible text matching.\\n\\n## Overview\\n\\n1. **Visual Description Matching Method**\\n   - **Documentation**: [Matching Feature](https://docs.askui.com/docs/api/Element-Descriptions/matching)\\n   - This feature introduces the `matching()`method, allowing users to identify and interact with UI elements based solely on textual descriptions.\\n   - Enhances the flexibility of automated interactions with dynamic UIs.\\n\\n2. **Targeted Annotations**\\n   - **Documentation**: [Annotate DetectedElements](https://docs.askui.com/docs/api/Annotation/annotate)\\n   - Introduces an `AnnotationRequest` parameter in the `annotate()` method, allowing users to annotate specific elements retrieved from user interfaces by the `get()` method.\\n   - Simplifies debugging of UI element selection.\\n\\n3. **Precision Text Matching**\\n   - **Documentation**: [Adjustable Similarity Score](https://docs.askui.com/docs/api/Element-Descriptions/withtext)\\n   - Introduces an optional `similarity_score` parameter for the `.withText()` method.\\n   - Improves script resilience and minimizes mismatches in text-based automation."}]}')}}]);