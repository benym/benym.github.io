/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","19f677312a52c42b0a967211f9b0f256"],["/2018/04/08/整合建立输出增删改查的链表/index.html","ad2cb817943ccbc38eaeb08440696a64"],["/2018/04/08/选择排序/index.html","92abde2114dcef36b6a31fb0d6c43a86"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","19a4f2c1d19cbe7af02c02457f36e1c3"],["/2018/04/10/冒泡排序/index.html","070b91d59ed8c80a1524f2e014eba0df"],["/2018/04/10/折半查找/index.html","eb1ee1b87221f3be0de9c93d2181ba9c"],["/2018/04/10/最大公约数和最小公倍数/index.html","21c30894dbbe9f2885b633c4ae2ca3af"],["/2018/06/27/python中的Docstring/index.html","c6e4119526b5a3ecb48c29a9bce385fc"],["/2018/07/07/python中字典（key-value）/index.html","d31b796e27f37286eb6f46b8c0fdf4a6"],["/2018/07/07/python中字符串的一些基本操作/index.html","a2a036e6babe91fb41f29edd31ab50ed"],["/2018/07/07/python中的元组/index.html","19519524ecf66c41a957f2a16f3f3d09"],["/2018/07/07/python中的列表/index.html","d6d5c1681acae0b3086c782e27d98388"],["/2018/07/07/python中的序列以及切片的解释/index.html","3592376a83b0868dc4ef1097d6a2d605"],["/2018/07/07/python中的引用和切片/index.html","95cb83bf44484f1688dac27fd5c30251"],["/2018/07/07/python中的集合/index.html","56e70e4eb5030e3b9d26cab48b5c0639"],["/2018/07/22/利用python进行文件的自动备份/index.html","0f5ad3ded1ebd45a89be1553c8ba1b65"],["/2018/07/23/finally异常处理/index.html","d2aac4e575cf816bd7332a207b5d0da8"],["/2018/07/23/python对象的实例化/index.html","44637abc5ad92aca06c7a584c24d01b7"],["/2018/07/23/python日志模块/index.html","f7768f12d9cf6a6a7e3727ae6b78b6f1"],["/2018/07/23/python的pickle模块/index.html","970e96b262e856838187338b5077a5a6"],["/2018/07/23/with-open异常处理/index.html","d062f10045613b42e28aad0e20981fe9"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","b251cd10427ba248711789d8dbb62f65"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","05a16d2a5579d3f6e8a74a23f33d45fc"],["/2018/07/23/在打开文件的同时规定编码/index.html","52dd7aed228cd35931617e215963818c"],["/2018/07/23/文件操作/index.html","a08216a8a0af611b16dad67958fc3261"],["/2018/07/23/用户自己引发的异常处理/index.html","adadcdecb7ab64c58397bd2b7e0d992f"],["/2018/07/23/简单的异常处理/index.html","1c529f3186b56788b8350061e9f9c63a"],["/2018/07/23/类变量与对象变量/index.html","3bc6c5b9a2a8a4b0089eb2fdebc8c4b8"],["/2018/07/23/继承的运用/index.html","9a4c89cf8f67ec36e7dbb64a64cf9a9d"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","9b10d8a09d01ae09ad76334b2f5213f6"],["/2018/07/23/输入输出——简单的回文判断/index.html","59af9580bdf3a4f8efb714de75da586a"],["/2018/07/24/assert语句的运用/index.html","6b33828e32b5259a122e01d0cf2e694e"],["/2018/07/24/python中的lambda函数/index.html","533bc78601ff772904eebdab74f07754"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","b8cca991127466c9fc264a21bb2c7549"],["/2018/07/24/列表推导/index.html","c4f1b07619300f61ea64edab67a3e18a"],["/2018/07/24/在函数中接受元组与字典/index.html","5181244092da6afd36ae94ff7a553c82"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","5fe2730b3ec59673d39624b4952d95ac"],["/2018/07/24/打印九九乘法表/index.html","b26635ea154387bc47661fdf8a2764c5"],["/2018/07/24/打印直角三角形/index.html","888eb6afed9c8b8353d43c71560c0a9b"],["/2018/07/24/装饰器/index.html","0d77b4a45d5bf1cfa06afa9ba003f4fb"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","745d5ee1879a8461af44bcffe381d71d"],["/2018/07/25/python中字符串的一些方法回顾/index.html","1f3fa8f8a0721ed6cb7695de909286b7"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","c502d7023b3fc500066f95132f2b56e9"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","1b4ae2ffdf94845ad49b30c332b7cfa5"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","599351314cc8f09979c7d3491e2fc2ba"],["/2018/07/26/python中完整for循环的实际运用/index.html","5e7ba642091e6910076be1dbca0481f5"],["/2018/07/28/python中对列表和元组的切片操作/index.html","916b7183494ae31c80a0feedf8c150a8"],["/2018/08/03/欢迎来到我的博客/index.html","3015827a2915fc65b5d6f3c177a21842"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","d294b756bb2f7f3568ddede56424c20a"],["/2018/08/07/Python中的正则表达式/index.html","64f287cb862c49dc107ac4bbe3300119"],["/2018/08/07/Python中的正则表达式match和search/index.html","40bf5464d315f77c14cf66529d4effe4"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","4d4541a49934f8b2768895b920bf72bd"],["/2018/08/07/正则表达式中的compile函数/index.html","681e81db83a9ea27a517d732e2d8962f"],["/2018/08/07/正则表达式检索与替换/index.html","411361102a0cdd3c09ec4d460e235e1a"],["/2018/08/08/python中的__new__方法的重写/index.html","f55237c1b049d99ca5673d9896bab1b3"],["/2018/08/08/python中的多态/index.html","995dd652b22af568c7d2b5022132819f"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","f83e334a0570bad78498e77f0b57c0e1"],["/2018/08/08/turtle绘图库/index.html","7d3a958f3243a91e6084cee134858e9c"],["/2018/08/08/单例设计模式/index.html","416151e1cbed07795bc524e5c32948c7"],["/2018/08/09/Numpy库的首次使用/index.html","81a00c28144181bac9cec4be86c1d301"],["/2018/08/09/kNN（k-近邻算法）/index.html","82452a206e4435372920730ffbd09949"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","b22826b8eba15f1b3f098593c4d3e32a"],["/2018/08/16/kNN识别手写图像/index.html","c8666425c6a871c3a7682bf2fe6ee7d4"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","608a3861f72a224de828ad22232c2d5e"],["/archives/2018/04/index.html","a99abffd1238ffe6b1753e0cffb0886c"],["/archives/2018/06/index.html","716b54da41fc53d6a64513ef6dc9d2bf"],["/archives/2018/07/index.html","28804cfc1d6aae4a8c10e38f98fe62c3"],["/archives/2018/08/index.html","9e0a4a465b8d4a00c8b03f374ae419bf"],["/archives/2018/index.html","8d90250c3de816b7f2356bc1e8eabaf2"],["/archives/index.html","81dc4cf5409373189a2eefa05b00b462"],["/categories/C语言/index.html","f2899496d667d0685f5d59c711e7d6b0"],["/categories/Python/index.html","37adfc906e8f3bbff6f0f2727fbde0fb"],["/categories/Python/page/2/index.html","3807e8227a28aac32173b79a810a691e"],["/categories/Python/page/3/index.html","58e11de5c30d9beaaa4e1333dec67a96"],["/categories/Python/page/4/index.html","8db330b3c9615bef94aafda1006605da"],["/categories/Python/page/5/index.html","a48ba1f2f8651b9db9f95604302d5400"],["/categories/Python/page/6/index.html","83606d50c57a11baec32bf28738d541b"],["/categories/index.html","a39355261a05f6e8c881a0d9471ce208"],["/categories/博客测试文件/index.html","dd3df20eb60df582c8b68166005d9fb9"],["/categories/机器学习/index.html","84ebd5d4be7f4e090e1dc52df7d9ac33"],["/categories/随笔/index.html","719e1448ca9455c54de5fb0817a51fc3"],["/css/main.css","61ff03dfc7e1d60267cb14a662e01ed1"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9971ae7485a1211c85c4aed4f5fb1d08"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","05d484f3bfef14de728ea3a3d590c776"],["/page/3/index.html","3812aa3baa1a76b8b3890ee70a040463"],["/page/4/index.html","3023b703b859a93568c1c245bba81859"],["/page/5/index.html","10244c7c2b84e9df119010cc68b0b152"],["/page/6/index.html","1e000c5e9e2cea4e4e0f02aee95a2d59"],["/page/7/index.html","7c7adbfbf87ad2dfb0866360f002d12d"],["/sw-register.js","6f988f5cf901fd4434a9aa68ff4a698d"],["/tags/Face/index.html","e09cb2e146c7871016baaf6db907f260"],["/tags/Numpy/index.html","a43073d7beaf42aa7c108926f32b65d0"],["/tags/index.html","ecc2f32a5862c80a2b4ccb7304c745d8"],["/tags/k-近邻算法/index.html","81ad4029efce944c397bbf2c92487c13"],["/tags/matplotlib/index.html","8caa348fb458956b3e4cb428b2cdbe21"],["/tags/python/index.html","1bcbea66b7fab496a1c0a44c91f9cfd8"],["/tags/python函数/index.html","d8dae7b088417431bccc3e124934dc98"],["/tags/python库/index.html","fbaa0c92f8bb229f36c5b3cc2a3de275"],["/tags/python异常处理/index.html","b78bc726a92f637b0f6ca22b4178794a"],["/tags/python模块/index.html","bb277110ce39f10133670881c0d74859"],["/tags/python正则表达式/index.html","4de882784ca5a43f1ce8552174a672ca"],["/tags/python面向对象/index.html","8504b323e327f17fab7e5fd603e73d43"],["/tags/python面向对象/page/2/index.html","8ab75bec4aeb95a18f1cfcde31fafbdd"],["/tags/基本教程/index.html","84a40c61fa2cd79a02556a01459a858c"],["/tags/基本教程/page/2/index.html","5daaae74354d17eec1ea2ec7e8f60f8d"],["/tags/基本教程/page/3/index.html","9856131f2b15e7dc1163b9a18612925f"],["/tags/多态/index.html","bd8e6da97ebc39313b6241f05c2502cb"],["/tags/排序算法/index.html","0eec9ea0d17644582544798aa806e62c"],["/tags/机器学习/index.html","fdbf61976d7936072eec1a29fb681134"],["/tags/测试/index.html","4c9f14f76577703cdbc625f6a2df3139"],["/tags/矩阵/index.html","be13db56d77133975c13f23f6b2aff0e"],["/tags/经典算法/index.html","3b3ec9ac681252b581ea68c333b62100"],["/tags/链表算法/index.html","398161ef96d3a5859ac9a750bad9745c"],["/top/index.html","344274e61195e8020fba9f6e00178aa8"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
