"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74260],{57048:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(17624),o=s(4552);const r={sidebar_position:3},i="AskUI Development Environment (ADE)",l={id:"general/Components/AskUI-Development-Environment",title:"AskUI Development Environment (ADE)",description:"After installation, the ADE is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands which will assist you with AskUI product usage.",source:"@site/docs/general/02-Components/AskUI-Development-Environment.md",sourceDirName:"general/02-Components",slug:"/general/Components/AskUI-Development-Environment",permalink:"/docs/next/general/Components/AskUI-Development-Environment",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/02-Components/AskUI-Development-Environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"AskUI UI Controller (Legacy)",permalink:"/docs/next/general/Components/askui-ui-controller"},next:{title:"AskUI Runner",permalink:"/docs/next/general/Components/AskUI-Runner"}},c={},d=[{value:"Settings Management",id:"settings-management",level:2},{value:"<code>AskUI-SetSettings</code> Command",id:"askui-setsettings-command",level:3},{value:"Example",id:"example",level:4},{value:"<code>AskUI-ShowSettings</code> Command",id:"askui-showsettings-command",level:3},{value:"<code>AskUI-RemoveSettings</code> Command",id:"askui-removesettings-command",level:3},{value:"Project Management",id:"project-management",level:2},{value:"<code>AskUI-NewProject</code> Command",id:"askui-newproject-command",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>AskUI-RunProject</code> Command",id:"askui-runproject-command",level:3},{value:"AskUI Controller Management",id:"askui-controller-management",level:2},{value:"<code>AskUI-StartController</code> Command",id:"askui-startcontroller-command",level:3},{value:"AskUI Runner Management",id:"askui-runner-management",level:2},{value:"<code>AskUI-StartRunner</code> Command",id:"askui-startrunner-command",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"askui-development-environment-ade",children:"AskUI Development Environment (ADE)"}),"\n",(0,t.jsxs)(n.p,{children:["After installation, the ",(0,t.jsx)(n.strong,{children:"ADE"})," is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands which will assist you with AskUI product usage."]}),"\n",(0,t.jsxs)(n.p,{children:["Start by typing ",(0,t.jsx)(n.code,{children:"askui-shell"})," in the terminal and this will make all ADE commands available."]}),"\n",(0,t.jsx)(n.h2,{id:"settings-management",children:"Settings Management"}),"\n",(0,t.jsx)(n.p,{children:"ADE comprises three types of settings:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Global Settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Created by the installer."}),"\n",(0,t.jsx)(n.li,{children:"Available for all users."}),"\n",(0,t.jsx)(n.li,{children:"Includes configurations set during installation (e.g., proxy settings)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Located in ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<USER_HOME_DIR>/.askui/Settings/AskuiEnvironmentSettings.json"})}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Applied to all new projects."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Project Settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Located in ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<PROJECT_DIR>/.askui/Settings/AskuiEnvironmentSettings.json"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Project settings override user settings, and user settings override default settings."})}),"\n",(0,t.jsxs)(n.h3,{id:"askui-setsettings-command",children:[(0,t.jsx)(n.code,{children:"AskUI-SetSettings"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-SetSettings"})," command configures ADE settings. It allows you to set parameters like proxy addresses, ",(0,t.jsx)(n.code,{children:"AskUI access token"}),", and ",(0,t.jsx)(n.code,{children:"workspace ID"}),". This function updates environment variables in both user and project configurations. Accepted parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HttpProxy"}),": HTTP proxy address for AskUI configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HttpsProxy"}),": HTTPS proxy address for AskUI configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Token"}),": AskUI token for AskUI configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WorkspaceId"}),": AskUI workspace ID for AskUI configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LogLevel"}),": Log level for AskUI configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Location"}),": Specifies the settings to be updated (User or Project). Default is User."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'# Set HTTP proxy address and AskUI token.\nAskUI-SetSettings -HttpProxy "http://proxy.example.com" -Token "askui_token"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'# Set both HTTP and HTTPS proxy addresses, and AskUI workspace ID.\nAskUI-SetSettings -HttpProxy "http://proxy.example.com" -HttpsProxy "https://proxy.example.com" -WorkspaceId "your_workspace_id"\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"askui-showsettings-command",children:[(0,t.jsx)(n.code,{children:"AskUI-ShowSettings"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-ShowSettings"})," command retrieves and displays the AskUI configuration."]}),"\n",(0,t.jsx)(n.p,{children:"Parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Location"})}),": Specifies the settings to be displayed (Merged or User or Project or Default). Default is Merged."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# Get and display AskUI Merged Settings.\n  AskUI-ShowSettings\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# Get and display AskUI User Settings.\n  AskUI-ShowSettings -Location User\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"askui-removesettings-command",children:[(0,t.jsx)(n.code,{children:"AskUI-RemoveSettings"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-RemoveSettings"})," command is used to configure AskUI settings, allowing you to unset parameters such as proxy addresses, AskUI token, and workspace ID. The function has the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HttpProxy"}),": Removes the HTTP proxy address from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HttpsProxy"}),": Removes the HTTPS proxy address from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Token"}),": Removes the AskUI token from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WorkspaceId"}),": Removes the AskUI workspace ID from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LogLevel"}),": Removes the log level from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Credentials"}),": Removes the complete credentials from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EnvironmentVariables"}),": Removes the complete environment variables from the AskUI Settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Location"}),": Specifies the settings to be updated (User or Project). Default is User."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# Removes the HTTP proxy address and AskUI token.\n  AskUI-RemoveSettings -HttpProxy -Token\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# Removes the complete credentials.\n  AskUI-RemoveSettings -Credentials\n"})}),"\n",(0,t.jsx)(n.h2,{id:"project-management",children:"Project Management"}),"\n",(0,t.jsxs)(n.h3,{id:"askui-newproject-command",children:[(0,t.jsx)(n.code,{children:"AskUI-NewProject"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-NewProject"})," command creates a new AskUI project with customizable options. Use the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ProjectName"}),": Specifies the project name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WorkspaceID"}),": Provides the AskUI workspace ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Token"}),": Inputs the AskUI Token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AskUINodeJsVersion"}),": Determines the version of AskUI Node.js to install (defaults to the latest)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SkipChangingPathUserPrompt"}),": Skips the prompt to change the project directory (defaults to false)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TestFramework"}),": Chooses the test framework: 'jest' or 'jasmine'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UsingProxy"}),": Use a proxy: 'true' or 'false'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TypeScriptConfig"}),": Overwrite ",(0,t.jsx)(n.code,{children:"tsconfig.json"}),": 'true' or 'false'."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"#This Command will create a new project in the current directory with the name `MyProject` and will skip the prompt to change the project directory.\nAskUI-NewProject -ProjectName MyProject -WorkspaceId <Workspace_id> -Token <Token> -SkipChangingPathUserPrompt true\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"askui-runproject-command",children:[(0,t.jsx)(n.code,{children:"AskUI-RunProject"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-RunProject"})," command executes an AskUI project. Note:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This command is applicable only for projects created by ",(0,t.jsx)(n.code,{children:"AskUI-NewProject"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Navigate to the project directory before running the command."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"AskUI-RunProject\n"})}),"\n",(0,t.jsx)(n.h2,{id:"askui-controller-management",children:"AskUI Controller Management"}),"\n",(0,t.jsx)(n.p,{children:"The AskUI Controller a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system."}),"\n",(0,t.jsxs)(n.h3,{id:"askui-startcontroller-command",children:[(0,t.jsx)(n.code,{children:"AskUI-StartController"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-StartController"})," command is used to launch the AskUI Remote Device Controller with the following customizable options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DisplayNum"}),": Select a display number, default 0."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Maximize"}),": Start the app as a Maximized window."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Runtime"}),": Select the runtime (desktop, android). default desktop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Port"}),": Port of the web socket port server to connect via the runner-protocol. (Default: 6769)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ActionWaitTime"}),": Waits x milliseconds after each action. This can be used to slow down or speed up the execution. (Default: 1000)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WebSocketHost"}),": Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LogFile"}),": Output path for generated logs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LogLevel"}),": Log level. (Default: debug)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RunInBackground"}),": Start the app in background mode."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# This Command will start the AskUI Controller in background with all default options.\nAskUI-StartController -RunInBackground\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'#This Command will start the AskUI Controller in the background with the following options: DisplayNum: 0, Maximize: true, Runtime: desktop, Port: 6769, ActionWaitTime: 1000, WebSocketHost: 127.0.0.1\nAskUI-StartController -DisplayNum 0 -Maximize -Runtime desktop -Port 6769 -ActionWaitTime 1000 -WebSocketHost 127.0.0.1 -LogFile "C:/Logs/remote_device_log.txt" -LogLevel debug -RunInBackground\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Note: Adjust the parameters as needed for your specific use case."})}),"\n",(0,t.jsxs)(n.p,{children:["Also see the dedicated ",(0,t.jsx)(n.a,{href:"/docs/next/general/Components/AskUI-Controller",children:"AskUI Controller docs"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"askui-runner-management",children:"AskUI Runner Management"}),"\n",(0,t.jsx)(n.p,{children:"The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at."}),"\n",(0,t.jsxs)(n.h3,{id:"askui-startrunner-command",children:[(0,t.jsx)(n.code,{children:"AskUI-StartRunner"})," Command"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AskUI-StartRunner"})," command starts the AskUI Runner. This function accepts the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Token"}),": Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WorkspaceId"}),": Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Port"}),": Port of the web socket port server to connect via the runner-protocol. (Default: 6769)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WebSocketHost"}),": Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ForceProjectTemplateUpdate"}),": Specifies whether to force the update of the project template. This is helpful for debugging."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LogLevel"}),": Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Tags"}),": Specifies the tags to be set in the AskUI runner configuration."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# Start the AskUI runner with default configuration.\nAskUI-StartRunner\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'# Start the AskUI runner with the specified tags.\nAskUI-StartRunner -Tags "tag1,tag2"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Note: Adjust the parameters as needed for your specific configuration."})}),"\n",(0,t.jsxs)(n.p,{children:["See also the dedicated ",(0,t.jsx)(n.a,{href:"/docs/next/general/Components/AskUI-Runner",children:"AskUI Runner docs"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>i});var t=s(11504);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);