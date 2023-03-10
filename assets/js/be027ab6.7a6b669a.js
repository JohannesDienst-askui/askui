"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51125],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),u=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,f=l["".concat(m,".").concat(d)]||l[d]||c[d]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},20090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(25773),n=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="moveMouse",s={unversionedId:"api/Commands/movemouse",id:"api/Commands/movemouse",title:"moveMouse",description:"Moves the mouse cursor to the absolute x and y coordinates.",source:"@site/docs/api/02-Commands/movemouse.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/movemouse",permalink:"/docs/next/api/Commands/movemouse",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/02-Commands/movemouse.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"mouseToggleUp",permalink:"/docs/next/api/Commands/mousetoggleup"},next:{title:"moveMouseRelatively",permalink:"/docs/next/api/Commands/movemouserelatively"}},m={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"movemouse"},"moveMouse"),(0,n.kt)("p",null,"Moves the mouse cursor to the absolute x and y coordinates."),(0,n.kt)("p",null,"If you want to move your mouse to an element, use ",(0,n.kt)("inlineCode",{parentName:"p"},"moveMouseTo()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.moveMouse(500, 500).exec();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@param {number} x_coordinate - A (positive/negative) x coordinate."),(0,n.kt)("li",{parentName:"ul"},"@param {number} y_coordinate - A (positive/negative) y coordinate.")))}c.isMDXComponent=!0}}]);