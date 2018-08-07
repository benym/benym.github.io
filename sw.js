/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","788ae986ed3885e11e48933215f77be3"],["/2018/04/08/整合建立输出增删改查的链表/index.html","7e5c5c8964444bb00fb33b3bb4b4761a"],["/2018/04/08/选择排序/index.html","1c24fe8b2546beffcf88ea229fcaa729"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","34823367e2e8b5d5b2790ee11d251aee"],["/2018/04/10/冒泡排序/index.html","c714051fab8ebfd3e776e5be9f198fe0"],["/2018/04/10/折半查找/index.html","d5480b297c87286de24b40284e38dc40"],["/2018/04/10/最大公约数和最小公倍数/index.html","aad2bd753873975f23c643124f579061"],["/2018/06/27/python中的Docstring/index.html","27f2766fddc7ed1274a65bc6c990cd4e"],["/2018/07/07/python中字典（key-value）/index.html","765b8ff4b3e7a6999f9c2bdd54a4e902"],["/2018/07/07/python中字符串的一些基本操作/index.html","a1c81af28b3cf755e9c65df4cf844fb5"],["/2018/07/07/python中的元组/index.html","c6ba527c530129b5b785598635e75843"],["/2018/07/07/python中的列表/index.html","7d69f5174f6efbd637848efc16dd5df1"],["/2018/07/07/python中的序列以及切片的解释/index.html","1348f79518731c15ae205938fc6fe226"],["/2018/07/07/python中的引用和切片/index.html","0984f5c79465b77a2b4b57cb7a6a1901"],["/2018/07/07/python中的集合/index.html","7f75297a4b6a68820744a9c7b46fa59e"],["/2018/07/22/利用python进行文件的自动备份/index.html","d91e80e616003a349a53218bb28920cf"],["/2018/07/23/finally异常处理/index.html","a1ad3bd03da9db07618836cbaaf8b81b"],["/2018/07/23/python对象的实例化/index.html","bdc1fae724aea5a379ede96f7f03f89c"],["/2018/07/23/python日志模块/index.html","2bd07d8412719d516064405b603f494c"],["/2018/07/23/python的pickle模块/index.html","637820d2bd9634b691a30279ce3081a4"],["/2018/07/23/with-open异常处理/index.html","a2fc2e93c58ddd359aadcb104a22f052"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","fc5364301cae975bee6e60e7c516e8c7"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","1f967847c1983f61a133d533530eb923"],["/2018/07/23/在打开文件的同时规定编码/index.html","dc8bb0a69a5cda2121d11be03498f306"],["/2018/07/23/文件操作/index.html","3b996e1899e01e5c6320f3ecf4627de3"],["/2018/07/23/用户自己引发的异常处理/index.html","935bfa2ff60955da1298067fc8183ec6"],["/2018/07/23/简单的异常处理/index.html","3d4d240eccaca824f689656bfdf16ac3"],["/2018/07/23/类变量与对象变量/index.html","02381fe25cfb6916e541a12863fe0429"],["/2018/07/23/继承的运用/index.html","a3453e974310d9ca8f40403055132315"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","4a77c2b5ee7c841647410d3520a82587"],["/2018/07/23/输入输出——简单的回文判断/index.html","0ba2db02c44265b990e0c40751cbf195"],["/2018/07/24/assert语句的运用/index.html","354c1b7b9ad42212c77524dd1813a55d"],["/2018/07/24/python中的lambda函数/index.html","c3d0ab307e7d6a00d4420ff66e0b01df"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","55d818368ff269c6b2fc2816b5c4b53e"],["/2018/07/24/列表推导/index.html","6d84f7177a16975a047e3452b754ac65"],["/2018/07/24/在函数中接受元组与字典/index.html","227b2eb3715204d9453e7f11ee4029ca"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","110c3ca78ed7d6f5fa60facfe70685a4"],["/2018/07/24/打印九九乘法表/index.html","efde276af875076d47eb44a510703bb3"],["/2018/07/24/打印直角三角形/index.html","9f05e24e9ac3a9e8d775b8ab5533795d"],["/2018/07/24/装饰器/index.html","3f0b3aeaffbcc4ecde37e60a179a5695"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","91e4eb649910d036ba622cf3cf933dd3"],["/2018/07/25/python中字符串的一些方法回顾/index.html","eeb0f5086d36a1067cddd37ce6d92ec0"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","8bc4817f37dce93ec521a8927e4e8a3b"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","818629a0baa301f04100248ea53c2f28"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","c4879d4b78ad4ded992bf81ffc2f06c1"],["/2018/07/26/python中完整for循环的实际运用/index.html","468a8943250a10ed968d81892ae03e6b"],["/2018/07/28/python中对列表和元组的切片操作/index.html","fde4d4a743ad4f703fc1c8eb8ea2311a"],["/2018/08/03/欢迎来到我的博客/index.html","65405460b6af1e3a75aec7ba55ef047a"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","a517665d37c123aa07c3716705c95662"],["/archives/2018/04/index.html","dc8ab6097b8e90002b24ff28370040d4"],["/archives/2018/06/index.html","0f8663f542d9200f86639ac534fe0843"],["/archives/2018/07/index.html","bc7214e5cf9911b2bdb0588d960aaeba"],["/archives/2018/08/index.html","ecf1a1884f23e137b6bc8967cd6cc017"],["/archives/2018/index.html","86f9d8e4ffec4c11ae85f66667219b6c"],["/archives/index.html","a479e8850f666ff73eeb78a06c64a4a7"],["/categories/C语言/index.html","8a9c2811aef6734fd0cce496f797a4e5"],["/categories/Python/index.html","66b3990901114b1924356f71c6358ac6"],["/categories/Python/page/2/index.html","da81bf8ac483be818b0290989db57cf1"],["/categories/Python/page/3/index.html","7df270a87870e4cf27350380fa889ae6"],["/categories/Python/page/4/index.html","4b859421bfb90997d6baabc39bdc3eb8"],["/categories/Python/page/5/index.html","dfca9505b916facde7caaf7a44e48092"],["/categories/index.html","896bdab7c40590428246736541539a99"],["/categories/博客测试文件/index.html","ca591f55cf8990bafc1f009e9d1817dd"],["/categories/随笔/index.html","22dd1f8fec16662f4c34c588efde47dd"],["/css/main.css","b228d04c6ece00e45ddc63f9285f2fd1"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d818ffe594652ab9c90c326fa53ff42a"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f842d183a08fae84131b5b2824605e88"],["/page/3/index.html","dcd9b734ee8b05e0758ef81208eee94c"],["/page/4/index.html","638e278868d42667c5f9c9be53a883a0"],["/page/5/index.html","1c3343de68128e3a976a8d86cb8d4c00"],["/sw-register.js","adde202e2061c1c1df6b4b2871279450"],["/tags/Face/index.html","8a4e640fd5114ac1af08c5988f53029b"],["/tags/index.html","4e01ff5516b30995604188c30f28aca4"],["/tags/python函数/index.html","7390a9157996cc375fc5ab42b57205a5"],["/tags/python异常处理/index.html","8c24d5f8f6a8663787713fe2a2c5f310"],["/tags/python模块/index.html","709cd54773d4ff50a2c4363c629753f3"],["/tags/python面向对象/index.html","514f6f21335ccfadbf199adb86ec6eb5"],["/tags/基本教程/index.html","926e359b3927859cb43da4f195eadda9"],["/tags/基本教程/page/2/index.html","70d50973ca799a7d96394a6481de9c69"],["/tags/基本教程/page/3/index.html","85507921fb60e12b7adce50ecb07b3c2"],["/tags/排序算法/index.html","99420184251a3433309aa198c6379cba"],["/tags/测试/index.html","be90503a1c4f52ba09a448daefb79528"],["/tags/经典算法/index.html","8f2b19324ead9db5c2aa1b4453de51e3"],["/tags/链表算法/index.html","a5580edeebc8882088862804bb3a55b9"],["/top/index.html","1c687c8c99af110483de73a0254bf4a1"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
