"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66694],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const i={sidebar_position:2},o="Installing askui",s={unversionedId:"general/Getting Started/getting-started",id:"version-0.2.7/general/Getting Started/getting-started",title:"Installing askui",description:"Requirements",source:"@site/versioned_docs/version-0.2.7/general/02-Getting Started/getting-started.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started",permalink:"/docs/0.2.7/general/Getting Started/getting-started",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.2.7/general/02-Getting Started/getting-started.md",tags:[],version:"0.2.7",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Why askui?",permalink:"/docs/0.2.7/general/Introduction/why-askui"},next:{title:"Write Your First Automation",permalink:"/docs/0.2.7/general/Getting Started/writing-your-first-test"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Access Token",id:"access-token",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-askui"},"Installing askui"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or above"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm.js")," version 7.10 or above"),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"li"},"Linux"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.2.7/general/Troubleshooting/linux###wayland"},"Information for Wayland"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Open a directory where you would like to place the tests. If you have no npm project set up inside that directory, you can set one up by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\n")),(0,a.kt)("p",null,"This is going to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file inside your present working directory which contains the configuration of your project including a description of its dependencies."),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"askui")," and other dependencies for writing and executing tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D askui typescript ts-node @types/jest ts-jest jest\n")),(0,a.kt)("p",null,"Quick explanation of all the dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/askui"},"askui"),": Controlling a multitude of operating systems with commands based on automatically detected screen elements, colors etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/typescript"},"typescript"),": Allowing you to write your tests in ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," instead of JavaScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},"ts-node"),": TypeScript execution and REPL for node.js, with source map and native ESM support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest"},"jest"),": Allowing you to write and run tests (",(0,a.kt)("inlineCode",{parentName:"li"},"describe"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"it"),", assertions, mocking etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-jest"},"ts-jest"),": A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/jest"},"@types/jest"),": Types for Jest")),(0,a.kt)("p",null,"If you don't like Jest, feel free to use another test framework, e.g., ",(0,a.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine")," or ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),"."),(0,a.kt)("p",null,"Now, we are ready to write our first test."),(0,a.kt)("h2",{id:"access-token"},"Access Token"),(0,a.kt)("p",null,"Currently, you can use our lib without any configuration. But in the future, as we need to prevent misuse of our api, we may need you to create some credentials through our ",(0,a.kt)("a",{parentName:"p",href:"https://app.v2.askui.com/"},"askui user portal")," (still, totally free) and ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.2.7/api/Configuration/askui-ui-control-client#credentials"},"configure our library to use these credentials")," for authenticating and authorising with our api."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.2.7/general/askui%20User%20Portal/signup"},"our documention on how to signup and create the credentials"),"."))}c.isMDXComponent=!0}}]);