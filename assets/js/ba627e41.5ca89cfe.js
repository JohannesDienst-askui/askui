"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17005],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(25773),i=(n(27378),n(35318));const o={sidebar_position:2},r="Automate Multiple Devices",l={unversionedId:"general/Tutorials/multi-device",id:"version-0.10.2/general/Tutorials/multi-device",title:"Automate Multiple Devices",description:"This tutorial shows how to automate multiple devices on the same network by using askui. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android, with a single setup with askui library.",source:"@site/versioned_docs/version-0.10.2/general/06-Tutorials/multi-device.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/multi-device",permalink:"/docs/0.10.2/general/Tutorials/multi-device",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.2/general/06-Tutorials/multi-device.md",tags:[],version:"0.10.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Custom Elements",permalink:"/docs/0.10.2/general/Tutorials/custom-element"},next:{title:"Create Run Reports",permalink:"/docs/0.10.2/general/Tutorials/askui-run-reports"}},s={},d=[{value:"1. Download and Prepare the <code>askui-ui-controller</code> Binary for Each Device",id:"1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",level:2},{value:"Android Only:",id:"android-only",level:3},{value:"2. Configure the <code>jest.setup.ts</code>",id:"2-configure-the-jestsetupts",level:2},{value:"3. Run the Controller on Each Device",id:"3-run-the-controller-on-each-device",level:2},{value:"Android Only:",id:"android-only-1",level:3},{value:"(option) Running Multiple Android Devices",id:"option-running-multiple-android-devices",level:4},{value:"4. Write the askui Code",id:"4-write-the-askui-code",level:2},{value:"5. Run the Code",id:"5-run-the-code",level:2},{value:"6. Conclusion",id:"6-conclusion",level:2}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"automate-multiple-devices"},"Automate Multiple Devices"),(0,i.kt)("p",null,"This tutorial shows how to automate multiple devices on the same network by using askui. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android, with a single setup with askui library."),(0,i.kt)("p",null,"In fact, there are many automation tools in the wild that you can use to automate different devices, although most of them require different configurations and different code for different platforms. By using askui library, an automation tool that operates on the OS\xa0level, you can use the same code for any application running on different devices even without so much change. And this makes askui a powerful Cross-platform automation tool. "),(0,i.kt)("p",null,"Let's have a look at the askui library and see how we can accomplish a Cross-platform/-device automation test\ud83d\udd25"),(0,i.kt)("p",null,"\ud83d\udccc ",(0,i.kt)("em",{parentName:"p"},"The following tutorial assumes that you have already installed and set up the askui library on your local device. The code for the configuration is based on the generated code: ",(0,i.kt)("inlineCode",{parentName:"em"},"npx askui init"),". See ",(0,i.kt)("a",{parentName:"em",href:"/docs/0.10.2/general/Getting%20Started/write-your-first-instruction"},"Getting Started")," for more details.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi-device-automation",src:n(92772).Z,width:"1280",height:"882"})),(0,i.kt)("h2",{id:"1-download-and-prepare-the-askui-ui-controller-binary-for-each-device"},"1. Download and Prepare the ",(0,i.kt)("inlineCode",{parentName:"h2"},"askui-ui-controller")," Binary for Each Device"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"At the moment you need to run askui one time for the askui-ui-controller to be downloaded!\nFollow the instructions below.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you already used the askui library once, then the binary for your platform already exists in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/")," directory, as the binary gets automatically downloaded when an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"UiController")," gets initialized. ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.2/api/Configuration/askui-ui-controller"},"See here")," for more details on the ",(0,i.kt)("em",{parentName:"p"},"askui UI Controller"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Follow this path and confirm that the binary exists:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows\nnode_modules/askui/dist/release/latest/win32/askui-ui-controller.exe\n\n# macOS\nnode_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/askui-ui-controller\n\n# Linux\nnode_modules/askui/dist/release/latest/linux/askui-ui-controller.AppImage\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the remote device runs the same OS as the local device, copy the binary from the local device to the remote device.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the remote device runs a different OS, then download the binary for the respective platform:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe"},"Windows")," | ",(0,i.kt)("a",{parentName:"li",href:"https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg"},"macOS(intel)")," | ",(0,i.kt)("a",{parentName:"li",href:"https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg"},"macOS(silicon)")," | ",(0,i.kt)("a",{parentName:"li",href:"https://askui-public.s3.eu-central-1.amazonaws.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage"},"Linux")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"macOS")," and ",(0,i.kt)("strong",{parentName:"p"},"Linux")," only: If you downloaded the ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller")," manually from the link above, you have to make it executable."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"macOS"),": Mount the downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},"askui-ui-controller.dmg")," by double-clicking it and copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"askui-ui-controller.app")," to wherever you want to store it. Then, the executable binary will be within the ",(0,i.kt)("inlineCode",{parentName:"li"},".app"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"askui-ui-controller.app/Contents/MacOS/askui-ui-controller\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux"),": Run the command below to make it executable:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x askui-ui-controller.AppImage\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the remote devices runs Android, see the chapter ",(0,i.kt)("a",{parentName:"p",href:"#android-only"},"Android Only"),"."))),(0,i.kt)("h3",{id:"android-only"},"Android Only:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is no need to save the binary to Android devices. They are controlled by the ",(0,i.kt)("em",{parentName:"p"},"askui UI Controller")," running on the local device (desktop).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Be sure that your Android device is discoverable by the Android Debug Bridge ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," from your local device:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Run this command to confirm that your Android device is discoverable\nadb devices\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you don't have the ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," installed on your local device, set it up by following ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.2/general/Tutorials/setup-android"},"this tutorial"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the commands below, if you want to connect your Android device via ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," wirelessly:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure that the `USB Debugging Mode` is enabled in the Android device.\n# Connect the Android device with a USB cable, and run this command:\n\nadb devices # will print the <device-id>\n\nadb -s <device-id> tcpip 9000 # replace <device-id> with your device-id\n\nadb -s <device-id> connect <local-ip-address>:9000 # replace the <local-ip-address>\n\n# Run this command, if you want to check the local ip address of the android device\nadb -s <device-id> shell ip -f inet addr show wlan0\n\n# Now you can disconnect the USB cable from the Android device.\n# Confirm that the Android device is recognised by adb wirelessly.\nadb devices\n")))),(0,i.kt)("h2",{id:"2-configure-the-jestsetupts"},"2. Configure the ",(0,i.kt)("inlineCode",{parentName:"h2"},"jest.setup.ts")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Figure out the local IP address of the remote device, and then change the ",(0,i.kt)("inlineCode",{parentName:"p"},"<local-ip-address>")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.setup.ts"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { UiControlClient, UiController } from 'askui';\n\nlet localDevice: UiControlClient;\nlet remoteDevice: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n\n// Get your askui credentials from https://app.v2.askui.com/workspaces\nconst credentials = {\n    workspaceId: '<your-workspace-id>',\n    token: '<your-token>',\n}\n\n// This client will communicate with\n// the controller running on this local device.\nlocalDevice = await UiControlClient.build({ \n    uiControllerUrl: \"ws://127.0.0.1:6769\",\n    credentials: credentials,\n});\n\nawait localDevice.connect();\n\n// This client will communicate with\n// the controller running on the remote device.\n// Replace the <local-ip-address>\n// In case of Android device, replace it with 127.0.0.1\nremoteDevice = await UiControlClient.build({    \n    uiControllerUrl: \"ws://<local-ip-address>:6769\", \n    credentials: credentials,\n});\n\nawait remoteDevice.connect();\n});\n\nafterAll(async () => {\n    localDevice.close();\n    remoteDevice.close();\n});\n\nexport { localDevice, remoteDevice };\n")))),(0,i.kt)("h2",{id:"3-run-the-controller-on-each-device"},"3. Run the Controller on Each Device"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Change to the directory of the ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller")," binary first: See ",(0,i.kt)("a",{parentName:"p",href:"#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device"},"Download and Prepare step"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the binary ",(0,i.kt)("em",{parentName:"p"},"askui UI Controller")," on the local and remote devices with the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows powershell\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m\n\n# macOS\n./askui-ui-controller --host 0.0.0.0 -d 0 -m\n\n# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m    \n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If running successfully, you should see the logs printed on the terminal, e.g:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[2023-01-02 17:31:19.634 +0100] DEBUG (AskuiUiController): Window is minimized.\n[2023-01-02 17:31:19.639 +0100] INFO (AskuiUiController): Selecting display number 0.\n[2023-01-02 17:31:19.641 +0100] INFO (AskuiUiController): Successfully started.\n")))),(0,i.kt)("h3",{id:"android-only-1"},"Android Only:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If your remote device is an Android device, run the ",(0,i.kt)("em",{parentName:"p"},"askui UI Controller")," on the ",(0,i.kt)("strong",{parentName:"p"},"local device (desktop)")," with an extra option as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows powershell\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n\n# macOS\n./askui-ui-controller --host 0.0.0.0 -d 0 -m -r android\n\n# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m -r android\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure that your local device (desktop) is running ",(0,i.kt)("strong",{parentName:"p"},"TWO DIFFERENT ",(0,i.kt)("inlineCode",{parentName:"strong"},"askui-ui-controller")),", if you want to control the local device and the Android device at the same time."))),(0,i.kt)("h4",{id:"option-running-multiple-android-devices"},"(option) Running Multiple Android Devices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("em",{parentName:"p"},"askui UI Controller")," considers all Android devices as a single device with multiple displays. See the screenshot below.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"-d 0")," option of the binary differently for each Android device."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows Powershell\n# For the first Android device\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n# For the second Android device\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 1 -m -r android\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\nstart askui-ui-controller.exe --host 0.0.0.0 -d 1 -m -r android\n\n# macOS\n# For the first Android device\n./askui-ui-controller --host 0.0.0.0 -d 0 -m -r android\n# For the second Android device\n./askui-ui-controller --host 0.0.0.0 -d 1 -m -r android\n\n# Linux\n# For the first Android device\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m -r android\n# For the second Android device\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 1 -m -r android\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multiple-android",src:n(71662).Z,width:"792",height:"698"})),(0,i.kt)("h2",{id:"4-write-the-askui-code"},"4. Write the askui Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Write the askui code in ",(0,i.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { localDevice, remoteDevice } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n    it('should work with multiple devices', async () => {\n        const everyElement_remote = await remoteDevice.getAll().exec();\n        console.log(everyElement_remote);\n\n        await localDevice.moveMouse(500,500).exec();\n        const everyElement_local = await localDevice.getAll().exec();\n        console.log(everyElement_local);\n    });\n});\n")))),(0,i.kt)("h2",{id:"5-run-the-code"},"5. Run the Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the command below to run the askui code:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")))),(0,i.kt)("h2",{id:"6-conclusion"},"6. Conclusion"),(0,i.kt)("p",null,"Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our ",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/3T2je6C"},"Discord Community"),"!"))}c.isMDXComponent=!0},92772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multi-device-diagram-7c1be1770bde1ca3f564d30461460510.png"},71662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multiple-android-22a53e5a2d74302ca9f4b26b3ea3b9b0.png"}}]);