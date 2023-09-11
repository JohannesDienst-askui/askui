"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5466],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},14975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const o={displayed_sidebar:"apiSidebar"},i="above",s={unversionedId:"api/Relations/above",id:"version-0.11.4/api/Relations/above",title:"above",description:"production",source:"@site/versioned_docs/version-0.11.4/api/04-Relations/above.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/above",permalink:"/docs/0.11.4/api/Relations/above",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.4/api/04-Relations/above.md",tags:[],version:"0.11.4",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"above"},"above"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Filters for an element above another element."),(0,a.kt)("p",null,"Takes an optional parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"nth")," element (starting with 0)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------\n|   text1    |\n--------------\n--------------\n|   text0    |\n--------------\n--------------\n|   button   |\n--------------\n\n// Returns text0 because text0 is the first element above button\n...text().above().button()\n...text().above(0).button()\n// Returns text1 because text1 is the second element above button\n...text().above(1).button()\n// Returns no element because button is below text\n...button().above().text()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6550).Z,width:"1920",height:"1080"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {number} ","[optionalIndex=0]"," - element index")))}u.isMDXComponent=!0},6550:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/above-dc81b84a9b34574ec4f2751a6a13ea86.gif"}}]);