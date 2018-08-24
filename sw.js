/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","5d4729d2c9729d71c940d071ace869d7"],["/2018/04/08/整合建立输出增删改查的链表/index.html","60ce49a725e4f2ef21a38ff7863b8056"],["/2018/04/08/选择排序/index.html","b706f41e8bb227f4058b87652b8400fe"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","69b73d0ba7e43ffcc84a117d4245e680"],["/2018/04/10/冒泡排序/index.html","3de2308779dc88977eeae8c17f81e4fa"],["/2018/04/10/折半查找/index.html","8df62d01258593120d72401ef781095a"],["/2018/04/10/最大公约数和最小公倍数/index.html","f85b3a52d0b76c9a91b05682404aced8"],["/2018/06/27/python中的Docstring/index.html","1d213df8cd78375ca82e20137549cb3e"],["/2018/07/07/python中字典（key-value）/index.html","7c767ff6c4e7ef623edee75c24ebdd23"],["/2018/07/07/python中字符串的一些基本操作/index.html","1d124f4b949639e35ecffe7ea1fd79ce"],["/2018/07/07/python中的元组/index.html","7ccffa13c66d6f3e4e94d06a727b9f30"],["/2018/07/07/python中的列表/index.html","c8f65a7e8aac91c80a38718145064d62"],["/2018/07/07/python中的序列以及切片的解释/index.html","bf98c07e445eb394c058141516295bed"],["/2018/07/07/python中的引用和切片/index.html","b40346647d69710b8132b001d8a3f8c1"],["/2018/07/07/python中的集合/index.html","9fd463a37287f7782b087d401bf76466"],["/2018/07/22/利用python进行文件的自动备份/index.html","891af16cf164b2acc02b77ffe77656c1"],["/2018/07/23/finally异常处理/index.html","73a7594aaeba79de3e319dcec525db80"],["/2018/07/23/python对象的实例化/index.html","b4dce73197e12d9073111b7a20cdeba3"],["/2018/07/23/python日志模块/index.html","244cee112dc946f52114f279dd6e5c36"],["/2018/07/23/python的pickle模块/index.html","cdd01ea8e745530cf1835164e8d49582"],["/2018/07/23/with-open异常处理/index.html","dc8761ee76d302befc0d96ea72fb4cdc"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","4fe17d491fbde0b7763f9173d14f2f7e"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","7ddbd7032effb05bad34734225395071"],["/2018/07/23/在打开文件的同时规定编码/index.html","2c580d0e0893adcec663b6cbaea874f9"],["/2018/07/23/文件操作/index.html","6d05aa23d38a4340a342dd54546dc524"],["/2018/07/23/用户自己引发的异常处理/index.html","e340edb9ccf48a6064ec7c883859d878"],["/2018/07/23/简单的异常处理/index.html","a6375b00171f702f823f221bacf165e3"],["/2018/07/23/类变量与对象变量/index.html","8809c6d07ad35f0aae6e0326acbb836d"],["/2018/07/23/继承的运用/index.html","382f984859d121319c74dcbf5d26a5ee"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","25f0dba39b1c0bbf9aab7bae95770604"],["/2018/07/23/输入输出——简单的回文判断/index.html","8b4483a7ce22abb0d4023ba4722d889f"],["/2018/07/24/assert语句的运用/index.html","4aad10892dd21370ab0e4a43e782d7b0"],["/2018/07/24/python中的lambda函数/index.html","0870bb3a33e85bb811777c90c65f2d79"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","039206ceb3a29f153b4f3085e83406dd"],["/2018/07/24/列表推导/index.html","b04965ce74788091f1e7f85fac187e3e"],["/2018/07/24/在函数中接受元组与字典/index.html","1c7be0fd3b99b43671c16861848063de"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","d7f1948e8128f65bb39cafa48d6461fd"],["/2018/07/24/打印九九乘法表/index.html","fd7e6366376a5542c7b0389417a685dc"],["/2018/07/24/打印直角三角形/index.html","4b51ef8b2e903dc065528c91a3423d1d"],["/2018/07/24/装饰器/index.html","416e58c4584b78e723167723da73faf8"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","012a35e44a651ff554caa489e2c88888"],["/2018/07/25/python中字符串的一些方法回顾/index.html","4fde343e244d6e0b38e834db965fa980"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","31c636ff7c136050ccfa5f682fa37e59"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","10aea4b35a85e20b86bc5d5b1f20977d"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","384f7b6d3924ae3156a0bcf39a9f2319"],["/2018/07/26/python中完整for循环的实际运用/index.html","7bfb82bc0008ed98e43fd1ca659146f0"],["/2018/07/28/python中对列表和元组的切片操作/index.html","0a97421dfb9f0cc23a9551956a1cbdad"],["/2018/08/03/欢迎来到我的博客/index.html","aaba75401d7497bb69b511737cd61f3c"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","33152ee4e12e742574eea22b636e347a"],["/2018/08/07/Python中的正则表达式/index.html","f4e8e88a3ec9bc688fcb7384f9968433"],["/2018/08/07/Python中的正则表达式match和search/index.html","5072baffd33fde00daae7c7de6946279"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","6d2340aec679e3e37f546493d7966039"],["/2018/08/07/正则表达式中的compile函数/index.html","a041c8070c874d7df79eb2c662212874"],["/2018/08/07/正则表达式检索与替换/index.html","4d0020729abb452076e56635c10640f8"],["/2018/08/08/python中的__new__方法的重写/index.html","ce2b8c29cd7a74cb0fcd0c13fccd6ad8"],["/2018/08/08/python中的多态/index.html","7482ef8eef0a40985c3dbc3034c9ae89"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","ed507a2ac63adc23f67785f07151d53a"],["/2018/08/08/turtle绘图库/index.html","2ade4358b38314e5b9fc69baa0bc7438"],["/2018/08/08/单例设计模式/index.html","74a0e630aef0b26e6c9681c4a4ce3641"],["/2018/08/09/Numpy库的首次使用/index.html","a9448aaa07b2509f6f362ea004cdb6dc"],["/2018/08/09/kNN（k-近邻算法）/index.html","d448d225ad86edd1bf6483906ec41cba"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","c11ef2de88391a5040bed4c3c70d8545"],["/2018/08/16/kNN识别手写图像/index.html","50c2e4f7fb856b6cdc9c24c0fe82a440"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","2b4bdda42a7455dc5ad518174fdf6de9"],["/2018/08/22/Ndarray对象/index.html","ff47a6a9f0cfe52f12f1271f45971eb1"],["/2018/08/22/Numpy中的数组维度/index.html","a5c6b99d1c00e87dd386e5954ce6be44"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","93fc032c5c7edd2508141a612b7ab474"],["/archives/2018/04/index.html","e0ca45a1870c5e9908188de842bdddbd"],["/archives/2018/06/index.html","ea27b2490f484c5fc60b56676c51480a"],["/archives/2018/07/index.html","1a9435cc33b48946dfd55e3dd7bea8ad"],["/archives/2018/08/index.html","96851d802a812711a7803811060a1a53"],["/archives/2018/index.html","347853bf22160cbe5895ad1fada02df9"],["/archives/index.html","c1a2c5f46a646a831c4867381e4d8815"],["/categories/C语言/index.html","f29ca9ba938d18df27e9281b4cfbc8c8"],["/categories/Numpy/index.html","71b779cee113af0eba428d7d9bb0f81d"],["/categories/Python/index.html","bf0449490f80fcc262e886edbacb2e09"],["/categories/Python/page/2/index.html","11a1231815175863d179ee5a4c1ffd73"],["/categories/Python/page/3/index.html","a8f0ead2ccd88158fea56b1f5cc0fc1d"],["/categories/Python/page/4/index.html","42ce8e6c8b5e479ede529e3137338b16"],["/categories/Python/page/5/index.html","8669194660bf579f8e64b982615d5690"],["/categories/Python/page/6/index.html","cfb1c53c1cadf84ffc0bca14cf34c5a3"],["/categories/index.html","99f7e132b36fb3334b80da77bdf43c17"],["/categories/博客测试文件/index.html","cfde74591967cb834c34be43686eb1e2"],["/categories/机器学习/index.html","15ae8abd2868658a604756c87d20973c"],["/categories/随笔/index.html","327cd03cf9d88a266b291dd24b271005"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","34b87ef24c5a125a3fe1e3bf9c00ee49"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","18b41177bbe350344edfda8dadf86cc8"],["/page/3/index.html","eab736b46c8cd4d7984f0cded90ab95f"],["/page/4/index.html","cc35cc908e6c497027e86d8a45979e3d"],["/page/5/index.html","b6e0b86467a0d674893ba59c1864c347"],["/page/6/index.html","34c9c59a8e0a44e11f2d4dd9018e00c4"],["/page/7/index.html","7fd7dec390a033f46530fd533c508cdd"],["/sw-register.js","2b07191397c8546b173fe5353ead18ec"],["/tags/Face/index.html","c40ac024518b5ed073f146442f75847f"],["/tags/Numpy/index.html","8db3c2d9a06c31a9fe3631e845b86525"],["/tags/index.html","8b5d304a71ecdc38be351087c1110e81"],["/tags/k-近邻算法/index.html","2d69809fa474841673f4cfce7d04701f"],["/tags/matplotlib/index.html","cb237b2d750705c070f95c8e9b17128a"],["/tags/python/index.html","4e5d40aadb7d0deb92ce53f6ea1e6187"],["/tags/python函数/index.html","9745b536a87d3384d46f36ebb8fcfa06"],["/tags/python库/index.html","a4f785234e007218fa9aca955343b5b2"],["/tags/python异常处理/index.html","b861281144c060267bb74bd0795b9a5e"],["/tags/python模块/index.html","d93aed355077ce229e772e943c3f0071"],["/tags/python正则表达式/index.html","1eb408ae6ffe0e2761fae33e49f46d53"],["/tags/python面向对象/index.html","c55183b7ae64e6845c691894f126dee5"],["/tags/python面向对象/page/2/index.html","92cac6bfd8ddc03f622146f55f9a5dde"],["/tags/基本教程/index.html","cb176a7854bc0adfa189fb5f5c3c3b93"],["/tags/基本教程/page/2/index.html","7f42f3850c6995418a6d66895f566676"],["/tags/基本教程/page/3/index.html","3b541f9c3ab563cd8b30ca2dca090f40"],["/tags/多态/index.html","ca6b6c90e49e516ba8b727fa47333cd7"],["/tags/排序算法/index.html","0f73ba36be85286a871754ccaf1b39e2"],["/tags/机器学习/index.html","5722b32cce3266e4dc0fbd48424539f5"],["/tags/测试/index.html","36f020cd6c05acc3256d52b8445d746f"],["/tags/矩阵/index.html","0024f5b0d0f7168533419112fcf6de22"],["/tags/经典算法/index.html","8fd2edb5e4be2f49ddfee7e88baae8be"],["/tags/链表算法/index.html","46ba3804be7bea8b2d3b7fb0c2f3bf03"],["/top/index.html","77624ff618beded9246a9ea726112ac8"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
