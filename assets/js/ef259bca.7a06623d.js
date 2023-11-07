"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47695],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const i={displayed_sidebar:"apiSidebar"},o="withExactText",c={unversionedId:"api/Element-Descriptions/withexacttext",id:"version-0.13.0/api/Element-Descriptions/withexacttext",title:"withExactText",description:"production",source:"@site/versioned_docs/version-0.13.0/api/03-Element-Descriptions/withexacttext.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/withexacttext",permalink:"/docs/0.13.0/api/Element-Descriptions/withexacttext",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.13.0/api/03-Element-Descriptions/withexacttext.md",tags:[],version:"0.13.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},s={},l=[],p={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"withexacttext"},"withExactText"),(0,a.kt)("span",{class:"theme-doc-version-badge badge badge--success"},"production"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Filters for equal text."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This should be only used in cases where the similarity\ncomparison of {@link FluentFilters.withText()} allows not for a\nspecific enough filtering (too many similar elements)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"'text' === withExactText('text') => true\n'test' === withExactText('text') => false\n'other' === withExactText('text') => false\n\nawait aui.moveMouseTo().text().withExactText('Basketball').exec()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(65047).Z,width:"800",height:"396"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@param {string} text - A text to be matched.")))}u.isMDXComponent=!0},65047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/withExactText-d8a72ea69921c5687967b22664579a36.gif"}}]);