/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","2fbc3a2b21a111ee9ec07eecf5c6b7d6"],["/2018/04/08/整合建立输出增删改查的链表/index.html","6ab8cb3a16a10befa481a40e618cde9f"],["/2018/04/08/选择排序/index.html","3924ff90c5000f4dcdeb757bff9cf2c2"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","e010915e19b5c46bd0aae336a66bc83a"],["/2018/04/10/冒泡排序/index.html","5c2a64d778ea4965eeaef9a8a3f3bb4f"],["/2018/04/10/折半查找/index.html","8585829d6d3d0d450c9c6e1e00fe3b32"],["/2018/04/10/最大公约数和最小公倍数/index.html","bcf93f72a51c6a60c65efcc8933e5d34"],["/2018/06/27/python中的Docstring/index.html","b13737127eb47438ae7daca2d38391cf"],["/2018/07/07/python中字典（key-value）/index.html","1b9f7c68e88c0ab578fb0cc9759f36f7"],["/2018/07/07/python中字符串的一些基本操作/index.html","ee2695f3b9c1ee663c4134eeede818a3"],["/2018/07/07/python中的元组/index.html","8cabd4a914d757a939fbf7fd013089c0"],["/2018/07/07/python中的列表/index.html","911277d4744c79f8ecdc025f580153f2"],["/2018/07/07/python中的序列以及切片的解释/index.html","05c733ec3bb299230cb0b19cb470e948"],["/2018/07/07/python中的引用和切片/index.html","d1487584ff89eb2ba0c5c700f8bc5681"],["/2018/07/07/python中的集合/index.html","bf3a110c52a69c7569bca01c655d3c28"],["/2018/07/22/利用python进行文件的自动备份/index.html","4dc3727e6035c45b7f80c84d3c1271cc"],["/2018/07/23/finally异常处理/index.html","c91ff2673ba1b865e82da843e511d62f"],["/2018/07/23/python对象的实例化/index.html","45734529a2cba82af10fa19d254067b5"],["/2018/07/23/python日志模块/index.html","34f176c438962008d283319aefa95097"],["/2018/07/23/python的pickle模块/index.html","26295bc660e2d56a319422783db4edad"],["/2018/07/23/with-open异常处理/index.html","67bbc57768853dc511684bfd9a235966"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","93d890363a329a6f07f8b573c1d33866"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","652b3f51acb04101268e269182335c10"],["/2018/07/23/在打开文件的同时规定编码/index.html","d9c6e4e8f59c32e9905f322bc61cb4bf"],["/2018/07/23/文件操作/index.html","130bc849c7e11c07196c89b8cc9b28b9"],["/2018/07/23/用户自己引发的异常处理/index.html","8a41811866d94e250425a20a3bb55cdf"],["/2018/07/23/简单的异常处理/index.html","f750ad429013db9d74eb6bdce6720507"],["/2018/07/23/类变量与对象变量/index.html","2dfb576713ab3cb018229212c8690894"],["/2018/07/23/继承的运用/index.html","186a6f96bf1796ef55aa1c520bd2565b"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","f97bac3ed9b1d4dec56506a4270993f2"],["/2018/07/23/输入输出——简单的回文判断/index.html","a36be304c8ac31b44f8ec9d5230b0e67"],["/2018/07/24/assert语句的运用/index.html","2cad5a538fb3df59082e236276ddab5e"],["/2018/07/24/python中的lambda函数/index.html","8edf4f09f0f9c95beb6bc176853b2f18"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","b1a2106db94968e9dda5556e2dadef81"],["/2018/07/24/列表推导/index.html","8fa9636d0f1286f8f9afc5bf17beb5ca"],["/2018/07/24/在函数中接受元组与字典/index.html","93963cf0ae831c8ead4b0dd178a09683"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","82d6db79f3b0822d485c0c1eb1d53a1b"],["/2018/07/24/打印九九乘法表/index.html","ecfba393a99c2127bff8ebe77420c272"],["/2018/07/24/打印直角三角形/index.html","1836c71ee9cf109d6e7f2b0fa122e1cd"],["/2018/07/24/装饰器/index.html","6ad803586957a8aa3001f1c737cbcadb"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","5032dd5ddb103384d5cfcf9771ec9953"],["/2018/07/25/python中字符串的一些方法回顾/index.html","faa5a83c615d9817631597fbcf6a7138"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","30b7edcdf9e05d3a307654ba65b281ad"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","0595eecff5a94a4d998bb15434d58445"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","533a8cf5d514c2764ec81e3bc4e3bbde"],["/2018/07/26/python中完整for循环的实际运用/index.html","95757165127268a178d3029eb7d559a1"],["/2018/07/28/python中对列表和元组的切片操作/index.html","960e3bd036b56025c5e9ea9d4adb2181"],["/2018/08/03/欢迎来到我的博客/index.html","1288dd364f8dffe9a0a0f853067a2e4e"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","d40cb8716a6b55629031b737a53ba4f9"],["/2018/08/07/Python中的正则表达式/index.html","efc9e118e09a59ace256057e237ee7cc"],["/2018/08/07/Python中的正则表达式match和search/index.html","53959b1388f84226b378b7e86c7fc77f"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","7fe412dcef803f8317d6d67b9bddfa20"],["/2018/08/07/正则表达式中的compile函数/index.html","db23059fec7d4db4616f1d4855507eab"],["/2018/08/07/正则表达式检索与替换/index.html","3299ed09e4be6f4596af911cfe21e264"],["/2018/08/08/python中的__new__方法的重写/index.html","6692e9585ab9ed27e7f262e2ae8f60a9"],["/2018/08/08/python中的多态/index.html","f57607eeb31803064ac6dd65fa7d6ea7"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","dbcc909bf57f0d4fd00833e6b9a7a61a"],["/2018/08/08/turtle绘图库/index.html","d93c0c161a20c3a3c9ad664d125589da"],["/2018/08/08/单例设计模式/index.html","10efbf4c2e29bedd79df447c25c6920d"],["/2018/08/09/Numpy库的首次使用/index.html","1da35272bdf6b6424c61367fbe478714"],["/2018/08/09/kNN（k-近邻算法）/index.html","4887f062ec785d7b087f19088071f9b5"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","61fdb2b174c186c84d1096ffec692d48"],["/2018/08/16/kNN识别手写图像/index.html","49e4790cf0a759d464b57157b1d28445"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","210410096f60610d90611d0cf1ba0a8c"],["/2018/08/22/Ndarray对象/index.html","5bc1745ec760f2e3eb4f7589b2db4577"],["/2018/08/22/Numpy中的数组维度/index.html","c2740a1aed66e6fc58ac22a5fd3202f0"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","a7066c5a032b5878677b9318236b73c3"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","10af21017a890f2607dee961548eb3bc"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","d45c34e44c1b45d55c03c315c64eced0"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","549c9cd082dd2f8c27d82d857e24e731"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","19211e4f41bab4b1c5f7fe25f440593a"],["/archives/2018/04/index.html","5ea14d1d89031a574de4e42608155a87"],["/archives/2018/06/index.html","8c363c5efa3b7e59609f94e555bb347f"],["/archives/2018/07/index.html","5475a0db887da37326c7b37c7ba848bc"],["/archives/2018/08/index.html","50f4b9ad9c2d94e6bb92e75f754b90ae"],["/archives/2018/index.html","88348425b7766c35d0ae8203b79fc95f"],["/archives/index.html","c9b7ecbbfd6eb5918fe2245cb0b2e16b"],["/categories/C语言/index.html","b61120428fd3515af5850a441f5c9ae4"],["/categories/Numpy/index.html","2b18ca0eb648dc23390cac1982b0bc24"],["/categories/Python/index.html","ba5c5b94cdefb9a323617282086532e0"],["/categories/Python/page/2/index.html","0f5309d1bec1365c67c95ed3520b899a"],["/categories/Python/page/3/index.html","45165f78f09546eabe326f125779c7ee"],["/categories/Python/page/4/index.html","e978d8eea4bed0366e9785f3c87bafb5"],["/categories/Python/page/5/index.html","8581574609c64816c7f2a6a0694b1888"],["/categories/Python/page/6/index.html","2dd8127230d9f298e859d4d27cb27188"],["/categories/Tensorflow/index.html","e183574b2172a7d5b848354ce5cb9d37"],["/categories/index.html","7211a981e8b062576af688fb09bdbce7"],["/categories/博客测试文件/index.html","3964a364b5084446cc9375ce7d48d2d3"],["/categories/机器学习/index.html","57c9c3187730daedc67a150d20d79253"],["/categories/算法/index.html","8dc31f4d04c32ffe67c0a8ce20ab8765"],["/categories/随笔/index.html","cf7fce19a247bdade6b147c928b75201"],["/css/main.css","eee29aff981bc2f70cc74e805196ea12"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b306e7ab3bbd28cd5cba0d64427c55f2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e47b0db3e52e082a6a5499b2a12658c1"],["/page/3/index.html","bcfc15ad6047870532d6774aae0f911d"],["/page/4/index.html","447c7ae16b9f1dfb1d42cddb90d76020"],["/page/5/index.html","5531a2951f4217cfa54224860531b7a9"],["/page/6/index.html","b3b2fc3dcd2763bed54b8e4ef360f6a9"],["/page/7/index.html","e30548f4f0e438c52233ad13c3733ffc"],["/page/8/index.html","1a3af5eeebb6a6869241e44a863fa9e9"],["/sw-register.js","6e0ad792ca20807ae74a591231815ed4"],["/tags/Face/index.html","5da8d37f3bf6f4621792bd9df7aa46ce"],["/tags/Java/index.html","94de917db16b49800f3a72a3863a34d4"],["/tags/Numpy/index.html","86ce95ca9b8894c73d0415513e11279f"],["/tags/Tensorflow/index.html","3c2eafe1cfc5d130e0bb789ba76152fa"],["/tags/index.html","93a414f8be78c4bfc5d9512cb571ed2e"],["/tags/k-近邻算法/index.html","ab94ba277a75793d03595576aff16529"],["/tags/matplotlib/index.html","449b9cb687377762f2b4452bfe5063fd"],["/tags/python/index.html","880331cbd606dc74696d2c98e799ad5e"],["/tags/python/page/2/index.html","8362dc42727545da2ca76b2f3bec27af"],["/tags/python函数/index.html","9c37c13e32f13c4894a7200606f8fe4a"],["/tags/python库/index.html","29592cb356168af38f21e3c5391864ea"],["/tags/python异常处理/index.html","699c395d8e36a3d5f6ca3f344a8f9e3b"],["/tags/python模块/index.html","84a4cd2088eb74a803799ef7f5a9b031"],["/tags/python正则表达式/index.html","ffd57c8d8a64a4abc7178411c55f63fb"],["/tags/python面向对象/index.html","e50d77a916f98981daf6c1d339eff948"],["/tags/python面向对象/page/2/index.html","ce53b762d48e43dfb2b19b74b4aef482"],["/tags/动态规划/index.html","f5f15b0cbd59fc4eff1c736f4f28a449"],["/tags/基本教程/index.html","3de06bf62ee1d3b9c847b4da9bc9745d"],["/tags/基本教程/page/2/index.html","4a8212daf34bea941146fb08d77fae84"],["/tags/基本教程/page/3/index.html","a9906d4df134b08dcfc69ff4b2d4eb36"],["/tags/多态/index.html","936c587b87d183e5fe08ed01e3592f80"],["/tags/排序算法/index.html","69f26d1082950cd48b62e780cae1b897"],["/tags/机器学习/index.html","c0edb7716a984e55bd1feabd4979fded"],["/tags/测试/index.html","e3ced186637a2fcba944c3f1304c5562"],["/tags/矩阵/index.html","da312884eccc590fadaf173b06e0a088"],["/tags/算法/index.html","68c0ca9a23d201f21aefb7d960a0f754"],["/tags/链表/index.html","15360515cbda1296b6f5ff31dafa2a7b"],["/top/index.html","ab0a9a83c6d68a300c46a1178cfa7571"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
