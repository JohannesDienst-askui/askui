"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38505],{35318:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var a=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=u(o),d=n,g=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return o?a.createElement(g,s(s({ref:t},p),{},{components:o})):a.createElement(g,s({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var u=2;u<i;u++)s[u]=o[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},11490:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=o(25773),n=(o(27378),o(35318));const i={},s="Desktop App Automation Tutorial",r={unversionedId:"general/Tutorials/spotify-tutorial",id:"version-0.7.1/general/Tutorials/spotify-tutorial",title:"Desktop App Automation Tutorial",description:"The following tutorial shows how to automate a desktop application. As an example we will automatically like songs in the Spotify desktop application.",source:"@site/versioned_docs/version-0.7.1/general/06-Tutorials/spotify-tutorial.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/spotify-tutorial",permalink:"/docs/0.7.1/general/Tutorials/spotify-tutorial",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.7.1/general/06-Tutorials/spotify-tutorial.md",tags:[],version:"0.7.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Online Shop Test Tutorial",permalink:"/docs/0.7.1/general/Tutorials/shop-demo"},next:{title:"Zip Images and Upload them to Google Drive on Windows OS Tutorial",permalink:"/docs/0.7.1/general/Tutorials/zip-images-upload-googledrive-windows"}},l={},u=[{value:"Setup",id:"setup",level:2},{value:"Test",id:"test",level:2},{value:"1. Navigate to the Search Page",id:"1-navigate-to-the-search-page",level:3},{value:"2. Search for a Song",id:"2-search-for-a-song",level:3},{value:"3. Open Menu for a Song",id:"3-open-menu-for-a-song",level:3},{value:"4. Check Whether the Song was Added to Liked Songs",id:"4-check-whether-the-song-was-added-to-liked-songs",level:3},{value:"5. Remove Song from Like Songs",id:"5-remove-song-from-like-songs",level:3},{value:"Result",id:"result",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"desktop-app-automation-tutorial"},"Desktop App Automation Tutorial"),(0,n.kt)("p",null,"The following tutorial shows how to automate a desktop application. As an example we will automatically like songs in the Spotify desktop application."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Follow the ",(0,n.kt)("a",{href:"../Getting%20Started/getting-started",target:"_blank"},"complete askui installation guide and write your first test")),(0,n.kt)("li",{parentName:"ul"},"Open the Spotify desktop application on your screen",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable at ",(0,n.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.js"))))),(0,n.kt)("h2",{id:"test"},"Test"),(0,n.kt)("p",null,"After running the ",(0,n.kt)("inlineCode",{parentName:"p"},"npx askui init")," command as described in the setup you will have a file ",(0,n.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts"),". In this file add a new test inside the body of the callback passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"describe")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the test suite */, () => {\n    ... (other tests)\n\n    it('should like Spotify song', async () => {\n\n    });\n});\n")),(0,n.kt)("h3",{id:"1-navigate-to-the-search-page"},"1. Navigate to the Search Page"),(0,n.kt)("p",null,"First, we need to open the search page where we can look for a song:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n});\n")),(0,n.kt)("h3",{id:"2-search-for-a-song"},"2. Search for a Song"),(0,n.kt)("p",null,"Then we can use the search field (a textfield) to search a song:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n});\n")),(0,n.kt)("h3",{id:"3-open-menu-for-a-song"},"3. Open Menu for a Song"),(0,n.kt)("p",null,"On the search result page we need to right click a song to open the menu for the song:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n});\n")),(0,n.kt)("p",null,'As the text "Bohemian Rhapsody" is present on the page multiple times, we are specifying the position of the text we want to click further by saying that it is the one below the text "Songs".'),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"We expect that the song has not yet been liked (although we totally understand if this is the case - we like it, too \ud83d\ude09 - but just for the sake of this test, let's unlike it or use another song).")),(0,n.kt)("h3",{id:"4-check-whether-the-song-was-added-to-liked-songs"},"4. Check Whether the Song was Added to Liked Songs"),(0,n.kt)("p",null,"Finally, we want to check whether the song was actually added to the liked songs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n});\n")),(0,n.kt)("h3",{id:"5-remove-song-from-like-songs"},"5. Remove Song from Like Songs"),(0,n.kt)("p",null,"To be able to run the test again, it is necessary to reset the state of Spotify, or more specifically, your liked songs. One option would be to add the following commands to your test in order to remove the song from the liked songs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n")),(0,n.kt)("h2",{id:"result"},"Result"),(0,n.kt)("p",null,"The following code block shows the complete code for the Spotify automation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n")),(0,n.kt)("p",null,"To run this test use the ",(0,n.kt)("inlineCode",{parentName:"p"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts ")," command."))}c.isMDXComponent=!0}}]);