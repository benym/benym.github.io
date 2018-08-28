/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","7677b6283d7fde5cd83888c506d08908"],["/2018/04/08/整合建立输出增删改查的链表/index.html","2ce681a1f1cdfb878a7b27532e296a41"],["/2018/04/08/选择排序/index.html","f6cb3620880dcb1dbea9a16e1e8c1a94"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","b52fa2971d8ebab97f416203e0ca42de"],["/2018/04/10/冒泡排序/index.html","81817a017dd7b8fdba7e987308fe5e50"],["/2018/04/10/折半查找/index.html","801161a16a650802995191390be10838"],["/2018/04/10/最大公约数和最小公倍数/index.html","e8ef8f2208764f1b8cc944a1cad8d69a"],["/2018/06/27/python中的Docstring/index.html","8f2ce6027c8a5532bc462f6af5702d11"],["/2018/07/07/python中字典（key-value）/index.html","d6a7a46b4942605b8352764dd38fe995"],["/2018/07/07/python中字符串的一些基本操作/index.html","292ce6eb13ef53c64702f4eac748140c"],["/2018/07/07/python中的元组/index.html","7831f655db2fa208aaf2ef67c7c48613"],["/2018/07/07/python中的列表/index.html","b8c1459d66696cad56eb67e0c3f11315"],["/2018/07/07/python中的序列以及切片的解释/index.html","24d7438f43402ca98fb29c6bd6d22a4a"],["/2018/07/07/python中的引用和切片/index.html","91b12854b3b1ecc265b0c050bba5c88e"],["/2018/07/07/python中的集合/index.html","7306f76c606a5df02a7bc12a43875e42"],["/2018/07/22/利用python进行文件的自动备份/index.html","b4b7791e40d1b954ed320bdb43c48213"],["/2018/07/23/finally异常处理/index.html","1d72c0c70fb4491547d9139c3b7ff625"],["/2018/07/23/python对象的实例化/index.html","0a7fc1f2898efd437687419c41a769ef"],["/2018/07/23/python日志模块/index.html","f090afc92541ccc4c0a1450053f5cd35"],["/2018/07/23/python的pickle模块/index.html","f16603c3f27e94f7b275c889797f2ac3"],["/2018/07/23/with-open异常处理/index.html","81105781291fb4be7b06e33858397200"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","404b7ba6a739e46def5bb4443a881c2e"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","2b10213693063858964ff9ef526ec832"],["/2018/07/23/在打开文件的同时规定编码/index.html","320b16b961f5564591d83e7ff98e36d8"],["/2018/07/23/文件操作/index.html","8d80a523f9c3f04f5a72bc87f9fc5a00"],["/2018/07/23/用户自己引发的异常处理/index.html","925bba4e79fccca47538a14edfb05694"],["/2018/07/23/简单的异常处理/index.html","9b4a29d96ff8b86cc2898eb390226c81"],["/2018/07/23/类变量与对象变量/index.html","f1cb3d262db572ebc238eb5606169d2c"],["/2018/07/23/继承的运用/index.html","0cb688e6bc3e18dc15b143131b11e8b2"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","d455dd44a308f388264aec904475703f"],["/2018/07/23/输入输出——简单的回文判断/index.html","49857df75fbde844a21f890eea22a24d"],["/2018/07/24/assert语句的运用/index.html","54ac2dd4dcedc937bf99419d6419427b"],["/2018/07/24/python中的lambda函数/index.html","fb3ca4159edf0b5a470d8f94b7fbad07"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","d8d0abb5c9c785ea7d8432467786fe35"],["/2018/07/24/列表推导/index.html","d066e260056957153841c759d3c848ed"],["/2018/07/24/在函数中接受元组与字典/index.html","d21a996986f690e511fccf7924311e35"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","9cc48580aafea7177e22b57d1e1a1a73"],["/2018/07/24/打印九九乘法表/index.html","a0b05d161aed7924798a580e26ef90ab"],["/2018/07/24/打印直角三角形/index.html","6afab3a18291144ca0bab806e4202d20"],["/2018/07/24/装饰器/index.html","d4d348d61ca945c8fbe9a366e088f7b1"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","0ec8cdbca9a2b85c7941f82c7f92a17a"],["/2018/07/25/python中字符串的一些方法回顾/index.html","33451e6b2bcd1340dbe21e117fd2d858"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","be581886810b92185e407a1787f15394"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","01e527b28a048f5bd7095a748844889e"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","5da8aff82588f0942bf9f7dba48904a1"],["/2018/07/26/python中完整for循环的实际运用/index.html","829ad9617067b0652c4c0e8d985ae235"],["/2018/07/28/python中对列表和元组的切片操作/index.html","f0ecf8745eab606a12ad1b412d51848f"],["/2018/08/03/欢迎来到我的博客/index.html","e805c6e18a5efdfeaf2251516d6bc14d"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","fd1854525af5f20d8fa3d4301de39cf3"],["/2018/08/07/Python中的正则表达式/index.html","367f0ca84b725f50c69fc94fb8e97d77"],["/2018/08/07/Python中的正则表达式match和search/index.html","4bf67b308a8fc87e31eb6627fd34d8dc"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","b8d64d6f7601cf8d2f4841c8c1983dd6"],["/2018/08/07/正则表达式中的compile函数/index.html","0b6e5367b370037cd37c91a39715238b"],["/2018/08/07/正则表达式检索与替换/index.html","49d974c388c54f984b9f87487bd1f8bf"],["/2018/08/08/python中的__new__方法的重写/index.html","68536070c2a7f4a1457541f30bf9f5c8"],["/2018/08/08/python中的多态/index.html","1cb9640cda8ce35ae498c599acb8727d"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","107e14005f9bbe02ac0fae715f28411d"],["/2018/08/08/turtle绘图库/index.html","cd8485fa0fb741997e953029340d3f50"],["/2018/08/08/单例设计模式/index.html","216aac59f311f22b463772392b28400d"],["/2018/08/09/Numpy库的首次使用/index.html","9efdb75cf0d74589b30c741cc79e8cb5"],["/2018/08/09/kNN（k-近邻算法）/index.html","209b9f5d023b6729821d63516a4b9e88"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","cb0030311d9696c6a027b35393283531"],["/2018/08/16/kNN识别手写图像/index.html","4ff1d7b1a1fe90f1fc99413fbf16a043"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","15bb64b1a5c4c427ec78e38e08f2fdd3"],["/2018/08/22/Ndarray对象/index.html","90521c20c15698e409f2298b5ca8c3e2"],["/2018/08/22/Numpy中的数组维度/index.html","72b264d68576b55d0a9529f91f3c6fbd"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","d54d6aa3e7df81ef4ea1454508dc8c7f"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","ffc7cc5c0cf3195dae982ed87b912646"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","9ce2f909678755f97549a10a744afffd"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","8a8bbe68b35c5650641677256ff939c3"],["/2018/08/26/一些TensorFlow的基本操作/index.html","ada8ea9d2f867200cf8440b082da8f23"],["/2018/08/26/交互式使用/index.html","f7f72b89bdc3d0d221b2ce346382df06"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","23ad1e19299174da73b4e8ba07b88644"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","8fa6e9c31b4fd3c7a3cb2f813f54fa87"],["/archives/2018/04/index.html","83c05395e354aa7263d3e2989a6528bc"],["/archives/2018/06/index.html","f5bc6535963514d521e6c2138ed4f808"],["/archives/2018/07/index.html","659c21829cd2d7a383de687b37925a2b"],["/archives/2018/08/index.html","60abd7e8b111980470e25c1d60b770a9"],["/archives/2018/index.html","9d595e1d22531749f8f204d3947887f9"],["/archives/index.html","b5ab3c1410831b3a1d16c996ec174ed7"],["/categories/C语言/index.html","a485a640e96d6c021cf1650e3eeec6c2"],["/categories/Numpy/index.html","fd9ce863d987fef8ec737e86702fe7dd"],["/categories/Python/index.html","95e95968535721049684dc94447aa8f3"],["/categories/Python/page/2/index.html","9275bbb814d5a113a5d375637e0efdfb"],["/categories/Python/page/3/index.html","ba7a5eaf85652621278180b18ee31778"],["/categories/Python/page/4/index.html","b8f0656e8b5a50bf22ff5ac2ce73393f"],["/categories/Python/page/5/index.html","81d05ad2ed2c2f06f0be5c4ada6e2efb"],["/categories/Python/page/6/index.html","03b62541b01a7eef4a81333854e6dad9"],["/categories/Tensorflow/index.html","ad5ed80f3069d4b093ed9543c8d1f88e"],["/categories/index.html","9a974a22f75540dcd8accb5b16d66d8b"],["/categories/博客测试文件/index.html","35c1e75c82024a9272abb3cf97dca63e"],["/categories/机器学习/index.html","26ece55b6a83d025bf7ccd0e7e25421d"],["/categories/算法/index.html","ba55f3745c6f396acc6b5395997e3832"],["/categories/随笔/index.html","542579615231e24ed7fb4cd7a7dc8aa3"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","8b471d62c9a3ce21e785e8ead88cbf00"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c254830fd4c531eb00416eeff710bff7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","92892550a047dae2b1b9b5f61d1561d1"],["/page/11/index.html","1122b63f5282dfafca3fd7b9cb4552ee"],["/page/12/index.html","da16f505ec740ea0385f3a42f2e4a4d7"],["/page/13/index.html","838fbd78ec61f566c8b5204f41299447"],["/page/2/index.html","216806e99cf303b952545c896be1439a"],["/page/3/index.html","ecabbefd8861fbc6b2f1a6f408cf32da"],["/page/4/index.html","e4847dbaf8f0ef665068bcf1f042f200"],["/page/5/index.html","4dcebc56cd8fa121ebb603daf9d0244a"],["/page/6/index.html","4df0270951b7153ad6146d2120c4b6db"],["/page/7/index.html","f4f5e736b48c1ce8ca2f809d8b49b523"],["/page/8/index.html","00d9ec1f30a9577211e21132e82f6e93"],["/page/9/index.html","0ca5a9277ad6a90a608fed84c9b8a2c1"],["/sw-register.js","7b1b6f806107745c41f2e64de9335720"],["/tags/Face/index.html","c4c9ccf004cfe3da86b8cd8cdd1fb888"],["/tags/Java/index.html","290b3fa489db2b8b0156417e3563e472"],["/tags/MNIST/index.html","3fd5e3b27914c5e8a17130534c567cc5"],["/tags/Numpy/index.html","f5532c7aade8d2489f5e38b50d166288"],["/tags/Tensorflow/index.html","f4568dbeefea7e08366dface0381a509"],["/tags/index.html","e09c596035c1ce33ad39a4fb9673c843"],["/tags/k-近邻算法/index.html","81dd317534489c175d6c5c7b76e07c4f"],["/tags/matplotlib/index.html","0451980abe1750ed90d372ea4789cb34"],["/tags/python/index.html","3ceb5df4f59e2d826123416fe52cf34a"],["/tags/python/page/2/index.html","94219dbd8d6e1f8754b353380dc18b66"],["/tags/python函数/index.html","29c0811c9ebf8a84094d3f0ba0aec35f"],["/tags/python库/index.html","037b72184dc7f99ac3812ab20fc48da6"],["/tags/python异常处理/index.html","10a275241cc6ae0e9c6eb0de5d8d32a2"],["/tags/python模块/index.html","fca840aa54f0f0dcfe5536eeeb4472b0"],["/tags/python正则表达式/index.html","fcb4a4149dceda5516f4d1f579d11889"],["/tags/python面向对象/index.html","0a7cfe6089480ab8a8c0482d2fbfce77"],["/tags/python面向对象/page/2/index.html","3d36ff153ff761adfb037e638ecf0494"],["/tags/动态规划/index.html","03df377ec4562594b649b3725d31c86e"],["/tags/基本教程/index.html","f84a4c98fd0f76e1d532130fed965e5d"],["/tags/基本教程/page/2/index.html","f9cc2ad5c2f1fe0b7197edf943e98acc"],["/tags/基本教程/page/3/index.html","aafa1bc22641be82014fd4f1194cb399"],["/tags/多态/index.html","a5e5fff5874782696e9bdf2b990d2e30"],["/tags/排序算法/index.html","3d316323f5b8e953f309378977cc60db"],["/tags/机器学习/index.html","e1f58c9dd19465eeced99b4030dd1803"],["/tags/测试/index.html","b11297d2c205ea452ce9ee490a980a52"],["/tags/矩阵/index.html","d45d3d90ebc0a9050d7aee5e2153a89e"],["/tags/算法/index.html","fed0ca8cf98880dd85a99a6336b130d9"],["/tags/链表/index.html","aa74b244b53749d38dcec2e6e5bf754d"],["/top/index.html","006b9b5277f54292ae3c41bce4d2f031"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
