"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48355],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(25773),i=(n(27378),n(35318));const o={},r="Setting up Android Devices for Testing Mobile Apps",l={unversionedId:"general/Tutorials/setup-android",id:"version-0.6.1/general/Tutorials/setup-android",title:"Setting up Android Devices for Testing Mobile Apps",description:"In this tutorial, we will walk you through how to set up an Android device for developing and testing mobile apps running on Android devices. Depending on the testing environment, i.e. whether it is a real Android device or an emulator, the procedure might slightly differ. But the overall process of the setup will be more or less the same.",source:"@site/versioned_docs/version-0.6.1/general/06-Tutorials/setup-android.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/setup-android",permalink:"/docs/0.6.1/general/Tutorials/setup-android",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.6.1/general/06-Tutorials/setup-android.md",tags:[],version:"0.6.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Google Cat Search Tutorial",permalink:"/docs/0.6.1/general/Tutorials/google-cat-search"},next:{title:"Online Shop Test Tutorial",permalink:"/docs/0.6.1/general/Tutorials/shop-demo"}},d={},s=[{value:"Requirements",id:"requirements",level:2},{value:"1. Install Android SDK Command-line Tools",id:"1-install-android-sdk-command-line-tools",level:2},{value:"2. Set up the Test Device",id:"2-set-up-the-test-device",level:2},{value:"Set up a Real Android Device",id:"set-up-a-real-android-device",level:3},{value:"Set up an Android Emulator",id:"set-up-an-android-emulator",level:3},{value:"Set Up SDK Command Line Tools without Android Studio",id:"set-up-sdk-command-line-tools-without-android-studio",level:2},{value:"Case01: Set Up for the Android Emulator",id:"case01-set-up-for-the-android-emulator",level:3},{value:"Case02: Set Up for a Real Android Device",id:"case02-set-up-for-a-real-android-device",level:3},{value:"3. Set Up the ADBKeyboard",id:"3-set-up-the-adbkeyboard",level:2},{value:"4. Done",id:"4-done",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-android-devices-for-testing-mobile-apps"},"Setting up Android Devices for Testing Mobile Apps"),(0,i.kt)("p",null,"In this tutorial, we will walk you through how to set up an Android device for developing and testing mobile apps running on Android devices. Depending on the testing environment, i.e. whether it is a real Android device or an emulator, the procedure might slightly differ. But the overall process of the setup will be more or less the same. "),(0,i.kt)("p",null,"If you want to set up the development environment for Android devices without the Android Studio, then skip the ",(0,i.kt)("strong",{parentName:"p"},"1. Install Android SDK Command-line Tools")," and go to ",(0,i.kt)("a",{parentName:"p",href:"#set-up-sdk-command-line-tools-without-android-studio"},"Set up SDK Command Line Tools without Android Studio")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")," installed."),(0,i.kt)("li",{parentName:"ul"},"(optional) Android device, if you want to run your app on a real device")),(0,i.kt)("h2",{id:"1-install-android-sdk-command-line-tools"},"1. Install Android SDK Command-line Tools"),(0,i.kt)("p",null,"If you have the Android Studio installed, you have to verify if you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Android SDK Command-line Tools")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Android SDK Platform-Tools")," installed. They both are packages containing several command line tools that are useful for developing apps for Android devices."),(0,i.kt)("p",null,"To verify the installation of them, "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"More Actions")," button, and then"),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"SDK Manager"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"more-action",src:n(12621).Z,width:"1824",height:"1424"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Android SDK")," from the list on the left side of the window."),(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"SDK Tools")," tab, and check the ",(0,i.kt)("inlineCode",{parentName:"li"},"Android SDK Command-line Tools")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"Android SDK Platform-Tools"),". After clicking the OK button, it will start to install the tools we have selected.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"android-sdk-tools",src:n(18826).Z,width:"2188",height:"1640"})),(0,i.kt)("h2",{id:"2-set-up-the-test-device"},"2. Set up the Test Device"),(0,i.kt)("p",null,"After installing the necessary tools in the Android Studio, we can start to set up the Android device that we want to use for the development."),(0,i.kt)("h3",{id:"set-up-a-real-android-device"},"Set up a Real Android Device"),(0,i.kt)("p",null,"This part is for setting up a real Android device. If you want to use the Android Emulator instead, then you can skip it and go directly to the next step."),(0,i.kt)("p",null,"To use additional development features in an Android device, we need to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"Developer Options")," within the device. To enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"Developer Options"),", tap the ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Number")," option 7 times. You can find this option in one of the following locations, depending on your Android version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android 9 (API level 28) and higher: ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"About Phone")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Build Number")),(0,i.kt)("li",{parentName:"ul"},"Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"About Phone")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Build Number")),(0,i.kt)("li",{parentName:"ul"},"Android 7.1 (API level 25) and lower: ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"About Phone")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Build Number"))),(0,i.kt)("p",null,"After enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Developer Options"),", we can enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"USB debugging")," option. This option will allow the Android Studio and other SDK tools to recognize your Android device via USB. To enable USB debugging, toggle the USB debugging option in the Developer Options menu. You can find this option in one of the following locations, depending on your Android version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android 9 (API level 28) and higher: ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Advanced")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Developer Options")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"USB debugging")),(0,i.kt)("li",{parentName:"ul"},"Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Developer Options")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"USB debugging")),(0,i.kt)("li",{parentName:"ul"},"Android 7.1 (API level 25) and lower: ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Developer Options")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"USB debugging"))),(0,i.kt)("h3",{id:"set-up-an-android-emulator"},"Set up an Android Emulator"),(0,i.kt)("p",null,"If you want to use the Android Emulator for testing purposes, we have to create a virtual device that runs in the emulator. After running the Android Studio,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"More Actions")," button, and then"),(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"Virtual Device Manager"))),(0,i.kt)("p",null,"If no virtual device is created, we can create one by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create device")," button on the top left corner of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Device Manager")," window."),(0,i.kt)("p",null,"You will now see the ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Device Configuration")," window. Within the configuration window, you will be asked to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose a hardware profile"),(0,i.kt)("li",{parentName:"ul"},"Choose a system image")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"virtual-device-configuration",src:n(29070).Z,width:"2224",height:"1572"})),(0,i.kt)("p",null,"The hardware profile represents the specification of the hardware that will be used as a virtual device. Various presets of Android devices e.g. Pixel or Nexus are provided. But you can also create your own hardware profile, after which you will be customizing parameters in such:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Screen size"),(0,i.kt)("li",{parentName:"ul"},"Resolution"),(0,i.kt)("li",{parentName:"ul"},"Using Hardware buttons (Back, Home, Menu, Volume, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Using On-device sensors (Accelerometer, Gyroscope, GPS)")),(0,i.kt)("p",null,"After choosing a hardware profile, we will be choosing a system image for the Android device. Here we can choose out of a variety of Android images, from the latest Android 13 Tiramisu down to the Android 7 Nougat. If you have the Android studio freshly installed and haven't used it yet, then it will start to download the image after selecting one."),(0,i.kt)("p",null,"After finishing creating a new virtual device, we will be able to see our new device listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Device Manager"),". Click the device's play button(\u25b6\ufe0f) to run it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"device-created",src:n(69912).Z,width:"1824",height:"1302"})),(0,i.kt)("h2",{id:"set-up-sdk-command-line-tools-without-android-studio"},"Set Up SDK Command Line Tools without Android Studio"),(0,i.kt)("h3",{id:"case01-set-up-for-the-android-emulator"},"Case01: Set Up for the Android Emulator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio#command-tools"},"Android SDK Command-Line Tools"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the necessary tools:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# create a directory for the cli-tools, and move the .zip file into the directory\nmkdir android_sdk\ncd android_sdk\nmv <PATH_TO_YOUR_DOWNLOADED_ZIP_FILE> .\n# unzip the donwloaded file, and put the contents in the new directory 'latest/'\nunzip commandlinetools-<YOUR_PLATFORM>-8512546_latest.zip\nmkdir cmdline-tools/latest\ncd cmdline-tools/latest\nmv ../* .\n# The hierarchy of the 'android_sdk/':\n  \u2514- android_sdk/\n     \u251c- cmdline-tools/\n        \u251c- latest/\n           \u251c- bin/\n           \u251c- lib/\n           \u251c- NOTICE.txt\n           \u2514- source.properties\n# Install platform and build tools\n# You can fetch the complete list of available packages via:\nbin/sdkmanager --list\n# Install the desired package and tools via:\nbin/sdkmanager --install \"system-images;android-33;google_apis;x86_64\"\n# The above command will download and install the tools in the sdk_root (android_sdk/)\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Download and install the Emulator:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bin/sdkmanager --install "emulator" \n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create a new avd device:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bin/avdmanager create avd -n mytestdevice -k "system-images;android-33;google_apis;x86_64"\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Check if the avd device is available:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# go to the 'emulator/' directory, and run the command\ncd ../../emulator\n./emulator -list-avds\n")),(0,i.kt)("p",null,"Now you should see your newly created avd device ",(0,i.kt)("inlineCode",{parentName:"p"},"mytestdevice")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Run the emulator:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./emulator -avd mytestdevice\n")),(0,i.kt)("h3",{id:"case02-set-up-for-a-real-android-device"},"Case02: Set Up for a Real Android Device"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("strong",{parentName:"p"},"SDK Platform-Tools")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/releases/platform-tools"},"official site"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unzip the .zip file. You can find the ",(0,i.kt)("strong",{parentName:"p"},"adb")," binary within the extracted directory."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd platform-tools\n# Show every available Android devices\n./adb devices\n")),(0,i.kt)("h2",{id:"3-set-up-the-adbkeyboard"},"3. Set Up the ADBKeyboard"),(0,i.kt)("p",null,"Until now, we have prepared our Android device and now we are ready to go for testing our Android app. But before we jump into the test phase, we will set up one more utility that will make the test procedure easier."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/senzhk/ADBKeyBoard"},"ADBKeyboard")," is a virtual keyboard that can be installed on Android devices. It enables us to type within the Android device by using command lines via adb."),(0,i.kt)("p",null,"One noticeable advantage of using ADBKeyboard is that it can also handle base64 encoding, which becomes handy if you want to type Unicode characters such as emojis\ud83d\udd25 For more details about this virtual keyboard, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/senzhk/ADBKeyBoard/blob/master/README.md"},"see here"),"."),(0,i.kt)("p",null,"To install the ADBKeyboard on your device,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ADBKeyboard package from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0"},"this GitHub Repository")," ",(0,i.kt)("em",{parentName:"p"},"(Important: Version 2.0)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unzip it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find your device:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# make sure that your Android device is connected.\n# in case of using the emulator, it should be running\nadb devices\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ADBKeyboard on the device:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# inside ADBKeyBoard-2.0/\nadb -s <your device id> install ADBKeyboard.apk\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the ADB Keyboard:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the ADBKeyboard:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"adb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To check if it is enabled:\nClick on a textfield in an app and see if the ",(0,i.kt)("inlineCode",{parentName:"p"},"ADB Keyboard {ON}")," notification is shown at the bottom of the screen."))),(0,i.kt)("h2",{id:"4-done"},"4. Done"),(0,i.kt)("p",null,"We are finally done with the preparation for testing apps running on Android devices. In the next post, we will cover a simple test automation case utilizing ",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/3FGspGO"},"askui")," on the device we set up in this article."),(0,i.kt)("p",null,"If you have a recurring or persisting issue while following this tutorial, don\u2019t hesitate to ask the ",(0,i.kt)("a",{parentName:"p",href:"https://bit.ly/3T2je6C"},"Discord community")," for help!"))}u.isMDXComponent=!0},18826:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-sdk-tools-c8abb58b7fd8d008446ff1b0dd1de9e4.png"},69912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/device-created-e413673c0844b5c84d2af480ef677e3e.png"},12621:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/more-action-1baf03788e67578280da16e0fbdc94fe.png"},29070:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/virtual-device-configuration-1701860c807078b15938a1e3661d3762.png"}}]);