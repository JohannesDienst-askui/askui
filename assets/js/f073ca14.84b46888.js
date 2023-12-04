"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18379],{92919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(85893),o=n(11151);const i={displayed_sidebar:"apiSidebar"},s="annotate",r={id:"api/Annotation/annotate",title:"annotate",description:"production",source:"@site/versioned_docs/version-0.13.0/api/07-Annotation/annotate.md",sourceDirName:"api/07-Annotation",slug:"/api/Annotation/annotate",permalink:"/docs/0.13.0/api/Annotation/annotate",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.0/api/07-Annotation/annotate.md",tags:[],version:"0.13.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"getAll",permalink:"/docs/0.13.0/api/Getters/getall"},next:{title:"annotateInteractively",permalink:"/docs/0.13.0/api/Annotation/annotateInteractively"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"annotate",children:"annotate"}),"\n",(0,a.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"Creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image."}),"\n",(0,a.jsxs)(t.p,{children:["The annotated image is saved to ",(0,a.jsx)(t.code,{children:"<project_root>/report"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["See also ",(0,a.jsx)(t.a,{href:"/docs/0.13.0/general/Element%20Selection/annotations-and-screenshots#static-annotation",children:"the detailed explanation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"// The annoted image is saved to `<project_root>/report`.\nawait aui.annotate();\n\n// or\n\nUiControlClient.annotate({\n    imagePath: '<your-image-path>',\n    outputPath: '<path-of-the-generated-html>',\n    fileNamePrefix: '<prefix-of-the-output-file>',\n    customElements: CustomElementJson[] // A list of custom elements. The AI model will use them to detect elements similar to them.\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);