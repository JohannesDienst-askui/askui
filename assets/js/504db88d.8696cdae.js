"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37326],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const i={sidebar_position:3,pagination_next:"general/Getting Started/write-your-first-instruction"},o="Install AskUI Android",s={unversionedId:"general/Getting Started/getting-started-android",id:"version-0.10.5/general/Getting Started/getting-started-android",title:"Install AskUI Android",description:"Requirements",source:"@site/versioned_docs/version-0.10.5/general/02-Getting Started/getting-started-android.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started-android",permalink:"/docs/0.10.5/general/Getting Started/getting-started-android",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/02-Getting Started/getting-started-android.md",tags:[],version:"0.10.5",sidebarPosition:3,frontMatter:{sidebar_position:3,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"Installing askui",permalink:"/docs/0.10.5/general/Getting Started/getting-started"},next:{title:"Write Your First Instruction",permalink:"/docs/0.10.5/general/Getting Started/write-your-first-instruction"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Access Token",id:"access-token",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-askui-android"},"Install AskUI Android"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or above"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"npm")," in version 7.10 or above (usually comes with the Node.js installation)"),(0,a.kt)("li",{parentName:"ul"},"A text editor/IDE like ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Open a directory where you would like to place the AskUI setup. If you haven\u2019t already, set up an NPM project by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,a.kt)("p",null,"This will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file inside your present working directory which contains the configuration of your project including a description of its dependencies."),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"askui")," and other dependencies for writing and executing tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D askui @askui/askui-reporters typescript ts-node @types/jest ts-jest jest\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Quick explanation of all the dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/askui"},"AskUI"),": Controlling a multitude of operating systems with commands based on automatically detected screen elements etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/askui-reporters"},"@askui/askui-reporters"),": AskUI reporters for nice looking reports."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/typescript"},"typescript"),": Allowing you to write your tests in ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," instead of JavaScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},"ts-node"),": TypeScript execution and REPL for node.js, with source map and native ESM support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest"},"jest"),": Allowing you to write and run tests (",(0,a.kt)("inlineCode",{parentName:"li"},"describe"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"it"),", assertions, mocking etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-jest"},"ts-jest"),": A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/jest"},"@types/jest"),": Types for Jest"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To create and serve a static HTML-Report you have to install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/allure-framework/allure2#download"},"Allure")," and then call ",(0,a.kt)("inlineCode",{parentName:"p"},"allure serve ./allure-results")," from your root-directory.")),(0,a.kt)("h2",{id:"access-token"},"Access Token"),(0,a.kt)("p",null,"As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,a.kt)("strong",{parentName:"p"},"AskUI Studio")," (while still free) and ",(0,a.kt)("a",{parentName:"p",href:"../../api/Configuration/askui-ui-control-client#credentials"},"configure our library to use these credentials")," for authenticating and authorizing with our API."),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"https://xa5a040gvfz.typeform.com/to/Ndh2NkV6"},"fill out this form")," to schedule a demonstration or ",(0,a.kt)("a",{parentName:"p",href:"https://xa5a040gvfz.typeform.com/to/IHdr0qY5"},"request a trial")," to obtain access to ",(0,a.kt)("strong",{parentName:"p"},"AskUI Studio"),"."))}u.isMDXComponent=!0}}]);