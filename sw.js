/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","aac3504d6604c078d28d59951a1ec8b2"],["/2018/04/08/整合建立输出增删改查的链表/index.html","2b4d99a2d6cc712da7c3cb9c31cc0ec9"],["/2018/04/08/选择排序/index.html","58e16d8681ba2dd207e3cb4560e2720e"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","17ed6d483694a3a5175039edf72c455d"],["/2018/04/10/冒泡排序/index.html","781cd620e7f75055c4336bcd840b9227"],["/2018/04/10/折半查找/index.html","9a5376a56dbb9709067687a47133308d"],["/2018/04/10/最大公约数和最小公倍数/index.html","231bca5461afe828d6a6270067a10fcb"],["/2018/06/27/python中的Docstring/index.html","b6db7ec95cba0fda096ad2668ea0f985"],["/2018/07/07/python中字典（key-value）/index.html","fcf21a2dad16eec56604b9deb561e7a3"],["/2018/07/07/python中字符串的一些基本操作/index.html","f14147616f0b3e48eb2313c31352bac0"],["/2018/07/07/python中的元组/index.html","0025bebaf19736f3b5f93b89156fd8d4"],["/2018/07/07/python中的列表/index.html","f7e418e8879392ac813ec9155eccb94a"],["/2018/07/07/python中的序列以及切片的解释/index.html","eadbd34daab0d396af3100109b466d31"],["/2018/07/07/python中的引用和切片/index.html","eaeb83552be9d228f2163b512ac3df5b"],["/2018/07/07/python中的集合/index.html","178e68a38be4c7698be60d57afa27a15"],["/2018/07/22/利用python进行文件的自动备份/index.html","28bff7534ee7d0b3dc34bde9cf61eb39"],["/2018/07/23/finally异常处理/index.html","1028d2ed7fa45066dae667fc313c2132"],["/2018/07/23/python对象的实例化/index.html","444d18d9389092cdd0c892de9b8ef2d3"],["/2018/07/23/python日志模块/index.html","e921e7a6eec613ddf0d9d322da7a8c42"],["/2018/07/23/python的pickle模块/index.html","fceb78e063da49367de2fa35f6173905"],["/2018/07/23/with-open异常处理/index.html","841f4c0e6ee6adaf30ecc15b258db62c"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","5794c1ee27399b02a7682054fcae92c1"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","ab2f4681799ef4f7eca55b3bf2f7a96f"],["/2018/07/23/在打开文件的同时规定编码/index.html","f362d368acbab7312376d767b1e112d8"],["/2018/07/23/文件操作/index.html","d1fa554b966f42bce1e9c9351f5b2e93"],["/2018/07/23/用户自己引发的异常处理/index.html","8b7d81a7ee7788c1bf8882b9b6570807"],["/2018/07/23/简单的异常处理/index.html","537c099fc9c43bb00e0bbf3210c4a7f2"],["/2018/07/23/类变量与对象变量/index.html","16c89037cfa445455ab9bb347e590caf"],["/2018/07/23/继承的运用/index.html","16232192eee7587a211241a3916af04b"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","53dac736942341ffdd067b0199519941"],["/2018/07/23/输入输出——简单的回文判断/index.html","dcde6ec94f4b48af7b25fee17ab94e61"],["/2018/07/24/assert语句的运用/index.html","77837fa31d0e5f215b3a983858159e5d"],["/2018/07/24/python中的lambda函数/index.html","fd140c689cf89f711db5efa1cb5ca146"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","bdcf6d67b6bc5801f6ba75483dbadb50"],["/2018/07/24/列表推导/index.html","4d9238e31ee885442dae7a7834f70da6"],["/2018/07/24/在函数中接受元组与字典/index.html","88d632ec7bd69a0746ad23649f2486c3"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","2c5efab6acc5bb3734b0ef61d4bde310"],["/2018/07/24/打印九九乘法表/index.html","1e6737839caff4c0d795c61abae0556a"],["/2018/07/24/打印直角三角形/index.html","2dcd152957255853278f01ddb0e60452"],["/2018/07/24/装饰器/index.html","16f8f3b0d2d0e3674a246d88eac6bb5b"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","9fb66db41c75a89f0429b1c12f5eff54"],["/2018/07/25/python中字符串的一些方法回顾/index.html","6031905b27b3bce9842e0712b723df42"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","a3c11c0fa1cb4e9c602999af0b1921bf"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","0097015d010f833d4ba29fe346d6fee7"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","c28509ae50e73f10dbbc676d77e9da8b"],["/2018/07/26/python中完整for循环的实际运用/index.html","9d204c38764d87d4643afd8f5a8c36b9"],["/2018/07/28/python中对列表和元组的切片操作/index.html","9939958c9461ab4a50c467878bc1213c"],["/2018/08/03/欢迎来到我的博客/index.html","0c7ecf00d7636fa8aa2f38623549d57e"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","31df3e7f97939feb44d36bd4a50499bb"],["/2018/08/07/Python中的正则表达式/index.html","e91272c1856ac8d01bf0941f8de5734a"],["/2018/08/07/Python中的正则表达式match和search/index.html","7e4a7ef316c3a19457f067785c038572"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","a7a47437231143b8c82cd6fc2dc0cf8a"],["/2018/08/07/正则表达式中的compile函数/index.html","4cc697833008e190298e26dc267ee62f"],["/2018/08/07/正则表达式检索与替换/index.html","a907c89ab51793fe4a1ca5bbf16c3aeb"],["/2018/08/08/python中的__new__方法的重写/index.html","b807f152f105cb79c7619c13c3dc8b51"],["/2018/08/08/python中的多态/index.html","9a206b03772b6a9622695d62f85d9c4e"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","8d94472d2afb6db140f7a8047968a7cd"],["/2018/08/08/turtle绘图库/index.html","7875a1d5c34b8bb9642ab2255c0b4ee6"],["/2018/08/08/单例设计模式/index.html","810faacad8280730f349ef456f873996"],["/2018/08/09/Numpy库的首次使用/index.html","9a284b51205957b4a9e8c851360328a2"],["/2018/08/09/kNN（k-近邻算法）/index.html","3f9326e52ffc15bd1a4678b39bef4dea"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","6dfec9aee217f1bf21d06aad2dfd541b"],["/2018/08/16/kNN识别手写图像/index.html","832aea978881eb9afb6b08dcf7d2eb4d"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","a5f6b4ae773e783fc55719753e033756"],["/2018/08/22/Ndarray对象/index.html","d583bb556ca206644690c39cab41a826"],["/2018/08/22/Numpy中的数组维度/index.html","cd77eed40e57d8dc2b5943e6403aa230"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","b186a1c9732755e1bef8f5f81507c882"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","4b3e584bb9c183e1f6c4f0cde8f103a1"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","85bdc40b84679a19abd1491f161c81eb"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","5f2fc8aef7f55b246f3c773043cf36b7"],["/2018/08/26/一些TensorFlow的基本操作/index.html","dfe94c85872afa5bcffd2d50a8be96fb"],["/2018/08/26/交互式使用/index.html","b0457c4a804545203481bd2e6cd70004"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","c002c375afd0502d54c0f20d8adcf041"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","421c64087f1f8b3c8e3e233087661a6a"],["/archives/2018/04/index.html","a0ac53416a4244f30d058b82dee7e750"],["/archives/2018/06/index.html","a5b946383a106337c770388367e948e2"],["/archives/2018/07/index.html","6d1b0da2ed587b1d5a0c3c9dcbbc277a"],["/archives/2018/08/index.html","efcac7ada5f4a2b9264f39eacd16e116"],["/archives/2018/index.html","25b0b4285c6adeeec5a02e536b145886"],["/archives/index.html","4a4646a688afb0a610aa9cd616771fc5"],["/categories/C语言/index.html","50a8223ae7052feabb98f829ec139b21"],["/categories/Numpy/index.html","e72035fcf4d43d2737e4f75efe66f044"],["/categories/Python/index.html","dba2dff913f3aa11b39f10d7af8d0e0b"],["/categories/Python/page/2/index.html","1f926fb2914c6e8f1df2693b92707d30"],["/categories/Python/page/3/index.html","305e08f17a48fb75b9431f84126d429f"],["/categories/Python/page/4/index.html","9fa0174566ff81d988f074186a6ece2c"],["/categories/Python/page/5/index.html","a5087bced782dc957ba9b155d1cf143e"],["/categories/Python/page/6/index.html","4af48633bd9085666b49596d1b27a520"],["/categories/Tensorflow/index.html","0b62464cd8c9ffd0044612d8ca0f052f"],["/categories/index.html","0a74d419cc58b2f3b520ff179fe68ed2"],["/categories/博客测试文件/index.html","c92d44677fb489b07da9562ddd1080cf"],["/categories/机器学习/index.html","cb47c93b79097665c8b21e1e5d6f3735"],["/categories/算法/index.html","c8ab5076e8e616d8dc8dd5733a69d052"],["/categories/随笔/index.html","e508bbb272b84d7042aa59fc3c5bb4c5"],["/css/main.css","b5b52c20520e4deb8ada3457f54aaec7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fbbd42d8c6af76710ace8842db2f2c24"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ed5f05d870c8ee12b9fe2f0fc107d4f8"],["/page/3/index.html","4ab8b63689b3da44d22516d424c74873"],["/page/4/index.html","39d1b4266f9395bca698da0f1c10819e"],["/page/5/index.html","70ee77c621e732510a30f7310b226808"],["/page/6/index.html","56aff294a13ba9d23bd52b8df2ac6d19"],["/page/7/index.html","caef1ac728865275abc9f20a1a1183fe"],["/page/8/index.html","d8a2e3460372229e890a20923fd66d13"],["/sw-register.js","1f507102cbe1d1e4da55df4a65c9e24b"],["/tags/Face/index.html","ec5274938c46f9194940d7ab3cdfdcd0"],["/tags/Java/index.html","da556db085fc3e77dd9a2d155c5d2af4"],["/tags/MNIST/index.html","638ead2a80035c8d2810e89e58a4fde2"],["/tags/Numpy/index.html","e37edbc8b21e38ff11c2171116482b45"],["/tags/Tensorflow/index.html","3de00110718b7c01c3284095c3eae018"],["/tags/index.html","491d6dda683f2482d93b7fe75c17b5c8"],["/tags/k-近邻算法/index.html","f3d6b89bab9458c1a411ac2c961f814d"],["/tags/matplotlib/index.html","bada9af6a3b5775f68ba56304ffe5954"],["/tags/python/index.html","626b8c70614d1b99aef4261ddc0777a3"],["/tags/python/page/2/index.html","9f6706c32a9b4e8ebfe3548fba1ee0f2"],["/tags/python函数/index.html","9941de8462f98a52de977d98c7e5610d"],["/tags/python库/index.html","80b104d4663ce1d24604ff2ef0960ac5"],["/tags/python异常处理/index.html","da05dc13d3a34c68062e2d90c28d32c2"],["/tags/python模块/index.html","6f036bf628404eb6a01412dcdf9975bf"],["/tags/python正则表达式/index.html","170678326f6d2e3ee88265931ccde244"],["/tags/python面向对象/index.html","6005c4caa4ef54d2b3cec5e4c3026519"],["/tags/python面向对象/page/2/index.html","ec67a8ed8ddec49cf17ca341e54742d3"],["/tags/动态规划/index.html","33d4d48c49657476d28f7800bd5861ee"],["/tags/基本教程/index.html","5d61128ff64140c5bd002688688f87db"],["/tags/基本教程/page/2/index.html","505417d9a8786ed699110fc7eb3578c8"],["/tags/基本教程/page/3/index.html","3ae97e5611d6241bceec8636c04dc0dd"],["/tags/多态/index.html","127bdfbc97aef4af96fcb5d539f2dd7c"],["/tags/排序算法/index.html","7549201f067f01e7c7a959a7f5c3b974"],["/tags/机器学习/index.html","e59671e1c49d976db6ae4f2f265db574"],["/tags/测试/index.html","df041b8c7a68309eb8ac335e767cdbca"],["/tags/矩阵/index.html","7f3011ad80588e66c89fee65a42f452b"],["/tags/算法/index.html","81c5f804cd0b9ae5f748d21d50d1204c"],["/tags/链表/index.html","ccee56fedd3a4c39d1c85f111cd17f14"],["/top/index.html","30516494534a874893bb9b27e961aa7b"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
