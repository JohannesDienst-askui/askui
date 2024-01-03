"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6292],{23912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var i=n(85893),s=n(11151);const l={sidebar_position:3},o="Relational Selectors",a={id:"general/Element Selection/relational-selectors",title:"Relational Selectors",description:"A common problem while writing instructions which one encounters is interacting with elements which share the same text.",source:"@site/docs/general/03-Element Selection/relational-selectors.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/relational-selectors",permalink:"/docs/next/general/Element Selection/relational-selectors",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/03-Element Selection/relational-selectors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Text and Element Selectors",permalink:"/docs/next/general/Element Selection/text-and-element-selectors"},next:{title:"Prompt Selectors",permalink:"/docs/next/general/Element Selection/prompt-selectors"}},c={},r=[{value:"Selecting an Element by Visual Relation",id:"selecting-an-element-by-visual-relation",level:2},{value:"above()",id:"above",level:2},{value:"below()",id:"below",level:2},{value:"contains()",id:"contains",level:2},{value:"in()",id:"in",level:2},{value:"leftOf() and rightOf()",id:"leftof-and-rightof",level:2},{value:"nearestTo()",id:"nearestto",level:2},{value:"Additional Considerations About the Distance Metric",id:"additional-considerations-about-the-distance-metric",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"relational-selectors",children:"Relational Selectors"}),"\n",(0,i.jsx)(t.p,{children:"A common problem while writing instructions which one encounters is interacting with elements which share the same text."}),"\n",(0,i.jsx)(t.p,{children:"An example can be seen when you interactively annotate your Visual Studio Code Editor.\nNotice that the magnifying glass icon and many other elements throughout the UI share the same name:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Icon mobile annotation one.",src:n(87214).Z+"",width:"788",height:"164"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Icon mobile annotation one.",src:n(70943).Z+"",width:"624",height:"198"})}),"\n",(0,i.jsx)(t.p,{children:"To ensure you\u2019re able to instruct AskUI to select the correct element, the use of relational element-descriptions can be employed.\nRelational element-descriptions describe the element relative to other elements in the UI."}),"\n",(0,i.jsx)(t.h2,{id:"selecting-an-element-by-visual-relation",children:"Selecting an Element by Visual Relation"}),"\n",(0,i.jsx)(t.p,{children:"After reading the next section you will know how to use the full power of all the relational element-descriptions. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future."}),"\n",(0,i.jsxs)(t.p,{children:["We will use the ",(0,i.jsx)(t.a,{href:"https://selectorshub.com/xpath-practice-page/",children:"Selectorshub practice page"})," for the demonstration."]}),"\n",(0,i.jsx)(t.p,{children:"We\u2019ll discuss the following relational element-descriptions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#above",children:"above()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#below",children:"below()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#contains",children:"contains()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#in",children:"in()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#leftof-and-rightof",children:"leftOf()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#leftof-and-rightof",children:"rightOf()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#nearestto",children:"nearestTo()"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"above",children:"above()"}),"\n",(0,i.jsxs)(t.p,{children:["When you want to click on a textfield and it is above an element, like for example a button with the text Submit. You can do it with ",(0,i.jsx)(t.code,{children:"above()"}),". The following code snippet moves the mouse to the textfield above the ",(0,i.jsx)(t.em,{children:"Submit"}),"-button:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .click()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"above",src:n(6550).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"below",children:"below()"}),"\n",(0,i.jsxs)(t.p,{children:["When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text ",(0,i.jsx)(t.em,{children:"Mobile Number"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .below()\n  .text()\n  .withText('Mobile Number')\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"below",src:n(43978).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"contains",children:"contains()"}),"\n",(0,i.jsxs)(t.p,{children:["For selecting an element, that contains another element, ",(0,i.jsx)(t.code,{children:"contains()"})," is the right candidate. It is especially useful if you want to select a textfield with a placeholder text inside it. The text inside the textfield is annotated as an element itself."]}),"\n",(0,i.jsxs)(t.p,{children:["If you have problems with selecting a specific element, always run ",(0,i.jsx)(t.code,{children:"annotate()"})," to create a screenshot of all the annotations or use ",(0,i.jsx)(t.code,{children:"annotateInteractively()"})," to see if you need to use ",(0,i.jsx)(t.code,{children:"contains()"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The following snippet moves the mouse to a textfield based on its placeholder text ",(0,i.jsx)(t.em,{children:"First Crush"})," which is contained in the textfield:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .contains()\n  .text()\n  .withText('First Crush')\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"contains",src:n(63283).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"in",children:"in()"}),"\n",(0,i.jsxs)(t.p,{children:["When you want to target an element that is inside another element you can use ",(0,i.jsx)(t.code,{children:"in()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n"})}),"\n",(0,i.jsx)(t.p,{children:"The following code snippet moves the mouse pointer to the text of the first textfield AskUI found:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .text()\n  .in()\n  .textfield()\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"in",src:n(28186).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"leftof-and-rightof",children:"leftOf() and rightOf()"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to select an element based on its location left or right of another element you have to use ",(0,i.jsx)(t.code,{children:"leftOf()"})," or ",(0,i.jsx)(t.code,{children:"rightOf()"})," respectively."]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udca1 If you do not specify another element-description like ",(0,i.jsx)(t.code,{children:"withText()"})," then you will get the nearest element. Otherwise, AskUI retrieves the nearest element that matches the element-description!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .text()\n  .leftOf()\n  .text()\n  .withText('Denmark')\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"leftof",src:n(22087).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .text()\n  .rightOf()\n  .text()\n  .withExactText('Joe Root')\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"leftof",src:n(92015).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"nearestto",children:"nearestTo()"}),"\n",(0,i.jsxs)(t.p,{children:["Filtering with the ",(0,i.jsx)(t.code,{children:"nearestTo()"})," will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where ",(0,i.jsx)(t.code,{children:"leftOf()"})," and ",(0,i.jsx)(t.code,{children:"rightOf()"})," would fail."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .nearestTo()\n  .text()\n  .withTextRegex('User Em*')\n  .exec();\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"nearestto",src:n(15878).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.h2,{id:"additional-considerations-about-the-distance-metric",children:"Additional Considerations About the Distance Metric"}),"\n",(0,i.jsxs)(t.p,{children:["The distance is not entirely based on physical distance. If you use an additional element-description like ",(0,i.jsx)(t.code,{children:"withText()"})," it optimizes to find the best match. It also considers special cases, for example, modal dialogs. Therefore the element selected by AskUI might sometimes be wrong from a user's point of view."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use ",(0,i.jsx)(t.code,{children:"moveMouseTo()"})," like in the following example to see what element an instruction targets."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec()\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},87214:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/relational_selectors_same_icon1-3583aa6ca6c211148d995fc843e7487c.png"},70943:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/relational_selectors_same_icon2-a52291bccba1da0e71acf8b4533ac9e5.png"},6550:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/above-dc81b84a9b34574ec4f2751a6a13ea86.gif"},43978:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"},63283:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/contains-092964bf7692f6d8114d6016661d6760.gif"},28186:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/in-dc3fb4817216d048579435358280132f.gif"},22087:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"},15878:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/nearestTo-dec2bcd81d965c45a30127b3ee771bc6.gif"},92015:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);