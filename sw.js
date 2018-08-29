/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","e941877057f6dab97a9fb582b85ab0ef"],["/2018/04/08/整合建立输出增删改查的链表/index.html","82010300b386eb227f6443a82a7d6954"],["/2018/04/08/选择排序/index.html","1ba264f9b2232f5acb3cef907c8c7ddb"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","e4f487ea8b54af98ad2c1d7549a4d25e"],["/2018/04/10/冒泡排序/index.html","11c4c0dcd01afb63b143a416fa7f68fc"],["/2018/04/10/折半查找/index.html","5c130ab12ac1cb82214b3adfac5a3880"],["/2018/04/10/最大公约数和最小公倍数/index.html","ad5478d4b18c38b4640ec2358dc504de"],["/2018/06/27/python中的Docstring/index.html","194cc3ed3266f51c6490d41b7f027138"],["/2018/07/07/python中字典（key-value）/index.html","d2fd8a278122414093f5f3ab13854b23"],["/2018/07/07/python中字符串的一些基本操作/index.html","005655507f78220393684d9d7bb4f677"],["/2018/07/07/python中的元组/index.html","bf030d2ac02b2ca6a6d37f98bd844658"],["/2018/07/07/python中的列表/index.html","99703c9f0ca077c6c407df892ad480e6"],["/2018/07/07/python中的序列以及切片的解释/index.html","3a8c37599e019bd4149e1ac376abb62b"],["/2018/07/07/python中的引用和切片/index.html","5b27c97f4547c7c6966f06ac35e20184"],["/2018/07/07/python中的集合/index.html","c815704cddd2c98a28aa90c9ee2752f0"],["/2018/07/22/利用python进行文件的自动备份/index.html","2145aa43d81f609de3adcf106d6a7a72"],["/2018/07/23/finally异常处理/index.html","f2098aeb492808e9029bea70cfc421e8"],["/2018/07/23/python对象的实例化/index.html","441160bc4fd7d4a9c1a3312c1983be4f"],["/2018/07/23/python日志模块/index.html","e9ea754bf85fc639d68b0b9070e080b3"],["/2018/07/23/python的pickle模块/index.html","9a2e1ab24ffef2c446c56beed25b16dc"],["/2018/07/23/with-open异常处理/index.html","a14916180d918dc813dd09edc69867d8"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","1a9ed5b1cfab6f8a7fd90c498fe0ca5e"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","e8ee15faa12ad8fb8778d490ff0b4a4b"],["/2018/07/23/在打开文件的同时规定编码/index.html","d389b85e23fec1577601625b8cf7a089"],["/2018/07/23/文件操作/index.html","4226bf89dea915a7d2a75f07d26c5c90"],["/2018/07/23/用户自己引发的异常处理/index.html","fe5389c0fcf07778f17dca542c0d7743"],["/2018/07/23/简单的异常处理/index.html","a111f81e424d31ead5c6b5f5a53b0a07"],["/2018/07/23/类变量与对象变量/index.html","de2f5700f0a1daab36f33ac4b8d6c654"],["/2018/07/23/继承的运用/index.html","69ed3868028128b2ca867bbd1da462d8"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","7a0312412ab09504b4606f7ada5976b5"],["/2018/07/23/输入输出——简单的回文判断/index.html","b7f803e305ecc3ba1269fd910be77313"],["/2018/07/24/assert语句的运用/index.html","b09f44d399aeefa73dc9bc6c817d883f"],["/2018/07/24/python中的lambda函数/index.html","38112123a25c7bfaf5e7e1755e2d2cd3"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","eea18b207e026a64299c990893e1a553"],["/2018/07/24/列表推导/index.html","042e9ca4b40c4203d652a9934ce31cc9"],["/2018/07/24/在函数中接受元组与字典/index.html","8dd4a2c523d651ad50477c6da76c40b7"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","e72f17bf69dab58b386f1d9b3a1401fa"],["/2018/07/24/打印九九乘法表/index.html","4ef89176cdfe70132cea1d185ae22873"],["/2018/07/24/打印直角三角形/index.html","a2f52d9d63130450c3f19a2272ae1020"],["/2018/07/24/装饰器/index.html","8051ff65055179cb81d6fee3f1236731"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","d590c992b389b0992dcf3f9a48430367"],["/2018/07/25/python中字符串的一些方法回顾/index.html","74635384ac09963bf1f9731b3c73545d"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","d5059e06fd429057916f865b21e4a020"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","917a896f54cae9034de8858fc79ca75d"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","e15a1493c38c7c777d4f67a1ad488f61"],["/2018/07/26/python中完整for循环的实际运用/index.html","5604f2ca9face37eb0c162874c82ffe3"],["/2018/07/28/python中对列表和元组的切片操作/index.html","47a3a4b2f7070393b7729922e64a942c"],["/2018/08/03/欢迎来到我的博客/index.html","a99d9de6fdb3ca3456be243b7548d39b"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","44d46302c9ab8b25427743a8f8ed96ec"],["/2018/08/07/Python中的正则表达式/index.html","51461756452af645e977fc4fa2a41a41"],["/2018/08/07/Python中的正则表达式match和search/index.html","0affeda3b941330fb94daa5b1dc46936"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","687f098852f304ef0bff1efc11bf27c5"],["/2018/08/07/正则表达式中的compile函数/index.html","1fc2de68e9d1a80c41d0ca909a26fe01"],["/2018/08/07/正则表达式检索与替换/index.html","948d3c89c58f204d0545cc721211e84c"],["/2018/08/08/python中的__new__方法的重写/index.html","3b314f2f625479106a038d9e18427ca2"],["/2018/08/08/python中的多态/index.html","aa562e25a78b5d1baeaf03f8f00700ac"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","bb7cbab5f9555187e8803327889e7277"],["/2018/08/08/turtle绘图库/index.html","6365d055131f26deac05298ba8cb3713"],["/2018/08/08/单例设计模式/index.html","5b55f25d2b9817578c57c31b423db4ec"],["/2018/08/09/Numpy库的首次使用/index.html","c84c7d76aff8e0c9be1a715ae3829425"],["/2018/08/09/kNN（k-近邻算法）/index.html","2c4fcdae94ff1c30c4afdf40fc847c6b"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","6c8702e57ee017e324575b89f976ca9c"],["/2018/08/16/kNN识别手写图像/index.html","11b9e32377bfdc29f6d9f7a537956cb2"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","6ae8c9ac9952ea77df956b872d3fea01"],["/2018/08/22/Ndarray对象/index.html","de2251ce6bce5002ddf4d572e18b5aef"],["/2018/08/22/Numpy中的数组维度/index.html","02866ddb7aeec6a46750f5d1fd36ee36"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","7982b5f3f5f97b21206b41ac93be96e5"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","c9a5837d6306e5e6f54eb375749433a9"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","5a5da7c76c15bff303e42c2c69155e0e"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","8b4b3677994732181d1cb7a1ac81e4e0"],["/2018/08/26/一些TensorFlow的基本操作/index.html","950f600fcc13700a83d4875ee364d70c"],["/2018/08/26/交互式使用/index.html","6853e9ad8f92b001628bc06c734ec37c"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","62da8926bcf7bc9c093dafce24783b57"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","b238a176803a4fbea80e5ecba327e143"],["/archives/2018/04/index.html","350317a3715e49949d1806955c5737cb"],["/archives/2018/06/index.html","a9cd3f324a1e4104f5cc915ffe0e7140"],["/archives/2018/07/index.html","6292e81beda88433cb631f6c463a3139"],["/archives/2018/08/index.html","4270d014b0aa3476c1bd0d85ea717942"],["/archives/2018/index.html","7767e536a3a2d553918233518a7fa398"],["/archives/index.html","ce387630d33ed7df5ab532bc3a585335"],["/bundle.js","b72599c81276ebe8e810936c96d3b802"],["/categories/C语言/index.html","558d97158d2ab0fc2726109869fed3bc"],["/categories/Numpy/index.html","ca2ae66cae6dee3533e73a6121be01dc"],["/categories/Python/index.html","b0a08b94195c8fb3d80c3c7ca52c82cb"],["/categories/Python/page/2/index.html","2505e1d5d0ae1b289962951bc5330ac8"],["/categories/Python/page/3/index.html","ec59744761fb0d7c48bf498425e97d68"],["/categories/Python/page/4/index.html","86c1c41cb14154dc4ed8f2d496a7430d"],["/categories/Python/page/5/index.html","674e303b3da99afeb0e57cbd0bfd7aa3"],["/categories/Python/page/6/index.html","f7c41fb67d04bcc0b7b6d9cd24043fc6"],["/categories/Tensorflow/index.html","d41da894890c2b96c2f8ed4ba9507ad5"],["/categories/index.html","36cc758d9f9e32ea9c76e7003d3c5db5"],["/categories/博客测试文件/index.html","de153a32f664b4fce73045198bb33fa8"],["/categories/机器学习/index.html","68739823da4c4a1c61d95decec428219"],["/categories/算法/index.html","cf697a4d74aee0f2f171114c27bbfe12"],["/categories/随笔/index.html","7c3912c6dbd094902ea53884aea63a8f"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","4da24b9ab0553c3620c3b8c747efb647"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e2e348164a4091c668b28e275148b601"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","6f9f3a2e0be63e00fb6d9929d50ec3f8"],["/page/11/index.html","33687e1b34cf67c8f3b76314eee2e9b4"],["/page/12/index.html","bf5de232a65fdc95f03a5f5c47e0a0e5"],["/page/13/index.html","4ede39d9ab1b9a0098b9dce687814d27"],["/page/2/index.html","7ebaa7d2e3b4d12926bfe385f2cb1153"],["/page/3/index.html","d4e0ef18283072210ee3b3363e6a0413"],["/page/4/index.html","87525547638b297516bffd4f1ed88b46"],["/page/5/index.html","96d98d4530d9c6f58cc97ce705bd77a8"],["/page/6/index.html","a68cab374ebb83da50f4c46fdf9762b6"],["/page/7/index.html","586178295e20e96a1c2d4b2f16c64541"],["/page/8/index.html","3c47c7ed65b7e62dc4c21ff3bb62cb08"],["/page/9/index.html","8682a803eb81e946de97c9b2c68c9825"],["/style.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/sw-register.js","a09fd5c5c4a10f6929d693d504fee501"],["/tags/Face/index.html","2220d1860e82d8d271710e499d22e0bb"],["/tags/Java/index.html","0639c8b2d5903c96e52fb05b3dc1563a"],["/tags/MNIST/index.html","85013064ca877dbbdd9e8350b854f3ad"],["/tags/Numpy/index.html","6a4c7ab53379729cd9f1430e96c3adff"],["/tags/Tensorflow/index.html","7a841cfe42dd999019e9c8b2da05e2d1"],["/tags/index.html","7d1ba432583b28edb368644bd5b40f84"],["/tags/k-近邻算法/index.html","91c6ae0a5de11ca8f346a3af01ccce39"],["/tags/matplotlib/index.html","d7f8d4f4cd4e6c131137e5e341f77415"],["/tags/python/index.html","9bd98cd7179a579c020be4a11f79f9e0"],["/tags/python/page/2/index.html","b07ed306c4147dfd89fd8355f8267bfb"],["/tags/python函数/index.html","aa8cf2d8ae86687b2a112000f0d9996c"],["/tags/python库/index.html","439ce60077eb3a4b3246a3ebc9f1ebf3"],["/tags/python异常处理/index.html","04eae1fe629e12679ba6285758bb5ca4"],["/tags/python模块/index.html","7deb6d8e717defc609af083870809ba4"],["/tags/python正则表达式/index.html","34ab6190ee92cb94c85e0871a4569685"],["/tags/python面向对象/index.html","04ba1338dc6bd3c2b97cc6aa575e9d63"],["/tags/python面向对象/page/2/index.html","33ee20554997bddfefdbee58f604d836"],["/tags/动态规划/index.html","be6e096422a313bbacd156a99819738c"],["/tags/基本教程/index.html","6403d9abb8d3f4e2a76f086c74ae9525"],["/tags/基本教程/page/2/index.html","b549fd0b0f489fbd44a15fe3c8104d64"],["/tags/基本教程/page/3/index.html","f76b996b86adfef334c2876e73e9ca1d"],["/tags/多态/index.html","c265408d3425406ed4763609dca24f68"],["/tags/排序算法/index.html","d69f75d4378f38362189a30a5399ac04"],["/tags/机器学习/index.html","4b1c5b1af9b9e14f98936ab9b6587c46"],["/tags/测试/index.html","0e84b331156a892da6bf12eefcb7628c"],["/tags/矩阵/index.html","501ca76445d5d953408576aaa0f5dc5a"],["/tags/算法/index.html","7af7669349cf18b89125f4f042fb1ed0"],["/tags/链表/index.html","562aa76a344a72feba1b15597e41b8d8"],["/top/index.html","fceee5562030a5fed8de0f690cb58fe4"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
