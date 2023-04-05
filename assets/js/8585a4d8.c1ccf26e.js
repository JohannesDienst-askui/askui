"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43517],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),h=o,m=g["".concat(s,".").concat(h)]||g[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(25773),o=(n(27378),n(35318));const r={sidebar_position:6},i="Google Cat Search Tutorial",l={unversionedId:"general/Tutorials/google-cat-search",id:"version-0.7.2/general/Tutorials/google-cat-search",title:"Google Cat Search Tutorial",description:"The following tutorial shows you how to search for cat images on Google image search.",source:"@site/versioned_docs/version-0.7.2/general/06-Tutorials/google-cat-search.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/google-cat-search",permalink:"/docs/0.7.2/general/Tutorials/google-cat-search",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/general/06-Tutorials/google-cat-search.md",tags:[],version:"0.7.2",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Flutter Sample Android App",permalink:"/docs/0.7.2/general/Tutorials/flutter-android-sample-app"},next:{title:"Online Shop Test Tutorial",permalink:"/docs/0.7.2/general/Tutorials/shop-demo"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Setting Up a Test Suite",id:"setting-up-a-test-suite",level:2},{value:"Writing and Debugging a Test Case",id:"writing-and-debugging-a-test-case",level:2},{value:"Debugging",id:"debugging",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cat-search-tutorial"},"Google Cat Search Tutorial"),(0,o.kt)("p",null,"The following tutorial shows you how to search for cat images on Google image search."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("a",{href:"../Getting%20Started/getting-started",target:"_blank"},"complete askui installation guide and write your first test")),(0,o.kt)("li",{parentName:"ul"},"Open a Chrome browser window on your screen",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable in ",(0,o.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.js"))))),(0,o.kt)("h2",{id:"setting-up-a-test-suite"},"Setting Up a Test Suite"),(0,o.kt)("p",null,"\ud83d\udcad Let\u2019s say we\u2019re on ",(0,o.kt)("a",{parentName:"p",href:"http://google.com"},"google.com")," and we want to ",(0,o.kt)("strong",{parentName:"p"},"search for an image of a cat and then download it to our computer"),"."),(0,o.kt)("p",null,"First, we break this task down into steps that a user would take. Then we can recreate those steps in code."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to Google Search page "),(0,o.kt)("li",{parentName:"ol"},"Go to google images"),(0,o.kt)("li",{parentName:"ol"},"Type \u201ccat\u201d in the search bar"),(0,o.kt)("li",{parentName:"ol"},"Select image"),(0,o.kt)("li",{parentName:"ol"},"Right-click + save the image")),(0,o.kt)("p",null,"Let us first get an annotated screenshot, where all of the on-screen elements are enclosed within ",(0,o.kt)("strong",{parentName:"p"},"annotated bounding boxes"),". This will help us select the correct elements in our test case."),(0,o.kt)("p",null,"Open the file ",(0,o.kt)("em",{parentName:"p"},"test/my-first-askui-test-suite.test.ts")," and replace the ",(0,o.kt)("em",{parentName:"p"},"it"),"-code block starting in line 4 with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"it('annotate', async () => {\n    await aui.annotate()\n});\n")),(0,o.kt)("p",null,"Run the test from your terminal to create an annotated screenshot. It will appear the folder ",(0,o.kt)("em",{parentName:"p"},"report")," in your project folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,o.kt)("p",null,"If you want to annotate interactively change it to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"it('annotate', async () => {\n\n    // Hit 'Esc' to stop the annotation\n    // when you are done\n    await aui.annotateInteractively()\n});\n")),(0,o.kt)("p",null,"\ud83d\udccc The annotations are basically the substitute for IDs in selector-based testing.\nYou can click on them to copy them into your clipboard."),(0,o.kt)("p",null,"If you are having problems with the test execution, ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.7.2/general/Troubleshooting/"},"have a look at our Troubleshooting page"),"."),(0,o.kt)("h2",{id:"writing-and-debugging-a-test-case"},"Writing and Debugging a Test Case"),(0,o.kt)("p",null,"Now we can start to write our test case, by locating the elements and then executing an action on them. Remember the steps, that we wanted to recreate?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to Google Search page "),(0,o.kt)("li",{parentName:"ol"},"Go to google images"),(0,o.kt)("li",{parentName:"ol"},"Type \u201ccat\u201d in the search bar"),(0,o.kt)("li",{parentName:"ol"},"Select image"),(0,o.kt)("li",{parentName:"ol"},"Right-click + save the image")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to open your browser on the configured display before test execution and move your mouse over the browser window!")),(0,o.kt)("p",null,"In the end, your test case looks like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should find a cat image and save it', async () => {\n\n    // Make sure the browser window has focus\n    await aui.mouseLeftClick().exec();\n\n    // Open a new tab with keyboard shortcut\n    // MacOS: command + t\n    // Windows: control + T\n    // Linux: control + t\n    await aui\n      .pressTwoKeys('command', 't')\n      .exec();\n\n    // type google.com into browser bar\n    await aui\n      .typeIn('google.com')\n      .text()\n      .withText('Search Google or type a URL')\n      .exec();\n\n    // Hit enter key\n    await aui\n      .pressKey('enter')\n      .exec();\n\n    // Click the Images-text to the right of Gmail\n    await aui\n      .click()\n      .text().withTextRegex(\"Image*\")\n      .rightOf()\n      .text().withText(\"Gmail\")\n      .exec();\n\n    // Type in cat into search field\n    // Notice: withText does not have to be 100% equal\n    await aui\n      .typeIn(\"cat\")\n      .textfield()\n      .below()\n      .logo().withText(\"G00g.e\")\n      .exec();\n\n    await aui\n      .pressKey('enter')\n      .exec();\n\n    // HINT\n    //     withText might need to be changed depending\n    //     on your search results!\n    await aui\n      .moveMouseTo()\n      .image()\n      .above()\n      .text()\n      .withText(\"pet guru Yuki Hattori explaiinICats\")\n      .exec();\n\n    // Save the image with right click\n    await aui\n      .mouseRightClick()\n      .exec()\n\n    // Find the right dialog entry\n    await aui\n      .click()\n      .text()\n      .withText('save image as')\n      .exec();\n\n    // Save it\n    // If it does not work because the button is not found\n    // Remove the '.button()'\n    await aui\n      .click()\n      .button()\n      .withText(\"Save\")\n      .exec();\n  });\n});\n")),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"It\u2019s possible that you\u2019ll run into problems with locating elements. For example, when creating the tutorial, we first tried to locate the image nearest to the image title, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'await aui\n    .moveMouseTo()\n    .image()\n    .nearestTo()\n    .text()\n    .withText("pet guru Yuki Hattori explaiinICats")\n    .exec()\n')),(0,o.kt)("p",null,"But it turns out, that the AI uses a different metric for measuring distance between elements, which is why our script failed the first time. Then we substituted this function for ",(0,o.kt)("em",{parentName:"p"},"above()"),", which fixed the problem for us."),(0,o.kt)("p",null,"Another problem regarding font-size occurred with the ",(0,o.kt)("em",{parentName:"p"},"Images")," button. The AI recognized ",(0,o.kt)("em",{parentName:"p"},"Image")," with an ",(0,o.kt)("strong",{parentName:"p"},"s")," missing at the end. That is why we switched from ",(0,o.kt)("em",{parentName:"p"},"withText('Images') to _withTextRegex('Image*')"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'await aui\n    .click()\n    .text().withTextRegex("Image*")\n    .rightOf()\n    .text().withText("Gmail")\n    .exec();\n')),(0,o.kt)("p",null,"It is always a good idea to try to play around with the functions and see if you can tackle the problem from a different angle."),(0,o.kt)("p",null,"If you have a recurring or persisting issue, don\u2019t hesitate to ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/3ekHnGR"},"ask the community")," for help. You can be sure that your questions will be answered there. We\u2019re excited to hear about how you apply askui to your projects."),(0,o.kt)("p",null,"If you have any feature requests, please feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/3AP20T7"},"post them in our Featurebase board"),"."),(0,o.kt)("p",null,"Best regards and happy testing!"))}p.isMDXComponent=!0}}]);