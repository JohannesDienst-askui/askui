"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3891],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),f=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=f(n),d=l,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var f=2;f<a;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>f});var r=n(25773),l=(n(27378),n(35318));const a={displayed_sidebar:"apiSidebar"},o="leftOf",i={unversionedId:"api/Relations/leftof",id:"version-0.10.4/api/Relations/leftof",title:"leftOf",description:"production",source:"@site/versioned_docs/version-0.10.4/api/04-Relations/leftof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/leftof",permalink:"/docs/api/Relations/leftof",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.4/api/04-Relations/leftof.md",tags:[],version:"0.10.4",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},f=[],p={toc:f};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"leftof"},"leftOf"),(0,l.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"Filters for an element left of another element."),(0,l.kt)("p",null,"Takes an optional parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," to select the ",(0,l.kt)("inlineCode",{parentName:"p"},"nth")," element (starting with 0)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------  --------------  --------------\n|  leftEl1   |  |  leftEl0   |  |  rightEl   |\n--------------  --------------  --------------\n\n// Returns leftEl0 because leftEl0 is the first element left of rightEl\n...leftEl().leftOf().rightEl()\n...leftEl().leftOf(0).rightEl()\n// Returns leftEl1 because leftEl1 is the second element left of rightEl\n...leftEl().leftOf(1).rightEl()\n// Returns no element because rightEl is left of leftEl\n...rightEl().leftOf().leftEl()\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(22087).Z,width:"1920",height:"1080"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@param {number} ","[optionalIndex=0]"," - element index")))}c.isMDXComponent=!0},22087:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"}}]);