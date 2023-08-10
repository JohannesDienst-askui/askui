"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27869],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(25773),n=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="moveMouse",s={unversionedId:"api/Actions/movemouse",id:"api/Actions/movemouse",title:"moveMouse",description:"production",source:"@site/docs/api/02-Actions/movemouse.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/movemouse",permalink:"/docs/next/api/Actions/movemouse",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/02-Actions/movemouse.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"mouseToggleUp",permalink:"/docs/next/api/Actions/mousetoggleup"},next:{title:"moveMouseRelatively",permalink:"/docs/next/api/Actions/movemouserelatively"}},p={},c=[],u={toc:c};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"movemouse"},"moveMouse"),(0,n.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Moves the mouse to an arbitrary absolute x and y coordinates."),(0,n.kt)("p",null,"If you want to move your mouse cursor to an element, use ",(0,n.kt)("inlineCode",{parentName:"p"},"moveMouseTo()"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"macOS only"),": Due to the higher pixel density of the ",(0,n.kt)("strong",{parentName:"p"},"retina display"),", the input coordinates must be ",(0,n.kt)("strong",{parentName:"p"},"doubled")," in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.moveMouse(500, 500).exec();\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(19908).Z,width:"800",height:"460"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@param {number} x_coordinate - A (positive/negative) x coordinate."),(0,n.kt)("li",{parentName:"ul"},"@param {number} y_coordinate - A (positive/negative) y coordinate.")))}l.isMDXComponent=!0},19908:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/moveMouse-f9d52caeb9aec9fcd0709680c3016153.gif"}}]);