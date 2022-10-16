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
    "revision": "e9c7bd1873aff1dcc761f850de881ce3"
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
    "url": "assets/js/11.89a779e0.js",
    "revision": "1f1d43debb4ab1117f22e4b7c6695c9e"
  },
  {
    "url": "assets/js/12.9e1937cd.js",
    "revision": "aee9468cab208e1bfc31e02f0746a6d1"
  },
  {
    "url": "assets/js/13.875deb0b.js",
    "revision": "bad97589152ba17fea720201df3cbb5f"
  },
  {
    "url": "assets/js/14.8ec5ff99.js",
    "revision": "1d38b4274beff5c395ab4541680abe05"
  },
  {
    "url": "assets/js/15.6ecf7211.js",
    "revision": "46510b4c4c49d51aacb8c055df07e526"
  },
  {
    "url": "assets/js/16.d8c15314.js",
    "revision": "ca0427a4e08f310a218641888fe91978"
  },
  {
    "url": "assets/js/17.20c06251.js",
    "revision": "6d44909f2f445c81db4436bcfb66a5f3"
  },
  {
    "url": "assets/js/18.0e4f1f4a.js",
    "revision": "a14c72f7571c8ce3a4519952ac697121"
  },
  {
    "url": "assets/js/19.c390d8e2.js",
    "revision": "2b30a08facf569e5d4b1aca9a0823685"
  },
  {
    "url": "assets/js/20.6995cf3f.js",
    "revision": "cf7998e93bf2b3e6631d218c5f7c77f3"
  },
  {
    "url": "assets/js/21.583194e0.js",
    "revision": "7f893b6d408d08142be539ed4de7b52b"
  },
  {
    "url": "assets/js/22.c588c189.js",
    "revision": "9a6f25c12a6467afb4a075df151317e9"
  },
  {
    "url": "assets/js/23.46db141a.js",
    "revision": "e1233bf2179b6fb4cf4c662dba564de8"
  },
  {
    "url": "assets/js/24.879554e1.js",
    "revision": "8dfab2396e8e65a981c589fdbbc5904b"
  },
  {
    "url": "assets/js/25.ab5a2d8a.js",
    "revision": "c06e062c326e258d6e3eeec300fd4bba"
  },
  {
    "url": "assets/js/26.9370c087.js",
    "revision": "c0aed1af055dbfe6d1e108398e96a628"
  },
  {
    "url": "assets/js/27.5802b695.js",
    "revision": "86072248b9e392be97989ffeeccb3538"
  },
  {
    "url": "assets/js/28.698e97b8.js",
    "revision": "44fec038708fa323707c2bd6d945416d"
  },
  {
    "url": "assets/js/29.c20ae476.js",
    "revision": "10488a60cb9053f59d5b6433eaaa7d42"
  },
  {
    "url": "assets/js/30.78c5ee4f.js",
    "revision": "d122c43a322f9887c6a95b73cee85dd9"
  },
  {
    "url": "assets/js/31.db6d5c51.js",
    "revision": "1783e5ca596f202cdcb02c257c1f0f59"
  },
  {
    "url": "assets/js/32.4965c058.js",
    "revision": "1b5a5f0d73835624538583176b58c216"
  },
  {
    "url": "assets/js/33.7ff80424.js",
    "revision": "36e989ba6cd04188f37f9f9d880bef6e"
  },
  {
    "url": "assets/js/34.a96a9708.js",
    "revision": "d8a2fc758c8aefd6e312ddb16e028824"
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
    "url": "assets/js/app.a1634493.js",
    "revision": "1f725398136cda7ac584b5d2bd0d6d80"
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
    "revision": "5237ea0401fa9f9bef288c1284a65d02"
  },
  {
    "url": "categories/index.html",
    "revision": "c052ac41dd18139251644d6ee924db63"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "6a6cf40d7f4664a8e2fdf4e0b187ce7d"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "e9ba3b58e8054c72237f79ceffc9308c"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "1e2beb644a2efa6fd25bdbd4b4ed67dc"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "f9531f88460a1da773d25123fbe50cbd"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "efaa37ef154f76a52c2cb1b47bb16d67"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "fea71527c56d5e1d5988c52f490974bb"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "5c34d7b8ac809c53153b574f90e545e3"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "3e39ff1007183a25e049ec4b22775e31"
  },
  {
    "url": "categories/面向对象/index.html",
    "revision": "af62a2ee68d5743896d66518bea60603"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "efafcde599ce231d19dd0bfab6e7e6c3"
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
    "revision": "8e9b575e4bdb511c295be826fce38af8"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6aab5079384309ed9eb0149291d365bb"
  },
  {
    "url": "tags/ES6+/index.html",
    "revision": "707d8136a87ae5065986fd868c19049a"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "b3f1f42f23c9ab189b172c099f7303c7"
  },
  {
    "url": "tags/HTTP协议/index.html",
    "revision": "b9ab5bd3807612a8056534fd0903e90f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "dac48856746efec3d91cb126a7e8b512"
  },
  {
    "url": "tags/NodeJS/index.html",
    "revision": "ebd1c9581f60bfb95ea9f223df71ecf7"
  },
  {
    "url": "tags/React/index.html",
    "revision": "ec69deb6870e16fc79bbb347776de60e"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "87e1ae3f3ac6b14bd123aefb055f3491"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "6b8f5f8bfca6addfe82487d29486a6a8"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "41aae4beb994316de25f703a880934c2"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "a0e0c67bfaadbc267e0e95c0b53cf93e"
  },
  {
    "url": "tags/前端面试/index.html",
    "revision": "e387326f5aecefa7403b2979f3daaf8c"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "6b86b29f8b55581c91fb8f055be0edb9"
  },
  {
    "url": "tags/深化前端学习/index.html",
    "revision": "cd915997f1e703e41b33ded4b7b3f5f9"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "168094767010d26250b12d414310383b"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "684bf2f97db824a33ac1c2aaba2d678d"
  },
  {
    "url": "timeline/index.html",
    "revision": "66b60d7766bc92e13e11d60bce717b7e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "初级教程/ES6/ES6.html",
    "revision": "63e892ac00be374e34f576e6e83c84f2"
  },
  {
    "url": "初级教程/index.html",
    "revision": "99d06a656014d04792805cbf36f8b3f8"
  },
  {
    "url": "初级教程/JavaScript/JavaScript.html",
    "revision": "2fe1efe5286e5589f03e4904047b81fc"
  },
  {
    "url": "初级教程/TypeScript/TypeScript.html",
    "revision": "d57c0960f72331aa695a15d735819e61"
  },
  {
    "url": "工程化/Git/Git.html",
    "revision": "abb8adbed1ac8069e68ac4d2c181937c"
  },
  {
    "url": "工程化/index.html",
    "revision": "e08bce1dea18590a5bcebcdc46b7e228"
  },
  {
    "url": "工程化/Vite/Vite.html",
    "revision": "1da3c69752ecb90779f17ef07235b364"
  },
  {
    "url": "工程化/Webpack/Webpack.html",
    "revision": "70026b25b6c7dffdc8022840835c2875"
  },
  {
    "url": "工程化/计算机网络/计算机网络.html",
    "revision": "a97c3cfb050cd770455f9ef263eea282"
  },
  {
    "url": "编程经典/index.html",
    "revision": "077e78a1774da86127e7c31b52c16580"
  },
  {
    "url": "编程经典/数据结构与算法/数据结构与算法.html",
    "revision": "a00f2bd2d4eba447e6df34e628977057"
  },
  {
    "url": "编程经典/设计模式/设计模式.html",
    "revision": "05223e3844962846979aefac1d752445"
  },
  {
    "url": "编程经典/面向对象/面向对象.html",
    "revision": "a2a56574f3731f8c011bd16c5e8ecec8"
  },
  {
    "url": "面试之道/index.html",
    "revision": "eb425bf50fbf6efa91b6567cd05dd042"
  },
  {
    "url": "面试之道/前端中级/fe.html",
    "revision": "87a5f2ba365ff3afb248725c992e6806"
  },
  {
    "url": "面试之道/前端初级/fe.html",
    "revision": "bdf85fa6ed8e0ecd0e5db4d2f49cf2d9"
  },
  {
    "url": "面试之道/前端高级/fe.html",
    "revision": "c3518e1c6e9ae293b4fcda9165abddfa"
  },
  {
    "url": "高级框架/index.html",
    "revision": "02e617d3c12645a54134ff29a65b1316"
  },
  {
    "url": "高级框架/NodeJS/NodeJS.html",
    "revision": "3b8f428db78325643232da564434020d"
  },
  {
    "url": "高级框架/React/React.html",
    "revision": "82a35268b72bc82e3080da9377c689c1"
  },
  {
    "url": "高级框架/Vue/Vue.html",
    "revision": "5cdef2133c710b7a248d55eb49d234f1"
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
