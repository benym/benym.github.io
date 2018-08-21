/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","041ced30cda1bc759042ea539ecdae64"],["/2018/04/08/整合建立输出增删改查的链表/index.html","9fd49674aba46e2c584458ddcfa28d39"],["/2018/04/08/选择排序/index.html","134b25f4cc9ef6dfd5f4d54198df916d"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","16684ec9eae28023eb3d209790c62075"],["/2018/04/10/冒泡排序/index.html","ba73ee598d75f266b8aef9ece0e885b9"],["/2018/04/10/折半查找/index.html","1217d3bc84a42860818d5e257b29f032"],["/2018/04/10/最大公约数和最小公倍数/index.html","5f4aac012551b431ff69daa766f8fd7a"],["/2018/06/27/python中的Docstring/index.html","ddcc9650c84d48c0657806d2c138ea51"],["/2018/07/07/python中字典（key-value）/index.html","eab7d3f299ea9d72809cbe0d238718b0"],["/2018/07/07/python中字符串的一些基本操作/index.html","c79cdfb4a4be0f42a65c0bdb05cf16b1"],["/2018/07/07/python中的元组/index.html","f2917603601b99b79a2f2760669f964a"],["/2018/07/07/python中的列表/index.html","cb809083698c4662125fb3585217cc85"],["/2018/07/07/python中的序列以及切片的解释/index.html","e00dcba04dfa8cc8429f6a50160661ca"],["/2018/07/07/python中的引用和切片/index.html","b22a6a2676b148da7a5571c9afd7ec17"],["/2018/07/07/python中的集合/index.html","9c5871b3cdca9094ae5c348e5c613542"],["/2018/07/22/利用python进行文件的自动备份/index.html","83936727fbe2a378d266dee7f17cf160"],["/2018/07/23/finally异常处理/index.html","ff4ef7d291bd900f234ef33019972f4b"],["/2018/07/23/python对象的实例化/index.html","7f63f2a3732a30c6b40d47e7a510dd33"],["/2018/07/23/python日志模块/index.html","9fdc6b96bf07174e7dbd33fdc76787a8"],["/2018/07/23/python的pickle模块/index.html","69cbe3252181f7b3fe0da651ca99cf7d"],["/2018/07/23/with-open异常处理/index.html","e325a9b5fccef91a86bce47d7881dfac"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","c3207a4b850e85d28229bf6895ff8ef2"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","7bd804cfa5e584c83333ef25cafb8683"],["/2018/07/23/在打开文件的同时规定编码/index.html","2e0cce2120732e2ef2398ca2b50763cf"],["/2018/07/23/文件操作/index.html","6de95c1c5d8fd4ade5626381b76f959b"],["/2018/07/23/用户自己引发的异常处理/index.html","39ca7fdfc03a439c897c5c0369d2893b"],["/2018/07/23/简单的异常处理/index.html","02948542a8c54426da62a0f105ad1ca4"],["/2018/07/23/类变量与对象变量/index.html","e9c70a0dee7c8f2ae78bcc542c7113cc"],["/2018/07/23/继承的运用/index.html","54b00e51f7f56ad9ef5883cb49ec1b44"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","0b703ff30ff2b31c6325340033f106b7"],["/2018/07/23/输入输出——简单的回文判断/index.html","d90fda115788743f49289dee19b37115"],["/2018/07/24/assert语句的运用/index.html","2f800ec67453bb21572091cdd6689110"],["/2018/07/24/python中的lambda函数/index.html","e58330aa96719dff2098dfe87939fa06"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","56769f0fda6a3e5a3548bbce773c1eb5"],["/2018/07/24/列表推导/index.html","1ef29b241c84622a02467295f1280365"],["/2018/07/24/在函数中接受元组与字典/index.html","ff68f9ed69b1f373683f2742c4bbe035"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","885118542a6874cda0fbe5b50cc811ed"],["/2018/07/24/打印九九乘法表/index.html","03dc6a12a3e536761d8f40eb80dc2b28"],["/2018/07/24/打印直角三角形/index.html","abcd8c37da8ae64f020e57ce6da588d6"],["/2018/07/24/装饰器/index.html","0ce4808f90896bad10117e1a11bb338c"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","23fbe1d05fcfae0d6f7bb8dc6a2aae24"],["/2018/07/25/python中字符串的一些方法回顾/index.html","aa6d619cb2811bedb58e8564695a098d"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","7956707611b3d67ec97ce01c6b06a13f"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","b7ec2b678f0598084475eda72115fbaf"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","a25dbc805dfdcbaee322e754debf7522"],["/2018/07/26/python中完整for循环的实际运用/index.html","0d7bdb2d3269da6a3a8421e92f11b3af"],["/2018/07/28/python中对列表和元组的切片操作/index.html","80ad4d7a55db08db0af5e9122f6af493"],["/2018/08/03/欢迎来到我的博客/index.html","41e79c3cccf31b643fc40f04e4c785f6"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","8bdb61bff1e2ea6d481b0aa075f7e7e5"],["/2018/08/07/Python中的正则表达式/index.html","093d1c347dbbb022e3810d50d6248feb"],["/2018/08/07/Python中的正则表达式match和search/index.html","e8ca7386ba70cb80a256e1228feee47e"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","48cf1da8ca253c8f331018b9c97feea2"],["/2018/08/07/正则表达式中的compile函数/index.html","e2373d3837cb39f1147f982104e1376b"],["/2018/08/07/正则表达式检索与替换/index.html","9942e73ecacd2d27a468f663617f025f"],["/2018/08/08/python中的__new__方法的重写/index.html","6b5576a181e7e25c6c34a44bd337a2d3"],["/2018/08/08/python中的多态/index.html","eaab171dd9fb79be5ced00c5d6ae2767"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","8c7a472ab59c0eed416a87065ec9de85"],["/2018/08/08/turtle绘图库/index.html","6d0bc7c0b5dbab021b34f8ce8161dd7e"],["/2018/08/08/单例设计模式/index.html","2799fa78852df83290d6589a10fd0dff"],["/2018/08/09/Numpy库的首次使用/index.html","ccbc8340edc7ba7f6b309253890234c6"],["/2018/08/09/kNN（k-近邻算法）/index.html","2785633144ef196b5e405e156fe0576d"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","d83fa991c84eb96960986e6b6c4dd9d8"],["/2018/08/16/kNN识别手写图像/index.html","bde378fba1582ec67522869b39ff502c"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","158497f90484c108ad2d1cc53f1c1ad1"],["/archives/2018/04/index.html","25b4b81204d84093c3aea30986e813a6"],["/archives/2018/06/index.html","9137ed49eb2e31648972fceb0b10c1fa"],["/archives/2018/07/index.html","4fe8e7f7abfc4efd03e4f237c92ebc06"],["/archives/2018/08/index.html","8d457a6c28689cc335445578cf9bb3cb"],["/archives/2018/index.html","39f3ed169ee62a0d31fb5a7c2a8baee4"],["/archives/index.html","6acd49fc11a7ed0fe109b0fe9d9e44ba"],["/categories/C语言/index.html","979f965b7016fd6ff5f11d9d8e6145c8"],["/categories/Python/index.html","6a522bc46f85c0a21f4bd5a94c1dedd7"],["/categories/Python/page/2/index.html","7fc98a97d6f0c0665b6b2b4df586c625"],["/categories/Python/page/3/index.html","272d02795a941faac90bf362a0b9aae0"],["/categories/Python/page/4/index.html","27903badee5faca73a36e5d90011842a"],["/categories/Python/page/5/index.html","c927d494e7333dc32cb2f70a4ed5a517"],["/categories/Python/page/6/index.html","b38befaad8e1930959e58473afe76b46"],["/categories/index.html","4bc45a69a7291317fe65bbcfe5d2bc69"],["/categories/博客测试文件/index.html","c2644ea464c66f15ae2e3816007e68e9"],["/categories/机器学习/index.html","3ab389791599d8c6885aac7ae125bf7e"],["/categories/随笔/index.html","4b7bd43077827c9dcc24e18610a04b04"],["/css/main.css","2ec331a350c9338168bddc088de203e7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d16351af7a8f20f7ee616ab4a3dcf137"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","63fd2f9d82739c5e5123a42ceca2e13f"],["/page/3/index.html","f2e8b71bdd904c38db1aee21cb25b020"],["/page/4/index.html","9808360c3d0b369855e01133f6009fe3"],["/page/5/index.html","ccb074e7604c334adad73c801417dd93"],["/page/6/index.html","c3068435a3b94166451449780e351352"],["/page/7/index.html","44ad2ba2210f7671f833373a5e8e4165"],["/sw-register.js","caee0b349798f7f0245c9f86455ae7cc"],["/tags/Face/index.html","4e46ff10568f88e83edb5af89d04ffa4"],["/tags/Numpy/index.html","dca9440928db3a6707fe0d1cb21f514b"],["/tags/index.html","4d6251f5698c3c7c998fa357a67a8042"],["/tags/k-近邻算法/index.html","0ed7f548b93edb4a490c3f312cb003d5"],["/tags/matplotlib/index.html","28f6fa734c266aff1f2f490e0223bf4b"],["/tags/python/index.html","dcd837c9e6f3f6e5ce9ff132f85d0813"],["/tags/python函数/index.html","581f474e739eb66e2608e57461dd4bc2"],["/tags/python库/index.html","d2893352c960db15fce3b8d5584525d8"],["/tags/python异常处理/index.html","bf57b74019620896a718ed97915f15d7"],["/tags/python模块/index.html","35647f7db9ae1a7b11a8f2d75027cc2b"],["/tags/python正则表达式/index.html","86861fbbe5dc7b18d996cb106759173d"],["/tags/python面向对象/index.html","eff1734b94245aed389f9528876533bb"],["/tags/python面向对象/page/2/index.html","c5d58188086da127746655ce3b6c95f4"],["/tags/基本教程/index.html","6c0025fe3b4c4aa536d4489fbd00a1b7"],["/tags/基本教程/page/2/index.html","551d1c61427f8ddb1eff80cde51037b7"],["/tags/基本教程/page/3/index.html","9132b03b0050d12583e410361334a6a3"],["/tags/多态/index.html","4cb0b9f31a0c64feb663ef202abae03a"],["/tags/排序算法/index.html","6c9eb762c888f7784a0dac9c058e9083"],["/tags/机器学习/index.html","2b850d9f9b59f7295510ed40dbab6209"],["/tags/测试/index.html","67dace5f95a9f4ae7f09f2549ace615e"],["/tags/矩阵/index.html","3acebede88b1885f8d4a68c1ed511296"],["/tags/经典算法/index.html","e791ec77a3039c015435a7748fdce519"],["/tags/链表算法/index.html","10117d6ea9aa97cad176c038c28c182f"],["/top/index.html","5ba2e6495981e19d87c88e5946e3ec68"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
