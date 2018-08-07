/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","c5d9fce07f16f0dbd0cd9a057a49924c"],["/2018/04/08/整合建立输出增删改查的链表/index.html","a0bcb8e3673e61ee76a797c827beef44"],["/2018/04/08/选择排序/index.html","2c7cd2255b274d7958fad90306c23fa3"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","d49e15651b4dc0454d4441881316adce"],["/2018/04/10/冒泡排序/index.html","89aadb3ea9d4ae4fd66663e362c15257"],["/2018/04/10/折半查找/index.html","d25995d45bce95285043bf94eb4f038e"],["/2018/04/10/最大公约数和最小公倍数/index.html","b54b1c4695ed25bd83d8cf62d5d67913"],["/2018/06/27/python中的Docstring/index.html","ccc1f4c87ef19d118e22e79b0722c9c9"],["/2018/07/07/python中字典（key-value）/index.html","ef4b22423a9f0de7fa8bde6cd9dbc402"],["/2018/07/07/python中字符串的一些基本操作/index.html","15b100b1f5d86ff42bfa25651ab5b200"],["/2018/07/07/python中的元组/index.html","2f2ff8a5e994a08cbbb6665eb781fb54"],["/2018/07/07/python中的列表/index.html","c8ad20050d4f00c0c39bce531ff11430"],["/2018/07/07/python中的序列以及切片的解释/index.html","993b706c301fe9425a910573a0d21a98"],["/2018/07/07/python中的引用和切片/index.html","7d76f5b50cbcf7d937d68924cd46f6dd"],["/2018/07/07/python中的集合/index.html","17077b694a5d6cdabe334f2c8c7e5fc2"],["/2018/07/22/利用python进行文件的自动备份/index.html","23d63e3ca26a4f67b3d1f0d6b0450ec9"],["/2018/07/23/finally异常处理/index.html","3a2e43bb3c73e51692fb60f83fba075d"],["/2018/07/23/python对象的实例化/index.html","ee207bff8b4f55bfc6862969a8148c26"],["/2018/07/23/python日志模块/index.html","49a8b35d5f267b0ac9535045ab8cf4c9"],["/2018/07/23/python的pickle模块/index.html","c44c5a015fa8fa572fbf3e817fd80b6f"],["/2018/07/23/with-open异常处理/index.html","7e8727ef13633b68d819bfe08fe8b93d"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","1c5fd5dabcb80c31c828fc137cbf72d0"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","cfa92a6f55fa4817296c4526404902cd"],["/2018/07/23/在打开文件的同时规定编码/index.html","6c588faeb7bd8bf958adde60a2dafe1f"],["/2018/07/23/文件操作/index.html","a5ffb0819e47b7b6edfad5a1d8a9401c"],["/2018/07/23/用户自己引发的异常处理/index.html","0d1523d1507a31f1db0ebe3411bbdf92"],["/2018/07/23/简单的异常处理/index.html","5f2b0ad18e9906bd654e830b6faa8edb"],["/2018/07/23/类变量与对象变量/index.html","539c4c8e00ac40d38987bae8ce184233"],["/2018/07/23/继承的运用/index.html","e080f326ca180c2b2f6f08cbf88bb2bd"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","b644adeee18be999affb06bc222bf09b"],["/2018/07/23/输入输出——简单的回文判断/index.html","e50894e8e5fdf19cbc14be9598cf21db"],["/2018/07/24/assert语句的运用/index.html","de85fd47c903989438184e9eb78b93b5"],["/2018/07/24/python中的lambda函数/index.html","06614941a291a676c30e5700da8661f6"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","f6c67520c546285b675f28e50f3e672c"],["/2018/07/24/列表推导/index.html","eec3f4943513f4de45dbe515083c7c03"],["/2018/07/24/在函数中接受元组与字典/index.html","e80e0e46765252673cf1d8137e6e1838"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","7bb0b6c96bd3a0ef9723753eb52606e1"],["/2018/07/24/打印九九乘法表/index.html","e7bd10558d0703ef7ad04121dec99ba5"],["/2018/07/24/打印直角三角形/index.html","206b8751b1592252c22b01cf4b771312"],["/2018/07/24/装饰器/index.html","d665a74be567c4fb71af04b69ccc321b"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","338846e1b822bdc4dc2de147137095e6"],["/2018/07/25/python中字符串的一些方法回顾/index.html","aa366a98a42958fb44b87472ecc81973"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","9ad9ece9b281985384c7b083ebd8fce5"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","954044c8f3d6122deabd9ebc07acd312"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","de49bb417127318ff5ec43e69042ed83"],["/2018/07/26/python中完整for循环的实际运用/index.html","da440fd46ba8ad293a6734b4139545d1"],["/2018/07/28/python中对列表和元组的切片操作/index.html","f0575bedcaaeecaa546632acea62848f"],["/2018/07/28/python中的元组/index.html","9a87297b5ebd845fb84e03dc23183f7d"],["/2018/08/03/欢迎来到我的博客/index.html","e5ed660e084701131f6dbc5c469ee073"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","74b6b3e5b60a2cf9f6d96789a1893a9b"],["/archives/2018/04/index.html","3285f688e64f2d9d596577856f972da2"],["/archives/2018/06/index.html","dfe3e50c3d1c787eccce0c361286cfec"],["/archives/2018/07/index.html","382ae1be1387d7ddcf0bd864503cd31a"],["/archives/2018/08/index.html","f1144962b98022be08d0bf05db2fe6de"],["/archives/2018/index.html","c71456c78af86ae159b4262d8dd2dc58"],["/archives/index.html","d3a0d87f44cce1257945f6401916576a"],["/categories/C语言/index.html","a581533d8e3e36767cbd79fee263006d"],["/categories/Python/index.html","f75c6e13e95e971cf0a06c11cabfb587"],["/categories/Python/page/2/index.html","1b5c10f33401c7e4b67a3ddbcc163732"],["/categories/Python/page/3/index.html","ec73a9de9274a5655e0a147e31ef82bc"],["/categories/Python/page/4/index.html","d6212371b7fcfbbd17e4f7e7d9b25320"],["/categories/Python/page/5/index.html","797bf015f6abae35b453f351a3a90203"],["/categories/index.html","104ff935480905288f0a64ea39775f3b"],["/categories/博客测试文件/index.html","1ed742d50ee2b74b39891a1b44f4f372"],["/categories/随笔/index.html","5e2cc759e0fcbf426394ee94377cb085"],["/css/main.css","375097d09f65c27e24ec4543fcbe1ad6"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","90317b9f6a431e365c3295ea78bcf4e6"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","06619a056561a908ef3187c6e41899bb"],["/page/3/index.html","04aef42aaa396610c2e1d689b22fd0c7"],["/page/4/index.html","99ef892a91f67872023e2006a6e6abaf"],["/page/5/index.html","b2bbb726173e7edd1f8c3fb97eb5a340"],["/sw-register.js","972fefe5106475c4ae2ccacad336d4fa"],["/tags/Face/index.html","2d80181d49448f863c9fa01ab81a7140"],["/tags/index.html","556df2ab9ae6aa59685daf0edd5adb63"],["/tags/python函数/index.html","47d109c952160a97fc722416c4c70a1e"],["/tags/python异常处理/index.html","f77a986f9a4f5007a232a7583e97af7f"],["/tags/python模块/index.html","28416ad64a8dc10b75bb0d681d6e1c98"],["/tags/python面向对象/index.html","9de76b8ec4274fe5831fa4344e03737b"],["/tags/基本教程/index.html","4400f8dbdff443d983392a8357c06262"],["/tags/基本教程/page/2/index.html","cc84526fb7d6109a27282d1e47e67ce4"],["/tags/基本教程/page/3/index.html","089d294370c531249b6b250e34cc75b5"],["/tags/排序算法/index.html","b8062c81cc2fb053474493347c2e17a5"],["/tags/测试/index.html","4fd02e0986de7bc99b407332ff6efd51"],["/tags/经典算法/index.html","2949e283e66c48bdfa1945d5a212fca7"],["/tags/链表算法/index.html","9a1f784a5d18cea138ad975b0343b8a1"],["/top/index.html","efc9e921f563dd8bbaecb9cf7350ef3d"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
