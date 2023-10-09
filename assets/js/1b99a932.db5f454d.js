"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72979],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const s={displayed_sidebar:"apiSidebar"},i="pressThreeKeys",o={unversionedId:"api/Actions/pressthreekeys",id:"version-0.12.2/api/Actions/pressthreekeys",title:"pressThreeKeys",description:"production",source:"@site/versioned_docs/version-0.12.2/api/02-Actions/pressthreekeys.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/pressthreekeys",permalink:"/docs/api/Actions/pressthreekeys",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/api/02-Actions/pressthreekeys.md",tags:[],version:"0.12.2",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},c=[],l={toc:c};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pressthreekeys"},"pressThreeKeys"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Press three keys like ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL+ALT+DEL")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Operating system specific mappings:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"command"),"-key maps to ",(0,a.kt)("inlineCode",{parentName:"li"},"windows"),"-key")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.pressThreeKeys('control', 'command' 'space').exec();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6080).Z,width:"800",height:"910"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {MODIFIER_KEY} first_key - A modifier key"),(0,a.kt)("li",{parentName:"ul"},"@param {MODIFIER_KEY} second_key - A modifier key"),(0,a.kt)("li",{parentName:"ul"},"@param {PC_KEY} third_key - A key")))}u.isMDXComponent=!0},6080:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pressThreeKeys-e08512615fdc4e692331a448fb63d553.gif"}}]);