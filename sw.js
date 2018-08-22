/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","0309020647fa3e500b4fe678cd8f13d8"],["/2018/04/08/整合建立输出增删改查的链表/index.html","1979c6f528c02503b51fac2f0a5b557d"],["/2018/04/08/选择排序/index.html","72f7eb308c3e45a357133d599e5b3702"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","d93e3fa6550db5957ad26e2a823df878"],["/2018/04/10/冒泡排序/index.html","f2799a907f81edada55b3ce990f5a81f"],["/2018/04/10/折半查找/index.html","86e28d36b43cf665470e0606da5e3c4a"],["/2018/04/10/最大公约数和最小公倍数/index.html","5c24dc0513851294e7ef1122202b72f8"],["/2018/06/27/python中的Docstring/index.html","e8354cea2fb7b03d6f963841fe19b19f"],["/2018/07/07/python中字典（key-value）/index.html","9ce64570499a07488923145b4997edd6"],["/2018/07/07/python中字符串的一些基本操作/index.html","5a4d95cf89425fff656ce091a5748d4b"],["/2018/07/07/python中的元组/index.html","4e45fde62786bf8e3efe79d0eb85f075"],["/2018/07/07/python中的列表/index.html","46d9063f34095778b23167c710a32631"],["/2018/07/07/python中的序列以及切片的解释/index.html","6f882e5d4a1e104348a702bfff16ff7b"],["/2018/07/07/python中的引用和切片/index.html","7a54294579d475e985fc01e591393ccb"],["/2018/07/07/python中的集合/index.html","749ffeb2acca7bf663cf59e7b18c3b7f"],["/2018/07/22/利用python进行文件的自动备份/index.html","3bf09b260473775ce808bc168c3a91e2"],["/2018/07/23/finally异常处理/index.html","0ca114ccd949d356abf4fea76f8f3ea9"],["/2018/07/23/python对象的实例化/index.html","0ec2810fa377d98eda3f58bca7c8cca4"],["/2018/07/23/python日志模块/index.html","a8e55042fcb368c9e95797a13199725e"],["/2018/07/23/python的pickle模块/index.html","d5dc47a5c0bb8f4b002d00a656923e3c"],["/2018/07/23/with-open异常处理/index.html","f4f359b1d68b27f7ad7efeebc185899a"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","de75509eb9ab07d31cd8a5f9e017b42a"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","0d42109418405be23f68e4c121e9a00f"],["/2018/07/23/在打开文件的同时规定编码/index.html","25d28837fc79ea454d77319deeb27eb9"],["/2018/07/23/文件操作/index.html","60bb6d69a7f6c8b8cc44e37bc5a092b1"],["/2018/07/23/用户自己引发的异常处理/index.html","50908a954ca4e09364c49b6573119192"],["/2018/07/23/简单的异常处理/index.html","34a3098a9b47cc29fc0bb557ca1a1a0b"],["/2018/07/23/类变量与对象变量/index.html","ad6690a059df17835168d894af76289a"],["/2018/07/23/继承的运用/index.html","2ef6e9c56f7c56a0556943dc5a0b7d25"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","12c3c00ff9f19801fbcafafca4acd364"],["/2018/07/23/输入输出——简单的回文判断/index.html","c63d7656e3a3cc3ba5889a677b8e1b3c"],["/2018/07/24/assert语句的运用/index.html","d3a35c638f933dad389501abe81629ab"],["/2018/07/24/python中的lambda函数/index.html","1aa8886614ee9780418b9fac14bb3156"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","598227a599802d039290e6c399e08368"],["/2018/07/24/列表推导/index.html","38bfc7e155baa91ac02d2775ac94a2b9"],["/2018/07/24/在函数中接受元组与字典/index.html","ce065a0edea5bbe4866c9bb4968952e1"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","0e5d0f38aab72bcf47a6b253f2e00270"],["/2018/07/24/打印九九乘法表/index.html","09001df317918ee9bd5c9dfd818c64a1"],["/2018/07/24/打印直角三角形/index.html","0eb0067f7afc36ff0841ef780ab82b03"],["/2018/07/24/装饰器/index.html","2ad6e2bb2f4158c69cb82514295cfe74"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","ece0a984a26a68fb1179205f6bae364c"],["/2018/07/25/python中字符串的一些方法回顾/index.html","00bf59e7b97ef7dc2c319dd0e3198282"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","52d4de778421df72317b3bbfc9c22ec5"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","78b467862911013b25faf35104b495d0"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","538918ab279b4349a8b568c1378a9b19"],["/2018/07/26/python中完整for循环的实际运用/index.html","ed4c272ba407218058ba09029072baad"],["/2018/07/28/python中对列表和元组的切片操作/index.html","43efcc317368d46cbcef9f3d2606fdce"],["/2018/08/03/欢迎来到我的博客/index.html","d07dc9f09735834ea8bda6619ee101ac"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","7a1eae4fe15f5443f6c1297850304f9c"],["/2018/08/07/Python中的正则表达式/index.html","7954d29cf3a4c17215c9796e43596c6b"],["/2018/08/07/Python中的正则表达式match和search/index.html","260a2ba9cdbd63a64edeb5fbfd39fe39"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","61b9e62d758aaf957754940ba35dacca"],["/2018/08/07/正则表达式中的compile函数/index.html","66d766a29466cbd5b5b42eff179f967a"],["/2018/08/07/正则表达式检索与替换/index.html","eae8e20fc30e2129484e9becd41d0042"],["/2018/08/08/python中的__new__方法的重写/index.html","ca43e0a1c40c88e27c542f7af314c2ae"],["/2018/08/08/python中的多态/index.html","a699ec6f4396a0b9699b0c0fb20c0190"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","4aabeccdcd280336d70482f7e6cc18d0"],["/2018/08/08/turtle绘图库/index.html","1c160a52d708c7e44dd21a86141df9af"],["/2018/08/08/单例设计模式/index.html","b71e731e5cfa21a6e5b4e8b1d0290998"],["/2018/08/09/Numpy库的首次使用/index.html","c41a78dbfc3e7a51921e2e29f1f13a68"],["/2018/08/09/kNN（k-近邻算法）/index.html","7102629b331099599c7f847876958dfa"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","0be2123afe7ada284203f86e8f5e5663"],["/2018/08/16/kNN识别手写图像/index.html","f492bb29415ecd7d71fd7f80093341e6"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","ef8d331b6673384d9d049039d0ce92e8"],["/archives/2018/04/index.html","0ad0dd1cbe07c831fa3243f64de51412"],["/archives/2018/06/index.html","8e85e5f553e43aed31341d7e20ffeb25"],["/archives/2018/07/index.html","adeba2d3a9e13b607e34cbcba8847370"],["/archives/2018/08/index.html","799b944633c37e4055d285370f5d0351"],["/archives/2018/index.html","9b9ed0d73208c6e778bdf360db0daf5a"],["/archives/index.html","ab512c5c5a6fd95c4cbbf681322ede91"],["/categories/C语言/index.html","9f638a044fef8a65f08c3e3566b1dc55"],["/categories/Python/index.html","5b24f9de6124148895b2bda220b7bf33"],["/categories/Python/page/2/index.html","b94189e6bc9fad1fdcf6efe8da6a083d"],["/categories/Python/page/3/index.html","dacee547eaf267ae5fc11a5c9a3fe64a"],["/categories/Python/page/4/index.html","be49c10e8be3e09a84a6e7ad82fad275"],["/categories/Python/page/5/index.html","f0ed3300a88762c2550d31c9939db88b"],["/categories/Python/page/6/index.html","d3a9475cd43fc2c03b2fa08312b5f1f2"],["/categories/index.html","867bc9f4e27d3d36b61f52e2b0cf1e54"],["/categories/博客测试文件/index.html","b0d2df28a78a5fb52425827e1b627da1"],["/categories/机器学习/index.html","ea84b5284f4dfd354cb369daa213c0ea"],["/categories/随笔/index.html","30c6819581219ecfa99ee098d38300c1"],["/css/main.css","c3f1c229eeb26030ccb99d947e53816d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","16964d0046a7f751c0abcf43138f4c74"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c33cd7e803888387b73fcfbd64e54f87"],["/page/3/index.html","5ffc43243e9360ff73a465899c30efb6"],["/page/4/index.html","237f20d76bf0a2c033d5364eab704ea9"],["/page/5/index.html","d5afcd02bf77def90b6f361aff0079ea"],["/page/6/index.html","14e3d4bcfe52a9dee10064fe26b3ad72"],["/page/7/index.html","1c4dd18e132495adff547e59be5d9b70"],["/sw-register.js","f3aa605b187624cef18cdeac57214b20"],["/tags/Face/index.html","76355dbe30038629314980a5dc8bc95d"],["/tags/Numpy/index.html","93c0780ab400e3d190bffadeeb33a978"],["/tags/index.html","1f9b9eeac504232d61204ae805697cac"],["/tags/k-近邻算法/index.html","c3e10171bea7db2dd172b8809b86fab0"],["/tags/matplotlib/index.html","d34d2963b904b1bb0942df49aeb16010"],["/tags/python/index.html","55fb66ea23bc9b7e2ea20e1b56b10263"],["/tags/python函数/index.html","c2e939d95750b8206844513264ab5041"],["/tags/python库/index.html","a0af10628383b1f846df4f55aab55e6f"],["/tags/python异常处理/index.html","3b70697d3f3b5b66d55484eabe8be5e7"],["/tags/python模块/index.html","feb1fedc22fc105b68f0f472482debd8"],["/tags/python正则表达式/index.html","396ef0ab5f1aa153a1aed112c8a83d85"],["/tags/python面向对象/index.html","c07d3a82cc721b817fd867eb59805f4d"],["/tags/python面向对象/page/2/index.html","a3386a740c5dcf1d4cfc9aa61409b37b"],["/tags/基本教程/index.html","45af6050a12e94f6a5ee8f28c76a473a"],["/tags/基本教程/page/2/index.html","d01bb2eb0fcfc9ea1bf10fe98d7f4a60"],["/tags/基本教程/page/3/index.html","0b89b36fae01b4fc8c969abc98454fb1"],["/tags/多态/index.html","01ac48c38bdba08b0a3fe408ad277ea1"],["/tags/排序算法/index.html","caf0b8572ef0790caa671723baa8e7a6"],["/tags/机器学习/index.html","a4a219a3ed658987788a4deaba9a010a"],["/tags/测试/index.html","8bf6e13f478ca99357fff8d855673156"],["/tags/矩阵/index.html","2a3146e7b3ed5d39d0c06492ba671d07"],["/tags/经典算法/index.html","f564cb0303b3d3479d6c17f03a4c5c43"],["/tags/链表算法/index.html","8044095d63d0d4e03cfb4fddb4f74f90"],["/top/index.html","a7a2204da33c94f468bca93868a6b08c"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
