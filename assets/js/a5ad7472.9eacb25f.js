"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15841],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={displayed_sidebar:"apiSidebar"},i="expect",c={unversionedId:"api/Commands/expect",id:"version-0.5.0/api/Commands/expect",title:"expect",description:"Expects a condition, e.g., exists() or notExits().",source:"@site/versioned_docs/version-0.5.0/api/02-Commands/expect.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/expect",permalink:"/docs/0.5.0/api/Commands/expect",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.5.0/api/02-Commands/expect.md",tags:[],version:"0.5.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expect"},"expect"),(0,a.kt)("p",null,"Expects a condition, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"exists()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"notExits()"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.expect().text().withText('Login').exists().exec()\nawait aui.expect().text().withText('Login').notExists().exec()\n")))}u.isMDXComponent=!0}}]);