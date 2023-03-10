"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51299],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),p=o,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const i={displayed_sidebar:"apiSidebar"},a="mouseDoubleMiddleClick",l={unversionedId:"api/Commands/mousedoublemiddleclick",id:"api/Commands/mousedoublemiddleclick",title:"mouseDoubleMiddleClick",description:"Double-clicks with middle mouse key.",source:"@site/docs/api/02-Commands/mousedoublemiddleclick.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/mousedoublemiddleclick",permalink:"/docs/next/api/Commands/mousedoublemiddleclick",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/02-Commands/mousedoublemiddleclick.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"mouseDoubleLeftClick",permalink:"/docs/next/api/Commands/mousedoubleleftclick"},next:{title:"mouseDoubleRightClick",permalink:"/docs/next/api/Commands/mousedoublerightclick"}},c={},u=[],s={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mousedoublemiddleclick"},"mouseDoubleMiddleClick"),(0,o.kt)("p",null,"Double-clicks with middle mouse key."),(0,o.kt)("p",null,"If you need to move the mouse first, use ",(0,o.kt)("inlineCode",{parentName:"p"},"moveMouseTo()"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Optional: Move mouse to an element first\nawait aui.moveMouseTo().button().withText('Login').exec();\n\nawait aui.mouseDoubleMiddleClick().exec();\n")))}d.isMDXComponent=!0}}]);