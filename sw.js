/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","2cf2b81163239d22b719fd0d8c45a9e0"],["/2018/04/08/整合建立输出增删改查的链表/index.html","06ff8650c87e8ff155078c151d61a045"],["/2018/04/08/选择排序/index.html","b8a9a6500b280c3aa44fb6aa22e13f99"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","ad01f547bcad87023274f2b72677d019"],["/2018/04/10/冒泡排序/index.html","3d1054c7d064bcc02e4abccf47ce699f"],["/2018/04/10/折半查找/index.html","e6749e67c7c806b8ccf8dc727385e764"],["/2018/04/10/最大公约数和最小公倍数/index.html","4dc0bb31122479a043cf5262f394dbbf"],["/2018/06/27/python中的Docstring/index.html","940e10190fac70b807fcfbd61d65ad84"],["/2018/07/07/python中字典（key-value）/index.html","e15875b5ddd2016fd466efcf44ab4e58"],["/2018/07/07/python中字符串的一些基本操作/index.html","a909b598694ff28fa344a74b77228e0e"],["/2018/07/07/python中的元组/index.html","507e34a66c7396643af399f44834bcca"],["/2018/07/07/python中的列表/index.html","6bd599424b701b997d40ddd28504f6b5"],["/2018/07/07/python中的序列以及切片的解释/index.html","0232c4128680b882993591d5b4dc87a9"],["/2018/07/07/python中的引用和切片/index.html","9ab88057da18fa51929a6faf79cebfba"],["/2018/07/07/python中的集合/index.html","4b0dd788dc2281c5e8bfbae624cfe3eb"],["/2018/07/22/利用python进行文件的自动备份/index.html","32bf12f47fae1086b4956edd120010c6"],["/2018/07/23/finally异常处理/index.html","0bd564babd47a938d582eb091bd420e5"],["/2018/07/23/python对象的实例化/index.html","f990ca4b8a4b1d9f5749bde81dd113b4"],["/2018/07/23/python日志模块/index.html","3da7c44d0f96f28299397c4fec90e11b"],["/2018/07/23/python的pickle模块/index.html","35c2e7f9b9d05dc5e2eb4e269124d1ab"],["/2018/07/23/with-open异常处理/index.html","e28cf5a0de721ce3645091e8f4a1ad7d"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","3b7907b991aea3c7067e4d890ed32b18"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","d1eceea370fd7976ccb1151c76fbe32c"],["/2018/07/23/在打开文件的同时规定编码/index.html","12d24a5d931d06bb20f036e899d41311"],["/2018/07/23/文件操作/index.html","279908506acebfd65691289116576596"],["/2018/07/23/用户自己引发的异常处理/index.html","a4449d1f477a6af2e9fc5bd93658a050"],["/2018/07/23/简单的异常处理/index.html","3b4b682421d0cabf2dc285f9eab3c0d3"],["/2018/07/23/类变量与对象变量/index.html","ff6d14fc7b85c47981240687e1e03003"],["/2018/07/23/继承的运用/index.html","d99564c3ab2549f374c074d488a33c56"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","6723cac22e96daf6166e8ce586201a80"],["/2018/07/23/输入输出——简单的回文判断/index.html","cc4fc2c8db070a89814a59d0d3a53b89"],["/2018/07/24/assert语句的运用/index.html","8cfcb7b89c2747d80799e854aa3643ae"],["/2018/07/24/python中的lambda函数/index.html","46d52d9057306326071aec0e71a68be9"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","e434a117b118f0947f8283b3301eded5"],["/2018/07/24/列表推导/index.html","b08b7fb2ac2fe838903ba9b70139cf75"],["/2018/07/24/在函数中接受元组与字典/index.html","894a49a18de8b5c5dfbabb5034596967"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","45e2137f1b5c454873cff57751107758"],["/2018/07/24/打印九九乘法表/index.html","1eacd5d497a6127d87ec6ad0f15a5ba0"],["/2018/07/24/打印直角三角形/index.html","9db71d65968cab96faaa44e68cc97c20"],["/2018/07/24/装饰器/index.html","75987f1aa91978a8d93dc3770e2ec633"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","429cbfaeb4263b9e745f635377e4360b"],["/2018/07/25/python中字符串的一些方法回顾/index.html","45a89bb773cf02c326374cabd297e4d0"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","3fd5cd923f9cd0c6ceff52d092e13591"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","ea2355ebee5830ce765f273aa9e9f3a3"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","2b5d1040f3301c43df9e369a60fd10e7"],["/2018/07/26/python中完整for循环的实际运用/index.html","bcd50119075d6861a7dcfad240084e30"],["/2018/07/28/python中对列表和元组的切片操作/index.html","9db51f562fa9302132d99ee0a2dad457"],["/2018/08/03/欢迎来到我的博客/index.html","c5c10290623c5683cac5d13ba820c994"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","67f8e5fcfe795ab5a8f2b567de619f02"],["/2018/08/07/Python中的正则表达式/index.html","c5d11c016b4593167610163d2bc64794"],["/2018/08/07/Python中的正则表达式match和search/index.html","3488577d1e3887e8741ccc28841e1150"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","aad8cd4e39749195991866a1ad5d5af3"],["/2018/08/07/正则表达式中的compile函数/index.html","50dc9737765214b61a688840ca226573"],["/2018/08/07/正则表达式检索与替换/index.html","4c4a51d48714722cd14e8945fcc3d5f0"],["/2018/08/08/python中的__new__方法的重写/index.html","04c5af304ae4b9c803d956f8217a7328"],["/2018/08/08/python中的多态/index.html","2f14cb6a540f932b2a97c8d1e0022e00"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","042fc26b46e95e598a7f62953a96d046"],["/2018/08/08/turtle绘图库/index.html","f566fb2c72f6a943dcea0db042e1baa1"],["/2018/08/08/单例设计模式/index.html","da902b0c32464221d4ff1b3ca0dbe6b9"],["/2018/08/09/Numpy库的首次使用/index.html","06a0c578e41a25d06c2834e797e82e24"],["/2018/08/09/kNN（k-近邻算法）/index.html","9e740aba7edca883571e8b9d3c782762"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","77bc8c72acac752fe9eaa211bb6d719d"],["/archives/2018/04/index.html","29355cd476414fbae6a796a0b6481c36"],["/archives/2018/06/index.html","8db3b059c7847a68502a014a1e45da87"],["/archives/2018/07/index.html","db3dbf4f46d5cf6a084e2768e8ef8cc0"],["/archives/2018/08/index.html","2ac83b1c5736005eaa9bd95bc4540ce2"],["/archives/2018/index.html","a722e4eaf45cd93dd4cbb871ff4386dc"],["/archives/index.html","eb22cd691ce867a238309cdf7ea145e8"],["/categories/C语言/index.html","5023100389bfb0973010aded8837449c"],["/categories/Python/index.html","4d46c997f780a3d410b894ddde090c40"],["/categories/Python/page/2/index.html","992d85a7313b0bad3f4a8b4848076cff"],["/categories/Python/page/3/index.html","93c37b8bbe3c3670555cda4affc6bd62"],["/categories/Python/page/4/index.html","c7c264eec2b4aa6888835dac9c402153"],["/categories/Python/page/5/index.html","1e8343f9d045fd6204434ecdadac3a0c"],["/categories/Python/page/6/index.html","aab6270a480b90f46301454fe993ee5b"],["/categories/index.html","878c5ad15c7f7baccb63a5f550c56e12"],["/categories/博客测试文件/index.html","6e7378b094ae4b44822d1d515e8f24b0"],["/categories/机器学习/index.html","b07a4a36f93a6dc94a92df0ac8de07dd"],["/categories/随笔/index.html","4e1ce66fb392256db98faf68beefc9d7"],["/css/main.css","f6abf84c7886e941b3a515e0f9afbcc1"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","22ed7909c1fe48b3877fe347961cfde0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","624da6421a0337b5e0a70066936ba6d5"],["/page/3/index.html","27efc84a01fd1231d3590c35da0b0f03"],["/page/4/index.html","543fef6cb8d607f02015f593587863e2"],["/page/5/index.html","86d2cc09fc1419058cff0df02ee8e0b4"],["/page/6/index.html","b5cf108692a1f882aed351c5f1ca434a"],["/page/7/index.html","f2c847c535705119b602a6425d73e580"],["/sw-register.js","526db69c2e2ce8eaac02fe91b713ba85"],["/tags/Face/index.html","f24c21bd8b4e1fdce33efa90afae0ccd"],["/tags/Numpy/index.html","5d724dcbc441a30982b3b30d7bb0eac0"],["/tags/index.html","f15a028b4a994713e3f9a5eb14018369"],["/tags/k-近邻算法/index.html","d2dd4a86824cf7a9596c73415438238e"],["/tags/matplotlib/index.html","f3a6f5a04dc1878d45f18d2b05e7f8b2"],["/tags/python/index.html","b9f1b852be8031faba13d1d8705bdb89"],["/tags/python函数/index.html","ca6514c5f287d3c95966fb211de42d44"],["/tags/python库/index.html","ca058afcba72eb836c8352bb7a377979"],["/tags/python异常处理/index.html","e89c31c34aa1501f46e128f78eeba6b1"],["/tags/python模块/index.html","f13546b226ea8311e27eade054186e9a"],["/tags/python正则表达式/index.html","4b77d0ee34376d09d000e7a3dd07693b"],["/tags/python面向对象/index.html","f78fb0e4aa9dfe9e46468ee34c5bd6e7"],["/tags/python面向对象/page/2/index.html","618812ebf47a632a3b9aeb003d0509b3"],["/tags/基本教程/index.html","badc8297ac6680e4bb25b114ab07d0be"],["/tags/基本教程/page/2/index.html","da02a4f9077b2bdfed63b91c4e578202"],["/tags/基本教程/page/3/index.html","778b7ea37f194cd15b6527aa5364c6ad"],["/tags/多态/index.html","5fd43134e01e6bf19115f33a5277438b"],["/tags/排序算法/index.html","57baa7fe68c7385db5e440fff3e6c86d"],["/tags/机器学习/index.html","ee282219f0d8a039bd8c111e4c47c4ef"],["/tags/测试/index.html","4e461a91ee87c5b0b5af950907e192a6"],["/tags/矩阵/index.html","ec362c15a5043028f7ef6026b1298bdb"],["/tags/经典算法/index.html","a87dee66a5b5ccf3b14ccf1ec605bb5b"],["/tags/链表算法/index.html","8b0357910f12f5cd23a0a26cfa0bca0e"],["/top/index.html","827870c088fb4ed9290fa0a985f31d92"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
