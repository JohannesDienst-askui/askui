"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57987],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const i={sidebar_position:3},o="Installing AskUI",s={unversionedId:"general/Getting Started/getting-started",id:"version-0.11.6/general/Getting Started/getting-started",title:"Installing AskUI",description:"Requirements",source:"@site/versioned_docs/version-0.11.6/general/02-Getting Started/getting-started.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started",permalink:"/docs/general/Getting Started/getting-started",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/general/02-Getting Started/getting-started.md",tags:[],version:"0.11.6",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"How AskUI Works",permalink:"/docs/general/Getting Started/guide-how-askui-works"},next:{title:"Framework Configuration",permalink:"/docs/general/Getting Started/configure_test_framework"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"macOS",id:"macos",level:2},{value:"Installation",id:"installation",level:2},{value:"Access Token",id:"access-token",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-askui"},"Installing AskUI"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or above"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm.js")," version 7.10 or above"),(0,a.kt)("li",{parentName:"ul"},"A text editor/IDE like ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"li"},"Linux"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/general/Troubleshooting/linux#wayland"},"Information for Wayland"),".")),(0,a.kt)("h2",{id:"macos"},"macOS"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Some users have reported instability running AskUI on macOS with external displays and/or ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac"},"virtual desktops (called Spaces)"),". If you experience similar issues, please disconnect external displays and close virtual desktops, or see ",(0,a.kt)("a",{parentName:"p",href:"/docs/general/Integrations/containers"},"documentation on running AskUI in Docker"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Open a directory where you would like to place the AskUI setup. If you haven\u2019t already, set up an NPM project by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,a.kt)("p",null,"This will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file inside your present working directory which contains the configuration of your project including a description of its dependencies."),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"askui")," and other dependencies for writing and executing tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D askui @askui/askui-reporters typescript ts-node @types/jest ts-jest jest\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Quick explanation of all the dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/askui"},"AskUI"),": Controlling a multitude of operating systems with commands based on automatically detected screen elements etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/askui-reporters"},"@askui/askui-reporters"),": AskUI reporters for nice looking reports."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/typescript"},"typescript"),": Allowing you to write your tests in ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," instead of JavaScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},"ts-node"),": TypeScript execution and REPL for node.js, with source map and native ESM support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jest"},"jest"),": Allowing you to write and run tests (",(0,a.kt)("inlineCode",{parentName:"li"},"describe"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"it"),", assertions, mocking etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-jest"},"ts-jest"),": A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@types/jest"},"@types/jest"),": Types for Jest"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To create and serve a static HTML-Report you have to install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/allure-framework/allure2#download"},"Allure")," and then call ",(0,a.kt)("inlineCode",{parentName:"p"},"allure serve ./allure-results")," from your root-directory.")),(0,a.kt)("h2",{id:"access-token"},"Access Token"),(0,a.kt)("p",null,"As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,a.kt)("a",{parentName:"p",href:"https://app.askui.com/"},"AskUI Studio")," (while still free) and ",(0,a.kt)("a",{parentName:"p",href:"../../api/Configuration/askui-ui-control-client#credentials"},"configure our library to use these credentials")," for authenticating and authorizing with our API."))}u.isMDXComponent=!0}}]);