"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93012],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(25773),i=(n(27378),n(35318));const l={sidebar_position:2},o="Relational Selectors",r={unversionedId:"general/Guides/guide-relational-selectors",id:"general/Guides/guide-relational-selectors",title:"Relational Selectors",description:"A common problem while writing instructions which one encounters is interacting with elements which share the same text.",source:"@site/docs/general/03-Guides/guide-relational-selectors.md",sourceDirName:"general/03-Guides",slug:"/general/Guides/guide-relational-selectors",permalink:"/docs/next/general/Guides/guide-relational-selectors",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/03-Guides/guide-relational-selectors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Text Selectors",permalink:"/docs/next/general/Guides/guide-text-selectors"},next:{title:"Recommended Practices",permalink:"/docs/next/general/Guides/recommended-practices"}},s={},c=[{value:"Selecting an Element by Visual Relation",id:"selecting-an-element-by-visual-relation",level:2},{value:"above()",id:"above",level:2},{value:"below()",id:"below",level:2},{value:"contains()",id:"contains",level:2},{value:"in()",id:"in",level:2},{value:"leftOf() and rightOf()",id:"leftof-and-rightof",level:2},{value:"nearestTo()",id:"nearestto",level:2},{value:"Additional Considerations About the Distance Metric",id:"additional-considerations-about-the-distance-metric",level:2}],u={toc:c};function d(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"relational-selectors"},"Relational Selectors"),(0,i.kt)("p",null,"A common problem while writing instructions which one encounters is interacting with elements which share the same text."),(0,i.kt)("p",null,"An example can be seen when you interactively annotate your Visual Studio Code Editor.\nNotice that the magnifying glass icon and many other elements throughout the UI share the same name:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Icon mobile annotation one.",src:n(87799).Z,width:"788",height:"164"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Icon mobile annotation one.",src:n(23187).Z,width:"624",height:"198"})),(0,i.kt)("p",null,"To ensure you\u2019re able to instruct askui to select the correct element, the use of relational selectors can be employed.\nRelational selectors describe the element relative to other elements in the UI."),(0,i.kt)("h2",{id:"selecting-an-element-by-visual-relation"},"Selecting an Element by Visual Relation"),(0,i.kt)("p",null,"After reading the next section you will know how to use the full power of all the relational selectors. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future."),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("a",{parentName:"p",href:"https://selectorshub.com/xpath-practice-page/"},"Selectorshub practice page")," for the demonstration."),(0,i.kt)("p",null,"We\u2019ll discuss the following relational selectors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#above"},"above()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#below"},"below()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#contains"},"contains()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#in"},"in()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#leftof-and-rightof"},"leftOf()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#leftof-and-rightof"},"rightOf()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nearestto"},"nearestTo()"))),(0,i.kt)("h2",{id:"above"},"above()"),(0,i.kt)("p",null,"When you want to click on a textfield and it is above an element, like for example a button with the text Submit. You can do it with ",(0,i.kt)("inlineCode",{parentName:"p"},"above()"),". The following code snippet moves the mouse to the textfield above the ",(0,i.kt)("em",{parentName:"p"},"Submit"),"-button:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .click()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"above",src:n(6550).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"below"},"below()"),(0,i.kt)("p",null,"When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text ",(0,i.kt)("em",{parentName:"p"},"Mobile Number"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .below()\n  .text()\n  .withText('Mobile Number')\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"below",src:n(43978).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"contains"},"contains()"),(0,i.kt)("p",null,"For selecting an element, that contains another element, ",(0,i.kt)("inlineCode",{parentName:"p"},"contains()")," is the right candidate. It is especially useful if you want to select a textfield with a placeholder text inside it. The text inside the textfield is annotated as an element itself."),(0,i.kt)("p",null,"If you have problems with selecting a specific element, always run ",(0,i.kt)("inlineCode",{parentName:"p"},"annotate()")," to create a screenshot of all the annotations or use ",(0,i.kt)("inlineCode",{parentName:"p"},"annotateInteractively()")," to see if you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"contains()"),"."),(0,i.kt)("p",null,"The following snippet moves the mouse to a textfield based on its placeholder text ",(0,i.kt)("em",{parentName:"p"},"First Crush")," which is contained in the textfield:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .contains()\n  .text()\n  .withText('First Crush')\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"contains",src:n(63283).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"in"},"in()"),(0,i.kt)("p",null,"When you want to target an element that is inside another element you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"in()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n")),(0,i.kt)("p",null,"The following code snippet moves the mouse pointer to the text of the first textfield askui found:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .text()\n  .in()\n  .textfield()\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"in",src:n(28186).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"leftof-and-rightof"},"leftOf() and rightOf()"),(0,i.kt)("p",null,"If you want to select an element based on its location left or right of another element you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"leftOf()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rightOf()")," respectively."),(0,i.kt)("p",null,"\ud83d\udca1 If you do not specify another filter like ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," then you will get the nearest element. Otherwise, askui retrieves the nearest element that matches the filter!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .text()\n  .leftOf()\n  .text()\n  .withText('Denmark')\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"leftof",src:n(22087).Z,width:"1920",height:"1080"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .text()\n  .rightOf()\n  .text()\n  .withExactText('Joe Root')\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"leftof",src:n(92015).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"nearestto"},"nearestTo()"),(0,i.kt)("p",null,"Filtering with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nearestTo()")," filter will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where ",(0,i.kt)("inlineCode",{parentName:"p"},"leftOf()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rightOf()")," would fail."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .nearestTo()\n  .text()\n  .withTextRegex('User Em*')\n  .exec();\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nearestto",src:n(15878).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"additional-considerations-about-the-distance-metric"},"Additional Considerations About the Distance Metric"),(0,i.kt)("p",null,"The distance is not entirely based on physical distance. If you use an additional filter like ",(0,i.kt)("inlineCode",{parentName:"p"},"withText()")," it optimizes to find the best match. It also considers special cases, for example, modal dialogs. Therefore the element selected by askui might sometimes be wrong from a user's point of view."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"moveMouseTo()")," like in the following example to see what element an instruction targets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await aui\n  .moveMouseTo()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec()\n")))}d.isMDXComponent=!0},87799:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/relational_selectors_same_icon1-3583aa6ca6c211148d995fc843e7487c.png"},23187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/relational_selectors_same_icon2-a52291bccba1da0e71acf8b4533ac9e5.png"},6550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/above-dc81b84a9b34574ec4f2751a6a13ea86.gif"},43978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"},63283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contains-092964bf7692f6d8114d6016661d6760.gif"},28186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/in-dc3fb4817216d048579435358280132f.gif"},22087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"},15878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nearestTo-dec2bcd81d965c45a30127b3ee771bc6.gif"},92015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"}}]);