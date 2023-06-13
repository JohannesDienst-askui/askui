"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4286],{35318:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(g,s(s({ref:t},c),{},{components:o})):n.createElement(g,s({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},95818:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=o(25773),a=(o(27378),o(35318));const i={sidebar_position:9},s="Like on Spotify Desktop App",r={unversionedId:"general/Tutorials/spotify-tutorial",id:"version-0.10.2/general/Tutorials/spotify-tutorial",title:"Like on Spotify Desktop App",description:"The following tutorial shows how to automate a desktop application. As an example we will automatically to like songs in the Spotify desktop application.",source:"@site/versioned_docs/version-0.10.2/general/06-Tutorials/spotify-tutorial.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/spotify-tutorial",permalink:"/docs/general/Tutorials/spotify-tutorial",draft:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.10.2/general/06-Tutorials/spotify-tutorial.md",tags:[],version:"0.10.2",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Online Shop Login",permalink:"/docs/general/Tutorials/shop-demo"},next:{title:"Zip Images and Upload to Google Drive on Windows",permalink:"/docs/general/Tutorials/zip-images-upload-googledrive-windows"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Code",id:"code",level:2},{value:"1. Navigate to the Search Page",id:"1-navigate-to-the-search-page",level:3},{value:"2. Search for a Song",id:"2-search-for-a-song",level:3},{value:"3. Open Menu for a Song",id:"3-open-menu-for-a-song",level:3},{value:"4. Check Whether the Song was Added to Liked Songs",id:"4-check-whether-the-song-was-added-to-liked-songs",level:3},{value:"5. Remove Song from Like Songs",id:"5-remove-song-from-like-songs",level:3},{value:"Result",id:"result",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"like-on-spotify-desktop-app"},"Like on Spotify Desktop App"),(0,a.kt)("p",null,"The following tutorial shows how to automate a desktop application. As an example we will automatically to like songs in the Spotify desktop application."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{href:"../Getting%20Started/getting-started",target:"_blank"},"askui installation guide and write your first instruction")),(0,a.kt)("li",{parentName:"ul"},"Open the Spotify desktop application on your screen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you have multiple screens, configure the used display by setting the display variable at ",(0,a.kt)("inlineCode",{parentName:"li"},"test/helper/jest.setup.js"))))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("p",null,"After running the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx askui init")," command as described in the setup you will have a file ",(0,a.kt)("inlineCode",{parentName:"p"},"test/my-first-askui-test-suite.test.ts"),". In this file add a new workflow (",(0,a.kt)("inlineCode",{parentName:"p"},"it"),"-code-block) inside the body of the callback passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"describe(/* a string identifying the test suite */, () => {\n    ... (other tests)\n\n    it('should like Spotify song', async () => {\n\n    });\n});\n")),(0,a.kt)("h3",{id:"1-navigate-to-the-search-page"},"1. Navigate to the Search Page"),(0,a.kt)("p",null,"First, we need to open the search page where we can look for a song:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n});\n")),(0,a.kt)("h3",{id:"2-search-for-a-song"},"2. Search for a Song"),(0,a.kt)("p",null,"Then we can use the search field (a textfield) to search a song:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n});\n")),(0,a.kt)("h3",{id:"3-open-menu-for-a-song"},"3. Open Menu for a Song"),(0,a.kt)("p",null,"On the search result page we need to right click a song to open the menu for the song:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n});\n")),(0,a.kt)("p",null,'As the text "Bohemian Rhapsody" is present on the page multiple times, we are specifying the position of the text we want to click further by saying that it is the one below the text "Songs".'),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We expect that the song has not yet been liked (although we totally understand if this is the case - we like it, too \ud83d\ude09 - but just for the sake of this workflow, let's unlike it or use another song).")),(0,a.kt)("h3",{id:"4-check-whether-the-song-was-added-to-liked-songs"},"4. Check Whether the Song was Added to Liked Songs"),(0,a.kt)("p",null,"Finally, we want to check whether the song was actually added to the liked songs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n});\n")),(0,a.kt)("h3",{id:"5-remove-song-from-like-songs"},"5. Remove Song from Like Songs"),(0,a.kt)("p",null,"To be able to run the workflow again, it is necessary to reset the state of Spotify, or more specifically, your liked songs. One option would be to add the following instructions to your code in order to remove the song from the liked songs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    ...\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n")),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"The following code block shows the complete code for the Spotify automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('should like Spotify song', async () => {\n    await aui.click().icon().withText('search').exec();\n    await aui.typeIn('Bohemian Rhapsody').textfield().exec();\n    await aui.pressKey('enter').exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Songs').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Save to your Liked Songs').exec();\n    await aui.click().text().withText('Liked Songs').exec();\n    await aui.expect().text().withText('Bohemian Rhapsody').exists().exec();\n    await aui.moveMouseTo().text().withText('Bohemian Rhapsody').below().text().withText('Title').exec();\n    await aui.mouseRightClick().exec();\n    await aui.click().text().withText('Remove from your Liked Songs').exec();\n});\n")),(0,a.kt)("p",null,"To run this workflow use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx jest test/my-first-askui-test-suite.test.ts --config ./test/jest.config.ts ")," command."))}u.isMDXComponent=!0}}]);