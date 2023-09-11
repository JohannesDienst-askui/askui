"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49035],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const o={sidebar_position:6},i="Proxy",l={unversionedId:"general/Troubleshooting/proxy",id:"version-0.11.4/general/Troubleshooting/proxy",title:"Proxy",description:"In enterprises, proxies are a standard to secure and control network traffic.",source:"@site/versioned_docs/version-0.11.4/general/07-Troubleshooting/proxy.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/proxy",permalink:"/docs/0.11.4/general/Troubleshooting/proxy",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.4/general/07-Troubleshooting/proxy.md",tags:[],version:"0.11.4",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"macOS",permalink:"/docs/0.11.4/general/Troubleshooting/mac-os"},next:{title:"IPv6",permalink:"/docs/0.11.4/general/Troubleshooting/ipv6"}},p={},s=[{value:"Installing AskUI Through NTLM or Kerberos Proxy Server",id:"installing-askui-through-ntlm-or-kerberos-proxy-server",level:2},{value:"Install Local Proxy",id:"install-local-proxy",level:3},{value:"Windows Startup",id:"windows-startup",level:3},{value:"Create <code>.npmrc</code> file for <code>npm</code>",id:"create-npmrc-file-for-npm",level:3},{value:"Set Environment Variables",id:"set-environment-variables",level:3},{value:"UiController Connection to AskUI Inference",id:"uicontroller-connection-to-askui-inference",level:2},{value:"Using Default Configuration with hpagent",id:"using-default-configuration-with-hpagent",level:3},{value:"Manually Configuring the HTTP and HTTPS Agent",id:"manually-configuring-the-http-and-https-agent",level:3},{value:"Deep Package Inspection",id:"deep-package-inspection",level:3},{value:"Deactivate TLS certificate validation (NOT RECOMMENDED)",id:"deactivate-tls-certificate-validation-not-recommended",level:4},{value:"Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)",id:"add-self-signed-certificate-as-extra-ca-certs-recommended",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proxy"},"Proxy"),(0,r.kt)("p",null,"In enterprises, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server"},"proxies")," are a standard to secure and control network traffic."),(0,r.kt)("p",null,"A problem with a proxy can occur at two points in time:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing AskUI"),(0,r.kt)("li",{parentName:"ul"},"UiController connection to AskUI Inference")),(0,r.kt)("h2",{id:"installing-askui-through-ntlm-or-kerberos-proxy-server"},"Installing AskUI Through NTLM or Kerberos Proxy Server"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"Windows New Technology LAN Manager")," (NTLM) or ",(0,r.kt)("em",{parentName:"p"},"Kerberos")," proxy requires you to authenticate yourself. This is done via your currently logged in Windows user or the ",(0,r.kt)("strong",{parentName:"p"},"username/password")," combination (Linux, macOS). The easiest way to do this is to install a local proxy that handles the handshake with the proxy for you."),(0,r.kt)("h3",{id:"install-local-proxy"},"Install Local Proxy"),(0,r.kt)("p",null,"We recommend ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/genotrance/px"},(0,r.kt)("em",{parentName:"a"},"Px")," as a local proxy"),". Install it in your preferred way and start it. The default port it runs on is ",(0,r.kt)("inlineCode",{parentName:"p"},"3128"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Choose the binary option if a package manager is not feasible in your environment.")),(0,r.kt)("h3",{id:"windows-startup"},"Windows Startup"),(0,r.kt)("p",null,"You can add ",(0,r.kt)("em",{parentName:"p"},"Px")," to the startup for the binary zipped option in Windows like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"px-start.bat")," file within the unzipped folder, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"c:\\tools\\px")," with the content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd c:\\tools\\px (or whatever path you unzipped the archive to)\npx.exe\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Double-Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"px-start.bat")," file to start ",(0,r.kt)("em",{parentName:"p"},"Px"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Optional"),": Set up ",(0,r.kt)("em",{parentName:"p"},"Px")," to autostart on system startup so you don\u2019t have to start it manually each time you want to use it "),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalcitizen.life/2-ways-generate-link-shared-network-folder-or-library/#:~:text=If%20you're%20using%20Windows%2010%2C%20hold%20down%20Shift%20on,path%E2%80%9D%20in%20the%20contextual%20menu."},"Create a link")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"px-start.bat")),(0,r.kt)("li",{parentName:"ol"},"Open the startup folder with ",(0,r.kt)("inlineCode",{parentName:"li"},"Windows logo key + R"),", enter\xa0",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"shell:startup"))),(0,r.kt)("li",{parentName:"ol"},"Move the link to ",(0,r.kt)("inlineCode",{parentName:"li"},"px-start.bat")," into this folder")))),(0,r.kt)("h3",{id:"create-npmrc-file-for-npm"},"Create ",(0,r.kt)("inlineCode",{parentName:"h3"},".npmrc")," file for ",(0,r.kt)("inlineCode",{parentName:"h3"},"npm")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," file in your AskUI project. You want to make sure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"registry")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"noproxy")," point to your companies registry (i.e. Artifactory)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"https-proxy")," point to the local ",(0,r.kt)("em",{parentName:"li"},"Px")," proxy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"registry=<company-registry-url>\nproxy=http://127.0.0.1:3128\nhttps-proxy=http://127.0.0.1:3128\nnoproxy=<company-registry-url>\n")),(0,r.kt)("h3",{id:"set-environment-variables"},"Set Environment Variables"),(0,r.kt)("p",null,"Setting the proxy inside ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc")," does not cover all cases. Sometimes a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," command spawns a new process which does not inherit the proxy settings. Therefore you need to set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0"},"Windows instructions"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux and macOS\n# Add it to your favourite shell\n# at startup if necessary\nexport HTTPS_PROXY=http://127.0.0.1:3128\n")),(0,r.kt)("h2",{id:"uicontroller-connection-to-askui-inference"},"UiController Connection to AskUI Inference"),(0,r.kt)("p",null,"We describe two ways to connect to our backend AskUI Inference."),(0,r.kt)("h3",{id:"using-default-configuration-with-hpagent"},"Using Default Configuration with hpagent"),(0,r.kt)("p",null," Per default, our library uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent"},"hpagent")," to support the use of HTTP and HTTPS proxies. ",(0,r.kt)("inlineCode",{parentName:"p"},"hpagent")," is an open source package which provides HTTP(S) proxies that keeps connections alive. To use it, you need to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"install ",(0,r.kt)("inlineCode",{parentName:"li"},"hpagent"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev hpagent \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"configure which proxies to use by setting the proxies' URLs using the environment variables ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export HTTP_PROXY=http://<your-proxy-url>\nexport HTTPS_PROXY=https://<your-proxy-url>\n")),(0,r.kt)("h3",{id:"manually-configuring-the-http-and-https-agent"},"Manually Configuring the HTTP and HTTPS Agent"),(0,r.kt)("p",null,"If you need even more control, you can also configure an HTTP agent and HTTPS agent supporting your proxy manually for either one or both, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the UI Controller (configuring the ",(0,r.kt)("inlineCode",{parentName:"li"},"UiController"),") running on the OS you would like to control and"),(0,r.kt)("li",{parentName:"ul"},"the Inference API (configuring the ",(0,r.kt)("inlineCode",{parentName:"li"},"UiControlClient"),") running on our servers and providing the vision to run your tests.")),(0,r.kt)("p",null,"In the following example we are going to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent"},"hpagent")," again but you can use any HTTP and HTTPS agents that support proxies, e.g., the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpagent"},"http.Agent")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/https.html#class-httpsagent"},"https.Agent")," provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," module of Node.js, respectively."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"hpagent"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev hpagent \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Import ",(0,r.kt)("inlineCode",{parentName:"li"},"hpagent")," (or the agent(s) you would like to use) and configure the ",(0,r.kt)("strong",{parentName:"li"},"UiController")," and/or the ",(0,r.kt)("strong",{parentName:"li"},"UiControlClient")," inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.ts")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { HttpProxyAgent, HttpsProxyAgent } from \'hpagent\'; // <-- Add imports\n// other code\n\nbeforeAll(async () => {\n  // Add this block\n  const httpProxyUrl = "http://<your-proxy-url>" // <-- Adapt http proxy url\n  const httpsProxyUrl = "https://<your-proxy-url>" // <-- Adapt https proxy url\n\n  const proxyAgents = {\n    http: new HttpProxyAgent({\n      proxy: httpProxyUrl,\n    }),\n    https: new HttpsProxyAgent({\n      proxy: httpsProxyUrl,\n    }),\n  }\n\n  // other code\n\n  uiController = new UiController({\n    proxyAgents // <-- Set proxy agents\n  });\n  \n  // other code\n\n  aui = await UiControlClient.build({\n    proxyAgents // <-- Set proxy agents\n  });\n\n  // other code\n})\n')),(0,r.kt)("p",null,"Here are some example for the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpProxyUrl")," (for more details see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent#usage"},"docs from hpagent"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Proxy Type"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,r.kt)("a",{parentName:"td",href:"http://proxy.company.com:8293"},"http://proxy.company.com:8293")),(0,r.kt)("td",{parentName:"tr",align:null},"A HTTP proxy without authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP + Basic Auth"),(0,r.kt)("td",{parentName:"tr",align:null},"e.g. http://username:",(0,r.kt)("a",{parentName:"td",href:"mailto:password@proxy.company.com"},"password@proxy.company.com"),":8293"),(0,r.kt)("td",{parentName:"tr",align:null},"A HTTP proxy with authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOCKET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Socket proxies are not supported by ",(0,r.kt)("inlineCode",{parentName:"td"},"hpagent"))))),(0,r.kt)("p",null,"Here are some example for the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpsProxyUrl")," (for more details see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/delvedor/hpagent#usage"},"docs from hpagent"),")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Proxy Type"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},"e.g. ",(0,r.kt)("a",{parentName:"td",href:"https://proxy.company.com:8293"},"https://proxy.company.com:8293")),(0,r.kt)("td",{parentName:"tr",align:null},"A HTTPS proxy without authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTPS + Basic Auth"),(0,r.kt)("td",{parentName:"tr",align:null},"e.g. https://username:",(0,r.kt)("a",{parentName:"td",href:"mailto:password@proxy.company.com"},"password@proxy.company.com"),":8293"),(0,r.kt)("td",{parentName:"tr",align:null},"A HTTP proxy with authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOCKET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Socket proxies are not supported by ",(0,r.kt)("inlineCode",{parentName:"td"},"hpagent"))))),(0,r.kt)("h3",{id:"deep-package-inspection"},"Deep Package Inspection"),(0,r.kt)("p",null,"Company proxies, like ",(0,r.kt)("a",{parentName:"p",href:"https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy"},"Zscalar"),", use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deep_packet_inspection"},"deep package inspection")," to analyze the network traffic. Such proxies are adding self-signed certificates to the HTTPS request to break up the TLS connection."),(0,r.kt)("p",null,"This can result in the following error messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," RequestError: self signed certificate\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," RequestError: unable to verify the first certificate\n")),(0,r.kt)("p",null,"There are multiple options to deal with this:"),(0,r.kt)("h4",{id:"deactivate-tls-certificate-validation-not-recommended"},"Deactivate TLS certificate validation (NOT RECOMMENDED)"),(0,r.kt)("p",null,"This option deactivates the TLS validation (see ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#node_tls_reject_unauthorizedvalue"},"here"),") and ",(0,r.kt)("strong",{parentName:"p"},"is not recommended"),". Only for testing!"),(0,r.kt)("p",null,"Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"set NODE_TLS_REJECT_UNAUTHORIZED 0\n")),(0,r.kt)("p",null,"macOS/Unix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export NODE_TLS_REJECT_UNAUTHORIZED=0\n")),(0,r.kt)("h4",{id:"add-self-signed-certificate-as-extra-ca-certs-recommended"},"Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)"),(0,r.kt)("p",null,"The other option is to add the self-signed certificate as ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#node_extra_ca_certsfile"},"extra certificates for Node.js"),". "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get the certificate and convert it to a ",(0,r.kt)("inlineCode",{parentName:"li"},".pem")," file, e.g., by ",(0,r.kt)("a",{parentName:"li",href:"https://superuser.com/a/1292098"},"exporting it with Chrome"),"."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"NODE_EXTRA_CA_CERTS")," with the following commands:")),(0,r.kt)("p",null,"Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"set NODE_EXTRA_CA_CERTS '<path>\\<cert>.pem'\n")),(0,r.kt)("p",null,"macOS/Unix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export NODE_EXTRA_CA_CERTS='<path>/<cert>.pem'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional information:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store"},"Get Zscalar custom certificate"))))}u.isMDXComponent=!0}}]);