"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7048],{95547:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=n(85893),s=n(11151);const i={sidebar_position:4},r="Windows",l={id:"general/Troubleshooting/windows",title:"Windows",description:"AskUI Remote Device Controller Not Responding to Instructions",source:"@site/docs/general/07-Troubleshooting/windows.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/windows",permalink:"/docs/next/general/Troubleshooting/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/07-Troubleshooting/windows.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/next/general/Troubleshooting/linux"},next:{title:"macOS",permalink:"/docs/next/general/Troubleshooting/mac-os"}},c={},a=[{value:"AskUI Remote Device Controller Not Responding to Instructions",id:"askui-remote-device-controller-not-responding-to-instructions",level:2},{value:"Execution Policy in Powershell Blocks Commands",id:"execution-policy-in-powershell-blocks-commands",level:2},{value:"AskUI UI Controller",id:"askui-ui-controller",level:2}];function d(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(o.h2,{id:"askui-remote-device-controller-not-responding-to-instructions",children:"AskUI Remote Device Controller Not Responding to Instructions"}),"\n",(0,t.jsxs)(o.p,{children:["A possible solution is to start the ",(0,t.jsx)(o.strong,{children:"AskUI Remote Device Controller"})," as administrator:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Right-Click the application and click ",(0,t.jsx)(o.strong,{children:"Run as administrator"})]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.em,{children:["Background: When you start the ",(0,t.jsx)(o.strong,{children:"AskUI Remote Device Controller"})," and during the execution another process is started AND it is an admin process, the controller stops executing instructions."]})}),"\n",(0,t.jsx)(o.h2,{id:"execution-policy-in-powershell-blocks-commands",children:"Execution Policy in Powershell Blocks Commands"}),"\n",(0,t.jsxs)(o.p,{children:["When you try to execute commands inside ",(0,t.jsx)(o.em,{children:"Powershell"})," it may not be possible due to a restrictive ",(0,t.jsx)(o.a,{href:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.4",children:(0,t.jsx)(o.em,{children:"Execution Policy"})}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["You can set the ",(0,t.jsx)(o.em,{children:"Execution Policy"})," inside the Powershell with the following command if you have the necessary permissions:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"Set-ExecutionPolicy unrestricted\n"})}),"\n",(0,t.jsx)(o.h2,{id:"askui-ui-controller",children:"AskUI UI Controller"}),"\n",(0,t.jsx)(o.p,{children:"On Windows, the AskUI UI Controller may not terminate after each execution. This may lead to problems when using the AskUI UI Controller in a pipeline like a pipeline's run not coming to an end."}),"\n",(0,t.jsxs)(o.p,{children:["In this case you can force termination of the AskUI UI Controller. The ",(0,t.jsx)(o.code,{children:"UiController.stop()"})," takes an optional boolean argument which is set to ",(0,t.jsx)(o.code,{children:"false"})," by default. If we pass ",(0,t.jsx)(o.code,{children:"true"})," to the ",(0,t.jsx)(o.code,{children:"UiController.stop()"})," method, e.g., ",(0,t.jsx)(o.code,{children:"uiController.stop(true)"}),", we kill the AskUI UI Controller process."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:"await uiController.stop(true);\n"})}),"\n",(0,t.jsxs)(o.p,{children:["If you are using the Jest framework to execute your instructions, you can also force Jest to exit as described on our ",(0,t.jsx)(o.a,{href:"/docs/next/general/Troubleshooting/jest",children:"Jest-Troubleshooting page"}),". This option terminates all processes which were set up and didn't close properly. The first option explicitly stops the AskUI UI Controller."]})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>r});var t=n(67294);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);