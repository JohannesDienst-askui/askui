"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6207],{96164:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(85893),s=n(11151);const r={sidebar_position:5},i="macOS",a={id:"general/Troubleshooting/mac-os",title:"macOS",description:"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting",source:"@site/versioned_docs/version-0.13.1/general/07-Troubleshooting/mac-os.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/mac-os",permalink:"/docs/general/Troubleshooting/mac-os",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/07-Troubleshooting/mac-os.md",tags:[],version:"0.13.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Windows",permalink:"/docs/general/Troubleshooting/windows"},next:{title:"Proxy",permalink:"/docs/general/Troubleshooting/proxy"}},c={},l=[{value:"Elements Can&#39;t Be Found / Annotated Screen Empty / UI Controller not starting",id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting",level:2},{value:"Mouse Cursor Not Moving as Expected",id:"mouse-cursor-not-moving-as-expected",level:2}];function d(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"macos",children:"macOS"}),"\n",(0,t.jsx)(o.h2,{id:"elements-cant-be-found--annotated-screen-empty--ui-controller-not-starting",children:"Elements Can't Be Found / Annotated Screen Empty / UI Controller not starting"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"macOS empty screen captured",src:n(77169).Z+"",width:"567",height:"354"})}),"\n",(0,t.jsxs)(o.p,{children:["Our UiController needs the permission for ",(0,t.jsx)(o.em,{children:"Screen Recording"})," and ",(0,t.jsx)(o.em,{children:"Accessibility"})," on macOS."]}),"\n",(0,t.jsx)(o.p,{children:"Here is a step-by-step guide on how to fix missing permissions:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Head over to ",(0,t.jsx)(o.em,{children:"System Preferences > Security & Privacy"}),".\nOpen the ",(0,t.jsx)(o.em,{children:"Privacy"})," tab and check if you can find the ",(0,t.jsx)(o.em,{children:"askui-ui-controller"})," under ",(0,t.jsx)(o.em,{children:"Screen Recording"})," and ",(0,t.jsx)(o.em,{children:"Accessibility"})," (See next picture for reference)."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"macOS Privacy settings",src:n(49678).Z+"",width:"567",height:"508"})}),"\n",(0,t.jsxs)(o.p,{children:["1.1 If ",(0,t.jsx)(o.em,{children:"askui-ui-controller"})," does NOT have the permissions, give it to it and restart your workflow. Make sure to reopen your terminal you run workflow from. If it still does not work go on with step 1.2 below."]}),"\n",(0,t.jsxs)(o.p,{children:["1.2. If ",(0,t.jsx)(o.em,{children:"askui-ui-controller"})," has the permissions, revoke them by unchecking the corresponding checkboxes and removing the application from each list by clicking the minus (",(0,t.jsx)(o.em,{children:"-"}),") button."]}),"\n",(0,t.jsxs)(o.ol,{start:"2",children:["\n",(0,t.jsxs)(o.li,{children:["By default AskUI starts the UiController in the background which sometimes messes up the permissions. Now you will start the UiController manually which triggers the permission prompt of macOS. Therefore you need to execute the UiController executable that was downloaded into your AskUI project when you ran your workflow.\nHead over to the folder where your initialised AskUI. Navigate to ",(0,t.jsx)(o.code,{children:"node_modules/askui/dist/release/<version>/darwin"}),".\n",(0,t.jsx)(o.code,{children:"<version>"})," may be ",(0,t.jsx)(o.code,{children:"latest"})," or a semantic version like ",(0,t.jsx)(o.code,{children:"v0.8.0"}),". In there, you should find a ``askui-controller.app",(0,t.jsx)(o.code,{children:"directory which is your installation of the AskUI UI Controller. Open the"}),"askui-controller.app` directory in your ",(0,t.jsx)(o.em,{children:"Finder"})," by right-clicking it and select ",(0,t.jsx)(o.em,{children:"Reveal in Finder"})," (See screenshot below). Then start it by double-clicking it in the ",(0,t.jsx)(o.em,{children:"Finder"}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Installation folder of askui-ui-controller",src:n(34020).Z+"",width:"600",height:"588"})}),"\n",(0,t.jsxs)(o.p,{children:["The application should ask for ",(0,t.jsx)(o.em,{children:"Screen Recording"})," permissions which you have to grant for it to work."]}),"\n",(0,t.jsx)(o.p,{children:"We are actively searching for a solution to improve the current state of affairs but Apple\ndoes not make it easy (which is good for your privacy but not so much for automation frameworks).\nBut be sure that we keep trying!"}),"\n",(0,t.jsx)(o.h2,{id:"mouse-cursor-not-moving-as-expected",children:"Mouse Cursor Not Moving as Expected"}),"\n",(0,t.jsx)(o.p,{children:"Apple devices that have a display manufactured by Apple, i.e., Macbook, iMac have a so-called Retina Display, and they have a higher pixel density."}),"\n",(0,t.jsxs)(o.p,{children:["To use the actions such as ",(0,t.jsx)(o.code,{children:"moveMouse()"})," or ",(0,t.jsx)(o.code,{children:"moveMouseRelatively()"}),", the ",(0,t.jsx)(o.strong,{children:"coordinates should be doubled"})," in order to move the mouse cursor as expected."]}),"\n",(0,t.jsx)(o.p,{children:"For example, let's say that your screen resolution is of 1920x1080. If you want to move the mouse cursor to the middle of the screen, the correct numeric arguments are as such:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-javascript",children:"await aui.moveMouse(1920,1080).exec();\n"})}),"\n",(0,t.jsx)(o.p,{children:"The coordinate of the middle of the screen is (960,540). But if you use these numbers, it will move the cursor only half of the expected distance."})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},34020:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/macos-askui-ui-controller-installation-folder-ed73777443f3ca290fa79e353117ef3b.png"},77169:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/macos-empty-screen-4a1a780d3e64e1e62e6ad06d5bb696b6.png"},49678:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/macos-privacy-settings-513d8744e86a6a6af6f59698f29752e6.png"},11151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>i});var t=n(67294);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);