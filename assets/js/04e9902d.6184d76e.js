"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4015],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={},i="Configure Test Frameworks",s={unversionedId:"general/Tooling/configure_test_framework",id:"version-v0.10.1/general/Tooling/configure_test_framework",title:"Configure Test Frameworks",description:"Basically, you can run askui instructions with every popular JavaScript/TypeScript test framework, e.g., Jest or Jasmine.",source:"@site/versioned_docs/version-v0.10.1/general/05-Tooling/configure_test_framework.md",sourceDirName:"general/05-Tooling",slug:"/general/Tooling/configure_test_framework",permalink:"/docs/general/Tooling/configure_test_framework",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-v0.10.1/general/05-Tooling/configure_test_framework.md",tags:[],version:"v0.10.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Annotation",permalink:"/docs/general/Tooling/annotation"},next:{title:"Tutorials",permalink:"/docs/general/Tutorials/"}},l={},c=[{value:"Jest",id:"jest",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-test-frameworks"},"Configure Test Frameworks"),(0,o.kt)("p",null,"Basically, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"askui")," instructions with every popular JavaScript/TypeScript test framework, e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," or ",(0,o.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine"),"."),(0,o.kt)("h2",{id:"jest"},"Jest"),(0,o.kt)("p",null,"You can configure Jest with the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts"),". It should look something like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: ['Math']\n};\n")),(0,o.kt)("p",null,"In case your Jest tests are executed slowly, make sure you have added ",(0,o.kt)("inlineCode",{parentName:"p"},"'Math'")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The option ",(0,o.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals")," was named ",(0,o.kt)("inlineCode",{parentName:"p"},"extraGlobals")," in Jest v27 and lower.")))}u.isMDXComponent=!0}}]);