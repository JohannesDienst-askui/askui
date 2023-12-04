"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76196],{808:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=i(85893),s=i(11151);const l={},t="askui UI Control Client",o={id:"api/Configuration/askui-ui-control-client",title:"askui UI Control Client",description:"Log Level",source:"@site/versioned_docs/version-0.7.2/api/08-Configuration/askui-ui-control-client.md",sourceDirName:"api/08-Configuration",slug:"/api/Configuration/askui-ui-control-client",permalink:"/docs/0.7.2/api/Configuration/askui-ui-control-client",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/api/08-Configuration/askui-ui-control-client.md",tags:[],version:"0.7.2",frontMatter:{},sidebar:"apiSidebar",previous:{title:"annotateInteractively",permalink:"/docs/0.7.2/api/Annotation/annotateInteractively"},next:{title:"askui UI Controller",permalink:"/docs/0.7.2/api/Configuration/askui-ui-controller"}},c={},a=[{value:"Log Level",id:"log-level",level:2},{value:"Properties",id:"properties",level:2},{value:"uiControllerUrl",id:"uicontrollerurl",level:3},{value:"inferenceServerUrl",id:"inferenceserverurl",level:3},{value:"resize",id:"resize",level:3},{value:"annotationLevel",id:"annotationlevel",level:3},{value:"Example",id:"example",level:4},{value:"credentials",id:"credentials",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"askui-ui-control-client",children:"askui UI Control Client"}),"\n",(0,r.jsx)(n.h2,{id:"log-level",children:"Log Level"}),"\n",(0,r.jsxs)(n.p,{children:["Set the log level of the askui UI Control Client using the ",(0,r.jsx)(n.code,{children:"LOG_LEVEL"})," environment variable.\nThe following log levels are available:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"fatal"'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"error"'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"warn"'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"info"'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"debug"'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"trace"'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'"silent"'})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'"verbose"'}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The log level defaults to ",(0,r.jsx)(n.code,{children:'"info"'}),". and it can be changed with the following command:"]}),"\n",(0,r.jsx)(n.p,{children:"Bash or similar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export LOG_LEVEL=verbose\n"})}),"\n",(0,r.jsx)(n.p,{children:"Powershell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:'$env:LOG_LEVEL="verbose"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"uicontrollerurl",children:"uiControllerUrl"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"uiControllerUrl"}),": ",(0,r.jsx)(n.code,{children:"string"})," - Default: ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:6769"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The url of the askui UI Controller controlling the OS."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"inferenceserverurl",children:"inferenceServerUrl"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"inferenceServerUrl"}),": ",(0,r.jsx)(n.code,{children:"string"})," - Default: ",(0,r.jsx)(n.code,{children:"https://inference.askui.com"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The address of the askui Inference server."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"resize",children:"resize"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"resize"}),": ",(0,r.jsx)(n.code,{children:"number?"})," - Default: ",(0,r.jsx)(n.code,{children:"undefined"}),"\nThe side length of the target image to resize to in px. Your screenshot image will be resized with the original aspect ratio, and the lengths image side will be equal to this number. This can be used to reduce the inference time by reducing the request size in case of a bad internet connection. But it can cause a decrease in the prediction quality.\nThe resizing will be skipped if it's undefined."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"annotationlevel",children:"annotationLevel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"annotationLevel"}),": ",(0,r.jsx)(n.code,{children:"AnnotationLevel"})," - Default: ",(0,r.jsx)(n.code,{children:"AnnotationLevel.DISABLED"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["AnnotationLevel is implemented as an enum. You have three options: ",(0,r.jsx)(n.code,{children:"DISABLED"}),", ",(0,r.jsx)(n.code,{children:"ON_FAILURE"}),", ",(0,r.jsx)(n.code,{children:"ALL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALL"}),":  Runs the ",(0,r.jsx)(n.a,{target:"_blank",href:i(29580).Z+"",children:"annotate"})," command after the execution of each test step."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ON_FAILURE"}),": Runs the annotate command if the test step fails"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DISABLED"}),": Never runs the annotate command after test steps"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:" let aui = await UiControlClient.build({\n    annotationLevel: AnnotationLevel.DISABLED\n  });\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"credentials",children:"credentials"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"credentials"}),": ",(0,r.jsx)(n.code,{children:"Credentials"})," Your user credentials - Optional.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"workspaceId"}),": ",(0,r.jsx)(n.code,{children:"string"})," Your workspace id"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"token"}),": ",(0,r.jsx)(n.code,{children:"string"})," An access token for authentication with the askui Inference Server"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables ",(0,r.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})," and ",(0,r.jsx)(n.code,{children:"ASKUI_TOKEN"})," but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the ",(0,r.jsx)(n.code,{children:"workspace id"})," via setting the ",(0,r.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})," environment variable, you need to set token with environment variables as well."]}),"\n",(0,r.jsx)(n.p,{children:"Setting credentials in code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:" let aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n"})}),"\n",(0,r.jsx)(n.p,{children:"Setting credentials using environment variables (Powershell):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"$env:ASKUI_WORKSPACE_ID = <your workspace id>\n$env:ASKUI_TOKEN = <your access token>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Setting credentials using environment variables (Bash or similar):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export ASKUI_WORKSPACE_ID=<your workspace id>\nexport ASKUI_TOKEN=<your access token>\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},29580:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/files/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var r=i(67294);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);