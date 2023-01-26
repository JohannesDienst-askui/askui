"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95563],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(25773),a=(n(27378),n(35318));const r={sidebar_position:3},o="Write Your First Automation",s={unversionedId:"general/Getting Started/writing-your-first-test",id:"version-0.6.0/general/Getting Started/writing-your-first-test",title:"Write Your First Automation",description:"What you will learn",source:"@site/versioned_docs/version-0.6.0/general/02-Getting Started/writing-your-first-test.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/writing-your-first-test",permalink:"/docs/0.6.0/general/Getting Started/writing-your-first-test",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.6.0/general/02-Getting Started/writing-your-first-test.md",tags:[],version:"0.6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Installing askui",permalink:"/docs/0.6.0/general/Getting Started/getting-started"},next:{title:"Configure Test Frameworks",permalink:"/docs/0.6.0/general/Best Practice/configure_test_framework"}},l={},u=[{value:"Quickstart",id:"quickstart",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Understand the Generated Code",id:"understand-the-generated-code",level:3},{value:"Run",id:"run",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Where to Go Next?",id:"where-to-go-next",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-your-first-automation"},"Write Your First Automation"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"What you will learn"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Initialize your first automation suite"),(0,a.kt)("li",{parentName:"ul"},"Configure your credentials (workspace id and access token)"),(0,a.kt)("li",{parentName:"ul"},"Understand the generated automation case"),(0,a.kt)("li",{parentName:"ul"},"Run your first automation"),(0,a.kt)("li",{parentName:"ul"},"Troubleshooting any issues"),(0,a.kt)("li",{parentName:"ul"},"Where to go next"))),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"To create your first automation suite, enter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx askui init\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This will create"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),": ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"a json file specifying the root files and the compiler options required to compile the project"),","),(0,a.kt)("li",{parentName:"ul"},"a folder called ",(0,a.kt)("inlineCode",{parentName:"li"},"test")," which includes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test/my-first-askui-test-suite.test.ts"),": an example test with askui,"),(0,a.kt)("li",{parentName:"ul"},"a folder called ",(0,a.kt)("inlineCode",{parentName:"li"},"helper")," which contains the ",(0,a.kt)("inlineCode",{parentName:"li"},"jest.setup.ts")," file for setting up the test environment"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"jest.config.ts")," configuration file"))))),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Generate credentials through the ",(0,a.kt)("a",{parentName:"p",href:"https://app.v2.askui.com/"},"user portal")," (usage is free!). Please see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.6.0/general/askui%20User%20Portal/signup"},"documentation")," on signing up and generating credentials."),(0,a.kt)("p",null,"Then, go to your ",(0,a.kt)("inlineCode",{parentName:"p"},"helper/jest.setup.ts")," and add the configuration for your ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace id")," and your ",(0,a.kt)("inlineCode",{parentName:"p"},"access token")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"UiControlClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n")),(0,a.kt)("h3",{id:"understand-the-generated-code"},"Understand the Generated Code"),(0,a.kt)("h3",{id:"run"},"Run"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Before executing the automation, open ",(0,a.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts")," on your main display. The code in this file is shown below. It contains the text on ",(0,a.kt)("strong",{parentName:"p"},"line 12")," for which the AI will search."),(0,a.kt)("p",{parentName:"admonition"},"Some users have reported instability running automation on macOS with external displays and/or ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac"},"virtual desktops (called Spaces)"),". If you experience similar issues, please disconnect external displays and close virtual desktops, or see ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.6.0/general/Continuous%20Integration/askui-ui-controller-docker-images"},"documentation on running automation in Docker"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should click on text', async () => {\n    // Run this to see what askui annotates\n    await aui.annotateInteractively();\n\n    await aui.moveMouse(0, 0).exec();\n    await aui\n      .click()\n      .text()\n      .withText('Click on this text right here!')\n      .exec();\n  });\n});\n")),(0,a.kt)("p",null,"To execute the automation suite, enter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts \n")),(0,a.kt)("p",null,"You should now see the automation suite being executed inside the shell and the following things happening on your main display:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Line 6"),": Show an interactively annotated version of your main display with red bounding boxes around the annotated elements. When you press ",(0,a.kt)("inlineCode",{parentName:"li"},"ESC")," on your keyboard the automation will resume.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What is Interactive Annotation?"),"The interactive annotation command requests the askui server to take a screenshot of the specified screen. Then, an AI model is used to annotate the image. After that, a full-screen window appears. Inside this window, boundary boxes enclosing the UI elements detected are going to appear. You can hover over the boxes to see the boxes' specifications, e.g., text detected, element type etc."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Line 8"),": Your mouse pointer moves to the upper left corner of your main display."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Line 12"),": Your mouse pointer comes back to click on the text ",(0,a.kt)("inlineCode",{parentName:"li"},"Click on this text right here!")," in your automation file.")),(0,a.kt)("p",null,"This is what it should look like on your display:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Gif showing first test execution with Visual Studio Code on display.",src:n(73025).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"\ud83c\udf89 Congratulations! You just executed your first automation suite using askui."),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"For problems with the execution, take a look at our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.askui.com/docs/general/Troubleshooting/"},"Troubleshooting page")),(0,a.kt)("p",null,"You will find the following pages there:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.6.0/general/Troubleshooting/linux"},"Linux Wayland window manager and libfuse2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.6.0/general/Troubleshooting/proxy"},"askui behind a corporate proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.6.0/general/Troubleshooting/mac-os"},"macOS missing permissions for UiController"))),(0,a.kt)("h3",{id:"where-to-go-next"},"Where to Go Next?"),(0,a.kt)("p",null,"Writing powerful UI automations with askui needs some practice. We recommend you head over to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.6.0/general/Best%20Practice/selecting_ui_elements"},"Selecting UI Elements page")," to learn more about how to select elements based on visual properties."),(0,a.kt)("p",null,"If you are looking for inspiration, the ",(0,a.kt)("strong",{parentName:"p"},"Tutorials")," section will provide you with food for thought. Why not ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.6.0/general/Tutorials/google-cat-search"},"Search for a Cat Image")," as a start?"),(0,a.kt)("p",null,"Also our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/KFYJ5xuyBA"},"Discord-Community")," is there to help you out!"))}c.isMDXComponent=!0},73025:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/first_test_execution-4e8cea89d5ba4b9ee433433c2c032226.gif"}}]);