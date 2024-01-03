"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8897],{84419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(85893),i=t(11151);const o={displayed_sidebar:"apiSidebar"},r="get",c={id:"api/Getters/get",title:"get",description:"production",source:"@site/versioned_docs/version-0.13.1/api/06-Getters/get.md",sourceDirName:"api/06-Getters",slug:"/api/Getters/get",permalink:"/docs/api/Getters/get",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/api/06-Getters/get.md",tags:[],version:"0.13.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"notExists",permalink:"/docs/api/Checks/notexists"},next:{title:"getAll",permalink:"/docs/api/Getters/getall"}},a={},d=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"get",children:"get"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Returns an array with all filtered elements.\nA detected element has the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," of the element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," content of element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bndbox"}),": location of element described with coordinates of a bounding box"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const text = await aui.get().text('Sign').exec();\nconsole.log(text);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'TEXT',\n     text: 'Sign In',\n     bndbox: BoundingBox {\n        xmin: 1128.2720982142857,\n        ymin: 160.21332310267857,\n        xmax: 1178.8204241071428,\n        ymax: 180.83512834821428\n     }\n   }\n ]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);