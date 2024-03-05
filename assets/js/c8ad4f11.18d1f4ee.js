"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13352],{60452:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var s=n(17624),r=n(4552);const t={sidebar_position:2},l="Jest",i={id:"general/Troubleshooting/jest",title:"Jest",description:"Global Hooks Not Executed or Executed in Wrong Order",source:"@site/versioned_docs/version-0.14.0/general/07-Troubleshooting/jest.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/jest",permalink:"/docs/0.14.0/general/Troubleshooting/jest",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.14.0/general/07-Troubleshooting/jest.md",tags:[],version:"0.14.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"IPv6",permalink:"/docs/0.14.0/general/Troubleshooting/ipv6"},next:{title:"Linux",permalink:"/docs/0.14.0/general/Troubleshooting/linux"}},c={},a=[{value:"Global Hooks Not Executed or Executed in Wrong Order",id:"global-hooks-not-executed-or-executed-in-wrong-order",level:2},{value:"Termination Error",id:"termination-error",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"jest",children:"Jest"}),"\n",(0,s.jsx)(o.h2,{id:"global-hooks-not-executed-or-executed-in-wrong-order",children:"Global Hooks Not Executed or Executed in Wrong Order"}),"\n",(0,s.jsxs)(o.p,{children:["If you use Jest's global hooks like ",(0,s.jsx)(o.code,{children:"before*()"})," and ",(0,s.jsx)(o.code,{children:"after*()"})," that do no reside inside a ",(0,s.jsx)(o.code,{children:"describe"}),"-block you may run into the following issues:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Hooks are not executed at all"}),"\n",(0,s.jsx)(o.li,{children:"Hooks are executed in wrong order"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["The solution is to stop using global hooks and do your setup inside a ",(0,s.jsx)(o.code,{children:"describe"}),"-block. Please also consult ",(0,s.jsx)(o.a,{href:"https://jestjs.io/docs/setup-teardown#order-of-execution",children:"Jest's docs for a detailed explanation"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"/*\n * DO NOT DO THIS!\n */\nbeforeAll(() => console.log('1 - beforeAll')); // won't work reliably\nafterAll(() => console.log('1 - afterAll')); // won't work reliably\nbeforeEach(() => console.log('1 - beforeEach')); // won't work reliably\nafterEach(() => console.log('1 - afterEach')); // won't work reliably\n\nit('', () => console.log('1 - test'));\n\n/*\n * DO THIS INSTEAD\n */\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll')); // works\n  afterAll(() => console.log('2 - afterAll')); // works\n  beforeEach(() => console.log('2 - beforeEach')); // works\n  afterEach(() => console.log('2 - afterEach')); // works\n\n  it('', () => console.log('2 - test'));\n  \n  describe('More deeply scoped / nested block', () => {\n    beforeAll(() => console.log('3 - beforeAll')); // works\n    afterAll(() => console.log('3 - afterAll')); // works\n    beforeEach(() => console.log('3 - beforeEach')); // works\n    afterEach(() => console.log('3 - afterEach')); // works\n  \n    it('', () => console.log('3 - test'));\n  });\n});\n"})}),"\n",(0,s.jsx)(o.h2,{id:"termination-error",children:"Termination Error"}),"\n",(0,s.jsx)(o.p,{children:"Jest sometimes has problems terminating correctly. If this happens, you can see the following error message:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"Jest did not exit one second after the test run has completed.\n\nThis usually means that there are asynchronous operations \nthat weren't stopped in your tests. \nConsider running Jest with `--detectOpenHandles` to troubleshoot this issue.\n"})}),"\n",(0,s.jsx)(o.p,{children:"As described in the error message Jest has problems stopping because of some processes which are still running.\nThis can cause problems in your CI/CD pipeline because your pipeline can't continue after\ngetting this error."}),"\n",(0,s.jsxs)(o.p,{children:["A solution is to force Jest to stop. For this case Jest provides the ",(0,s.jsx)(o.code,{children:"--forceExit"})," flag:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"npx jest --config ./test/jest.config.ts --forceExit\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,o,n)=>{n.d(o,{I:()=>i,M:()=>l});var s=n(11504);const r={},t=s.createContext(r);function l(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);