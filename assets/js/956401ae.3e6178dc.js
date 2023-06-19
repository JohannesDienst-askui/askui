"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77975],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(k,r(r({ref:t},p),{},{components:n})):i.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(25773),l=(n(27378),n(35318));const o={},r="askui UI Controller",a={unversionedId:"api/Configuration/askui-ui-controller",id:"version-0.10.3/api/Configuration/askui-ui-controller",title:"askui UI Controller",description:"Properties",source:"@site/versioned_docs/version-0.10.3/api/08-Configuration/askui-ui-controller.md",sourceDirName:"api/08-Configuration",slug:"/api/Configuration/askui-ui-controller",permalink:"/docs/0.10.3/api/Configuration/askui-ui-controller",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.3/api/08-Configuration/askui-ui-controller.md",tags:[],version:"0.10.3",frontMatter:{},sidebar:"apiSidebar",previous:{title:"askui UI Control Client",permalink:"/docs/0.10.3/api/Configuration/askui-ui-control-client"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"binaryVersion",id:"binaryversion",level:3},{value:"display",id:"display",level:3},{value:"host",id:"host",level:3},{value:"logFilePath",id:"logfilepath",level:3},{value:"logLevel",id:"loglevel",level:3},{value:"minimize",id:"minimize",level:3},{value:"overWriteBinary",id:"overwritebinary",level:3},{value:"port",id:"port",level:3},{value:"actionDelayInMs",id:"actiondelayinms",level:3},{value:"Example",id:"example",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"askui-ui-controller"},"askui UI Controller"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"binaryversion"},"binaryVersion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"binaryVersion"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"latest"))),(0,l.kt)("p",null,"There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.\nYou can specify which binary version of server you want to download and use. The default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," which will\ndownload the newest version."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"display"},"display"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"display"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"))),(0,l.kt)("p",null,"You can choose on which display you want to excecute all\ntests. You can only perform all tests on one display.\nThe application which you want to automate should be open and selected on your chosen display."),(0,l.kt)("p",null,"The default value of display is ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," which is your main monitor. If you want to use your\nsecond monitor you can change the value to ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," (",(0,l.kt)("inlineCode",{parentName:"p"},"2")," for your third monitor etc.)."),(0,l.kt)("p",null,"There is also a possibility to detect the value of your monitors.\nAfter the start of the askui UI Controller you should see an askui icon. After clicking on this icon you can choose the option ",(0,l.kt)("inlineCode",{parentName:"p"},"Show"),".\nYou will see the same window as the following image."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Select Monitor Option",src:n(51731).Z,width:"512",height:"358"})),(0,l.kt)("p",null," Now you can identify the order of your monitors and you can also select the monitor in this configuration."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"host"},"host"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"host"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"127.0.0.1"))),(0,l.kt)("p",null,"The host the askui UI Controller is running on."),(0,l.kt)("h3",{id:"logfilepath"},"logFilePath"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"logFilePath"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"<temp-dir>/askui/askui-server.log"))),(0,l.kt)("p",null,"It is possible to specify a path for your log files. Per default we create the askui-server.log file and askui folder in your temp folder."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loglevel"},"logLevel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"logLevel"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"LogLevels")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"debug"))),(0,l.kt)("p",null,"You can set the log level using the ",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevels"),". The following values are available: ",(0,l.kt)("inlineCode",{parentName:"p"},'"fatal"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"error"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"warn"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"info"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"debug"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"trace"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"silent"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"verbose"'),". All log levels are defined in an ",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevels")," enum."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minimize"},"minimize"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minimize"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"The default value of this property is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". This means that\naskui UI Controller will be started as minimized window."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"overwritebinary"},"overWriteBinary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"overWriteBinary"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"Download the provided Version of askui UI Controller. If a version is already downloaded. This version will be overwritten."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"port"},"port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"port"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"6769"))),(0,l.kt)("p",null,"The port the askui UI Controller is running on."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"actiondelayinms"},"actionDelayInMs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"actionDelayInMs"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," - Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1000"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"actionDelayInMs")," is the time that the askui UI controller waits between actions. This can be used to slow down or speed up the execution."),(0,l.kt)("p",null,"Let's say, you want to click on the login button and then navigate to the home page by clicking on the home button but you have to wait 2s before clicking it because it takes some time logging in. You can increase the ",(0,l.kt)("inlineCode",{parentName:"p"},"actionDelayInMs")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"2000")," in this case. But be careful, as it is going to slow down all your instructions. It may be better to use ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.10.3/api/Actions/waitfor"},"waitFor()")," between the two clicking actions."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UiControlClient, UiController, LogLevels } from 'askui';\n\ndescribe('jest with askui', () => {\n  \n  // Server for controlling the operating system\n  let uiController: UiController;\n  \n  beforeAll(async () => {\n    uiController = new UiController({\n    \n      // choosing the second monitor \n      display: 1,\n\n      // download the latest version of the server\n      binaryVersion: 'latest',\n\n      // start askui UI Controller as minimized application\n      minimize: true,\n\n      // using error loglevel\n      logLevel: LogLevels.ERROR,\n\n      // Set the action delay lower than the default\n      actionDelayInMs: 500,\n\n    });\n  })\n})\n")))}c.isMDXComponent=!0},51731:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-monitor-7fb53b3c1759a29abc877c37097c9022.png"}}]);