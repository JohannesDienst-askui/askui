"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90015],{72183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(85893),s=n(11151);const a={sidebar_position:3},c="Text Element-Descriptions",o={id:"general/Guides/guide-text-element-descriptions",title:"Text Element-Descriptions",description:"When using askui for automated tests, text elements are playing a big role, since they typically appear more distinctively than other elements such as icons or text fields. Hence, knowing the benefits of using different text element-description can become critical in scaffolding a robust set of instructions.",source:"@site/versioned_docs/version-0.8.0/general/03-Guides/guide-text-element-descriptions.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/guide-text-element-descriptions",permalink:"/docs/0.8.0/general/Guides/guide-text-element-descriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.8.0/general/03-Guides/guide-text-element-descriptions.md",tags:[],version:"0.8.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Relational Element-Descriptions",permalink:"/docs/0.8.0/general/Guides/guide-relational-element-descriptions"},next:{title:"Recommended Practices",permalink:"/docs/0.8.0/general/Guides/recommended-practices"}},r={},h=[{value:"Basic Text Matching",id:"basic-text-matching",level:2},{value:"Match a Sub-string within a Text",id:"match-a-sub-string-within-a-text",level:2},{value:"Match the Exact Text",id:"match-the-exact-text",level:2},{value:"Match Text with Regular Expression",id:"match-text-with-regular-expression",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"text-element-descriptions",children:"Text Element-Descriptions"}),"\n",(0,i.jsx)(t.p,{children:"When using askui for automated tests, text elements are playing a big role, since they typically appear more distinctively than other elements such as icons or text fields. Hence, knowing the benefits of using different text element-description can become critical in scaffolding a robust set of instructions."}),"\n",(0,i.jsx)(t.p,{children:"askui provides four different element-descriptions to handle text elements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"containsText()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"withExactText()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"withText()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"withTextRegex()"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For a convenient demonstration, we will use a ",(0,i.jsx)(t.a,{href:"https://gallery.flutter.dev/#/demo",children:"Flutter web demo"})," provided by Flutter."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"basic-text-matching",children:"Basic Text Matching"}),"\n",(0,i.jsxs)(t.p,{children:["The simplest way to interact with a text element is to use ",(0,i.jsx)(t.code,{children:"withText()"}),". Go to the demo app page and run the code below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui.moveMouseTo().text().withText('matrial').exec();\nawait aui.mouseLeftClick().exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"withText",src:n(2699).Z+"",width:"640",height:"360"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"withText()"})," tries to find a text that matches the whole sequence. In most cases, you will want to stick to this method, as it supports ",(0,i.jsx)(t.strong,{children:"Fuzzy Matching"})," and tolerates misspelled text. ",(0,i.jsx)(t.strong,{children:"Note that the above example code has two typos"}),". ",(0,i.jsx)(t.code,{children:"matrial"})," doesn't match the text in the demo app, which is ",(0,i.jsx)(t.code,{children:"Material"}),", although askui will find the text element that roughly matches the text on the screen."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"match-a-sub-string-within-a-text",children:"Match a Sub-string within a Text"}),"\n",(0,i.jsxs)(t.p,{children:["Even though the ",(0,i.jsx)(t.code,{children:"withText()"})," is handy and quite reliable, you might face a case where you know only a fraction of the text element that you want to interact with. In such a case, ",(0,i.jsx)(t.code,{children:"containsText()"})," is the element-description you might want to use:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui.moveMouseTo().text().containsText('Bottom').exec();\nawait aui.mouseLeftClick().exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"containsText",src:n(28414).Z+"",width:"640",height:"360"})}),"\n",(0,i.jsxs)(t.p,{children:["Be aware that even if the ",(0,i.jsx)(t.code,{children:"containsText()"})," also supports ",(0,i.jsx)(t.strong,{children:"Fuzzy Matching"}),", it won't match the whole sequence by just a few characters. Try to use this code with the given demo app:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// this will fail\nawait aui.moveMouseTo().text().containsText('Bottm').exec(); \n"})}),"\n",(0,i.jsxs)(t.p,{children:["You will notice that askui fails to match the given text ",(0,i.jsx)(t.code,{children:"Bottm"}),", whereas this code will work:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// this will succeed\nawait aui.moveMouseTo().text().containsText('Bottm appbar').exec();\n\n// this will also succeed\nawait aui.moveMouseTo().text().containsText('Bottom').exec(); \n"})}),"\n",(0,i.jsxs)(t.p,{children:["The biggest difference between ",(0,i.jsx)(t.code,{children:"withText()"})," and ",(0,i.jsx)(t.code,{children:"containsText()"})," is whether it matches the text as a whole sequence or not. Matching many texts with a repeating affix could be a practical use case for the ",(0,i.jsx)(t.code,{children:"containsText()"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"It is recommended to experiment enough with these element-descriptions to find a better option that suits your specific case, since it's not easy to predict if the given text can be fuzzy-matched with target texts."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"match-the-exact-text",children:"Match the Exact Text"}),"\n",(0,i.jsxs)(t.p,{children:["If you already know what text you are looking for, or if there are too many similar text elements, you can use the element-description ",(0,i.jsx)(t.code,{children:"withExactText()"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["From the main page of the demo app, go to ",(0,i.jsx)(t.code,{children:"Material"}),"->",(0,i.jsx)(t.code,{children:"Data tables"}),". You will see a table with different foods given with nutrition factors for each of them."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's say that we want to click on the items that has exactly ",(0,i.jsx)(t.strong,{children:"25.0 gm of Fat"}),". In our demo app, only the ",(0,i.jsx)(t.strong,{children:"Doughnut"})," is the matching item. Run this code and see how ",(0,i.jsx)(t.code,{children:"withText()"})," matches the text:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"\n// Use this helper function to calculate the centroid of the detected elements.\nfunction getCentroid(element: any): any {\n    let x = (element.bndbox.xmax - element.bndbox.xmin) / 2.0 + element.bndbox.xmin;\n    let y = (element.bndbox.ymax - element.bndbox.ymin) / 2.0 + element.bndbox.ymin;\n    return { x: x, y: y };\n}\n\n// Find all the text elements that matches '25.0'\nconst elts = await aui.get().text().withText('25.0').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<elts.length; ++i){\n    const centroid = getCentroid(elts[i]);\n    await aui.moveMouse(Math.round(centroid.x), Math.round(centroid.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"withText2",src:n(78916).Z+"",width:"960",height:"1139"})}),"\n",(0,i.jsxs)(t.p,{children:["You will see that askui clicks not only the ",(0,i.jsx)(t.strong,{children:"25.0"})," but also the ",(0,i.jsx)(t.strong,{children:"26.0"}),", which is the fat of the ",(0,i.jsx)(t.strong,{children:"Apple pie"}),". The result of this test code may differ in your case, because of the different screen resolution and the rendered-size of the demo app."]}),"\n",(0,i.jsxs)(t.p,{children:["It will give you a clear idea where you will need to use the element-description ",(0,i.jsx)(t.code,{children:"withExactText()"})," instead of ",(0,i.jsx)(t.code,{children:"withText()"}),". Try to run the same code after replacing the ",(0,i.jsx)(t.code,{children:"withText()"})," to ",(0,i.jsx)(t.code,{children:"withExactText()"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// Find all the text elements that matches '25.0' exactly\nconst elts = await aui.get().text().withExactText('25.0').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<elts.length; ++i){\n    const centroid = getCentroid(elts[i]);\n    await aui.moveMouse(Math.round(centroid.x), Math.round(centroid.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"withExactText",src:n(65047).Z+"",width:"800",height:"396"})}),"\n",(0,i.jsx)(t.h2,{id:"match-text-with-regular-expression",children:"Match Text with Regular Expression"}),"\n",(0,i.jsxs)(t.p,{children:["The element-description ",(0,i.jsx)(t.code,{children:"withTextRegex()"})," supports ",(0,i.jsx)(t.strong,{children:"Regular Expression"})," to match any text in the most flexible way. Although it might be tricky to use regex due to its esoteric appearance, it is maybe one of the most versatile solutions when it comes to character matching."]}),"\n",(0,i.jsxs)(t.p,{children:["On the same page of the demo app, let's say that we want to click on the items whose Calorie is between 300 and 500 ",(0,i.jsx)(t.code,{children:"(cal>=300 && cal<500)"}),". Since regex doesn't support numeric comparison, we will try to match the digits in a sequence:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// Find all the text that matches the expression\nconst cals = await aui.get().text().withTextRegex('[3-4][0-9]{2}').exec();\n\n// Then, iterate through the found elements and click on them\nfor(let i=0; i<cals.length; ++i){\n    const coord = getCentroid(cals[i]);\n    console.log(cals[i].text, coord);\n    await aui.moveMouse(Math.round(coord.x), Math.round(coord.y)).exec();\n    await aui.mouseLeftClick().exec();\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"withTextRegex",src:n(33536).Z+"",width:"800",height:"946"})}),"\n",(0,i.jsxs)(t.p,{children:["The regular expression ",(0,i.jsx)(t.code,{children:"[3-4][0-9]{2}"})," means,"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"[3-4]"}),": Match one character between 3 and 4."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"[0-9]"}),": Match one character between 0 and 9."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:2}),": Repeat the previous expression ([0-9]) two times."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As the result, it will try to match every text that has a sequence starting with the digit 3 or 4, and then has any two digits in a row."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28414:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/containsText-a48575b52706cf0ed5894bdaf9229852.gif"},65047:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/withExactText-d8a72ea69921c5687967b22664579a36.gif"},2699:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/withText-89a3b4d3a0254f057f1f6ee3d9220b11.gif"},78916:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/withText2-eb58c4cd466392c600a0d956b2efab6d.gif"},33536:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/withTextRegex-befaab3dfd28cf7228c0ef43ceaa6952.gif"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var i=n(67294);const s={},a=i.createContext(s);function c(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);