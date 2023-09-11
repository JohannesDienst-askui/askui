"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97650],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},i="annotate",s={unversionedId:"api/Annotation/annotate",id:"version-0.11.4/api/Annotation/annotate",title:"annotate",description:"production",source:"@site/versioned_docs/version-0.11.4/api/07-Annotation/annotate.md",sourceDirName:"api/07-Annotation",slug:"/api/Annotation/annotate",permalink:"/docs/0.11.4/api/Annotation/annotate",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.4/api/07-Annotation/annotate.md",tags:[],version:"0.11.4",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annotate"},"annotate"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image."),(0,a.kt)("p",null,"The annotated image is saved to ",(0,a.kt)("inlineCode",{parentName:"p"},"<project_root>/report"),"."),(0,a.kt)("p",null,"See also ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.11.4/general/Element%20Selection/annotations-and-screenshots#static-annotation"},"the detailed explanation"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// The annoted image is saved to `<project_root>/report`.\nawait aui.annotate();\n\n// or\n\nUiControlClient.annotate({\n    imagePath: '<your-image-path>',\n    outputPath: '<path-of-the-generated-html>',\n    fileNamePrefix: '<prefix-of-the-output-file>',\n    customElements: CustomElementJson[] // A list of custom elements. The AI model will use them to detect elements similar to them.\n});\n")))}u.isMDXComponent=!0}}]);