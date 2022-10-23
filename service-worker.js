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
    "revision": "ba237c0cc03eaab4e461871ac705e70c"
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
    "url": "assets/js/13.875deb0b.js",
    "revision": "bad97589152ba17fea720201df3cbb5f"
  },
  {
    "url": "assets/js/14.f254498f.js",
    "revision": "157ea7d0fe64d14e469b44e48ae66531"
  },
  {
    "url": "assets/js/15.7f79c01a.js",
    "revision": "c2715bfe70434f540ade0f300d7ea16f"
  },
  {
    "url": "assets/js/16.613c06ab.js",
    "revision": "494400972f1d80021744d2e36d57f2ae"
  },
  {
    "url": "assets/js/17.ac1c04f9.js",
    "revision": "423e4823cabbc15ba21eec38f10a0a82"
  },
  {
    "url": "assets/js/18.2e56dfab.js",
    "revision": "7a22e727963af53fef4ce6f559331d79"
  },
  {
    "url": "assets/js/19.e18289fa.js",
    "revision": "3945187fc55d93d2654f3c090224bdf5"
  },
  {
    "url": "assets/js/20.5aab8afc.js",
    "revision": "32e3f3116c956681ce497f9802730bb3"
  },
  {
    "url": "assets/js/21.b2dd2c69.js",
    "revision": "fafdc49cfd34f7d380472ab981dfed5a"
  },
  {
    "url": "assets/js/22.1c650daf.js",
    "revision": "a1d2dbe50403a862a1ab5f0746987232"
  },
  {
    "url": "assets/js/23.46db141a.js",
    "revision": "e1233bf2179b6fb4cf4c662dba564de8"
  },
  {
    "url": "assets/js/24.5c6d1633.js",
    "revision": "8501a5ef2ccb31e0467930212ea55b39"
  },
  {
    "url": "assets/js/25.67c408cf.js",
    "revision": "0014fd193f313c20a24a224a2986d6a5"
  },
  {
    "url": "assets/js/26.fe5cc59d.js",
    "revision": "8bbebdcf80beb60caf1d70cd83f8a406"
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
    "url": "assets/js/29.08359f87.js",
    "revision": "a143f4ef4d67638a7c0d3677eee08168"
  },
  {
    "url": "assets/js/30.1a93ea57.js",
    "revision": "3dce909d017c461a0ce3e0a3f46ef877"
  },
  {
    "url": "assets/js/31.00995ad7.js",
    "revision": "6d3a4e455d1c28bd941d8965e05d6681"
  },
  {
    "url": "assets/js/32.ff6e1973.js",
    "revision": "ceeb408e2b9a4be0d3c63415dfc7880b"
  },
  {
    "url": "assets/js/33.f74d759d.js",
    "revision": "e96c8fdc52bd6ec93152dc659041908c"
  },
  {
    "url": "assets/js/34.727af936.js",
    "revision": "e0c7597dcd5bb5351ddae83ab4729be4"
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
    "url": "assets/js/app.68ba6543.js",
    "revision": "c4e15bca87e997eacbe4d2ec4dc22d06"
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
    "revision": "dd39a6179564c4da1ea3b291264bb75e"
  },
  {
    "url": "categories/index.html",
    "revision": "9615d070df914d4641a207d53b085388"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "68a7640c86e22b6617ba5bc76c1d8b2b"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "c247e167d0ce9284cce2582d4cf4c3ba"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "33bac66ac7138a0d0d33a7b90f4e6bb8"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "d6c81d68c5927627c0176fc67d136bd7"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "5b97caeb3310e30996a9958548a25a70"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "f7fadd8ee93943f75f10c9b5cd1da6f8"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "76b03a80d99698d2a95cca7dd8fc4c89"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "73fff67860fe7a4f619c6c822266c164"
  },
  {
    "url": "categories/面向对象/index.html",
    "revision": "b90ff9712e19e454317c11db5c3b60d1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2bce70d7e6d77a38a04e891247f7eaa5"
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
    "revision": "eb9402152a540165583a8881c7b08179"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8c3e78a14a7024c24012edf8a9d18b59"
  },
  {
    "url": "tags/ES6+/index.html",
    "revision": "346ab57b66124af9156b4ec962838175"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "df7dd2f2b8140c7fed81308311796a96"
  },
  {
    "url": "tags/HTTP协议/index.html",
    "revision": "fcce015044ef2d0fe98f6530c298d893"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "535982a8677b5d31dd616f416a1a589c"
  },
  {
    "url": "tags/NodeJS/index.html",
    "revision": "d7b2941c3845183714a17d2ed0d87eec"
  },
  {
    "url": "tags/React/index.html",
    "revision": "251adda0a479c6e5d00b2310ddca9c23"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "bc8ce63128875ea0a60f11de2009f1e8"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "ce165bf0d4826867e0889f947c7fe678"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8e67fad955b060a06efbc81a834249bd"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "848a688ddafd6ec2a4a40badf6728a85"
  },
  {
    "url": "tags/前端面试/index.html",
    "revision": "d380e76e26cd2436fc5a7fbc0489d191"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "07eaae2830fcbad050fccdb5623ed188"
  },
  {
    "url": "tags/深化前端学习/index.html",
    "revision": "f822f0b89e3e9e93a0e36c478a2550fb"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "807c78e24a41541885056af98cb8261f"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "c278b26d66aafb40186d6326d680deb8"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd6beea88ac88a250b2ca4547c127ba2"
  },
  {
    "url": "view.png",
    "revision": "676971f69e0bd57e75f30d6546a0a1f9"
  },
  {
    "url": "初级教程/ES6/ES6.html",
    "revision": "75f89868631800cfb0a5ed85c6a437e8"
  },
  {
    "url": "初级教程/index.html",
    "revision": "c300c9e17974de13c6e080c13f6971ec"
  },
  {
    "url": "初级教程/JavaScript/JavaScript.html",
    "revision": "59b20d324252d2eab549468e3d5fb39d"
  },
  {
    "url": "初级教程/TypeScript/TypeScript.html",
    "revision": "0dc9e9b21273829fcc8f3e1c8f1ebe11"
  },
  {
    "url": "工程化/Git/Git.html",
    "revision": "73b93e91c8872fe6aade6df1c7cbacf0"
  },
  {
    "url": "工程化/index.html",
    "revision": "d27cd483ddc5fb16681593c585ae0eb3"
  },
  {
    "url": "工程化/Vite/Vite.html",
    "revision": "1bbae1d602ddeaa092db0de2bde700c2"
  },
  {
    "url": "工程化/Webpack/Webpack.html",
    "revision": "afb5fef25bcd457bf7bb307c348b4e82"
  },
  {
    "url": "工程化/计算机网络/计算机网络.html",
    "revision": "a78f0b089da32745a39e59b05c54ef28"
  },
  {
    "url": "编程经典/index.html",
    "revision": "43a3a1f322152037b645ce865a5c74d8"
  },
  {
    "url": "编程经典/代码整洁之道/代码整洁之道.html",
    "revision": "b13beb13bd6e11719b196f9ee418157f"
  },
  {
    "url": "编程经典/数据结构与算法/数据结构与算法.html",
    "revision": "6ed75e5cb2aec51e060611ae0446c400"
  },
  {
    "url": "编程经典/设计模式/设计模式.html",
    "revision": "3c26d64bec26a083518b658943843ce6"
  },
  {
    "url": "编程经典/面向对象/面向对象.html",
    "revision": "56b4efce72b17f6664962c8c126b4177"
  },
  {
    "url": "面试之道/index.html",
    "revision": "ec75655cbb5abcfa8260878a5ba1b9c5"
  },
  {
    "url": "面试之道/前端中级/fe.html",
    "revision": "38174931ad731bccb2d2f1e692d85b2a"
  },
  {
    "url": "面试之道/前端初级/fe.html",
    "revision": "88c3dd929cdd7eb96e7b13f369b15291"
  },
  {
    "url": "面试之道/前端高级/fe.html",
    "revision": "2d538259d86e8065a8ec8e34387c6b10"
  },
  {
    "url": "高级框架/index.html",
    "revision": "29b9d3054c9230a961490124a8d2cc11"
  },
  {
    "url": "高级框架/NodeJS/NodeJS.html",
    "revision": "fcd4834946696b59ba5f9c8226098a9d"
  },
  {
    "url": "高级框架/React/React.html",
    "revision": "4639cedb7d5d9198a158ac041a6dc5a8"
  },
  {
    "url": "高级框架/Vue/Vue.html",
    "revision": "45e9447fec58ec19709ab708787fbded"
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
