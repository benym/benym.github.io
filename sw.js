/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","e344d96614cdff3a3757c558c17ce32f"],["/2018/04/08/整合建立输出增删改查的链表/index.html","9724074e0f82a58a1cedba7cd61f9a4c"],["/2018/04/08/选择排序/index.html","9c8585a278591d284f85a2e3fb6b94b8"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","1dcdc8289238226c9b97400cba61bf10"],["/2018/04/10/冒泡排序/index.html","430b18419b3ffc01bb1a41c398e69b40"],["/2018/04/10/折半查找/index.html","f55bc41b0cddfc42211256f854ed8a9e"],["/2018/04/10/最大公约数和最小公倍数/index.html","d2c0e57a866a0ce102da3e23e9a7dec5"],["/2018/06/27/python中的Docstring/index.html","2a48d54705299760fcbb85ea3c598b59"],["/2018/07/07/python中字典（key-value）/index.html","6c186c07f358fd367cef08439a5fc8ad"],["/2018/07/07/python中字符串的一些基本操作/index.html","9ec4996ca34012a7f244907a87f1ca88"],["/2018/07/07/python中的元组/index.html","8043d10fd319820641d932eec2fe5f55"],["/2018/07/07/python中的列表/index.html","ef21ba149dddf9fa40ec750c479343dd"],["/2018/07/07/python中的序列以及切片的解释/index.html","e84d08a21746ee9881ec605a785fb227"],["/2018/07/07/python中的引用和切片/index.html","df9eb4fb0d843b2f86783cc8b735feea"],["/2018/07/07/python中的集合/index.html","50c0093c6990a73119b31bc0c3bed40a"],["/2018/07/22/利用python进行文件的自动备份/index.html","260e51445c2eaea0ddb639cd46289414"],["/2018/07/23/finally异常处理/index.html","11ebac34eda0a6273f53325654e717a3"],["/2018/07/23/python对象的实例化/index.html","09f85c6fe10884bb420fd16aa9515a87"],["/2018/07/23/python日志模块/index.html","5464171e4018b9d60686de11d7b9b246"],["/2018/07/23/python的pickle模块/index.html","3b39b7a60d20b8ca0620cbdbfa4ac3bb"],["/2018/07/23/with-open异常处理/index.html","0b595300440317b543a9cd1421f7a9eb"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","83a216a6a4430597308042ccdb32671c"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","3b043493bb406d0447129a3bf59437c9"],["/2018/07/23/在打开文件的同时规定编码/index.html","20e9621215f6058512afd15b8ea3ed74"],["/2018/07/23/文件操作/index.html","1fc0c9861172f028ef8b34a50c5dd8ae"],["/2018/07/23/用户自己引发的异常处理/index.html","a66c6c74812b91c86249ec90ac0333f9"],["/2018/07/23/简单的异常处理/index.html","038974be01bc6f4d93051f4fc2f39e32"],["/2018/07/23/类变量与对象变量/index.html","b6f29eb597b20245a9e449fdb5d5993b"],["/2018/07/23/继承的运用/index.html","68db3fb6ca212a2765f7a6e3cff270ca"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","80077c0c74c98d28ac48ac3451257b38"],["/2018/07/23/输入输出——简单的回文判断/index.html","8c192b616656b1ee4ea793207c70c194"],["/2018/07/24/assert语句的运用/index.html","35b4daab7809347bbe1fcdef3878e5bb"],["/2018/07/24/python中的lambda函数/index.html","280223f358cbcc292a81c094db590751"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","d0fb5c1049af5f5abc9f89ba5bf5a9d8"],["/2018/07/24/列表推导/index.html","0dd839f6c885d644959c440a3b17fd6e"],["/2018/07/24/在函数中接受元组与字典/index.html","361841a0e58e39d06bd3db6d00f90f9f"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","952d79e5e1cba8b9bc7d792b04a0e6b9"],["/2018/07/24/打印九九乘法表/index.html","3ec04239d5e7f657d9af1b4fffd9e979"],["/2018/07/24/打印直角三角形/index.html","51161ff2b4d552111d09470b3afef837"],["/2018/07/24/装饰器/index.html","067e22cb2ff9d73b69db5c9bc2377eba"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","ce2eda030845a9ea1e0bbfa52069183d"],["/2018/07/25/python中字符串的一些方法回顾/index.html","776694b87f71bda53ac3830a6083799c"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","725266297179f64b74ec5bd3cc5af213"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","c02286518fe4e6effef5b7b99662a4c4"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","fbf378522e9161fd1fc7681a39e821c2"],["/2018/07/26/python中完整for循环的实际运用/index.html","c2dd1b64a0ef88f63b9c8274e600252f"],["/2018/07/28/python中对列表和元组的切片操作/index.html","fe8e7a494a9b6e902e0fe94db8f34eff"],["/2018/08/03/欢迎来到我的博客/index.html","3160e5ef507a7374078a617e2fd7b9ab"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","f339ce4d02c5a1d6f7790c80a3a7bfd6"],["/2018/08/07/Python中的正则表达式/index.html","eb642ce419bf40f2e89011b12352e165"],["/2018/08/07/Python中的正则表达式match和search/index.html","8d2752bb9595847281a5b9e30445e847"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","0f77b54a70336f52a4b6a949914bbc46"],["/2018/08/07/正则表达式中的compile函数/index.html","28880b7c09217133a4f195e25cbab43b"],["/2018/08/07/正则表达式检索与替换/index.html","f444515d38e17b0ac3c7227d1a7dce7c"],["/2018/08/08/python中的__new__方法的重写/index.html","fb293d6aa5250106105eca3ebd1a6253"],["/2018/08/08/python中的多态/index.html","2b7e91b6db63e9aedb38dbd3546729c5"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","62a89c16f04aaee785ce0c8900260136"],["/2018/08/08/turtle绘图库/index.html","d9c653d82903de4e6cda915704b1de3c"],["/2018/08/08/单例设计模式/index.html","0ce474279d0ec383efd340f27a183980"],["/2018/08/09/Numpy库的首次使用/index.html","f7e1a1cfea5ac3f673914b0b2a8da850"],["/2018/08/09/kNN（k-近邻算法）/index.html","418123076c5320797fef043532c7f589"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","89726d336c48ebeee0357988a2eef50d"],["/2018/08/16/kNN识别手写图像/index.html","524157216a8ae223cf0ff495dcefc027"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","7bf2c846105d5e45daebe87e26b48f59"],["/2018/08/22/Ndarray对象/index.html","bda428322748f658a99b36d7d85c4b6e"],["/2018/08/22/Numpy中的数组维度/index.html","41302c9a550c4b4e9a70245ef05092d3"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","99872820486c0d5ec5734d7e3033a1f4"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","6f4eade05e60979496c7bc8a3a09b3e4"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","52555dcfc0166b76ab2ca99d3b117b54"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","c4b5a72b00085dcc2c76366e9b721709"],["/2018/08/26/一些TensorFlow的基本操作/index.html","5d01ba461114e697d176a99da9ce3c01"],["/2018/08/26/交互式使用/index.html","81e481742afde180e9e92596911b5b4a"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","8edf60c0e2056bc084c72d22a11af86e"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","796f809d06f8baa94e3913118452084f"],["/2018/08/29/将hexo自定义域名升级https/index.html","fe393fd4deb6c9c49c0b59740e07327d"],["/2018/09/17/域名备案成功/index.html","55eb8c73cf3c40348fdd42b81a576c23"],["/2018/10/07/Coursera课后作业——ex1/index.html","31fbb34ddbc7b3f611b4822065aa259d"],["/2018/10/21/LogisticRegression(逻辑回归)/index.html","ff2c3fbab9fdb52033ede86d38926f99"],["/archives/2018/04/index.html","28bf30c0de12777b2225a0348baf177a"],["/archives/2018/06/index.html","3eb49eb82397a55708e0575d2944942b"],["/archives/2018/07/index.html","2bf0fcf568cb11d83023a8e0106d6d92"],["/archives/2018/08/index.html","2728a7af31b8661d846b62e887857edd"],["/archives/2018/09/index.html","2abd310c3346bd40749f3788c2a37d0e"],["/archives/2018/10/index.html","07436b8153a26bf92c99a232ab4fbd0d"],["/archives/2018/index.html","374cfe5f8fccc625a1577b1789684a0f"],["/archives/index.html","791cf0e3b23def724bae0f0c23a78459"],["/categories/C语言/index.html","3673cc2383a991a91b1243cf3f6e18c4"],["/categories/HTTPS/index.html","73ba017083eec5c105602864e214cb84"],["/categories/Numpy/index.html","077f614b56e2dd9a891293fafe90dbeb"],["/categories/Python/index.html","c11cc791898a0b938f3c5af9e6d42369"],["/categories/Python/page/2/index.html","5f8957e08ed5f19c829249bad1f1aadb"],["/categories/Python/page/3/index.html","30dd988dd24b338d9d3ec94986fc0078"],["/categories/Python/page/4/index.html","a5819e16c15619be453a9a988a00f4f8"],["/categories/Python/page/5/index.html","fbf55d64558bb971784f950b3fec4895"],["/categories/Python/page/6/index.html","0e0f1fd8e40f29b509d8eeaa2cc73091"],["/categories/Tensorflow/index.html","0a21bbaaf0298cc4a17dd0311ad28ecd"],["/categories/index.html","79009ec565b1e0e0c4828ea031d41013"],["/categories/博客测试文件/index.html","93366f37b6d5993ae5ab9f2b99c0fb1b"],["/categories/机器学习/index.html","e584daf1b529077ba8efd683a6d2da9f"],["/categories/算法/index.html","d4b594bf4ccc7683af36733e1eea7d93"],["/categories/随笔/index.html","a334d998920385de562865070f90ffa5"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","a49a250ecd2c97944cccf8f85ef90922"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f959d6fc5f1d641a67c20ae8a10eac28"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","51e31f88005453b24e2cc0eb16bac911"],["/page/3/index.html","4d9332b15484e90be6b7233cf1ec7345"],["/page/4/index.html","d00469c42726497abe0bd64a357defb9"],["/page/5/index.html","a339361ca88fe321dfd033a7f62a417c"],["/page/6/index.html","99d209beac993d7befef8ddf60112a7f"],["/page/7/index.html","f914a49dbb07ebfa5a6448a6f0c86403"],["/page/8/index.html","e85da9bf87736601c34f701119bb359c"],["/sw-register.js","5ae84cdab4b93eb2780a81b29b07c3b5"],["/tags/Coursera/index.html","e18b2d22dbf164285c8addb9c8b130cc"],["/tags/Face/index.html","a362dcc722fc0a09870fbf2ee083d7c9"],["/tags/Hexo/index.html","f2f61a5d990e4382a2ce4745ef738f2b"],["/tags/Java/index.html","a84f4e3dbd07bf82663ee4be4991895f"],["/tags/MNIST/index.html","8ba3076c2f1ed979b28616f3a899c499"],["/tags/Numpy/index.html","e47a004c9150f0563092e6988f6856da"],["/tags/Tensorflow/index.html","6a4db7f4b7cd9a2587713de9998b4fa4"],["/tags/index.html","87d12103f664502fd4eff761a31f8748"],["/tags/k-近邻算法/index.html","2662d0c8813876c84e20c02afa393285"],["/tags/matlab/index.html","d1fb70f2ea6822c1493c7ac188ff0463"],["/tags/matplotlib/index.html","fddd489a30060d762f53d48c780e876c"],["/tags/python/index.html","98177a58983f4d80bebc36fc14b17760"],["/tags/python/page/2/index.html","7aeab8e3fbe0a920efbc062de50c9bde"],["/tags/python函数/index.html","565bdf752877185cc8a244fda37da629"],["/tags/python库/index.html","76a04b15573ae5c8122b85fc070b50cc"],["/tags/python异常处理/index.html","e28c4560ce65f2b8a35ccaacfc8a1800"],["/tags/python模块/index.html","21f6d9388084a1ff847102c615907618"],["/tags/python正则表达式/index.html","3b84c1f28f6db9f3c7ac0d4d9b4a6236"],["/tags/python面向对象/index.html","6937bacdbb0268c3eeb16bfbff690d64"],["/tags/python面向对象/page/2/index.html","9f787fd338a9a1cf0be8f511b84efd1a"],["/tags/动态规划/index.html","359fdb514d533eff5bd297bfcb384336"],["/tags/基本教程/index.html","3f7c2107dee824567a360c9ef4c1fafa"],["/tags/基本教程/page/2/index.html","89d5066ef3517aeb4da0b69f91759333"],["/tags/基本教程/page/3/index.html","8787d45b383648e701a7c1ceeaa6a426"],["/tags/多态/index.html","c65f79a0bbe6fe9840533a5dbb96f3cf"],["/tags/排序算法/index.html","9ef3a3ab3b84dc2ecbec3aefa3a04c9a"],["/tags/机器学习/index.html","b7e444bf2bbef0c45bedf8914199755b"],["/tags/测试/index.html","3290618b794527210c501b6cf9a132a5"],["/tags/矩阵/index.html","0d1e8ee0ba19e158812b4c5b3ce07fbd"],["/tags/算法/index.html","0a658a31c55f3a0b40b78119631652ad"],["/tags/逻辑回归/index.html","baf0223be0e43129883ac8acb449f7aa"],["/tags/链表/index.html","d9a168678ccfe16aa29b80b26c6c9cc7"],["/top/index.html","3b18568d93340771731c04bc6a787d3c"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
