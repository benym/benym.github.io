/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","efdc94b867648f638b2afa3b8a741304"],["/2018/04/08/整合建立输出增删改查的链表/index.html","abeb4ed85bd3e4ffd430afb02d5a32b8"],["/2018/04/08/选择排序/index.html","f30bc13de3b9318e85e4ea6e6cd6a48d"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","7fc2047b6a8313094b14f9f2c4543309"],["/2018/04/10/冒泡排序/index.html","930a46d74c245543baeebbceaf1d8447"],["/2018/04/10/折半查找/index.html","96d13195a6eca21369fe42f4646924ce"],["/2018/04/10/最大公约数和最小公倍数/index.html","ef1f81f4b4f92c09040b741d76eb744b"],["/2018/06/27/python中的Docstring/index.html","cfb9456cd25f072e73bb00c32d8cf1ad"],["/2018/07/07/python中字典（key-value）/index.html","e7afb5d454a1f06f492b6185effbd801"],["/2018/07/07/python中字符串的一些基本操作/index.html","1ee77bb8cbd479db1eaef070e4baf768"],["/2018/07/07/python中的元组/index.html","8b19f7f824bf203b481c6fd9d9c86873"],["/2018/07/07/python中的列表/index.html","10711e0bdd96c70540eb836b6b856c7f"],["/2018/07/07/python中的序列以及切片的解释/index.html","3b409a8fd9aa66725caf352ac0d90cf6"],["/2018/07/07/python中的引用和切片/index.html","ce7d0c68ce99c14448125107d0dd7b5e"],["/2018/07/07/python中的集合/index.html","82c9ae91f170372169fd97d9f516a94f"],["/2018/07/22/利用python进行文件的自动备份/index.html","399e887258808280e880fb9ff2bd7f29"],["/2018/07/23/finally异常处理/index.html","42f7c0418e70e48bbc758464c3fdfb2f"],["/2018/07/23/python对象的实例化/index.html","5113b28752c7270213b9bbd0a515572f"],["/2018/07/23/python日志模块/index.html","23679bdefa9e7732069f2e3ed8205d89"],["/2018/07/23/python的pickle模块/index.html","315d6a5c1e25da047bef62ec9a4f548f"],["/2018/07/23/with-open异常处理/index.html","19d9ae927048770773fd31fff189702b"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","fe7982fff2f423c69c00defb84f02e06"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","d7146861262c11bccf56ce131faf723f"],["/2018/07/23/在打开文件的同时规定编码/index.html","c3b5f3b63f7363973c992006c586f7da"],["/2018/07/23/文件操作/index.html","56d242b2e4fdcd2e4f8a63800e918243"],["/2018/07/23/用户自己引发的异常处理/index.html","6cacd1a05f88e9f59b84c5f0717a9d08"],["/2018/07/23/简单的异常处理/index.html","b263ecea4d072038c424f80dea288a5a"],["/2018/07/23/类变量与对象变量/index.html","5ba087b2d457bfcae95dd28268139c35"],["/2018/07/23/继承的运用/index.html","6855d70ae70e9d740c03dcb7d73d622f"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","bbb2c3c484d55fc58d0bfb403b095ccb"],["/2018/07/23/输入输出——简单的回文判断/index.html","53d8c4f155c23a9297aa56e8966be511"],["/2018/07/24/assert语句的运用/index.html","0871812827ca9f46ea33430735d0e0d3"],["/2018/07/24/python中的lambda函数/index.html","66ae4fb7a1511dbd4cb2a54d6330b1a2"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","5a073e1d8d18f3cd1144c8a86a28be20"],["/2018/07/24/列表推导/index.html","e3cbecacc843bf1b71da7eb751bb16a7"],["/2018/07/24/在函数中接受元组与字典/index.html","3c2f353980089cf283747fd409fc4761"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","23fd6cdb15e47154db61be551bbac579"],["/2018/07/24/打印九九乘法表/index.html","7d87b03e4ea12b68b89a9cfdc4dd92cb"],["/2018/07/24/打印直角三角形/index.html","863d4f1a28d687b1954d7dac33178cc8"],["/2018/07/24/装饰器/index.html","7cea2f62ebf7920a27a91852be4a4825"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","e0537a607962a284b37120fad3990c2e"],["/2018/07/25/python中字符串的一些方法回顾/index.html","bb068c4433e409f58bbce9e6dc53506f"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","d56eb86e13cb5aa9360e3350a1fba9a5"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","a6022a872f896b4a2abd919a73d67fc6"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","332093b2ba6c83c9b5ee0d38aac6f045"],["/2018/07/26/python中完整for循环的实际运用/index.html","05e6c6e0d36042b8261250e54b8f14d9"],["/2018/07/28/python中对列表和元组的切片操作/index.html","71580c364028f654ea754da16018093c"],["/2018/08/03/欢迎来到我的博客/index.html","8ea775ecad73301c9080f64513c6a807"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","0c0ffce8e90619fdd8452c631a9e290e"],["/2018/08/07/Python中的正则表达式/index.html","20c7e8889274922499186d677aab04db"],["/2018/08/07/Python中的正则表达式match和search/index.html","bef5346dd512f4f2e80653126c636806"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","6f9ae1f5f6ea445e93bb4c2f1cec2f78"],["/2018/08/07/正则表达式中的compile函数/index.html","2b80adaaa6a8896fc77b877a8da5ca48"],["/2018/08/07/正则表达式检索与替换/index.html","2e93ef3e832cac744532c6b4740f78bd"],["/2018/08/08/python中的__new__方法的重写/index.html","619108223f1c0b95f9f7467498a7d018"],["/2018/08/08/python中的多态/index.html","ba7fe0b4d724108687be57f28f031b88"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","415773ad144091fa65e6141f888bde8e"],["/2018/08/08/turtle绘图库/index.html","2adb9f93061963710d98968d8d9449c7"],["/2018/08/08/单例设计模式/index.html","b9b6a9b579ab6cefbe23d986b575f072"],["/2018/08/09/Numpy库的首次使用/index.html","65e73b2acb8b71325f0f9c5f1a655239"],["/2018/08/09/kNN（k-近邻算法）/index.html","12b891aaca9ba6bb06096b11cab7a5cf"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","beee2d5f230a7e53f09b36d602b82a72"],["/2018/08/16/kNN识别手写图像/index.html","8d184d0f78a92d071b3af51301b08f0b"],["/archives/2018/04/index.html","4741f58abe27706e85e6b70b9f3772aa"],["/archives/2018/06/index.html","5293d7a07d88cf30e682964279c00f9d"],["/archives/2018/07/index.html","a4f9d196a30a51e8814ce5e79fa887f6"],["/archives/2018/08/index.html","feaf02caa25eaa954a5831849c87cc2b"],["/archives/2018/index.html","8eff164e7af848f7df45ac55d7bd2366"],["/archives/index.html","fbc02b1030e3ac271efe039d6c629185"],["/categories/C语言/index.html","b6f10e6ab7c65e235f9bbf81c22a3088"],["/categories/Python/index.html","3aa1b9bc1b9ec36d6f030f4b69254ab9"],["/categories/Python/page/2/index.html","0d56aede31c0c5d4f0bca630480731a1"],["/categories/Python/page/3/index.html","6d139067d03465c7f9aafae9e8926e3a"],["/categories/Python/page/4/index.html","dcbce14437693b66962c52fa8492385e"],["/categories/Python/page/5/index.html","b5f94b249388d0b89dbd451759188319"],["/categories/Python/page/6/index.html","c80ffb58aaf2e68f8cae440f39d96fb6"],["/categories/index.html","55d3b199a1b1938bf02d9cd294086ec8"],["/categories/博客测试文件/index.html","04ca031a4875a1a0f2c6c165363e34cd"],["/categories/机器学习/index.html","fe4798bbbe3f2c2f63f5d09ba9aa4a67"],["/categories/随笔/index.html","b4b11a30ef1821b4dc5f1ed962293f55"],["/css/main.css","e5ceb5ddf21e5633d9c54d7c930869ed"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","346b228c428ea880438fee50e6ab24ad"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6a28e719c5e996abf270b71638e7fac5"],["/page/3/index.html","094a63ae75307eebf51cd684d987522b"],["/page/4/index.html","9ce5396439bbcab58b2e96c94f9b04f0"],["/page/5/index.html","e5b42a067d90dc840aa95a1291af01ef"],["/page/6/index.html","942c5ba92c0e7c8a20d8073c4c1fa036"],["/page/7/index.html","3409df9eede9b617cb67b04469f58462"],["/sw-register.js","c140382fdd9ba9abc51b09f2cd98576c"],["/tags/Face/index.html","76742b989098cfb978b81229a6be95bf"],["/tags/Numpy/index.html","6e5cb8941d540b0d77daa4183f72c062"],["/tags/index.html","5ac14507bec44004b12dde9ccce04df7"],["/tags/k-近邻算法/index.html","af9aa61a99be46ac02edcb960d755a44"],["/tags/matplotlib/index.html","26c470a1bfc33577a2bb449c00ffd882"],["/tags/python/index.html","b2b96a771cf5fe8caff2b89ad4a185c7"],["/tags/python函数/index.html","babdb7880f60f557ed10110b68e300ab"],["/tags/python库/index.html","4d5bab34edad3e37c2fb28be915fb854"],["/tags/python异常处理/index.html","3977c27b02256e55b5230cfd91f8801c"],["/tags/python模块/index.html","64052cce763c83b986a0d2538563143c"],["/tags/python正则表达式/index.html","638ec45d49d9a63d25280083faacfedf"],["/tags/python面向对象/index.html","48edc90618ffab17874189074a2a081f"],["/tags/python面向对象/page/2/index.html","3ca9277fd83f4c6a993a1bd96cee7df7"],["/tags/基本教程/index.html","f3236d7de1d79473657190ba0f0e92dc"],["/tags/基本教程/page/2/index.html","c61c38f1423a1f322524f3c46c8ce15c"],["/tags/基本教程/page/3/index.html","8fc71bfbec565fa0937e5e73f041ab2c"],["/tags/多态/index.html","8a5a35d48905e7a8c019ade1e913075c"],["/tags/排序算法/index.html","d204c9c6de5f14827101a2a0215e134c"],["/tags/机器学习/index.html","20dccf42d0c45d5c916313f6532791ef"],["/tags/测试/index.html","47ac68bb91d36d597450508b558e54bd"],["/tags/矩阵/index.html","e50948be56f06ea3ed28e89843ef8175"],["/tags/经典算法/index.html","0ee02aa7f9faa8579c83fe8be0ce7bf8"],["/tags/链表算法/index.html","9f44e243310ee91605966aaa35d48cff"],["/top/index.html","e0255c465a15779ea6e15cabfa0a3716"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
