"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{1344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(85893),r=t(11151);const i={sidebar_position:8},o="How AskUI Works",l={id:"general/Getting Started/guide-how-askui-works",title:"How AskUI Works",description:"Overview",source:"@site/versioned_docs/version-0.11.6/general/02-Getting Started/guide-how-askui-works.md",sourceDirName:"general/02-Getting Started",slug:"/general/Getting Started/guide-how-askui-works",permalink:"/docs/0.11.6/general/Getting Started/guide-how-askui-works",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/general/02-Getting Started/guide-how-askui-works.md",tags:[],version:"0.11.6",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Write Your First Instruction",permalink:"/docs/0.11.6/general/Getting Started/write-your-first-instruction"},next:{title:"Framework Configuration",permalink:"/docs/0.11.6/general/Getting Started/configure_test_framework"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Glossary",id:"glossary",level:2},{value:"AskUI Control Client",id:"askui-control-client",level:2},{value:"AskUI UI Controller",id:"askui-ui-controller",level:2},{value:"AskUI Inference Server",id:"askui-inference-server",level:2},{value:"Them All in Action",id:"them-all-in-action",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-askui-works",children:"How AskUI Works"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"In this article, we will give a detailed overview of AskUI`s architecture and how it works under the hood."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"architecture",src:t(80155).Z+"",width:"1920",height:"1784"})}),"\n",(0,s.jsx)(n.p,{children:"AskUI is built on top of a number of components. We will cover what these components are and how they work together to provide a flexible and reliable way to automate interactions with UI elements of any operating system or platform."}),"\n",(0,s.jsx)(n.p,{children:"By the end of this article, whether you're a software developer, QA engineer, or automation specialist, you'll have a solid understanding of how AskUI works, and be able to use this knowledge to build more efficient automation for your project."}),"\n",(0,s.jsx)(n.p,{children:"AskUI consists of three building blocks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AskUI Control Client"}),"\n",(0,s.jsx)(n.li,{children:"AskUI UI Controller"}),"\n",(0,s.jsx)(n.li,{children:"AskUI Inference Server"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We will step through each of them and see how they work together to perform UI automation."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.p,{children:"Throughout this article, we will use some terms that describe certain parts of AskUI. Some of them are used only internally and not exposed by the AskUI Control Client API, but are important for understanding how AskUI works and what it can do. Please refer to this table while reading."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Term"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Element-description"})}),(0,s.jsxs)(n.td,{children:["A description for a UI element. In the AskUI Control Client API, for example, it is the coded description like ",(0,s.jsx)(n.code,{children:"button()"})," or ",(0,s.jsx)(n.code,{children:"textfield().contains().text('Email')"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Action"})}),(0,s.jsxs)(n.td,{children:["A method in the AskUI Control Client API that describes an action to be taken against the operating system. For example ",(0,s.jsx)(n.code,{children:"click()"}),", ",(0,s.jsx)(n.code,{children:"type()"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"InputEvent"})," (internal)"]}),(0,s.jsxs)(n.td,{children:["A specific type of action to be taken against the operating system. For example ",(0,s.jsx)(n.em,{children:"MouseInputEvent"})," or ",(0,s.jsx)(n.em,{children:"KeyboardInputEvent"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"ControlCommand"})," (internal)"]}),(0,s.jsxs)(n.td,{children:["A command sent to the UI controller telling what to perform on the operating system. It consists of one or more ",(0,s.jsx)(n.em,{children:"InputEvents"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"askui-control-client",children:"AskUI Control Client"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"control-client",src:t(27449).Z+"",width:"1920",height:"1514"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," provides the API that tells AskUI what/how to automate. Once you start using AskUI, you will mostly interact with AskUI via the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"}),". In most of our tutorials and demonstrations, you will see ",(0,s.jsx)(n.code,{children:"let aui: UIControlClient"})," is declared and combined with an ",(0,s.jsx)(n.em,{children:"Action"})," and ",(0,s.jsx)(n.em,{children:"Element-descriptions"})," which ends up forming an instruction, e.g:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await aui.click().button().withText('login').exec();\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["As shown above, you form an instruction by chaining an ",(0,s.jsx)(n.em,{children:"Action"})," with ",(0,s.jsx)(n.em,{children:"Element-descriptions"})," using the Fluent API of the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"}),". It is designed as a ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Fluent_interface",children:"fluent interface"})})," to increase readability and make it more understandable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," sends a request to the ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"to take a screenshot."}),"\n",(0,s.jsxs)(n.li,{children:["with a ",(0,s.jsx)(n.em,{children:"ControlCommand"})," that tells what ",(0,s.jsx)(n.em,{children:"InputEvent"})," to perform on the operating system."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," communicates with the ",(0,s.jsx)(n.strong,{children:"AskUI Inference Server"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"to send a screenshot to be annotated with the instruction."}),"\n",(0,s.jsx)(n.li,{children:"to receive the annotation, e.g. detected elements."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To use the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"}),", user credentials are required. User credentials can be obtained via our ",(0,s.jsx)(n.strong,{children:"AskUI Studio"}),". Please ",(0,s.jsx)(n.a,{href:"https://xa5a040gvfz.typeform.com/to/DmarVHMn",children:"fill out this form"})," to schedule a demonstration or request a trial to obtain access to ",(0,s.jsx)(n.strong,{children:"AskUI Studio"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See our ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/Configuration/askui-ui-control-client",children:"API documentation"})," for more information on this component."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"askui-ui-controller",children:"AskUI UI Controller"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"controller",src:t(99810).Z+"",width:"1920",height:"1514"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"})," is a binary that controls the operating system. This binary gets automatically downloaded when the ",(0,s.jsx)(n.code,{children:"UiController"})," is initialized by calling ",(0,s.jsx)(n.code,{children:"UiController.start()"}),". Once executed, it stays in the background and communicates with the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," on a specific port to receive the ",(0,s.jsx)(n.em,{children:"ControlCommand"}),". Based on the given ",(0,s.jsx)(n.em,{children:"ControlCommand"}),", it triggers ",(0,s.jsx)(n.em,{children:"InputEvents"})," respectively."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"})," is responsible for:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Taking a screenshot."}),"\n",(0,s.jsxs)(n.li,{children:["Triggering the ",(0,s.jsx)(n.em,{children:"InputEvent"}),", i.e MouseInputEvent, KeyboardInputEvent, or shell execution."]}),"\n",(0,s.jsx)(n.li,{children:"Running the [interactive annotation](../03-Element Selection/annotations-and-screenshots.md#interactive-annotation)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See our ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/Configuration/askui-ui-controller",children:"API documentation"})," for more information on this component."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"askui-inference-server",children:"AskUI Inference Server"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"server",src:t(20427).Z+"",width:"1920",height:"934"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI Inference Server"})," is responsible for the prediction of UI elements within the given screenshot. As soon as it receives a request from the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"}),", it performs the prediction on the given image and returns the annotation to the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For the inference, we use a machine-learning model that consists of several submodels:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object Detector"}),": Detects UI elements (e.g button, textfield)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Icon Classifier"}),": Predicts the class of an icon based on the detected objects (e.g. a user icon \ud83d\udc64)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optical Character Recognition (OCR)"}),": Converts the image of a text into text."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Custom Element Detector"}),": Searches for an area in the given screenshot that matches the image given by the ",(0,s.jsx)(n.em,{children:"Element-description"})," ",(0,s.jsx)(n.code,{children:".customElement()"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"them-all-in-action",children:"Them All in Action"}),"\n",(0,s.jsx)(n.p,{children:"Assuming that we run AskUI on the same device we want to automate, the simplest synopsis can be described as such:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image description",src:t(80155).Z+"",width:"1920",height:"1784"})}),"\n",(0,s.jsx)(n.p,{children:"When running AskUI,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," checks whether it is needed to be processed by the ",(0,s.jsx)(n.strong,{children:"Inference Server"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the code ",(0,s.jsxs)(n.strong,{children:["contains any of the ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/API/table-of-contents#element-descriptions",children:"Element-description"})," or ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/API/table-of-contents#getters",children:"Getters"})]}),", then the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," tells the ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"})," to take a screenshot of the given screen and sends it to the ",(0,s.jsx)(n.strong,{children:"Inference Server"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," has retrieved the annotation back from the server, it sends a ",(0,s.jsx)(n.em,{children:"ControlCommand"})," to the ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"}),". Afterwards, the ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"})," triggers the ",(0,s.jsx)(n.em,{children:"InputEvent"})," on the operating system."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// an example of AskUI code containing an element-identifier\nawait aui.click().button().withText('Confirm').exec();\n// Here, the element-description 'button()' is used together,\n// so the client will fire a request to the server.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If the code ",(0,s.jsxs)(n.strong,{children:["contains an ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/API/table-of-contents#actions",children:"Action"})," but no Element-description"]}),", then the ",(0,s.jsx)(n.strong,{children:"AskUI Control Client"})," sends the ",(0,s.jsx)(n.em,{children:"ControlCommand"})," to the ",(0,s.jsx)(n.strong,{children:"AskUI UI Controller"})," to trigger the ",(0,s.jsx)(n.em,{children:"InputEvent"})," directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// an example of AskUI code containing only a command\nawait aui.pressThreeKeys('control','alt','del').exec();\n// It uses only a command 'pressThreeKeys()',\n// so it will be executed by the UI Controller directly.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"Element-description"})," represents a specific type of UI element that can be recognized by inference. Most of the commonly used UI elements such as ",(0,s.jsx)(n.em,{children:"button"}),", ",(0,s.jsx)(n.em,{children:"textfield"})," are supported and can be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"Action"})," represents a specific type of action to be performed, i.e ",(0,s.jsx)(n.em,{children:"Mouse/Keyboard Input Event"})," or ",(0,s.jsx)(n.em,{children:"Shell Command"}),". This action can be performed on a specific element when combined with ",(0,s.jsx)(n.strong,{children:"Element-descriptions"})," or can be performed on its own as shown in the example right above."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Please visit our ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/API/table-of-contents",children:"API Docs"}),", if you want to learn more about different types of ",(0,s.jsx)(n.em,{children:"Element-description"})," and ",(0,s.jsx)(n.em,{children:"Action"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["Here we have seen the three core components of AskUI. If you aim to use AskUI in a more advanced way, e.g. integrating it into your CI/CD pipeline, it may be worthwhile to get an overview of how it is composed. For more practical examples, please refer to our ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/general/Tutorials/",children:"Tutorials"})," and ",(0,s.jsx)(n.a,{href:"/docs/0.11.6/api/API/table-of-contents",children:"API docs"}),". And don't forget to come over to our ",(0,s.jsx)(n.a,{href:"https://app.outverse.com/askui/community/home",children:"Outverse-Community"}),", if you have any questions about AskUI!"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},80155:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/how_askui_works_architecture-363bc8be35bd228e884c83d15acd19f7.png"},27449:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/how_askui_works_client-199c26dea4aff2f367d5613c26f0d49e.png"},99810:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/how_askui_works_controller-af934960f33fe0533a313024389f7bcb.png"},20427:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/how_askui_works_server-e9bf3ca73649aceaafcf33355fdca09b.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);