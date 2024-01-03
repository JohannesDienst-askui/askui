"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6517],{54620:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=i(85893),t=i(11151);const s={sidebar_position:2},r="Multi Device Automation",l={id:"general/Executing Automations/multi-device-automation",title:"Multi Device Automation",description:"This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android, with a single setup with AskUI library.",source:"@site/versioned_docs/version-0.11.6/general/04-Executing Automations/multi-device-automation.md",sourceDirName:"general/04-Executing Automations",slug:"/general/Executing Automations/multi-device-automation",permalink:"/docs/0.11.6/general/Executing Automations/multi-device-automation",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.11.6/general/04-Executing Automations/multi-device-automation.md",tags:[],version:"0.11.6",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Single Device Automation",permalink:"/docs/0.11.6/general/Executing Automations/single-device-automation"},next:{title:"Web Automation",permalink:"/docs/0.11.6/general/Executing Automations/web-automation"}},d={},a=[{value:"1. Download and Prepare the <code>askui-ui-controller</code> Binary for Each Device",id:"1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",level:2},{value:"Android Only:",id:"android-only",level:3},{value:"2. Configure the <code>jest.setup.ts</code>",id:"2-configure-the-jestsetupts",level:2},{value:"3. Run the Controller on Each Device",id:"3-run-the-controller-on-each-device",level:2},{value:"Android Only:",id:"android-only-1",level:3},{value:"(option) Running Multiple Android Devices",id:"option-running-multiple-android-devices",level:4},{value:"4. Write the AskUI Code",id:"4-write-the-askui-code",level:2},{value:"5. Run the Code",id:"5-run-the-code",level:2},{value:"6. Conclusion",id:"6-conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"multi-device-automation",children:"Multi Device Automation"}),"\n",(0,o.jsx)(n.p,{children:"This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this tutorial, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android, with a single setup with AskUI library."}),"\n",(0,o.jsx)(n.p,{children:"In fact, there are many automation tools in the wild that you can use to automate different devices, although most of them require different configurations and different code for different platforms. By using AskUI library, an automation tool that operates on the OS\xa0level, you can use the same code for any application running on different devices even without so much change. And this makes AskUI a powerful Cross-platform automation tool."}),"\n",(0,o.jsx)(n.p,{children:"Let's have a look at the AskUI library and see how we can accomplish a Cross-platform/-device automation test\ud83d\udd25"}),"\n",(0,o.jsxs)(n.p,{children:["\ud83d\udccc ",(0,o.jsxs)(n.em,{children:["The following tutorial assumes that you have already installed and set up the AskUI library on your local device. The code for the configuration is based on the generated code: ",(0,o.jsx)(n.code,{children:"npx askui init"}),". See ",(0,o.jsx)(n.a,{href:"/docs/0.11.6/general/Getting%20Started/write-your-first-instruction",children:"Getting Started"})," for more details."]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"multi-device-automation",src:i(45174).Z+"",width:"1280",height:"882"})}),"\n",(0,o.jsxs)(n.h2,{id:"1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",children:["1. Download and Prepare the ",(0,o.jsx)(n.code,{children:"askui-ui-controller"})," Binary for Each Device"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"At the moment you need to run AskUI one time for the askui-ui-controller to be downloaded!\nFollow the instructions below."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you already used the AskUI library once, then the binary for your platform already exists in the ",(0,o.jsx)(n.code,{children:"node_modules/"})," directory, as the binary gets automatically downloaded when an instance of ",(0,o.jsx)(n.code,{children:"UiController"})," gets initialized. ",(0,o.jsx)(n.a,{href:"/docs/0.11.6/api/Configuration/askui-ui-controller",children:"See here"})," for more details on the ",(0,o.jsx)(n.em,{children:"AskUI UI Controller"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Follow this path and confirm that the binary exists:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Windows\nnode_modules/askui/dist/release/latest/win32/askui-ui-controller.exe\n\n# macOS\nnode_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/askui-ui-controller\n\n# Linux\nnode_modules/askui/dist/release/latest/linux/askui-ui-controller.AppImage\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If the remote device runs the same OS as the local device, copy the binary from the local device to the remote device."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If the remote device runs a different OS, then download the binary for the respective platform:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/win32/x64/askui-ui-controller.exe",children:"Windows"})," | ",(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg",children:"macOS(intel)"})," | ",(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg",children:"macOS(silicon)"})," | ",(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage",children:"Linux"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"macOS"})," and ",(0,o.jsx)(n.strong,{children:"Linux"})," only: If you downloaded the ",(0,o.jsx)(n.code,{children:"askui-ui-controller"})," manually from the link above, you have to make it executable."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"macOS"}),": Mount the downloaded ",(0,o.jsx)(n.code,{children:"askui-ui-controller.dmg"})," by double-clicking it and copy the ",(0,o.jsx)(n.code,{children:"askui-ui-controller.app"})," to wherever you want to store it. Then, the executable binary will be within the ",(0,o.jsx)(n.code,{children:".app"}),":","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"askui-ui-controller.app/Contents/MacOS/askui-ui-controller\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Linux"}),": Run the command below to make it executable:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"chmod +x askui-ui-controller.AppImage\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If the remote devices runs Android, see the chapter ",(0,o.jsx)(n.a,{href:"#android-only",children:"Android Only"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"android-only",children:"Android Only:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["There is no need to save the binary to Android devices. They are controlled by the ",(0,o.jsx)(n.em,{children:"AskUI UI Controller"})," running on the local device (desktop)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Be sure that your Android device is discoverable by the Android Debug Bridge ",(0,o.jsx)(n.code,{children:"adb"})," from your local device:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Run this command to confirm that your Android device is discoverable\nadb devices\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you don't have the ",(0,o.jsx)(n.code,{children:"adb"})," installed on your local device, set it up by following ",(0,o.jsx)(n.a,{href:"/docs/0.11.6/general/Executing%20Automations/single-device-automation",children:"this tutorial"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use the commands below, if you want to connect your Android device via ",(0,o.jsx)(n.code,{children:"adb"})," wirelessly:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Make sure that the `USB Debugging Mode` is enabled in the Android device.\n# Connect the Android device with a USB cable, and run this command:\n\nadb devices # will print the <device-id>\n\nadb -s <device-id> tcpip 9000 # replace <device-id> with your device-id\n\nadb -s <device-id> connect <local-ip-address>:9000 # replace the <local-ip-address>\n\n# Run this command, if you want to check the local ip address of the android device\nadb -s <device-id> shell ip -f inet addr show wlan0\n\n# Now you can disconnect the USB cable from the Android device.\n# Confirm that the Android device is recognised by adb wirelessly.\nadb devices\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"2-configure-the-jestsetupts",children:["2. Configure the ",(0,o.jsx)(n.code,{children:"jest.setup.ts"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Figure out the local IP address of the remote device, and then change the ",(0,o.jsx)(n.code,{children:"<local-ip-address>"})," of the ",(0,o.jsx)(n.code,{children:"jest.setup.ts"}),":","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { UiControlClient, UiController } from 'askui';\n\nlet localDevice: UiControlClient;\nlet remoteDevice: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n\n// Get your AskUI credentials from https://app.askui.com/workspaces\nconst credentials = {\n    workspaceId: '<your-workspace-id>',\n    token: '<your-token>',\n}\n\n// This client will communicate with\n// the controller running on this local device.\nlocalDevice = await UiControlClient.build({ \n    uiControllerUrl: \"ws://127.0.0.1:6769\",\n    credentials: credentials,\n});\n\nawait localDevice.connect();\n\n// This client will communicate with\n// the controller running on the remote device.\n// Replace the <local-ip-address>\n// In case of Android device, replace it with 127.0.0.1\nremoteDevice = await UiControlClient.build({    \n    uiControllerUrl: \"ws://<local-ip-address>:6769\", \n    credentials: credentials,\n});\n\nawait remoteDevice.connect();\n});\n\nafterAll(async () => {\n    localDevice.close();\n    remoteDevice.close();\n});\n\nexport { localDevice, remoteDevice };\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"3-run-the-controller-on-each-device",children:"3. Run the Controller on Each Device"}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Change to the directory of the ",(0,o.jsx)(n.code,{children:"askui-ui-controller"})," binary first: See ",(0,o.jsx)(n.a,{href:"#1-download-and-prepare-the-askui-ui-controller-binary-for-each-device",children:"Download and Prepare step"}),"."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the binary ",(0,o.jsx)(n.em,{children:"AskUI UI Controller"})," on the local and remote devices with the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Windows powershell\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m\n\n# macOS\n./askui-ui-controller --host 0.0.0.0 -d 0 -m\n\n# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m    \n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If running successfully, you should see the logs printed on the terminal, e.g:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[2023-01-02 17:31:19.634 +0100] DEBUG (AskuiUiController): Window is minimized.\n[2023-01-02 17:31:19.639 +0100] INFO (AskuiUiController): Selecting display number 0.\n[2023-01-02 17:31:19.641 +0100] INFO (AskuiUiController): Successfully started.\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"android-only-1",children:"Android Only:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If your remote device is an Android device, run the ",(0,o.jsx)(n.em,{children:"AskUI UI Controller"})," on the ",(0,o.jsx)(n.strong,{children:"local device (desktop)"})," with an extra option as below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Windows powershell\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n\n# macOS\n./askui-ui-controller --host 0.0.0.0 -d 0 -m -r android\n\n# Linux\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m -r android\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Make sure that your local device (desktop) is running ",(0,o.jsxs)(n.strong,{children:["TWO DIFFERENT ",(0,o.jsx)(n.code,{children:"askui-ui-controller"})]}),", if you want to control the local device and the Android device at the same time."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"option-running-multiple-android-devices",children:"(option) Running Multiple Android Devices"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"AskUI UI Controller"})," considers all Android devices as a single device with multiple displays. See the screenshot below."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"-d 0"})," option of the binary differently for each Android device."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Windows Powershell\n# For the first Android device\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\n# For the second Android device\n.\\askui-ui-controller.exe --host 0.0.0.0 -d 1 -m -r android\n\n# Windows cmd\nstart askui-ui-controller.exe --host 0.0.0.0 -d 0 -m -r android\nstart askui-ui-controller.exe --host 0.0.0.0 -d 1 -m -r android\n\n# macOS\n# For the first Android device\n./askui-ui-controller --host 0.0.0.0 -d 0 -m -r android\n# For the second Android device\n./askui-ui-controller --host 0.0.0.0 -d 1 -m -r android\n\n# Linux\n# For the first Android device\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 0 -m -r android\n# For the second Android device\n./askui-ui-controller.AppImage --host 0.0.0.0 -d 1 -m -r android\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"multiple-android",src:i(91718).Z+"",width:"792",height:"698"})}),"\n",(0,o.jsx)(n.h2,{id:"4-write-the-askui-code",children:"4. Write the AskUI Code"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Write the AskUI code in ",(0,o.jsx)(n.code,{children:"test/my-first-askui-test-suite.test.ts"}),":","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { localDevice, remoteDevice } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n    it('should work with multiple devices', async () => {\n        const everyElement_remote = await remoteDevice.getAll().exec();\n        console.log(everyElement_remote);\n\n        await localDevice.moveMouse(500,500).exec();\n        const everyElement_local = await localDevice.getAll().exec();\n        console.log(everyElement_local);\n    });\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"5-run-the-code",children:"5. Run the Code"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Run the command below to run the AskUI code:","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"6-conclusion",children:"6. Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our ",(0,o.jsx)(n.a,{href:"https://app.outverse.com/askui/community/home",children:"Outverse-Community"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},45174:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/multi-device-diagram-7c1be1770bde1ca3f564d30461460510.png"},91718:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/multiple-android-22a53e5a2d74302ca9f4b26b3ea3b9b0.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);