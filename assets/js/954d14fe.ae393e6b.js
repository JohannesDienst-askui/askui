"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73267],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const s={sidebar_position:3},o="Create Run Reports",i={unversionedId:"general/Tutorials/askui-run-reports",id:"version-0.11.1/general/Tutorials/askui-run-reports",title:"Create Run Reports",description:"When using Jest as the runner framework for askui, it's often desired to have a report that summarizes the run result neatly. Although Jest comes with a default reporter, which prints out the report in the console directly, one could wish to have a discrete report, e.g as an XML or HTML, that can be stored and shared among team members.This article covers the usage of several reporter within Jest framework. Particularly, we will set up the jest-junit, jest-html-reporter, and jest-html-reporters.",source:"@site/versioned_docs/version-0.11.1/general/06-Tutorials/askui-run-reports.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/askui-run-reports",permalink:"/docs/0.11.1/general/Tutorials/askui-run-reports",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.1/general/06-Tutorials/askui-run-reports.md",tags:[],version:"0.11.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Automate Multiple Devices",permalink:"/docs/0.11.1/general/Tutorials/multi-device"},next:{title:"Setting up Android Devices",permalink:"/docs/0.11.1/general/Tutorials/setup-android"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"1. Prepare the askui Suite within Jest",id:"1-prepare-the-askui-suite-within-jest",level:2},{value:"2. Using jest-junit with askui",id:"2-using-jest-junit-with-askui",level:2},{value:"Using jest-html-reporter with askui",id:"using-jest-html-reporter-with-askui",level:2},{value:"2.3. Using jest-html-reporters with askui",id:"23-using-jest-html-reporters-with-askui",level:2},{value:"3. Conclusion",id:"3-conclusion",level:2}],u={toc:p};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-run-reports"},"Create Run Reports"),(0,a.kt)("p",null,"When using Jest as the runner framework for askui, it's often desired to have a report that summarizes the run result neatly. Although Jest comes with a default reporter, which prints out the report in the console directly, one could wish to have a discrete report, e.g as an XML or HTML, that can be stored and shared among team members.This article covers the usage of several reporter within Jest framework. Particularly, we will set up the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-junit"},"jest-junit"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-html-reporte"},"jest-html-reporter"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-html-reporters"},"jest-html-reporters"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"askui installed (follow the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.11.1/general/Getting%20Started/write-your-first-instruction"},"getting started"),")"),(0,a.kt)("li",{parentName:"ul"},"Jest (should be set up after following the getting started)"),(0,a.kt)("li",{parentName:"ul"},"For the demonstration, we will use the website ",(0,a.kt)("a",{parentName:"li",href:"https://authenticationtest.com/"},"Authentication Test")," as an automation target.")),(0,a.kt)("h2",{id:"1-prepare-the-askui-suite-within-jest"},"1. Prepare the askui Suite within Jest"),(0,a.kt)("p",null,"Let's say that, we want to use the askui Library to automate the login procedure in the example website.\nGo to the ",(0,a.kt)("a",{parentName:"p",href:"https://authenticationtest.com/"},"example website")," in your web browser, and run the code provided below to automate the login:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('Login',()=>{\n  xit('annotates', async ()=>{\n    await aui.annotateInteractively();\n  });\n  describe('Simple Form',()=>{\n    \n    it('should click the button',async ()=>{\n      await aui.moveMouseTo().button().contains().text('Simple Form Auth').exec();\n\n      await aui.mouseLeftClick().exec(); // This first click is to get the focus on the test app\n      await aui.mouseLeftClick().exec(); // Thereafter, we click the button\n    });\n\n    it('should type in the email address',async ()=>{\n      await aui.typeIn('simpleForm@authenticationtest.com').textfield().contains().text('E-mail Address').exec();\n    });\n\n    it('should type in the password',async ()=>{\n      await aui.typeIn('pa$$wOrd').textfield().contains().text('Password').exec();\n    });\n\n    it('should click the login button',async ()=>{\n      await aui.click().button().contains().text('Log In').exec();\n    });\n  });\n});\n")),(0,a.kt)("p",null,"If askui has run successfully, then you will see the default report printed on your console:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Console reporter example output.",src:n(47530).Z,width:"880",height:"302"})),(0,a.kt)("p",null,"Now let's try to use reporters other than the default one."),(0,a.kt)("h2",{id:"2-using-jest-junit-with-askui"},"2. Using jest-junit with askui"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"jest-junit")," is an npm library that creates an ",(0,a.kt)("strong",{parentName:"p"},"XML")," report file per test run in the format of the ",(0,a.kt)("strong",{parentName:"p"},"JUnit XML")," that can be understood by other development automation tools such as the Jenkins JUnit plugin. As JUnit is one of those unit test frameworks which were initially used by many Java applications as a unit test framework, ",(0,a.kt)("strong",{parentName:"p"},"jest-junit")," reporter facilitates a smooth integration of your test suite. Run this command to install the reporter within your project root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i jest-junit\n")),(0,a.kt)("p",null,"Then, go to ",(0,a.kt)("strong",{parentName:"p"},"test/jest.config.ts")," and change it as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  reporters: [\n    \"default\",\n    \"jest-junit\",\n  ],\n};\n\nexport default config;\n")),(0,a.kt)("p",null,"And run the askui suite again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("strong",{parentName:"p"},"jest-junit")," will save the ",(0,a.kt)("em",{parentName:"p"},".xml")," report in your project root directory, with the file name ",(0,a.kt)("strong",{parentName:"p"},"junit.xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<testsuites name="jest tests" tests="5" failures="0" errors="0" time="28.265">\n  <testsuite name="Login" errors="0" failures="0" skipped="1" timestamp="2023-01-15T17:33:04" time="28.24" tests="5">\n    <testcase classname="Login annotates" name="Login annotates" time="0">\n      <skipped/>\n    </testcase>\n    <testcase classname="Login Simple Form should click the button" name="Login Simple Form should click the button" time="7.597">\n    </testcase>\n    <testcase classname="Login Simple Form should type in the email address" name="Login Simple Form should type in the email address" time="5.468">\n    </testcase>\n    <testcase classname="Login Simple Form should type in the password" name="Login Simple Form should type in the password" time="5.356">\n    </testcase>\n    <testcase classname="Login Simple Form should click the login button" name="Login Simple Form should click the login button" time="4.937">\n    </testcase>\n  </testsuite>\n</testsuites>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"jest-junit")," can be configured to format the resulting ",(0,a.kt)("em",{parentName:"p"},".xml"),". Try to change the ",(0,a.kt)("strong",{parentName:"p"},"test/jest.config.ts"),", and run the code again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Config } from \'@jest/types\';\n\nconst config: Config.InitialOptions = {\n  preset: \'ts-jest\',\n  testEnvironment: \'node\',\n  setupFilesAfterEnv: [\'./helper/jest.setup.ts\'],\n  sandboxInjectedGlobals: [\n    \'Math\',\n  ],\n  reporters: [\n    "default",\n    [\'jest-junit\',{\n      "suiteName": "login test suite",\n      "outputDirectory": "reports",\n      "outputName": "login-test",\n      "uniqueOutputName":"true",\n      "ancestorSeparator": " \u203a "\n    }]\n  ],\n};\n\nexport default config;\n')),(0,a.kt)("p",null,"To see more options for the configuration, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jest-community/jest-junit#configuration"},"official README")," of ",(0,a.kt)("strong",{parentName:"p"},"jest-junit"),"."),(0,a.kt)("h2",{id:"using-jest-html-reporter-with-askui"},"Using jest-html-reporter with askui"),(0,a.kt)("p",null,"If we want to have a more friendly and readable report than XML, we could give ",(0,a.kt)("strong",{parentName:"p"},"jest-html-reporter")," a try. This reporter generates an HTML file that, if opened in a web browser, visualizes the run result in a much more human-friendly way.\u200d"),(0,a.kt)("p",null,"Run the command below to install ",(0,a.kt)("strong",{parentName:"p"},"jest-html-reporter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i jest-html-reporter\n")),(0,a.kt)("p",null,"Then, go to ",(0,a.kt)("strong",{parentName:"p"},"test/jest.config.ts")," and change it as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Config } from \'@jest/types\';\n\nconst config: Config.InitialOptions = {\n  preset: \'ts-jest\',\n  testEnvironment: \'node\',\n  setupFilesAfterEnv: [\'./helper/jest.setup.ts\'],\n  sandboxInjectedGlobals: [\n    \'Math\',\n  ],\n  reporters: [\n    "default", [\n      "jest-html-reporter", {\n        "outputPath": "./reports/test-report.html",\n        "pageTitle": "Automation Test with askui",\n        "includeFailureMsg": true\n      }\n    ],\n  ],\n};\n\nexport default config;\n')),(0,a.kt)("p",null,"Again, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hargne/jest-html-reporter#configuration"},"official README")," to see more options for the configuration."),(0,a.kt)("p",null,"Then let's try to run the askui suite again, but to test the new reporter, let's make something fail. Insert this line within any workflow in the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'//... some code\n\nthrow new Error("I\'m an error!");\n\n//... some more code\n')),(0,a.kt)("p",null,"After running the test suite again, you will have an HTML file reports/test-report.html in your project directory. Open the HTML file in your web browser:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Output of jest-html-reporter",src:n(89610).Z,width:"2000",height:"1416"})),(0,a.kt)("h2",{id:"23-using-jest-html-reporters-with-askui"},"2.3. Using jest-html-reporters with askui"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-html-reporters"},"jest-html-reporters")," is another reporter that generates an HTML that summarizes the run result within Jest. It might be similar to the above-mentioned reporter. But this one, ",(0,a.kt)("strong",{parentName:"p"},"jest-html-reporters"),", has a feature that can ",(0,a.kt)("strong",{parentName:"p"},"attach an image to the report"),", thus can assist your debugging process, especially for UI automations."),(0,a.kt)("p",null,"Run the command below to install the ",(0,a.kt)("strong",{parentName:"p"},"jest-html-reporter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i jest-html-reporters\n")),(0,a.kt)("p",null,"Now let's configure the reporter in ",(0,a.kt)("strong",{parentName:"p"},"jest.config.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import type { Config } from \'@jest/types\';\n\nconst config: Config.InitialOptions = {\n  preset: \'ts-jest\',\n  testEnvironment: \'node\',\n  setupFilesAfterEnv: [\'./helper/jest.setup.ts\'],\n  sandboxInjectedGlobals: [\n    \'Math\',\n  ],\n  "reporters": [\n    "default",\n    ["jest-html-reporters", {\n      "publicPath": "./html-report",\n      "filename": "report.html",\n      "openReport": true,\n      "expand": true,\n      "pageTitle": "My Test Report",\n    }]\n  ]\n};\n\nexport default config;\n')),(0,a.kt)("p",null,"The options used in this configuration are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"publicPath"),": The basepath for the saved report file as a string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"filename"),": The file name for the saved report file as a string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"openReport"),": If true, it will open the generated HTML report after the run is finished."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"expand"),": If true, it will expand all the dropdown list in the table contained in the report."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pageTitle"),": The header title for the HTML report.")),(0,a.kt)("p",null,"The options used in the above configuration are those I found useful most of the time. But since there are more options available, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hazyzh/jest-html-reporters#available-options"},"official doc")," if you feel keen to use it."),(0,a.kt)("p",null,"The feature of the ",(0,a.kt)("strong",{parentName:"p"},"jest-html-reporters")," that could be nicely combined with ",(0,a.kt)("strong",{parentName:"p"},"askui")," is the feature to attach images to the report, since askui, as a UI automation tool, functions on top of the screenshot of the given display."),(0,a.kt)("p",null,"To use this feature, we import two helper functions from the reporter's package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { aui } from './helper/jest.setup';\nimport { addAttach, addMsg } from 'jest-html-reporters/helper';\n\ndescribe('Login',()=>{\n  describe('Simple Form',()=>{\n    it('should click the button',async ()=>{\n\n      // First, get all the information from the annotation\n      // This will also save an interactive HTML file to the 'report/' folder\n      const annotation = await aui.annotate();\n\n      // The screenshot is contained as a string in 'base64' format\n      // Create a buffer with the base64 image\n      let buf = Buffer.from(annotation.image.split('base64,')[1], 'base64');\n\n      // Attach the image to the report.\n      await addAttach({\n          attach: buf,\n          description: '',\n      });\n\n      // We filter only the text elements, and add it to the reporter\n      const textonly = annotation.detected_elements.filter((e) => e.name==\"text\");\n\n      // Attach the detected text elements to the reporter\n      await addMsg({\n          message: JSON.stringify(textonly, undefined, '\\t'),\n          context:''\n      });\n\n      await aui.moveMouseTo().button().contains().text('Simple Form Auth').exec();\n      await aui.mouseLeftClick().exec(); // This first click is to get the focus on the test app\n      await aui.mouseLeftClick().exec(); // Thereafter, we click the button\n    });\n  });\n});\n")),(0,a.kt)("p",null,"After running the code, your web browser will open and show the generated report. Click on the ",(0,a.kt)("strong",{parentName:"p"},"Info")," button on the right end of the table:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jest-html-reporters report.",src:n(47209).Z,width:"1478",height:"936"})),(0,a.kt)("p",null,"It will show the attached image beside the text elements we've added:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jest-html-reporters report with image for a single test.",src:n(44722).Z,width:"4976",height:"2644"})),(0,a.kt)("h2",{id:"3-conclusion"},"3. Conclusion"),(0,a.kt)("p",null,"Although we covered only two ready-made Jest reporters in this article, reporters in Jest are fully configurable and customizable. To properly configure your pipeline, you maybe could wish to have a custom reporter that fits nicely into your pipeline. As askui provides a well-suited TypeScript Library, combining it with jest and proper reporters can become a huge benefit to scaffolding a robust automation."),(0,a.kt)("p",null,"If you got any issues while following this tutorial, don't hesitate to ask our ",(0,a.kt)("a",{parentName:"p",href:"https://bit.ly/3T2je6C"},"Discord Community"),"!"))}h.isMDXComponent=!0},47530:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/askui-run-reports-console-reporter-02624c89dba4b0a37187c18a2ae6274b.png"},89610:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/askui-run-reports-jest-html-reporter-2cfc26a816f050e1e0ef1d2cbd4c56b7.png"},47209:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/askui-run-reports-jest-html-reporters1-35b12d77e0587604cb611240eb752eb6.png"},44722:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/askui-run-reports-jest-html-reporters2-2a5bc880d5351f18dba47c9b2221f587.png"}}]);