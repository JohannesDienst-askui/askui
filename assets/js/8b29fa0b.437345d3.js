"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4408],{10420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(17624),r=t(4552);const o={sidebar_position:2,title:"Docker"},s="Docker",a={id:"general/Integrations/containers",title:"Docker",description:"AskUI Device Controller Docker Images",source:"@site/versioned_docs/version-0.12.2/general/05-Integrations/containers.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/containers",permalink:"/docs/0.12.2/general/Integrations/containers",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.2/general/05-Integrations/containers.md",tags:[],version:"0.12.2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Docker"},sidebar:"docsSidebar",previous:{title:"Continuous Integration",permalink:"/docs/0.12.2/general/Integrations/continuous-integration"},next:{title:"Reporting",permalink:"/docs/0.12.2/general/Integrations/reporting"}},c={},l=[{value:"AskUI Device Controller Docker Images",id:"askui-device-controller-docker-images",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Usage",id:"usage",level:3},{value:"Starting Container <em>Manually</em>",id:"starting-container-manually",level:3},{value:"Starting Container from Within <code>beforeAll()</code> Using Testcontainers",id:"starting-container-from-within-beforeall-using-testcontainers",level:3},{value:"Connect via VNC",id:"connect-via-vnc",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(n.h2,{id:"askui-device-controller-docker-images",children:"AskUI Device Controller Docker Images"}),"\n",(0,i.jsxs)(n.p,{children:["We maintain Docker Images for running instructions with askui inside a Docker Container, e.g., locally or in a CI/CD pipeline. The images are based on Ubuntu (amd64) images and contain the askui UI Controller (also known as the ",(0,i.jsx)(n.em,{children:"UiController"}),") and a browser. Currently, we offer some of the latest versions of Chrome and Firefox. The askui library connects to the askui UI Controller inside the Docker container to execute the instructions inside it.\nYou can find our images on ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/r/askuigmbh/askui-ui-controller",children:"DockerHub"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["If you are on an ARM architecture such as Apple Silicon, you have to install an ",(0,i.jsx)(n.a,{href:"https://support.apple.com/en-us/HT211861",children:"Emulator like Rosetta"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The following environment variables can be used for configuring the Docker Container started from one of our Docker Images:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ENABLE_VNC"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"true"})," to enable VNC so that you can connect and observe whats happening inside the container. The VNC server is bound to port ",(0,i.jsx)(n.code,{children:"5900"})," of the container."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SCREEN_RESOLUTION"}),(0,i.jsx)(n.td,{children:"1920x1080"}),(0,i.jsxs)(n.td,{children:["The screen resolution used inside the container in the format ",(0,i.jsx)(n.code,{children:"<width>x<height>"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["The AskUI UI Controller is bound to port ",(0,i.jsx)(n.code,{children:"6769"})," of the container so this needs to be exposed."]}),"\n",(0,i.jsxs)(n.h3,{id:"starting-container-manually",children:["Starting Container ",(0,i.jsx)(n.em,{children:"Manually"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can pull an image using ",(0,i.jsx)(n.code,{children:"docker pull"}),", e.g.,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker pull askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64\n"})}),"\n",(0,i.jsx)(n.p,{children:"and, then, start the corresponding container using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker run -e ENABLE_VNC=true -p 6769:6769 -p 5900:5900 askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"starting-container-from-within-beforeall-using-testcontainers",children:["Starting Container from Within ",(0,i.jsx)(n.code,{children:"beforeAll()"})," Using Testcontainers"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/testcontainers/testcontainers-node",children:"Testcontainers"})," is a Node.js library that supports starting Docker Containers from within tests and throwing them away afterwards."]}),"\n",(0,i.jsx)(n.p,{children:"To use it, first install it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm i -D testcontainers\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After that, you can adjust the ",(0,i.jsx)(n.code,{children:"jest.setup.ts"})," that is created when running ",(0,i.jsx)(n.code,{children:"npx askui init"})," like in the following example starting the AskUI UI Controller container just before all instructions are run and connecting to it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { UiControlClient } from 'askui';\nimport { GenericContainer, StartedTestContainer } from 'testcontainers';\n\njest.setTimeout(60 * 1000 * 60);\n\nfunction getDockerImageName(): string {\n  const askuiUiControllerVersion = 'v0.10.0';\n  const browser = 'firefox';\n  const browserVersion = '82.0.3';\n  const osArch = 'amd64';\n  return `askuigmbh/askui-ui-controller:${askuiUiControllerVersion}-${browser}-${browserVersion}-${osArch}`;\n}\n\nasync function startTestContainer(): Promise<StartedTestContainer> {\n  const container = await new GenericContainer(getDockerImageName())\n    .withEnv('ENABLE_VNC', 'true')\n    .withEnv('SCREEN_RESOLUTION', '1920x1080')\n    .withExposedPorts(6769, 5900)\n    .start();\n\n  console.log(`VNC link: ${container.getHost()}:${container.getMappedPort(5900)}`);\n\n  return container;\n}\n\nlet testContainer: StartedTestContainer;\n\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: UiControlClient;\n\nbeforeAll(async () => {\n  testContainer = await startTestContainer();\n\n  aui = await UiControlClient.build({\n    uiControllerUrl: `http://127.0.0.1:${testContainer.getMappedPort(6769)}`,\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n  aui.disconnect();\n\n  await testContainer.stop();\n});\n\nexport { aui };\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connect-via-vnc",children:"Connect via VNC"}),"\n",(0,i.jsxs)(n.p,{children:["To check what is happening inside a running container, you can connect via VNC. For this, you need a VNC client like ",(0,i.jsx)(n.a,{href:"https://remmina.org/",children:"Remmina"}),". When starting the ",(0,i.jsx)(n.a,{href:"#starting-container-manually",children:"Docker Container manually"}),", you have to map the internal port ",(0,i.jsx)(n.code,{children:"5900"})," to a free port on your machine that you, then, can connect to. When ",(0,i.jsx)(n.a,{href:"#starting-container-from-within-beforeall-using-testcontainers",children:"using the testcontainers example code"}),", the VNC port to connect to is logged to the console."]}),"\n",(0,i.jsxs)(n.p,{children:["When connecting, enter the password ",(0,i.jsx)(n.code,{children:"askui"})," when asked."]}),"\n",(0,i.jsx)(n.p,{children:"Example of a VNC connection with a Chrome browser running inside a container:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VNC Example",src:t(47756).c+"",width:"2562",height:"1415"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},47756:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/vnc-example-9077144d46d3f03f74248609d25a18a5.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var i=t(11504);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);