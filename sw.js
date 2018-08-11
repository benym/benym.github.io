/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","8efff12d6f1b60e2a72ad69495f5edc1"],["/2018/04/08/整合建立输出增删改查的链表/index.html","8c3781338891a2b3e1cdbddaec45ccdc"],["/2018/04/08/选择排序/index.html","5b735225141d53cfc17d36fa95c8e4c9"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","14f22d77c6d262dd689f4e81d7e15590"],["/2018/04/10/冒泡排序/index.html","ae33a9abbe4e1c84bcaf64ea1c496b88"],["/2018/04/10/折半查找/index.html","a8b4f96c62caeaede12293a688f303c7"],["/2018/04/10/最大公约数和最小公倍数/index.html","a35bb2e0b709e21af00df947c6f5898c"],["/2018/06/27/python中的Docstring/index.html","ead321bac74642f7bb4967b6a3818336"],["/2018/07/07/python中字典（key-value）/index.html","b7bdb1891742703a6ebf780a8e9ff051"],["/2018/07/07/python中字符串的一些基本操作/index.html","c1ee44a74607f9257abc3f414240e58d"],["/2018/07/07/python中的元组/index.html","a3d8f5377639a020225c7283fa95e13c"],["/2018/07/07/python中的列表/index.html","9195b8de65e497c3f6af30ddb2c8a347"],["/2018/07/07/python中的序列以及切片的解释/index.html","03ab4feed4ddcd0b145816878d892b49"],["/2018/07/07/python中的引用和切片/index.html","fa9862e40c77b1d61fb395847d5ef551"],["/2018/07/07/python中的集合/index.html","ca6693597e17cf31276585bdd7c3a6ef"],["/2018/07/22/利用python进行文件的自动备份/index.html","34c9d6aa4decf3afaa54da1c1d7fd564"],["/2018/07/23/finally异常处理/index.html","4852c738756fd15dbe05c12cb896ad2f"],["/2018/07/23/python对象的实例化/index.html","ba21c86ba727cc63c2f453bedbc59dc8"],["/2018/07/23/python日志模块/index.html","a7445d448854e5d207e98e3a55ca80fd"],["/2018/07/23/python的pickle模块/index.html","8d4922a5826fc32c8cea498239580151"],["/2018/07/23/with-open异常处理/index.html","92ad653debe3aa783783e3a48754e144"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","bfb125dd38d00efc0cb1b07dbb9407ea"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","b828dc62335d7de1d666299aa2574891"],["/2018/07/23/在打开文件的同时规定编码/index.html","c8a331a7aef00e7f18227b31eafd186f"],["/2018/07/23/文件操作/index.html","223380707c1debc617acf6d472bd4bc9"],["/2018/07/23/用户自己引发的异常处理/index.html","3fab13cdeec95dee97a7b283504dfc2a"],["/2018/07/23/简单的异常处理/index.html","8aac82117d8fb3b314511e4c5d3ac458"],["/2018/07/23/类变量与对象变量/index.html","08a5f4e4fe4a136afb3b058c71fa5bc2"],["/2018/07/23/继承的运用/index.html","47c7a342d4d4fe2efbe08a4da497554d"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","4f502319a8870302d86e7b98e19ebf5a"],["/2018/07/23/输入输出——简单的回文判断/index.html","f0193ec4d181ed3f95893bf2f30fafd8"],["/2018/07/24/assert语句的运用/index.html","24ddedd7814a1d443c0fea94b6bcadcb"],["/2018/07/24/python中的lambda函数/index.html","e7704c52b5db81e88088667acb5441df"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","fef28d7f4680384bad835a56ac2af00f"],["/2018/07/24/列表推导/index.html","eace87ebd06ed576f1ebd007a1283f17"],["/2018/07/24/在函数中接受元组与字典/index.html","3535f200263995f653eb5c91c9f20c76"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","5fd1628e1e0733b6def5b3172a3cbc06"],["/2018/07/24/打印九九乘法表/index.html","781846d6c63bce1dd9768805884d2c4a"],["/2018/07/24/打印直角三角形/index.html","f141456e7c9f4371bb629218500fbcba"],["/2018/07/24/装饰器/index.html","c81447f2cb38d0dfabff646c47f0a005"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","e59fbee179ab8dbc84622def1c50b648"],["/2018/07/25/python中字符串的一些方法回顾/index.html","1ea4ff9b2167144a5511156b5b7430e5"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","f80d90a43a32c9ef146143115750ff75"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","69db5fae8b3c0745dcb647433b15ad7d"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","d4de9834722c1648dad3114f2e0fbbb0"],["/2018/07/26/python中完整for循环的实际运用/index.html","d9182554053a6169b4d67a9361d76d49"],["/2018/07/28/python中对列表和元组的切片操作/index.html","1bb38ba1d9bc839cb802d91d1d530bc0"],["/2018/08/03/欢迎来到我的博客/index.html","a4bff1dc5c147e3cadac64fceae9cd1d"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","4503777d7ca5baf385d78c25e8bd2f9c"],["/2018/08/07/Python中的正则表达式/index.html","b1712ca61848d598c299dfdf77698396"],["/2018/08/07/Python中的正则表达式match和search/index.html","1f5b262564f5e42cfc2e14f67abdc34f"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","59e02bc242078b6eafa6b68b6c80dd45"],["/2018/08/07/正则表达式中的compile函数/index.html","7e0d33b6aa3daf5682735fed1678bf44"],["/2018/08/07/正则表达式检索与替换/index.html","5dd325a97c9e79aab823b6fb4243be19"],["/2018/08/08/python中的__new__方法的重写/index.html","32169027224e9dfee2d6862545efc275"],["/2018/08/08/python中的多态/index.html","b64893117b4ed84828121c5dfb077595"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","e491a1a6b027fa5f6d495e69f283845a"],["/2018/08/08/turtle绘图库/index.html","32aec70a3e7cb61f3bf0bbda0f3b37b0"],["/2018/08/08/单例设计模式/index.html","ea0f54f5770e25259a941cf0f7817369"],["/2018/08/09/Numpy库的首次使用/index.html","154ffb2d70d9b814018cab4d054fa622"],["/2018/08/09/kNN（k-近邻算法）/index.html","331136ee2c413d19aebc7b62d01a9506"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","566e3316247f6d942030e34f2f438674"],["/archives/2018/04/index.html","a8571344c8839fa24af661bc1d99b2d2"],["/archives/2018/06/index.html","0153a38a904cd7ced5acb81dabfa11ff"],["/archives/2018/07/index.html","065e86d37342077a58b90206a95d06e2"],["/archives/2018/08/index.html","e52d03ca21bf8d9bef14bb994b391109"],["/archives/2018/index.html","edb708dbfba77d4996669b7cc7f6e247"],["/archives/index.html","4399adc3e9468b9faaafa976edd0a619"],["/categories/C语言/index.html","0f63163f9ec8bcf35457c4993a389477"],["/categories/Python/index.html","a3145d9fc92d0986deed7e23d745cbcd"],["/categories/Python/page/2/index.html","d97b5d6482515b1399305e317e8d7a6e"],["/categories/Python/page/3/index.html","bce4ca001ae6cf11a72266841af0f8b5"],["/categories/Python/page/4/index.html","ad9718953c506b435da195cb3c98b6f1"],["/categories/Python/page/5/index.html","1c893f7e24c1cf8fe547e0417028dcc9"],["/categories/Python/page/6/index.html","41a4b12cf7ec79697edc9296c43f94f2"],["/categories/index.html","b879f151a3eef737051ad6927f06197c"],["/categories/博客测试文件/index.html","9f9a36c5688401631164865c5e5789a3"],["/categories/机器学习/index.html","c18a85f36f6528c490ffdc2428e4eb48"],["/categories/随笔/index.html","fcfe902cf351ca94832855c4aee6e3b9"],["/css/main.css","682f7e66ce84c82fd25ec51e4ffe3f17"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ccb96e4da3dfb6338ae6a0a2bb00eda4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","73e82b26227a722ded8b9e5e1da28b17"],["/page/3/index.html","bdb2e12104b49f695740f6c2a54b8bfe"],["/page/4/index.html","897ba6364d5efea63307282bcf57d24c"],["/page/5/index.html","6b87a766524b65eddd960299c5b06be4"],["/page/6/index.html","830f09468ba801655b117d03e027c5ab"],["/page/7/index.html","d86f02e9024429033bd4cf20f751569f"],["/sw-register.js","ed559c568246c2faac92eca351d48976"],["/tags/Face/index.html","162e19dffc749e1d046a2eda5e943b86"],["/tags/Numpy/index.html","e3cb0cb8c58e8cc455fe7c5cd6b1ed55"],["/tags/index.html","5fd4768291426fbcf29c237266301ebb"],["/tags/k-近邻算法/index.html","b4f817683c88ccefda7139af3447c41f"],["/tags/matplotlib/index.html","ce6a4d64596a4be45d17e9dd07af4d8b"],["/tags/python/index.html","9215d5e142b149c379da93e3fe5e4589"],["/tags/python函数/index.html","acdf468cd44e6af8ccf4d4abc0d632af"],["/tags/python库/index.html","6d435c623c3da2552acd1c1bfe40d4f0"],["/tags/python异常处理/index.html","5eb591bed9fde3af482a9ff9771fbe6c"],["/tags/python模块/index.html","513a96834237fd33b3a230f9f3312b8a"],["/tags/python正则表达式/index.html","6e1d45c178c934ab4c8cb123e444015e"],["/tags/python面向对象/index.html","63a2f056ee68e831a932d265a1efa77c"],["/tags/python面向对象/page/2/index.html","a099138a044c1e8699dec54912828532"],["/tags/基本教程/index.html","14d4e0c34f22293317d8c64d0e883e5a"],["/tags/基本教程/page/2/index.html","441c21e85e26f8c684cb821ab8b5782c"],["/tags/基本教程/page/3/index.html","581e38183836a6034d1c2ed172c3532a"],["/tags/多态/index.html","1f9a8280eb145a81279cdc7748a1dc95"],["/tags/排序算法/index.html","dc552414d8aa8071b6fe5136e8790fab"],["/tags/机器学习/index.html","35d09d9867bc847ef0bb881c1a76a7bd"],["/tags/测试/index.html","2beb590316f641b407695e2d2c338386"],["/tags/矩阵/index.html","afcfc18b3ad3381d325ccfc456116140"],["/tags/经典算法/index.html","48c33afeca2f6ed99d9fabbc87842851"],["/tags/链表算法/index.html","f3e03d5f4c48596d79fa00b9f8222381"],["/top/index.html","d96e0348c455ab01d407bbdcc526aa3f"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
