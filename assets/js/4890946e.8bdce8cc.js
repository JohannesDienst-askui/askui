"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29941],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(25773),i=(a(27378),a(35318));const r={sidebar_position:5},o="Flutter Sample Android App",l={unversionedId:"general/Tutorials/flutter-android-sample-app",id:"version-0.7.2/general/Tutorials/flutter-android-sample-app",title:"Flutter Sample Android App",description:"This tutorial shows how to use askui to automate an Android app built with Flutter. We provide the source code for the Flutter demo app used in this tutorial (GitHub repository). Set up the demo app by following the instructions below. This tutorial assumes that you already have your Android device prepared. It can be a real Android device or an Android Emulator.",source:"@site/versioned_docs/version-0.7.2/general/06-Tutorials/flutter-android-sample-app.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/flutter-android-sample-app",permalink:"/docs/0.7.2/general/Tutorials/flutter-android-sample-app",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.2/general/06-Tutorials/flutter-android-sample-app.md",tags:[],version:"0.7.2",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Automate Web Search on Android Devices with askui",permalink:"/docs/0.7.2/general/Tutorials/android-search-in-browser"},next:{title:"Google Cat Search Tutorial",permalink:"/docs/0.7.2/general/Tutorials/google-cat-search"}},s={},c=[{value:"Live Demo in Action (playback speed x3)",id:"live-demo-in-action-playback-speed-x3",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Build and Run Flutter Demo App",id:"1-build-and-run-flutter-demo-app",level:3},{value:"3. Setup askui",id:"3-setup-askui",level:2},{value:"Breaking Down the askui Code",id:"breaking-down-the-askui-code",level:2},{value:"0. General Tips for Using askui as a More Friendly Tool:",id:"0-general-tips-for-using-askui-as-a-more-friendly-tool",level:2},{value:"1. Click and Type",id:"1-click-and-type",level:3},{value:"Datepicker",id:"datepicker",level:2},{value:"Take a Picture with the Camera",id:"take-a-picture-with-the-camera",level:2},{value:"Complete askui Code",id:"complete-askui-code",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flutter-sample-android-app"},"Flutter Sample Android App"),(0,i.kt)("p",null,"This tutorial shows how to use askui to automate an Android app built with ",(0,i.kt)("a",{parentName:"p",href:"https://flutter.dev/"},"Flutter"),". We provide the source code for the Flutter demo app used in this tutorial (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/askui/flutter-example-automation"},"GitHub repository"),"). Set up the demo app by following the instructions below. This tutorial assumes that you already have your Android device prepared. It can be a real Android device or an Android Emulator."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you haven't set up your Android device or Emulator yet, ",(0,i.kt)("a",{parentName:"strong",href:"/docs/0.7.2/general/Tutorials/setup-android"},"follow this tutorial"),".")),(0,i.kt)("p",null,"This tutorial includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build and Run the Flutter Demo App"),(0,i.kt)("li",{parentName:"ul"},"Set up the ADBKeyboard"),(0,i.kt)("li",{parentName:"ul"},"Click/Touch Automation"),(0,i.kt)("li",{parentName:"ul"},"Type Automation"),(0,i.kt)("li",{parentName:"ul"},"Swipe Automation")),(0,i.kt)("h2",{id:"live-demo-in-action-playback-speed-x3"},"Live Demo in Action (playback speed x3)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flutter sample app in action",src:a(49244).Z,width:"500",height:"1150"})),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The source code for the Flutter demo app used in this tutorial is provided in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/askui/flutter-example-automation"},"this repository"),"."),(0,i.kt)("h3",{id:"1-build-and-run-flutter-demo-app"},"1. Build and Run Flutter Demo App"),(0,i.kt)("p",null,"1) ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/get-started/install"},"Install Flutter")),(0,i.kt)("p",null,"2) Clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/askui/flutter-example-automation"},"this repository")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"flutter create demo_app")," within the directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/askui/flutter-example-automation\ncd flutter-example-automation\nflutter create demo_app\ncd demo_app\n")),(0,i.kt)("p",null,"3) Install dependencies for the Flutter demo app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# run this command inside the flutter project\n# directory `demo_app/`\nflutter pub add camera intl\n")),(0,i.kt)("p",null,"4) To use the camera, we need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"// inside the 'android/app/build.gradle' \n// set the 'minSdkVersion' to 21\ndefault config {\n  ...\n  minSdkVersion 21\n  ...\n}\n")),(0,i.kt)("p",null,"5) (optional) The app is ready to be built but will throw deprecation warnings. If you want to clear the deprecation warnings, follow this step (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/89578#issuecomment-945916643"},"See also this issue."),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# change the respective part inside the 'pubspec.yaml'\ndependencies:\n  camera:\n    git:\n      url: https://github.com/flutter/plugins\n      path: packages/camera/camera\n      ref: 9e46048ad2e1f085c1e8f6c77391fa52025e681f\n")),(0,i.kt)("p",null,"6) Run the Android Emulator."),(0,i.kt)("p",null,"7) Run the demo app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flutter run\n")),(0,i.kt)("p",null,"Now you should see the demo app running on your Android device."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Setup ADBKeyboard\nIn this example, we are going to automate the typing on the Android device. To let askui fluently type as desired, we will use a virtual keyboard that handles the keyboard input via adb: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/senzhk/ADBKeyBoard"},"ADBKeyboard.apk"))),(0,i.kt)("p",null,"\u200d\n1) Download the ADBKeyboard package (Important: Version 2.0): ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0"},"Link to GitHub Repository")),(0,i.kt)("p",null,"2) Unzip it."),(0,i.kt)("p",null,"3) Find your device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Make sure that your Android device is connected, and the USB debugging mode is enabled\nadb devices\n")),(0,i.kt)("p",null,"4) Install the ADBKeyboard on the device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# inside ADBKeyBoard-2.0/\nadb -s <your device id> install ADBKeyboard.apk\n")),(0,i.kt)("p",null,"5) Configure the ADB Keyboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# inside ADBKeyBoard-2.0/\nadb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME\n")),(0,i.kt)("p",null,"6) Enable the ADB Keyboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# inside ADBKeyBoard-2.0/\nadb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME\n")),(0,i.kt)("p",null,"7) To check if it is enabled:"),(0,i.kt)("p",null,"Click on a textfield in an app and see if the ",(0,i.kt)("inlineCode",{parentName:"p"},"ADB Keyboard {ON}")," notification is shown at the bottom of the screen."),(0,i.kt)("h2",{id:"3-setup-askui"},"3. Setup askui"),(0,i.kt)("p",null,"1) Setup askui by following the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.7.2/general/Getting%20Started/getting-started"},"Getting Started Guide"),"."),(0,i.kt)("p",null,"2) We need to run the UiController directly with an extra argument to specify the runtime mode, as the current version of askui(version 0.7.2) doesn't provide the API for running it with the runtime argument yet.\nFrom within your npm project path, go to the directory that contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-ui-controller")," binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd <YOUR_PROJECT_DIRECTORY>/node_modules/askui/dist/release/latest/<YOUR_PLATFORM>\n./askui-ui-controller -r android\n# for example, macOS: cd node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/./askui-ui-controller -r android\n# If you can't find the binary as described above,\n# then you might have askui freshly installed and haven't run it yet.\n# The binary gets downloaded as the askui code runs.\n# Run the command below to run the askui code:\nnpx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts\n")),(0,i.kt)("p",null,"If you got them both (emulator and UiController) running, then we are ready to go for the UI automation."),(0,i.kt)("p",null,"\u200d\n3) You need to deactivate a few lines of the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"test/helper/jest.setup.ts")," that is running the UiController, because we are already running it manually in the previous step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// file location: test/helper/jest.setup.ts\n// comment out every line that uses uiController\n\nimport { UiControlClient, UiController } from 'askui';\n\n// uiController: UiController;\n\nlet aui: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n//   uiController = new UiController({\n//     /**\n//      * Select the display you want to run your tests on, display 0 is your main display;\n//      * ignore if you have only one display\n//      */\n//     display: 0,\n//   });\n\n//   await uiController.start();\n\naui = await UiControlClient.build({\n    credentials:{\n        workspaceId: 'YOUR_WORKSPACEID_FROM_USER_PORTAL',\n        token: 'YOUR_TOKEN_FROM_USER_PORTAL',\n    }\n});\n\nawait aui.connect();\n});\n\nafterAll(async () => {\n//   await uiController.stop();\n\naui.close();\n});\n\nexport { aui };\n")),(0,i.kt)("h2",{id:"breaking-down-the-askui-code"},"Breaking Down the askui Code"),(0,i.kt)("p",null,"This chapter will walk you through the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-test/demo-automation.ts")," step by step.\nThe code is divided into three parts, and each part automates a different tab within the demo app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Outline tab"),": Find a textfield and type in characters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Datepicker tab"),": Select a desired date within the date picker widget."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Camera tab"),": Open the camera and push the record button.")),(0,i.kt)("h2",{id:"0-general-tips-for-using-askui-as-a-more-friendly-tool"},"0. General Tips for Using askui as a More Friendly Tool:"),(0,i.kt)("p",null,"1) Try to annotate : Use ",(0,i.kt)("inlineCode",{parentName:"p"},"await aui.annotateInteractively()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"await aui.annotate()")," in order to see how askui is understanding the visible elements on your screen. By using ",(0,i.kt)("inlineCode",{parentName:"p"},"await aui.annotate()"),", the result of the annotation will be saved in the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"report/")," as an HTML file."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Be aware of the screen size of your device"),": askui understands your application based on the screen shown and captured. Therefore, on some occasions, you may want to know your screen size to e.g. properly scroll or swipe within your application. You may need to change the numbers for the ",(0,i.kt)("inlineCode",{parentName:"p"},"input swipe")," command within the provided code so that it suits the screen size of your device."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Try to select the elements by their text")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"tip: If you are using a device with a bigger screen e.g. Tablet, then the screen of your device (real Android device or emulator) might be big enough to see the whole page without scrolling.")),(0,i.kt)("h3",{id:"1-click-and-type"},"1. Click and Type"),(0,i.kt)("p",null,"The code is within the file ",(0,i.kt)("inlineCode",{parentName:"p"},"askui-test/demo-automation.ts"),". Copy and paste the code into your askui code."),(0,i.kt)("p",null,"We start the run from the very first tab of our demo app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"First tab of the demo app",src:a(92797).Z,width:"400",height:"920"})),(0,i.kt)("p",null,"To type into a textfield, we first need to get focus on the desired textfield. We can achieve it by running the code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// click on the textfield and type characters\n// repeat this as many times as the textfields\nawait aui.click().text().withText('Enter your username').exec();\nawait aui.type('askui').exec();\n")),(0,i.kt)("p",null,"As we have multiple of textfields in our demo app, we can iterate the same procedure for each of them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// click on the textfield and type characters\n// repeat this as many times as the textfields\nawait aui.click().text().withText('Enter your username').exec();\nawait aui.type('askui').exec();\n\n// click and type the email address\nawait aui.click().text().withText('Enter your email').exec();\nawait aui.type('askui@askui.com').exec();\n\n// Click and type the address\nawait aui.click().text().withText('Enter your address').exec();\nawait aui.type('Haid-und-Neu-Stra\xdfe 18').exec();\n\n// Pressing enter is the equivalent of pressing the return button on the on-screen-keyboard\n// This gets rid of the focus from the textfield\nawait aui.pressAndroidKey('enter').exec();\n")),(0,i.kt)("p",null,"After filling up the textfields, we can push the buttons at the bottom of the page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Press the 'Submit' button\nawait aui.click().text().withText('Submit').exec();\n\n// We will have a popup window that has two buttons. Press the 'Refuse' button\nawait aui.click().text().withText('Refuse').exec();\n\n// Here we press multiple toggle buttons one by one\nawait aui.click().text().withText('Banana').exec();\nawait aui.click().text().withText('Mango').exec();\nawait aui.click().text().withText('Sunny').exec();\nawait aui.click().text().withText('Rainy').exec();\nawait aui.click().text().withText('Windy').exec();\n\n// Attention for swiping!\n/*  Swipe/scroll within the page\n  - execOnShell() can run shell commands within the device via adb.\n  - Note that, you have to adjust the four numeric parameters,\n          in order to make it fit to your device's screen.\n  - The syntax is:\n      input swipe <startX> <startY> <endX> <endY>\n  - Depending on the screen size of your device,\n          the coordinates should stay within the scrollable/swipeable area of the app.\n          i.e. the 'Tabbar' at the top of the demo app is not scrollable.\n*/\n\n// Here we swipe the page two times in a row\nawait aui.execOnShell('input swipe 1000 1000 100 1000').exec();\nawait aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n")),(0,i.kt)("h2",{id:"datepicker"},"Datepicker"),(0,i.kt)("p",null,"After running the code above, we should see the demo app swiped to the Datepicker tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Datepicker tab of the demo app",src:a(60182).Z,width:"400",height:"920"})),(0,i.kt)("p",null,"First, we select and type characters into two different textfields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// First, we type in the desired values into the textfields.\nawait aui.click().text().withText('Title').exec();\nawait aui.type('My vacation plan').exec();\nawait aui.click().text().withText('Description').exec();\nawait aui.type('0. Drink a lot of water').exec();\nawait aui.pressAndroidKey('tab').exec();\n")),(0,i.kt)("p",null,"Thereafter, we interact with two different date picker widgets that are represented with edit buttons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Second, we select a desired date from the Datepicker widget.\n// Notice how we select the icon 'chevron right/left' to shift the calendar month.\nawait aui.click().text().withText('edit').nearestTo().text().withText('Depature').exec(); // this will open up the calendar\nawait aui.click().icon().withText('chevron right').exec();\n\n// within the calendar, we push the > icon on the top right corner\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().text().withText('7').exec(); // select 7\nawait aui.click().text().withText('ok').exec(); // then, press OK\n\n// Repeat the step for the next Datepicker widget.\nawait aui.click().text().withText('edit').nearestTo().text().withText('Return').exec();\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().icon().withText('chevron right').exec();\nawait aui.click().text().withText('5').exec();\nawait aui.click().text().withText('ok').exec();\n")),(0,i.kt)("p",null,"Let's go further below to the bottom of the page, and then interact with more interfaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// click and check the checkbox\nawait aui.click().checkboxUnchecked().nearestTo().text().withText('Brushed Teeth').exec();\n\n// finally, we turn on the switch\nawait aui.click().switchDisabled().nearestTo().text().withText('Enable feature').exec();\n\n// Swipe the page to the Camera tab\nawait aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n")),(0,i.kt)("h2",{id:"take-a-picture-with-the-camera"},"Take a Picture with the Camera"),(0,i.kt)("p",null,"In the final tab ",(0,i.kt)("strong",{parentName:"p"},"Camera"),", we can launch the device's camera and take a picture by pressing the record button.\n\u200d\n",(0,i.kt)("img",{alt:"Camera tab of the demo app",src:a(86361).Z,width:"400",height:"920"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Click on the button 'Take a Picture', then it will launch the camera\nawait aui.click().button().contains().text().withText('Take a Picture').exec();\n\n// Notice how we select the record button.\n// Our demo-app intends to have the record button in a circular shape.\n// So we can look for an icon which is a 'circle'\n// It might be different in other applications.\nawait aui.click().icon().containsText('circle').exec();\n")),(0,i.kt)("h2",{id:"complete-askui-code"},"Complete askui Code"),(0,i.kt)("p",null,"This is the complete code that runs askui to automate our workflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n    xit('annotate', async () => {\n        await aui.annotateInteractively();\n    });\n\n    it('should fill up the textfields and push buttons', async () => {\n        // click on the textfield and type characters\n        // repeat this as many times as the textfields\n        await aui.click().text().withText('Enter your username').exec();\n        await aui.type('askui').exec();\n\n        // click on the textfield and type the email        \n        await aui.click().text().withText('Enter your email').exec();\n        await aui.type('askui@askui.com').exec();\n\n        // Click and type the address\n        await aui.click().text().withText('Enter your address').exec();\n        await aui.type('Haid-und-Neu-Stra\xdfe 18').exec();\n\n        // Pressing enter is the equivelant to pressing the return button on the on-screen-keyboard\n        // This gets rid of the focus from the textfield\n        await aui.pressAndroidKey('enter').exec();\n\n        // Press the 'Submit' button\n        await aui.click().text().withText('Submit').exec();\n\n        // We will have a popup window that has two buttons. Press the 'Refuse' button\n        await aui.click().text().withText('Refuse').exec();\n\n        // Here we press multiple of toggle buttons one by one\n        await aui.click().text().withText('Banana').exec();\n        await aui.click().text().withText('Mango').exec();\n        await aui.click().text().withText('Sunny').exec();\n        await aui.click().text().withText('Rainy').exec();\n        await aui.click().text().withText('Windy').exec();\n\n\n        // Attention for swiping!\n        /*  Swipe/scroll within the page\n            - execOnShell() can run shell commands within the device via adb.\n            - Note that, you have to adjust the four numeric parameters,\n            in order to make it fit to your device's screen.\n            - The syntax is:\n                input swipe <startX> <startY> <endX> <endY>\n            - Depending on the screen size of your device,\n            the coordinates should stay within the scrollable/swipeable area of the app.\n            i.e. the 'Tabbar' at the top of the demo app is not scrollable.\n        */\n\n        // Here we swipe the page two times in a row\n        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n    });\n\n\n    it('should pick the dates', async () => {\n        // First, we type in the desired values into the textfields.\n        await aui.click().text().withText('Title').exec();\n        await aui.type('My vacation plan').exec();\n        await aui.click().text().withText('Description').exec();\n        await aui.type('0. Drink a lot of water').exec();\n        await aui.pressAndroidKey('tab').exec();\n\n        // Second, we select a desired date from the Datepicker widget.\n        // Notice how we select the icon 'chevron right/left' to shift the calendar month.\n        await aui.click().text().withText('edit').nearestTo().text().withText('Depature').exec(); // this will open up the calendar\n        await aui.click().icon().withText('chevron right').exec(); // within the calendar, we push the > icon on the top right corner\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().text().withText('7').exec(); // select 7\n        await aui.click().text().withText('ok').exec(); // then, press OK\n\n\n        // Repeat the step for the next Datepicker widget.\n        await aui.click().text().withText('edit').nearestTo().text().withText('Return').exec();\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().icon().withText('chevron right').exec();\n        await aui.click().text().withText('5').exec();\n        await aui.click().text().withText('ok').exec();\n\n        // click and check the checkbox\n        await aui.click().checkboxUnchecked().nearestTo().text().withText('Brushed Teeth').exec();\n\n        // finally, we turn on the switch\n        await aui.click().switchDisabled().nearestTo().text().withText('Enable feature').exec();\n\n        // Swipe the page to the Camera tab\n        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();\n\n    });\n\n    it('should take a picture', async ()=>{\n        // Click on the button 'Take a Picture', then it will launch the camera\n        await aui.click().button().contains().text().withText('Take a Picture').exec();\n\n        // Notice how we select the record button.\n        // Our demo-app intends to have the record button in a circular shape.\n        // So we can look for an icon which is a 'circle'\n        // It might be different in other applications.\n        await aui.click().icon().containsText('circle').exec();\n    });\n});\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"After following through this tutorial, you should be able to automate the interaction with the provided demo app. Although this example specifically provides a demo app built with Flutter, the overall method of using askui should also work with any mobile app running on an Android device."),(0,i.kt)("p",null,"If you got an issue while following this example, or in case you would like to share your use case, don't hesitate to join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/Gu35zMGxbx"},"community on Discord"),"!"))}p.isMDXComponent=!0},49244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flutter-sample-app-tutorial-inaction-fast-37aaf824b73d76a71f33e14caff6ea6d.gif"},92797:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flutter-sample-app-first-tab-32e06ede2d0c14a60a842a8847dfffc9.jpeg"},60182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flutter-sample-app-second-tab-datepicker-959286810e6ec154cae2251afaa31f4e.jpeg"},86361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flutter-sample-app-third-tab-camera-bb636ef6dfebae3212373ca1dcec6b28.jpeg"}}]);