/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","7048a210878a77ac407e78eba0a0d791"],["/2018/04/08/整合建立输出增删改查的链表/index.html","8744ffe0dae89951b6324889640ecd4c"],["/2018/04/08/选择排序/index.html","de4a2e9a7c9991862536a34bf7ae0ff9"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","b5749ad7d1db672d0e6b0b83e39d9df4"],["/2018/04/10/冒泡排序/index.html","c3292b7f55909cb302b986daa5c23915"],["/2018/04/10/折半查找/index.html","ab36dbf624d92519eac74a2af6d0a6aa"],["/2018/04/10/最大公约数和最小公倍数/index.html","153508f8d4910002b023db928c9cd397"],["/2018/06/27/python中的Docstring/index.html","bf5fe383a704041033640ed747accb9c"],["/2018/07/07/python中字典（key-value）/index.html","17c94bffb71cfc406a9d74f748b9a1a3"],["/2018/07/07/python中字符串的一些基本操作/index.html","1ee88ed2d0ab917b5f0d0e40eaf9f036"],["/2018/07/07/python中的元组/index.html","1b22b2a3de6227d2115a4e1d1ef5be79"],["/2018/07/07/python中的列表/index.html","21f121688227e8843296de481f16b40e"],["/2018/07/07/python中的序列以及切片的解释/index.html","d1ec035cb1146a4f4bda33dc9d4d238b"],["/2018/07/07/python中的引用和切片/index.html","2a124773111487fca02aa9127723792f"],["/2018/07/07/python中的集合/index.html","c5a7decfe50f056a91d4cd4cddc53067"],["/2018/07/22/利用python进行文件的自动备份/index.html","bfef37471dccdbbbe59d8e32115a0ef3"],["/2018/07/23/finally异常处理/index.html","1b809d3e520ddcf03850f79a94fc747d"],["/2018/07/23/python对象的实例化/index.html","4ab202bda47900b9a1f0bfcec126a3bf"],["/2018/07/23/python日志模块/index.html","22f647f6682222f65f19f9f713d6432a"],["/2018/07/23/python的pickle模块/index.html","0d558945c442f8fe60c88c55d0a5da4e"],["/2018/07/23/with-open异常处理/index.html","d625b5091315eefc8161b6467f95b0c8"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","0f7e498e9921f049953ba4a88046b937"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","6fbe5f2a270fa09bd7c973dcc4e71211"],["/2018/07/23/在打开文件的同时规定编码/index.html","85813b5e10fefae8a3656eebb680d3a2"],["/2018/07/23/文件操作/index.html","31d44619154f01d8dc5ddc9f963b55ff"],["/2018/07/23/用户自己引发的异常处理/index.html","2800edaaf5d7f0306d63bc127349843f"],["/2018/07/23/简单的异常处理/index.html","39a8b2d163e85703fc9c6964e2cc26e9"],["/2018/07/23/类变量与对象变量/index.html","e673f939ee78e60dbd886833379d9b48"],["/2018/07/23/继承的运用/index.html","c68642648a21c8acb27b8131e7b695b5"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","c316370a9b632782e613eceea928096e"],["/2018/07/23/输入输出——简单的回文判断/index.html","f87f85b37c8057d1ea9c0cc544fb1c40"],["/2018/07/24/assert语句的运用/index.html","d1bdc2756dae7a7ae5b72d832f00b3e3"],["/2018/07/24/python中的lambda函数/index.html","e5cef0ae06ca96d2e27bc20482417dc5"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","81e4a4dcb30def603f72b4b386f7f2c5"],["/2018/07/24/列表推导/index.html","ed21d0e11070275eb81e36e04e7edb52"],["/2018/07/24/在函数中接受元组与字典/index.html","929b6f4ac2695425098657863be11967"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","aa3eaa6b873a39f561d78af841246652"],["/2018/07/24/打印九九乘法表/index.html","c6cc8fdede71ce8c288d85d6e40c43ac"],["/2018/07/24/打印直角三角形/index.html","164112a4afe53674561ba6db65c785b6"],["/2018/07/24/装饰器/index.html","9d1cf9bd73b57783412c4eed231f67c1"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","41e553a4915f7671eb39f33da454b781"],["/2018/07/25/python中字符串的一些方法回顾/index.html","54af5a1ef64ff47cdb37c9fb83ea72d9"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","b85b6763bae4e896d78d7a93802c56b6"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","ee10a91fff57c7223721fffbc2ab6ee4"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","1c6ee58ba74d17672d59c45554cbad53"],["/2018/07/26/python中完整for循环的实际运用/index.html","47b6407463988b940e6db6df26392614"],["/2018/07/28/python中对列表和元组的切片操作/index.html","5ead76df01608b9e4cdb1a49030cca86"],["/2018/08/03/欢迎来到我的博客/index.html","bb2a1c132414cef61ec18b2e14f3252f"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","4b10e66a50765fdf8874de07178ac1c9"],["/2018/08/07/Python中的正则表达式/index.html","bcd58db0807455b03d05e18ea231d8c2"],["/2018/08/07/Python中的正则表达式match和search/index.html","45ed1e6f2dc5efc8b21ecea5bc448614"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","09aabfb9686889a38b64066c4b3b74c2"],["/2018/08/07/正则表达式中的compile函数/index.html","1e21e90fa19640a4fc7ce103bdcce246"],["/2018/08/07/正则表达式检索与替换/index.html","8d31714dd0a93e6bc9a51180b9c00203"],["/2018/08/08/python中的__new__方法的重写/index.html","63a1a432c492e0248f1c2c36eca3c9b3"],["/2018/08/08/python中的多态/index.html","4d2c4634fe865d1ea8b475dd53a1ee66"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","1dcc50c71f41fa3b89a41e7a42a067a8"],["/2018/08/08/turtle绘图库/index.html","2cc0cfbb35c0c5df4e0e3b7616a8d6ec"],["/2018/08/08/单例设计模式/index.html","e3c952732235a583d3c400cd6ecf223b"],["/2018/08/09/Numpy库的首次使用/index.html","be6b53231d5e2bf88b345b279a9e48e0"],["/2018/08/09/kNN（k-近邻算法）/index.html","4a934181cbd07c36dc987e2904f2af45"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","7e2105144fe0e374463dac814ea97990"],["/2018/08/16/kNN识别手写图像/index.html","ae2357d355ebfe25e9bc2ddbdaf4535e"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","0da3ff41d7bb94a0668ec224e71924d4"],["/2018/08/22/Ndarray对象/index.html","d431d3b167d489aa37c2725dd22dd787"],["/2018/08/22/Numpy中的数组维度/index.html","ccd43548cac5fa49b8b4fd00d36d0c77"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","6f3b6278b287355ac26b4da205262a92"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","232e72646a67b7fca51df9b0fc784441"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","56db645ca87aa3d0930abbc829350876"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","008f1844fdfe0ac65d52252e707d658d"],["/archives/2018/04/index.html","b1f9278a929f2f7318abec6efbf365de"],["/archives/2018/06/index.html","60c79cf9ce35a60d5e2cd1a29e86c421"],["/archives/2018/07/index.html","d7723817eb0ac6f0b2b53adb2940389b"],["/archives/2018/08/index.html","4ed4d12a77d72dd9cc1d1c84e1751b4e"],["/archives/2018/index.html","8198565ae2cfbab007ec6d72d024d62b"],["/archives/index.html","da1a4c8bdf9412c9b54ad75cfe69b0ab"],["/categories/C语言/index.html","30eebd373c9a8eca8a363f12e46a4d00"],["/categories/Numpy/index.html","d5ee581badd2a826dabe32cab36f3047"],["/categories/Python/index.html","4a6521c9c34a5fc826df5ea0c755191a"],["/categories/Python/page/2/index.html","c80ef4c3c3fbcbe405bad9e3e52ba602"],["/categories/Python/page/3/index.html","6408bfa078849feb245279c97a395fc8"],["/categories/Python/page/4/index.html","7a7fbee2e91e5994122e4124afbb7baa"],["/categories/Python/page/5/index.html","b08fd1df5221b624115dd1cf21fba440"],["/categories/Python/page/6/index.html","2138181412a81ba24ad2f633064616b4"],["/categories/Tensorflow/index.html","96be319082eccb863543624372a25ba8"],["/categories/index.html","a2b8eb4b0a9bff72f943797aa08239db"],["/categories/博客测试文件/index.html","1aaafce178d69f8652ccf67bb92f7f11"],["/categories/机器学习/index.html","5c067b868b73ea054e4e4454fa2e5290"],["/categories/算法/index.html","29cbdd5887dffb2108720442d6b5ffa3"],["/categories/随笔/index.html","4e2c253c2b4fdf5b4a32e6b11f0edb0a"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","10e1db7e18c7d7e944fb4ad84e16c7a7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ef399d4ed2b34f1512c6264ca9e53a27"],["/page/3/index.html","10efedd2b0ce972229dc4434d8b19423"],["/page/4/index.html","56519f76029f401788505c51461eb581"],["/page/5/index.html","eec3fc234b3cd681e9034dc412e38b63"],["/page/6/index.html","c8fb6cafa39937c169e7224261162c80"],["/page/7/index.html","9a3ff523c602903b9809fba2dfbb7ee9"],["/sw-register.js","32d566a53bb1e6cda3fe6632bfae717e"],["/tags/Face/index.html","60da7f02d2360aa41210701a7b2bdca6"],["/tags/Java/index.html","dace71ee0b2c46bc6073f522404f9639"],["/tags/Numpy/index.html","77df79540294f0845e450beb5d652969"],["/tags/Tensorflow/index.html","e6dc0a1e7a5ae43eb846030ec79c9d3b"],["/tags/index.html","3309f75537c3d2dc7a62740a65b9bdac"],["/tags/k-近邻算法/index.html","884b5990db3e16e0e38b1b5da239491d"],["/tags/matplotlib/index.html","a52f628386bc371c6497cc536377bd53"],["/tags/python/index.html","e4c78c76921844ff8a1a6730ba167dea"],["/tags/python函数/index.html","e14d2924441cec86e3c6cab4604721cf"],["/tags/python库/index.html","4a3d0feda4fae89a2778f224b216ddef"],["/tags/python异常处理/index.html","9bcba0259104562a1533860f2718594f"],["/tags/python模块/index.html","2cf1dfdfd3d948046f977b207312ee8f"],["/tags/python正则表达式/index.html","4f0da8ed737669b85260058444048ff3"],["/tags/python面向对象/index.html","22ebc1c9a08a9ad26561b7f5ce609780"],["/tags/python面向对象/page/2/index.html","ca20a8ec965c2c2ed09f23da59732b02"],["/tags/动态规划/index.html","41d15124d012aefc9c6598d9c68ae60b"],["/tags/基本教程/index.html","19fa04cc42e6722d0b1af93be623aabc"],["/tags/基本教程/page/2/index.html","58891f471ff66f8fdacef34344aba900"],["/tags/基本教程/page/3/index.html","851680d3a09439b7f3e798edb3e8a009"],["/tags/多态/index.html","29b3bcec79da8d38e417ecb3b8661e16"],["/tags/排序算法/index.html","6782982a58169aa23240853c834e9af9"],["/tags/机器学习/index.html","7dae286d5ae0917bd7668ea5023780d1"],["/tags/测试/index.html","0e57e3b6a9c77d8eb0605243946b2818"],["/tags/矩阵/index.html","711679824996ff9fbe501c2246d38052"],["/tags/算法/index.html","3f1a060526a71cf297e04eac84698080"],["/tags/链表/index.html","b7d72bdf7b3a0d287ce7f04bb5047dbe"],["/top/index.html","fccc10f3cd1d924d956b6eb71c5ba882"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
