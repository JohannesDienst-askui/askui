"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59438],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},o="matching",c={unversionedId:"api/Element-Descriptions/matching",id:"api/Element-Descriptions/matching",title:"matching",description:"experimental",source:"@site/docs/api/03-Element-Descriptions/matching.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/matching",permalink:"/docs/next/api/Element-Descriptions/matching",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/03-Element-Descriptions/matching.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"image",permalink:"/docs/next/api/Element-Descriptions/image"},next:{title:"otherElement",permalink:"/docs/next/api/Element-Descriptions/otherelement"}},l={},p=[{value:"What Should I Write as Matching Text",id:"what-should-i-write-as-matching-text",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"matching"},"matching"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--secondary"},"experimental"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Filters elements based on a textual description."),(0,i.kt)("h2",{id:"what-should-i-write-as-matching-text"},"What Should I Write as Matching Text"),(0,i.kt)("p",null,"The text description inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"matching()")," should describe the element visually.\nIt understands color, some famous company/product names, general descriptions."),(0,i.kt)("p",null,"It sometimes requires a bit of playing to find a matching description:\nE.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"puzzle piece")," can fail here while ",(0,i.kt)("inlineCode",{parentName:"p"},"an icon showing a puzzle piece")," might work.\nGenerally the more detail the better."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.click().matching('a mask on purple background and a firefox logo').exec()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} text - A description of the target element.")))}m.isMDXComponent=!0}}]);