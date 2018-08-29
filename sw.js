/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","8e6ba9b24b32e33fcb6ffea025efa720"],["/2018/04/08/整合建立输出增删改查的链表/index.html","96667fc9c873d4017447aef4dbeb7a26"],["/2018/04/08/选择排序/index.html","24aa638e3bb6723c4e2a0a78894db6f8"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","c975798672ca80f8e81560bfac628091"],["/2018/04/10/冒泡排序/index.html","261d2c4ea44a4103336ba10e22633a18"],["/2018/04/10/折半查找/index.html","3f9e7816c9da0407870e107b739b8797"],["/2018/04/10/最大公约数和最小公倍数/index.html","9e3cca13b7556f2e274a3717422f0758"],["/2018/06/27/python中的Docstring/index.html","a04204b9cd2e5a822f6854fd4386e3d5"],["/2018/07/07/python中字典（key-value）/index.html","067e4d6549b904fdd50141535f349250"],["/2018/07/07/python中字符串的一些基本操作/index.html","80ecac6207ad640b08f95dcc618edb7e"],["/2018/07/07/python中的元组/index.html","ecdf6e9e3faa4897c061ec7440d78364"],["/2018/07/07/python中的列表/index.html","8f22257005262545bab66b9ced2a43f7"],["/2018/07/07/python中的序列以及切片的解释/index.html","a9a5d91b1991b4f60897a9c4c6f14a89"],["/2018/07/07/python中的引用和切片/index.html","c19a093b6a18e73bbe7fcc7db915ea4e"],["/2018/07/07/python中的集合/index.html","e04a8697034ffda3a1b30b5aa3733ee7"],["/2018/07/22/利用python进行文件的自动备份/index.html","f59875d1585f4576fb12b2982a28c8bc"],["/2018/07/23/finally异常处理/index.html","ec62c84076cf58758df6cce6b7ef0d6f"],["/2018/07/23/python对象的实例化/index.html","71290d1baa8e07a28db546aca3b48406"],["/2018/07/23/python日志模块/index.html","41428caa2170473449d6803dbbea0eed"],["/2018/07/23/python的pickle模块/index.html","e7a20024f651c721d36cdd30de322c72"],["/2018/07/23/with-open异常处理/index.html","fd1eb0db128d8704a1edd6f0037c7718"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","fe753d1b32db8a5da2131826a1681c60"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","a5e4636c0731187f0ea4b87ccb0cbc7a"],["/2018/07/23/在打开文件的同时规定编码/index.html","653def6e11829bab95908f776f065ba0"],["/2018/07/23/文件操作/index.html","ad24572cad750a995ee955b32017f08d"],["/2018/07/23/用户自己引发的异常处理/index.html","80a09ba215ef541011713240050a54a6"],["/2018/07/23/简单的异常处理/index.html","b5db60a46facb3dc83d215cf00fa7da7"],["/2018/07/23/类变量与对象变量/index.html","727a6da62a2ea9fb3da033aaefe2bec7"],["/2018/07/23/继承的运用/index.html","917e7e04602aad3f2361d2e9322851f7"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","758d18700b4f69049e368968da361a3d"],["/2018/07/23/输入输出——简单的回文判断/index.html","1be3a2449cf1c902bac9aadc2469c907"],["/2018/07/24/assert语句的运用/index.html","e30c436b6c11b1a5bffce2b7c277a515"],["/2018/07/24/python中的lambda函数/index.html","9f0bd73b33910b1555ea1d9ee51819d0"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","6259e81ca07a73fcd60efc1092653bc1"],["/2018/07/24/列表推导/index.html","6f2d2268c2d4b91c995921711131c224"],["/2018/07/24/在函数中接受元组与字典/index.html","72d365a7d9e50240a35c21fd56fcdacb"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","2778b3df2c4c11f764d8d00887c68c42"],["/2018/07/24/打印九九乘法表/index.html","5c7b7a411505336033766c3197571c2d"],["/2018/07/24/打印直角三角形/index.html","2ff3422e3a7b126bc1d511b4e7e09391"],["/2018/07/24/装饰器/index.html","489df5f44e649f883d04dbd5d1a44dbd"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","8ea9cd1cf2714785708e46a1d17f67ea"],["/2018/07/25/python中字符串的一些方法回顾/index.html","ce818b63cb635d0495a4f54d36c4327f"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","9612522430c2d53c97549ffd7d9c0f5f"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","65db3903cf40331dea2b1ab473cabc9f"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","be3222e83abd9195a4e8cc2b5d047d40"],["/2018/07/26/python中完整for循环的实际运用/index.html","e55556bc34a51520ceef34a7c1b5c694"],["/2018/07/28/python中对列表和元组的切片操作/index.html","29ef6e88c675e411750812ecfa45f749"],["/2018/08/03/欢迎来到我的博客/index.html","9267429ca4e93b28895633f6c6d61189"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","6e8b29f7c9e1605fdd225ca3148a6e09"],["/2018/08/07/Python中的正则表达式/index.html","7303ba825de97975a71532789dca395a"],["/2018/08/07/Python中的正则表达式match和search/index.html","f6bf2df9140c6c8b600a08d1f9fe9edc"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","460a944e63d95187f6130b9227165056"],["/2018/08/07/正则表达式中的compile函数/index.html","ebf41e95a3f8cca75b8c3c099565db7f"],["/2018/08/07/正则表达式检索与替换/index.html","28e1587afbc86f5dc472eba72af442cd"],["/2018/08/08/python中的__new__方法的重写/index.html","2bda7e65c63c364aa0124012ec98babd"],["/2018/08/08/python中的多态/index.html","167e7e297230331da63426192d342642"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","7e1d652fc78ec46d32b13814d922f681"],["/2018/08/08/turtle绘图库/index.html","90d9f5bdc59c0adacbead9e414fc4475"],["/2018/08/08/单例设计模式/index.html","b96568f70a5cd33319fce7b70dab5065"],["/2018/08/09/Numpy库的首次使用/index.html","998ad8413ae2f8214ad1bb3e2ac1b5a6"],["/2018/08/09/kNN（k-近邻算法）/index.html","419f255d7f6b379afe6349918f60b6a1"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","4d4c3e25d14f58e357f60082f7417b93"],["/2018/08/16/kNN识别手写图像/index.html","380bc731ba84154fc36a2f6b45e2ad9d"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","be89f6a35a6faff82576f6fd8fa10565"],["/2018/08/22/Ndarray对象/index.html","7dcfa8853431d35b362cc01464b6c948"],["/2018/08/22/Numpy中的数组维度/index.html","5224509ea5493c4d0bab91befd81073b"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","549a3ff27c80685a79dc9dba40ab08bf"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","6f55097621e67e99588c90491ad36f37"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","831a7463dee8b312ceec307abb667eb5"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","7c4cf9b1083cec455e2e068b832d646c"],["/2018/08/26/一些TensorFlow的基本操作/index.html","d667f14342dd9228d4e0420d3484b952"],["/2018/08/26/交互式使用/index.html","07aba3167f18f611663c6452674d0fd9"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","377c1473fd08429c4a47233622863ab5"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","a37a67d6f4a61c6003ba5a1ec3052954"],["/archives/2018/04/index.html","6f3380dde848f80fe1e44989c43f422e"],["/archives/2018/06/index.html","9fcb7d2442fa6f8caeafd022f206a846"],["/archives/2018/07/index.html","b227a59749c2ac3be7c4efbe17e1bd99"],["/archives/2018/08/index.html","12e4ed8fdd0928684e2ccb6c11d81036"],["/archives/2018/index.html","324d1b503b389888999af3f0c778139e"],["/archives/index.html","0e375898f7755bdc1c19ebac3a430269"],["/bundle.js","b72599c81276ebe8e810936c96d3b802"],["/categories/C语言/index.html","9229ecfea314043a615597c15f39d190"],["/categories/Numpy/index.html","1f0d605a2e5de8576cd4298dbd4a8ed3"],["/categories/Python/index.html","4b8b4334893702e9d8f6dc2d853f9555"],["/categories/Python/page/2/index.html","390a8db03906bf3736ed3a5b66697725"],["/categories/Python/page/3/index.html","6ab1544fef984acc547cb007e453996a"],["/categories/Python/page/4/index.html","442eb1e5c3e7747abf8fce8c21cb4851"],["/categories/Python/page/5/index.html","dcf7d66fb9b8aadeee0190e37916057d"],["/categories/Python/page/6/index.html","ac3974bf78359d4487c353c2f36e94f0"],["/categories/Tensorflow/index.html","9b55584470ce0e0a7dc598dc17290add"],["/categories/index.html","3f05da85580683a0892f110beb520ca3"],["/categories/博客测试文件/index.html","0819ec3c8ca405669637dd8bf9f9fd0e"],["/categories/机器学习/index.html","9ab6273283d6f3e9a0e6e38d70044602"],["/categories/算法/index.html","bcc1c11cf12e0bf422cdf874b3d17455"],["/categories/随笔/index.html","c016bea5c76568a27edda079778d70ce"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","20447a20982b08a127ffee944fe48b44"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","9cae1ecacb647b929409d8f3fca8f0df"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","e1e5c244d17ca79a842e88f47ae25405"],["/page/11/index.html","41bc2c337d0b091664fcade6304a4009"],["/page/12/index.html","e5d01cd0ea64eb58109a938483efcbb2"],["/page/13/index.html","0b66ff2bfff5e53fe2b98407a1543295"],["/page/2/index.html","96bb09c9d9d024b120130d0f798bbf49"],["/page/3/index.html","c6a11aeb73c52f39ff858ebbd37c51d5"],["/page/4/index.html","790af5d664fe43fb2e769db4bd66daff"],["/page/5/index.html","4e9933bf9d34550b4e2d0d44b21f94bf"],["/page/6/index.html","6520db463420f51b654206cee0dff17b"],["/page/7/index.html","5fdb45e0ae9338b35e63871a177fcc3f"],["/page/8/index.html","dfbce06489d64a024312389110d7d9d7"],["/page/9/index.html","acf792ab8f3a15e7d92f9dd81eebc924"],["/style.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/sw-register.js","544704d2250598c68beef419d1ae5b5f"],["/tags/Face/index.html","6454711a61886f5e771332470b57389d"],["/tags/Java/index.html","71b8a1b97fe70939164d6fdea204e281"],["/tags/MNIST/index.html","479657cc89f2a9e85f461e86c40b5387"],["/tags/Numpy/index.html","66f11df14ee0e653f2b9ccc8ec330495"],["/tags/Tensorflow/index.html","3076eaa4c984a8d9262adbaea592183b"],["/tags/index.html","e158b1a16842eecf3423cd7847d1537e"],["/tags/k-近邻算法/index.html","3df290c75b487666a94495441ad3e561"],["/tags/matplotlib/index.html","0ef507babef28df41e6147891478fc14"],["/tags/python/index.html","d8b4d49ca3112a9389c9daad87ff9b0a"],["/tags/python/page/2/index.html","e92b0393f03c2629f832777d6e0dd71c"],["/tags/python函数/index.html","5e3c9c7ad74743da3ee149aad4837f9a"],["/tags/python库/index.html","9bf7311e9bc6682fc18eefb8ee22fca9"],["/tags/python异常处理/index.html","800ea156aa261139810d4f4fcd6e514a"],["/tags/python模块/index.html","30edee76f56aa578d7371ad33f6dbc93"],["/tags/python正则表达式/index.html","8dbb25e15884370e3592a8f6ea823fd8"],["/tags/python面向对象/index.html","0beb473bd85b0feab46b53970b254b5c"],["/tags/python面向对象/page/2/index.html","b13b31005be2e8c97eb5d5a48eace67c"],["/tags/动态规划/index.html","4a5f2cbcd08da36f8b355d5504e4a42a"],["/tags/基本教程/index.html","d3bf35fa84d293806e9590b9c9a5a149"],["/tags/基本教程/page/2/index.html","4b589e64b1188a60c688f1528d4307a4"],["/tags/基本教程/page/3/index.html","e60f68807581de23c4fb52977b2e4610"],["/tags/多态/index.html","bb45d6c961bd8c83d70504215bf5e07e"],["/tags/排序算法/index.html","e156c14e53ded9f198d5f90003b05100"],["/tags/机器学习/index.html","ecf3f092444b7ed75230af85fc43158c"],["/tags/测试/index.html","9795f616f63afbb00ca5a929f173d84a"],["/tags/矩阵/index.html","8e2a3bec1e0d3db060747eb8e62347fe"],["/tags/算法/index.html","c983f90cefd75c5a54eeb06eab6e475a"],["/tags/链表/index.html","106a59b56a5a2ce573ade0021fb37663"],["/top/index.html","2fdefd3c36410f8e259495733be6ee51"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
