"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5872],{35812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var o=n(17624),i=n(4552);const s={sidebar_position:8},a="Online Shop Login",l={id:"general/Tutorials/shop-demo",title:"Online Shop Login",description:"The following tutorial shows how to automate the login process of a simple demo online shop.",source:"@site/docs/general/06-Tutorials/shop-demo.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/shop-demo",permalink:"/docs/next/general/Tutorials/shop-demo",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/06-Tutorials/shop-demo.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/docs/next/general/Tutorials/"},next:{title:"Like on Spotify Desktop App",permalink:"/docs/next/general/Tutorials/spotify-tutorial"}},c={},r=[{value:"Setup",id:"setup",level:2},{value:"Code",id:"code",level:2},{value:"1. Open the Demo Shop",id:"1-open-the-demo-shop",level:3},{value:"2. Navigate to the Login Dialog",id:"2-navigate-to-the-login-dialog",level:3},{value:"3. Fill out Login Information",id:"3-fill-out-login-information",level:3},{value:"4. Click on Login Button",id:"4-click-on-login-button",level:3},{value:"5. Check whether Login worked &amp; Log out",id:"5-check-whether-login-worked--log-out",level:3},{value:"Result",id:"result",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"online-shop-login",children:"Online Shop Login"}),"\n",(0,o.jsx)(t.p,{children:"The following tutorial shows how to automate the login process of a simple demo online shop."}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Follow the ",(0,o.jsx)("a",{href:"../Getting%20Started/getting-started",target:"_blank",children:"AskUI installation guide and write your first instruction"})]}),"\n",(0,o.jsxs)(t.li,{children:["Open a browser on your screen","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you have multiple screens, configure the used display by setting the display variable at ",(0,o.jsx)(t.code,{children:"test/helpers/askui-helper.ts"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,o.jsxs)(t.p,{children:["After running the ",(0,o.jsx)(t.code,{children:"npx askui init"})," command as described in the setup you will have a file ",(0,o.jsx)(t.code,{children:"test/my-first-askui-test-suite.test.ts"}),". In this file add a new workflow (",(0,o.jsx)(t.code,{children:"it"}),"-code-block) inside the body of the callback passed to the ",(0,o.jsx)(t.code,{children:"describe"})," function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"describe(/* a string identifying the test suite */, () => {\n    ... (other workflows)\n\n    it('Should log into account', async () => {\n\n    });\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"1-open-the-demo-shop",children:"1. Open the Demo Shop"}),"\n",(0,o.jsx)(t.p,{children:"First we need to open the demo shop in the browser.\nFor that we open the browser and then type the URL into the search bar and hit enter."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('Should log into account', async () => {\n    // First open the browser.\n    // If it is already open it should focus the current window\n    // macOS: open -a 'Google Chrome'\n    // Windows: start chrome\n    await aui.execOnShell(\"start chrome\").exec();\n\n    // Open a new tab\n    // macOS: command + t\n    // windows: control + t\n    await aui.pressTwoKeys('control', 't').exec();\n\n    // Click the textfield or URL bar that contains\n    // the text 'Search Google or type a URL'\n    await aui.click()\n      .text()\n      .withText('Search Google or type a URL').exec();\n\n    // Type the text into the focused element\n    await aui.type('https://askui-demo-shop-6e358.web.app/').exec();\n\n    // Navigate to the website\n    await aui.pressKey('enter').exec();\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When you run this code with ",(0,o.jsx)(t.code,{children:"npm run askui"}),", you should see the demo online shop opening in the browser you opened."]}),"\n",(0,o.jsx)(t.h3,{id:"2-navigate-to-the-login-dialog",children:"2. Navigate to the Login Dialog"}),"\n",(0,o.jsx)(t.p,{children:"Next, to open the login dialog, we need to click the text login at the top of the page. We can do this with the following instruction:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('Should log into account', async () => {\n    ...\n    await aui.click().text('Login').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3-fill-out-login-information",children:"3. Fill out Login Information"}),"\n",(0,o.jsxs)(t.p,{children:["After opening the login dialog, we need to enter an email address and a password. For this we will use the ",(0,o.jsx)(t.code,{children:"typeIn"})," action. After filling in an email address, depending on the browser used the textfield may open an auto-complete drop-down that overlaps with the password field:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Overlap",src:n(42952).c+"",width:"636",height:"259"})}),"\n",(0,o.jsx)(t.p,{children:'To keep the password field visible, we have to hide the auto-complete drop-down. In order to do this, we have to blur the email input field. We do this by clicking on the headline of the page ("Login"). Afterwards, we can type into the password field.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('Should log into account', async () => {\n    ...\n    await aui.typeIn('test@askui.com').textfield().contains().text('Email Address').exec();\n    await aui.click().text('Login').above().textfield().exec();\n    await aui.typeIn('passwort').textfield().contains().text('Password').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"4-click-on-login-button",children:"4. Click on Login Button"}),"\n",(0,o.jsx)(t.p,{children:"After filling in email and password, we need to click the login button. The following instruction does that for us:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('Should log into account', async () => {\n    ...\n    await aui.click().button().contains().text('Log in').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"5-check-whether-login-worked--log-out",children:"5. Check whether Login worked & Log out"}),"\n",(0,o.jsxs)(t.p,{children:['Finally, we need to check whether the login worked. We can do this by checking if the text "Logout ',(0,o.jsx)(t.a,{href:"mailto:test@askui.com",children:"test@askui.com"}),'" is displayed in the header as this is only displayed if we are logged in. We complete the workflow by logging out so that the workflow can easily be rerun without having to log out manually.']}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('Should log into account', async () => {\n    ...\n    await aui.expect().text('Logout test@askui.com').exists().exec();\n    await aui.click().text('Logout test@askui.com').exec();\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,o.jsx)(t.p,{children:"The following code block shows the finished code for the login of the web shop:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"it('Should log into account', async () => {\n    // First open the browser.\n    // If it is already open it should focus the current window\n    // macOS: open -a 'Google Chrome'\n    // Windows: start chrome\n    await aui.execOnShell(\"start chrome\").exec();\n\n    // Open a new tab\n    // macOS: command + t\n    // windows: control + t\n    await aui.pressTwoKeys('control', 't').exec();\n\n    // Click the textfield or URL bar that contains\n    // the text 'Search Google or type a URL'\n    await aui.click()\n      .text()\n      .withText('Search Google or type a URL').exec();\n\n    // Type the text into the focused element\n    await aui.type('https://askui-demo-shop-6e358.web.app/').exec();\n\n    // Navigate to the website\n    await aui.pressKey('enter').exec();\n    await aui.click().text('Login').exec();\n    await aui.typeIn('test@askui.com').textfield().contains().text('Email Address').exec();\n    await aui.click().text('Login').above().textfield().exec();\n    await aui.typeIn('passwort').textfield().contains().text('Password').exec();\n    await aui.click().button().contains().text('Log in').exec();\n    await aui.expect().text('test@askui.com').exists().exec();\n    await aui.click().text('Logout test@askui.com').exec();\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To run this code use the ",(0,o.jsx)(t.code,{children:"npm run askui"})," command."]})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},42952:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/login_overlap-921106721ef24aae573bbe95725ebf68.png"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>a});var o=n(11504);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);