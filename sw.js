/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","3c3c53a25a58ad9608bb23d9bd20c777"],["/2018/04/08/整合建立输出增删改查的链表/index.html","c273a6fd6d91ded9a1b7f0e04462b682"],["/2018/04/08/选择排序/index.html","97912d9085ff7b3474cf5177224c6f93"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","e438be2b209b8c5123da3c93387bf282"],["/2018/04/10/冒泡排序/index.html","e1c046a77407b16227ba2fce7ee89c26"],["/2018/04/10/折半查找/index.html","4a39ac5aafc9ea71cafd252b9e06976b"],["/2018/04/10/最大公约数和最小公倍数/index.html","fd972f56517e20e1f01ad69e58438e1e"],["/2018/06/27/python中的Docstring/index.html","4adfe4c0a691a3e51715f19ba4a5be14"],["/2018/07/07/python中字典（key-value）/index.html","e399929e13c568e954c4669ded1412d3"],["/2018/07/07/python中字符串的一些基本操作/index.html","b2e6274ae4f21072e1246fe6517efa0a"],["/2018/07/07/python中的元组/index.html","f2d04e24c383b01144575fb848002556"],["/2018/07/07/python中的列表/index.html","8217aa4abba75a46c1f4f05a9e623499"],["/2018/07/07/python中的序列以及切片的解释/index.html","0d34461096be43693328bb1e98d699bc"],["/2018/07/07/python中的引用和切片/index.html","5ae05e582265dbd537bb93d3b60210e2"],["/2018/07/07/python中的集合/index.html","da75ad03a3d345e8526a5ee314afb5fc"],["/2018/07/22/利用python进行文件的自动备份/index.html","b9e4667d94558a9cb15383cf198509c1"],["/2018/07/23/finally异常处理/index.html","abca0b818453e9835b6ecf1da3b13153"],["/2018/07/23/python对象的实例化/index.html","901a617b5829c291dc1f9a9220f0127e"],["/2018/07/23/python日志模块/index.html","5dfa7d91278dd218ca1c0f4db18639ad"],["/2018/07/23/python的pickle模块/index.html","4c29ce87188e4279d6380c42f6fdb6e5"],["/2018/07/23/with-open异常处理/index.html","e27ce68b803039d1926ab0d13ef892f9"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","496b07392992d3bf7d439889bd4a9b57"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","0a157a459933397aa48631c591cc0c1a"],["/2018/07/23/在打开文件的同时规定编码/index.html","defbb88dac8abcda108f99001e3e755c"],["/2018/07/23/文件操作/index.html","98df5dcb48e1c230af6dda635df87ae6"],["/2018/07/23/用户自己引发的异常处理/index.html","b0f8fa0984eaccac6b8d9e3a6af018f7"],["/2018/07/23/简单的异常处理/index.html","0834a52eca5499c2061055024ab983e0"],["/2018/07/23/类变量与对象变量/index.html","2cd66a641da9eb77da49c4b4ebdd07ea"],["/2018/07/23/继承的运用/index.html","9fd9c15332495e66626c163e478a3952"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","05a485d84cef690c52a0a93e27f10045"],["/2018/07/23/输入输出——简单的回文判断/index.html","a12ee346237eff244450c8209fe6912c"],["/2018/07/24/assert语句的运用/index.html","351be9a21ccee23b609a9071a506c819"],["/2018/07/24/python中的lambda函数/index.html","00bc570b72aeac58975b4eb16839cad2"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","56a917de47241c6588c0c40afe40d78e"],["/2018/07/24/列表推导/index.html","efc00b1b7e6e5441a3c5b29172363469"],["/2018/07/24/在函数中接受元组与字典/index.html","c95d107b813edecc20772a755a8fad37"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","251de1e7fa36ab2074fb6fa7e293e7e2"],["/2018/07/24/打印九九乘法表/index.html","a747e2dd9c5181c8901b447f2d15f030"],["/2018/07/24/打印直角三角形/index.html","d07e880341ddd9019c2006f2f6d5fc91"],["/2018/07/24/装饰器/index.html","58071190bf5344228033b9b950e0af87"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","ae47ae36edd39076ab098b5ede5b5119"],["/2018/07/25/python中字符串的一些方法回顾/index.html","2018573cc481eb23fb6ce95916c1ebf4"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","a10bed574d6af7123e9484acd3b8f8a6"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","31ff800d279dfe0dc02de792dbeb813f"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","bb40dd4148631cebcad5a3d8a0f0d959"],["/2018/07/26/python中完整for循环的实际运用/index.html","96bca8b90319cf5cc7238ef62aaa6bd3"],["/2018/07/28/python中对列表和元组的切片操作/index.html","eec33ee14e64b1863989f1affc86a4bb"],["/2018/08/03/欢迎来到我的博客/index.html","34b9d93f3388afd403a5c409396d9461"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","1179cfc5c3db40823608c91ae94fb9e3"],["/2018/08/07/Python中的正则表达式/index.html","23a6daaf86d53ed302f876cf523bde03"],["/2018/08/07/Python中的正则表达式match和search/index.html","b66a59ead555796fa53eef6a8dde3b82"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","e7dd946ce4fd29d5cc612823948e5bc0"],["/2018/08/07/正则表达式中的compile函数/index.html","52630f77bf2e5b94a6f76b59397280b1"],["/2018/08/07/正则表达式检索与替换/index.html","fe6986b2df54f3a4f53fa3bf4848dcc0"],["/2018/08/08/python中的__new__方法的重写/index.html","85ab7fa2ad8c6f71702946d5508d3a7f"],["/2018/08/08/python中的多态/index.html","a4bc8424dec52bc31534fc4f1e924a9e"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","4357c032bf8eecd6deb22d6fe480ca6a"],["/2018/08/08/turtle绘图库/index.html","e7827effd4d150039d9bd4498b5e8aa0"],["/2018/08/08/单例设计模式/index.html","3ecce509ff662df6bf73bc4d3f3c09c7"],["/2018/08/09/Numpy库的首次使用/index.html","def7e5c43eb4d5c91b2615c0041de4f0"],["/2018/08/09/kNN（k-近邻算法）/index.html","cdc43ac72c9cc58aa2996a603eac251d"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","777b33336a5124ed0784f068dac29607"],["/2018/08/16/kNN识别手写图像/index.html","fa3058d5c5bcf1ef7890fb7431bf39c8"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","602504a460881022810f8a9fd02bd43c"],["/2018/08/22/Ndarray对象/index.html","f720f73e748ea4f489f22d628f850718"],["/2018/08/22/Numpy中的数组维度/index.html","3f6fe35bcf374448eee83cc69e137c3a"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","7abf7b67cec0f2ee9d84f461705529a9"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","28dd10a1d6ea2578a4ad8ad462eb5cc1"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","6e42b271936b2e399bb41ecdce9c4bab"],["/archives/2018/04/index.html","f97dbeb84a109cd8f08b5e6a16295e6b"],["/archives/2018/06/index.html","8fa68e50a35efaadf632f90e0c662c74"],["/archives/2018/07/index.html","c16d6d13cdaf5ca8b992fbe593dcb51b"],["/archives/2018/08/index.html","d7a28fcd53f8a34c4fffbd1cfabd3d1b"],["/archives/2018/index.html","8258d10b44d9d921ec76f56b36ce2b64"],["/archives/index.html","916113bcb02f8e7f010ad99ebcc912d8"],["/categories/C语言/index.html","469c22eea5fc51fe9f3060665a469200"],["/categories/Numpy/index.html","29941606027b15817e2ac1ad401126a0"],["/categories/Python/index.html","92746c715dbf5afb1c7f9641bc638020"],["/categories/Python/page/2/index.html","d9efddd03bd20a846725aa9b475bcffc"],["/categories/Python/page/3/index.html","2941926784664d6f93af27065fd486f8"],["/categories/Python/page/4/index.html","c788787062d48ba2bbf6ad6aee493392"],["/categories/Python/page/5/index.html","da840ef15139da620cace85bab824268"],["/categories/Python/page/6/index.html","cde8512214b56eff2818968f39adcb3d"],["/categories/Tensorflow/index.html","7fb662ae3b6c9788a5970d55c924200a"],["/categories/index.html","c8fa1e76f6a79bf18051b41df8fa310b"],["/categories/博客测试文件/index.html","23c156c8f56b6e5d3705171b3c986a2c"],["/categories/机器学习/index.html","fece2b2a05c3c1672a53fc851997e558"],["/categories/算法/index.html","b440bca02d3b10aba9a2b037f2d9505c"],["/categories/随笔/index.html","5161dd265c0b33a6b185d38eb8ca3e22"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1c3b270068b7be4bb0408fc45525bd1e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f098e2c74b259e68aab431d33139ca5f"],["/page/3/index.html","c8a2702fa303dc886074e96c1dc12dd6"],["/page/4/index.html","6421f58daac12a8998999e7b0d9ff82b"],["/page/5/index.html","e03064a575dbfdadfa618ba5c818714d"],["/page/6/index.html","fa178f3775897d45293c94d3f6f39605"],["/page/7/index.html","c3e1df200d2b0da5bebe5602a2fbdafa"],["/sw-register.js","55b96ad474e97c2008feed43e899a2df"],["/tags/Face/index.html","ed5e9447ef498655ddb08a7578f99401"],["/tags/Java/index.html","f298a2dc2630f788ccbb2a07107d55fb"],["/tags/Numpy/index.html","48e1edb9aa03b0385ff345028c147cbf"],["/tags/Tensorflow/index.html","30a4fb1348be496490d8a99f1c689c3e"],["/tags/index.html","70f93b9dd3a1fdd354bf571da299e0c0"],["/tags/k-近邻算法/index.html","468c9ed75d6c7b44fb83a193fc93863a"],["/tags/matplotlib/index.html","8f2d404c78eea19e7b43b0074bb9ad10"],["/tags/python/index.html","d95598c77ac45ef6a57b8e3f00a518fb"],["/tags/python函数/index.html","d114a3816f62f49d18f4d6eb2b9d033b"],["/tags/python库/index.html","d39dac8af2dae04bee99ac35a8c845fd"],["/tags/python异常处理/index.html","31b63ddc9a865f2e756789f8a7c007bb"],["/tags/python模块/index.html","5d78c5fb43c46ae2164948ebfd57906b"],["/tags/python正则表达式/index.html","9b8788c66f53a8c3f9fc1f17b9777f8c"],["/tags/python面向对象/index.html","798fdbd75620285c99db49c7ee01ac00"],["/tags/python面向对象/page/2/index.html","e1ff6de5aa614511c0e213a445877db6"],["/tags/动态规划/index.html","c6990d823d891513e4956593455c5571"],["/tags/基本教程/index.html","7c0a3cb25835b4bbda305f1a616c6aac"],["/tags/基本教程/page/2/index.html","d061930d42a32b322db02fa00d0f7425"],["/tags/基本教程/page/3/index.html","72fd782649d6745e3f25d6642efb26d9"],["/tags/多态/index.html","11a555e8fcb1156fb807b0503b88e4d5"],["/tags/排序算法/index.html","146cff4333e29f28c4e085d212dfc4c3"],["/tags/机器学习/index.html","7ad8a6c2c634aec303699315cde701be"],["/tags/测试/index.html","220054cd76842c2a310442b8477faf2d"],["/tags/矩阵/index.html","3b347c6f6153fea7f8d2a4d7dd3a69ed"],["/tags/算法/index.html","3c13862c26720ac8ecd49afe396daa05"],["/tags/链表/index.html","52ef164de4ee3df47019a3d17459131a"],["/top/index.html","d7b643ba5458c4f0afd88cdf01238b4a"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
