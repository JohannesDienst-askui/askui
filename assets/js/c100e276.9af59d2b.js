"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98616],{46744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(17624),s=t(4552),r=t(86212),a=t(22440);const o={sidebar_position:7,pagination_next:"general/Getting Started/whats-next"},l="Create Your First Instruction",c={id:"general/Getting Started/write-your-first-instruction",title:"Create Your First Instruction",description:"What you will learn",source:"@site/versioned_docs/version-0.13.1/general/01-Getting Started/write-your-first-instruction.md",sourceDirName:"general/01-Getting Started",slug:"/general/Getting Started/write-your-first-instruction",permalink:"/docs/0.13.1/general/Getting Started/write-your-first-instruction",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/general/01-Getting Started/write-your-first-instruction.md",tags:[],version:"0.13.1",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_next:"general/Getting Started/whats-next"},sidebar:"docsSidebar",previous:{title:"Enterprise Checklist",permalink:"/docs/0.13.1/general/Getting Started/Installing AskUI/enterprise-checklist"},next:{title:"What's Next?",permalink:"/docs/0.13.1/general/Getting Started/whats-next"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Anatomy of an AskUI Workflow File",id:"anatomy-of-an-askui-workflow-file",level:2},{value:"Key Components",id:"key-components",level:3},{value:"Example",id:"example",level:3},{value:"Step-by-Step Implementation",id:"step-by-step-implementation",level:2},{value:"Step 1: Annotate Your Screen",id:"step-1-annotate-your-screen",level:3},{value:"Run the Annotation",id:"run-the-annotation",level:4},{value:"Step 2: Identifying Your Target Element",id:"step-2-identifying-your-target-element",level:3},{value:"Approach A: Standard Element-Description Extraction (Recommended)",id:"approach-a-standard-element-description-extraction-recommended",level:4},{value:"Approach B: Filtering by Proximity: Using Relational Selectors",id:"approach-b-filtering-by-proximity-using-relational-selectors",level:4},{value:"Approach C: Custom Element-Descriptions: Screenshot-Based Selection (Advanced)",id:"approach-c-custom-element-descriptions-screenshot-based-selection-advanced",level:4},{value:"Step 3: Selecting the Right Action for Your Task",id:"step-3-selecting-the-right-action-for-your-task",level:3},{value:"Step 4: Execute an Instruction",id:"step-4-execute-an-instruction",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-your-first-instruction",children:"Create Your First Instruction"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"What you will learn"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Understanding AskUI Workflow files"}),"\n",(0,i.jsx)(n.li,{children:"Creating and running your first automation"}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AskUI is installed on your computer."}),"\n",(0,i.jsx)(n.li,{children:"The AskUI Controller is running."}),"\n",(0,i.jsx)(n.li,{children:"We recommend using a second monitor to ensure AskUI is not interacting with your code editor."}),"\n",(0,i.jsxs)(n.li,{children:["You have a workflow file open on your main display e.g. the original template ",(0,i.jsx)(n.code,{children:"askui_example/my-first-askui-test-suite.test.ts"})," in the directory you initialized your AskUI-Project before."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For macOS Users"}),(0,i.jsx)(n.br,{}),"\n","Some users have reported instability running AskUI on macOS with external displays and/or ",(0,i.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac",children:"virtual desktops (called Spaces)"}),". If you experience similar issues, please disconnect external displays and close virtual desktops."]})}),"\n",(0,i.jsx)(n.h2,{id:"anatomy-of-an-askui-workflow-file",children:"Anatomy of an AskUI Workflow File"}),"\n",(0,i.jsx)(n.p,{children:"An AskUI Workflow file, using the Jest framework, is a versatile tool for automating user interface (UI) interactions across various applications, extending beyond traditional testing scenarios. It allows users to script complex UI interactions for both automation tasks and testing purposes."}),"\n",(0,i.jsx)(n.h3,{id:"key-components",children:"Key Components"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Import Statements"}),": Begin by importing necessary AskUI modules and helpers."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"describe"})," Block"]}),": Groups related UI automation scenarios or tests."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"it"})," Blocks"]}),": Each block defines a specific UI interaction or automation task, such as form submissions, navigation, or simulating user actions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AskUI API"}),": Utilized within it blocks for direct UI interactions, like clicking, typing, or navigating."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Execution Instructions"}),": Commands provided for running the automated tasks or tests through the terminal."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"showLineNumbers",children:"import { aui } from './helpers/askui-helper';\n\ndescribe('AskUI Automation Scenarios', () => {\n  it('executes a specific task', async () => {\n    await aui.click().text(\"Button Name\").exec();\n    // Additional automation logic\n  });\n\n  // More it blocks for different scenarios\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step-implementation",children:"Step-by-Step Implementation"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-annotate-your-screen",children:"Step 1: Annotate Your Screen"}),"\n",(0,i.jsx)(n.p,{children:"The interactive annotation serves as the foundational step in automating UI interactions. It's a process where the tool captures a snapshot of the user interface and identifies all interactive elements like buttons, text fields, and other controls."}),"\n",(0,i.jsx)(n.p,{children:"By generating an annotated HTML file, you create a 'map' of the UI, which is crucial for accurately targeting and interacting with specific elements in subsequent steps. This ensures that the automation is precise and interacts with the correct elements."}),"\n",(0,i.jsxs)(r.c,{children:[(0,i.jsxs)(a.c,{value:"windows",label:"Windows",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"import { aui } from './helpers/askui-helper';\n\ndescribe('AskUI on Windows', () => {\n  it('should generate an HTML annotation', async () => {\n    await aui.annotate();\n  });\n});\n"})}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Windows Bug"}),(0,i.jsx)(n.br,{}),"\n","The interactive annotation ",(0,i.jsx)(n.code,{children:"aui.annotateInteractively()"})," currently leads to an error on Windows. Instead use ",(0,i.jsx)(n.code,{children:"annotate()"})," as outlined in the code above."]})})]}),(0,i.jsx)(a.c,{value:"macos",label:"MacOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"import { aui } from './helpers/askui-helper';\n\ndescribe('AskUI on MacOS', () => {\n  it('should generate an interactive annotation', async () => {\n    await aui.annotateInteractively();\n  });\n});\n"})})}),(0,i.jsx)(a.c,{value:"linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"import { aui } from './helpers/askui-helper';\n\ndescribe('AskUI on Linux', () => {\n  it('should generate an interactive annotation', async () => {\n    await aui.annotateInteractively();\n  });\n});\n"})})})]}),"\n",(0,i.jsx)(n.h4,{id:"run-the-annotation",children:"Run the Annotation"}),"\n",(0,i.jsxs)(n.p,{children:["To execute the instructions, enter into your terminal (Windows: ",(0,i.jsx)(n.a,{href:"/docs/0.13.1/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"}),")."]}),"\n",(0,i.jsxs)(r.c,{children:[(0,i.jsxs)(a.c,{value:"windows",label:"Windows",default:!0,children:[(0,i.jsxs)(n.p,{children:["Switch into ADE by running ",(0,i.jsx)(n.code,{children:"askui-shell"})," in a Command Prompt first."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"AskUI-RunProject\n"})})]}),(0,i.jsx)(a.c,{value:"macOS",label:"macOS",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm run askui\n"})})}),(0,i.jsx)(a.c,{value:"linux",label:"Linux",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm run askui\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["A few seconds later an (interactive) annotation will be generated. If you have used the ",(0,i.jsx)(n.code,{children:"annotate()"})," command, the annotation files are saved under ",(0,i.jsx)(n.code,{children:"<project_root>/report"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you\u2019d like a deeper explanation as to what an (interactive) annotation is, read about it here. ",(0,i.jsx)(n.a,{href:"/docs/0.13.1/general/Element%20Selection/annotations-and-screenshots",children:"Explanation of (Interactive) Annotations"})]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-identifying-your-target-element",children:"Step 2: Identifying Your Target Element"}),"\n",(0,i.jsx)(n.p,{children:"This step is about pinpointing the exact UI element (like a button or link) you want to interact with. The element's properties (e.g. element-description) acts like a unique identifier for each UI component."}),"\n",(0,i.jsx)(n.p,{children:"Understanding and utilizing element targeting techniques is key to creating reliable and repeatable automated tasks. It allows the automation script to be more robust against changes in the UI, such as different screen sizes or resolutions."}),"\n",(0,i.jsx)(n.p,{children:"With AskUI, there are near-infinite ways to target an element. We outlined the three most common techniques below"}),"\n",(0,i.jsx)(n.h4,{id:"approach-a-standard-element-description-extraction-recommended",children:"Approach A: Standard Element-Description Extraction (Recommended)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Process"}),": Click the UI element during annotation to copy its description to your clipboard."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),": Quick for easily identifiable elements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Best Used When"}),": The element is distinctly recognizable and not surrounded by similar elements."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To close out the interactive annotation, use ",(0,i.jsx)(n.code,{children:"CMD/CTRL + W"})," or ",(0,i.jsx)(n.code,{children:"ESC"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"approach-b-filtering-by-proximity-using-relational-selectors",children:"Approach B: Filtering by Proximity: Using Relational Selectors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Process"}),": Chain multiple element descriptions together using commands like ",(0,i.jsx)(n.code,{children:"leftOf()"}),", ",(0,i.jsx)(n.code,{children:"above()"}),", etc., to create a unique selector based on element relationships. More information can be found in the ",(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/0.11.6/general/Element%20Selection/relational-selectors",children:"AskUI documentation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),": Increases selector specificity, particularly useful in complex UIs with numerous similar elements."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Best Used When"}),": Targeting elements in a densely populated UI or when elements lack unique identifiers."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Example: Selecting an element to the left of a specific reference\nawait aui\n  .click()\n  .element() // This is your target\n  .leftOf()\n  .element().withText('Reference Text') // This is your anchor\n  .exec();\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"approach-c-custom-element-descriptions-screenshot-based-selection-advanced",children:"Approach C: Custom Element-Descriptions: Screenshot-Based Selection (Advanced)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Process"}),": Use a screenshot snippet of the desired element to locate its exact position on the screen. More information can be found in the ",(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/0.11.6/general/Element%20Selection/text-and-element-selectors#custom-elements",children:"AskUI documentation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Advantages"}),": Highly accurate for unique or custom-designed elements."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Best Used When"}),": The element has a distinct visual appearance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Considerations"}),": This method is sensitive to screen resolution changes; ensure consistency in the automation/testing environment."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Example: Using a screenshot snippet for element selection\nawait aui\n  .click()\n  .customElement({\n    customImage: 'path/to/screenshot_snippet.png',\n  })\n  .exec();\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Next, add the desired element-description into your workflow file underneath your annotation instruction. In this example we will use ",(0,i.jsx)(n.code,{children:".text('Reference Text')"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Result:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"it('should click on my element', async () => {\n  await aui\n    // your action goes here\n    .text('Reference Text') // your element description\n    .exec();\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-selecting-the-right-action-for-your-task",children:"Step 3: Selecting the Right Action for Your Task"}),"\n",(0,i.jsxs)(n.p,{children:["In this step you translate your intention (e.g., click a button, enter text) into a programmable action.\nTo learn more about the different types of actions, check out our ",(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/0.11.6/api/API/table-of-contents",children:"API Documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this case, we will use the ",(0,i.jsx)(n.code,{children:"click"})," method, which is great for interacting with buttons, links and checkboxes."]}),"\n",(0,i.jsxs)(n.p,{children:["To do this, add the ",(0,i.jsx)(n.code,{children:"click"})," method to your workflow file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"it('should click on my element', async () => {\n  await aui\n    .click() // your action\n    .text('Reference Text') // your element description\n    .exec();\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-execute-an-instruction",children:"Step 4: Execute an Instruction"}),"\n",(0,i.jsxs)(n.p,{children:["Comment Out the Annotation Instruction: Use ",(0,i.jsx)(n.code,{children:"xit"})," to ignore the annotation instruction in future runs.\nThe final version should look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"describe('jest with askui', () => {\n\n  xit('should generate an annotation', async () => {\n    await aui.annotate(); // your inactive annotation\n  });\n\n  it('should click on my element', async () => {\n    await aui\n      .click() // your action\n      .text('Reference Text') // your element description\n      .exec();\n  });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"As before, run the code in your terminal:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows: Enter ADE and run ",(0,i.jsx)(n.code,{children:"AskUI-RunProject"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["macOS/Linux: Run ",(0,i.jsx)(n.code,{children:"npm run askui"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You should see AskUI take over your mouse, mouse over the element you chose and click."}),"\n",(0,i.jsxs)(n.p,{children:["Congratulations! You\u2019ve just built your first automation using AskUI. ","\ud83c\udf89"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},22440:(e,n,t)=>{t.d(n,{c:()=>a});t(11504);var i=t(34064);const s={tabItem:"tabItem_Ymn6"};var r=t(17624);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.c)(s.tabItem,a),hidden:t,children:n})}},86212:(e,n,t)=>{t.d(n,{c:()=>v});var i=t(11504),s=t(34064),r=t(77288),a=t(55592),o=t(83472),l=t(95068),c=t(30604),u=t(46432);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.Uz)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._M)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.IN)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,o.c)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(89788);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(17624);function y(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.MV)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==i&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.c)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.c)("tabs-container",f.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function v(e){const n=(0,g.c)();return(0,j.jsx)(k,{...e,children:d(e.children)},String(n))}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>a});var i=t(11504);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);