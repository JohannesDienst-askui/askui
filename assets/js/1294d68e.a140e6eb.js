"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78196],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(25773),a=(n(27378),n(35318));const o={sidebar_position:3},r="Write Your First Instruction",l={unversionedId:"general/Getting Started/write-your-first-instruction",id:"version-0.10.5/general/Getting Started/write-your-first-instruction",title:"Write Your First Instruction",description:"What you will learn",source:"@site/versioned_docs/version-0.10.5/general/02-Getting Started/write-your-first-instruction.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/write-your-first-instruction",permalink:"/docs/0.10.5/general/Getting Started/write-your-first-instruction",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/02-Getting Started/write-your-first-instruction.md",tags:[],version:"0.10.5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Installing askui",permalink:"/docs/0.10.5/general/Getting Started/getting-started"},next:{title:"How askui Works",permalink:"/docs/0.10.5/general/Guides/guide-how-askui-works"}},s={},u=[{value:"Initialization",id:"initialization",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run Your First Instruction",id:"run-your-first-instruction",level:2},{value:"Step 1: Execute an (Interactive) Annotation",id:"step-1-execute-an-interactive-annotation",level:3},{value:"Step 2: Extract the Element-Description",id:"step-2-extract-the-element-description",level:3},{value:"Step 3: Execute an Instruction",id:"step-3-execute-an-instruction",level:3},{value:"What other instructions are available?",id:"what-other-instructions-are-available",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"askui moves to the wrong element?",id:"askui-moves-to-the-wrong-element",level:3},{value:"Technical",id:"technical",level:3},{value:"Where to Go Next?",id:"where-to-go-next",level:2},{value:"Tutorials",id:"tutorials",level:3},{value:"Guides",id:"guides",level:3},{value:"Annotation",id:"annotation",level:3},{value:"Continuous Integration",id:"continuous-integration",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-your-first-instruction"},"Write Your First Instruction"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"What you will learn"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Initialize your first askui suite"),(0,a.kt)("li",{parentName:"ul"},"Configure your credentials (workspace id and access token)"),(0,a.kt)("li",{parentName:"ul"},"Run your first instruction"),(0,a.kt)("li",{parentName:"ul"},"Troubleshooting any issues"),(0,a.kt)("li",{parentName:"ul"},"Where to go next"))),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"To create your first askui suite, enter into your terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx askui init\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"This will create"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),": ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"a json file specifying the root files and the compiler options required to compile the project"),","),(0,a.kt)("li",{parentName:"ul"},"a folder called ",(0,a.kt)("inlineCode",{parentName:"li"},"test")," which includes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test/my-first-askui-test-suite.test.ts"),": an example test with askui,"),(0,a.kt)("li",{parentName:"ul"},"a folder called ",(0,a.kt)("inlineCode",{parentName:"li"},"helper")," which contains the ",(0,a.kt)("inlineCode",{parentName:"li"},"jest.setup.ts")," file for setting up the test environment"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"jest.config.ts")," configuration file"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Generate credentials through the ",(0,a.kt)("a",{parentName:"p",href:"https://app.v2.askui.com/"},"user portal")," (usage is free!)."),(0,a.kt)("p",null,"Then, go to your ",(0,a.kt)("inlineCode",{parentName:"p"},"helper/jest.setup.ts")," and add the configuration for your ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace id")," and your ",(0,a.kt)("inlineCode",{parentName:"p"},"access token")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"UiControlClient"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n")),(0,a.kt)("h2",{id:"run-your-first-instruction"},"Run Your First Instruction"),(0,a.kt)("p",null,"Writing and executing an instruction in askui can be done in three steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Execute an (interactive) annotation."),(0,a.kt)("li",{parentName:"ol"},"Extract from the (interactive) annotation the element-description which identifies target element."),(0,a.kt)("li",{parentName:"ol"},"Execute an instruction to control the keyboard and mouse to take action on target element.")),(0,a.kt)("h3",{id:"step-1-execute-an-interactive-annotation"},"Step 1: Execute an (Interactive) Annotation"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Before executing the instructions, open ",(0,a.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts")," on your main display. The code in this file is shown below."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Windows Users")),(0,a.kt)("p",{parentName:"admonition"},"Please use ",(0,a.kt)("inlineCode",{parentName:"p"},"annotate()")," as outlined in the code below. The interactive annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"aui.annotateInteractively()")," currently leads to an error on Windows."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"macOS Users")),(0,a.kt)("p",{parentName:"admonition"},"Some users have reported instability running askui on macOS with external displays and/or ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac"},"virtual desktops (called Spaces)"),". If you experience similar issues, please disconnect external displays and close virtual desktops, or see ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.10.5/general/Continuous%20Integration/askui-ui-controller-docker-images"},"documentation on running askui in Docker"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should generate an (interactive) annotation', async () => {\n\n    // For Windows users:\n    // Use annotate() to create an annotated HTML file\n    // of your screen that is saved under <project_root>/report\n    await aui.annotate();\n\n    // Uncomment for macOS and Linux\n    // Delete the lines above to not trigger annotate()\n    // await aui.annotateInteractively();\n  });\n});\n")),(0,a.kt)("p",null,"To execute the instructions, enter into your terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts \n")),(0,a.kt)("p",null,"A few seconds later an (interactive) annotation will be generated."),(0,a.kt)("p",null,"If you\u2019d like a longer explanation as to what an (interactive) annotation is, read about here."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/0.10.5/general/Tooling/annotation"},"Explanation of (Interactive) Annotations")),(0,a.kt)("h3",{id:"step-2-extract-the-element-description"},"Step 2: Extract the Element-Description"),(0,a.kt)("p",null,"Extract from the (interactive) annotation the element-description which identifies target element.\nLocate any element you\u2019d like the mouse to move to and copy the element-description by clicking on it:\nClicking an element will copy this element-description, which we can then use in the step 3."),(0,a.kt)("p",null,"To close out the interactive annotation, use ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD/CTRL + W")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ESC"),"."),(0,a.kt)("h3",{id:"step-3-execute-an-instruction"},"Step 3: Execute an Instruction"),(0,a.kt)("p",null,"Add this instruction code block to the describe block in your test file just under your (interactive) annotation instruction, taking note to also add your copied element-description from the annotation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"it('should click on my element', async () => {\n  await aui\n    .click()\n    // <INSERT YOUR COPIED ELEMENT-DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>\n    // .exec();\n});\n")),(0,a.kt)("p",null,"Be sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"xit")," out the (interactive) annotation, as that is no longer needed. The final version should look like this, taking exception of course to whatever element-description text you chose:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',title:'"test/my-first-askui-test-suite.test.ts"',showLineNumbers:!0},"describe('jest with askui', () => {\n\n  xit('should generate an (interactive) annotation', async () => {\n    // For Windows users:\n    // Use annotate() to create an annotated HTML file\n    // of your screen that is saved under <project_root>/report\n    await aui.annotate();\n\n    // Uncomment for macOS and Linux\n    // Delete the lines above to not trigger annotate()\n    // await aui.annotateInteractively();\n  });\n\n  it('should click on my element', async () => {\n    await aui\n      .click()\n      .text(\"node_nodu\")\n      .exec();\n  });\n});\n")),(0,a.kt)("p",null,"As before, run your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts ")),(0,a.kt)("p",null,"You should see askui take over your mouse, mouse over the element you chose and click."),(0,a.kt)("p",null,"Congratulations! You\u2019ve just built your first instruction using askui. \ud83c\udf89"),(0,a.kt)("h3",{id:"what-other-instructions-are-available"},"What other instructions are available?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/api/API/table-of-contents#actions"},"Actions API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/api/API/table-of-contents#element-descriptions"},"Element-Descriptions API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/api/API/table-of-contents#relations"},"Relations API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/api/API/table-of-contents#checks"},"Checks API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/api/API/table-of-contents#getters"},"Getters API"))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"askui-moves-to-the-wrong-element"},"askui moves to the wrong element?"),(0,a.kt)("p",null,"Have a look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.10.5/general/Guides/guide-relational-element-descriptions"},"Relational Selectors")," to select elements via a visual relation instead."),(0,a.kt)("h3",{id:"technical"},"Technical"),(0,a.kt)("p",null,"For technical problems with the execution, take a look at our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.askui.com/docs/general/Troubleshooting/"},"Troubleshooting page")),(0,a.kt)("p",null,"You will find the following pages there:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Troubleshooting/linux"},"Linux Wayland window manager and libfuse2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Troubleshooting/proxy"},"askui behind a corporate proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Troubleshooting/mac-os"},"macOS missing permissions for UiController"))),(0,a.kt)("h2",{id:"where-to-go-next"},"Where to Go Next?"),(0,a.kt)("p",null,"Also our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/KFYJ5xuyBA"},"Discord-Community")," is there to help you out!"),(0,a.kt)("h3",{id:"tutorials"},"Tutorials"),(0,a.kt)("p",null,"If you are unsure on how/what to do yet, try to follow our tutorials. They cover some of the typical use cases of askui in depth:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Tutorials/google-cat-search"},"Search Image in Google")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Tutorials/shop-demo"},"Login at an Online Shop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Tutorials/spotify-tutorial"},"Automate Spotify on Desktop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Tutorials/zip-images-upload-googledrive-windows"},"Upload a Zip File to Google Drive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Tutorials/android-search-in-browser"},"Automate an Android App"))),(0,a.kt)("h3",{id:"guides"},"Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Guides/guide-relational-element-descriptions"},"Selecting an Element by Visual Relation")," to understand the ",(0,a.kt)("em",{parentName:"li"},"Relational Selectors")," in askui."),(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Guides/guide-text-element-descriptions"},"Selecting an Element with Text")," to learn about ",(0,a.kt)("em",{parentName:"li"},"Text Element-Descriptions")," in askui."),(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Guides/recommended-practices"},"Recommended Practices"),".")),(0,a.kt)("h3",{id:"annotation"},"Annotation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Tooling/annotation"},"Debug with Annotation")," to learn how to use the ",(0,a.kt)("strong",{parentName:"li"},"Image Annotation Feature"),".")),(0,a.kt)("h3",{id:"continuous-integration"},"Continuous Integration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Continuous%20Integration/askui-ui-controller-docker-images"},"askui UI Controller Docker Images")," to learn more about running askui inside a Docker container."),(0,a.kt)("li",{parentName:"ul"},"Read the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.10.5/general/Continuous%20Integration/gitlab-ci"},"Gitlab CI/CD")," to learn about integrating askui into your Gitlab CI/CD.")))}p.isMDXComponent=!0}}]);