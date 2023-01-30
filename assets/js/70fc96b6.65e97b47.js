"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37691],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,x=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(x,o(o({ref:t},p),{},{components:r})):n.createElement(x,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(25773),i=(r(27378),r(35318));const a={displayed_sidebar:"apiSidebar"},o="withText",s={unversionedId:"api/Filters/withtext",id:"version-0.4.0/api/Filters/withtext",title:"withText",description:"Filters for similar (doesn't need to be a 100% equal) text.",source:"@site/versioned_docs/version-0.4.0/api/03-Filters/withtext.md",sourceDirName:"api/03-Filters",slug:"/api/Filters/withtext",permalink:"/docs/0.4.0/api/Filters/withtext",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.4.0/api/03-Filters/withtext.md",tags:[],version:"0.4.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar"},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withtext"},"withText"),(0,i.kt)("p",null,"Filters for similar (doesn't need to be a 100% equal) text."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"'text' === withText('text') => true\n'test' === withText('text') => true\n'Test' === withText('text') => true\n'Text' === withText('text') => true\n'TEXT' === withText('text') => true\n'texst' === withText('text') => true\n'texts' === withText('text') => true\n\n'atebxtc' === withText('text') => false\n'other' === withText('text') => false\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param {string} text - A text to be matched.")))}u.isMDXComponent=!0}}]);