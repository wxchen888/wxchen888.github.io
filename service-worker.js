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
    "revision": "19ac3cefa54255617f827e73373debf2"
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
    "url": "assets/js/12.2da79db9.js",
    "revision": "1017e2acb2add6a737911a86ec985197"
  },
  {
    "url": "assets/js/13.93f55a5e.js",
    "revision": "3876480d24407e19976b07d4356996c0"
  },
  {
    "url": "assets/js/14.8ec5ff99.js",
    "revision": "1d38b4274beff5c395ab4541680abe05"
  },
  {
    "url": "assets/js/15.bd278d5f.js",
    "revision": "8970699bb13ea55f1906ac402dccdaf2"
  },
  {
    "url": "assets/js/16.d8c15314.js",
    "revision": "ca0427a4e08f310a218641888fe91978"
  },
  {
    "url": "assets/js/17.6fd1205c.js",
    "revision": "9ddbedc292aa9f07a3d989d5ab9a1d66"
  },
  {
    "url": "assets/js/18.0e4f1f4a.js",
    "revision": "a14c72f7571c8ce3a4519952ac697121"
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
    "url": "assets/js/21.d4076ae6.js",
    "revision": "7ba12d6e793b67d14a5963d0785bd1bd"
  },
  {
    "url": "assets/js/22.42f249cc.js",
    "revision": "77a01fdf4d8274f00da4be9094ad9a37"
  },
  {
    "url": "assets/js/23.46db141a.js",
    "revision": "e1233bf2179b6fb4cf4c662dba564de8"
  },
  {
    "url": "assets/js/24.a635b22c.js",
    "revision": "c3928f51755fe7dde6b86d9aae0c2975"
  },
  {
    "url": "assets/js/25.8031d78c.js",
    "revision": "9eb8c233a0c0d471365c94034e1d799c"
  },
  {
    "url": "assets/js/26.a2bdd828.js",
    "revision": "f4c4df94a173991f97e5f47728e43481"
  },
  {
    "url": "assets/js/27.a90e4aef.js",
    "revision": "7490bad066ef2614508e9fda41f6fb60"
  },
  {
    "url": "assets/js/28.3b043f6a.js",
    "revision": "562269f1ff1833179898265d8df9cc64"
  },
  {
    "url": "assets/js/29.f6b83366.js",
    "revision": "b360781841810eb3b325b0e50af03d39"
  },
  {
    "url": "assets/js/30.1a93ea57.js",
    "revision": "3dce909d017c461a0ce3e0a3f46ef877"
  },
  {
    "url": "assets/js/31.ff4444a7.js",
    "revision": "779f8b2127f8d5f5f8bb16072e7ff78f"
  },
  {
    "url": "assets/js/32.9fca402b.js",
    "revision": "f6fce248f46d723951e7f7e5663d3253"
  },
  {
    "url": "assets/js/33.f74d759d.js",
    "revision": "e96c8fdc52bd6ec93152dc659041908c"
  },
  {
    "url": "assets/js/34.1de08655.js",
    "revision": "528bfe7273273df87341d6c8e7ab7120"
  },
  {
    "url": "assets/js/35.0d28769d.js",
    "revision": "bf6639adbf614685c8bd9dfae22c8c5c"
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
    "url": "assets/js/app.be8eed20.js",
    "revision": "305e190da700e56ef953b613e2c8ec10"
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
    "revision": "e2ff8c2e7721a45cc1478ae862f4dcb3"
  },
  {
    "url": "categories/index.html",
    "revision": "e235714eeee0bf849c236cb089f54f77"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "c66ccbeebf2026d6801d94a951b60491"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "5afba7ca195a36157c3f92f22fc61cec"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "850777c0991e45ed946bc8c119945983"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "ea4b81a6605d6ee439a96545ca65de7d"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "de00d10671b4ec6230839ad69f8b8314"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "5dea92ee5afb8967687190b69f27807c"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "0f10c1d7485263b2cb4b50d8c86d29c4"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "e5dfef1e4f0ab720fcc48a4d7459be2e"
  },
  {
    "url": "categories/面向对象/index.html",
    "revision": "5a6bddb2657796be2630944919dcb728"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "01b83e98be0545b6ab10b7df95e327e2"
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
    "revision": "8fadef8708925c5ba04d2c8a4acd88ed"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5928eaa2ab95c8d9bb7e5ceaa86d6793"
  },
  {
    "url": "tags/ES6+/index.html",
    "revision": "ff7544c9811041a481e5541773aa04d1"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "fda58cb2be6e358563ef6f61b3881820"
  },
  {
    "url": "tags/HTTP协议/index.html",
    "revision": "095934d362a61334e0048e6e1f67d6ee"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "cbfa2b8bb0c8462c89269e78079ba8bf"
  },
  {
    "url": "tags/NodeJS/index.html",
    "revision": "3e8aac7e4002dfc9111726d631b43fc6"
  },
  {
    "url": "tags/React/index.html",
    "revision": "4984efe0dac56cde7002b4ee49a70f4c"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "7adef38b5443d0efacea0cdfc51712af"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "19889c7044196b8f14e5f8ab970783f0"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "24d8a280d7a9402e6971a5a2ab1c56ae"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "1184fd645410e3ba00162d19939050f0"
  },
  {
    "url": "tags/前端面试/index.html",
    "revision": "5ba701408916d94937f4a7a709abecce"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "563ea7e82655837d4abc7f23730c9969"
  },
  {
    "url": "tags/深化前端学习/index.html",
    "revision": "6774b96ad6bcef2c779a12be3a1f834d"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "1cd91b03844d58212b8a13374a78c05f"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "9a5d25742401fc1bfd261107b2ad716d"
  },
  {
    "url": "timeline/index.html",
    "revision": "42c1ff74cd54783d42f7af18d4542620"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "初级教程/ES6/ES6.html",
    "revision": "aff637554e64c9ae46245e2e04408d17"
  },
  {
    "url": "初级教程/index.html",
    "revision": "d8aed8a52459eaa2ff78eee6d6441512"
  },
  {
    "url": "初级教程/JavaScript/JavaScript.html",
    "revision": "6a70821a7a47a500860c42b929452586"
  },
  {
    "url": "初级教程/TypeScript/TypeScript.html",
    "revision": "122cdd95fc980162c68f8b192be20ccb"
  },
  {
    "url": "工程化/Git/Git.html",
    "revision": "2326b08523ee85993456ec226874ab66"
  },
  {
    "url": "工程化/index.html",
    "revision": "220c0c438f4ae0a7f1a0842e46797465"
  },
  {
    "url": "工程化/Vite/Vite.html",
    "revision": "bf99868fcfc177bab90afbcd7232b6a8"
  },
  {
    "url": "工程化/Webpack/Webpack.html",
    "revision": "6c6fb003e5529b84280acb12b604d035"
  },
  {
    "url": "工程化/计算机网络/计算机网络.html",
    "revision": "aca73b01f78b39e702fa4024bbfc5d55"
  },
  {
    "url": "编程经典/index.html",
    "revision": "1d691aa63420b1eacd22617f43823932"
  },
  {
    "url": "编程经典/代码整洁之道/代码整洁之道.html",
    "revision": "e3cb5b35e47e835d930ce3014ecc28a7"
  },
  {
    "url": "编程经典/数据结构与算法/数据结构与算法.html",
    "revision": "c2a619cb476b26c2660aa870916e74fd"
  },
  {
    "url": "编程经典/设计模式/设计模式.html",
    "revision": "2120fee63ab58b7bf6a89ad157496258"
  },
  {
    "url": "编程经典/面向对象/面向对象.html",
    "revision": "2403d2edeab06f44480a57e8f4035d7b"
  },
  {
    "url": "面试之道/index.html",
    "revision": "83c1ef71d9cfd23bf7c0a02b39358e63"
  },
  {
    "url": "面试之道/前端中级/fe.html",
    "revision": "278a9ce2d686e671f6bb4f09e760a63d"
  },
  {
    "url": "面试之道/前端初级/fe.html",
    "revision": "79b39c58e26992801bfc59f7244e8fab"
  },
  {
    "url": "面试之道/前端高级/fe.html",
    "revision": "2722310e07a50caa7808b24e35d2c0f5"
  },
  {
    "url": "高级框架/index.html",
    "revision": "047b6afd32d6ca7819373efa476ef1a5"
  },
  {
    "url": "高级框架/NodeJS/NodeJS.html",
    "revision": "83610144cf628604b942e40d3febb633"
  },
  {
    "url": "高级框架/React/React.html",
    "revision": "54512a300f053f5246b4a9064cc541f8"
  },
  {
    "url": "高级框架/Vue/Vue.html",
    "revision": "6bae15d5cef70fb5eee9b158e4713168"
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
