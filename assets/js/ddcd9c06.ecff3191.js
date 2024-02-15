"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5880],{7268:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(17624),a=s(4552);const i={sidebar_position:7},o="Visual Regression with AskUI",r={id:"general/Integrations/visual-regression",title:"Visual Regression with AskUI",description:"On this page you will learn how to use AskUI in combination with Jest and the package jest-image-snapshot to include a visual regression test in your AskUI runs.",source:"@site/docs/general/05-Integrations/visual-regression.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/visual-regression",permalink:"/docs/next/general/Integrations/visual-regression",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/05-Integrations/visual-regression.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"How to use Assertions",permalink:"/docs/next/general/Element Selection/assertions"},next:{title:"CI/CD with AskUI",permalink:"/docs/next/general/Integrations/continuous-integration"}},c={},h=[{value:"Install jest-image-snapshot",id:"install-jest-image-snapshot",level:2},{value:"Integration",id:"integration",level:2},{value:"Get It to Work with TypeScript",id:"get-it-to-work-with-typescript",level:2},{value:"How Jest-Image-Snapshot Works",id:"how-jest-image-snapshot-works",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"visual-regression-with-askui",children:"Visual Regression with AskUI"}),"\n",(0,n.jsxs)(t.p,{children:["On this page you will learn how to use AskUI in combination with Jest and the package ",(0,n.jsx)(t.code,{children:"jest-image-snapshot"})," to include a visual regression test in your AskUI runs."]}),"\n",(0,n.jsx)(t.h2,{id:"install-jest-image-snapshot",children:"Install jest-image-snapshot"}),"\n",(0,n.jsxs)(t.p,{children:["In your terminal, navigate into the folder where you initialized AskUI while following our ",(0,n.jsx)(t.a,{href:"/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started",children:"Getting Started"})," (",(0,n.jsx)(t.a,{href:"/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started-linux",children:"Linux"}),", ",(0,n.jsx)(t.a,{href:"/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started-macos",children:"macOS"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"jest-image-snapshot"})," as a dev-dependency"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm install --save-dev jest-image-snapshot\n"})}),"\n",(0,n.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,n.jsxs)(t.p,{children:["The package provides a function ",(0,n.jsx)(t.code,{children:"toMatchImageSnapshot"})," which implements Jest's ",(0,n.jsx)(t.code,{children:"Matchers<R>"})," interface making it a Jest matcher that can be used with Jest's ",(0,n.jsx)(t.code,{children:"expect()"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You have to add this matcher to Jest with ",(0,n.jsx)(t.code,{children:"expect.extend"})," like this in your workflow file (",(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/expect#expectextendmatchers",children:"See the docs"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const { toMatchImageSnapshot } = require('jest-image-snapshot');\nexpect.extend({ toMatchImageSnapshot });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now the only thing you have to provide for a regression test in your workflows is an image to the function ",(0,n.jsx)(t.code,{children:"expect()"})," as ",(0,n.jsx)(t.code,{children:"Buffer"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"expect(imageBuffer).toMatchImageSnapshot();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can use AskUI to get the screenshot as a ",(0,n.jsx)(t.em,{children:"base64"})," encoded ",(0,n.jsx)(t.code,{children:"string"}),". The string is in the format of a data URL. So you have to strip the scheme ",(0,n.jsx)(t.code,{children:"data:[<mediatype>][;base64],"})," away because it is not a valid image with the scheme. Here is the full code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const annotate = await aui.annotate();\nconst imageBase64 = annotate.image;\n\n// Strip away this: data:image/png;base64,\n// Not valid png -> Only if used as a data URL\nlet imageBuffer = Buffer.from(\n    imageBase64.split('base64,')[1], 'base64');\n\nexpect(imageBuffer).toMatchImageSnapshot();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"get-it-to-work-with-typescript",children:"Get It to Work with TypeScript"}),"\n",(0,n.jsx)(t.p,{children:"When you run this as it is you will get an error."}),"\n",(0,n.jsxs)(t.p,{children:["This is because Jest's typings in ",(0,n.jsx)(t.code,{children:"jest.d.ts"})," do not include ",(0,n.jsx)(t.code,{children:"toMatchImageSnapshot"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Luckily TypeScript has a mechanism called ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html",children:"Declaration Merging"}),". When we create a file ",(0,n.jsx)(t.code,{children:"jest.d.ts"})," in our project and declare our matcher there, TypeScript will pick it up."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"declare namespace jest {\n    interface Matchers {\n      toMatchImageSnapshot(): CustomMatcherResult;\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"how-jest-image-snapshot-works",children:"How Jest-Image-Snapshot Works"}),"\n",(0,n.jsxs)(t.p,{children:["Explanation from the ",(0,n.jsx)(t.a,{href:"https://github.com/americanexpress/jest-image-snapshot",children:"repository"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Given an image (Buffer instance with PNG image data) the ",(0,n.jsx)(t.code,{children:"toMatchImageSnapshot()"})," matcher will create an image_snapshots directory in the directory the test is in and will store the baseline snapshot image there on the first run. Note that if ",(0,n.jsx)(t.code,{children:"customSnapshotsDir"})," option is given then it will store baseline snapshot there instead. On subsequent test runs the matcher will compare the image being passed against the stored snapshot. To update the stored image snapshot run Jest with ",(0,n.jsx)(t.code,{children:"--updateSnapshot"})," or ",(0,n.jsx)(t.code,{children:"-u"})," argument. All this works the same way as Jest snapshots."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You also want to check out the ",(0,n.jsx)(t.a,{href:"https://github.com/americanexpress/jest-image-snapshot#%EF%B8%8F-api",children:"options you can provide"})," to ",(0,n.jsx)(t.code,{children:"toMatchImageSnapshot()"})," to fine-tune the behavior. For example you might want to set a threshold for a mismatch so that minimal differences do not ",(0,n.jsx)(t.em,{children:"fail"})," a run:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"expect(image).toMatchImageSnapshot({\n    failureThreshold: 0.01,\n    failureThresholdType: 'percent'\n  });\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>o});var n=s(11504);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);