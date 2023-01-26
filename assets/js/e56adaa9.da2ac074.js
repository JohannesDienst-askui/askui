"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38799],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const i={displayed_sidebar:"apiSidebar"},a="icon",c={unversionedId:"api/Filters/icon",id:"version-0.7.0/api/Filters/icon",title:"icon",description:"Filters for an UI element 'icon'.",source:"@site/versioned_docs/version-0.7.0/api/03-Filters/icon.md",sourceDirName:"api/03-Filters",slug:"/api/Filters/icon",permalink:"/docs/api/Filters/icon",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.0/api/03-Filters/icon.md",tags:[],version:"0.7.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"icon"},"icon"),(0,o.kt)("p",null,"Filters for an UI element 'icon'."),(0,o.kt)("p",null,"You can combine it with the 'withText' command to look for a specific icon."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"icon().withText('plus')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This is an alpha feature. The prediction of the icon name is sometimes unstable. Use custom elements as an alternative."))}u.isMDXComponent=!0}}]);