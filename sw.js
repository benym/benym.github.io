/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","153bca12308ee859cd99be4179177193"],["/2018/04/08/整合建立输出增删改查的链表/index.html","c369e84f962e6253a70265f439ca327e"],["/2018/04/08/选择排序/index.html","29ee1a0aca88900e202211ad71c52f45"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","fd3b46c1542a36e9f876570a8b0c3f0b"],["/2018/04/10/冒泡排序/index.html","7bb6118739b51c45d93437b8863cc58f"],["/2018/04/10/折半查找/index.html","132b553c74d855e06dacd2cac7bd6528"],["/2018/04/10/最大公约数和最小公倍数/index.html","548de5ae3daac94abea260123199597a"],["/2018/06/27/python中的Docstring/index.html","ce0f62244deeae4fc290e1e077998ef0"],["/2018/07/07/python中字典（key-value）/index.html","0f0680b165b348925522bedf60c47295"],["/2018/07/07/python中字符串的一些基本操作/index.html","ff2cf8b2d376010bec4a151ed7c7f4bd"],["/2018/07/07/python中的元组/index.html","cd247523848c19d26d6860fd268e12ed"],["/2018/07/07/python中的列表/index.html","16ef2f769f1a76918a402ac5ae0c8fbe"],["/2018/07/07/python中的序列以及切片的解释/index.html","aaaa913ac1edcc04b3fe3a61ff6867bd"],["/2018/07/07/python中的引用和切片/index.html","4a2e4fbce597c16f103063cbdac0d03c"],["/2018/07/07/python中的集合/index.html","bf7efd28ee6aea04956cfe34bbcaa426"],["/2018/07/22/利用python进行文件的自动备份/index.html","c4aad3e264075367d6a1304427b798d2"],["/2018/07/23/finally异常处理/index.html","0dc6951163561904f659f87751594c68"],["/2018/07/23/python对象的实例化/index.html","829684ef18d71732c9563216b71b4ee4"],["/2018/07/23/python日志模块/index.html","d56d1564ebfd6ee2e2d4fd576b6dd087"],["/2018/07/23/python的pickle模块/index.html","d0b1202081a7797d9d74351034e2e029"],["/2018/07/23/with-open异常处理/index.html","7ba838183d2c2735171df635f586e611"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","025a76691ed20d864430caa9e49b59df"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","05c9157754aa19ffd0a881d4b6159650"],["/2018/07/23/在打开文件的同时规定编码/index.html","1a0f392647504a03cd6ed6dd118f5502"],["/2018/07/23/文件操作/index.html","f17ceb83ab2965085454046cd4a794b3"],["/2018/07/23/用户自己引发的异常处理/index.html","a871190891f93e22f7b1798ffa1d9827"],["/2018/07/23/简单的异常处理/index.html","fd8436f9358d5634343ae021cab4f0e2"],["/2018/07/23/类变量与对象变量/index.html","486f0b9fa1437875d58d9d2daf637dfe"],["/2018/07/23/继承的运用/index.html","2eb1de1f2f85bbbb79e28feb5af2f12e"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","18fb386e678678959a6b395fc3c12ca2"],["/2018/07/23/输入输出——简单的回文判断/index.html","59a6d5b7dc63c3a1aa581ed7fb84901b"],["/2018/07/24/assert语句的运用/index.html","6c6163267484e050505ae441e216260f"],["/2018/07/24/python中的lambda函数/index.html","e430e3fc4c6a08a9956425bbbab42e3e"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","a67b16f8afef4e4370ce88de201adbf4"],["/2018/07/24/列表推导/index.html","da5b6b667bf1896ff7b5f5f1beece517"],["/2018/07/24/在函数中接受元组与字典/index.html","4cae1b39e23b5a7f4899e07e274dd281"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","29e205ec8194389a3bf7ce5b0fcc0476"],["/2018/07/24/打印九九乘法表/index.html","f4caf2e8104c79d4ed9685cdd98342f3"],["/2018/07/24/打印直角三角形/index.html","a1cf5df6891d31fa07f7be82e0f69192"],["/2018/07/24/装饰器/index.html","7a3f94a58fad383d996ac58322ee3e77"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","4bcc7333b524a483faa91286cd265120"],["/2018/07/25/python中字符串的一些方法回顾/index.html","9f46c8c88fe5775cf8658709c7451452"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","e889f7ff0106b99112b75c6a4dbe95c9"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","06251505a17c4b0a2facda58610959c0"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","b5992d79a3011d04ad69dd6474d91fdb"],["/2018/07/26/python中完整for循环的实际运用/index.html","ff79934b864adb9aeeaddaed2cf97b3f"],["/2018/07/28/python中对列表和元组的切片操作/index.html","1ad4d791e2b178ffe6ce5d0b1656e192"],["/2018/08/03/欢迎来到我的博客/index.html","c14f480a7a156266eb264aeebe9d1c3c"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","8efe23ef4e0cf6830c3e44fc0422ebf9"],["/2018/08/07/Python中的正则表达式/index.html","fc095ee56d7b497b74ecb2154e0468bc"],["/2018/08/07/Python中的正则表达式match和search/index.html","91c903eb0b9730c0c266f962c37f97e7"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","549cb2eb1ed32b29e47b276180229367"],["/2018/08/07/正则表达式中的compile函数/index.html","1c26b46e3fb6aa5a62b797c1eaedb822"],["/2018/08/07/正则表达式检索与替换/index.html","3217aa977d6230f24d566f612ca443d8"],["/2018/08/08/python中的__new__方法的重写/index.html","32329ad392c35c14e8eb35f49682ce29"],["/2018/08/08/python中的多态/index.html","cad8e340c8a1e2a5ac91f9ecebd34862"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","82792a161b9790fc8834036a599dbd5f"],["/2018/08/08/turtle绘图库/index.html","718e73c72faf2c9d740438e90ea9f82d"],["/2018/08/08/单例设计模式/index.html","4338b1614497cddef5b231459dbc16f0"],["/2018/08/09/Numpy库的首次使用/index.html","b75e52b8e9f7170542d421901e17d2af"],["/2018/08/09/kNN（k-近邻算法）/index.html","48cf042832563cbba4811f7c43eef0de"],["/archives/2018/04/index.html","cfd0467a6bc2fec6d6ef682cec1b9a60"],["/archives/2018/06/index.html","f6de1d767d769c353dbed09308047567"],["/archives/2018/07/index.html","b17fd118b23b235ba6499cbbd763491b"],["/archives/2018/08/index.html","0f6ce77ee813306509e755a37d703269"],["/archives/2018/index.html","1e710298606990716ff887f9ae642fdb"],["/archives/index.html","e30a8899f70b480ec37906793a69d676"],["/categories/C语言/index.html","9ae7323ac26caeb873a7d2a54c8ff5f4"],["/categories/Python/index.html","dcec923e558583d4b91ff986b30a8163"],["/categories/Python/page/2/index.html","293509c4b947898948d627cfac9cc570"],["/categories/Python/page/3/index.html","a2679f5f5957e620176ae0b5fe6015bb"],["/categories/Python/page/4/index.html","a5d021bddd56329ef6173f4f36ae8036"],["/categories/Python/page/5/index.html","2464ef2a0e52141cbb9590263fb5d088"],["/categories/Python/page/6/index.html","2650f19bc6f2e3a0b4fee7baafa2bbdf"],["/categories/index.html","f3795f19d25d1843ab93b41e6ed73bca"],["/categories/博客测试文件/index.html","06f75c8369e96df3430cec62e7df9df0"],["/categories/机器学习/index.html","2f562611a45274aabd0fb7a30ec2ec80"],["/categories/随笔/index.html","31f703872ec48fb7e0f9a478d5e6b6ba"],["/css/main.css","2840e9b01e9e4d3bd8e65a3f20ea39d2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f8b6e2de073ffac7ddae3ba2be903c77"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e6f9173ac8d055ad032a2e41402c6de8"],["/page/3/index.html","e0b890a5372459550b41c46edfa08adf"],["/page/4/index.html","11f79895399d883ec387636bced6434f"],["/page/5/index.html","a9dfb0e85b49a97f1ae6cc5c6b4af2f9"],["/page/6/index.html","ceb0cd9ab6cf8a9886f9aa84c026edac"],["/page/7/index.html","54c3998b94b70df46e962775e0c60313"],["/sw-register.js","9ce40eddf69f4332419986cc82faab2b"],["/tags/Face/index.html","4c5c2bb286af81b18047d5308cbdf7eb"],["/tags/Numpy/index.html","b8366de36d4606b500fc9986af5b1c57"],["/tags/index.html","61e335c5f011f52f46758e0c7f8d16c8"],["/tags/k-近邻算法/index.html","9bae128d24fc2c543701c9215307b2c7"],["/tags/python函数/index.html","92da61b97aee0235fbf103356811a98b"],["/tags/python库/index.html","fbcef40ddda770c5da166d3224377488"],["/tags/python异常处理/index.html","5c586394d141961ed347d6bd0479c76a"],["/tags/python模块/index.html","d69881b414dccb531a3e31c9732adf36"],["/tags/python正则表达式/index.html","8ba92936017bf823c6165c9c351ecca8"],["/tags/python面向对象/index.html","861382dd9b839863c6766b0d10b6819d"],["/tags/python面向对象/page/2/index.html","c1e530c5db0f7b3e184fb725a81aaf23"],["/tags/基本教程/index.html","238f7789fa214f2798c4614da2d98029"],["/tags/基本教程/page/2/index.html","988055196126410b7841e7fdf588a527"],["/tags/基本教程/page/3/index.html","dbd2880ef4242f945c1fb064986fd2a4"],["/tags/多态/index.html","4f8245e4d25fd6ed92524e2841614aa1"],["/tags/排序算法/index.html","f3563e296e9ee3ee40e9c88a603dee09"],["/tags/测试/index.html","3c42198469701e75c6f7292c40b42752"],["/tags/经典算法/index.html","f387a4491f8573aad6425d969ef6845d"],["/tags/链表算法/index.html","570efb9151fed7deade33efcf3ace528"],["/top/index.html","887f8c5f299db7870c8ec6e8d25aa651"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
