"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93329],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var i=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||a;return t?i.createElement(m,l(l({ref:n},p),{},{components:t})):i.createElement(m,l({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(25773),r=(t(27378),t(35318));const a={},l="askui UI Control Client",o={unversionedId:"api/Configuration/askui-ui-control-client",id:"version-0.10.3/api/Configuration/askui-ui-control-client",title:"askui UI Control Client",description:"Log Level",source:"@site/versioned_docs/version-0.10.3/api/08-Configuration/askui-ui-control-client.md",sourceDirName:"api/08-Configuration",slug:"/api/Configuration/askui-ui-control-client",permalink:"/docs/0.10.3/api/Configuration/askui-ui-control-client",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.3/api/08-Configuration/askui-ui-control-client.md",tags:[],version:"0.10.3",frontMatter:{},sidebar:"apiSidebar",previous:{title:"annotateInteractively",permalink:"/docs/0.10.3/api/Annotation/annotateInteractively"},next:{title:"askui UI Controller",permalink:"/docs/0.10.3/api/Configuration/askui-ui-controller"}},u={},s=[{value:"Log Level",id:"log-level",level:2},{value:"Properties",id:"properties",level:2},{value:"uiControllerUrl",id:"uicontrollerurl",level:3},{value:"inferenceServerUrl",id:"inferenceserverurl",level:3},{value:"resize",id:"resize",level:3},{value:"annotationLevel",id:"annotationlevel",level:3},{value:"Example",id:"example",level:4},{value:"credentials",id:"credentials",level:3}],p={toc:s};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"askui-ui-control-client"},"askui UI Control Client"),(0,r.kt)("h2",{id:"log-level"},"Log Level"),(0,r.kt)("p",null,"Set the log level of the askui UI Control Client using the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," environment variable.\nThe following log levels are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"fatal"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"error"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"warn"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"info"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"debug"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"trace"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"silent"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"verbose"'),".")),(0,r.kt)("p",null,"The log level defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},'"info"'),". and it can be changed with the following command:"),(0,r.kt)("p",null,"Bash or similar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export LOG_LEVEL=verbose\n")),(0,r.kt)("p",null,"Powershell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:LOG_LEVEL="verbose"\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"uicontrollerurl"},"uiControllerUrl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"uiControllerUrl"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:6769"))),(0,r.kt)("p",null,"The url of the askui UI Controller controlling the OS."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inferenceserverurl"},"inferenceServerUrl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inferenceServerUrl"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://inference.askui.com"))),(0,r.kt)("p",null,"The address of the askui Inference server."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resize"},"resize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resize"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number?")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\nThe side length of the target image to resize to in px. Your screenshot image will be resized with the original aspect ratio, and the lengths image side will be equal to this number. This can be used to reduce the inference time by reducing the request size in case of a bad internet connection. But it can cause a decrease in the prediction quality.\nThe resizing will be skipped if it's undefined.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"annotationlevel"},"annotationLevel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"annotationLevel"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"AnnotationLevel")," - Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"AnnotationLevel.DISABLED"))),(0,r.kt)("p",null,"AnnotationLevel is implemented as an enum. You have three options: ",(0,r.kt)("inlineCode",{parentName:"p"},"DISABLED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),":  Runs the ",(0,r.kt)("a",{target:"_blank",href:t(59268).Z},"annotate")," command after the execution of each instruction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ON_FAILURE"),": Runs the annotate command if the instruction fails."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DISABLED"),": Never runs the annotate command after an instruction."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    annotationLevel: AnnotationLevel.DISABLED\n  });\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"credentials"},"credentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"credentials"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Credentials")," Your user credentials - Optional.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"workspaceId"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Your workspace id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," An access token for authentication with the askui Inference Server")))),(0,r.kt)("p",null,"Provide credentials for authentication with the askui Inference Server if you would like to use dedicated, more powerful and stable resources instead of public resources. Credentials can also be provided using the environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_WORKSPACE_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_TOKEN")," but in-code configuration takes precedence over these environment variables. Independent of how you configure the credentials, make sure to use one way to configure all the credentials, i.e., if you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace id")," via setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ASKUI_WORKSPACE_ID")," environment variable, you need to set token with environment variables as well."),(0,r.kt)("p",null,"Setting credentials in code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," let aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    }\n  });\n")),(0,r.kt)("p",null,"Setting credentials using environment variables (Powershell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:ASKUI_WORKSPACE_ID = <your workspace id>\n$env:ASKUI_TOKEN = <your access token>\n")),(0,r.kt)("p",null,"Setting credentials using environment variables (Bash or similar):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ASKUI_WORKSPACE_ID=<your workspace id>\nexport ASKUI_TOKEN=<your access token>\n")),(0,r.kt)("hr",null))}c.isMDXComponent=!0},59268:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"}}]);