"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23066],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={},i="Configure Test Frameworks",s={unversionedId:"general/Best Practice/configure_test_framework",id:"version-0.3.1/general/Best Practice/configure_test_framework",title:"Configure Test Frameworks",description:"Basically, you can run askui tests with every popular JavaScript/TypeScript test framework, e.g., Jest or Jasmine.",source:"@site/versioned_docs/version-0.3.1/general/03-Best Practice/configure_test_framework.md",sourceDirName:"general/03-Best Practice",slug:"/general/Best Practice/configure_test_framework",permalink:"/docs/0.3.1/general/Best Practice/configure_test_framework",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.3.1/general/03-Best Practice/configure_test_framework.md",tags:[],version:"0.3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Write Your First Automation",permalink:"/docs/0.3.1/general/Getting Started/write-your-first-automation"},next:{title:"Selecting UI Elements",permalink:"/docs/0.3.1/general/Best Practice/selecting_ui_elements"}},c={},l=[{value:"Jest",id:"jest",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-test-frameworks"},"Configure Test Frameworks"),(0,a.kt)("p",null,"Basically, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"askui")," tests with every popular JavaScript/TypeScript test framework, e.g., ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," or ",(0,a.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine"),"."),(0,a.kt)("h2",{id:"jest"},"Jest"),(0,a.kt)("p",null,"You can configure Jest with the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.ts"),". It should look something like this: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  preset: 'ts-jest',\n  testEnvironment: 'node',\n  setupFilesAfterEnv: ['./helper/jest.setup.ts'],\n  sandboxInjectedGlobals: ['Math']\n};\n")),(0,a.kt)("p",null,"In case your Jest tests are executed slowly, make sure you have added ",(0,a.kt)("inlineCode",{parentName:"p"},"'Math'")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The option ",(0,a.kt)("inlineCode",{parentName:"p"},"sandboxInjectedGlobals")," was named ",(0,a.kt)("inlineCode",{parentName:"p"},"extraGlobals")," in Jest v27 and lower.")))}u.isMDXComponent=!0}}]);