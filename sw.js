/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","130eb654b9ac50ee4d033adacd7c83bb"],["/2018/04/08/整合建立输出增删改查的链表/index.html","32191ca48bac065882ae2834ad9215e2"],["/2018/04/08/选择排序/index.html","e45416312c74ff78cb8142b29c61ded8"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","877ab0f078a5b0168f0e6b381f5e2688"],["/2018/04/10/冒泡排序/index.html","e09b9e4249d71c64096014f3a3468ce1"],["/2018/04/10/折半查找/index.html","c66db70e03056206c22aadde2a2af4fa"],["/2018/04/10/最大公约数和最小公倍数/index.html","ae8677c1ad28f9af4bec3bd97d6a0c3c"],["/2018/06/27/python中的Docstring/index.html","d5a98ecd51535957d436194b7b05168f"],["/2018/07/07/python中字典（key-value）/index.html","a3fc477e17ff530defea53b88646d2c5"],["/2018/07/07/python中字符串的一些基本操作/index.html","e1202ed61f8abb1518b0947ff2463be2"],["/2018/07/07/python中的元组/index.html","f81808c3111d082adee5354910a4d885"],["/2018/07/07/python中的列表/index.html","dfd2b84d5e1212ed59f143f86f422232"],["/2018/07/07/python中的序列以及切片的解释/index.html","e80f7e90cc8d634419b86061cb4fb568"],["/2018/07/07/python中的引用和切片/index.html","b6173a599f76bc3908801de43a134bbe"],["/2018/07/07/python中的集合/index.html","9cad1e24b3ae0202a75521089dc56ce8"],["/2018/07/22/利用python进行文件的自动备份/index.html","4ddaf3422a97419ccab3c74b5a046ce3"],["/2018/07/23/finally异常处理/index.html","49af31ebf088104b2295dffbf0011510"],["/2018/07/23/python对象的实例化/index.html","43ffe0658095d647578e573aee62e831"],["/2018/07/23/python日志模块/index.html","a87cc8e70ede36123df0ea337e74d82f"],["/2018/07/23/python的pickle模块/index.html","447a3a64c9e73deede8f99eac7ad2791"],["/2018/07/23/with-open异常处理/index.html","aa9371737ea1bedcbfd204307d5d9755"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","c5e2c4461496107d39eeb5e000701a3e"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","c32c0391da6d7d32d03c370a6845988c"],["/2018/07/23/在打开文件的同时规定编码/index.html","b5ded1e815f5bbb7fbae792add8867f8"],["/2018/07/23/文件操作/index.html","a3bec63a9188777b8936574704f46943"],["/2018/07/23/用户自己引发的异常处理/index.html","0260887a6c04542c11948077443cb55b"],["/2018/07/23/简单的异常处理/index.html","c7488d7ec839d5a6e3a3a67e7e120089"],["/2018/07/23/类变量与对象变量/index.html","de8d665b5e07a8a9ae52162bfc0808b9"],["/2018/07/23/继承的运用/index.html","3b73eb0472916d47ed4a0319a897fb10"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","20d4c600d549009b40c7782c8a0f4dd4"],["/2018/07/23/输入输出——简单的回文判断/index.html","6299ad1b505521d89d51e69786f228ff"],["/2018/07/24/assert语句的运用/index.html","f26c010c14517becb6f77782f2b83bb7"],["/2018/07/24/python中的lambda函数/index.html","a8cf5a09f6e0d6112f34d6163565572c"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","058aa50d41a245ac852edb71a3c9c26d"],["/2018/07/24/列表推导/index.html","637ca563cc447369fcc04a4547259658"],["/2018/07/24/在函数中接受元组与字典/index.html","c2ff97f50a9c5bc6982d656404a16846"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","bff863411fe97f3bfde39be713171bcd"],["/2018/07/24/打印九九乘法表/index.html","5ec41f83e3d9e23c41d37a9b83995aae"],["/2018/07/24/打印直角三角形/index.html","749bf6865f382319475760e7bf822325"],["/2018/07/24/装饰器/index.html","6d3b64291c1f1de641ec5faa5bac9161"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","0ab4921e7c3135d316013a0ea6351b56"],["/2018/07/25/python中字符串的一些方法回顾/index.html","dd8f31d194edf0d9c157b98603c3e897"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","b3062b30d82f76663b08c9aa88b1df28"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","8c5ecef50654edda615b95f6d26a0913"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","6005923aae7a352e17bc640b577a3956"],["/2018/07/26/python中完整for循环的实际运用/index.html","7b5700aef890913f60b74379e77d7a00"],["/2018/07/28/python中对列表和元组的切片操作/index.html","28503b6ad7da19b8c8ea1e855f140a69"],["/2018/07/28/python中的元组/index.html","9a87297b5ebd845fb84e03dc23183f7d"],["/2018/08/03/欢迎来到我的博客/index.html","0901e1cd88f39b62a2a9cd6a1b8fde61"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","05580b5506731c6346ecbcfd89d0a6ea"],["/archives/2018/04/index.html","f29bb90db769554699eb9b60b6396fb2"],["/archives/2018/06/index.html","d9915b17578ec5a5893778a425a7e9ed"],["/archives/2018/07/index.html","a646ee47a8f78b6ad7fee83c608d5550"],["/archives/2018/08/index.html","1b066633803bb351b7f968c4c77991bb"],["/archives/2018/index.html","790d8832935889bdaf7ed907d1c4a547"],["/archives/index.html","5b4fbc0ba0daa608953b87c32d0df88d"],["/categories/C语言/index.html","3e819a69e668e24e23cb583a4ac85f40"],["/categories/Python/index.html","4b223d9fa6ea4097285ca565f265d167"],["/categories/Python/page/2/index.html","93b52d9da9820fe6a81dc3f9a6af7c2e"],["/categories/Python/page/3/index.html","d818a996dd579affff6a47592f0c1f47"],["/categories/Python/page/4/index.html","a0b7d6f8a63ac2b33d41d3e6aee10e13"],["/categories/Python/page/5/index.html","74d9918c2a00c57a92b5d8d88e3dd793"],["/categories/index.html","2e8612f76ad9ad09878c1614524e095d"],["/categories/博客测试文件/index.html","7914aa8682aa3f717721b925b9134b5b"],["/categories/随笔/index.html","ca16b85abca170ebd027ac21488188db"],["/css/main.css","60ec97b6de0b0385521c1db624bc067f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","7de86544117598491cdaf40d5c2fada8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","082ddfef122935f9e3e7ed855fe7b362"],["/page/3/index.html","5e143740253b1af42d8fde25c6073f1e"],["/page/4/index.html","90be48eca1621b321ef3ad8187b8c2c4"],["/page/5/index.html","33ecf59fffd4aabcfcb971c7a7c08704"],["/sw-register.js","677c36a7374db323b83df14975725b06"],["/tags/Face/index.html","45897e9903c1e6f185db481e81311ebc"],["/tags/index.html","7f188fdcf4a08bf5fc2f36a4940a4505"],["/tags/python函数/index.html","33fb35979bfc951395dc757e9dbd0827"],["/tags/python异常处理/index.html","42758e1e06b5bb5fa0a88edf709bbad5"],["/tags/python模块/index.html","40ba238cffb499055d3da61a490efb0b"],["/tags/python面向对象/index.html","1b6c2da1ee3cf8a1ada27f2572ce4135"],["/tags/基本教程/index.html","cea8d3e3b278d72b73ffe432560078e3"],["/tags/基本教程/page/2/index.html","13d04c8f933a649cdb65ddeef6d59ea8"],["/tags/基本教程/page/3/index.html","a853638b6732bc07941c8d37301bfd40"],["/tags/排序算法/index.html","20dc2ffa358559a9d2a306c2ab216774"],["/tags/测试/index.html","5cf924d31c5c77c28daef45faaa20b86"],["/tags/经典算法/index.html","5bf14d8336b544fbf8e5ba9cd398f94d"],["/tags/链表算法/index.html","9fc6250f45855a801a17682b6db75512"],["/top/index.html","dac9d9a345cb060833ce583cc83678c6"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
