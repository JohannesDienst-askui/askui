"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4],{83424:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var o=i(17624),s=i(4552);const l={},r="askui UI Controller",t={id:"api/Configuration/askui-ui-controller",title:"askui UI Controller",description:"Properties",source:"@site/versioned_docs/version-0.11.6/api/08-Configuration/askui-ui-controller.md",sourceDirName:"api/08-Configuration",slug:"/api/Configuration/askui-ui-controller",permalink:"/docs/0.11.6/api/Configuration/askui-ui-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/api/08-Configuration/askui-ui-controller.md",tags:[],version:"0.11.6",frontMatter:{},sidebar:"apiSidebar",previous:{title:"askui UI Control Client",permalink:"/docs/0.11.6/api/Configuration/askui-ui-control-client"},next:{title:"Supported Keys",permalink:"/docs/0.11.6/api/Supported-Keys"}},a={},c=[{value:"Properties",id:"properties",level:2},{value:"binaryVersion",id:"binaryversion",level:3},{value:"display",id:"display",level:3},{value:"host",id:"host",level:3},{value:"logFilePath",id:"logfilepath",level:3},{value:"logLevel",id:"loglevel",level:3},{value:"minimize",id:"minimize",level:3},{value:"overWriteBinary",id:"overwritebinary",level:3},{value:"port",id:"port",level:3},{value:"actionDelayInMs",id:"actiondelayinms",level:3},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"askui-ui-controller",children:"askui UI Controller"}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"binaryversion",children:"binaryVersion"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"binaryVersion"}),": ",(0,o.jsx)(n.code,{children:"string"})," - Default: ",(0,o.jsx)(n.code,{children:"latest"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["There are different versions of the askui UI Controller. Not all versions are supported for all operating systems.\nYou can specify which binary version of server you want to download and use. The default value is ",(0,o.jsx)(n.code,{children:"latest"})," which will\ndownload the newest version."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"display",children:"display"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"display"}),": ",(0,o.jsx)(n.code,{children:"number"})," - Default: ",(0,o.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can choose on which display you want to excecute all\ntests. You can only perform all tests on one display.\nThe application which you want to automate should be open and selected on your chosen display."}),"\n",(0,o.jsxs)(n.p,{children:["The default value of display is ",(0,o.jsx)(n.code,{children:"0"})," which is your main monitor. If you want to use your\nsecond monitor you can change the value to ",(0,o.jsx)(n.code,{children:"1"})," (",(0,o.jsx)(n.code,{children:"2"})," for your third monitor etc.)."]}),"\n",(0,o.jsxs)(n.p,{children:["There is also a possibility to detect the value of your monitors.\nAfter the start of the askui UI Controller you should see an askui icon. After clicking on this icon you can choose the option ",(0,o.jsx)(n.code,{children:"Show"}),".\nYou will see the same window as the following image."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select Monitor Option",src:i(29303).c+"",width:"512",height:"358"})}),"\n",(0,o.jsx)(n.p,{children:"Now you can identify the order of your monitors and you can also select the monitor in this configuration."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"host",children:"host"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"host"}),": ",(0,o.jsx)(n.code,{children:"string"})," - Default: ",(0,o.jsx)(n.code,{children:"127.0.0.1"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The host the askui UI Controller is running on."}),"\n",(0,o.jsx)(n.h3,{id:"logfilepath",children:"logFilePath"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"logFilePath"}),": ",(0,o.jsx)(n.code,{children:"string"})," - Default: ",(0,o.jsx)(n.code,{children:"<temp-dir>/askui/askui-server.log"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It is possible to specify a path for your log files. Per default we create the askui-server.log file and askui folder in your temp folder."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"loglevel",children:"logLevel"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"logLevel"}),": ",(0,o.jsx)(n.code,{children:"LogLevels"})," - Default: ",(0,o.jsx)(n.code,{children:"debug"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can set the log level using the ",(0,o.jsx)(n.code,{children:"LogLevels"}),". The following values are available: ",(0,o.jsx)(n.code,{children:'"fatal"'}),", ",(0,o.jsx)(n.code,{children:'"error"'}),", ",(0,o.jsx)(n.code,{children:'"warn"'}),", ",(0,o.jsx)(n.code,{children:'"info"'}),", ",(0,o.jsx)(n.code,{children:'"debug"'}),", ",(0,o.jsx)(n.code,{children:'"trace"'}),", ",(0,o.jsx)(n.code,{children:'"silent"'}),", ",(0,o.jsx)(n.code,{children:'"verbose"'}),". All log levels are defined in an ",(0,o.jsx)(n.code,{children:"LogLevels"})," enum."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"minimize",children:"minimize"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"minimize"}),": ",(0,o.jsx)(n.code,{children:"boolean"})," - Default: ",(0,o.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The default value of this property is ",(0,o.jsx)(n.code,{children:"true"}),". This means that\naskui UI Controller will be started as minimized window."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"overwritebinary",children:"overWriteBinary"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"overWriteBinary"}),": ",(0,o.jsx)(n.code,{children:"boolean"})," - Default: ",(0,o.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Download the provided Version of askui UI Controller. If a version is already downloaded. This version will be overwritten."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"port",children:"port"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"port"}),": ",(0,o.jsx)(n.code,{children:"number"})," - Default: ",(0,o.jsx)(n.code,{children:"6769"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The port the askui UI Controller is running on."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"actiondelayinms",children:"actionDelayInMs"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"actionDelayInMs"}),": ",(0,o.jsx)(n.code,{children:"number"})," - Default: ",(0,o.jsx)(n.code,{children:"1000"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"actionDelayInMs"})," is the time that the askui UI controller waits between actions. This can be used to slow down or speed up the execution."]}),"\n",(0,o.jsxs)(n.p,{children:["Let's say, you want to click on the login button and then navigate to the home page by clicking on the home button but you have to wait 2s before clicking it because it takes some time logging in. You can increase the ",(0,o.jsx)(n.code,{children:"actionDelayInMs"})," to ",(0,o.jsx)(n.code,{children:"2000"})," in this case. But be careful, as it is going to slow down all your instructions. It may be better to use ",(0,o.jsx)(n.a,{href:"/docs/0.11.6/api/Actions/waitfor",children:"waitFor()"})," between the two clicking actions."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { UiControlClient, UiController, LogLevels } from 'askui';\n\ndescribe('jest with askui', () => {\n  \n  // Server for controlling the operating system\n  let uiController: UiController;\n  \n  beforeAll(async () => {\n    uiController = new UiController({\n    \n      // choosing the second monitor \n      display: 1,\n\n      // download the latest version of the server\n      binaryVersion: 'latest',\n\n      // start askui UI Controller as minimized application\n      minimize: true,\n\n      // using error loglevel\n      logLevel: LogLevels.ERROR,\n\n      // Set the action delay lower than the default\n      actionDelayInMs: 500,\n\n    });\n  })\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},29303:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/select-monitor-7fb53b3c1759a29abc877c37097c9022.png"},4552:(e,n,i)=>{i.d(n,{I:()=>t,M:()=>r});var o=i(11504);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);