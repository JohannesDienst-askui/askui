"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4530],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(25773),i=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},a="type",s={unversionedId:"api/Actions/type",id:"version-0.13.1/api/Actions/type",title:"type",description:"production",source:"@site/versioned_docs/version-0.13.1/api/02-Actions/type.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/type",permalink:"/docs/api/Actions/type",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.1/api/02-Actions/type.md",tags:[],version:"0.13.1",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},p={},c=[],l={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"type"},"type"),(0,i.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Types a text at the current position.\nIf you need to focus the element first, use typeIn()"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," In the current version it copies the text and pastes it."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," is included in the logs and sent over to the askui Inference server to\npredict in which context the typing has to occur. You can exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," from the logs\nand the request to the askui Inference server setting ",(0,i.kt)("inlineCode",{parentName:"p"},"options.isSecret")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".\nThis should not change the quality of the prediction of the askui Inference server. In this\ncase, ",(0,i.kt)("inlineCode",{parentName:"p"},"options.secretMask")," is included in logs and sent over instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await aui.type('askui@askui.com').exec()\n\n// mask the text so it is not send to the askui-inference server\nawait aui.type('Type some text', { isSecret: true, secretMask: '**' }).exec()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8669).Z,width:"800",height:"442"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} text - A text to type"),(0,i.kt)("li",{parentName:"ul"},"@param {Object} ","[options]"),(0,i.kt)("li",{parentName:"ul"},"@param {boolean} ","[options.isSecret = false]"," - If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," is neither included in\nlogs of askui nor sent over to askui Inference for prediction."),(0,i.kt)("li",{parentName:"ul"},"@param {string} ","[options.secretMask = '****']"," - If ",(0,i.kt)("inlineCode",{parentName:"li"},"options.isSecret")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", this\nis included in logs and sent over to askui Inference for prediction instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),".")))}u.isMDXComponent=!0},8669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/type-19ecf31f6d4e18c39bed7515ceea004d.gif"}}]);