/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1291b7f79aa6a5bd15e3e30fb522eb1b"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e635fae2.js",
    "revision": "2eb262513aac20c2a5119f22b7dbcd18"
  },
  {
    "url": "assets/js/10.b8edf7f6.js",
    "revision": "3fcdc68a8f34de681c921e04d1f70024"
  },
  {
    "url": "assets/js/11.88dff0d6.js",
    "revision": "dfe1845088c9358a74fc236834bfad1d"
  },
  {
    "url": "assets/js/12.9e1937cd.js",
    "revision": "aee9468cab208e1bfc31e02f0746a6d1"
  },
  {
    "url": "assets/js/13.de5c66c5.js",
    "revision": "c70ba53a3119f5fc6c3727734cd6ad1e"
  },
  {
    "url": "assets/js/14.3f0d052a.js",
    "revision": "de5fd8fa3ad9f8b91548726e40acb258"
  },
  {
    "url": "assets/js/15.59f45f0b.js",
    "revision": "0064623557b3f9797e41146b6a62c88a"
  },
  {
    "url": "assets/js/16.626cd527.js",
    "revision": "4aa35797213045fb204357bc1d34e67f"
  },
  {
    "url": "assets/js/17.3b36edcb.js",
    "revision": "26cbe109030e63440d9ae64e09a6f553"
  },
  {
    "url": "assets/js/18.a1ee3e49.js",
    "revision": "c654ff6efe2ec80bca26192a7737f595"
  },
  {
    "url": "assets/js/19.fe619e33.js",
    "revision": "5845cb6629166a58c5c4506e349ace42"
  },
  {
    "url": "assets/js/20.0e20278c.js",
    "revision": "86bca81d9315991adcaa70fd549be415"
  },
  {
    "url": "assets/js/21.1bf6f5bf.js",
    "revision": "841a9c62c6b4ee27d9d12ac89ac79e18"
  },
  {
    "url": "assets/js/22.7afcb408.js",
    "revision": "a72056ff5ab10edbdadb08a3ce2c4da2"
  },
  {
    "url": "assets/js/23.86bfe4f1.js",
    "revision": "4aeef92c47a8a1458f33196b41cfd505"
  },
  {
    "url": "assets/js/24.ce472c5a.js",
    "revision": "9827b03c07ca5f54a9d9b9d7511a6139"
  },
  {
    "url": "assets/js/25.2b5aa4f1.js",
    "revision": "eb2a74205b91550fb0d825641d7d9b3c"
  },
  {
    "url": "assets/js/26.46ba914d.js",
    "revision": "c8e3a120821ad86d8bc1b1c91d599725"
  },
  {
    "url": "assets/js/27.66649abe.js",
    "revision": "d9c213be2d3b3c427919516fde99d67c"
  },
  {
    "url": "assets/js/28.c0dc7d2e.js",
    "revision": "e22cbdde694c24fc59491443e616ae94"
  },
  {
    "url": "assets/js/29.efed0785.js",
    "revision": "0315e88bcb28a814e2f6a89c312cb63c"
  },
  {
    "url": "assets/js/30.cc115f9c.js",
    "revision": "d55c358c48274a4a330db913796c9fb4"
  },
  {
    "url": "assets/js/31.77ea1489.js",
    "revision": "67ff9518d7b200ccc8316201ff914d27"
  },
  {
    "url": "assets/js/32.8955e070.js",
    "revision": "e5446e706e99c1412efa4de0e64dbffc"
  },
  {
    "url": "assets/js/33.7287f72c.js",
    "revision": "6f055b08ce73e3b6f4150c616f5c5cf7"
  },
  {
    "url": "assets/js/34.46b08da5.js",
    "revision": "d426cd4c4f0f25c2dbaf04d58a9a7900"
  },
  {
    "url": "assets/js/35.78d6814f.js",
    "revision": "fad105c2e377a463fa1077e91d6b7c0e"
  },
  {
    "url": "assets/js/4.a660c83c.js",
    "revision": "81f4a9d296d727f40e62382aab0a6c19"
  },
  {
    "url": "assets/js/5.7b2af5b2.js",
    "revision": "e687812fd5cee0a4c940a5106290307a"
  },
  {
    "url": "assets/js/6.d8f34113.js",
    "revision": "94f0f6e6302c378b7ad05bc5b019793c"
  },
  {
    "url": "assets/js/7.2325a184.js",
    "revision": "364deacb148d6f78e8a0d67a6f88d1cd"
  },
  {
    "url": "assets/js/8.3795d00c.js",
    "revision": "f8bc441779e903b11693a9b24fcbaceb"
  },
  {
    "url": "assets/js/9.107708be.js",
    "revision": "158a0b9d0ec5e8c0530fd4f4df5e9a81"
  },
  {
    "url": "assets/js/app.932a0b46.js",
    "revision": "b5191e58e5fb4e01d813396f378943f3"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.e4663826.js",
    "revision": "53c49965bfb5de1cf9c7f5a4359e45e9"
  },
  {
    "url": "avatar.png",
    "revision": "8ec6657e9de21620128f20e48293b733"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "2f7f068bf265493e703c3f92ab02a7e8"
  },
  {
    "url": "categories/index.html",
    "revision": "1d79d333ea869f181bae5f412e182468"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "88f58be63b70f30d378f36713babdff4"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "ca23d4db34cfdf465ffba476d29ee44e"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "d6cdb14665ff8635bfa1c7ecc94db284"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "66d56c79a4711481d3b30def0d2cf1df"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "cde78b638b1e620a2235850717e37d1f"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "3ce183486757505fc39ffb4b128f91ba"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "6e482f7b408e3f3b35cfa2d19cbd2de1"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "3404b6ce0e6f01762971789bb70f59d7"
  },
  {
    "url": "categories/面向对象/index.html",
    "revision": "757fa1e36b4ad589b9c9f6c072d58315"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "1884eb54ff135dfea568bb5cd220fbd1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "437e91f614d315b6c6c23664400ffdcb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3c1f86bc41862b1484f5f907bc5cbd3c"
  },
  {
    "url": "tags/ES6+/index.html",
    "revision": "a365d07edd2a3673ccf148ccd0b82f41"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "dfaa54bfe713f8e5066644e9bbed7736"
  },
  {
    "url": "tags/HTTP协议/index.html",
    "revision": "30f11e0e5b2a88828ec68d25e5767712"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "dd1d81981bc4739740cee05413c2ae91"
  },
  {
    "url": "tags/NodeJS/index.html",
    "revision": "96e54256029b11c5cddda39d9c00253a"
  },
  {
    "url": "tags/React/index.html",
    "revision": "c8165b852f2a52710551dd773128c8c0"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "542760479a2eb4a5c416af276ba44b44"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "f949c27649a10b1156c35490b277417c"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "34e736aca8d6ed662acf750feb9654d6"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "2da09847adfac95a2d5c6bf6627b9878"
  },
  {
    "url": "tags/前端面试/index.html",
    "revision": "176d8c027c86f492053c9986b9a16b7f"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "9f2c1b00b735fb643112768176f18aec"
  },
  {
    "url": "tags/深化前端学习/index.html",
    "revision": "7766772ad933d4aece3212c7c9c4e60f"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "3e46635a4e3d08e7c910d1027b0ce269"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "5829a67b4041119652ceb38d5e4b613c"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d89a27430c4d1066aee958a58252e11"
  },
  {
    "url": "view.png",
    "revision": "676971f69e0bd57e75f30d6546a0a1f9"
  },
  {
    "url": "初级教程/ES6/ES6.html",
    "revision": "22bd56e1f31af6e21d589b9b47a0e4c9"
  },
  {
    "url": "初级教程/index.html",
    "revision": "2fb9ed231de16093ac2baf678a27f005"
  },
  {
    "url": "初级教程/JavaScript/JavaScript.html",
    "revision": "0df04df99eaa2f8b9334de6da1f0d7cf"
  },
  {
    "url": "初级教程/TypeScript/TypeScript.html",
    "revision": "4bb5c7da774eca95200a7fa0d5798bf0"
  },
  {
    "url": "工程化/Git/Git.html",
    "revision": "3b2b41f1dee8d1686fb30dd986ee029d"
  },
  {
    "url": "工程化/index.html",
    "revision": "7916c787d77999a3fc3c150815ef9700"
  },
  {
    "url": "工程化/Vite/Vite.html",
    "revision": "cfd8e18b838fbdc3f5e68b090c4ba9a7"
  },
  {
    "url": "工程化/Webpack/Webpack.html",
    "revision": "911c3288d89bfe8e173b07251a9ee674"
  },
  {
    "url": "工程化/计算机网络/计算机网络.html",
    "revision": "e2a5af09c32bd04fdaf8a58a1cee7a1c"
  },
  {
    "url": "编程经典/index.html",
    "revision": "de6f9d2bcd153949c20b37f21a95b851"
  },
  {
    "url": "编程经典/代码整洁之道/代码整洁之道.html",
    "revision": "11f3ee381a795e1e59541949cbd4e087"
  },
  {
    "url": "编程经典/数据结构与算法/数据结构与算法.html",
    "revision": "eb0ad0ff6cf696358528f9da4f33177a"
  },
  {
    "url": "编程经典/设计模式/设计模式.html",
    "revision": "d208e03f5e6eecd9356c799c32e9201c"
  },
  {
    "url": "编程经典/面向对象/面向对象.html",
    "revision": "08c63c1c8d6170dc235bd614135d4967"
  },
  {
    "url": "面试之道/index.html",
    "revision": "96265470620773a075be1c362db8e590"
  },
  {
    "url": "面试之道/前端中级/fe.html",
    "revision": "00c63e428fac0a1404727101c826fded"
  },
  {
    "url": "面试之道/前端初级/fe.html",
    "revision": "5f080130ff66023c764798f2ad0a0b66"
  },
  {
    "url": "面试之道/前端高级/fe.html",
    "revision": "97e9d09b7f9ee19e4f3e6a3b7efcf3aa"
  },
  {
    "url": "高级框架/index.html",
    "revision": "e5f5a62526650fd35ede9d1140f10d00"
  },
  {
    "url": "高级框架/NodeJS/NodeJS.html",
    "revision": "1be1c65cfc66878f68a7cd8de1a4a4d6"
  },
  {
    "url": "高级框架/React/React.html",
    "revision": "b29fc42a4e48d3f9dd67823f3b65d3a4"
  },
  {
    "url": "高级框架/Vue/Vue.html",
    "revision": "939a2cb9744c42d37332be5646ea47c3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
