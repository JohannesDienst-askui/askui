"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91365],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const i={displayed_sidebar:"apiSidebar"},o="text",c={unversionedId:"api/Element-Descriptions/text",id:"version-0.10.5/api/Element-Descriptions/text",title:"text",description:"production",source:"@site/versioned_docs/version-0.10.5/api/03-Element-Descriptions/text.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/text",permalink:"/docs/0.10.5/api/Element-Descriptions/text",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/api/03-Element-Descriptions/text.md",tags:[],version:"0.10.5",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text"},"text"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Filters for an UI element 'text'."),(0,a.kt)("p",null,"Takes an optional parameter to filter for a specific text.\nSee the examples below."),(0,a.kt)("p",null,"See also the filters ",(0,a.kt)("inlineCode",{parentName:"p"},"withTextRegex()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"withExactText()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.click().text().exec();\nawait aui.click().text('Username').exec();\n\n// Matching with an exact text\nawait aui.click().text().withExactText('Username').exec();\n\n// Matching with a regex\nawait aui.click().text().withTextRegex('\\b[Ss]\\w+').exec();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {string} ","[text]"," - A text to be matched.")))}u.isMDXComponent=!0}}]);