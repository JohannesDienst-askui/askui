"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31563],{39460:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(85893),s=t(11151);const r={},a="Gitlab CI/CD",o={id:"general/Continuous Integration/gitlab-ci",title:"Gitlab CI/CD",description:"The askui library can be integrated into a Gitlab CI/CD Pipeline.",source:"@site/versioned_docs/version-0.10.5/general/04-Continuous Integration/gitlab-ci.md",sourceDirName:"general/04-Continuous Integration",slug:"/general/Continuous Integration/gitlab-ci",permalink:"/docs/0.10.5/general/Continuous Integration/gitlab-ci",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.5/general/04-Continuous Integration/gitlab-ci.md",tags:[],version:"0.10.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"askui UI Controller Docker Images",permalink:"/docs/0.10.5/general/Continuous Integration/askui-ui-controller-docker-images"},next:{title:"Annotation",permalink:"/docs/0.10.5/general/Tooling/annotation"}},l={},c=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"How This Configuration Works",id:"how-this-configuration-works",level:3},{value:"Testing Inside Gitlab-CI",id:"testing-inside-gitlab-ci",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"gitlab-cicd",children:"Gitlab CI/CD"}),"\n",(0,n.jsxs)(i.p,{children:["The askui library can be integrated into a ",(0,n.jsx)(i.a,{href:"https://docs.gitlab.com/ee/ci",children:"Gitlab CI/CD Pipeline"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,n.jsxs)(i.p,{children:["The example below is a basic CI/CD pipeline definition (",(0,n.jsx)(i.code,{children:".gitlab-ci.yml"}),") with one ",(0,n.jsx)(i.code,{children:"test"})," stage and a ",(0,n.jsx)(i.code,{children:"test"})," job within it to run instructions with the askui library. It assumes you have set up a project with the askui library as described under ",(0,n.jsx)(i.a,{href:"/docs/0.10.5/general/Getting%20Started/write-your-first-instruction",children:"Getting Started"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Besides that, the ",(0,n.jsx)(i.code,{children:"<docker_image_path>"})," needs to be replaced by ",(0,n.jsx)(i.a,{href:"./askui-ui-controller-docker-images",children:"one of our Docker Images"}),". Moreover, the ",(0,n.jsx)(i.code,{children:"<alias_name>"})," should be replaced by a name that will be used to access the service from the job's container (see ",(0,n.jsx)(i.a,{href:"https://docs.gitlab.com/ee/ci/services/#define-services-in-the-gitlab-ciyml-file",children:"Services in Gitlab"}),")."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yml",children:"stages:\n  - test\n\ntest:\n  stage: test\n  image: node:16.13\n  before_script:\n    - npm ci\n  services:\n    - name: <docker_image_path>\n      alias: <alias_name>\n  script:\n    - npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts \n"})}),"\n",(0,n.jsx)(i.h3,{id:"how-this-configuration-works",children:"How This Configuration Works"}),"\n",(0,n.jsx)(i.p,{children:"On push to the repository on Gitlab, a Gitlab-hosted Linux instance will start and execute the stages."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The code of your project is checked out."}),"\n",(0,n.jsxs)(i.li,{children:["Scripts within the stages will be executed:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Pull the image for the service."}),"\n",(0,n.jsx)(i.li,{children:"Installs npm dependencies including askui."}),"\n",(0,n.jsx)(i.li,{children:"Starts askui."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"testing-inside-gitlab-ci",children:"Testing Inside Gitlab-CI"}),"\n",(0,n.jsxs)(i.p,{children:["The main difference between ",(0,n.jsx)(i.a,{href:"/docs/0.10.5/general/Getting%20Started/write-your-first-instruction",children:"the first instruction using askui example"})," and instructions inside Gitlab-CI is the askui server URL. Using Gitlab services, the askui server URL is ",(0,n.jsx)(i.code,{children:"http://<alias_name>:6769"})," instead of ",(0,n.jsx)(i.code,{children:"http://127.0.0.1:6769"}),". To have askui instructions that can work locally and inside the Gitlab CI we suggest that you create the client like in the following example."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"const uiControllerUrlHost = process.env.CI_JOB_ID ? '<alias_name>' : '127.0.0.1';\naui = await UiControlClient.build({\n  uiControllerUrl: `http://${uiControllerUrlHost}:6769`,\n});\n"})})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>a});var n=t(67294);const s={},r=n.createContext(s);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);