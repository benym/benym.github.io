/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","27c6b5d4257a744726bbff8f0c96c81d"],["/2018/04/08/整合建立输出增删改查的链表/index.html","2c8a4aa0302f1e7947400a561ec4f94a"],["/2018/04/08/选择排序/index.html","f9282e02b8aa558f8a3674c379c9c025"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","814fbf7c8ee9d81131e7a3798b147868"],["/2018/04/10/冒泡排序/index.html","70729bba418a544a76d4df8842f6fa32"],["/2018/04/10/折半查找/index.html","454019249fcd2552faf6403210ca30c3"],["/2018/04/10/最大公约数和最小公倍数/index.html","a3f89ea02f250f9b0f11ebeb1e38fb82"],["/2018/06/27/python中的Docstring/index.html","1f05614bfa3fc66f3970d9c53c284ba4"],["/2018/07/07/python中字典（key-value）/index.html","84c96c75c33f31608df6aa239feec09e"],["/2018/07/07/python中字符串的一些基本操作/index.html","ae90cf89390531a4e73837ad3022e50d"],["/2018/07/07/python中的元组/index.html","77e1a23cdede185cc31964aac19ea561"],["/2018/07/07/python中的列表/index.html","c9d19138193703c44c16148deab129aa"],["/2018/07/07/python中的序列以及切片的解释/index.html","c3163ef0b915700cf120cd55fd9e5302"],["/2018/07/07/python中的引用和切片/index.html","cd7f82f8c77c994e210f9ba0c1e94e65"],["/2018/07/07/python中的集合/index.html","a5900b3a5b87ba64f4acb4e306d3d395"],["/2018/07/22/利用python进行文件的自动备份/index.html","4f71e99923a59fbbc099cdb584cfb75d"],["/2018/07/23/finally异常处理/index.html","745bae9b19c969aa85bd23f5170f2ab6"],["/2018/07/23/python对象的实例化/index.html","2c58aacf59d8ef86ad7fd7db3f25432d"],["/2018/07/23/python日志模块/index.html","2dce65e6c09fc39b511110eee7483e04"],["/2018/07/23/python的pickle模块/index.html","c3c7764dca732d333ef2872ad67e306c"],["/2018/07/23/with-open异常处理/index.html","a5351dde4ebc579051a111608cdd15d8"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","28c6ab5a95c0033d8727fa7ff23e6dae"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","4cd409e16e45cc5ca1ba4a5ae8a80ba4"],["/2018/07/23/在打开文件的同时规定编码/index.html","d9b63cfc6fe78f1dc110766b3db5eb71"],["/2018/07/23/文件操作/index.html","e82991470d2bf4308c55971e15c7f45e"],["/2018/07/23/用户自己引发的异常处理/index.html","512a938f24903d3f106b45620bdf25ec"],["/2018/07/23/简单的异常处理/index.html","5be9c61f5a42a407f45e2ea4ac221737"],["/2018/07/23/类变量与对象变量/index.html","b413fd207bc936597e8d06460d0b023d"],["/2018/07/23/继承的运用/index.html","ac6e723c1146fad530fb60249dcdee41"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","8e66ef99766a226d1332f755f7752a53"],["/2018/07/23/输入输出——简单的回文判断/index.html","e4f8e8f71d85f5941a904d2001eb5e01"],["/2018/07/24/assert语句的运用/index.html","9551b4a483765990205224bb6f2ceb46"],["/2018/07/24/python中的lambda函数/index.html","6f7a000db6c7bf68f8ec9f5a6ce7d7a5"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","86371c2490f13ddbc3cf68388bc02f0c"],["/2018/07/24/列表推导/index.html","e34f62b9e7d55ea57fb14cd82d483da9"],["/2018/07/24/在函数中接受元组与字典/index.html","5ac46e22722c78cf0a528e58a616e78e"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","e9cd46850d21809e03d2c60804dfb35b"],["/2018/07/24/打印九九乘法表/index.html","3b8535bd2d584a115d71b9d6d51b059f"],["/2018/07/24/打印直角三角形/index.html","ac6a8c4f6e310a1083b0a1db2801fab9"],["/2018/07/24/装饰器/index.html","7cc7c2c96a2a50db5bb592d9f7396306"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","cc0b83715dea377146dc3e02c3104b1c"],["/2018/07/25/python中字符串的一些方法回顾/index.html","b5479062953e7d2c8c646b84d102b6f3"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","11b582787915c075fb87daccf421567d"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","feaff34b3fbe98404d65b03f20a32b52"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","5666902e600478c2dcbfbd5692cba89b"],["/2018/07/26/python中完整for循环的实际运用/index.html","adfa6aa7ce8171cea041afe1bcef7396"],["/2018/07/28/python中对列表和元组的切片操作/index.html","3844089bfe2ec1f6fa05614ebc2ec290"],["/2018/08/03/欢迎来到我的博客/index.html","6380f406a0b17f5f707421aa7d7b9d71"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","a112e82cfe8cfcdb17d19b0158730d79"],["/2018/08/07/Python中的正则表达式/index.html","cc0197eab648963e9e6206bf4983a5b4"],["/2018/08/07/Python中的正则表达式match和search/index.html","fd3754a44a28f9efa2e826880f5f2408"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","a7974f16c5ceb2936cf37ed7bfdc63cf"],["/2018/08/07/正则表达式中的compile函数/index.html","f161a8650c4617144141dd053deac793"],["/2018/08/07/正则表达式检索与替换/index.html","ddc80a1b4fa91c11f60bec0cd6120397"],["/2018/08/08/python中的__new__方法的重写/index.html","7a7bfc103727cd0659787dc5d472fdbd"],["/2018/08/08/python中的多态/index.html","80f182d92a3843f57a13d6f2f3fee47e"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","ed4653610b652cceb85b24c77094e0eb"],["/2018/08/08/turtle绘图库/index.html","9726ca64b2c7b48ea96f46a47a596a85"],["/2018/08/08/单例设计模式/index.html","1dc3004c2db7868e4d815f8dc6743ebc"],["/2018/08/09/Numpy库的首次使用/index.html","e17b9fe0bb2363837564430504f955e8"],["/2018/08/09/kNN（k-近邻算法）/index.html","119ac9d1fe79a1e4497d279beaa31d09"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","fa803fbb0b1dde202a9259b032b54d32"],["/archives/2018/04/index.html","9f251e3fa29a26769f25a87dc60992d6"],["/archives/2018/06/index.html","ba5abb55aca8e7297421178b2a42e123"],["/archives/2018/07/index.html","020c987e0da04b62168bf072e67acfa9"],["/archives/2018/08/index.html","849622802c5fb9c5c9f8afdc4fca9465"],["/archives/2018/index.html","a13155c1fa94fa060adfd2a12bde8845"],["/archives/index.html","8072459e0ea6df09074900f18425c6c3"],["/categories/C语言/index.html","4287859b90cd10fcb58bcbe0492a2ad2"],["/categories/Python/index.html","5eee7d1cee01f6430a057b15c1e62ae7"],["/categories/Python/page/2/index.html","ac7eb4235346b10217a2bc8cee7837f3"],["/categories/Python/page/3/index.html","a6a690aa01522e513b979a6d256456bf"],["/categories/Python/page/4/index.html","51b0ccc61e01ed24bcc57489c7d1bf95"],["/categories/Python/page/5/index.html","565267f448eaee61ce1d7015f0810330"],["/categories/Python/page/6/index.html","d69e3a720b21e970c398dd0b051093d7"],["/categories/index.html","76331e178e231a48345b77827f3c6f95"],["/categories/博客测试文件/index.html","8d02a5937d6d2e0a6e50168a107ca90c"],["/categories/机器学习/index.html","b7f4ea4e940c583f9c4fce45f5248611"],["/categories/随笔/index.html","18c0378bf9533ab5cd6d2bf8d51d46b1"],["/css/main.css","6d6fc6e6a599d552dfd4c660a726e9f6"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","5c23810e2d369bd50b2771ec384dae58"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e4391e7877216e78453616a85e9fa2f9"],["/page/3/index.html","2c6cd275841055ccd5f39cf8bae15476"],["/page/4/index.html","150bf8525de814964d4e0b13afa495c1"],["/page/5/index.html","aa15c821ab3210507000e4bf083e7853"],["/page/6/index.html","a0bbb5cb55d9185338a554fb45bc1ff3"],["/page/7/index.html","f1d11e22d71f7120a53adcf537c72e7d"],["/sw-register.js","4a2636fb4ef2b2d003ff4f2c207bf6c5"],["/tags/Face/index.html","d2c1ea439f150995ab4c1e203c44ab3a"],["/tags/Numpy/index.html","0e6fd2e41aa2dc4b8723c04fb280063d"],["/tags/index.html","d813ef24ace73e0425834ede46de966f"],["/tags/k-近邻算法/index.html","ec366eb6bf2d1b29ef1dfa3d59d50b80"],["/tags/matplotlib/index.html","e70de46167e78e37472197ba9654ebaa"],["/tags/python/index.html","d9e52e3c2893c27b0a19d83c9670c971"],["/tags/python函数/index.html","0dd70d228f9b9f4496f15ca0d1c776f3"],["/tags/python库/index.html","717249f5adc4d57c801ef4c251431836"],["/tags/python异常处理/index.html","abca12190a1bd70fb9967cc15044c58b"],["/tags/python模块/index.html","734ba013c7c6ec15c7063f314ad5c272"],["/tags/python正则表达式/index.html","e1b7946a8f79d47bfce8ff700a248e30"],["/tags/python面向对象/index.html","e80f6a21ea7c2fe5dddafbdea1551976"],["/tags/python面向对象/page/2/index.html","ae124deb15a22f662889f2280983e1d3"],["/tags/基本教程/index.html","664c046f0c30b18aed0b9d5f92adef19"],["/tags/基本教程/page/2/index.html","14fbdc6a2664e21a8f814e0e638f6113"],["/tags/基本教程/page/3/index.html","4de5ff93813bd4633c793855cefadb7d"],["/tags/多态/index.html","c8d9d8df6850b4603a63aad093e9e075"],["/tags/排序算法/index.html","2c2b657dc22544826bdd842b2197b06c"],["/tags/机器学习/index.html","e159f006aecbd6fca281e1414f110479"],["/tags/测试/index.html","fd9e7c8209c6d60259132cfc385c0f31"],["/tags/矩阵/index.html","ef6db5c9000836b30603dfa51172358a"],["/tags/经典算法/index.html","667d6e41c48a4bde35d8df5fa73e2e39"],["/tags/链表算法/index.html","addf74818619af825c983eb0b5a1edd2"],["/top/index.html","a3799b70de59f2f9a1fd785753765817"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
