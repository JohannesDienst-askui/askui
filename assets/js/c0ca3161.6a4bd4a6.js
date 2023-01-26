"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99316],{35318:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(y,s(s({ref:r},l),{},{components:t})):n.createElement(y,s({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25930:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(25773),a=(t(27378),t(35318));const o={displayed_sidebar:"apiSidebar"},s="pressThreeKeys",i={unversionedId:"api/Commands/pressthreekeys",id:"version-0.6.1/api/Commands/pressthreekeys",title:"pressThreeKeys",description:"Press three keys like CTRL+ALT+DEL",source:"@site/versioned_docs/version-0.6.1/api/02-Commands/pressthreekeys.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/pressthreekeys",permalink:"/docs/0.6.1/api/Commands/pressthreekeys",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.6.1/api/02-Commands/pressthreekeys.md",tags:[],version:"0.6.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pressthreekeys"},"pressThreeKeys"),(0,a.kt)("p",null,"Press three keys like ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL+ALT+DEL")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {MODIFIER_KEY} first_key - A modifier key"),(0,a.kt)("li",{parentName:"ul"},"@param {MODIFIER_KEY} second_key - A modifier key"),(0,a.kt)("li",{parentName:"ul"},"@param {PC_KEY} third_key - A key")))}u.isMDXComponent=!0}}]);