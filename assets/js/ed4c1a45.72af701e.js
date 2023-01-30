"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23950],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const a={},i="macOS",s={unversionedId:"general/Troubleshooting/mac-os",id:"version-0.5.0/general/Troubleshooting/mac-os",title:"macOS",description:"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting",source:"@site/versioned_docs/version-0.5.0/general/07-Troubleshooting/mac-os.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/mac-os",permalink:"/docs/0.5.0/general/Troubleshooting/mac-os",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.5.0/general/07-Troubleshooting/mac-os.md",tags:[],version:"0.5.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/0.5.0/general/Troubleshooting/linux"},next:{title:"Signup",permalink:"/docs/0.5.0/general/askui User Portal/signup"}},l={},c=[{value:"Elements Can&#39;t Be Found / Annotated Screen Empty / UI Controller not starting",id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macos"},"macOS"),(0,o.kt)("h2",{id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting"},"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"macOS empty screen captured",src:n(87251).Z,width:"567",height:"354"})),(0,o.kt)("p",null,"macOS sometimes does not recognize an installation of askui UI Controller and, therefore,\ndoes not give it proper permissions although it looks like it. "),(0,o.kt)("p",null,"You can fix this, by heading\nover to ",(0,o.kt)("em",{parentName:"p"},"System Preferences > Security & Privacy"),".\nOpen the ",(0,o.kt)("em",{parentName:"p"},"Privacy")," tab and check if you can find the ",(0,o.kt)("em",{parentName:"p"},"askui-ui-controller")," (originally, it\nwas called ",(0,o.kt)("em",{parentName:"p"},"controlui-server")," so depending on your version you may see that\nname) under ",(0,o.kt)("em",{parentName:"p"},"Screen Recording")," and ",(0,o.kt)("em",{parentName:"p"},"Accessibility"),". "),(0,o.kt)("p",null,"If yes, revoke its permissions by unchecking\nthe corresponding checkboxes and removing the application  from each list by clicking the minus\n(",(0,o.kt)("em",{parentName:"p"},"-"),") button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"macOS Privacy settings",src:n(68659).Z,width:"567",height:"508"})),(0,o.kt)("p",null,"Head over to the installation of the askui UI Controller. If you did not install it manually,\nyou can find it under ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/askui/dist/release/<version>/darwin"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"<version>")," may be ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," or a semantic version like ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.8.0"),". In there, you should find\ncorresponding ",(0,o.kt)("inlineCode",{parentName:"p"},".app")," directory which is your installation of the askui UI Controller.\nStart it by double-clicking it in the ",(0,o.kt)("em",{parentName:"p"},"Finder"),". The application should ask for\n",(0,o.kt)("em",{parentName:"p"},"Screen Recording")," permissions which you have to grant for it to work. You should\nremove every reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"UiController")," from the tests, test helper files etc. so that\nthe lib does not override the installation or tries to start it automatically. Now, you can\nrun your tests starting the askui UI Controller manually each time. On the first run,\nyou are going to be asked for ",(0,o.kt)("em",{parentName:"p"},"Accessibility")," permissions\nwhich you also have to grant. After that, your test should run flawlessly as and you should\nbe able to capture what is shown on the screen as well as execute commands."),(0,o.kt)("p",null,"We are actively searching for a solution to improve the current state of affairs but Apple\ndoes not make it easy (which is good for your privacy but not so much for automation frameworks).\nBut be sure that we keep trying ;)"))}p.isMDXComponent=!0},87251:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/macos-empty-screen-4a1a780d3e64e1e62e6ad06d5bb696b6.png"},68659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/macos-privacy-settings-513d8744e86a6a6af6f59698f29752e6.png"}}]);