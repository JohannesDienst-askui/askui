"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1143],{97520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(85893),r=n(11151);const s={displayed_sidebar:"apiSidebar"},o="rightOf",l={id:"api/Relations/rightof",title:"rightOf",description:"production",source:"@site/docs/api/04-Relations/rightof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/rightof",permalink:"/docs/next/api/Relations/rightof",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/04-Relations/rightof.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"or",permalink:"/docs/next/api/Relations/or"},next:{title:"exists",permalink:"/docs/next/api/Checks/exists"}},a={},c=[];function d(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rightof",children:"rightOf"}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Filters for an element right of another element."}),"\n",(0,i.jsxs)(t.p,{children:["Takes an optional parameter ",(0,i.jsx)(t.code,{children:"index"})," to select the ",(0,i.jsx)(t.code,{children:"nth"})," element (starting with 0)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"--------------  --------------  --------------\n|  leftEl    |  |  rightEl0  |  |  rightEl1  |\n--------------  --------------  --------------\n\n// Returns rightEl0 because rightEl0 is the first element right of leftEl\n...rightEl().rightOf().leftEl()\n...rightEl().rightOf(0).leftEl()\n// Returns rightEl1 because rightEl1 is the second element right of leftEl\n...rightEl().rightOf(1).leftEl()\n// Returns no element because leftEl is left of rightEl\n...leftEl().rightOf().rightEl()\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(92015).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"@param {number} [optionalIndex=0] - element index"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},92015:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);