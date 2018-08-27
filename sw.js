/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","4849f69379b697743edf0a4775ba82e3"],["/2018/04/08/整合建立输出增删改查的链表/index.html","b73442b602c949f382ccb8c754f7739d"],["/2018/04/08/选择排序/index.html","fafbea0b7dbe5e4f17ac8cc2abadd2a6"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","e4b9508e74b2b2def9a455156fed17d5"],["/2018/04/10/冒泡排序/index.html","e66867efb638dd0ec2e7692670b1af84"],["/2018/04/10/折半查找/index.html","2ae9450ed5114854c804b4759bc655f2"],["/2018/04/10/最大公约数和最小公倍数/index.html","66ebd141034cf761a252243b36adb10d"],["/2018/06/27/python中的Docstring/index.html","05b86a168e339bdfd39753c5fda0beb6"],["/2018/07/07/python中字典（key-value）/index.html","dd26c140b9842c72889bc931b7501e3b"],["/2018/07/07/python中字符串的一些基本操作/index.html","e3ff752db7daef73a7ec3ed24f79d033"],["/2018/07/07/python中的元组/index.html","1af66f296d588db0556da82dc43c6da5"],["/2018/07/07/python中的列表/index.html","e59dd9ecef2fab6406e2f35fb927a260"],["/2018/07/07/python中的序列以及切片的解释/index.html","081aa10488850a0511ccd650c3c16a57"],["/2018/07/07/python中的引用和切片/index.html","01f0ed752d1d5c028f9c34411fd114c9"],["/2018/07/07/python中的集合/index.html","cfc6ce2f596a511b5d1e2fc3d0bf41b6"],["/2018/07/22/利用python进行文件的自动备份/index.html","29f22ee0a43cdfa77ac9050f4c52689d"],["/2018/07/23/finally异常处理/index.html","8df7b12c5ad37d11aff97a0fd5e9a608"],["/2018/07/23/python对象的实例化/index.html","7347d2e231c33ed6cb750f26b3026088"],["/2018/07/23/python日志模块/index.html","0d5deb05dd1f97bacb70d1355dabb2ce"],["/2018/07/23/python的pickle模块/index.html","6126cc16dbf918060b08f8eec9884109"],["/2018/07/23/with-open异常处理/index.html","0140013a871c71f7b5253a6e5caef45b"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","e6ab5eb1da23ae65b4c5328f8e83caf5"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","fc89c6b2021081d3be3432016789da97"],["/2018/07/23/在打开文件的同时规定编码/index.html","72f31b223901199da9f95fcc55d5604b"],["/2018/07/23/文件操作/index.html","b4ce8e800c15729e6a4979255b7c0a86"],["/2018/07/23/用户自己引发的异常处理/index.html","619bcc23ae737d9872326e2789cd6acd"],["/2018/07/23/简单的异常处理/index.html","1d438921cfb206230812987135d043ea"],["/2018/07/23/类变量与对象变量/index.html","acb391fe495523e9779f2f728d01c018"],["/2018/07/23/继承的运用/index.html","4de55127428d1ca01db7aa026f5868ff"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","9eb18a6f0333b0b9b9754bc6bd8c7575"],["/2018/07/23/输入输出——简单的回文判断/index.html","2eb07117dba4168648c334905edeadaa"],["/2018/07/24/assert语句的运用/index.html","addf16d620249a27d436f688a955bbdd"],["/2018/07/24/python中的lambda函数/index.html","2da7931b6fc65ba9e7f0624921a9019e"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","f27420eac80747614853d4c3ef490109"],["/2018/07/24/列表推导/index.html","1a95529748b16b5088f046e01ef49237"],["/2018/07/24/在函数中接受元组与字典/index.html","e793ac84f585f22921e23501d74d5dfb"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","133902278b4915364900dc9093f6698d"],["/2018/07/24/打印九九乘法表/index.html","45fb8b0d5f9d14cebbea78204a67094b"],["/2018/07/24/打印直角三角形/index.html","49759073678d89bdfb68910c24ccd9f3"],["/2018/07/24/装饰器/index.html","15a3264bed66e9319345535b13fa8073"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","372e1825a98bbc7adb57ba1886c3c987"],["/2018/07/25/python中字符串的一些方法回顾/index.html","c8f1943cc377b9bf82622eaf79777856"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","b0a4c7d45c38f2a114c6f2dba044a162"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","1bdf196427a3c7a3a69e991e94c92482"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","0c36be908e9291d9416f7fe1dfad4d66"],["/2018/07/26/python中完整for循环的实际运用/index.html","5ca00ef36d75e1db763b74902ac32eab"],["/2018/07/28/python中对列表和元组的切片操作/index.html","9569acabbc3e0b39dbe7f8ef604810bd"],["/2018/08/03/欢迎来到我的博客/index.html","dafbd874e333356a7f3e0ddd8f785c5f"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","198ae302f46ce26ca7b81462abefc047"],["/2018/08/07/Python中的正则表达式/index.html","51d31ad882475e39dceb5c3f1335988b"],["/2018/08/07/Python中的正则表达式match和search/index.html","8e81d7d5f79dcf7b663fb92e4ccce75c"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","254f90624d34c87279a5a610206d5ddb"],["/2018/08/07/正则表达式中的compile函数/index.html","84d2dc9df1ffe444f3305ac43fc1b436"],["/2018/08/07/正则表达式检索与替换/index.html","58343693b3521fe890c065c127309cbd"],["/2018/08/08/python中的__new__方法的重写/index.html","f8fb30b91eb1b7033e24e067e171303c"],["/2018/08/08/python中的多态/index.html","c642233f0792c225cd3036f199655910"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","0957d0419714a69b39248fee21cb2257"],["/2018/08/08/turtle绘图库/index.html","31690c6887feff5bf707f7d699a891ff"],["/2018/08/08/单例设计模式/index.html","9b05f45358b6a0029d4764f963a6eb2f"],["/2018/08/09/Numpy库的首次使用/index.html","c8239e3d7090545b299db242c1d3fea1"],["/2018/08/09/kNN（k-近邻算法）/index.html","98357a4e486df47108c40f6eee41bd86"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","d3a03f79fd1b4caa6dccb33548c8600b"],["/2018/08/16/kNN识别手写图像/index.html","ee34eea1e36b9e1573f05e6aba4efb62"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","efa4f8489537cc89aef18e86fd182bdf"],["/2018/08/22/Ndarray对象/index.html","7dba655d972356d40ad683af674f718b"],["/2018/08/22/Numpy中的数组维度/index.html","80fc9dc517fa4db7f7d1cd1a5075a478"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","95a2149f4c7583e958b11e5f6a12364a"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","e1e05f1fe3eaca21ac15afcdf092b954"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","402f3f39b778be4a16f505409326c73d"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","80d149656c187579c2c722efdf73f821"],["/2018/08/26/一些TensorFlow的基本操作/index.html","4056ea951ae5d9992f4f90be74b653f4"],["/2018/08/26/交互式使用/index.html","37e8fcb5a7318532e367f4987c0a6080"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","fcec454ba521ebf6739b988c39f3e026"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","51d55181b7aacd43b39ba9e3fd9a33a3"],["/archives/2018/04/index.html","8e81c999c5149b064a8ec98608ade62b"],["/archives/2018/06/index.html","9439f609437646ee46b86f9a2d4ab515"],["/archives/2018/07/index.html","45d30cf96f6f9f3818bb8e1ecb867bd4"],["/archives/2018/08/index.html","466d4ef5dfcd05aa7e554e33df7444c9"],["/archives/2018/index.html","9eb2afe3e0d458ed41f27d10f9224be2"],["/archives/index.html","400b3a49db79d089572034b6028e2b35"],["/categories/C语言/index.html","4896c7eda39c03158b0adac41fbeb56c"],["/categories/Numpy/index.html","e2b7f85f1a04d671e94354946ab81555"],["/categories/Python/index.html","576caf8e03ea3cead84e759253bd5eda"],["/categories/Python/page/2/index.html","f1c831b265e02cf82d3d7430063f18ae"],["/categories/Python/page/3/index.html","ba877a6ef7fb6becf466e4a88d64b04f"],["/categories/Python/page/4/index.html","e5d5faa371b57e448212c6289f5db7da"],["/categories/Python/page/5/index.html","62f062a22e0980aef35dc318dce7e18b"],["/categories/Python/page/6/index.html","026b9080b90c8f6d67efbeb5de4eb974"],["/categories/Tensorflow/index.html","3bc52245c63cdffdbf1208e4479d34c1"],["/categories/index.html","3679a7d0ce302404ae2db6adeba983a1"],["/categories/博客测试文件/index.html","70c9783252a84a385f9f57bb774becfe"],["/categories/机器学习/index.html","3326593c3cec0e918fae0a797ed022aa"],["/categories/算法/index.html","9a2abe489939704f0f9a23c806047a62"],["/categories/随笔/index.html","87fe15daece55dff78c16fad2677973c"],["/css/main.css","8bea2a5084e616a37259004cc4d4f1f7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","a6c97ba4d981392fdadcf8a8f1400a11"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","14dec2bd71d16bb9e719cf3a3d7c917e"],["/page/3/index.html","a68ce79a5cfe40e1cfd6557d1229014e"],["/page/4/index.html","01b50776827b274e767617dd8e9bc615"],["/page/5/index.html","24e88e4a18484bc46c496a98552f7de7"],["/page/6/index.html","ea5361ab7ca6c91ca51ca94ba6367bdf"],["/page/7/index.html","22b3f8e9822c5366f640de259fa8deb5"],["/page/8/index.html","c2ff87e54fdde9841163cffdbd84eecf"],["/sw-register.js","76c068a3b78dea3c0a1a53b6e3acaa08"],["/tags/Face/index.html","57f2bf30b09bd2d1d6a11c9fd0989a6e"],["/tags/Java/index.html","f88497c0d390bb290c7f06afe7a578dd"],["/tags/MNIST/index.html","00115ede5ed728eaf48aaa42a1991905"],["/tags/Numpy/index.html","4ba969bf919531402afc3256a44a13a7"],["/tags/Tensorflow/index.html","a40ef90242e6857ac1fc945163c7b177"],["/tags/index.html","d9a58a8aa5abf85452aa60621c913b8f"],["/tags/k-近邻算法/index.html","61391b7eb9a128250975bd3cbdb0c6d9"],["/tags/matplotlib/index.html","19e84dd518f069b607b45d117352ab1a"],["/tags/python/index.html","b5ad89204e3db1df2e7802a3d8cf5366"],["/tags/python/page/2/index.html","05bae5d90357a7f0c6a6c9012c041c06"],["/tags/python函数/index.html","46bef32a3d8f015370cf891dd0fb987e"],["/tags/python库/index.html","10bcfb1095bea73a4de808dd285d333c"],["/tags/python异常处理/index.html","f8b72e170a362238288168ef920e7756"],["/tags/python模块/index.html","66b5a1ebeec6608a5db3540cc12ec84a"],["/tags/python正则表达式/index.html","2a78fc23e9a508678cd1deb3b663878a"],["/tags/python面向对象/index.html","130918a3560c804a51b65fd13194e65c"],["/tags/python面向对象/page/2/index.html","2dd5d1f7436bac15cec16ffa2bfde662"],["/tags/动态规划/index.html","152b1b395119a913cbbf8a0715fe039a"],["/tags/基本教程/index.html","67ec92466c8a4e9985e2d8b7986ee772"],["/tags/基本教程/page/2/index.html","0fd5f420903585fba6d9c774cb048440"],["/tags/基本教程/page/3/index.html","eb6b598be4aeaeb4beebc93c02168e37"],["/tags/多态/index.html","c9e01fc6cfff34a43c2d54a4ae7ad20a"],["/tags/排序算法/index.html","96fdae7dbe41ddc2c190514aa306ce44"],["/tags/机器学习/index.html","5e7514c2a1486dd8a9f011da49d1f6a1"],["/tags/测试/index.html","456f3f6de82672cc2f41988f1c9e68b9"],["/tags/矩阵/index.html","b7ac92f943f6e84a8de84a5547e5b6a1"],["/tags/算法/index.html","90446db00c5d6ca2ff5c260c40011c1d"],["/tags/链表/index.html","9541134012ea95fe79cab26dba81ea1a"],["/top/index.html","58b16659c38551514707e6b63ce6bd5f"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
