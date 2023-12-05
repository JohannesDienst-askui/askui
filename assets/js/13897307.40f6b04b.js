"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27277],{55875:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=n(85893),s=n(11151);const r={sidebar_position:2},i="Jest",l={id:"general/Troubleshooting/jest",title:"Jest",description:"Global Hooks Not Executed or Executed in Wrong Order",source:"@site/docs/general/07-Troubleshooting/jest.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/jest",permalink:"/docs/next/general/Troubleshooting/jest",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/07-Troubleshooting/jest.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Cannot Find Element Error",permalink:"/docs/next/general/Troubleshooting/cannot_find_element_error"},next:{title:"Linux",permalink:"/docs/next/general/Troubleshooting/linux"}},c={},a=[{value:"Global Hooks Not Executed or Executed in Wrong Order",id:"global-hooks-not-executed-or-executed-in-wrong-order",level:2},{value:"Termination Error",id:"termination-error",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"jest",children:"Jest"}),"\n",(0,t.jsx)(o.h2,{id:"global-hooks-not-executed-or-executed-in-wrong-order",children:"Global Hooks Not Executed or Executed in Wrong Order"}),"\n",(0,t.jsxs)(o.p,{children:["If you use Jests global hooks like ",(0,t.jsx)(o.code,{children:"before*()"})," and ",(0,t.jsx)(o.code,{children:"after*()"})," that do no reside inside a ",(0,t.jsx)(o.code,{children:"describe"}),"-block you may run into the following issues:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Hooks are not executed at all"}),"\n",(0,t.jsx)(o.li,{children:"Hooks are executed in wrong order"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["The solution is to stop using global hooks and do your setup inside a ",(0,t.jsx)(o.code,{children:"describe"}),"-block. Please also consult ",(0,t.jsx)(o.a,{href:"https://jestjs.io/docs/setup-teardown#order-of-execution",children:"Jests docs for a detailed explanation"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"termination-error",children:"Termination Error"}),"\n",(0,t.jsx)(o.p,{children:"Jest sometimes has problems terminating correctly. If this happens, you can see the following error message:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"Jest did not exit one second after the test run has completed.\n\nThis usually means that there are asynchronous operations \nthat weren't stopped in your tests. \nConsider running Jest with `--detectOpenHandles` to troubleshoot this issue.\n"})}),"\n",(0,t.jsx)(o.p,{children:"As described in the error message Jest has problems stopping because of some processes which are still running.\nThis can cause problems in your CI/CD pipeline because your pipeline can't continue after\ngetting this error."}),"\n",(0,t.jsxs)(o.p,{children:["A solution is to force Jest to stop. For this case Jest provides the ",(0,t.jsx)(o.code,{children:"--forceExit"})," flag:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"npx jest --config ./test/jest.config.ts --forceExit\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>i});var t=n(67294);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);