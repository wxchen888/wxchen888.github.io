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
    "revision": "73b04140f6e34d346f6577513457f731"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/1.0b1ccf48.js",
    "revision": "b117d2bce8637e818a5a3e220a4c44a5"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.e8b64efb.js",
    "revision": "9dbb53db712c229e1fa706dab75332a8"
  },
  {
    "url": "assets/js/13.47a3e01d.js",
    "revision": "acdcfff7a63349420d91f87c801a48fc"
  },
  {
    "url": "assets/js/14.d38ad00d.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.ee31de56.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.c8f31470.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.d4b62530.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.403ab48a.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.19053063.js",
    "revision": "84bff6d9aa7cf02f3746834bad1a2e58"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "0a4bcb91570bab6cc629acdf746c7009"
  },
  {
    "url": "categories/java/index.html",
    "revision": "83ab926cec0de867e650e65c7c27620b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f7329aed43b8a577d4bf6ef592098597"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a5e186d012327240cb18e1fb6dc5429f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "03d01c26b83bd470612278955e289f8d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "adb5afe34c13923541b58efbf76c3567"
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
    "revision": "bcf568b0a5cc0c2d3585e258fb7efc89"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4ce86e28d9cceb5bbda32a46864bab1b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "49d49f726e2fb58a90bba7bc35489c86"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0ca796ac176934ac81d47ef53269f34f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "28aec68d80f35a1fd2217c5fff85d830"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b2cd0005784a8c389a0872fa807ef524"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7cc20c4da97270f8d568d412ff0f889b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "789bab492cd30bbfec8375288e709e9a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8e3215b92844b8e182958867bbea31de"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cddb9c9f6791a538181959c8a0dd40af"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "86abbd491edf66abe4134358e9524bcc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cafa09aa0f2596ec94c72ccc2b08f760"
  },
  {
    "url": "timeline/index.html",
    "revision": "7dc7c7f4cb00ce50092040d1bbcbff8c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "af94344dfcfb246af7c14a16faed9a7f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8885c8a67e33c2017296b25f767c82f0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f238c8cfd18fdc1767535799877c5316"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cdeb16e774dc12348ccb1c627c3e1789"
  },
  {
    "url": "生活分享/life.html",
    "revision": "21c0744c3eeae37a51f159f045b35429"
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
