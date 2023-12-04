"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9805],{35429:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(85893),s=i(11151);const o={sidebar_position:4},c="Recommended Practices",r={id:"general/Guides/recommended-practices",title:"Recommended Practices",description:"This page will give you examples of how to use askui efficiently and effectively.",source:"@site/versioned_docs/version-0.10.5/general/03-Guides/recommended-practices.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/recommended-practices",permalink:"/docs/0.10.5/general/Guides/recommended-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/03-Guides/recommended-practices.md",tags:[],version:"0.10.5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Text Element-Descriptions",permalink:"/docs/0.10.5/general/Guides/guide-text-element-descriptions"},next:{title:"Taking Screenshots",permalink:"/docs/0.10.5/general/Guides/taking-screenshots"}},a={},l=[{value:"General Considerations on Speed of Inference for Different Element-Descriptions",id:"general-considerations-on-speed-of-inference-for-different-element-descriptions",level:2},{value:"Avoid Optical Character Recognition (OCR) on Too Many Element",id:"avoid-optical-character-recognition-ocr-on-too-many-element",level:3},{value:"Avoid Custom Element Detection if Possible",id:"avoid-custom-element-detection-if-possible",level:3},{value:"Scrolling",id:"scrolling",level:2},{value:"Scrolling on Touch Displays",id:"scrolling-on-touch-displays",level:3},{value:"Scrolling With Mouse Wheel",id:"scrolling-with-mouse-wheel",level:3},{value:"Scrolling With Key Press",id:"scrolling-with-key-press",level:3},{value:"Wait for an Element to Appear",id:"wait-for-an-element-to-appear",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"recommended-practices",children:"Recommended Practices"}),"\n",(0,t.jsx)(n.p,{children:"This page will give you examples of how to use askui efficiently and effectively."}),"\n",(0,t.jsx)(n.h2,{id:"general-considerations-on-speed-of-inference-for-different-element-descriptions",children:"General Considerations on Speed of Inference for Different Element-Descriptions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Submodel"}),(0,t.jsx)(n.th,{children:"Tasks"}),(0,t.jsx)(n.th,{children:"Speed"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object Detector"}),(0,t.jsx)(n.td,{children:"Common elements, e.g. a button or textfield"}),(0,t.jsxs)(n.td,{children:["fast ","\ud83d\ude80"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Icon Classifier"}),(0,t.jsx)(n.td,{children:"Predict the class of an icon, e.g., a user icon"}),(0,t.jsxs)(n.td,{children:["fast ","\ud83d\ude80"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Optical Character Recognition (OCR)"}),(0,t.jsx)(n.td,{children:"Recognize text"}),(0,t.jsxs)(n.td,{children:["fast ","\ud83d\ude80"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom Element Detector"}),(0,t.jsx)(n.td,{children:"Search via an image inside the screen"}),(0,t.jsxs)(n.td,{children:["slow ","\ud83d\udc0c"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"avoid-optical-character-recognition-ocr-on-too-many-element",children:"Avoid Optical Character Recognition (OCR) on Too Many Element"}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"containsText()"}),", ",(0,t.jsx)(n.code,{children:"withText()"}),", ",(0,t.jsx)(n.code,{children:"withExactText()"})," or ",(0,t.jsx)(n.code,{children:"withTextRegex()"})," ",(0,t.jsx)(n.strong,{children:"OCR"})," is applied to all elements detected on your screen. This can slow down askui. It is more efficient to narrow down the elements first. For example, if you want to click a ",(0,t.jsx)(n.code,{children:"button"})," with a specific text you should select all buttons first."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Do this\nawait aui.click().button().withText('See here').exec();\nawait aui.click().text('Sign in').exec();\n\n// And NOT this\nawait aui.click().withText('See here').exec();\nawait aui.click().withText('Sign in').exec();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"avoid-custom-element-detection-if-possible",children:"Avoid Custom Element Detection if Possible"}),"\n",(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"customElement()"})," you are doing an image-in-image search. Use this sparingly only for specific custom elements as the execution time is slow!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Do this\nawait aui.click().button().withText('Login').exec();\nawait aui.click().text('Overview').exec();\n\n// And NOT this\nawait aui.click().customElement({\n  customImage: '.../login_button.png', \n  name: 'login button',\n}).exec();\nawait aui.click().customElement({\n  customImage: '.../text_overview.png', \n  name: 'overview button',\n}).exec();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"scrolling",children:"Scrolling"}),"\n",(0,t.jsx)(n.p,{children:"When you use askui you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements."}),"\n",(0,t.jsx)(n.h3,{id:"scrolling-on-touch-displays",children:"Scrolling on Touch Displays"}),"\n",(0,t.jsx)(n.p,{children:"On touch displays you have to recreate the swipe gesture:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Touch the display with your finger, move finger to the left, release\nawait aui.mouseToggleDown().exec()\nawait aui.moveMouseRelatively(-1500, 0).exec()\nawait aui.mouseToggleUp().exec()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"scrolling-with-mouse-wheel",children:"Scrolling With Mouse Wheel"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to scroll with your mouse wheel you can use the ",(0,t.jsx)(n.code,{children:"scroll()"})," action:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Scroll 10 down in y direction<>\nawait aui.scroll(0, -10).exec()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"scrolling-with-key-press",children:"Scrolling With Key Press"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to scroll with a key press you could use your arrow keys (",(0,t.jsx)(n.code,{children:"up"}),", ",(0,t.jsx)(n.code,{children:"down"}),", ",(0,t.jsx)(n.code,{children:"left"}),", ",(0,t.jsx)(n.code,{children:"right"})," ) or the ",(0,t.jsx)(n.code,{children:"pagedown"}),"-key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Press down arrow key\nawait aui.pressKey('down').exec()\n\n// Press up arrow key\nawait aui.pressKey('down').exec()\n\n// Scroll down a page\nawait aui.pressKey('pagedown').exec()\n\n// Scroll up a page\nawait aui.pressKey('pageup').exec()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wait-for-an-element-to-appear",children:"Wait for an Element to Appear"}),"\n",(0,t.jsx)(n.p,{children:"askui implements a conservative retry strategy to wait for an element to appear. But sometimes this is not long enough.\nYou can wait for an element to appear with the following helper function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// Retry the command 5 times with a\n// wait time of 2 seconds between each try\nasync function waitUntil(askuiCommand: () => Promise<void>, maxTry = 5) {\n  try {\n    await askuiCommand();\n  }\n  catch (error) {\n    if (maxTry == 0) {\n      throw error\n    }\n    console.log(`Retry predicting command, ${maxTry} tries left`)\n    await aui.waitFor(2000).exec();\n    await waitUntil(askuiCommand, maxTry - 1)\n  }\n}\n\n// Wait for the text 'Github' to be displayed\nawait waitUntil(\n  async () => \n    aui.expect().text('Github').exists().exec()\n  );\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var t=i(67294);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);