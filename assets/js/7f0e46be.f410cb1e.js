"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[391],{56623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(85893),r=n(11151);const o={sidebar_position:9},i="Framework Configuration",a={id:"general/Getting Started/configure_test_framework",title:"Framework Configuration",description:"Basically, you can run askui instructions with every popular JavaScript/TypeScript test framework, e.g., Jest or Jasmine.",source:"@site/versioned_docs/version-0.12.2/general/02-Getting Started/configure_test_framework.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/configure_test_framework",permalink:"/docs/0.12.2/general/Getting Started/configure_test_framework",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/02-Getting Started/configure_test_framework.md",tags:[],version:"0.12.2",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"How AskUI Works",permalink:"/docs/0.12.2/general/Getting Started/guide-how-askui-works"},next:{title:"Annotations, Screenshots and Videos",permalink:"/docs/0.12.2/general/Element Selection/annotations-and-screenshots"}},c={},d=[{value:"Jest",id:"jest",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"framework-configuration",children:"Framework Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Basically, you can run ",(0,s.jsx)(t.code,{children:"askui"})," instructions with every popular JavaScript/TypeScript test framework, e.g., ",(0,s.jsx)(t.a,{href:"https://jestjs.io/",children:"Jest"})," or ",(0,s.jsx)(t.a,{href:"https://jasmine.github.io/",children:"Jasmine"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"jest",children:"Jest"}),"\n",(0,s.jsxs)(t.p,{children:["You can configure Jest with the ",(0,s.jsx)(t.code,{children:"jest.config.ts"}),". It should look something like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export default {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: ['Math']\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In case your Jest tests are executed slowly, make sure you have added ",(0,s.jsx)(t.code,{children:"'Math'"})," to ",(0,s.jsx)(t.code,{children:"sandboxInjectedGlobals"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The option ",(0,s.jsx)(t.code,{children:"sandboxInjectedGlobals"})," was named ",(0,s.jsx)(t.code,{children:"extraGlobals"})," in Jest v27 and lower."]})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);