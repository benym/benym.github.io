/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","4bbecf74470c412a8df609aa4237e474"],["/2018/04/08/整合建立输出增删改查的链表/index.html","9940688428b80f422f1e2d3fa989d15b"],["/2018/04/08/选择排序/index.html","8c8c37dec1bfec9feeb3eb0aa3991a03"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","05647fc177dc9b0009d80330f8b9f18b"],["/2018/04/10/冒泡排序/index.html","3d6138e737c77a5a0c232fd3a856da17"],["/2018/04/10/折半查找/index.html","b5513d979665d5b7ecb2215bd4f6a639"],["/2018/04/10/最大公约数和最小公倍数/index.html","184b836577e19ad9ee7b0a7b70c7d1e4"],["/2018/06/27/python中的Docstring/index.html","d04b921fd5fb2defe83481b7810471bf"],["/2018/07/07/python中字典（key-value）/index.html","4f090d67d46fda934e8a31aa42fb5c50"],["/2018/07/07/python中字符串的一些基本操作/index.html","eca2d49ec334c72640e6edcd49a1374f"],["/2018/07/07/python中的元组/index.html","e5549bb9a0aca5444b4539d4f0afbe12"],["/2018/07/07/python中的列表/index.html","b88dc2da8e34e905a8be02183bd9b859"],["/2018/07/07/python中的序列以及切片的解释/index.html","61dc3eacba46dda9a863fa89858ce0af"],["/2018/07/07/python中的引用和切片/index.html","57085fe66138b6e9b79cff895fd191fe"],["/2018/07/07/python中的集合/index.html","811d3e5f6f7562cad5c523ba141ca566"],["/2018/07/22/利用python进行文件的自动备份/index.html","a709b1601bebf707cc82e47e3d962d80"],["/2018/07/23/finally异常处理/index.html","6c3782637675c96aa18a8c8049f4b2c9"],["/2018/07/23/python对象的实例化/index.html","de52286398eddd2bce3e36ebe17a4461"],["/2018/07/23/python日志模块/index.html","4c6ee2cbe1be6881ad6a41f9c263da3d"],["/2018/07/23/python的pickle模块/index.html","020ca88ecc004c9504e9e1f4f4692243"],["/2018/07/23/with-open异常处理/index.html","cafa9348ced0247ad0b15de174171920"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","db7ab63314c8d6f4f7d7f8c24d33fd45"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","ca51a3fd57d54942fed5523c57973e5d"],["/2018/07/23/在打开文件的同时规定编码/index.html","4e33cca28a05171c1928b396bb406df2"],["/2018/07/23/文件操作/index.html","938296be4b64898705771969edf8ed74"],["/2018/07/23/用户自己引发的异常处理/index.html","4f2c46e1ebb55560598f6df00fbc4d04"],["/2018/07/23/简单的异常处理/index.html","a5ecb5189fd5611c63ce6eee86538748"],["/2018/07/23/类变量与对象变量/index.html","ebc3e923d2c1023a2077090f39ec67fa"],["/2018/07/23/继承的运用/index.html","33667cb0917c2ac1c149294736b315d6"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","17fffd5605228c3f84afb5a6cd3dfe37"],["/2018/07/23/输入输出——简单的回文判断/index.html","3ba066dbe350c9bec96bf4de8e42c89f"],["/2018/07/24/assert语句的运用/index.html","798bfc3209f16d3297e89a8447c6e496"],["/2018/07/24/python中的lambda函数/index.html","01896d6fa00bd97b84751eb9f123d68c"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","702c5c9d5a1d07843e52d6f1df4b7f7f"],["/2018/07/24/列表推导/index.html","a8d6643badde43218237cbe175569f9c"],["/2018/07/24/在函数中接受元组与字典/index.html","0cda8485d16d20f2ad561f841b7bbe02"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","e177365f6745dbd56a33f08eb370daaa"],["/2018/07/24/打印九九乘法表/index.html","7788f7dc7299c63cb10fd545533b193e"],["/2018/07/24/打印直角三角形/index.html","3e72ec038393c8b617ece51007673490"],["/2018/07/24/装饰器/index.html","9c163480ee4968ddf52187c656dcd0b9"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","25e6de4038448944fea8ad45b164f989"],["/2018/07/25/python中字符串的一些方法回顾/index.html","61dbee62ebadb9d78e18d83921787ddc"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","c3ffd465f00306cab75d4590d881e14c"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","ed04af13605f9b9db4faf150af2997a0"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","a3e823eecb81a1aca695c207647934e3"],["/2018/07/26/python中完整for循环的实际运用/index.html","feb3b8051815c57ab66d2ed427cc1e97"],["/2018/07/28/python中对列表和元组的切片操作/index.html","e5b5bf0a3b0e4884106e365d0a7b5d04"],["/2018/08/03/欢迎来到我的博客/index.html","7f08c8c7c5bcce82df15713572dc297e"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","e9dc2e3c00361370cadba0c153970398"],["/2018/08/07/Python中的正则表达式/index.html","4da375c0e0bac590a2f527db6f49f94c"],["/2018/08/07/Python中的正则表达式match和search/index.html","891be112c20b39c7e508a22b2b69e1dc"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","1541a60323a151504803c5d68cb3a485"],["/2018/08/07/正则表达式中的compile函数/index.html","98a2e51398868cc7987a4b2fa40fabb0"],["/2018/08/07/正则表达式检索与替换/index.html","846ff019570784c9fd6b76c38693b514"],["/2018/08/08/python中的__new__方法的重写/index.html","d29143e5f993ace753899b20dd05a48c"],["/2018/08/08/python中的多态/index.html","f51002e03a624e3b2e25efaff6640bed"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","20756605874a7dc699b9fff005a1cdd9"],["/2018/08/08/turtle绘图库/index.html","39fbe1fb13e91804584cd9d76db6bf39"],["/2018/08/08/单例设计模式/index.html","ff93f088f9ba2f7e221c2f1dbfad75ce"],["/2018/08/09/Numpy库的首次使用/index.html","fc1bffa2365fb8bbffe766aa0a60669f"],["/2018/08/09/kNN（k-近邻算法）/index.html","922f0bb32a47ff522b56ac9e4f0f644a"],["/archives/2018/04/index.html","3cee4a6640da0cb6b782163dab5ac7dc"],["/archives/2018/06/index.html","a7e607bc53ad2e22a0b695416e7acf54"],["/archives/2018/07/index.html","4d994758101bba26677e4baa480d35ea"],["/archives/2018/08/index.html","f3bd41a70d1f9bc316c1d0dfdb897e59"],["/archives/2018/index.html","1dde7de1a34b2c0c7c511b71ec075d46"],["/archives/index.html","761162574d97bb3819bb971c4896e1a7"],["/categories/C语言/index.html","67c12e41c6a3e09554e2ba0bde894f1e"],["/categories/Python/index.html","ef01257982ad577c5f273e4b50cc9001"],["/categories/Python/page/2/index.html","2343d1f3cc849c0ced4bc14424cadbb4"],["/categories/Python/page/3/index.html","194f24aa58218908a4255169b2f6613e"],["/categories/Python/page/4/index.html","97d4e3191151c0c5cb84ab63774bff77"],["/categories/Python/page/5/index.html","a3f7e9df4e07a51cc5eb90a3a0e375f2"],["/categories/Python/page/6/index.html","6d069377e4b95a610bbce292268daf92"],["/categories/index.html","000b7e52e67621da02ae1ef084d83686"],["/categories/博客测试文件/index.html","fa8fb63061835b557977d794f1e33d2b"],["/categories/机器学习/index.html","32ca74acb8d2e24d26a4c63c77318abd"],["/categories/随笔/index.html","0c32ca331095691b3f7b8f56843be906"],["/css/main.css","16c6de000ed44275337bb26819156a4c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c175b3bf5df2f6105f72e0a46d76f207"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","179ec9f435466fcaa3b3d22b2396e3ee"],["/page/3/index.html","478a72f44682865c3f2a0ddad26b159f"],["/page/4/index.html","67a677e245680b67c56e356058c9b56d"],["/page/5/index.html","82d8d4651970e546e8548f9a628e5a12"],["/page/6/index.html","5080ebca2d292d011aa640003acfc998"],["/page/7/index.html","19c8fa7008f2b0dd4bf6977f8724bea6"],["/sw-register.js","c1f6e98788c6ce9aa2c56d0b0543e22d"],["/tags/Face/index.html","fe2661f883d196dc5b779638d8dc9aaa"],["/tags/Numpy/index.html","32e303dddb0aa256dc6b010282d5f45f"],["/tags/index.html","e47a5338df7aaba36130d4f7f08b0878"],["/tags/k-近邻算法/index.html","2e02e3b9ae346332ee239da7b6f5eae0"],["/tags/python/index.html","03aeb86c2e12dab07ddc5bab5d65f432"],["/tags/python函数/index.html","48b4d06c71fb971d5af8095363a5b7bc"],["/tags/python库/index.html","9aaa3a5532dec95b4e7c49cdc235174f"],["/tags/python异常处理/index.html","59a8f6a51a7113658af211167e0ff953"],["/tags/python模块/index.html","2936a6d5cb71dfe348d75c9488a90e62"],["/tags/python正则表达式/index.html","89a452852234e135397a3a748b713509"],["/tags/python面向对象/index.html","1351783191c5edd2b629fca3be651d57"],["/tags/python面向对象/page/2/index.html","8b9983d936a6ee6cdb22d7d4e4e88412"],["/tags/基本教程/index.html","5f393b1bc0898babdbba001fb150e327"],["/tags/基本教程/page/2/index.html","73b2120cdbbf2764d44aef4242865461"],["/tags/基本教程/page/3/index.html","677fb434fbe352a53a756a2ee5573226"],["/tags/多态/index.html","c841faffdef6019ecd6c4c5ac45067df"],["/tags/排序算法/index.html","a921c90c86cce4c7624b658f340601e2"],["/tags/机器学习/index.html","21db5e57a159ed9949e6460ff635ec6c"],["/tags/测试/index.html","16a881fb338a3f10a89e10fba10040e2"],["/tags/矩阵/index.html","d66bc436729f79fd4dff4cb1daf5a07c"],["/tags/经典算法/index.html","a4d21bdb9c618e54a3688bfb2ce37350"],["/tags/链表算法/index.html","a4327c461d1d561bbb584f4e229bc553"],["/top/index.html","636cc01458bad8b8b1128f517961f951"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
