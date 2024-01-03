"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6207],{96164:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(85893),s=o(11151);const r={sidebar_position:5},i="macOS",a={id:"general/Troubleshooting/mac-os",title:"macOS",description:"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting",source:"@site/versioned_docs/version-0.13.1/general/07-Troubleshooting/mac-os.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/mac-os",permalink:"/docs/general/Troubleshooting/mac-os",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/07-Troubleshooting/mac-os.md",tags:[],version:"0.13.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Windows",permalink:"/docs/general/Troubleshooting/windows"},next:{title:"Proxy",permalink:"/docs/general/Troubleshooting/proxy"}},c={},l=[{value:"Elements Can&#39;t Be Found / Annotated Screen Empty / UI Controller not starting",id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting",level:2},{value:"Mouse Cursor Not Moving as Expected",id:"mouse-cursor-not-moving-as-expected",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"macos",children:"macOS"}),"\n",(0,t.jsx)(n.h2,{id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting",children:"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"macOS empty screen captured",src:o(77169).Z+"",width:"567",height:"354"})}),"\n",(0,t.jsx)(n.p,{children:"macOS sometimes does not recognize an installation of an AskUI UI Controller and, therefore,\ndoes not give it proper permissions although it looks like it."}),"\n",(0,t.jsxs)(n.p,{children:["You can fix this, by heading\nover to ",(0,t.jsx)(n.em,{children:"System Preferences > Security & Privacy"}),".\nOpen the ",(0,t.jsx)(n.em,{children:"Privacy"})," tab and check if you can find the ",(0,t.jsx)(n.em,{children:"askui-ui-controller"})," under ",(0,t.jsx)(n.em,{children:"Screen Recording"})," and ",(0,t.jsx)(n.em,{children:"Accessibility"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If yes, revoke its permissions by unchecking\nthe corresponding checkboxes and removing the application from each list by clicking the minus\n(",(0,t.jsx)(n.em,{children:"-"}),") button."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"macOS Privacy settings",src:o(49678).Z+"",width:"567",height:"508"})}),"\n",(0,t.jsxs)(n.p,{children:["Head over to the installation of the AskUI UI Controller. If you did not install it manually,\nyou can find it under ",(0,t.jsx)(n.code,{children:"node_modules/askui/dist/release/<version>/darwin"}),".\n",(0,t.jsx)(n.code,{children:"<version>"})," may be ",(0,t.jsx)(n.code,{children:"latest"})," or a semantic version like ",(0,t.jsx)(n.code,{children:"v0.8.0"}),". In there, you should find\ncorresponding ",(0,t.jsx)(n.code,{children:".app"})," directory which is your installation of the AskUI UI Controller.\nStart it by double-clicking it in the ",(0,t.jsx)(n.em,{children:"Finder"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The application should ask for\n",(0,t.jsx)(n.em,{children:"Screen Recording"})," permissions which you have to grant for it to work. You should\nremove every reference to ",(0,t.jsx)(n.code,{children:"UiController"})," in your ",(0,t.jsx)(n.code,{children:"helper/jest.setup.ts"})," so that\nthe AskUI lib does not override the installation or tries to start it automatically."]}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can\nrun your instructions starting the AskUI UI Controller manually each time. On the first run,\nyou are going to be asked for ",(0,t.jsx)(n.em,{children:"Accessibility"})," permissions\nwhich you also have to grant. After that, your instructions should run flawlessly as and you should\nbe able to capture what is shown on the screen as well as execute instructions."]}),"\n",(0,t.jsx)(n.p,{children:"We are actively searching for a solution to improve the current state of affairs but Apple\ndoes not make it easy (which is good for your privacy but not so much for automation frameworks).\nBut be sure that we keep trying ;)"}),"\n",(0,t.jsx)(n.h2,{id:"mouse-cursor-not-moving-as-expected",children:"Mouse Cursor Not Moving as Expected"}),"\n",(0,t.jsx)(n.p,{children:"Apple devices that have a display manufactured by Apple, i.e., Macbook, iMac have a so-called Retina Display, and they have a higher pixel density."}),"\n",(0,t.jsxs)(n.p,{children:["To use the actions such as ",(0,t.jsx)(n.code,{children:"moveMouse()"})," or ",(0,t.jsx)(n.code,{children:"moveMouseRelatively()"}),", the ",(0,t.jsx)(n.strong,{children:"coordinates should be doubled"})," in order to move the mouse cursor as expected."]}),"\n",(0,t.jsx)(n.p,{children:"For example, let's say that your screen resolution is of 1920x1080. If you want to move the mouse cursor to the middle of the screen, the correct numeric arguments are as such:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"await aui.moveMouse(1920,1080).exec();\n"})}),"\n",(0,t.jsx)(n.p,{children:"The coordinate of the middle of the screen is (960,540). But if you use these numbers, it will move the cursor only half of the expected distance."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},77169:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/macos-empty-screen-4a1a780d3e64e1e62e6ad06d5bb696b6.png"},49678:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/macos-privacy-settings-513d8744e86a6a6af6f59698f29752e6.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);