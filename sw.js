/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","db7aa5c969f5db0285abf90c026d49e4"],["/2018/04/08/整合建立输出增删改查的链表/index.html","134bb923decacd23078e4de008e62f74"],["/2018/04/08/选择排序/index.html","bb0d19c0cf69cf649135c87229ba9f7c"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","a2fc20a54d05ba7fc1822efd749f6b53"],["/2018/04/10/冒泡排序/index.html","eafb975d2534a92f90adcd7bb0b9bf9c"],["/2018/04/10/折半查找/index.html","1aca2e27741dbe70494ba441b22f29c3"],["/2018/04/10/最大公约数和最小公倍数/index.html","8ce6a86a7f82e52fbdd1de0f073218c4"],["/2018/06/27/python中的Docstring/index.html","611cbcad168012833c6a7311e891ca73"],["/2018/07/07/python中字典（key-value）/index.html","84854dea78e543acedb77b14d43d7c4f"],["/2018/07/07/python中字符串的一些基本操作/index.html","b9e324203c95d6d99780350e339bcf47"],["/2018/07/07/python中的元组/index.html","421df4eea28f6036e53af0089b439dcc"],["/2018/07/07/python中的列表/index.html","a0763c45a6738e3be381e9aae57f61a0"],["/2018/07/07/python中的序列以及切片的解释/index.html","e6bee85658a29623e787a0c7c8b9d73c"],["/2018/07/07/python中的引用和切片/index.html","0b6ad68b76c0aba7c15b3f9960e495d5"],["/2018/07/07/python中的集合/index.html","14a8b17d14a9e9760a87f94f4a75af0e"],["/2018/07/22/利用python进行文件的自动备份/index.html","4d3231bd335556151e9cee32f0707c88"],["/2018/07/23/finally异常处理/index.html","6d90074fa5310d781f32be2baca821fc"],["/2018/07/23/python对象的实例化/index.html","f774006769935e9cf82ec0df8da6913f"],["/2018/07/23/python日志模块/index.html","ad5722a5b958b5f0454d6b07af197358"],["/2018/07/23/python的pickle模块/index.html","0e95d7adec3a95e5c8cf5be46de0450c"],["/2018/07/23/with-open异常处理/index.html","4ff6b28a045f39a68daef21fcad33bbf"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","82fd5be80bb1ee3b292ecd96eb815b20"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","10d5558a9e3019838d3659f1966a2cd4"],["/2018/07/23/在打开文件的同时规定编码/index.html","ce725c318d1bef628c65e5a32d96b81c"],["/2018/07/23/文件操作/index.html","bb344384590d5663bf02f010787ae4df"],["/2018/07/23/用户自己引发的异常处理/index.html","33d35aa1ab9849ebf3f0ebaecdc593f9"],["/2018/07/23/简单的异常处理/index.html","1dab34b27197a948fd7958b5ed7c937c"],["/2018/07/23/类变量与对象变量/index.html","5101724352bc61f06bf3a1a99eeef659"],["/2018/07/23/继承的运用/index.html","a453ff7e68656a0ad6f165c0ac0208fd"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","bb1d839e0389ab07ad183028d2c02439"],["/2018/07/23/输入输出——简单的回文判断/index.html","c9991604519d0dba4270550651fec41e"],["/2018/07/24/assert语句的运用/index.html","b85055e5df75a689312eb2df78aab826"],["/2018/07/24/python中的lambda函数/index.html","9f16ea25a0b1dcebb1bd8953b6a38c06"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","6f513f79b3e3750942fee8d16532704a"],["/2018/07/24/列表推导/index.html","fdb28e8ffb5b2ce6e6afa886ee7cd909"],["/2018/07/24/在函数中接受元组与字典/index.html","e18d707e60016e4757a4ba425c5264d1"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","96bffc44c296790de2f7f2df71686b1f"],["/2018/07/24/打印九九乘法表/index.html","2d9de131ec8324de5382e2cc96dcdf5b"],["/2018/07/24/打印直角三角形/index.html","471a6d7d1e2fcb10311fceff10e10504"],["/2018/07/24/装饰器/index.html","01c79b2e8b7ee1f2a1ff3bf9d5d6dcac"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","d3990183cece741ded268fb152702ea3"],["/2018/07/25/python中字符串的一些方法回顾/index.html","f0e8d661637c4533e817f711598800a5"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","22a2be8f2c941a4abaff153dbe7a02e2"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","f74c78f237a524c4f9037e23ebd9cdd1"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","458c58d7b0bc742af284ab3fd50272d3"],["/2018/07/26/python中完整for循环的实际运用/index.html","6b06789aea7d9904545edc1ecd25b33a"],["/2018/07/28/python中对列表和元组的切片操作/index.html","cd31d1ab4da0abeb2c56d991d5524b8d"],["/2018/08/03/欢迎来到我的博客/index.html","884c4dc82d024c365d09483bfb6c57df"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","15be33a0fde3f4df239e1197ebf41fed"],["/2018/08/07/Python中的正则表达式/index.html","6812e86d66929004f8cd4b402cb43b9c"],["/2018/08/07/Python中的正则表达式match和search/index.html","17ad3d2fca7f915fae9921160c663f40"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","1da74389aec1b4f0e479cefa22b63038"],["/2018/08/07/正则表达式中的compile函数/index.html","c32347695c06948cbe3db5082686dc7b"],["/2018/08/07/正则表达式检索与替换/index.html","ef6e32c0e2f4b42304e708f7fbfe224a"],["/2018/08/08/python中的__new__方法的重写/index.html","2cf9c7df286a133b7fa2e8596891eb3f"],["/2018/08/08/python中的多态/index.html","c246c09e2701c1f2032445841d09b6a2"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","ac906b875912676b7ee261ae5e525f2d"],["/2018/08/08/turtle绘图库/index.html","0db6c9a1eafd66a6d03544b2445de9c2"],["/2018/08/08/单例设计模式/index.html","489ca55fa5f3f12e0bb721585d404803"],["/2018/08/09/Numpy库的首次使用/index.html","94350dab10217de0c51febbd3983b8d3"],["/2018/08/09/kNN（k-近邻算法）/index.html","2dad231a20cf9bbc2f54cff438715205"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","9756caa028d4b579cd536bb460d6402a"],["/archives/2018/04/index.html","2b1c6645ecd1ef2e2d43ffd217c5bc88"],["/archives/2018/06/index.html","993e105238441b11ead48aafdb500d63"],["/archives/2018/07/index.html","ce670d4a1f02fe02a3359fed89ec7d16"],["/archives/2018/08/index.html","aa42e3d98fde6b54798230437f3caf2e"],["/archives/2018/index.html","5055a99f31d81ad4d0fd7d6efe1a462d"],["/archives/index.html","925adaeeb8a587b326d45fbdbd426cb1"],["/categories/C语言/index.html","4469db76e8d8adb7548910168497fbc0"],["/categories/Python/index.html","74ac01cf4c10e834f095c515c3f24bcc"],["/categories/Python/page/2/index.html","25eead884dba5aba25f891cdec46ab15"],["/categories/Python/page/3/index.html","974293dddab9b402045e0b245ef46aed"],["/categories/Python/page/4/index.html","07f30ebc0526aa312f1d904c6aa4633b"],["/categories/Python/page/5/index.html","c182a9e8f6876937cf6d8b524c4c11a0"],["/categories/Python/page/6/index.html","f9f55d0cfbd552439676b4bee55a7ca7"],["/categories/index.html","2ab685ab0be26c36609873c59a9b10f5"],["/categories/博客测试文件/index.html","769df947dd507069847f00353fa40c66"],["/categories/机器学习/index.html","5b3ec026b76b8f8199a5866225ffdfa6"],["/categories/随笔/index.html","abb9eacb00f9ba8fcf4234349b37cb90"],["/css/main.css","682f7e66ce84c82fd25ec51e4ffe3f17"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","60e6ffb553d258fa0364e900d34d47b1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","33a1eccd476eab844fed5fcc8030d36f"],["/page/3/index.html","43876d4b6ec570c511dee59e9d540802"],["/page/4/index.html","050d8d2728c505e2ac325580a5c75479"],["/page/5/index.html","b3a01c9f879c45bc6445b7c30e57fd99"],["/page/6/index.html","a2dd81e7e9a35ba20800cc42bf8def8c"],["/page/7/index.html","7ce38154e50dffb5a363dff148a15b8c"],["/sw-register.js","37f3f9dd9149fa0647697922f16af73a"],["/tags/Face/index.html","af251ea0fe75b38ee6d35e46b9820bd9"],["/tags/Numpy/index.html","40addcba77a788428c665aaf44161457"],["/tags/index.html","980159f0ae6d5087c8aa54fce42ba3d1"],["/tags/k-近邻算法/index.html","82e19972913a45026fa99e90bfc8cd16"],["/tags/matplotlib/index.html","5e09455f9514bd0768cb237cdf31c64c"],["/tags/python/index.html","23b70a1f1f86ab859005416fb5f0e19c"],["/tags/python函数/index.html","38c0a3e811b8686aadca9ef4df80f01d"],["/tags/python库/index.html","e41768f7bc081ebe94c4bd2ad23e277b"],["/tags/python异常处理/index.html","862880ab759345a75344f89254404985"],["/tags/python模块/index.html","a5b12a57644cba0777bda36962ce77cb"],["/tags/python正则表达式/index.html","9a412f490d8a9c63c51fc4ca21199b5c"],["/tags/python面向对象/index.html","198a574f97decab727ac77f0440e580a"],["/tags/python面向对象/page/2/index.html","2fd12a309d55a2653dda9f5bb3be6856"],["/tags/基本教程/index.html","4e2355fa057b971df5501bb99ddfac88"],["/tags/基本教程/page/2/index.html","7795c3f3c7f15115a376cc7e48bf5585"],["/tags/基本教程/page/3/index.html","b76ecc5d9f4d8ecba9d857bbf7e1b97f"],["/tags/多态/index.html","a3c6bc5c37660fefc805bd420c2ad6d2"],["/tags/排序算法/index.html","41f340aa45b66824019bc66397b6e7db"],["/tags/机器学习/index.html","e9e3fb1b6cce888ba0c3548fe588c8bb"],["/tags/测试/index.html","077afb8b21f8c5ccb767413da4ec8fb0"],["/tags/矩阵/index.html","205a93cc18b43a7ef6372bc2704ebe4d"],["/tags/经典算法/index.html","a909609725d47dee2d354e964402ed81"],["/tags/链表算法/index.html","8e214c48d4b77acbd0e88fae8b91fb04"],["/top/index.html","791640a4596f7021ad072bec143219fc"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
