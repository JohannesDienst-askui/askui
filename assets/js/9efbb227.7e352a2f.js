"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94396],{73956:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=o(17624),i=o(4552);const s={displayed_sidebar:"apiSidebar"},r="moveMouseRelativelyTo",a={id:"api/Actions/movemouserelativelyto",title:"moveMouseRelativelyTo",description:"production",source:"@site/docs/api/02-Actions/movemouserelativelyto.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/movemouserelativelyto",permalink:"/docs/next/api/Actions/movemouserelativelyto",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/02-Actions/movemouserelativelyto.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"moveMouseRelatively",permalink:"/docs/next/api/Actions/movemouserelatively"},next:{title:"moveMouseTo",permalink:"/docs/next/api/Actions/movemouseto"}},c={},l=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"movemouserelativelyto",children:"moveMouseRelativelyTo"}),"\n",(0,n.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Moves the mouse relatively to an element in the direction.\nThis can be used when the mouse should not hover over an element anymore."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"macOS only"}),": Due to the higher pixel density of the ",(0,n.jsx)(t.strong,{children:"retina display"}),", the input coordinates must be ",(0,n.jsx)(t.strong,{children:"doubled"})," in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// Move mouse 30 pixels below button\nawait aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(22176).c+"",width:"1920",height:"1080"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["@param ","number"," x_offset - A (positive/negative) x direction."]}),"\n",(0,n.jsxs)(t.li,{children:["@param ","number"," y_offset - A (positive/negative) y direction."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},22176:(e,t,o)=>{o.d(t,{c:()=>n});const n=o.p+"assets/images/moveMouseRelativelyTo-8b410256841490fe7c1a0d454702cd63.gif"},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>r});var n=o(11504);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);