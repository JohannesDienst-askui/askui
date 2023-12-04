"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20658],{21483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(85893),s=n(11151);const o={sidebar_position:7},r="Write Your First Instruction",a={id:"general/Getting Started/write-your-first-instruction",title:"Write Your First Instruction",description:"What you will learn",source:"@site/versioned_docs/version-0.12.1/general/02-Getting Started/write-your-first-instruction.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/write-your-first-instruction",permalink:"/docs/0.12.1/general/Getting Started/write-your-first-instruction",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.1/general/02-Getting Started/write-your-first-instruction.md",tags:[],version:"0.12.1",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Enterprise Checklist",permalink:"/docs/0.12.1/general/Getting Started/enterprise-checklist"},next:{title:"How AskUI Works",permalink:"/docs/0.12.1/general/Getting Started/guide-how-askui-works"}},l={},c=[{value:"Initialization",id:"initialization",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run Your First Instruction",id:"run-your-first-instruction",level:2},{value:"Step 1: Execute an (Interactive) Annotation",id:"step-1-execute-an-interactive-annotation",level:3},{value:"Step 2: Extract the Element-Description",id:"step-2-extract-the-element-description",level:3},{value:"Step 3: Execute an Instruction",id:"step-3-execute-an-instruction",level:3},{value:"What other instructions are available?",id:"what-other-instructions-are-available",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"AskUI moves to the wrong element?",id:"askui-moves-to-the-wrong-element",level:3},{value:"Technical",id:"technical",level:3},{value:"Where to Go Next?",id:"where-to-go-next",level:2},{value:"Tutorials",id:"tutorials",level:3},{value:"Annotation",id:"annotation",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"write-your-first-instruction",children:"Write Your First Instruction"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"What you will learn"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Initialize your first AskUI suite"}),"\n",(0,i.jsx)(t.li,{children:"Configure your credentials (workspace id and access token)"}),"\n",(0,i.jsx)(t.li,{children:"Run your first instruction"}),"\n",(0,i.jsx)(t.li,{children:"Troubleshooting any issues"}),"\n",(0,i.jsx)(t.li,{children:"Where to go next"}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(t.p,{children:"To create your first AskUI suite, enter into your terminal"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx askui init\n"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"This will create"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.code,{children:"tsconfig.json"}),": ",(0,i.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",children:"a json file specifying the root files and the compiler options required to compile the project"}),","]}),"\n",(0,i.jsxs)(t.li,{children:["a folder called ",(0,i.jsx)(t.code,{children:"test"})," which includes:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"test/my-first-askui-test-suite.test.ts"}),": an example workflow with AskUI,"]}),"\n",(0,i.jsxs)(t.li,{children:["a folder called ",(0,i.jsx)(t.code,{children:"helper"})," which contains the ",(0,i.jsx)(t.code,{children:"jest.setup.ts"})," file for setting up the test environment"]}),"\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.code,{children:"jest.config.ts"})," configuration file"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Generate credentials through the ",(0,i.jsx)(t.strong,{children:"AskUI Studio"})," (usage is free!). Please ",(0,i.jsx)(t.a,{href:"https://xa5a040gvfz.typeform.com/to/Ndh2NkV6",children:"fill out this form"})," to schedule a demonstration or ",(0,i.jsx)(t.a,{href:"https://xa5a040gvfz.typeform.com/to/IHdr0qY5",children:"request a trial"})," to obtain access to ",(0,i.jsx)(t.strong,{children:"AskUI Studio"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, go to your ",(0,i.jsx)(t.code,{children:"helper/jest.setup.ts"})," and add the configuration for your ",(0,i.jsx)(t.code,{children:"workspace id"})," and your ",(0,i.jsx)(t.code,{children:"access token"})," to the ",(0,i.jsx)(t.code,{children:"UiControlClient"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:" aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n"})}),"\n",(0,i.jsx)(t.h2,{id:"run-your-first-instruction",children:"Run Your First Instruction"}),"\n",(0,i.jsx)(t.p,{children:"Writing and executing an instruction in AskUI can be done in three steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Execute an (interactive) annotation."}),"\n",(0,i.jsx)(t.li,{children:"Extract from the (interactive) annotation the element-description which identifies target element."}),"\n",(0,i.jsx)(t.li,{children:"Execute an instruction to control the keyboard and mouse to take action on target element."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-execute-an-interactive-annotation",children:"Step 1: Execute an (Interactive) Annotation"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Before executing the instructions, open ",(0,i.jsx)(t.code,{children:"test/my-first-askui-test-suite.test.ts"})," on your main display. The code in this file is shown below."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Windows Users"})}),(0,i.jsxs)(t.p,{children:["Please use ",(0,i.jsx)(t.code,{children:"annotate()"})," as outlined in the code below. The interactive annotation ",(0,i.jsx)(t.code,{children:"aui.annotateInteractively()"})," currently leads to an error on Windows."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"macOS Users"})}),(0,i.jsxs)(t.p,{children:["Some users have reported instability running AskUI on macOS with external displays and/or ",(0,i.jsx)(t.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac",children:"virtual desktops (called Spaces)"}),". If you experience similar issues, please disconnect external displays and close virtual desktops, or see ",(0,i.jsx)(t.a,{href:"/docs/0.12.1/general/Integrations/containers",children:"documentation on running AskUI in Docker"}),"."]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',children:"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should generate an (interactive) annotation', async () => {\n\n    // For Windows users:\n    // Use annotate() to create an annotated HTML file\n    // of your screen that is saved under <project_root>/report\n    await aui.annotate();\n\n    // Uncomment for macOS and Linux\n    // Delete the lines above to not trigger annotate()\n    // await aui.annotateInteractively();\n  });\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"To execute the instructions, enter into your terminal"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts --runInBand\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["We use the ",(0,i.jsx)(t.code,{children:"--runInBand"})," CLI option here to run the workflows from the ",(0,i.jsx)(t.code,{children:"it"}),"-code blocks sequentially and not in parallel. This is usually what you want on your local machine without isolated environments like containers or VMs."]})}),"\n",(0,i.jsx)(t.p,{children:"A few seconds later an (interactive) annotation will be generated."}),"\n",(0,i.jsx)(t.p,{children:"If you\u2019d like a longer explanation as to what an (interactive) annotation is, read about it here. [Explanation of (Interactive) Annotations](../03-Element Selection/annotations-and-screenshots.md)"}),"\n",(0,i.jsx)(t.h3,{id:"step-2-extract-the-element-description",children:"Step 2: Extract the Element-Description"}),"\n",(0,i.jsx)(t.p,{children:"Extract from the (interactive) annotation the element-description which identifies target element.\nLocate any element you\u2019d like the mouse to move to and copy the element-description by clicking on it:\nClicking an element will copy this element-description, which we can then use in the step 3."}),"\n",(0,i.jsxs)(t.p,{children:["To close out the interactive annotation, use ",(0,i.jsx)(t.code,{children:"CMD/CTRL + W"})," or ",(0,i.jsx)(t.code,{children:"ESC"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-execute-an-instruction",children:"Step 3: Execute an Instruction"}),"\n",(0,i.jsx)(t.p,{children:"Add this instruction code block to the describe block in your test file just under your (interactive) annotation instruction, taking note to also add your copied element-description from the annotation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',children:"it('should click on my element', async () => {\n  await aui\n    .click()\n    // <INSERT YOUR COPIED ELEMENT-DESCRIPTION HERE AND UNCOMMENT THIS AND THE NEXT LINE>\n    // .exec();\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Be sure to ",(0,i.jsx)(t.code,{children:"xit"})," out the (interactive) annotation, as that is no longer needed. The final version should look like this, taking exception of course to whatever element-description text you chose:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="test/my-first-askui-test-suite.test.ts" showLineNumbers',children:"describe('jest with askui', () => {\n\n  xit('should generate an (interactive) annotation', async () => {\n    // For Windows users:\n    // Use annotate() to create an annotated HTML file\n    // of your screen that is saved under <project_root>/report\n    await aui.annotate();\n\n    // Uncomment for macOS and Linux\n    // Delete the lines above to not trigger annotate()\n    // await aui.annotateInteractively();\n  });\n\n  it('should click on my element', async () => {\n    await aui\n      .click()\n      .text(\"node_nodu\")\n      .exec();\n  });\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["As before, run your code with ",(0,i.jsx)(t.code,{children:"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts --runInBand"})]}),"\n",(0,i.jsx)(t.p,{children:"You should see AskUI take over your mouse, mouse over the element you chose and click."}),"\n",(0,i.jsxs)(t.p,{children:["Congratulations! You\u2019ve just built your first instruction using AskUI. ","\ud83c\udf89"]}),"\n",(0,i.jsx)(t.h3,{id:"what-other-instructions-are-available",children:"What other instructions are available?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/api/API/table-of-contents#actions",children:"Actions API"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/api/API/table-of-contents#element-descriptions",children:"Element-Descriptions API"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/api/API/table-of-contents#relations",children:"Relations API"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/api/API/table-of-contents#checks",children:"Checks API"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/api/API/table-of-contents#getters",children:"Getters API"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(t.h3,{id:"askui-moves-to-the-wrong-element",children:"AskUI moves to the wrong element?"}),"\n",(0,i.jsx)(t.p,{children:"Have a look at [Relational Selectors](../03-Element Selection/relational-selectors.md) to select elements via a visual relation instead."}),"\n",(0,i.jsx)(t.h3,{id:"technical",children:"Technical"}),"\n",(0,i.jsxs)(t.p,{children:["For technical problems with the execution, take a look at our ",(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/general/Troubleshooting/",children:"Troubleshooting page"})]}),"\n",(0,i.jsx)(t.h2,{id:"where-to-go-next",children:"Where to Go Next?"}),"\n",(0,i.jsxs)(t.p,{children:["Our ",(0,i.jsx)(t.a,{href:"https://app.outverse.com/askui/community/home",children:"Outverse-Community"})," is there to help you out!"]}),"\n",(0,i.jsx)(t.h3,{id:"tutorials",children:"Tutorials"}),"\n",(0,i.jsx)(t.p,{children:"If you are unsure on how/what to do yet, try to follow our tutorials. They cover some of use cases of AskUI in depth:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/general/Tutorials/google-cat-search",children:"Search Image in Google"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/general/Tutorials/shop-demo",children:"Login at an Online Shop"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/general/Tutorials/spotify-tutorial",children:"Automate Spotify on Desktop"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/0.12.1/general/Tutorials/android-search-in-browser",children:"Automate an Android App"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"annotation",children:"Annotation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Read [Debug with Annotation](../03-Element Selection/annotations-and-screenshots.md) to learn how to use the ",(0,i.jsx)(t.strong,{children:"Image Annotation Feature"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);