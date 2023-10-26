"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10322],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={sidebar_position:2,pagination_next:"general/Getting Started/write-your-first-instruction"},i="Install AskUI Windows",l={unversionedId:"general/Getting Started/getting-started",id:"general/Getting Started/getting-started",title:"Install AskUI Windows",description:"Requirements",source:"@site/docs/general/02-Getting Started/getting-started.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/getting-started",permalink:"/docs/next/general/Getting Started/getting-started",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/02-Getting Started/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"Start",permalink:"/docs/next/general/Getting Started/start"},next:{title:"Write Your First Instruction",permalink:"/docs/next/general/Getting Started/write-your-first-instruction"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Access Token",id:"access-token",level:2},{value:"Installation",id:"installation",level:2},{value:"Download Remote Device Controller",id:"download-remote-device-controller",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-askui-windows"},"Install AskUI Windows"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or above"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"npm")," in version 7.10 or above (usually comes with the Node.js installation)"),(0,a.kt)("li",{parentName:"ul"},"A text editor/IDE like ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"))),(0,a.kt)("h2",{id:"access-token"},"Access Token"),(0,a.kt)("p",null,"As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,a.kt)("strong",{parentName:"p"},"AskUI Studio")," (for free)."),(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"https://xa5a040gvfz.typeform.com/to/Ndh2NkV6"},"fill out this form")," to schedule a demonstration or ",(0,a.kt)("a",{parentName:"p",href:"https://xa5a040gvfz.typeform.com/to/IHdr0qY5"},"request a trial")," to obtain access to ",(0,a.kt)("strong",{parentName:"p"},"AskUI Studio"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Open a directory where you would like to place the AskUI setup and run this command. Answer all the questions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx askui@latest init -s windows\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To create and serve a static HTML-Report you have to install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/allure-framework/allure2#download"},"Allure")," and then call ",(0,a.kt)("inlineCode",{parentName:"p"},"allure serve ./allure-results")," from your root-directory.")),(0,a.kt)("h2",{id:"download-remote-device-controller"},"Download Remote Device Controller"),(0,a.kt)("p",null,"Download the installer ",(0,a.kt)("a",{parentName:"p",href:"https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe"},"here"),". Start it and follow the installation process."),(0,a.kt)("p",null,"Start the installed ",(0,a.kt)("strong",{parentName:"p"},"Remote Device Controller")," manually and select the screen you want to use. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Either through the start menu, desktop shortcut or the executable in the install directory.")))}d.isMDXComponent=!0}}]);