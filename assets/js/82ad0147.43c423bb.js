"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75564],{74786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(85893),s=t(11151);const o={sidebar_position:1},r="Cannot Find Element Error",a={id:"general/Troubleshooting/cannot_find_element_error",title:"Cannot Find Element Error",description:"If you see this error message when you run AskUI you have a few different options you can try to resolve it. We will go over all of them on this page:",source:"@site/versioned_docs/version-0.12.2/general/07-Troubleshooting/cannot_find_element_error.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/cannot_find_element_error",permalink:"/docs/0.12.2/general/Troubleshooting/cannot_find_element_error",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/07-Troubleshooting/cannot_find_element_error.md",tags:[],version:"0.12.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/0.12.2/general/Troubleshooting/"},next:{title:"Jest",permalink:"/docs/0.12.2/general/Troubleshooting/jest"}},c={},l=[{value:"Use Interactive Annotation to Debug",id:"use-interactive-annotation-to-debug",level:2},{value:"Selecting Icons",id:"selecting-icons",level:2},{value:"1. Use Relative Element-Descriptors",id:"1-use-relative-element-descriptors",level:3},{value:"2. Use Generic Element-Descriptor",id:"2-use-generic-element-descriptor",level:3},{value:"3. Use Custom Element Selection",id:"3-use-custom-element-selection",level:3},{value:"Selecting Image",id:"selecting-image",level:2},{value:"Selecting Text",id:"selecting-text",level:2},{value:"1. Missing Whitespaces Between Words",id:"1-missing-whitespaces-between-words",level:3},{value:"2. Cut off characters at the start/end",id:"2-cut-off-characters-at-the-startend",level:3},{value:"Missing Permissions for UiController on macOS",id:"missing-permissions-for-uicontroller-on-macos",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cannot-find-element-error",children:"Cannot Find Element Error"}),"\n",(0,i.jsx)(n.p,{children:"If you see this error message when you run AskUI you have a few different options you can try to resolve it. We will go over all of them on this page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Executed instruction:\nawait aui.click().button().withText("I feel happy!").exec();\n\n# Error message\nA problem occurred while executing the instruction: \nClick on button with text "I feel happy!".\nReason ControlCommandError: Cannot find "button contains with text \'I feel happy!\'"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"use-interactive-annotation-to-debug",children:"Use Interactive Annotation to Debug"}),"\n",(0,i.jsx)(n.p,{children:"When you develop an automation you can use interactive annotation to extract filters as described on our [interactive annotation page](../03-Element Selection/annotations-and-screenshots.md)."}),"\n",(0,i.jsxs)(n.p,{children:["This gif illustrates the process:\n",(0,i.jsx)(n.img,{alt:"Interactive Annotation in action",src:t(44754).Z+"",width:"2560",height:"1080"})]}),"\n",(0,i.jsx)(n.p,{children:"If an element-description derived through this method does not work you may run the interactive annotation again and check if AskUI gives you the same element-description. Sometimes elements are hard to identify correctly, like icons or specific fonts. Read the next sections on how to tackle this \ud83d\ude42"}),"\n",(0,i.jsx)(n.h2,{id:"selecting-icons",children:"Selecting Icons"}),"\n",(0,i.jsx)(n.p,{children:"There are millions of different icon sets out there. Detecting them all reliable is nearly impossible."}),"\n",(0,i.jsx)(n.p,{children:"You can use three strategies to make your instructions more stable."}),"\n",(0,i.jsx)(n.h3,{id:"1-use-relative-element-descriptors",children:"1. Use Relative Element-Descriptors"}),"\n",(0,i.jsx)(n.p,{children:"Often there is text near a specific icon. You can use this to your advantage, like in the following example, where the icon below a specific text is clicked. See our [guide about relational element-descriptors](../03-Element Selection/relational-selectors.md) to understand how those work:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await aui\n  .click()\n  .icon()\n  .below()\n  .text() \n  .withText('Please Enter your Name').exec();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-use-generic-element-descriptor",children:"2. Use Generic Element-Descriptor"}),"\n",(0,i.jsxs)(n.p,{children:["It could be the case that the target element is not detected correctly, e.g, an icon could possibly be detected as a toggle or checkbox and vice versa. In such cases, the generic element-descriptor ",(0,i.jsx)(n.code,{children:"element()"})," could be a good option."]}),"\n",(0,i.jsxs)(n.p,{children:["Be aware that ",(0,i.jsx)(n.code,{children:"element()"})," alone specifies no particular property. It is recommended to be used in conjunction with a ",(0,i.jsx)(n.a,{href:"/docs/0.12.2/api/Relations/above",children:"relational element descriptor"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await aui\n  .click()\n  .element()\n  .below()\n  .text()\n  .withText('Please Enter your Name').exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:"This method is not restricted to icon elements, but can also be used for a wide range of elements."}),"\n",(0,i.jsx)(n.h3,{id:"3-use-custom-element-selection",children:"3. Use Custom Element Selection"}),"\n",(0,i.jsx)(n.p,{children:"Custom element selection is your last resort because it is slow as it uses image-in-image search. Check out our [Google Street View Tutorial](../03-Element Selection/text-and-element-selectors.md#custom-elements) to see how you can make use of it."}),"\n",(0,i.jsx)(n.h2,{id:"selecting-image",children:"Selecting Image"}),"\n",(0,i.jsx)(n.p,{children:"Images are supposed to have a very certain visual property."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An image is expected to have a color contrasting against the background."}),"\n",(0,i.jsx)(n.li,{children:"An image is expected to have a rectangular shape. (rounded corner in a certain degree can be accepted)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Generally speaking, everything on the screen can be an image. For example, icons on a website are actually images. But in terms of visual semantics, we don't deal with the notion of image in general. So it is worth knowing that the above two conditions are critical when using the ",(0,i.jsx)(n.code,{children:"image()"})," descriptor."]}),"\n",(0,i.jsx)(n.h2,{id:"selecting-text",children:"Selecting Text"}),"\n",(0,i.jsx)(n.p,{children:"OCR is tricky and we are working hard to improve it. But you will encounter cases where some text may not be recognized reliably depending on the font size, style or typeface:"}),"\n",(0,i.jsx)(n.h3,{id:"1-missing-whitespaces-between-words",children:"1. Missing Whitespaces Between Words"}),"\n",(0,i.jsxs)(n.p,{children:["You can guard against missing whitespaces with ",(0,i.jsx)(n.code,{children:"withTextRegex()"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Use [\\\\s]{0,1} as a replacement for whitespace\nawait aui\n  .click()\n  .text()\n  .withTextRegex('your[\\\\s]{0,1}name').exec();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-cut-off-characters-at-the-startend",children:"2. Cut off characters at the start/end"}),"\n",(0,i.jsx)(n.p,{children:"For cut-off characters you can omit the first/last character:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Omit first and last character of 'your name'\nawait aui\n  .click()\n  .text()\n  .withText('your name').exec();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"missing-permissions-for-uicontroller-on-macos",children:"Missing Permissions for UiController on macOS"}),"\n",(0,i.jsxs)(n.p,{children:["AskUI controls your operating system and macOS is very restrictive in giving access to third-party applications (which is a good thing actually!). The AskUI UiController needs to be given access for ",(0,i.jsx)(n.em,{children:"Screen Recording"})," and ",(0,i.jsx)(n.em,{children:"Accessibility"}),". See our ",(0,i.jsx)(n.a,{href:"/docs/0.12.2/general/Troubleshooting/mac-os",children:"troubleshooting macOS page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},44754:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);