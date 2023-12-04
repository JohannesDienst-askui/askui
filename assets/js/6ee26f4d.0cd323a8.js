"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94746],{20856:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(85893),i=s(11151);const o={sidebar_position:6},r="Assertions",a={id:"general/Guides/assertions",title:"Assertions",description:"In this guide we will first show you how to assert if an element is there or not.",source:"@site/versioned_docs/version-0.8.0/general/03-Guides/assertions.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/assertions",permalink:"/docs/0.8.0/general/Guides/assertions",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.8.0/general/03-Guides/assertions.md",tags:[],version:"0.8.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Taking Screenshots",permalink:"/docs/0.8.0/general/Guides/taking-screenshots"},next:{title:"askui UI Controller Docker Images",permalink:"/docs/0.8.0/general/Continuous Integration/askui-ui-controller-docker-images"}},c={},l=[{value:"Assert the (non) Existence of Elements",id:"assert-the-non-existence-of-elements",level:2},{value:"Assert the Correctness of Values",id:"assert-the-correctness-of-values",level:2},{value:"1. Use expect() to check if the text in the textfield matches",id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches",level:3},{value:"2. Retrieve the element with get() and use an assertions library",id:"2-retrieve-the-element-with-get-and-use-an-assertions-library",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"assertions",children:"Assertions"}),"\n",(0,n.jsx)(t.p,{children:"In this guide we will first show you how to assert if an element is there or not."}),"\n",(0,n.jsx)(t.p,{children:"Then we will"}),"\n",(0,n.jsx)(t.h2,{id:"assert-the-non-existence-of-elements",children:"Assert the (non) Existence of Elements"}),"\n",(0,n.jsxs)(t.p,{children:["To validate if an element exists or not we use ",(0,n.jsx)(t.a,{href:"/docs/0.8.0/api/Actions/expect",children:"expect()"})," in combination with ",(0,n.jsx)(t.a,{href:"/docs/0.8.0/api/Checks/exists",children:"exists()"})," or ",(0,n.jsx)(t.a,{href:"/docs/0.8.0/api/Checks/notexists",children:"notExists"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// Expect that a button with text 'Go for it' exists\nawait aui.expect().text().withText('Login').exists().exec();\n\n// Expect that a text 'Do not go for it' not exists\nawait aui.expect().text().withText('Login').notExists().exec();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"assert-the-correctness-of-values",children:"Assert the Correctness of Values"}),"\n",(0,n.jsx)(t.p,{children:"Let's say you want to check if your automation actually wrote something into a textfield. You can do two things:"}),"\n",(0,n.jsx)(t.h3,{id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches",children:"1. Use expect() to check if the text in the textfield matches"}),"\n",(0,n.jsx)(t.p,{children:"This technique is useful if the text you entered is unique on the screen."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text().withText("Enter email").exec();\n\n// Assert if the textfield contains the value\nawait aui.expect().textfield().contains().text().withText(\'Please find me\').exists().exec();\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"2-retrieve-the-element-with-get-and-use-an-assertions-library",children:["2. Retrieve the element with ",(0,n.jsx)(t.a,{href:"/docs/0.8.0/api/Getters/get",children:"get()"})," and use an assertions library"]}),"\n",(0,n.jsxs)(t.p,{children:["If your value is not unique on your screen you can retrieve the element with ",(0,n.jsx)(t.a,{href:"/docs/0.8.0/api/Getters/get",children:"get()"})," and a different selector. For example with a relational selector like ",(0,n.jsx)(t.a,{href:"/docs/0.8.0/api/Relations/below",children:"below()"}),". With an assertion library you can assert if the value is correct."]}),"\n",(0,n.jsx)(t.p,{children:"Jest comes with assertions. You only have to import them into your askui-file."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Do not forget the import mentioned at the start of the snippet!"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'// Add this to the start of your askui-file containing your workflows/instructions\nimport {expect, jest, test} from \'@jest/globals\';\n\n// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text().withText("Enter email").exec();\n\n// You have to retrieve the text you wrote inside the textfield here\n// If you retrieve the textfield it does not contain the text inside of it\nconst textfield = await aui.get().text().below().text().withText("User email").exec();\n\n// below() returns an array. We want the first element of that array!\nexpect(textfield[0].text).toBe("Please find me");\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(67294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);