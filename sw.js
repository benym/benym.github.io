/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","094c1dfdb2a8eeb03bcd850c61da6b37"],["/2018/04/08/整合建立输出增删改查的链表/index.html","bfcbe8ec8d3133bd38fd71e127990fa1"],["/2018/04/08/选择排序/index.html","a63f748ad089fc4fc1c0760450ae24e6"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","c81f54fc774e6eaf40ed6476a6b03310"],["/2018/04/10/冒泡排序/index.html","f69f2516c9cf3b1bef67c53c96ef03b8"],["/2018/04/10/折半查找/index.html","32994c2c2f670d025efb2eb28559b612"],["/2018/04/10/最大公约数和最小公倍数/index.html","07b1015d8b49a9a9e8afe19a41552c2a"],["/2018/06/27/python中的Docstring/index.html","97d0d39dbd83c04169cf65e875bf4bca"],["/2018/07/07/python中字典（key-value）/index.html","05bc23ee28194e653dec72a84d2d0384"],["/2018/07/07/python中字符串的一些基本操作/index.html","2181d6cb1ff12bb7628e0abd5b6ce3a2"],["/2018/07/07/python中的元组/index.html","86938427131c0d738ca356ef88a4017e"],["/2018/07/07/python中的列表/index.html","a5e8138cb5659823c0c5eadd1496b132"],["/2018/07/07/python中的序列以及切片的解释/index.html","1cc7bcb4a1dd4edb3889ae7e4d780358"],["/2018/07/07/python中的引用和切片/index.html","368d6b04f036994c5d906083e4443d25"],["/2018/07/07/python中的集合/index.html","cff425efb2cf3f9c72a81a0150e0d2ad"],["/2018/07/22/利用python进行文件的自动备份/index.html","d3f274108c869465ef5cd1d4ff812f07"],["/2018/07/23/finally异常处理/index.html","908fab3aa12d6651ffcffc27bebc324d"],["/2018/07/23/python对象的实例化/index.html","22aedfac72b012b4460089e643d22ee1"],["/2018/07/23/python日志模块/index.html","d5d805bf62d72af469cf7ca299c4d3d2"],["/2018/07/23/python的pickle模块/index.html","7fd4375c6a3706baf4de83a505c55f1b"],["/2018/07/23/with-open异常处理/index.html","5e9f3f26e129d098896e6035de712587"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","4e1751168e464868c3eef3d2cf340c91"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","48a50527fddc6762035cf5f1ca7ba9ea"],["/2018/07/23/在打开文件的同时规定编码/index.html","6f6c6182d8728bce8400d4993d7e4a4a"],["/2018/07/23/文件操作/index.html","626c1365a1cc748893899a5a6f80f46b"],["/2018/07/23/用户自己引发的异常处理/index.html","67e07973987051c20615496a11474b59"],["/2018/07/23/简单的异常处理/index.html","74e44c63d8d19951b2d55419fbd61c94"],["/2018/07/23/类变量与对象变量/index.html","a3d9f52c7080f2d75af85aec0adedbac"],["/2018/07/23/继承的运用/index.html","bd192e327d7cf28b6f3a356e21ffe785"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","644a6154cfe158da7ae810108a40ffba"],["/2018/07/23/输入输出——简单的回文判断/index.html","190e46ed8bd55aea6c87d711d0140258"],["/2018/07/24/assert语句的运用/index.html","75dd6a59b79c290a3f3196f325b2c9d0"],["/2018/07/24/python中的lambda函数/index.html","5761560bc9cc89a45d68915e434dee95"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","6805eb8f5d6b1e9ba2ab874f324f3911"],["/2018/07/24/列表推导/index.html","81c10fc517d380d6ab852e6e1283f729"],["/2018/07/24/在函数中接受元组与字典/index.html","4c6b20ac1673ef4035eafd1184415d0f"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","9876978e4a2ee322712f009dab9f7277"],["/2018/07/24/打印九九乘法表/index.html","56b78aabe1a0cf0f024d9d6cbffd7f59"],["/2018/07/24/打印直角三角形/index.html","cffcb699aca26afe6309f9807c7d55ef"],["/2018/07/24/装饰器/index.html","55a9279feaaa68de15cf7db92961ca62"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","7028b8d621e4aa2fec07d4e7d1368c9b"],["/2018/07/25/python中字符串的一些方法回顾/index.html","e03c8e4151c824f4bcc6639078d183a2"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","b35faf1311fd4e80fe2c44599487d9d4"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","2d338a2fcf346ab9cfadf8624a39ddf5"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","160bcfb5fbf588a0003307a2bf18534a"],["/2018/07/26/python中完整for循环的实际运用/index.html","a2c892445ecc82a585bbcb1dadb40fbe"],["/2018/07/28/python中对列表和元组的切片操作/index.html","33d9784f336a3249646d8866d06041ed"],["/2018/08/03/欢迎来到我的博客/index.html","1e6dead3ca02ab1afb762cd34c94a82b"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","d0f7f491d23ca07a7e885b25548d4fd4"],["/2018/08/07/Python中的正则表达式/index.html","990acc49048bd887c924593ff49a7b80"],["/2018/08/07/Python中的正则表达式match和search/index.html","ac341022c51ca95b2517e7f1fefd6226"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","523740c99276a01013680dceef43e90d"],["/2018/08/07/正则表达式中的compile函数/index.html","09ea5c9a78aeed573aebe6d1ebd59cbb"],["/2018/08/07/正则表达式检索与替换/index.html","7442f1e2d7efa6da7250781994fd5959"],["/2018/08/08/python中的__new__方法的重写/index.html","aa2292eef3e153efc8aedef6df587d91"],["/2018/08/08/python中的多态/index.html","e34d72a79d6026563ae160ceb3a85d4b"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","844fb7cdb597cfc72efbda9a4a7281e4"],["/2018/08/08/turtle绘图库/index.html","d6c09e0d29f45aab5663d6d36559fe5f"],["/2018/08/08/单例设计模式/index.html","4d703cb5af7010c305da30bb20109e2d"],["/2018/08/09/Numpy库的首次使用/index.html","3023744303ac23a1d34c9cda84e2298f"],["/2018/08/09/kNN（k-近邻算法）/index.html","ec4f3d1ccb405190e640db36df543133"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","6fc30dbf9b8c22af23f5c926e72610f1"],["/2018/08/16/kNN识别手写图像/index.html","2909854f728ca5ffa69e9101c966978d"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","b4ec6edd649a50b1a81a219880b46cec"],["/2018/08/22/Ndarray对象/index.html","4be154372e7badc015bf661edb4e5031"],["/2018/08/22/Numpy中的数组维度/index.html","88423f30dcf82896ebfb4d93f624dbed"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","bcb8a63752ebb024c5eac8ce152be8bf"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","d202fbb749f9cc7157269f2f79bac461"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","0b2872e1cdd9b239107a983a8c8b28dd"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","35aa1f0ef6e4f76f827865c381b2f95d"],["/archives/2018/04/index.html","e6dcbe7d6125a3acf831350b955da1d3"],["/archives/2018/06/index.html","d4e753e398809bf7ad714c28e44ba6d4"],["/archives/2018/07/index.html","c02120a964c8eb30af04bfd3b20f5f68"],["/archives/2018/08/index.html","c7fe6ccf58508c64826e55663e0a3241"],["/archives/2018/index.html","bab3447bf7b7647bf8d29318a509a084"],["/archives/index.html","835006f261c2ffe23ef76e25067dcf54"],["/categories/C语言/index.html","e4f23a6f047ccb4872042291597e8d2c"],["/categories/Numpy/index.html","dabc45e63c47c7539d076d169937d91e"],["/categories/Python/index.html","81b89d875afc0cc20a3e82768df3ca63"],["/categories/Python/page/2/index.html","da3394cb8c19463ef41b8433810be111"],["/categories/Python/page/3/index.html","24491661c13fbd683becdd580b59fc8f"],["/categories/Python/page/4/index.html","1970ef595cd3a5fa1a540dacd4a9df66"],["/categories/Python/page/5/index.html","c9586befc3af39960094842f4c2dc842"],["/categories/Python/page/6/index.html","3f70bd20038d7985cdd963e949ebc28d"],["/categories/Tensorflow/index.html","e3ff712f01eb8ebfa11a41d5de55558b"],["/categories/index.html","e44791ec157a9a9a03b94098ba7a1ead"],["/categories/博客测试文件/index.html","8e2b6ed8b6dbabc22547254cc39b15a0"],["/categories/机器学习/index.html","e1ff3f77e78f6fccb319e590b06a194c"],["/categories/算法/index.html","a681b9296b70176189df5e19861ee0d7"],["/categories/随笔/index.html","ed09d5f9174ffc54f4392c78a5ed605f"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","a8079cb0057a569d8c7f1a2506f7d040"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4dba8d9f0632b6504880580e4d4eb465"],["/page/3/index.html","dc1d9e323462491ffeecbac0a88ae5fa"],["/page/4/index.html","3add1bcbf4ed5863da4c3739c25775c5"],["/page/5/index.html","55e22b26481e793befb9d90110504166"],["/page/6/index.html","a28269a2500b5fc650c5a5b8e17af63e"],["/page/7/index.html","ffa83b3c065f05071564f0d277f3a508"],["/sw-register.js","4fefd018c0bbe4f82dcff85209234677"],["/tags/Face/index.html","9aaf53940b4512e7c4e12034d3dfd1ad"],["/tags/Java/index.html","a3b735f427134ec525de09e39f1f3283"],["/tags/Numpy/index.html","0f3982d0b2e97ede586e1a8f043ce63f"],["/tags/Tensorflow/index.html","7a9a5aae406cc4271e97cf0d4405dbdf"],["/tags/index.html","629d171d1fdd5c69fe68350f78f9817e"],["/tags/k-近邻算法/index.html","b1bae92dc8742b48a7a4158779b7682d"],["/tags/matplotlib/index.html","91bfc4b9fe9c0b072343900d8d80b47a"],["/tags/python/index.html","fd8a7afcd9c543a0cb6e96d59df99e62"],["/tags/python函数/index.html","5b39f1f787488c668682fed89eedb74b"],["/tags/python库/index.html","979289e9071b04fc80b7fbb43289832a"],["/tags/python异常处理/index.html","a515cbe7011900dbab8e1760ee5b2be0"],["/tags/python模块/index.html","4442356bdf69961c166bb275f929783b"],["/tags/python正则表达式/index.html","6078eeff02bc3070b52579e309bf94d8"],["/tags/python面向对象/index.html","bd8aec4e30d327684d9c8135fa5f56f9"],["/tags/python面向对象/page/2/index.html","1fdab05df479926bf3625fa8d3ba8d18"],["/tags/动态规划/index.html","9ddd35bf0810109d93772985c2da1a90"],["/tags/基本教程/index.html","a162db635c7eac8b01069a1bb93302d9"],["/tags/基本教程/page/2/index.html","9dcaa9f014f024284fbba566374fe392"],["/tags/基本教程/page/3/index.html","4593c03cabdb4022bfa21290659f9e7d"],["/tags/多态/index.html","e9ff990404cc97e4eb880de618e771c1"],["/tags/排序算法/index.html","4dff5eef5caeec38c462eb1ae20a22ab"],["/tags/机器学习/index.html","e2cb0bb1cf06f516a93ba8bce3cf77f1"],["/tags/测试/index.html","363ceb37cfc3a0aa9f280af051b62ba7"],["/tags/矩阵/index.html","bf4894147ef3acf39d263ed0158e0745"],["/tags/算法/index.html","76f9e9066fe9752b1d060646c53696ba"],["/tags/链表/index.html","46355575e056bea5372726fb446b2d78"],["/top/index.html","a69a7c8be563ac1cab2d888cea9c3b59"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
