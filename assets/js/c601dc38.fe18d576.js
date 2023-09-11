"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6706],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),h=i,d=f["".concat(l,".").concat(h)]||f[h]||u[h]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const o={sidebar_position:7},s="Assertions",a={unversionedId:"general/Element Selection/assertions",id:"version-0.11.6/general/Element Selection/assertions",title:"Assertions",description:"In this guide we will first show you how to assert if an element is there or not.",source:"@site/versioned_docs/version-0.11.6/general/03-Element Selection/assertions.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/assertions",permalink:"/docs/general/Element Selection/assertions",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/general/03-Element Selection/assertions.md",tags:[],version:"0.11.6",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Tables",permalink:"/docs/general/Element Selection/tables"},next:{title:"Automation Recorder",permalink:"/docs/general/Element Selection/automation-recorder"}},l={},c=[{value:"Assert the (non) Existence of Elements",id:"assert-the-non-existence-of-elements",level:2},{value:"Assert the Correctness of Values",id:"assert-the-correctness-of-values",level:2},{value:"1. Use expect() to check if the text in the textfield matches",id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches",level:3},{value:"2. Retrieve the element with get() and use an assertions library",id:"2-retrieve-the-element-with-get-and-use-an-assertions-library",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"In this guide we will first show you how to assert if an element is there or not."),(0,i.kt)("h2",{id:"assert-the-non-existence-of-elements"},"Assert the (non) Existence of Elements"),(0,i.kt)("p",null,"To validate if an element exists or not we use ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Actions/expect"},"expect()")," in combination with ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Checks/exists"},"exists()")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Checks/notexists"},"notExists"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Expect that a button with text 'Go for it' exists\nawait aui.expect().text('Login').exists().exec();\n\n// Expect that a text 'Do not go for it' not exists\nawait aui.expect().text('Login').notExists().exec();\n")),(0,i.kt)("h2",{id:"assert-the-correctness-of-values"},"Assert the Correctness of Values"),(0,i.kt)("p",null,"Let's say you want to check if your automation actually wrote something into a textfield. You can do two things:"),(0,i.kt)("h3",{id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches"},"1. Use expect() to check if the text in the textfield matches"),(0,i.kt)("p",null,"This technique is useful if the text you entered is unique on the screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();\n\n// Assert if the textfield contains the value\nawait aui.expect().textfield().contains().text(\'Please find me\').exists().exec();\n')),(0,i.kt)("h3",{id:"2-retrieve-the-element-with-get-and-use-an-assertions-library"},"2. Retrieve the element with ",(0,i.kt)("a",{parentName:"h3",href:"/docs/api/Getters/get"},"get()")," and use an assertions library"),(0,i.kt)("p",null,"If your value is not unique on your screen you can retrieve the element with ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Getters/get"},"get()")," and a different selector. For example with a relational selector like ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Relations/below"},"below()"),". With an assertion library you can assert if the value is correct."),(0,i.kt)("p",null,"Jest comes with assertions. You only have to import them into your AskUI-file."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Do not forget the import mentioned at the start of the snippet!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Add this to the start of your AskUI-file containing your workflows/instructions\nimport {expect, jest, test} from \'@jest/globals\';\n\n// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();\n\n// You have to retrieve the text you wrote inside the textfield here\n// If you retrieve the textfield it does not contain the text inside of it\nconst textfield = await aui.get().text().below().text("User email").exec();\n\n// below() returns an array. We want the first element of that array!\nexpect(textfield[0].text).toBe("Please find me");\n')))}u.isMDXComponent=!0}}]);