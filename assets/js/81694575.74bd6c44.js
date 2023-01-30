"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43627],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,v=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},i="moveMouseRelativelyTo",l={unversionedId:"api/Commands/movemouserelativelyto",id:"version-0.4.0/api/Commands/movemouserelativelyto",title:"moveMouseRelativelyTo",description:"Moves the mouse relatively to an element in the direction.",source:"@site/versioned_docs/version-0.4.0/api/02-Commands/movemouserelativelyto.md",sourceDirName:"api/02-Commands",slug:"/api/Commands/movemouserelativelyto",permalink:"/docs/0.4.0/api/Commands/movemouserelativelyto",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.4.0/api/02-Commands/movemouserelativelyto.md",tags:[],version:"0.4.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},m=[],c={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"movemouserelativelyto"},"moveMouseRelativelyTo"),(0,o.kt)("p",null,"Moves the mouse relatively to an element in the direction.\nThis can be used when the mouse should not hover over an element anymore."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Move mouse 30 pixels below button\nawait aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@param {number} x_offset - A (positive/negative) x direction."),(0,o.kt)("li",{parentName:"ul"},"@param {number} y_offset - A (positive/negative) y direction.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(32523).Z,width:"1920",height:"1080"})))}p.isMDXComponent=!0},32523:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/moveMouseRelativelyTo-8b410256841490fe7c1a0d454702cd63.gif"}}]);