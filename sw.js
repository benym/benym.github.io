/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","82a78b4cd5d161668f45f025e0c2479a"],["/2018/04/08/整合建立输出增删改查的链表/index.html","60638ff7b73d19d82878916f9da3ba2b"],["/2018/04/08/选择排序/index.html","23c1c80d67800a4afa499470a67c111b"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","64afa5cd84303d9d148177bc55673bbd"],["/2018/04/10/冒泡排序/index.html","47f33923feceb63863b96c593a554988"],["/2018/04/10/折半查找/index.html","1b9575ce37d8962669969c6dc89e7ba5"],["/2018/04/10/最大公约数和最小公倍数/index.html","0d662d113e851db357512f96fc09b839"],["/2018/06/27/python中的Docstring/index.html","57d48cff6ccce8155061b4e72d6b3a80"],["/2018/07/07/python中字典（key-value）/index.html","4484091a3287046db7517247f231fee7"],["/2018/07/07/python中字符串的一些基本操作/index.html","5f9956956535131afb20258afce94efd"],["/2018/07/07/python中的元组/index.html","6ef7c1be2f6699eb8cfab3048b2086e8"],["/2018/07/07/python中的列表/index.html","62c7372f0b13700a43cad6edd85e9756"],["/2018/07/07/python中的序列以及切片的解释/index.html","c0553118c68d8c5eedd9759b485be357"],["/2018/07/07/python中的引用和切片/index.html","fb214da4baf3f661847c30ea03b978b7"],["/2018/07/07/python中的集合/index.html","ee46ac362ac15d4d4e0be9a32608fa04"],["/2018/07/22/利用python进行文件的自动备份/index.html","44664f8fed6c1ce47866196fb5e20040"],["/2018/07/23/finally异常处理/index.html","a601dda439b465a42330572efb83429c"],["/2018/07/23/python对象的实例化/index.html","f12bc9a1223934ca6fb4b62f3c73791e"],["/2018/07/23/python日志模块/index.html","c5093fcd34946f30bffe58c60b2fde75"],["/2018/07/23/python的pickle模块/index.html","11d37b24fbb38a93fb2417a66e8c4689"],["/2018/07/23/with-open异常处理/index.html","4dbcfc9b86eb9b0b40da5ffe27f9e3dc"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","d705aea3b2ef1aefc0c4c64d9f53a0e7"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","f7537afd0ba0d2775a547605a62d437a"],["/2018/07/23/在打开文件的同时规定编码/index.html","6557a3b6a87d0d721223665dfa285c89"],["/2018/07/23/文件操作/index.html","122640ca0300207ee577b906a4b48c94"],["/2018/07/23/用户自己引发的异常处理/index.html","977586aec64712a658be90b5f5ce6f2b"],["/2018/07/23/简单的异常处理/index.html","9fcb6704becbe532abbab3041a00883f"],["/2018/07/23/类变量与对象变量/index.html","9a78288cc56ee4d53fa82f413132bed1"],["/2018/07/23/继承的运用/index.html","4518d15e2ee7475856591f0fe12ade59"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","f82d7b426908cc35105903b08b5994fd"],["/2018/07/23/输入输出——简单的回文判断/index.html","a7eddf287cfaff681037ead0a4bcbd93"],["/2018/07/24/assert语句的运用/index.html","ea1784ca48553cb413e6525fb946054d"],["/2018/07/24/python中的lambda函数/index.html","5ed03b2bf6a959d5780bf96d5bb97d25"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","1bc0947d453cb50f6b72c019a3e896c1"],["/2018/07/24/列表推导/index.html","8033b3bb6cbff22340d5ecc9e15a3686"],["/2018/07/24/在函数中接受元组与字典/index.html","29f6d6e5a13634c853db582708d0f37c"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","8506a7c2e7bba63f1f9a181cfe1fe597"],["/2018/07/24/打印九九乘法表/index.html","f092493629d34cc6267e25cafdcc889c"],["/2018/07/24/打印直角三角形/index.html","4b61003a6229e405c40b1a340093b03c"],["/2018/07/24/装饰器/index.html","ae126a3a101aa810342ddefd9c21d2fa"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","0d0ba0c14e2190fb26551e7dbba81887"],["/2018/07/25/python中字符串的一些方法回顾/index.html","666d5314ad3a9e71f1ac1f64639534d3"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","951e89414260f1128a169d0a5c0c7b55"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","80ea290105c24a6e1f8f62f674846097"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","955df4268c66245660ed4eab67cbb8c0"],["/2018/07/26/python中完整for循环的实际运用/index.html","84314db178a2feaf13235818d96ddec2"],["/2018/07/28/python中对列表和元组的切片操作/index.html","94d256e1b6ad6965cb105fb60061f386"],["/2018/08/03/欢迎来到我的博客/index.html","3195860d91ea6db72eb84d7d826cd551"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","bd396a4c0ae40727a8319ddaf4541371"],["/2018/08/07/Python中的正则表达式/index.html","035c8dc7335b01cec05043b1eeea66f4"],["/2018/08/07/Python中的正则表达式match和search/index.html","9d87baf2d7d82fed55ed49a4fcdc1d49"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","e6adaa15778b54559fe4fcc7274a4b80"],["/2018/08/07/正则表达式中的compile函数/index.html","68d01590471ef6f6bea52f009470d126"],["/2018/08/07/正则表达式检索与替换/index.html","1f6223c85a18c5ca8ad8c5fcb9be606f"],["/2018/08/08/python中的__new__方法的重写/index.html","1e994c74b792841426ef8b14a87105bd"],["/2018/08/08/python中的多态/index.html","95532ba5657fcd20f89c6b54cd817708"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","c1cd265a7e454237c3381e55ddfbfd74"],["/2018/08/08/turtle绘图库/index.html","b0782ea021b0f11c842360170c92fcea"],["/2018/08/08/单例设计模式/index.html","c099c255b5750d1569c1ad67e7022ab1"],["/2018/08/09/Numpy库的首次使用/index.html","9a772a9d5aaae8e51935d0267250f6dd"],["/2018/08/09/kNN（k-近邻算法）/index.html","2a5468c4c76eb8d4aede9a848d8a3d06"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","9263da8d9233d0c403c444de563b7a94"],["/2018/08/16/kNN识别手写图像/index.html","6dad25e0639b7152582b7dbed3cc8ad4"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","46a8324f280e37038d3292d38d713bb8"],["/2018/08/22/Ndarray对象/index.html","c2d302165b7668463a9f98406fbad3a6"],["/2018/08/22/Numpy中的数组维度/index.html","fdf5af7b1d7c540acd03d2b4d459cde9"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","b36e3befbd729ef12ac6cbe275205e5e"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","6f2db73ab3116ecb96a1ef8cbf0e9ac7"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","69e39ccb29af28ae8b20be81d9fccaec"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","613cfe94687e4a3bd52c891d6b0445be"],["/2018/08/26/一些TensorFlow的基本操作/index.html","dd142ddd84045a19745c2e2af9c21019"],["/2018/08/26/交互式使用/index.html","3406010039d4e9e98bcad769c4a9ef50"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","961d4d03082505ef7998649aa9fa583e"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","d158d0c04035668cf3795634c696ef7d"],["/archives/2018/04/index.html","770f13b8bc83af1fa26703c5679f6322"],["/archives/2018/06/index.html","ec41782a0708e2b8ed48a5288abe1582"],["/archives/2018/07/index.html","567113df4aa66eb3e266ddd278704f71"],["/archives/2018/08/index.html","1b8ddf66121d32b96365e49c1c9320c3"],["/archives/2018/index.html","7e0e88ffde0ee6b6c7ec847c6cfd90a5"],["/archives/index.html","9b7000c1b594d979dcd1dd4eba06a430"],["/categories/C语言/index.html","522338e713d12b5c0762c6795300c748"],["/categories/Numpy/index.html","1980cf063b90df293c8bfa4c854e576e"],["/categories/Python/index.html","314e00a7ba783a6cda41d4be7f1ff131"],["/categories/Python/page/2/index.html","d833af32a4e7d7d75b5f622b4ac0218c"],["/categories/Python/page/3/index.html","b2430417ca6f35e9106375d700516d50"],["/categories/Python/page/4/index.html","d3baa304188ad97ef908fdc3d4b3acbf"],["/categories/Python/page/5/index.html","de1270bb0170f86f906a6c937b72ab22"],["/categories/Python/page/6/index.html","b6ba28a90b557e108d890e4070cbfe2e"],["/categories/Tensorflow/index.html","7eddb7f8d98abd2280274722350bae65"],["/categories/index.html","d940fb109266c3e79e7606698050f6c9"],["/categories/博客测试文件/index.html","6f62967b474a0ce23e53b0ca34b8fd10"],["/categories/机器学习/index.html","e1120b3057d5b7373467e4e372ead82d"],["/categories/算法/index.html","2f671dd8cf2794eeb55830a875317cf2"],["/categories/随笔/index.html","b24679c5321a2592214823e47d7fa568"],["/css/main.css","7a607cbc6955e20fa7b941afd24fadd5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6be430faabfb8a48ab3d281ae68a7627"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","415e841c58f1b56113b422d072fd7559"],["/page/3/index.html","e510f4450fb7ecf181b658cee521d275"],["/page/4/index.html","f42593664b98198c1aa79c9b45cb0c3f"],["/page/5/index.html","fc5c03b5d53e86d1b5c47d222643ad4f"],["/page/6/index.html","8c49c638fac17fd5a82839b7a565fc4a"],["/page/7/index.html","eb1d20935749ace253986da2790d6636"],["/page/8/index.html","ef74fae93f216b0e08fdf72faf1cd6d4"],["/sw-register.js","953c62bb69363b67f3c5faefde67cbbd"],["/tags/Face/index.html","f54d0ecc2bc3b33c830f4988e6f7368f"],["/tags/Java/index.html","fb33b3870047243a4aa4cb1cd9b38ae4"],["/tags/MNIST/index.html","d25a03da33d263b25ca4caa7a231b597"],["/tags/Numpy/index.html","3fe7378b8758bd2c36a99c493b9f7bd6"],["/tags/Tensorflow/index.html","5412a2726b987c470830fc7a9dd0ddf3"],["/tags/index.html","eb443666f81de750dfc66200a7f45dd0"],["/tags/k-近邻算法/index.html","f1111314a58e8078134e4bfddfc2e559"],["/tags/matplotlib/index.html","ccfbdaa3e0070d93a9c3716bb4496655"],["/tags/python/index.html","434d82bcb9c857fc1a7ac91a5befc56f"],["/tags/python/page/2/index.html","95424b16b5ea2ce3e11fa6594db45df3"],["/tags/python函数/index.html","3c2e825f492031e5cd86652a56b4ac6c"],["/tags/python库/index.html","e00e214a63276b50b2b0feedd9c57662"],["/tags/python异常处理/index.html","56360f90e593d3b9c36a963aaf77b202"],["/tags/python模块/index.html","dabe575c879d05b837ae7e59d6f64c66"],["/tags/python正则表达式/index.html","ba2a5b2c265bf70e8742a3fb224579c2"],["/tags/python面向对象/index.html","6142b098477a258f9ad2aecf9c848119"],["/tags/python面向对象/page/2/index.html","65fc7f24a9ecebdf0092b0fa8333a4c0"],["/tags/动态规划/index.html","802c22ef011470a944cce91d9a514771"],["/tags/基本教程/index.html","97cbcb6a8cec97055886b39735c16da2"],["/tags/基本教程/page/2/index.html","768cf34c1db703887ccae1afd8d0b14a"],["/tags/基本教程/page/3/index.html","57d4f170fbe0b9d0a69023bb16ed1c18"],["/tags/多态/index.html","9b1873aa6814227cc497b5f3b47a191d"],["/tags/排序算法/index.html","b0a284f40dad01df81c61d4860267304"],["/tags/机器学习/index.html","39b6cd53b37ed1ddf350f44e62a0ae95"],["/tags/测试/index.html","3a440c527665aad3826dce0ecdfd10a6"],["/tags/矩阵/index.html","38a8ca644b19fdf8b144ee6c9117527b"],["/tags/算法/index.html","893e99e4fb41fe6ce33ddcec897006ed"],["/tags/链表/index.html","5533c976854e1c5eacd120f28bf3d9ef"],["/top/index.html","c024e8f7d62a76e8b98112688cbdc4ba"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
