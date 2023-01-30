"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35086],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(25773),i=(t(27378),t(35318));const a={displayed_sidebar:"apiSidebar"},o="in",l={unversionedId:"api/Relations/in",id:"api/Relations/in",title:"in",description:"Filters for an element inside another element.",source:"@site/docs/api/04-Relations/in.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/in",permalink:"/docs/next/api/Relations/in",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/04-Relations/in.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"contains",permalink:"/docs/next/api/Relations/contains"},next:{title:"leftOf",permalink:"/docs/next/api/Relations/leftof"}},s={},c=[],p={toc:c};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"in"},"in"),(0,i.kt)("p",null,"Filters for an element inside another element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n\n// Returns innerEl because innerEl is inside outerEl\n...innerEl().in().outerEl()\n// Returns nothing because innerEl is not inside outerEl\n...outerEl().in().innerEl()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(28186).Z,width:"1920",height:"1080"})))}u.isMDXComponent=!0},28186:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/in-dc3fb4817216d048579435358280132f.gif"}}]);