/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","63625e643d8ae12098e15a0c5f3df360"],["/2018/04/08/整合建立输出增删改查的链表/index.html","7440b69e1afa3178eea57a6c605e313f"],["/2018/04/08/选择排序/index.html","48ce4c35921b35a8099eb75f7b9df4d9"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","2ff5684414ea45d5487eccad02194bc6"],["/2018/04/10/冒泡排序/index.html","936a15ce41e7fa3df0e6fb84d17a388d"],["/2018/04/10/折半查找/index.html","d5f496686552cd26dd3b092faa7501f9"],["/2018/04/10/最大公约数和最小公倍数/index.html","5c0501e134f633d8e2d46e1109823d94"],["/2018/06/27/python中的Docstring/index.html","b8e068ef711f221a95fd7c1cbea7792b"],["/2018/07/07/python中字典（key-value）/index.html","1e1c8464118641f47167454bd6be620e"],["/2018/07/07/python中字符串的一些基本操作/index.html","16df5069f55e97c8df9d3fa50aef9287"],["/2018/07/07/python中的元组/index.html","8940774be8991095dc5503a39ad68d9d"],["/2018/07/07/python中的列表/index.html","8e4ce5cd67d53012e7c429e28aba9783"],["/2018/07/07/python中的序列以及切片的解释/index.html","fadc4b4baf80eb052c30ccfcc104da12"],["/2018/07/07/python中的引用和切片/index.html","1c48331bd925d4af248f2545ba30c0a4"],["/2018/07/07/python中的集合/index.html","0a6c6ddbca205f5240a5acff8c277ddd"],["/2018/07/22/利用python进行文件的自动备份/index.html","5ae4a775546f1064f033df2e966a73bb"],["/2018/07/23/finally异常处理/index.html","011d517a8d1475102e8394b9b5b43494"],["/2018/07/23/python对象的实例化/index.html","c55351e93fa3b9cec2ad204ffae08e0a"],["/2018/07/23/python日志模块/index.html","c86d74c3fe7417b37a5dae99a239fc7f"],["/2018/07/23/python的pickle模块/index.html","b23d47ed20f8e7679df4f4b0c507f399"],["/2018/07/23/with-open异常处理/index.html","66d612763231579a67e64b689c974531"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","e7ceb0c7ea28ddfa104d331432b5dd07"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","bcbe97f786da1118771dde46be5c1f9e"],["/2018/07/23/在打开文件的同时规定编码/index.html","3670d3c2f2bb3861f5c4ada1bd135f97"],["/2018/07/23/文件操作/index.html","7dad9a2164bf4ecb33a55ce51b9ad273"],["/2018/07/23/用户自己引发的异常处理/index.html","289609a753a4681ddc760c35ec54005d"],["/2018/07/23/简单的异常处理/index.html","8ffb240101dbd22c71d5780b3f97b684"],["/2018/07/23/类变量与对象变量/index.html","3de35afa2779c4648e60bdf763bd4ccd"],["/2018/07/23/继承的运用/index.html","e0069937a5027c21d5015b465246ac92"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","a7ed1eb10a67d511ba907a4d95a9eb26"],["/2018/07/23/输入输出——简单的回文判断/index.html","e5a2dd11c824158895985229bf532018"],["/2018/07/24/assert语句的运用/index.html","16d269752c34d1b26b1f2528103495d3"],["/2018/07/24/python中的lambda函数/index.html","2aed33dbce4cf0d1a77a003e6e5cd519"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","fa00175caac2bf31736a45856fe88ed5"],["/2018/07/24/列表推导/index.html","afe52b1d67f460068333e9861c424c66"],["/2018/07/24/在函数中接受元组与字典/index.html","786b310c925c94286269ac1d6fa5ca74"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","0b6de13185e4092d07fb2fe088196576"],["/2018/07/24/打印九九乘法表/index.html","acc741bb8227b9547bd704c62b696440"],["/2018/07/24/打印直角三角形/index.html","76c2c444996d99ac3591bed73ca02bd6"],["/2018/07/24/装饰器/index.html","3f634a9752cf6663819e6dd9fe1eb857"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","e2892ee3f1c5916cd7bd321979fbb5b2"],["/2018/07/25/python中字符串的一些方法回顾/index.html","727e692ec88e6a53c1723135a811b1d2"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","149e5d3113e432e4609c3380e60f9208"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","59653136caaa0bead7780049012689a1"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","e07988268140181b35861ed03207542f"],["/2018/07/26/python中完整for循环的实际运用/index.html","97f0777c82eca62d6d752f6c7253885d"],["/2018/07/28/python中对列表和元组的切片操作/index.html","8e12893b127422410c3ab3e487ed03a9"],["/2018/08/03/欢迎来到我的博客/index.html","222259d5b8e7e1f79119d3f6a8cfdad2"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","3ceabb844cf5dd210bbab812fda0121a"],["/2018/08/07/Python中的正则表达式/index.html","46973e54dbf0967c88ab54f53f6b2a5d"],["/2018/08/07/Python中的正则表达式match和search/index.html","f150addd05bb81bc123f2ce145026ec4"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","646770d5bba11bd32d9c5a3987028eec"],["/2018/08/07/正则表达式中的compile函数/index.html","de66f544a8c1f4094f9fb13be8ee7228"],["/2018/08/07/正则表达式检索与替换/index.html","0a5d4507c4f8795dd627dab0ce1707db"],["/2018/08/08/python中的__new__方法的重写/index.html","49294ddf3b41fc6d19e6665a000dedd4"],["/2018/08/08/python中的多态/index.html","7d2c6cfd6ca0a1c79ba70456779578da"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","6ec8de9420fc88a28c9ac8079786103d"],["/2018/08/08/turtle绘图库/index.html","91c8ae89755dc7494c4f3846ea4cf6fd"],["/2018/08/08/单例设计模式/index.html","728c5e8eeebe9c69aa1dd7cade7e0b75"],["/2018/08/09/Numpy库的首次使用/index.html","15d854071d2fa7b2ed564def29f34a23"],["/2018/08/09/kNN（k-近邻算法）/index.html","c318a1809d78936682d3dc26aced4a44"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","72edd2d693c6f33cb2a67f673c1aabea"],["/2018/08/16/kNN识别手写图像/index.html","e13adec5a854cd5677207e5c0beb6801"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","cb923160ea25faa00441b6b17819b5a1"],["/2018/08/22/Ndarray对象/index.html","b371297253c1abaccdf99a744f672b39"],["/2018/08/22/Numpy中的数组维度/index.html","f8d0845ab3326b189cee8026988364a1"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","c3399aafb8707a0fdd26f27841d56b8d"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","52b2fc4110c8692e0d50d676246b978b"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","dcf4ded2616fe75afa381961e44b1805"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","1a74690c3058c08e8aed37625380f071"],["/2018/08/26/一些TensorFlow的基本操作/index.html","4834213da2eabe63acc4c27aaf94db6e"],["/2018/08/26/交互式使用/index.html","423f4f84744b51d69c46082f0b9b5af5"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","a9aacaecaaa3571fc22d2aaf7e300da3"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","379e942f8b9b1ca8c6130dcb2b7b3d04"],["/archives/2018/04/index.html","d877bc5f898a9f38bd7aa60157477c60"],["/archives/2018/06/index.html","aa8a0746e20ded2229c03e663ccf4ceb"],["/archives/2018/07/index.html","0433e25f50d022b5bdafefa40a74b308"],["/archives/2018/08/index.html","b1b3c827b724e4ed09fc64d8a2f71aa2"],["/archives/2018/index.html","ff974a43af4192f22a729264d2727cce"],["/archives/index.html","0b95da10a917925baa7ffb0dfcd3fb8e"],["/bundle.js","b72599c81276ebe8e810936c96d3b802"],["/categories/C语言/index.html","839fdf1266a25f40802793d087e81d00"],["/categories/Numpy/index.html","4f9a975897f23bbbdc4739df864c69f6"],["/categories/Python/index.html","55430676ebbcfc86d1fc1c9ef93c5a8b"],["/categories/Python/page/2/index.html","1dc085f067a41d7f6dd12c954e139ae1"],["/categories/Python/page/3/index.html","c067ffb7542462330d96db7912dca592"],["/categories/Python/page/4/index.html","4dda67b6f5907fecf673efe3a72cf1f8"],["/categories/Python/page/5/index.html","8542d1ae5379b3eaf3c8cb9b17b5837a"],["/categories/Python/page/6/index.html","b24541d8d79fac722ccc2980bc1de7dc"],["/categories/Tensorflow/index.html","23aea191e5f5530405cc181ed186dae6"],["/categories/index.html","fef80bb9c71968a1c158146d9ba7ff5e"],["/categories/博客测试文件/index.html","06b3f7d40e4c4e6b6152d05a08abcffc"],["/categories/机器学习/index.html","1d9040d56e1838d1b9351678dd5a1db7"],["/categories/算法/index.html","05d0fb4e514f4c567faf09dc8cc2a913"],["/categories/随笔/index.html","10712a1b083bcba481a5105dec3f49ff"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","4d99edf9d5574988b49afaa664409f77"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","00e9ca6b04ccd47688ecf5fc40c88f29"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","4e27725ccf8e8bd0c05dc4540827a5ef"],["/page/11/index.html","de39c2daf38133d600a289d019a17645"],["/page/12/index.html","e4be8bdbcf08b912091707a14491e25c"],["/page/13/index.html","c79ec2595dcdb0ff76ff5d186a0b4546"],["/page/2/index.html","f33ea057e453ff8de48c6b887e01c0a3"],["/page/3/index.html","843b86a7f951bd190bbd77d4577a20f9"],["/page/4/index.html","55424f8c878b4c89727afb4431e67a8c"],["/page/5/index.html","57ec54579b492cc75b8ca9b832cd9ed6"],["/page/6/index.html","1f6c993ba4cf2fdd005c7853d709a363"],["/page/7/index.html","f88cde70d401697742b44947cc5f6bfb"],["/page/8/index.html","ee74ec4f2d5e867acf1cb71886582e07"],["/page/9/index.html","71fef785aaca184ea792ef3f0b95e119"],["/style.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/sw-register.js","9cce10620da3302ff11d72a1bb9132a9"],["/tags/Face/index.html","03b14f3717b4855eaf33f38ed64eb04d"],["/tags/Java/index.html","0dd1b61f83d6f6f7b3874244a67dc608"],["/tags/MNIST/index.html","94dbb0e49ec39cf9546df3c75ed88af6"],["/tags/Numpy/index.html","419386406f9f975d1531a34b42da0242"],["/tags/Tensorflow/index.html","5017a0e460dbbb1d268ea64f60834770"],["/tags/index.html","0340fd3a62177e837c854f482857b090"],["/tags/k-近邻算法/index.html","2fe60a5c9a84e4615bc027a931ee2400"],["/tags/matplotlib/index.html","15e659f6488e9a0f01d9f8a289428504"],["/tags/python/index.html","b22f817af53433046f3bc9922886f4e2"],["/tags/python/page/2/index.html","9dd3ade3f4ddcaac21c08ca0ba5a6fe3"],["/tags/python函数/index.html","209e0bcabb0fbcccd880a8bf8e1e9370"],["/tags/python库/index.html","a797c4b878eb21b412d0daf1302f59d2"],["/tags/python异常处理/index.html","ba60cba586c36699081fb9c5117c177c"],["/tags/python模块/index.html","77de86e7ee5f852c9caf040fa428ad41"],["/tags/python正则表达式/index.html","995355ca01c2bcb83750a7ff263a9bd0"],["/tags/python面向对象/index.html","6c69302b25fffa732e0e9c10461a4b79"],["/tags/python面向对象/page/2/index.html","785e2d5bd3e475eee2a9b05c2b730955"],["/tags/动态规划/index.html","7bb0822a57f6c02cfa5fe2738a584ca9"],["/tags/基本教程/index.html","24592682ef6ed587d65812f356269e02"],["/tags/基本教程/page/2/index.html","f235895c460f61f48592eb14ed7e5bee"],["/tags/基本教程/page/3/index.html","2e4f9c1567457b45348d9153481384d8"],["/tags/多态/index.html","7a82c6598086c53a5667fa5203e337c4"],["/tags/排序算法/index.html","12a4ce64f72a493660063a8e8df3b6d8"],["/tags/机器学习/index.html","7dca57d2cb4c88b417235d060f189a0f"],["/tags/测试/index.html","7cb095581290ed908cd1c8b5ef98b7cc"],["/tags/矩阵/index.html","c436026680e695153463db0ce05f3906"],["/tags/算法/index.html","d89586b4ca0be5db27927f00e968de5b"],["/tags/链表/index.html","b4c9fc29deeb5810b0d149135b0f02cc"],["/top/index.html","ec310cdb94115f06b2aaa01d40976780"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
