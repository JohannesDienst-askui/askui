"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16919],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(25773),r=(n(27378),n(35318));const a={},i="Remote Device Controller",l={unversionedId:"api/Remote-Device-Controller",id:"api/Remote-Device-Controller",title:"Remote Device Controller",description:"The remote device controller is currently in preview release and only works on Windows and for Android devices controlled from a Windows machine.",source:"@site/docs/api/09-Remote-Device-Controller.md",sourceDirName:"api",slug:"/api/Remote-Device-Controller",permalink:"/docs/next/api/Remote-Device-Controller",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/09-Remote-Device-Controller.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"apiSidebar",previous:{title:"askui UI Controller",permalink:"/docs/next/api/Configuration/askui-ui-controller"},next:{title:"Supported Keys",permalink:"/docs/next/api/Supported-Keys"}},p={},s=[{value:"Introduction &amp; Setup",id:"introduction--setup",level:2},{value:"Installer",id:"installer",level:3},{value:"Manual Update of Remote Device Controller",id:"manual-update-of-remote-device-controller",level:3},{value:"Features",id:"features",level:2},{value:"Type Like a Human",id:"type-like-a-human",level:3},{value:"Android on Windows",id:"android-on-windows",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Mouse Movement",id:"mouse-movement",level:3},{value:"Log Files",id:"log-files",level:3},{value:"Android",id:"android",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-device-controller"},"Remote Device Controller"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The remote device controller is currently in ",(0,r.kt)("strong",{parentName:"p"},"preview")," release and only works on ",(0,r.kt)("strong",{parentName:"p"},"Windows")," and for ",(0,r.kt)("strong",{parentName:"p"},"Android")," devices controlled from a ",(0,r.kt)("strong",{parentName:"p"},"Windows")," machine."),(0,r.kt)("p",{parentName:"admonition"},"The installer only works on ",(0,r.kt)("strong",{parentName:"p"},"Windows"),".")),(0,r.kt)("h2",{id:"introduction--setup"},"Introduction & Setup"),(0,r.kt)("h3",{id:"installer"},"Installer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the installer from ",(0,r.kt)("a",{parentName:"p",href:"https://files.askui.com/releases/preview/v23.10.01/askui+Installer.exe"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the installer and follow the installation process."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Installation requires administrator rights."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new AskUI project as ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/general/Getting%20Started/getting-started"},"described in our documentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open file ",(0,r.kt)("inlineCode",{parentName:"p"},"test/helper/jest.setup.ts")," in the AskUI project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove ",(0,r.kt)("inlineCode",{parentName:"p"},"await uiController.start();")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll")," function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove ",(0,r.kt)("inlineCode",{parentName:"p"},"await uiController.stop();")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"afterAll")," function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the installed UI Controller manually and select the screen you want to use. "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Either through the start menu, desktop shortcut or the executable in the install directory."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should be good to go now to run your workflows as described in documentation."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: Ensure that the UI Controller is running before you start a workflow.")))),(0,r.kt)("h3",{id:"manual-update-of-remote-device-controller"},"Manual Update of Remote Device Controller"),(0,r.kt)("p",null,"Make use of our preview build to use the latest features by following the mentioned steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to function ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll")," there you must modify in file ",(0,r.kt)("inlineCode",{parentName:"p"},"test/helper/jest.setup.ts"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that you have the required import ",(0,r.kt)("inlineCode",{parentName:"p"},"UiController"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"import { UiController } from 'askui';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Also add the global variable if it is missing:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"let uiController: UiController;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the creation of ",(0,r.kt)("inlineCode",{parentName:"p"},"uiController")," in file ",(0,r.kt)("inlineCode",{parentName:"p"},"test/helper/jest.setup.ts"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},' uiController = new UiController({\n   /**\n     * Select the display you want to run your tests on, display 0 is your main display;\n     * ignore if you have only one display\n     */\n   display: <YOUR_DISPLAY_ID>,\n   binaryVersion: "tdk-23.10.1-preview-release-1"\n });\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: The ui controller creation starts typically with ",(0,r.kt)("inlineCode",{parentName:"p"},"uiController = await UiController({ ...")," but the instance name might be different."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_DISPLAY_ID>")," with the display (starting with 0 for the first display) that you want to use:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"display: <YOUR_DISPLAY_ID>,\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that the controller gets started before the UI controller client tries (",(0,r.kt)("inlineCode",{parentName:"p"},"aui"),") to connect. Therefore the last two lines of the function should do:"),(0,r.kt)("p",{parentName:"li"},"   await uiController.start();\nawait aui.connect();"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: The ui controller client creation starts typically with ",(0,r.kt)("inlineCode",{parentName:"p"},"aui = await UiControlClient.build({ ...")," but the instance name might be different."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that in function ",(0,r.kt)("inlineCode",{parentName:"p"},"afterAll")," the controller gets stopped after the ui controller client closes the connection:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"aui.close();\nawait uiController.stop(true);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should be good to go now to run your workflows as described in documentation."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: New features are only supported on Windows 10/11.")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"type-like-a-human"},"Type Like a Human"),(0,r.kt)("p",null,"Together with the asynchronous execution of actions we also introduce natural typing. The\nfirst iteration of this feature uses the typical typing speed of a human."),(0,r.kt)("h3",{id:"android-on-windows"},"Android on Windows"),(0,r.kt)("p",null,"AskUI automation works on an Android device that is controlled from a Windows machine. It allows you to run a workflow on an Android device, including recording the session. Instructions how to setup the Android workflow can be found in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/general/Executing%20Automations/mobile-automation#android-automation%5D"},"documentation"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please also read the knows issues section since this is just a preview feature.")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("h3",{id:"mouse-movement"},"Mouse Movement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may encounter issues when mouse pointer acceleration is enabled.")),(0,r.kt)("h3",{id:"log-files"},"Log Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log files are stored under ",(0,r.kt)("inlineCode",{parentName:"li"},"<YOUR_USER_FOLDER>/.askui/"),".")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recording on an Android device is not stable."),(0,r.kt)("li",{parentName:"ul"},"Recorded resolution might be lower than the device resolution."),(0,r.kt)("li",{parentName:"ul"},"Recorded video might be empty or single frame in cases no screen updates occurred during recording."),(0,r.kt)("li",{parentName:"ul"},"We don't support landscape mode on Android."),(0,r.kt)("li",{parentName:"ul"},"Devices with high DPI screen might not work as expected.")))}d.isMDXComponent=!0}}]);