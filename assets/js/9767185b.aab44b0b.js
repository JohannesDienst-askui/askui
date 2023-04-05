"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41739],{35318:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(m,l(l({ref:t},f),{},{components:r})):n.createElement(m,l({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},l="leftOf",i={unversionedId:"api/Relations/leftof",id:"version-0.8.0/api/Relations/leftof",title:"leftOf",description:"production",source:"@site/versioned_docs/version-0.8.0/api/04-Relations/leftof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/leftof",permalink:"/docs/api/Relations/leftof",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.8.0/api/04-Relations/leftof.md",tags:[],version:"0.8.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},c=[],f={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"leftof"},"leftOf"),(0,o.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Filters for an element left of another element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------  --------------\n|  leftEl    |  |  rightEl   |\n--------------  --------------\n\n// Returns leftEl because leftEl is left of rightEl\n...leftEl().leftOf().rightEl()\n// Returns no element because rightEl is left of leftEl\n...rightEl().leftOf().leftEl()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(22087).Z,width:"1920",height:"1080"})))}p.isMDXComponent=!0},22087:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"}}]);