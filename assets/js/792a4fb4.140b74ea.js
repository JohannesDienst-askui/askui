"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81414],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={sidebar_position:3,title:"Reporting"},i=void 0,l={unversionedId:"general/Integrations/reporting",id:"general/Integrations/reporting",title:"Reporting",description:"We provide a package @askui/askui-reporters with reporters ready-to-use into your AskUI runs. Check out the repository for more details.",source:"@site/docs/general/05-Integrations/reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/reporting",permalink:"/docs/next/general/Integrations/reporting",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/05-Integrations/reporting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Reporting"},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/docs/next/general/Integrations/containers"},next:{title:"Device Farms",permalink:"/docs/next/general/Integrations/device-farms"}},s={},p=[{value:"Installation",id:"installation",level:3},{value:"AskUIAllureStepReporter",id:"askuiallurestepreporter",level:3},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>jest.setup.ts</code>",id:"configure-beforeeach-and-aftereach-in-jestsetupts",level:4},{value:"Enable the Test Environment <code>@askui/jest-allure-circus</code> in <code>jest.config.ts</code>",id:"enable-the-test-environment-askuijest-allure-circus-in-jestconfigts",level:4},{value:"AskUIJestHtmlStepReporter",id:"askuijesthtmlstepreporter",level:2},{value:"Install <code>ffmpeg</code> On Your System",id:"install-ffmpeg-on-your-system",level:3},{value:"Enable Reporter in <code>jest.setup.ts</code>",id:"enable-reporter-in-jestsetupts",level:3},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>jest.setup.ts</code>",id:"configure-beforeeach-and-aftereach-in-jestsetupts-1",level:3},{value:"Enable the Jest-Html-Reporters in <code>jest.config.ts</code>",id:"enable-the-jest-html-reporters-in-jestconfigts",level:3},{value:"AskUIAnnotationStepReporter",id:"askuiannotationstepreporter",level:2},{value:"Enable and Configure the AskUIAnnotationStepReporter in <code>jest.setup.ts</code>",id:"enable-and-configure-the-askuiannotationstepreporter-in-jestsetupts",level:3},{value:"Enable Multiple Reporters",id:"enable-multiple-reporters",level:2},{value:"Implement Your Own Reporter",id:"implement-your-own-reporter",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We provide a package ",(0,a.kt)("inlineCode",{parentName:"p"},"@askui/askui-reporters")," with reporters ready-to-use into your AskUI runs. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/askui/askui-reporters"},"Check out the repository")," for more details."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"@askui/askui-reporters")," as a dev-dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @askui/askui-reporters\n")),(0,a.kt)("h3",{id:"askuiallurestepreporter"},"AskUIAllureStepReporter"),(0,a.kt)("p",null,"Add the reporter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"UiControlClient")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AskUIAllureStepReporter } from \"@askui/askui-reporters\";\n...\n  const reporterConfig: ReporterConfig = {\n    withScreenshots: 'always', // See below for possible values\n    withDetectedElements: 'always', // See below for possible values\n  }\n\n  aui = await UiControlClient.build({\n    reporter: new AskUIAllureStepReporter(\n      reporterConfig\n    )\n  });\n...\n")),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReporterConfig")," object to the reporter to configure the level of detail for screenshots and detected elements."),(0,a.kt)("p",null,"There are four possible values (See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/askui/askui-reporters/tree/main#allure-reporter"},"the @askui/askui-reporters README for a detailed explanation"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onFailure (Default for both)"),(0,a.kt)("li",{parentName:"ul"},"required"),(0,a.kt)("li",{parentName:"ul"},"begin"),(0,a.kt)("li",{parentName:"ul"},"always")),(0,a.kt)("h4",{id:"configure-beforeeach-and-aftereach-in-jestsetupts"},"Configure ",(0,a.kt)("inlineCode",{parentName:"h4"},"beforeEach()")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"afterEach()")," in ",(0,a.kt)("inlineCode",{parentName:"h4"},"jest.setup.ts")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UiControlClient")," retrieves the videos and images from your ",(0,a.kt)("inlineCode",{parentName:"p"},"UiController"),". You have to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterEach()")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.ts")," to start the recording and then add it to your report:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Allure Reporter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"beforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIAllureStepReporter.attachVideo(video);\n});\n")),(0,a.kt)("h4",{id:"enable-the-test-environment-askuijest-allure-circus-in-jestconfigts"},"Enable the Test Environment ",(0,a.kt)("inlineCode",{parentName:"h4"},"@askui/jest-allure-circus")," in ",(0,a.kt)("inlineCode",{parentName:"h4"},"jest.config.ts")),(0,a.kt)("p",null,"Install `@askui/jest-allure-circus`` environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @askui/jest-allure-circus\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  // highlight-start\n  // Enables the test environment for Allure\n  testEnvironment: '@askui/jest-allure-circus',\n  // highlight-end\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n")),(0,a.kt)("h2",{id:"askuijesthtmlstepreporter"},"AskUIJestHtmlStepReporter"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Due to restrictions of ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-html-reporters")," you can either have screenshots or video with this reporter but not both at the same time. For screenshots omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterEach()")," hooks in ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.ts"),". For video do not configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"reporter")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"UiControlClient"),".")),(0,a.kt)("h3",{id:"install-ffmpeg-on-your-system"},"Install ",(0,a.kt)("inlineCode",{parentName:"h3"},"ffmpeg")," On Your System"),(0,a.kt)("p",null,"To use this reporter you have to have ",(0,a.kt)("a",{parentName:"p",href:"http://www.ffmpeg.org/"},"ffmpeg")," installed on your system (including all necessary encoding libraries like ",(0,a.kt)("inlineCode",{parentName:"p"},"libmp3lame")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"libx264"),")."),(0,a.kt)("p",null,"Please follow the ",(0,a.kt)("a",{parentName:"p",href:"http://www.ffmpeg.org/download.html"},"installation instructions")," for your system."),(0,a.kt)("h3",{id:"enable-reporter-in-jestsetupts"},"Enable Reporter in ",(0,a.kt)("inlineCode",{parentName:"h3"},"jest.setup.ts")),(0,a.kt)("p",null,"Add the reporter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"UiControlClient")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Do not forget this import at the start of the file!\nimport { AskUIJestHtmlStepReporter } from \"@askui/askui-reporters\";\n...\n  aui = await UiControlClient.build({\n    reporter: new AskUIJestHtmlStepReporter({\n      withScreenshots: 'always' as const, // See below for possible values\n      withDetectedElements: 'always' as const, // See below for possible values\n    })\n  });\n...\n")),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReporterConfig")," object to the reporter to configure the level of detail for screenshots and detected elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onFailure (Default for both)"),(0,a.kt)("li",{parentName:"ul"},"required"),(0,a.kt)("li",{parentName:"ul"},"begin"),(0,a.kt)("li",{parentName:"ul"},"always")),(0,a.kt)("h3",{id:"configure-beforeeach-and-aftereach-in-jestsetupts-1"},"Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"beforeEach()")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"afterEach()")," in ",(0,a.kt)("inlineCode",{parentName:"h3"},"jest.setup.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import path from "path";\nimport { AskUIJestHtmlStepReporter } from "@askui/askui-reporters";\n\nbeforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIJestHtmlStepReporter.attachVideo(video);\n});\n')),(0,a.kt)("h3",{id:"enable-the-jest-html-reporters-in-jestconfigts"},"Enable the Jest-Html-Reporters in ",(0,a.kt)("inlineCode",{parentName:"h3"},"jest.config.ts")),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-html-reporters")," environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jest-html-reporters\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Config } from "@jest/types";\n\nconst config: Config.InitialOptions = {\n  preset: "ts-jest",\n  testEnvironment: "node",\n  setupFilesAfterEnv: ["./helper/jest.setup.ts"],\n  sandboxInjectedGlobals: ["Math"],\n  reporters: ["default", "jest-html-reporters"],\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n')),(0,a.kt)("h2",{id:"askuiannotationstepreporter"},"AskUIAnnotationStepReporter"),(0,a.kt)("h3",{id:"enable-and-configure-the-askuiannotationstepreporter-in-jestsetupts"},"Enable and Configure the AskUIAnnotationStepReporter in ",(0,a.kt)("inlineCode",{parentName:"h3"},"jest.setup.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { AskUIAnnotationStepReporter, AnnotationLevel } from \'@askui/askui-reporters\';\n...\n  aui = await UiControlClient.build({\n    ...\n    reporter: new AskUIAnnotationStepReporter(\n        // AnnotationLevel.ON_FAILURE, /* Uncomment and change to AnnotationLevel.ALL for reporting at every step */\n        // folderPath: "report", /* Uncomment and change property for different folder */\n        // fileNameSuffix: "_testStep_annotation" /* Uncomment and change property for different file name suffix */\n      ),\n  });\n...\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AnnotationLevel")," is implemented as an enum. You have two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ON_FAILURE")," (Default Value): After a step failed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALL"),": After every step")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"folderPath")," is the folder name, relative to the root of your project, the report-files will be saved to."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default value: ",(0,a.kt)("inlineCode",{parentName:"li"},"report"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fileNameSuffix"),": The suffix for every report-file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The generated report-filename has the following name convention:\n",(0,a.kt)("strong",{parentName:"li"}," ",(0,a.kt)("inlineCode",{parentName:"strong"},"{YYYYYYMMDDTHHmmsssss}_{passed|failed}{fileNameSuffix}.html"))," Example: 20230922072153421_failed_testStep_annotation.html")),(0,a.kt)("h2",{id:"enable-multiple-reporters"},"Enable Multiple Reporters"),(0,a.kt)("p",null,"You can enable multiple reporters simultaneously by passing an array of reporters in the ",(0,a.kt)("inlineCode",{parentName:"p"},"reporter")," property like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"aui = await UiControlClient.build({\n    reporter: [\n        new AskUIAnnotationStepReporter(\n          AnnotationLevel.ALL,\n          \"annotation_report\",\n          \"_annotation\"\n        ),\n        new AskUIJestHtmlStepReporter({\n          withScreenshots: 'always' as const, // See below for possible values\n          withDetectedElements: 'always' as const, // See below for possible values\n        })\n      ],\n  });\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"}," The ",(0,a.kt)("inlineCode",{parentName:"p"},"testEnvironment")," setting has to be the ",(0,a.kt)("strong",{parentName:"p"},"SAME")," for all reporters in the array! The following table shows which reporters can be enabled together.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:"center"},"AskUIAllureStepReporter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"AskUIJestHtmlStepReporter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"AskUIAnnotationStepReporter"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AskUIAllureStepReporter"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AskUIJestHtmlStepReporter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AskUIAnnotationStepReporter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"implement-your-own-reporter"},"Implement Your Own Reporter"),(0,a.kt)("p",null,"To write your own reporter you have to implement AskUI's ",(0,a.kt)("inlineCode",{parentName:"p"},"Reporter")," interface. It offers three optional methods you can overwrite to adapt to your specific reporter framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Reporter {\n    config?: ReporterConfig;\n    onStepBegin?(step: Step): Promise<void>;\n    onStepRetry?(step: Step): Promise<void>;\n    onStepEnd?(step: Step): Promise<void>;\n}\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/askui/askui-reporters/blob/main/src/allure/askui-allure-step-reporter.ts"},"Example implementation for Allure")," on how that is used to extract the screenshot before/after each step and how to record a video of each step."))}d.isMDXComponent=!0}}]);