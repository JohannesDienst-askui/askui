"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86207],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(25773),r=(n(27378),n(35318));const a={sidebar_position:5},i="macOS",s={unversionedId:"general/Troubleshooting/mac-os",id:"version-0.13.1/general/Troubleshooting/mac-os",title:"macOS",description:"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting",source:"@site/versioned_docs/version-0.13.1/general/07-Troubleshooting/mac-os.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/mac-os",permalink:"/docs/general/Troubleshooting/mac-os",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/07-Troubleshooting/mac-os.md",tags:[],version:"0.13.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Windows",permalink:"/docs/general/Troubleshooting/windows"},next:{title:"Proxy",permalink:"/docs/general/Troubleshooting/proxy"}},l={},c=[{value:"Elements Can&#39;t Be Found / Annotated Screen Empty / UI Controller not starting",id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting",level:2},{value:"Mouse Cursor Not Moving as Expected",id:"mouse-cursor-not-moving-as-expected",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macos"},"macOS"),(0,r.kt)("h2",{id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting"},"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"macOS empty screen captured",src:n(77169).Z,width:"567",height:"354"})),(0,r.kt)("p",null,"macOS sometimes does not recognize an installation of an AskUI UI Controller and, therefore,\ndoes not give it proper permissions although it looks like it. "),(0,r.kt)("p",null,"You can fix this, by heading\nover to ",(0,r.kt)("em",{parentName:"p"},"System Preferences > Security & Privacy"),".\nOpen the ",(0,r.kt)("em",{parentName:"p"},"Privacy")," tab and check if you can find the ",(0,r.kt)("em",{parentName:"p"},"askui-ui-controller")," under ",(0,r.kt)("em",{parentName:"p"},"Screen Recording")," and ",(0,r.kt)("em",{parentName:"p"},"Accessibility"),". "),(0,r.kt)("p",null,"If yes, revoke its permissions by unchecking\nthe corresponding checkboxes and removing the application from each list by clicking the minus\n(",(0,r.kt)("em",{parentName:"p"},"-"),") button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"macOS Privacy settings",src:n(49678).Z,width:"567",height:"508"})),(0,r.kt)("p",null,"Head over to the installation of the AskUI UI Controller. If you did not install it manually,\nyou can find it under ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/askui/dist/release/<version>/darwin"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"<version>")," may be ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," or a semantic version like ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.0"),". In there, you should find\ncorresponding ",(0,r.kt)("inlineCode",{parentName:"p"},".app")," directory which is your installation of the AskUI UI Controller.\nStart it by double-clicking it in the ",(0,r.kt)("em",{parentName:"p"},"Finder"),"."),(0,r.kt)("p",null,"The application should ask for\n",(0,r.kt)("em",{parentName:"p"},"Screen Recording")," permissions which you have to grant for it to work. You should\nremove every reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"UiController")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"helper/jest.setup.ts")," so that\nthe AskUI lib does not override the installation or tries to start it automatically."),(0,r.kt)("p",null,"Now, you can\nrun your instructions starting the AskUI UI Controller manually each time. On the first run,\nyou are going to be asked for ",(0,r.kt)("em",{parentName:"p"},"Accessibility")," permissions\nwhich you also have to grant. After that, your instructions should run flawlessly as and you should\nbe able to capture what is shown on the screen as well as execute instructions."),(0,r.kt)("p",null,"We are actively searching for a solution to improve the current state of affairs but Apple\ndoes not make it easy (which is good for your privacy but not so much for automation frameworks).\nBut be sure that we keep trying ;) "),(0,r.kt)("h2",{id:"mouse-cursor-not-moving-as-expected"},"Mouse Cursor Not Moving as Expected"),(0,r.kt)("p",null,"Apple devices that have a display manufactured by Apple, i.e., Macbook, iMac have a so-called Retina Display, and they have a higher pixel density. "),(0,r.kt)("p",null,"To use the actions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"moveMouse()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"moveMouseRelatively()"),", the ",(0,r.kt)("strong",{parentName:"p"},"coordinates should be doubled")," in order to move the mouse cursor as expected."),(0,r.kt)("p",null,"For example, let's say that your screen resolution is of 1920x1080. If you want to move the mouse cursor to the middle of the screen, the correct numeric arguments are as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui.moveMouse(1920,1080).exec();\n")),(0,r.kt)("p",null,"The coordinate of the middle of the screen is (960,540). But if you use these numbers, it will move the cursor only half of the expected distance."))}p.isMDXComponent=!0},77169:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/macos-empty-screen-4a1a780d3e64e1e62e6ad06d5bb696b6.png"},49678:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/macos-privacy-settings-513d8744e86a6a6af6f59698f29752e6.png"}}]);