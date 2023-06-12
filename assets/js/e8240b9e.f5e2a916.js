"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66005],{35318:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var o=i(27378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return i?o.createElement(m,r(r({ref:t},c),{},{components:i})):o.createElement(m,r({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<n;u++)r[u]=i[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},46404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=i(25773),a=(i(27378),i(35318));const n={sidebar_position:10},r="Zip Images and Upload to Google Drive on Windows",l={unversionedId:"general/Tutorials/zip-images-upload-googledrive-windows",id:"version-v0.10.1/general/Tutorials/zip-images-upload-googledrive-windows",title:"Zip Images and Upload to Google Drive on Windows",description:"This tutorial will show you how to zip files on your file system and then upload them to Google Drive with askui.",source:"@site/versioned_docs/version-v0.10.1/general/06-Tutorials/zip-images-upload-googledrive-windows.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/zip-images-upload-googledrive-windows",permalink:"/docs/general/Tutorials/zip-images-upload-googledrive-windows",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-v0.10.1/general/06-Tutorials/zip-images-upload-googledrive-windows.md",tags:[],version:"v0.10.1",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Like on Spotify Desktop App",permalink:"/docs/general/Tutorials/spotify-tutorial"},next:{title:"Troubleshooting",permalink:"/docs/general/Troubleshooting/"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code",id:"code",level:2},{value:"Open the Folder askui",id:"open-the-folder-askui",level:2},{value:"Select All Images and Zip Them",id:"select-all-images-and-zip-them",level:2},{value:"Open Google Chrome",id:"open-google-chrome",level:2},{value:"Navigate to Google Drive",id:"navigate-to-google-drive",level:2},{value:"Find Zip-File and Upload",id:"find-zip-file-and-upload",level:2},{value:"Complete Code",id:"complete-code",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zip-images-and-upload-to-google-drive-on-windows"},"Zip Images and Upload to Google Drive on Windows"),(0,a.kt)("p",null,"This tutorial will show you how to zip files on your file system and then upload them to Google Drive with askui."),(0,a.kt)("div",{class:"cookieconsent-optout-marketing"},"Please ",(0,a.kt)("a",{href:"javascript:Cookiebot.renew()"},"accept marketing-cookies")," to watch this video."),(0,a.kt)("div",{class:"cookieconsent-optin-marketing"},(0,a.kt)("a",{href:"javascript:rerunCookieConsentScripts()"},"Please click to watch this video.")),(0,a.kt)("iframe",{width:"560",height:"315","data-cookieblock-src":"https://www.youtube-nocookie.com/embed/i3M5SPYQTKI&embedded=true","data-cookieconsent":"marketing",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{href:"../Getting%20Started/getting-started",target:"_blank"},"askui installation guide and write your first instruction")),(0,a.kt)("li",{parentName:"ul"},"Create a folder named ",(0,a.kt)("em",{parentName:"li"},"askui")," on your desktop and put some files into it"),(0,a.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable at ",(0,a.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.js"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You are working from Windows Operating System"),(0,a.kt)("li",{parentName:"ul"},"Create a folder ",(0,a.kt)("em",{parentName:"li"},"askui")," on your desktop"),(0,a.kt)("li",{parentName:"ul"},"Copy some images to it"),(0,a.kt)("li",{parentName:"ul"},"Change the view mode of the folder to ",(0,a.kt)("em",{parentName:"li"},"miniature")," so the images show a little preview"),(0,a.kt)("li",{parentName:"ul"},"You have to be logged in into your Google Account"),(0,a.kt)("li",{parentName:"ul"},"Link to a Google Drive Folder"),(0,a.kt)("li",{parentName:"ul"},"Desktop icon with the name ",(0,a.kt)("em",{parentName:"li"},"Google Chrome")," that opens Google Chrome"))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"After running the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx askui init")," command as described in the setup you will have a file ",(0,a.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts"),". In this file, add a new workflow (",(0,a.kt)("inlineCode",{parentName:"p"},"it"),"-code-block) inside the body of the callback passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the askui suite */, () => {\n    ... (other workflows)\n\n    it('Should upload screenshots folder on google drive', async () => {\n\n    });\n});\n")),(0,a.kt)("h2",{id:"open-the-folder-askui"},"Open the Folder askui"),(0,a.kt)("p",null,"Next, we want to click on the folder where our images are stored and open it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.click().text().withText('askui').exec();\nawait aui.mouseDoubleLeftClick().exec();\n")),(0,a.kt)("h2",{id:"select-all-images-and-zip-them"},"Select All Images and Zip Them"),(0,a.kt)("p",null,"Select the first image and then use the shortcut ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + A")," to select all images in the folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// The text to insert here should be something in the opened explorer window.\n// Usually there is 'This PC' or 'Quick Access' there.\n// Watch the video if you are not sure how the element-descriptor works.\nawait aui.click().image().nearestTo().text().withText('This PC').exec();\nawait aui.pressTwoKeys('control', 'A').exec();\n\nawait aui.mouseRightClick().exec();\nawait aui.click().text().withText('Compress to Zip file').exec();\nawait aui.type('askui screenshots').exec();\nawait aui.pressKey('enter').exec();\n")),(0,a.kt)("h2",{id:"open-google-chrome"},"Open Google Chrome"),(0,a.kt)("p",null,"Now we minimize the window and find the shortcut with the word ",(0,a.kt)("em",{parentName:"p"},"Google")," on the desktop.\nThe mouse pointer moves to it and double-clicks to open it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();\nawait aui.click().text().withText('Google').exec();\nawait aui.mouseDoubleLeftClick().exec();\n")),(0,a.kt)("h2",{id:"navigate-to-google-drive"},"Navigate to Google Drive"),(0,a.kt)("p",null,"After opening Chrome the Google search page appears if you do not use profiles. The Google Drive-Link will be typed into the search field and thus opened when ",(0,a.kt)("em",{parentName:"p"},"Enter"),"-Key is pressed."),(0,a.kt)("p",null,"Do not forget to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<Your Google drive link to the folder>"),"!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Omit this step if you do not use profiles in chrome\nawait aui.click().text().withText('<Your profile>').nearestTo().text().withText('work').exec();\n\nawait aui.typeIn('<Your Google drive link to the folder').textfield().contains().text().withText('Search Google or type a URL').exec();\nawait aui.pressKey('enter').exec();\n")),(0,a.kt)("h2",{id:"find-zip-file-and-upload"},"Find Zip-File and Upload"),(0,a.kt)("p",null,"Within the Google Drive folder, a mouse-right-click opens the context menu. There we click on ",(0,a.kt)("em",{parentName:"p"},"File upload"),", navigate to our zip-file location and upload it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await aui.mouseRightClick().exec();\nawait aui.click().text().withText('File upload').exec();\nawait aui.click().text().withText('Desktop').exec();\nawait aui.click().text().withText('askui').exec();\nawait aui.pressKey('enter').exec();\nawait aui.click().text().withText('askui screenshots').exec();\nawait aui.click().text().withText('Open').exec();\n")),(0,a.kt)("h2",{id:"complete-code"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the askui suite */, () => {\n\n    it('Should upload screenshots folder on google drive', async () => {\n        await aui.click().text().withText('askui').exec();\n        await aui.mouseDoubleLeftClick().exec();\n\n        // The text to insert here should be something in the opened explorer window.\n        // Usually there is 'This PC' or 'Quick Access' there.\n        // Watch the video if you are not sure how the selector works.\n        await aui.click().image().nearestTo().text().withText('This PC').exec();\n        await aui.pressTwoKeys('control', 'A').exec();\n\n        await aui.mouseRightClick().exec();\n        await aui.click().text().withText('Compress to Zip file').exec();\n        await aui.type('askui screenshots').exec();\n        await aui.pressKey('enter').exec();\n\n        await aui.click().icon().withText('minus').nearestTo().icon().withText('stop').exec();\n        await aui.click().text().withText('Google').exec();\n        await aui.mouseDoubleLeftClick().exec();\n\n        // Omit this step if you do not use profiles in chrome\n        await aui.click().text().withText('<Your profile>').nearestTo().text().withText('work').exec();\n        await aui.typeIn('<Your Google drive link to the folder').textfield().contains().text().withText('Search Google or type a URL').exec();\n        await aui.pressKey('enter').exec();\n\n        await aui.mouseRightClick().exec();\n        await aui.click().text().withText('File upload').exec();\n        await aui.click().text().withText('Desktop').exec();\n        await aui.click().text().withText('askui').exec();\n        await aui.pressKey('enter').exec();\n        await aui.click().text().withText('askui screenshots').exec();\n        await aui.click().text().withText('Open').exec();\n    });\n});\n")),(0,a.kt)("p",null,"To run this automation use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts")," command."),(0,a.kt)("p",null,"If you have a recurring or persisting issue, don\u2019t hesitate to ",(0,a.kt)("a",{parentName:"p",href:"https://bit.ly/3ekHnGR"},"ask the community")," for help. You can be sure that your questions will be answered there. We\u2019re excited to hear about how you apply askui to your projects."),(0,a.kt)("p",null,"If you have any feature requests, please feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://bit.ly/3AP20T7"},"post them in our Featurebase board"),"."),(0,a.kt)("p",null,"Best regards and happy automating!"))}p.isMDXComponent=!0}}]);