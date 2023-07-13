"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21807],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const i={sidebar_position:4},a="Windows",l={unversionedId:"general/Troubleshooting/windows",id:"version-0.10.5/general/Troubleshooting/windows",title:"Windows",description:"askui UI Controller",source:"@site/versioned_docs/version-0.10.5/general/07-Troubleshooting/windows.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/windows",permalink:"/docs/0.10.5/general/Troubleshooting/windows",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/07-Troubleshooting/windows.md",tags:[],version:"0.10.5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/0.10.5/general/Troubleshooting/linux"},next:{title:"macOS",permalink:"/docs/0.10.5/general/Troubleshooting/mac-os"}},s={},u=[{value:"askui UI Controller",id:"askui-ui-controller",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows"},"Windows"),(0,o.kt)("h2",{id:"askui-ui-controller"},"askui UI Controller"),(0,o.kt)("p",null,"On Windows, the askui UI Controller may not terminate after each execution. This may lead to problems when using the askui UI Controller in a pipeline like a pipeline's run not coming to an end."),(0,o.kt)("p",null,"In this case you can force termination of the askui UI Controller. The ",(0,o.kt)("inlineCode",{parentName:"p"},"UiController.stop()")," takes an optional boolean argument which is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," by default. If we pass ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"UiController.stop()")," method, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"uiController.stop(true)"),", we kill the askui UI Controller process. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await uiController.stop(true);\n")),(0,o.kt)("p",null,"If you are using the Jest framework to execute your instructions, you can also force Jest to exit as described on our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.5/general/Troubleshooting/jest"},"Jest-Troubleshooting page"),". This option terminates all processes which were set up and didn't close properly. The first option explicitly stops the askui UI Controller."))}p.isMDXComponent=!0}}]);