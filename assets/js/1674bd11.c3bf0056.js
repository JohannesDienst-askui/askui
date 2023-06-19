"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45555],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},i="annotateInteractively",c={unversionedId:"api/Annotation/annotateInteractively",id:"version-0.10.3/api/Annotation/annotateInteractively",title:"annotateInteractively",description:"production",source:"@site/versioned_docs/version-0.10.3/api/07-Annotation/annotateInteractively.md",sourceDirName:"api/07-Annotation",slug:"/api/Annotation/annotateInteractively",permalink:"/docs/0.10.3/api/Annotation/annotateInteractively",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.3/api/07-Annotation/annotateInteractively.md",tags:[],version:"0.10.3",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"annotateinteractively"},"annotateInteractively"),(0,r.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is a known bug that can cause a crash when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"annotateInteractively()")," on ",(0,r.kt)("strong",{parentName:"p"},"Windows"),".\nPlease use ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.3/api/Annotation/annotate"},"annotate()")," as a workaround.")),(0,r.kt)("p",null,"Creates an annotated version of your screen and shows it to you so you can explore the annotated image.\nRecognized elements are annotated with a red bounding box.  You can copy the filter needed to select the element by left-clicking on the bounding box."),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.3/general/Tooling/annotation#interactive-annotation"},"the detailed explanation")," to see how you can use it to create instructions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.annotateInteractively();\n")))}u.isMDXComponent=!0}}]);