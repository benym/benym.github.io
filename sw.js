/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","c6c4b06d9318c6e4b88188f46103d2af"],["/2018/04/08/整合建立输出增删改查的链表/index.html","25646a3082e7bb1485afea45912c1beb"],["/2018/04/08/选择排序/index.html","c1154360853862a304184e1068bc0d53"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","ddff3badae41d7ca66e0ddfb0be7a86d"],["/2018/04/10/冒泡排序/index.html","c6c3825b5b44e42ff09574496ba8b86b"],["/2018/04/10/折半查找/index.html","b8df98b251216ded4c927ceaad26cb06"],["/2018/04/10/最大公约数和最小公倍数/index.html","92179372bb6efd5c2a6cb2378d5146a3"],["/2018/06/27/python中的Docstring/index.html","24c01af2bc8bf4353ec2525fa41c4d45"],["/2018/07/07/python中字典（key-value）/index.html","93221dc6e1c7cbd9790e8c81da53aa8f"],["/2018/07/07/python中字符串的一些基本操作/index.html","613cea9b1f69ffa5965adf969a10a21e"],["/2018/07/07/python中的元组/index.html","40e5ee8c31acd40fd4460164a0eba8f1"],["/2018/07/07/python中的列表/index.html","102afe14c59b680d1f43dddc8a0cbc53"],["/2018/07/07/python中的序列以及切片的解释/index.html","36091c5f120e1aab4ab1879b7b63daae"],["/2018/07/07/python中的引用和切片/index.html","0bb209a1ee9031aa71bed77338826e86"],["/2018/07/07/python中的集合/index.html","bdbb86c79fe07d00e35671c27bcfb041"],["/2018/07/22/利用python进行文件的自动备份/index.html","419bc18d2f8cd2af09cedf0d4423d528"],["/2018/07/23/finally异常处理/index.html","c7825355f6351e03e3d29679a4a5963b"],["/2018/07/23/python对象的实例化/index.html","3c326c008f7e18e7d6c68ae562fcec5f"],["/2018/07/23/python日志模块/index.html","afd75d4c82002ebb9407d2be0d516f76"],["/2018/07/23/python的pickle模块/index.html","da1230a3dbb886df862f9866857e0744"],["/2018/07/23/with-open异常处理/index.html","223695827c9d2be2b998faec31f2c58f"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","503478ae8f580e2b6b838c9a96549ede"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","3279f643646cc97201fe3928e7e663cf"],["/2018/07/23/在打开文件的同时规定编码/index.html","296a46bbd3e285525d5c19fb44c28c84"],["/2018/07/23/文件操作/index.html","f55d1de95f32e5c8a196b3322cd37166"],["/2018/07/23/用户自己引发的异常处理/index.html","887aa5de3b033cb26d770211ab6c9cae"],["/2018/07/23/简单的异常处理/index.html","279c04aa913637336211cf75f984f651"],["/2018/07/23/类变量与对象变量/index.html","3c41ab86dbbc2c20f85faf2601ea7b61"],["/2018/07/23/继承的运用/index.html","66dfafee39438c3078b8edfaa5decb0e"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","46de482677599cba581d54f03a4bbeec"],["/2018/07/23/输入输出——简单的回文判断/index.html","f163a1e8d5c2bed9a82d1c453c2a1fc8"],["/2018/07/24/assert语句的运用/index.html","ae458c9b7cb2d41e2609d4fbbd9b0bc7"],["/2018/07/24/python中的lambda函数/index.html","4982070c6f098c9e0c47f2418128b641"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","ea22f9df7daadafada57904c3770bd23"],["/2018/07/24/列表推导/index.html","db659abef5d7b49b9f97fb6f56e2574b"],["/2018/07/24/在函数中接受元组与字典/index.html","5a1e1e847bac8ae32770a2cd4754bcb5"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","eff8ff6fea36cbf8e7983b8de77ec866"],["/2018/07/24/打印九九乘法表/index.html","1c02dc2d6e2963fb4219d69ba1dd0652"],["/2018/07/24/打印直角三角形/index.html","752d236f13c4c4bd016918fc8ad046eb"],["/2018/07/24/装饰器/index.html","491ab1f5f46a0e2369f374d541efdf65"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","7becd0af3251d66f9dc835681cc92faf"],["/2018/07/25/python中字符串的一些方法回顾/index.html","6da1412ca8d414630c4d25d6ace6eca5"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","9b51db46f8d4b7dffcd10140c40f0ee8"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","69209996c97c29b252ff57dbf651da73"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","c8956fdbfcab2397f3694fbfdf996efd"],["/2018/07/26/python中完整for循环的实际运用/index.html","372fd6fe7722b5230a73e18a984712ea"],["/2018/07/28/python中对列表和元组的切片操作/index.html","816920f5c29cc9fd28c420d1ce3aef5a"],["/2018/08/03/欢迎来到我的博客/index.html","fe481023f29912fa606b7843db53bef4"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","a0e5f5cfdc80982b34f28edb3cc9a0af"],["/2018/08/07/Python中的正则表达式/index.html","0570083479a8bb596c58abf57e40851d"],["/2018/08/07/Python中的正则表达式match和search/index.html","8176bf1e42bfe39e58aeed6ed3b1fbee"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","8548824ef53d6efb33d5ad512f1def04"],["/2018/08/07/正则表达式中的compile函数/index.html","bd5229d9557e0263546a035ba8393638"],["/2018/08/07/正则表达式检索与替换/index.html","d6c88d9a773ffc0e4b8790006f4a6f03"],["/2018/08/08/python中的__new__方法的重写/index.html","1211ff23ef70db097ec59f23fc3efa78"],["/2018/08/08/python中的多态/index.html","f047c539b34dd1a5c8cc2ce2ded20d68"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","eba12781d02abcb39f15c5fd66617dfa"],["/2018/08/08/turtle绘图库/index.html","38ad056f4bf1491cd99226f09aa212a4"],["/2018/08/08/单例设计模式/index.html","37838477de4ef6ee773850705324b2fa"],["/2018/08/09/Numpy库的首次使用/index.html","9a4360e11a4b9a30c4de6fd8f8f7a2e6"],["/2018/08/09/kNN（k-近邻算法）/index.html","62eea063e2e87689f9e73ead840c6400"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","9518723fd915a8cc7dc6eaded772249a"],["/2018/08/16/kNN识别手写图像/index.html","8cc3169226504d084717760e948bbcb8"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","b23468b5333b4fa9d32af0ee635b0448"],["/2018/08/22/Ndarray对象/index.html","06291410510afef7ece5d553ae1ef8d1"],["/2018/08/22/Numpy中的数组维度/index.html","cffe77c058f8121254ad471f51f4c454"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","50eda5fb1615daa5ce57eac91fb0e3a7"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","7d0f156fd4863597d6a3edea659123a6"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","36314815945bb5aa2ea1f845e3f68a9d"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","a81172b66d5171c5b99485f3827a4f6c"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","a6daf830722c61150fd97d95144c9b40"],["/archives/2018/04/index.html","3ee36a2d9e2da4505e00910f3ff58aed"],["/archives/2018/06/index.html","17b1bb549b342e738f2f362f9e305c22"],["/archives/2018/07/index.html","0c6f79b91ea5bdffaf5a18d237cc6044"],["/archives/2018/08/index.html","0b0d04a011f55b7a050c7fa63c3a72dd"],["/archives/2018/index.html","113989a8b71fe6a9ce691bc4290e1f1e"],["/archives/index.html","122f5aae43124ad13c72af80713ed87d"],["/categories/C语言/index.html","6c10cafdd547f65bb063a184487975d2"],["/categories/Numpy/index.html","c68a926bed4b00cf154497017f299c85"],["/categories/Python/index.html","b79dc8eb5f941ce954696c7269be0967"],["/categories/Python/page/2/index.html","8d75c6032dea3a2ddb42522d00d51758"],["/categories/Python/page/3/index.html","238987dbd49d0d70392a7efe6a313501"],["/categories/Python/page/4/index.html","823fbed0f6ff06bfc417530d85061290"],["/categories/Python/page/5/index.html","93c6576b65068ecd2c1de8f8e1ea822a"],["/categories/Python/page/6/index.html","35d59f9707fedef65f5535f0d2bfe8e7"],["/categories/Tensorflow/index.html","24f206f0df7af461952d018ac3f781ab"],["/categories/index.html","cb60ae03c330f131e5decdc855032db9"],["/categories/博客测试文件/index.html","715d202a07e0bfd30c22b693b3aefd6e"],["/categories/机器学习/index.html","6c3b47e3f3ca8e2177eb0639a6702be4"],["/categories/算法/index.html","94a1131f3002fc496142a27f96133cc4"],["/categories/随笔/index.html","e0011b8681cda2fa4eef77fb5a1f4d69"],["/css/main.css","b5b52c20520e4deb8ada3457f54aaec7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","20f226477b384e59efbabf65467e92d1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","907b5c9fc5fdb0932cb14639632cf666"],["/page/3/index.html","ca5ed2a83b4a05fd9e9450c7955b1325"],["/page/4/index.html","a643aba6b6dfcdfd303f39da2dc685ca"],["/page/5/index.html","ccbd5734b4d139edf7ee8744e38e1a93"],["/page/6/index.html","9111aefdcba3826dd14b0fc1571689b4"],["/page/7/index.html","5506ecde9cfa20315a62aaba744284d7"],["/page/8/index.html","4740d665010e88c6a77c144916d29dc4"],["/sw-register.js","a1e1ef63b2fd6b41875fe0fb253de9b7"],["/tags/Face/index.html","b3d040b4213b183d3c4f1a7fd4dc39aa"],["/tags/Java/index.html","bc61bf8d5593de981b7d62edd6e07292"],["/tags/Numpy/index.html","7950ea201d7a7d34bab6e8e0474f45ce"],["/tags/Tensorflow/index.html","bfb6d6dbaf23e4085b6198994be495d7"],["/tags/index.html","f8b7e40fb29da4afd35414d66dca0622"],["/tags/k-近邻算法/index.html","734dc32d4273d3c60cb5e0d137b9f3a2"],["/tags/matplotlib/index.html","1bdb4bb861ad3301b74954fbc58f3c2b"],["/tags/python/index.html","a7be0ae7f13074aabb94a80ab18fc1c5"],["/tags/python/page/2/index.html","b68d0593e1ce381e7c3694732e87bc5d"],["/tags/python函数/index.html","03d98b8f41e85d21800091bfcd023777"],["/tags/python库/index.html","dca50b52a5d34fa2001c3de1c3658784"],["/tags/python异常处理/index.html","7ea1baba96591cabe71ff4c0656b2392"],["/tags/python模块/index.html","c53e87a5e13b4046387dac047a685db9"],["/tags/python正则表达式/index.html","2383b2dd986c297856c513214f75484e"],["/tags/python面向对象/index.html","d24100872db077eb8aabc05b3b588832"],["/tags/python面向对象/page/2/index.html","72399ce3d2244ffdf26b87e5d68c5669"],["/tags/动态规划/index.html","c39eceeb0cd1003a15983b00cd39f7ae"],["/tags/基本教程/index.html","1d1b346f0c421fee651ea8a56f5f9e84"],["/tags/基本教程/page/2/index.html","a408e5b9cb78aead9ee495c79e617a19"],["/tags/基本教程/page/3/index.html","d5f45fd26c68fdb9271412ec20884481"],["/tags/多态/index.html","c7faf7a372b2a4d880f1e37d555249c1"],["/tags/排序算法/index.html","1ba02e8ee6763a872b082d8ab793cdd6"],["/tags/机器学习/index.html","793734366ec668481b32071d1d38a7b6"],["/tags/测试/index.html","67af15a04d53b52c916e50769b8f09d5"],["/tags/矩阵/index.html","edd2bc482b5a83fb096ea876db8e389b"],["/tags/算法/index.html","b2fc74cff1f5382cac5047689c946c99"],["/tags/链表/index.html","b77ae1a283d6ec41eec2099aaa225f90"],["/top/index.html","e5751ece6b9153d4839eb792a135c4df"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
