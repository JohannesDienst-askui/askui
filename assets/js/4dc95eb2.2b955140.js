"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53859],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const i={sidebar_position:8},a="Deprecated Endpoints",l={unversionedId:"general/Troubleshooting/deprecated-endpoints",id:"version-0.10.4/general/Troubleshooting/deprecated-endpoints",title:"Deprecated Endpoints",description:"If you are using the askui library you may see this warning:",source:"@site/versioned_docs/version-0.10.4/general/07-Troubleshooting/deprecated-endpoints.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/deprecated-endpoints",permalink:"/docs/general/Troubleshooting/deprecated-endpoints",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.4/general/07-Troubleshooting/deprecated-endpoints.md",tags:[],version:"0.10.4",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"IPv6",permalink:"/docs/general/Troubleshooting/ipv6"},next:{title:"Terminology",permalink:"/docs/general/Terminology"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deprecated-endpoints"},"Deprecated Endpoints"),(0,o.kt)("p",null,"If you are using the askui library you may see this warning:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"This endpoint will deprecate. Please upgrade your askui version")),(0,o.kt)("p",null,"This means that you are using an askui version, which will stop working in the near future. "),(0,o.kt)("p",null,"You can upgrade your askui version with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install askui@latest\n")),(0,o.kt)("p",null,"If this does not work, try the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Delete your ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," folder"),(0,o.kt)("li",{parentName:"ol"},"Check the latest version of ",(0,o.kt)("inlineCode",{parentName:"li"},"askui")," in your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"\n3 Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," to reinstall askui")))}c.isMDXComponent=!0}}]);