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
    "revision": "124314d0dfcbc66f3b752dbb7e802af8"
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
    "url": "assets/js/14.9eed84e2.js",
    "revision": "260e1af25fb93c46ca0d1bc2e669a4e0"
  },
  {
    "url": "assets/js/15.59f45f0b.js",
    "revision": "0064623557b3f9797e41146b6a62c88a"
  },
  {
    "url": "assets/js/16.70c98bfb.js",
    "revision": "46fbbe4b736e62d3f5f62a188e6728ff"
  },
  {
    "url": "assets/js/17.0e8626af.js",
    "revision": "1bde3dbbcf023a886eb675f8fec5e138"
  },
  {
    "url": "assets/js/18.c9d97ce4.js",
    "revision": "cd3b941dda5c27e6b3326c761f57723e"
  },
  {
    "url": "assets/js/19.fe619e33.js",
    "revision": "5845cb6629166a58c5c4506e349ace42"
  },
  {
    "url": "assets/js/20.565e6de1.js",
    "revision": "e0e0dc51336961699f93f8be2967c66d"
  },
  {
    "url": "assets/js/21.c4a7e88c.js",
    "revision": "6b03b9fa9aeea3736fa8980dfa7f822e"
  },
  {
    "url": "assets/js/22.d87e8298.js",
    "revision": "0120cffce0050253210780a7bdcfeee8"
  },
  {
    "url": "assets/js/23.a76a089e.js",
    "revision": "9d176e53b9325437890d056ebdc4ab97"
  },
  {
    "url": "assets/js/24.a635b22c.js",
    "revision": "c3928f51755fe7dde6b86d9aae0c2975"
  },
  {
    "url": "assets/js/25.c166cd0e.js",
    "revision": "f1d19ebb87f2f7393c17b5624fa1a393"
  },
  {
    "url": "assets/js/26.733964ae.js",
    "revision": "eabf1350069ec6701a7179ff2466ca40"
  },
  {
    "url": "assets/js/27.66649abe.js",
    "revision": "d9c213be2d3b3c427919516fde99d67c"
  },
  {
    "url": "assets/js/28.52d9f1dd.js",
    "revision": "4a582d524c47dade4f8bc3ec5fe9be30"
  },
  {
    "url": "assets/js/29.b4e17e4d.js",
    "revision": "326048c09ebb8316d99af9679ae10720"
  },
  {
    "url": "assets/js/30.8591a02e.js",
    "revision": "cc387d1358d4087ad3bf0c981c98ace5"
  },
  {
    "url": "assets/js/31.f616db87.js",
    "revision": "13262d4e308ff29f580e97f373ffa2a6"
  },
  {
    "url": "assets/js/32.9fca402b.js",
    "revision": "f6fce248f46d723951e7f7e5663d3253"
  },
  {
    "url": "assets/js/33.d317bbce.js",
    "revision": "957d823d22872b24c202a2189e4efde8"
  },
  {
    "url": "assets/js/34.1503e77e.js",
    "revision": "850c48426b7009fd0f0386d01fb92f53"
  },
  {
    "url": "assets/js/35.5602a751.js",
    "revision": "5bb694ec577af27c704d61aa0d605732"
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
    "url": "assets/js/app.f38db890.js",
    "revision": "42557ca79d398a4fd37ac38244cb8f47"
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
    "revision": "c85c74caa050e1dd6ab75050a9d0063e"
  },
  {
    "url": "categories/index.html",
    "revision": "1f210d967b4c4fa7e0e8995babaecd8c"
  },
  {
    "url": "categories/Vite/index.html",
    "revision": "db67a0104ba28f689eb4e302ff68d7a1"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "8991e45682d1bb772770120e5b695002"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "b96d01c971ffbb32c20bb52ce19d0cc1"
  },
  {
    "url": "categories/前端框架/index.html",
    "revision": "46dd1968651888e91e2727f494d31306"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "9379933efa35f25445999b2ecfe6d4cf"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "b6c8db2beb5c6e46217e6c3c01186f3d"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "2561471171cf5516dbae2b9d813a9777"
  },
  {
    "url": "categories/设计模式/index.html",
    "revision": "ca36cf8cfb9b5d057e8b4e195a087de3"
  },
  {
    "url": "categories/面向对象/index.html",
    "revision": "3a3506ebb13805bf7440e7f6257b8301"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "42a60192ccd2bba17993925f9d45a5ed"
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
    "revision": "649d7a2b5a99b6c3d2956a5d3b8c2309"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "218ba7ea910cf68fc3be22e69b41c174"
  },
  {
    "url": "tags/ES6+/index.html",
    "revision": "6cd810b907bf10e731c4920b519bd897"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "baae0ad14351b2a6046407bb8efccba0"
  },
  {
    "url": "tags/HTTP协议/index.html",
    "revision": "b35a901d74da2c899e87f6fec3a8b71b"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "29739ca5d191031f163f2dc01da920ab"
  },
  {
    "url": "tags/NodeJS/index.html",
    "revision": "1273394d40a18203e035c7776adfe782"
  },
  {
    "url": "tags/React/index.html",
    "revision": "4ffbb6cb921b9602a00ab0eb486c2dc2"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "3b7f3dc461d3a7fffd7bbb750c857dac"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "6eeeec8aad6f9a90aa4b258ef72fac9e"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "9850f7c8af59fb9e6c255e2a47de8f4d"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "e4a5c075bfa280f57a734a0e55157d46"
  },
  {
    "url": "tags/前端面试/index.html",
    "revision": "987d04333e127b5a6f79105e41016073"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "5830c82dba6a29c000f27a16dd960628"
  },
  {
    "url": "tags/深化前端学习/index.html",
    "revision": "75ee38a82a4f8572bf6023ba9bca1f41"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "12d369e72126c37fec859fe6b4d2b310"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "e5e134da6bb10237ce1861767fb857fc"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a481e7611ebdf203541532ed10589b3"
  },
  {
    "url": "view.png",
    "revision": "676971f69e0bd57e75f30d6546a0a1f9"
  },
  {
    "url": "初级教程/ES6/ES6.html",
    "revision": "d3e9e261cc1e614f7b337b273d952680"
  },
  {
    "url": "初级教程/index.html",
    "revision": "a17c0bc7c6164d8b12cb1ac091569ead"
  },
  {
    "url": "初级教程/JavaScript/JavaScript.html",
    "revision": "deed5457fb992dbed4a748a341624091"
  },
  {
    "url": "初级教程/TypeScript/TypeScript.html",
    "revision": "9a19a58ad7af1d2ea2df9070d93521dc"
  },
  {
    "url": "工程化/Git/Git.html",
    "revision": "490d4418f029552fcc4b16d544d4c2b5"
  },
  {
    "url": "工程化/index.html",
    "revision": "5a09e6d792cc5f2c677a819ee327b215"
  },
  {
    "url": "工程化/Vite/Vite.html",
    "revision": "df02cbb3a22e0dccef54ef96659644c2"
  },
  {
    "url": "工程化/Webpack/Webpack.html",
    "revision": "4fc0fa2748687c2acf7997c75796c940"
  },
  {
    "url": "工程化/计算机网络/计算机网络.html",
    "revision": "d874962e9fdfad2af2c845059da7b5a9"
  },
  {
    "url": "编程经典/index.html",
    "revision": "4c8518e35d120e55639090d6635b2b80"
  },
  {
    "url": "编程经典/代码整洁之道/代码整洁之道.html",
    "revision": "a869dcdfa611b5c151b8cdba869abe43"
  },
  {
    "url": "编程经典/数据结构与算法/数据结构与算法.html",
    "revision": "815cb1223857097608f7d0969d74564b"
  },
  {
    "url": "编程经典/设计模式/设计模式.html",
    "revision": "f0471df4081e6c842940f9d0599896f3"
  },
  {
    "url": "编程经典/面向对象/面向对象.html",
    "revision": "891aca868e448943030a599aa0d29905"
  },
  {
    "url": "面试之道/index.html",
    "revision": "5cc5c23502ebbf2dd2176f4e0ac23074"
  },
  {
    "url": "面试之道/前端中级/fe.html",
    "revision": "00ca0ec8f2f7359906d2365bd64608bd"
  },
  {
    "url": "面试之道/前端初级/fe.html",
    "revision": "aea9a2ee5f219a29f23af757e88fc452"
  },
  {
    "url": "面试之道/前端高级/fe.html",
    "revision": "b6566741e5391886c065555a720428e8"
  },
  {
    "url": "高级框架/index.html",
    "revision": "7a63b91947e1250bf8eff1d56d81f49e"
  },
  {
    "url": "高级框架/NodeJS/NodeJS.html",
    "revision": "6075cac7f2a71f69427f99b9d985c04b"
  },
  {
    "url": "高级框架/React/React.html",
    "revision": "b4d9cb6db554b0893acbc3be91d410a8"
  },
  {
    "url": "高级框架/Vue/Vue.html",
    "revision": "5c3e47a1d09b2ffa2bfff24cf9593412"
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
