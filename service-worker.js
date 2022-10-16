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
    "revision": "295ce32d4c661804be5f619a462c3669"
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
    "url": "assets/js/12.2da79db9.js",
    "revision": "1017e2acb2add6a737911a86ec985197"
  },
  {
    "url": "assets/js/13.93f55a5e.js",
    "revision": "3876480d24407e19976b07d4356996c0"
  },
  {
    "url": "assets/js/14.f93b523f.js",
    "revision": "157ea7d0fe64d14e469b44e48ae66531"
  },
  {
    "url": "assets/js/15.aceb4afc.js",
    "revision": "2bb069fe63ac4b7682492c6558b4bd0c"
  },
  {
    "url": "assets/js/16.62e52ae5.js",
    "revision": "6aa0cddae76e23bcd38ded40ba752120"
  },
  {
    "url": "assets/js/17.4cf34b2f.js",
    "revision": "6448dd00734a0547bdf1eae490d4db71"
  },
  {
    "url": "assets/js/18.ddac5276.js",
    "revision": "5514348dc691766dbc9ed905bea5aa83"
  },
  {
    "url": "assets/js/19.39b17262.js",
    "revision": "82faad57555fb1bb0fcd0cb7d1938f45"
  },
  {
    "url": "assets/js/20.1f782a4c.js",
    "revision": "25454e0e2732a6d0266640d06f48b542"
  },
  {
    "url": "assets/js/21.a3c5f1d5.js",
    "revision": "ff194dd3e410c64538c039d5d6ae7a85"
  },
  {
    "url": "assets/js/22.a9bcd64c.js",
    "revision": "322f9fc72236f7f0309c156641ff5d2c"
  },
  {
    "url": "assets/js/23.5233e704.js",
    "revision": "aba47b3a98d76a18513fac2057cc4ec7"
  },
  {
    "url": "assets/js/24.c31e3e9f.js",
    "revision": "8dfab2396e8e65a981c589fdbbc5904b"
  },
  {
    "url": "assets/js/25.8519682a.js",
    "revision": "28e3a60039259231170fdfda7e8accdd"
  },
  {
    "url": "assets/js/26.e7b6be28.js",
    "revision": "019c9f5fdbdd0962bb9dfcba0d4ffcb9"
  },
  {
    "url": "assets/js/27.9fcdc823.js",
    "revision": "5485c666293b357978ce6e8f61a7b8b2"
  },
  {
    "url": "assets/js/28.698e97b8.js",
    "revision": "44fec038708fa323707c2bd6d945416d"
  },
  {
    "url": "assets/js/29.3e9ea318.js",
    "revision": "b96d93f7994e6ce6a436f2e5c6980b71"
  },
  {
    "url": "assets/js/30.0f3d1e13.js",
    "revision": "ce67bc07f9afaf1306131f8aa6c64f26"
  },
  {
    "url": "assets/js/31.7ac2ce88.js",
    "revision": "626f90f240b30370bbd18daed3d3d158"
  },
  {
    "url": "assets/js/32.1cc2e18a.js",
    "revision": "461bf8dd309be7086728b7f032b2bb8e"
  },
  {
    "url": "assets/js/33.c00b7fc4.js",
    "revision": "82b7b3407ce43c4d711df277a17b7751"
  },
  {
    "url": "assets/js/34.a3c58ffb.js",
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
    "url": "assets/js/app.d19d9837.js",
    "revision": "6f4721affe2f64c824d49fc4b1a9f915"
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
    "revision": "dbca5146013009a5f00e0ce810977e78"
  },
  {
    "url": "categories/index.html",
    "revision": "f197980122b85580b9ca145187924e81"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "1131f0ad3a4053586c4117ab91fbf4d1"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "827f1472e8ad273198fc6ae79361ed15"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "239a5c75b5c5d3045572ec6c6b673d82"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "6ce351dcc7f127183a7c1052fc3eadb8"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "b648d72ffea838450419a306a9f69d22"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "f87b899e3ad1e200810fb34ea75a0bb1"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "fb749e05c1dc8eb856aa307f72a144ef"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "48e15ac93008a51758829fbf8a654806"
  },
  {
    "url": "categories/面向对象/index.html",
    "revision": "c21d2b7be6dc7e7d9346b3696c4dccc0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e331a9741198b2b5e161cf6028612e50"
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
    "revision": "55ca69cfbf5044b0b4f5cc4284fcad08"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f39627157822cf8d4ec59ed5b773aa68"
  },
  {
    "url": "tags/ES6+/index.html",
    "revision": "d80581cb8ba036811b83acfaff33db1d"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "2f38eb258e0ec38c53c7b07013ac932a"
  },
  {
    "url": "tags/HTTP协议/index.html",
    "revision": "59a86f1477a1ef646c848b980d3dcd11"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "3e89242efc8f5be5b0a87ed5465ac32a"
  },
  {
    "url": "tags/NodeJS/index.html",
    "revision": "ea80704bf095c056e12b4f105e325c72"
  },
  {
    "url": "tags/React/index.html",
    "revision": "eb0ac2603053ecdbb5915f506874fca9"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "65dfc327b76407f2b10db4af9a7f3abb"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "9905e108ed0e21739f65133d4dd51d65"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "4681f8cadb82a147f0ffbd5aec46703f"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "6540fba8fb915c7e142b676f870ee84f"
  },
  {
    "url": "tags/前端面试/index.html",
    "revision": "d44a8490dbf1d11371fe3b8e10ab1cbb"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "ca8ba31acbbccf0cdb04065a921f279b"
  },
  {
    "url": "tags/深化前端学习/index.html",
    "revision": "a78b7fbdfd9c2a2a4aa146c7ef313050"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "cf0abc8b7bb731b4b083103e6e2cd7f7"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "5758c84979815801043263f2160a56a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "62f5b775d380969c8d48616c2c4959e1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "初级教程/ES6+.html",
    "revision": "1d218aabbab686fdc02942326767bf87"
  },
  {
    "url": "初级教程/index.html",
    "revision": "3610837ec80a34a7363422740018239f"
  },
  {
    "url": "初级教程/JavaScript.html",
    "revision": "7a6b6a8bd004a8deeed097f0ff8672fa"
  },
  {
    "url": "初级教程/TypeScript.html",
    "revision": "a47581e86db4b81d706a0555822a1cf7"
  },
  {
    "url": "工程化/Git.html",
    "revision": "913aea767e1a159eabfaeb35b6bb191b"
  },
  {
    "url": "工程化/index.html",
    "revision": "ba10bed19f721fe6b8ee02eb2598c453"
  },
  {
    "url": "工程化/Vite.html",
    "revision": "91a28d88d7b8bd32e902e5199c01983c"
  },
  {
    "url": "工程化/Webpack.html",
    "revision": "73a6b8390a3b43b3e3ea3c676fa0c144"
  },
  {
    "url": "工程化/计算机网络.html",
    "revision": "fc5e879026a711d57c23a54402b8dfac"
  },
  {
    "url": "编程经典/index.html",
    "revision": "06cad43bb2dda31260ed2eb573c150d7"
  },
  {
    "url": "编程经典/数据结构与算法.html",
    "revision": "6dd9a3174796a29e7df37d9a0fb6f5c6"
  },
  {
    "url": "编程经典/设计模式.html",
    "revision": "dbe321f8d9339d49cc2da17019d92612"
  },
  {
    "url": "编程经典/面向对象.html",
    "revision": "20ed73b15bbbd7d930e0dd12de42e83f"
  },
  {
    "url": "面试之道/index.html",
    "revision": "3d267fda5488166670454c4cd86b5006"
  },
  {
    "url": "面试之道/前端中级/fe.html",
    "revision": "d42bcce10fcfa5fe838364f792ae06f4"
  },
  {
    "url": "面试之道/前端初级/fe.html",
    "revision": "2ac4fcd479a09087346e5e6606838b1f"
  },
  {
    "url": "面试之道/前端高级/fe.html",
    "revision": "31245f8978378b7225f79c1edf9b13b0"
  },
  {
    "url": "高级框架/index.html",
    "revision": "7f54870f4aeaa472e3501e7ea17ebf35"
  },
  {
    "url": "高级框架/NodeJS.html",
    "revision": "28e546a692a9977441d613b7cab43030"
  },
  {
    "url": "高级框架/React.html",
    "revision": "dce121e46ebc44b23186aee36d0de6e9"
  },
  {
    "url": "高级框架/Vue.html",
    "revision": "59949cee83392a65ba7f2e37ff67468d"
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
