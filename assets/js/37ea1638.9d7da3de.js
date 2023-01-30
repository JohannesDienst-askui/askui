"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7131],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(25773),o=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},i="or",c={unversionedId:"api/Relations/or",id:"version-0.7.1/api/Relations/or",title:"or",description:"Logic or operator",source:"@site/versioned_docs/version-0.7.1/api/04-Relations/or.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/or",permalink:"/docs/0.7.1/api/Relations/or",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.1/api/04-Relations/or.md",tags:[],version:"0.7.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"or"},"or"),(0,o.kt)("p",null,"Logic or operator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"scene 1\n--------------  ---------------\n|  button    |  |  icon       |\n--------------  ---------------\n\nscene 2\n--------------  ---------------\n|  button    |  |  text       |\n--------------  ---------------\n\n")),(0,o.kt)("p",null,"In case, that your reference element can have multiple values, in the following example, the element right of the button can be either icon or text.\nYou can use ",(0,o.kt)("strong",{parentName:"p"},"the ",(0,o.kt)("inlineCode",{parentName:"strong"},"or()")," relation"),", so your teststep is valid for both scenes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const button = await aui.get().button().rightOf().icon().or().text().exec();\nconsole.log(button);\n")),(0,o.kt)("p",null,"Returns the same button for both cases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"}," console output: [\n  DetectedElement {\n     name: 'BUTTON',\n     text: 'button',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n")))}u.isMDXComponent=!0}}]);