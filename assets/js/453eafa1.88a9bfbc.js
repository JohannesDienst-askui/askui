"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5418],{1093:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(85893),t=i(11151);const o={sidebar_position:6,pagination_next:"general/Getting Started/write-your-first-instruction"},r="Enterprise Checklist",l={id:"general/Getting Started/enterprise-checklist",title:"Enterprise Checklist",description:"If you want to get started with AskUI in an enterprise environment you will experience challenges unique to your company. This checklist will give you everything that AskUI needs and guidance on how to resolve upcoming errors. If you are not familiar with setting this up we strongly_ suggest to get someone from your IT-department involved who knows how the network in your company works.",source:"@site/versioned_docs/version-0.13.1/general/02-Getting Started/enterprise-checklist.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/enterprise-checklist",permalink:"/docs/general/Getting Started/enterprise-checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/02-Getting Started/enterprise-checklist.md",tags:[],version:"0.13.1",sidebarPosition:6,frontMatter:{sidebar_position:6,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"Install AskUI Linux",permalink:"/docs/general/Getting Started/getting-started-linux"},next:{title:"Write Your First Instruction",permalink:"/docs/general/Getting Started/write-your-first-instruction"}},d={},c=[{value:"Network",id:"network",level:2},{value:"Software Needed",id:"software-needed",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Python",id:"python",level:3},{value:"Windows",id:"windows",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Permissions",id:"permissions",level:3},{value:"macOS",id:"macos",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"enterprise-checklist",children:"Enterprise Checklist"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to get started with AskUI in an enterprise environment you will experience challenges unique to your company. This checklist will give you everything that AskUI needs and guidance on how to resolve upcoming errors. If you are not familiar with setting this up we _",(0,s.jsx)(n.em,{children:"strongly"})," suggest to get someone from your IT-department involved who knows how the network in your company works."]}),"\n",(0,s.jsx)(n.p,{children:"Common problems you may run into:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#network",children:"Network"}),": You need to use a proxy for internet access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#permissions",children:"Permissions"}),": Your machine does not have the necessary permissions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#software-needed",children:"Software needed"}),": AskUI needs Node.js and Python and to install dependencies."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"On windows please use the Powershell all the time."})}),"\n",(0,s.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,s.jsx)(n.p,{children:"This is often a tricky one. So if you experience problems installing AskUI that suggests the problem is missing internet access:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Please check our ",(0,s.jsx)(n.a,{href:"/docs/general/Troubleshooting/proxy",children:"Troubleshooting - Proxy page"})]}),"\n",(0,s.jsx)(n.li,{children:"Get help from your IT-department"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"software-needed",children:"Software Needed"}),"\n",(0,s.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,s.jsxs)(n.p,{children:["Install Node.js from the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"official download page"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Open a terminal/Powershell and run the following commands to check if you have the correct versions of ",(0,s.jsx)(n.code,{children:"node"})," and ",(0,s.jsx)(n.code,{children:"npm"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"node --version"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"npm --version"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(n.p,{children:["Python ",(0,s.jsx)(n.code,{children:"3.10"})," or higher needs to be installed. Open a terminal/Powershell and run ",(0,s.jsx)(n.code,{children:"python --version"})," to check if you have the correct version."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/windows/",children:"Official Download page for Windows"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/macos/",children:"Official Download page for macOS"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to use the ",(0,s.jsx)(n.code,{children:"AskUI Runner"})," you will create a virtual environment."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Follow ",(0,s.jsx)(n.a,{href:"https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv-win.html",children:"these instruction"}),". And consult your IT-department if you run into problems."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"You will probably have to install dependencies like node-packages over a company internal repository management system like Artifactory."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Find out how to set up ",(0,s.jsx)(n.code,{children:"Node.js"})," and ",(0,s.jsx)(n.code,{children:"Python"})," for your internal repository management system. Consult your IT-department if necessary."]}),"\n",(0,s.jsxs)(n.li,{children:["Check our ",(0,s.jsx)(n.a,{href:"/docs/general/Troubleshooting/proxy",children:"proxy troubleshooting page"})," for AskUI specific guidance on how to setup the proxy for ",(0,s.jsx)(n.code,{children:"Node.js"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,s.jsxs)(n.p,{children:["UiController/Remote Device Controller needs permissions for ",(0,s.jsx)(n.em,{children:"screen recording"})," and ",(0,s.jsx)(n.em,{children:"accessibility features"})," to control your machine like a human. Follow the instructions for your operating system."]}),"\n",(0,s.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mchld6aa7d23/mac",children:"Enable screen recording instructions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mh43185/mac",children:"Enable accessibility instructions"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(67294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);