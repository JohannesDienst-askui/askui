"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61057],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),i=(r(27378),r(35318));const o={displayed_sidebar:"apiSidebar"},a="scrollInside",s={unversionedId:"api/Actions/scrollinside",id:"version-0.10.1/api/Actions/scrollinside",title:"scrollInside",description:"production",source:"@site/versioned_docs/version-0.10.1/api/02-Actions/scrollinside.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/scrollinside",permalink:"/docs/0.10.1/api/Actions/scrollinside",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.1/api/02-Actions/scrollinside.md",tags:[],version:"0.10.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},c={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scrollinside"},"scrollInside"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Moves mouse to the filtered element and scrolls in the x and y direction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"macOS"),": May not work as expected!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.scrollInside(0,-500).text().withText('Bottom sheet').exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(99758).Z,width:"800",height:"648"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {number} x_offset - A (positive/negative) x direction."),(0,i.kt)("li",{parentName:"ul"},"@param {number} y_offset - A (positive/negative) y direction.")))}d.isMDXComponent=!0},99758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scrollInside-715440e17c6c44409ad373e5a05738fa.gif"}}]);