/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","ecb3c9bff7771571332f961f95439032"],["/2018/04/08/整合建立输出增删改查的链表/index.html","1ca9fc3da70eec0a937f2646853f952f"],["/2018/04/08/选择排序/index.html","3d7e962d26d3d5c7505193dcb1895ecf"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","187c7a4c1f5464599fdf0b2e0f00b38f"],["/2018/04/10/冒泡排序/index.html","28b7802e0fad658e614386888da626fd"],["/2018/04/10/折半查找/index.html","dd70578f7e8ee74eca3c4ff2a498c762"],["/2018/04/10/最大公约数和最小公倍数/index.html","24dfbb2739733cb7bfc5f9f21a654e55"],["/2018/06/27/python中的Docstring/index.html","62b6311fd30b4169a27317dd8513848f"],["/2018/07/07/python中字典（key-value）/index.html","6f9a4ee89cb7e589b01bdb9e1c69b4f5"],["/2018/07/07/python中字符串的一些基本操作/index.html","1b37fb8c4dbb46828948b588427ea4bd"],["/2018/07/07/python中的元组/index.html","f836c5a4193c6ffee5fc5fdc44764bb1"],["/2018/07/07/python中的列表/index.html","d1499b70be27676ecd23306961898f66"],["/2018/07/07/python中的序列以及切片的解释/index.html","81290c84adca26bc2572007b73b9153a"],["/2018/07/07/python中的引用和切片/index.html","f36092186a90c1867e29bf6df4dbe6d8"],["/2018/07/07/python中的集合/index.html","fdcc7964c352421008b68ca5f4846679"],["/2018/07/22/利用python进行文件的自动备份/index.html","9c0780f900a8eb11592b3e90ec91699e"],["/2018/07/23/finally异常处理/index.html","9ce0f6297f5593aa38543145a84b5b3a"],["/2018/07/23/python对象的实例化/index.html","112a511b0254c4d16428d4ef7785e390"],["/2018/07/23/python日志模块/index.html","bd7a40e035c469110ab8a208e46e118b"],["/2018/07/23/python的pickle模块/index.html","dc7aed5d3b747ac22c8a35bcc5ac97b2"],["/2018/07/23/with-open异常处理/index.html","5c554fe11cde4a4e9b3e4f1f89b2a17e"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","1c95365834fcd423ac780dd72ab3917c"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","92f77a13f7e1b00a5e8020880dfcc6ab"],["/2018/07/23/在打开文件的同时规定编码/index.html","60ef1d437f13ffaf736321d4f87274e5"],["/2018/07/23/文件操作/index.html","05dcd7a230aa4b16ab29f338a454cbeb"],["/2018/07/23/用户自己引发的异常处理/index.html","a9393da5e814534a1e5a6de65ac85a72"],["/2018/07/23/简单的异常处理/index.html","5038d17f57a9a472ebd8a5304a4426e8"],["/2018/07/23/类变量与对象变量/index.html","c5b29d3da4b12e63302acb24d42d641d"],["/2018/07/23/继承的运用/index.html","4421f1b815fd11997e1406a31a4450db"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","4b3421a58d7ac0dc6a55d25ec701e5c8"],["/2018/07/23/输入输出——简单的回文判断/index.html","77ed2d3ba6b1a6bfa8e76dd044321e77"],["/2018/07/24/assert语句的运用/index.html","0970546e8598ec0d9cbec724b8f6a6a1"],["/2018/07/24/python中的lambda函数/index.html","87c23c4d1f5545e0a42eb90aaa4d6c3d"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","8c7ae6557d83617c4ac68b5f41b38173"],["/2018/07/24/列表推导/index.html","bb65fe058c96fadad4a207a01e693ea0"],["/2018/07/24/在函数中接受元组与字典/index.html","5d6b6e4c828aa44bad05043172caa1e3"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","28c2726bc05e5b51525579d909157aa2"],["/2018/07/24/打印九九乘法表/index.html","f0a71035eb1a4d9bf1a7a20ef4bbf2e1"],["/2018/07/24/打印直角三角形/index.html","52ff146c5c64c2480873b69ccf028f26"],["/2018/07/24/装饰器/index.html","3d32e32e3e6f79532a553d8b8ee40709"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","4be325e0563aaa082c3ba42baff1cdd4"],["/2018/07/25/python中字符串的一些方法回顾/index.html","ea5cc08812919908bb49b5753affa1d4"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","12f319b9a9bae1f9f97474338ab2e5e9"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","7fe0b0fc9f42b07c1b62b96b9c0d3325"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","0466b5f3794c4424e2f6121840234fc4"],["/2018/07/26/python中完整for循环的实际运用/index.html","94be13f0fa3e9c12772965a6d56cde4a"],["/2018/07/28/python中对列表和元组的切片操作/index.html","5d7930d8c90926b840d5cd4b181ce32c"],["/2018/08/03/欢迎来到我的博客/index.html","d0dbdeb99738b1096b58304b1e605a44"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","630343b06ea1530d4f8c2040bcdc4107"],["/2018/08/07/Python中的正则表达式/index.html","f04ba9c44ec244411e6b1011ce07c255"],["/2018/08/07/Python中的正则表达式match和search/index.html","b21b72cfb2ed44c35f3d7a0d3e6277a3"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","10db77a0acbd00a7c4ac956ac0f3d309"],["/2018/08/07/正则表达式中的compile函数/index.html","28539ad5ec0b3a3885cf430dd2e90308"],["/2018/08/07/正则表达式检索与替换/index.html","84568cfc2d862b4a597356707bcde9a4"],["/2018/08/08/python中的多态/index.html","17c053a455ade08c948536df05145243"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","5fc1a8dc1fdd30372900117ee0d6855c"],["/2018/08/08/turtle绘图库/index.html","901330fc20c7ede6f9bc5efd0fc235e7"],["/archives/2018/04/index.html","6ee9a811f9c985ba9bcbaf32152cd7ad"],["/archives/2018/06/index.html","6041e7878a6c64deb6411e4dced20913"],["/archives/2018/07/index.html","71aa7639068d2873cc9d2d81e9eaf8ef"],["/archives/2018/08/index.html","28321e2ff94830351b8a979885d7f89c"],["/archives/2018/index.html","458a9667418ced115df9a18ec87c0a0d"],["/archives/index.html","d186cc5218f7d7e668c0cd27e5705ded"],["/categories/C语言/index.html","e8d21e993f44d65693cce671df9be39a"],["/categories/Python/index.html","9b25ddb761e63765e5ee04dfc27a848b"],["/categories/Python/page/2/index.html","3010c73c27e16c1b8de4c0e2d9ebf21a"],["/categories/Python/page/3/index.html","0205d853c627ef3374e357d3a4d07bb8"],["/categories/Python/page/4/index.html","c91f5ba9bfe5c5db2a388a62dfc568c8"],["/categories/Python/page/5/index.html","58c6a25df64d3119c96f99caa4b0ebdb"],["/categories/index.html","6c5c10177f467cf44fb46933a4dce8f7"],["/categories/博客测试文件/index.html","f912e9295a1220925be6f8152f438675"],["/categories/随笔/index.html","40ed56134e2b0cdd2a4f3468ad7aac3d"],["/css/main.css","704d5ce9851236097e0bab25dc0f2a40"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","62d1eb48b9fedff96e45624358191950"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b390f1e438f6f62080bce7c51590fa6d"],["/page/3/index.html","a0864b62d094d00aafbff232ea6b36be"],["/page/4/index.html","4d29bd50abd889af126f71dc1ba8c347"],["/page/5/index.html","a1ede56b644d77d924e9acbc5a7c9ac7"],["/page/6/index.html","dcebd7ddca2adf8aae4658cece3508ed"],["/sw-register.js","12c67fcf7687020d038e3fe4432883f9"],["/tags/Face/index.html","3652b7d56fd46f5c02a58a2c75f5151e"],["/tags/index.html","9ff733f2377b6b93bc7be50a29cd2694"],["/tags/python函数/index.html","4caab12974e641a2905f56b6f07108e4"],["/tags/python库/index.html","1742ed8675d2e3bbdc06f8bae7c86ede"],["/tags/python异常处理/index.html","db043127a0168ac4d44404d175bf044e"],["/tags/python模块/index.html","fd30e7640780aab70f8994b12afdea30"],["/tags/python正则表达式/index.html","2016a397e3984aa1f9f0d793277d9118"],["/tags/python面向对象/index.html","79919fecf5ce5846e64c22642f5fd976"],["/tags/基本教程/index.html","11439f3072e2be73784765a306c1e98a"],["/tags/基本教程/page/2/index.html","fbb442dedaa8b65e20c5c27349cedac5"],["/tags/基本教程/page/3/index.html","b2e083cc48f69f3dcd43bd7b43c055af"],["/tags/多态/index.html","3aa4836f944f725f44333b90094ec914"],["/tags/排序算法/index.html","cbe57841ed5ce622289ec92012b29461"],["/tags/测试/index.html","2f515299d6de084706cd7d2aae9d73d3"],["/tags/经典算法/index.html","59fd4e792c88a7ad07655038be82d224"],["/tags/链表算法/index.html","4ad502d445fc0cce64d131a9f50c8636"],["/top/index.html","8cb0693925b67578fda5d8fd17b9d881"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
