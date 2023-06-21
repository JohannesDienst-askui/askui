"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36963],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(25773),o=(n(27378),n(35318));const i={sidebar_position:1},a="Cannot Find Element Error",s={unversionedId:"general/Troubleshooting/cannot_find_element_error",id:"version-0.10.4/general/Troubleshooting/cannot_find_element_error",title:"Cannot Find Element Error",description:"If you see this error message when you run askui you have a few different options you can try to resolve it. We will go over all of them on this page:",source:"@site/versioned_docs/version-0.10.4/general/07-Troubleshooting/cannot_find_element_error.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/cannot_find_element_error",permalink:"/docs/0.10.4/general/Troubleshooting/cannot_find_element_error",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.4/general/07-Troubleshooting/cannot_find_element_error.md",tags:[],version:"0.10.4",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/0.10.4/general/Troubleshooting/"},next:{title:"Jest",permalink:"/docs/0.10.4/general/Troubleshooting/jest"}},l={},c=[{value:"Use Interactive Annotation to Debug",id:"use-interactive-annotation-to-debug",level:2},{value:"Selecting Icons",id:"selecting-icons",level:2},{value:"1. Use Relative Element-Descriptors",id:"1-use-relative-element-descriptors",level:3},{value:"2. Use Generic Element-Descriptor",id:"2-use-generic-element-descriptor",level:3},{value:"3. Use Custom Element Selection",id:"3-use-custom-element-selection",level:3},{value:"Selecting Image",id:"selecting-image",level:2},{value:"Selecting Text",id:"selecting-text",level:2},{value:"1. Missing Whitespaces Between Words",id:"1-missing-whitespaces-between-words",level:3},{value:"2. Cut off characters at the start/end",id:"2-cut-off-characters-at-the-startend",level:3},{value:"Missing Permissions for UiController on macOS",id:"missing-permissions-for-uicontroller-on-macos",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cannot-find-element-error"},"Cannot Find Element Error"),(0,o.kt)("p",null,"If you see this error message when you run askui you have a few different options you can try to resolve it. We will go over all of them on this page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Executed instruction:\nawait aui.click().button().withText("I feel happy!").exec();\n\n# Error message\nA problem occurred while executing the instruction: \nClick on button with text "I feel happy!".\nReason ControlCommandError: Cannot find "button contains with text \'I feel happy!\'"\n')),(0,o.kt)("h2",{id:"use-interactive-annotation-to-debug"},"Use Interactive Annotation to Debug"),(0,o.kt)("p",null,"When you develop an automation you can use interactive annotation to extract filters as described on our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.4/general/Tooling/annotation"},"interactive annotation page"),"."),(0,o.kt)("p",null,"This gif illustrates the process:\n",(0,o.kt)("img",{alt:"Interactive Annotation in action",src:n(44754).Z,width:"2560",height:"1080"})),(0,o.kt)("p",null,"If an element-description derived through this method does not work you may run the interactive annotation again and check if askui gives you the same element-description. Sometimes elements are hard to identify correctly, like icons or specific fonts. Read the next sections on how to tackle this \ud83d\ude42"),(0,o.kt)("h2",{id:"selecting-icons"},"Selecting Icons"),(0,o.kt)("p",null,"There are millions of different icon sets out there. Detecting them all reliable is nearly impossible."),(0,o.kt)("p",null,"You can use three strategies to make your instructions more stable."),(0,o.kt)("h3",{id:"1-use-relative-element-descriptors"},"1. Use Relative Element-Descriptors"),(0,o.kt)("p",null,"Often there is text near a specific icon. You can use this to your advantage, like in the following example, where the icon below a specific text is clicked. See our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.4/general/Guides/guide-relational-element-descriptions"},"guide about relational element-descriptors")," to understand how those work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui\n  .click()\n  .icon()\n  .below()\n  .text() \n  .withText('Please Enter your Name').exec();\n")),(0,o.kt)("h3",{id:"2-use-generic-element-descriptor"},"2. Use Generic Element-Descriptor"),(0,o.kt)("p",null,"It could be the case that the target element is not detected correctly, e.g, an icon could possibly be detected as a toggle or checkbox and vice versa. In such cases, the generic element-descriptor ",(0,o.kt)("inlineCode",{parentName:"p"},"element()")," could be a good option."),(0,o.kt)("p",null,"Be aware that ",(0,o.kt)("inlineCode",{parentName:"p"},"element()")," alone specifies no particular property. It is recommended to be used in conjunction with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.4/api/Relations/above"},"relational element descriptor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"await aui\n  .click()\n  .element()\n  .below()\n  .text()\n  .withText('Please Enter your Name').exec();\n")),(0,o.kt)("p",null,"This method is not restricted to icon elements, but can also be used for a wide range of elements."),(0,o.kt)("h3",{id:"3-use-custom-element-selection"},"3. Use Custom Element Selection"),(0,o.kt)("p",null,"Custom element selection is your last resort because it is slow as it uses image-in-image search. Check out our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.4/general/Tutorials/custom-element"},"Google Street View Tutorial")," to see how you can make use of it."),(0,o.kt)("h2",{id:"selecting-image"},"Selecting Image"),(0,o.kt)("p",null,"Images are supposed to have a very certain visual property."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An image is expected to have a color contrasting against the background."),(0,o.kt)("li",{parentName:"ul"},"An image is expected to have a rectangular shape. (rounded corner in a certain degree can be accepted)")),(0,o.kt)("p",null,"Generally speaking, everything on the screen can be an image. For example, icons on a website are actually images. But in terms of visual semantics, we don't deal with the notion of image in general. So it is worth knowing that the above two conditions are critical when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"image()")," descriptor."),(0,o.kt)("h2",{id:"selecting-text"},"Selecting Text"),(0,o.kt)("p",null,"OCR is tricky and we are working hard to improve it. But you will encounter cases where some text may not be recognized reliably depending on the font size, style or typeface:"),(0,o.kt)("h3",{id:"1-missing-whitespaces-between-words"},"1. Missing Whitespaces Between Words"),(0,o.kt)("p",null,"You can guard against missing whitespaces with ",(0,o.kt)("inlineCode",{parentName:"p"},"withTextRegex()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Use [\\\\s]{0,1} as a replacement for whitespace\nawait aui\n  .click()\n  .text()\n  .withTextRegex('your[\\\\s]{0,1}name').exec();\n")),(0,o.kt)("h3",{id:"2-cut-off-characters-at-the-startend"},"2. Cut off characters at the start/end"),(0,o.kt)("p",null,"For cut-off characters you can omit the first/last character:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Omit first and last character of 'your name'\nawait aui\n  .click()\n  .text()\n  .withText('your name').exec();\n")),(0,o.kt)("h2",{id:"missing-permissions-for-uicontroller-on-macos"},"Missing Permissions for UiController on macOS"),(0,o.kt)("p",null,"askui controls your operating system and macOS is very restrictive in giving access to third-party applications (which is a good thing actually!). The askui UiController needs to be given access for ",(0,o.kt)("em",{parentName:"p"},"Screen Recording")," and ",(0,o.kt)("em",{parentName:"p"},"Accessibility"),". See our ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.10.4/general/Troubleshooting/mac-os"},"troubleshooting macOS page"),"."))}p.isMDXComponent=!0},44754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"}}]);