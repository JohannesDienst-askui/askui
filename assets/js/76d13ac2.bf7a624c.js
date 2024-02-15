"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[704],{36360:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(17624),r=s(4552);const i={sidebar_position:2,pagination_next:"general/Getting Started/write-your-first-instruction"},o="Install AskUI Windows",a={id:"general/Getting Started/getting-started",title:"Install AskUI Windows",description:"Requirements",source:"@site/versioned_docs/version-0.11.6/general/02-Getting Started/getting-started.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started",permalink:"/docs/0.11.6/general/Getting Started/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/general/02-Getting Started/getting-started.md",tags:[],version:"0.11.6",sidebarPosition:2,frontMatter:{sidebar_position:2,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"Start",permalink:"/docs/0.11.6/general/Getting Started/start"},next:{title:"Write Your First Instruction",permalink:"/docs/0.11.6/general/Getting Started/write-your-first-instruction"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Access Token",id:"access-token",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"install-askui-windows",children:"Install AskUI Windows"}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," version 16 or above"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"npm"})," in version 7.10 or above (usually comes with the Node.js installation)"]}),"\n",(0,n.jsxs)(t.li,{children:["A text editor/IDE like ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"Open a directory where you would like to place the AskUI setup. If you haven\u2019t already, set up an NPM project by running:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm init -y\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will create a ",(0,n.jsx)(t.code,{children:"package.json"})," file inside your present working directory which contains the configuration of your project including a description of its dependencies."]}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"askui"})," and other dependencies for writing and executing tests:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm i -D askui @askui/askui-reporters typescript ts-node @types/jest ts-jest jest\n"})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Quick explanation of all the dependencies"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/askui",children:"AskUI"}),": Controlling a multitude of operating systems with commands based on automatically detected screen elements etc."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/askui-reporters",children:"@askui/askui-reporters"}),": AskUI reporters for nice looking reports."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"typescript"}),": Allowing you to write your tests in ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," instead of JavaScript"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/ts-node",children:"ts-node"}),": TypeScript execution and REPL for node.js, with source map and native ESM support."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/jest",children:"jest"}),": Allowing you to write and run tests (",(0,n.jsx)(t.code,{children:"describe"}),", ",(0,n.jsx)(t.code,{children:"it"}),", assertions, mocking etc.)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/ts-jest",children:"ts-jest"}),": A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@types/jest",children:"@types/jest"}),": Types for Jest"]}),"\n"]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["To create and serve a static HTML-Report you have to install ",(0,n.jsx)(t.a,{href:"https://github.com/allure-framework/allure2#download",children:"Allure"})," and then call ",(0,n.jsx)(t.code,{children:"allure serve ./allure-results"})," from your root-directory."]})}),"\n",(0,n.jsx)(t.h2,{id:"access-token",children:"Access Token"}),"\n",(0,n.jsxs)(t.p,{children:["As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,n.jsx)(t.strong,{children:"AskUI Studio"})," (for free)."]}),"\n",(0,n.jsxs)(t.p,{children:["Please ",(0,n.jsx)(t.a,{href:"https://xa5a040gvfz.typeform.com/to/Ndh2NkV6",children:"fill out this form"})," to schedule a demonstration or ",(0,n.jsx)(t.a,{href:"https://xa5a040gvfz.typeform.com/to/IHdr0qY5",children:"request a trial"})," to obtain access to ",(0,n.jsx)(t.strong,{children:"AskUI Studio"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>a,M:()=>o});var n=s(11504);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);