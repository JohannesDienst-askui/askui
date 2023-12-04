"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50696],{27165:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var o=i(85893),d=i(11151);const t={sidebar_position:4,title:"Mobile Automation"},s=void 0,r={id:"general/Executing Automations/mobile-automation",title:"Mobile Automation",description:"Index",source:"@site/versioned_docs/version-0.12.0/general/04-Executing Automations/mobile-automation.md",sourceDirName:"general/04-Executing Automations",slug:"/general/Executing Automations/mobile-automation",permalink:"/docs/0.12.0/general/Executing Automations/mobile-automation",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.12.0/general/04-Executing Automations/mobile-automation.md",tags:[],version:"0.12.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Mobile Automation"},sidebar:"docsSidebar",previous:{title:"Web Automation",permalink:"/docs/0.12.0/general/Executing Automations/web-automation"},next:{title:"Desktop Automation",permalink:"/docs/0.12.0/general/Executing Automations/desktop-automation"}},l={},a=[{value:"Android Automation",id:"android-automation",level:2},{value:"Requirements",id:"requirements",level:3},{value:"1. Install Android SDK Command-line Tools",id:"1-install-android-sdk-command-line-tools",level:3},{value:"2. Set up the Test Device",id:"2-set-up-the-test-device",level:3},{value:"Set up a Real Android Device",id:"set-up-a-real-android-device",level:4},{value:"Set up an Android Emulator",id:"set-up-an-android-emulator",level:4},{value:"Set Up SDK Command Line Tools without Android Studio",id:"set-up-sdk-command-line-tools-without-android-studio",level:3},{value:"Case01: Set Up for the Android Emulator",id:"case01-set-up-for-the-android-emulator",level:4},{value:"Case02: Set Up for a Real Android Device",id:"case02-set-up-for-a-real-android-device",level:4},{value:"3. Set Up the ADBKeyboard",id:"3-set-up-the-adbkeyboard",level:3},{value:"4. Done",id:"4-done",level:3},{value:"iOS Automation",id:"ios-automation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Index"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"#android-automation",children:"Android Automation"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"#ios-automation",children:"iOS Automation"})}),"\n",(0,o.jsx)(n.h2,{id:"android-automation",children:"Android Automation"}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will walk you through how to set up an Android device for automating mobile apps running on Android devices. Depending on the environment, i.e. whether it is a real Android device or an emulator, the procedure might slightly differ. But the overall process of the setup will be more or less the same."}),"\n",(0,o.jsxs)(n.p,{children:["If you want to set up the development environment for Android devices without the Android Studio, then skip the ",(0,o.jsx)(n.strong,{children:"1. Install Android SDK Command-line Tools"})," and go to ",(0,o.jsx)(n.a,{href:"#set-up-sdk-command-line-tools-without-android-studio",children:"Set up SDK Command Line Tools without Android Studio"})]}),"\n",(0,o.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://developer.android.com/studio",children:"Android Studio"})," installed."]}),"\n",(0,o.jsx)(n.li,{children:"(optional) Android device, if you want to run your app on a real device"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-install-android-sdk-command-line-tools",children:"1. Install Android SDK Command-line Tools"}),"\n",(0,o.jsxs)(n.p,{children:["If you have the Android Studio installed, you have to verify if you have the ",(0,o.jsx)(n.code,{children:"Android SDK Command-line Tools"})," and the ",(0,o.jsx)(n.code,{children:"Android SDK Platform-Tools"})," installed. They both are packages containing several command line tools that are useful for developing apps for Android devices."]}),"\n",(0,o.jsx)(n.p,{children:"To verify the installation of them,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.code,{children:"More Actions"})," button, and then"]}),"\n",(0,o.jsxs)(n.li,{children:["Open the ",(0,o.jsx)(n.code,{children:"SDK Manager"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"more-action",src:i(85038).Z+"",width:"1824",height:"1424"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Then, select ",(0,o.jsx)(n.code,{children:"Android SDK"})," from the list on the left side of the window."]}),"\n",(0,o.jsxs)(n.li,{children:["Go to the ",(0,o.jsx)(n.code,{children:"SDK Tools"})," tab, and check the ",(0,o.jsx)(n.code,{children:"Android SDK Command-line Tools"})," and the ",(0,o.jsx)(n.code,{children:"Android SDK Platform-Tools"}),". After clicking the OK button, it will start to install the tools we have selected."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"android-sdk-tools",src:i(40241).Z+"",width:"2188",height:"1640"})}),"\n",(0,o.jsx)(n.h3,{id:"2-set-up-the-test-device",children:"2. Set up the Test Device"}),"\n",(0,o.jsx)(n.p,{children:"After installing the necessary tools in the Android Studio, we can start to set up the Android device that we want to use for the development."}),"\n",(0,o.jsx)(n.h4,{id:"set-up-a-real-android-device",children:"Set up a Real Android Device"}),"\n",(0,o.jsx)(n.p,{children:"This part is for setting up a real Android device. If you want to use the Android Emulator instead, then you can skip it and go directly to the next step."}),"\n",(0,o.jsxs)(n.p,{children:["To use additional development features in an Android device, we need to enable the ",(0,o.jsx)(n.code,{children:"Developer Options"})," within the device. To enable the ",(0,o.jsx)(n.code,{children:"Developer Options"}),", tap the ",(0,o.jsx)(n.code,{children:"Build Number"})," option 7 times. You can find this option in one of the following locations, depending on your Android version:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Android 9 (API level 28) and higher: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"About Phone"})," > ",(0,o.jsx)(n.code,{children:"Build Number"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"System"})," > ",(0,o.jsx)(n.code,{children:"About Phone"})," > ",(0,o.jsx)(n.code,{children:"Build Number"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 7.1 (API level 25) and lower: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"About Phone"})," > ",(0,o.jsx)(n.code,{children:"Build Number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After enabling the ",(0,o.jsx)(n.code,{children:"Developer Options"}),", we can enable the ",(0,o.jsx)(n.code,{children:"USB debugging"})," option. This option will allow the Android Studio and other SDK tools to recognize your Android device via USB. To enable USB debugging, toggle the USB debugging option in the Developer Options menu. You can find this option in one of the following locations, depending on your Android version:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Android 9 (API level 28) and higher: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"System"})," > ",(0,o.jsx)(n.code,{children:"Advanced"})," > ",(0,o.jsx)(n.code,{children:"Developer Options"})," > ",(0,o.jsx)(n.code,{children:"USB debugging"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"System"})," > ",(0,o.jsx)(n.code,{children:"Developer Options"})," > ",(0,o.jsx)(n.code,{children:"USB debugging"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 7.1 (API level 25) and lower: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"Developer Options"})," > ",(0,o.jsx)(n.code,{children:"USB debugging"})]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"set-up-an-android-emulator",children:"Set up an Android Emulator"}),"\n",(0,o.jsx)(n.p,{children:"If you want to use the Android Emulator for automation purposes, we have to create a virtual device that runs in the emulator. After running the Android Studio,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.code,{children:"More Actions"})," button, and then"]}),"\n",(0,o.jsxs)(n.li,{children:["Open the ",(0,o.jsx)(n.code,{children:"Virtual Device Manager"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If no virtual device is created, we can create one by clicking the ",(0,o.jsx)(n.code,{children:"Create device"})," button on the top left corner of the ",(0,o.jsx)(n.code,{children:"Virtual Device Manager"})," window."]}),"\n",(0,o.jsxs)(n.p,{children:["You will now see the ",(0,o.jsx)(n.code,{children:"Virtual Device Configuration"})," window. Within the configuration window, you will be asked to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Choose a hardware profile"}),"\n",(0,o.jsx)(n.li,{children:"Choose a system image"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"virtual-device-configuration",src:i(53273).Z+"",width:"2224",height:"1572"})}),"\n",(0,o.jsx)(n.p,{children:"The hardware profile represents the specification of the hardware that will be used as a virtual device. Various presets of Android devices e.g. Pixel or Nexus are provided. But you can also create your own hardware profile, after which you will be customizing parameters in such:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Screen size"}),"\n",(0,o.jsx)(n.li,{children:"Resolution"}),"\n",(0,o.jsx)(n.li,{children:"Using Hardware buttons (Back, Home, Menu, Volume, etc.)"}),"\n",(0,o.jsx)(n.li,{children:"Using On-device sensors (Accelerometer, Gyroscope, GPS)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After choosing a hardware profile, we will be choosing a system image for the Android device. Here we can choose out of a variety of Android images, from the latest Android 13 Tiramisu down to Android 7 Nougat. If you have Android studio freshly installed and haven't used it yet, then it will start to download the image after selecting one."}),"\n",(0,o.jsxs)(n.p,{children:["After finishing creating a new virtual device, we will be able to see our new device listed in the ",(0,o.jsx)(n.code,{children:"Device Manager"}),". Click the device's play button(","\u25b6\ufe0f",") to run it."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"device-created",src:i(93582).Z+"",width:"1824",height:"1302"})}),"\n",(0,o.jsx)(n.h3,{id:"set-up-sdk-command-line-tools-without-android-studio",children:"Set Up SDK Command Line Tools without Android Studio"}),"\n",(0,o.jsx)(n.h4,{id:"case01-set-up-for-the-android-emulator",children:"Case01: Set Up for the Android Emulator"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download the ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio#command-tools",children:"Android SDK Command-Line Tools"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install the necessary tools:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# create a directory for the cli-tools, and move the .zip file into the directory\nmkdir android_sdk\ncd android_sdk\nmv <PATH_TO_YOUR_DOWNLOADED_ZIP_FILE> .\n# unzip the donwloaded file, and put the contents in the new directory 'latest/'\nunzip commandlinetools-<YOUR_PLATFORM>-8512546_latest.zip\nmkdir cmdline-tools/latest\ncd cmdline-tools/latest\nmv ../* .\n# The hierarchy of the 'android_sdk/':\n  \u2514- android_sdk/\n     \u251c- cmdline-tools/\n        \u251c- latest/\n           \u251c- bin/\n           \u251c- lib/\n           \u251c- NOTICE.txt\n           \u2514- source.properties\n# Install platform and build tools\n# You can fetch the complete list of available packages via:\nbin/sdkmanager --list\n# Install the desired package and tools via:\nbin/sdkmanager --install \"system-images;android-33;google_apis;x86_64\"\n# The above command will download and install the tools in the sdk_root (android_sdk/)\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Download and install the Emulator:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'bin/sdkmanager --install "emulator" \n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Create a new avd device:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'bin/avdmanager create avd -n mytestdevice -k "system-images;android-33;google_apis;x86_64"\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Check if the avd device is available:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# go to the 'emulator/' directory, and run the command\ncd ../../emulator\n./emulator -list-avds\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now you should see your newly created avd device ",(0,o.jsx)(n.code,{children:"mytestdevice"})]}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsx)(n.li,{children:"Run the emulator:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./emulator -avd mytestdevice\n"})}),"\n",(0,o.jsx)(n.h4,{id:"case02-set-up-for-a-real-android-device",children:"Case02: Set Up for a Real Android Device"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download the ",(0,o.jsx)(n.strong,{children:"SDK Platform-Tools"})," from the ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio/releases/platform-tools",children:"official site"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Unzip the .zip file. You can find the ",(0,o.jsx)(n.strong,{children:"adb"})," binary within the extracted directory."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd platform-tools\n# Show every available Android devices\n./adb devices\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-set-up-the-adbkeyboard",children:"3. Set Up the ADBKeyboard"}),"\n",(0,o.jsx)(n.p,{children:"Until now, we have prepared our Android device and now we are ready to go for automating our Android app. But before we jump into the this phase, we will set up one more utility that will make the procedure easier."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/senzhk/ADBKeyBoard",children:"ADBKeyboard"})," is a virtual keyboard that can be installed on Android devices. It enables us to type within the Android device by using command lines commands via adb."]}),"\n",(0,o.jsxs)(n.p,{children:["One noticeable advantage of using ADBKeyboard is that it can also handle base64 encoding, which becomes handy if you want to type Unicode characters such as emojis","\ud83d\udd25"," For more details about this virtual keyboard, ",(0,o.jsx)(n.a,{href:"https://github.com/senzhk/ADBKeyBoard/blob/master/README.md",children:"see here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To install the ADBKeyboard on your device,"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download the ADBKeyboard package from ",(0,o.jsx)(n.a,{href:"https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0",children:"this GitHub Repository"})," ",(0,o.jsx)(n.em,{children:"(Important: Version 2.0)"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Unzip it."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Find your device:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# make sure that your Android device is connected.\n# in case of using the emulator, it should be running\nadb devices\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install the ADBKeyboard on the device:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# inside ADBKeyBoard-2.0/\nadb -s <your device id> install ADBKeyboard.apk\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the ADB Keyboard:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"adb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Enable the ADBKeyboard:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"adb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To check if it is enabled:\nClick on a textfield in an app and see if the ",(0,o.jsx)(n.code,{children:"ADB Keyboard {ON}"})," notification is shown at the bottom of the screen."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"4-done",children:"4. Done"}),"\n",(0,o.jsx)(n.p,{children:"We are finally done with the preparation for automating apps running on Android devices."}),"\n",(0,o.jsxs)(n.p,{children:["You can now try your setup in our ",(0,o.jsx)(n.a,{href:"/docs/0.12.0/general/Tutorials/android-search-in-browser",children:"Automate Web Search on Android Devices Tutorial"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you have a recurring or persisting issue while following this tutorial, don\u2019t hesitate to ask the ",(0,o.jsx)(n.a,{href:"https://app.outverse.com/askui/community/home",children:"Outverse-Community"})," for help!"]}),"\n",(0,o.jsx)(n.h2,{id:"ios-automation",children:"iOS Automation"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["This page is currently under construction. If you have any questions, please feel free to reach out to ",(0,o.jsx)(n.a,{href:"mailto:info@askui.com",children:"info@askui.com"})," or book a meeting with Jonas ",(0,o.jsx)(n.a,{href:"https://calendly.com/jonas-menesklou/digital-get-to-know",children:"over Calendly"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},40241:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/android-sdk-tools-c8abb58b7fd8d008446ff1b0dd1de9e4.png"},93582:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/device-created-e413673c0844b5c84d2af480ef677e3e.png"},85038:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/more-action-1baf03788e67578280da16e0fbdc94fe.png"},53273:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/virtual-device-configuration-1701860c807078b15938a1e3661d3762.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var o=i(67294);const d={},t=o.createContext(d);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);