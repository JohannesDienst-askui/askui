"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[496],{89560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(17624),i=n(4552);const r={displayed_sidebar:"apiSidebar"},o="get",c={id:"api/Getters/get",title:"get",description:"production",source:"@site/docs/api/06-Getters/get.md",sourceDirName:"api/06-Getters",slug:"/api/Getters/get",permalink:"/docs/next/api/Getters/get",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/06-Getters/get.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"notExists",permalink:"/docs/next/api/Checks/notexists"},next:{title:"getAll",permalink:"/docs/next/api/Getters/getall"}},a={},d=[];function l(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"get",children:"get"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Returns an array with all filtered elements.\nA detected element has the following properties:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"name"})," of the element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"text"})," content of element"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"bndbox"}),": location of element described with coordinates of a bounding box"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"const text = await aui.get().text('Sign').exec();\nconsole.log(text);\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'TEXT',\n     text: 'Sign In',\n     bndbox: BoundingBox {\n        xmin: 1128.2720982142857,\n        ymin: 160.21332310267857,\n        xmax: 1178.8204241071428,\n        ymax: 180.83512834821428\n     }\n   }\n ]\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var s=n(11504);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);