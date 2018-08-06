/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","9983b01520f66b0beb88cbd1ee405b6d"],["/2018/04/08/整合建立输出增删改查的链表/index.html","c5753c96be1b39347de2c4f3605f6e4d"],["/2018/04/08/选择排序/index.html","85ef0aec49011ac82ee2610858d31e99"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","b1b8c0a04d447b3e980e157353e416dc"],["/2018/04/10/冒泡排序/index.html","46cea9a596e188cce8af7710a8525ca8"],["/2018/04/10/折半查找/index.html","051122d23b52a7c8c376e2654102be83"],["/2018/04/10/最大公约数和最小公倍数/index.html","c9a6b47f843db25d18e54ebbcb20588f"],["/2018/06/27/python中的Docstring/index.html","d346bd57e87b42e5d0da60e19efa1b16"],["/2018/07/07/python中字典（key-value）/index.html","29f1bfcf91ed3ff66869dec18ff9d4d7"],["/2018/07/07/python中字符串的一些基本操作/index.html","2b6be24eb2a564cccbde8ef5af4d2226"],["/2018/07/07/python中的列表/index.html","97a5757f45b1984c663d73b82cf103ff"],["/2018/07/07/python中的序列以及切片的解释/index.html","0e6138dced22b99ba943b7fee6b98e09"],["/2018/07/07/python中的引用和切片/index.html","873d19b29235124025f6fc247f1d7051"],["/2018/07/07/python中的集合/index.html","d2b6131f84e4c846574eed5b159ff0b9"],["/2018/07/22/利用python进行文件的自动备份/index.html","3516dfd3b74808aa312ec6b62207f964"],["/2018/07/23/finally异常处理/index.html","03d12cbfb53aca9445e46f9f1514c76a"],["/2018/07/23/python对象的实例化/index.html","41280c6edc87374957e496c8e5c23d09"],["/2018/07/23/python日志模块/index.html","75d66a88b4ba6ed09d862ccb5077f7cf"],["/2018/07/23/python的pickle模块/index.html","2a3345f435b7bbb4cd40ab02bdb719b0"],["/2018/07/23/with-open异常处理/index.html","94c2d0ae6bf6806b2f576b2bfd85e277"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","b404286a3b7085c8febea63db6ca701e"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","d6ca0b03adf84e92ee1a026b53398371"],["/2018/07/23/在打开文件的同时规定编码/index.html","0a550395df9cf10ec399d3968b8c69d8"],["/2018/07/23/文件操作/index.html","9c0b8aa3347a32328121ea90e3204b69"],["/2018/07/23/用户自己引发的异常处理/index.html","54a54387ce4b80781a54f0933c8b8ba8"],["/2018/07/23/简单的异常处理/index.html","d62ed6fa47282f193b73ce25f9ea155e"],["/2018/07/23/类变量与对象变量/index.html","4ef8478b24340845980d21dc3fffacd5"],["/2018/07/23/继承的运用/index.html","40c011811c67ec8e086cc79a8e0abee0"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","4ebfbe14f3d0a103e58d89207354f696"],["/2018/07/23/输入输出——简单的回文判断/index.html","d40e6abb6c05a192d84a8a3c0acbc5dc"],["/2018/07/24/assert语句的运用/index.html","18471a47c9c355fdfb1c9ce473e22e1d"],["/2018/07/24/python中的lambda函数/index.html","02a325d66a159d1b8264c4424af8e17c"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","02fbce316dea2e5d659bb8aa4f71e62a"],["/2018/07/24/列表推导/index.html","a0b4cd02220c1f5a564a7a5b6a63c91e"],["/2018/07/24/在函数中接受元组与字典/index.html","22feb8855486a47590407281ecf66d3a"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","9493e0bcf9e0b15376ad7b9b84a61e4a"],["/2018/07/24/打印九九乘法表/index.html","cf785c7b0f75ecc425e75f086700ba0b"],["/2018/07/24/打印直角三角形/index.html","dee6efbd56256fe49bf373d8d8a2e1c8"],["/2018/07/24/装饰器/index.html","d6d1dbdc58ef260afccaa01af0716141"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","f19336828f1bd43e6d677d0c2d65cdee"],["/2018/07/25/python中字符串的一些方法回顾/index.html","870041aeeaf32d76e66f03034fcfd5c6"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","8f468d0097472bfaf46ec9827c222d7d"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","6c03af724ae6eaba9c794215baa46fd3"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","6c717fa1c0f6a61c86219f32bb1bdd1a"],["/2018/07/26/python中完整for循环的实际运用/index.html","6b3c1f7e9208d75d7d4bf18b1bd326a5"],["/2018/07/28/python中对列表和元组的切片操作/index.html","2d09b17e373dcaa1117bb7b52f4bcc82"],["/2018/07/28/python中的元组/index.html","e0e6654e1366af100218884b2edc22f2"],["/2018/08/03/欢迎来到我的博客/index.html","4e674ef5c7cd82ab2ab75ca1739c81e4"],["/archives/2018/04/index.html","e10836e66ac8336b4450d2d799de39bd"],["/archives/2018/06/index.html","cc42ba0b561ec4b5ff745821f6cc5cd3"],["/archives/2018/07/index.html","ef0338c1dd815d5658737d922adc89fa"],["/archives/2018/08/index.html","3ce5162e336d11b535e4cc97a7290e49"],["/archives/2018/index.html","cfe9eaa1133ac1e2944b8f678ef4bf76"],["/archives/index.html","b9c2d10320b7c5d9c7e011a32cb274fc"],["/categories/C语言/index.html","eae10daaa508db6949840b461f96336d"],["/categories/Python/index.html","176485c5580da252bf5752ad35c49092"],["/categories/Python/page/2/index.html","00f01721975a847a328604ceb5fb2c12"],["/categories/Python/page/3/index.html","f0b0c51ee4c1b685cfaf55fdb976e7c4"],["/categories/Python/page/4/index.html","130dbda4fc64a626c8ea50159d61863e"],["/categories/index.html","3bf528b90eb0c50ce1dbe3f683cbad6a"],["/categories/博客测试文件/index.html","42f70eafccae719faa8f44b34fb85152"],["/categories/随笔/index.html","8c3296c23fefad152f5723f379b5f819"],["/css/main.css","77a30c8b41c1c14aa9d66a5f98e82bf2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","53f14bceadd85b249a8bd243ef71e398"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","435dfa2e92ea4d8684c677f886dc5ab2"],["/page/3/index.html","8d20d054869cd95265d45580163e9266"],["/page/4/index.html","08f520d0bc69f5a8b856d825788d0140"],["/page/5/index.html","07ac8870957f284d343722a1f3b15cf2"],["/sw-register.js","6b598845fc6fdf00e93a2369471bcbbc"],["/tags/Face/index.html","2f7d44f4b5cce75c7f27f483fc35b8c5"],["/tags/index.html","ce99e225daec2fcecfc48d97e2779bbf"],["/tags/python函数/index.html","33afe41bcfbb8250c6030a1a90f5d0bf"],["/tags/python异常处理/index.html","b6cfbfd0a73a5fbf123e78e27fb8cb97"],["/tags/python模块/index.html","421ce3425327b57e6f937763d5bafe61"],["/tags/python面向对象/index.html","c5a65d55b9aa130f5c8a3ffe2909e934"],["/tags/基本教程/index.html","5a726e0a3f53d9e3e258d82eb07464e3"],["/tags/基本教程/page/2/index.html","fccbc92cf34da57f81fe9ca9f346e6c8"],["/tags/基本教程/page/3/index.html","7ca781e8b3ea112c57f147da5667d6d3"],["/tags/排序算法/index.html","6b2062f811fdbc999ea5cde96c8705a0"],["/tags/测试/index.html","0b50832eda8f13b406d4818c0d25de13"],["/tags/经典算法/index.html","e0e8b1f238a2e4d54dbe15d8a1b4bea6"],["/tags/链表算法/index.html","ac8eb3e74780c1ae6fbbb71dfef26595"],["/top/index.html","4da9eef2012be0ab80fcfc233d91620c"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
