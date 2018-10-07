/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","d07f93fd57fa4b7ef797e03de52ba96e"],["/2018/04/08/整合建立输出增删改查的链表/index.html","8670613b8631a1aafb48b9c58a413b56"],["/2018/04/08/选择排序/index.html","758d8f8c5bc9fc41df22e2482926bde3"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","9d951000785a0d66ad871cd9f02b6123"],["/2018/04/10/冒泡排序/index.html","b13f9607ae769a2a999a55912826fe3c"],["/2018/04/10/折半查找/index.html","6791ad89f1e21c9e91662359f0a76e92"],["/2018/04/10/最大公约数和最小公倍数/index.html","98b0a8994e6e4e46e6ffa475c712ac9d"],["/2018/06/27/python中的Docstring/index.html","3892c76980672a3aab94e2f64d3fb833"],["/2018/07/07/python中字典（key-value）/index.html","ba5fa6fbb59647c543ba75860145d66f"],["/2018/07/07/python中字符串的一些基本操作/index.html","ccb5802e3e65b8d3e1259db56d538ce6"],["/2018/07/07/python中的元组/index.html","91cd63c0f3b5e3633c5db4338b63022a"],["/2018/07/07/python中的列表/index.html","c3eb558f5addb7c69902d077fea7e580"],["/2018/07/07/python中的序列以及切片的解释/index.html","471a445e5cd0425c651e8908d3771beb"],["/2018/07/07/python中的引用和切片/index.html","c146b94fff291c149e25b103e937e8a4"],["/2018/07/07/python中的集合/index.html","3569853574e0a98766ce32ea041580de"],["/2018/07/22/利用python进行文件的自动备份/index.html","38b7e8b39268dea6b698ef72a88ad48b"],["/2018/07/23/finally异常处理/index.html","dd941b5bcf37dc3bda67c784f36ab553"],["/2018/07/23/python对象的实例化/index.html","41d95276eaf395dcc74238bfa9af8fc7"],["/2018/07/23/python日志模块/index.html","e6ec1fa593d33aa1da1a49cc4b1c60fd"],["/2018/07/23/python的pickle模块/index.html","48bff78cca31e097282ab6476d07371b"],["/2018/07/23/with-open异常处理/index.html","dcf1bb70166ca77090f3da2f10d4e470"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","a23473f51432a99ec02cec29ec1d96c2"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","a7d7e4eefcc9ec65e769e7a13951bb85"],["/2018/07/23/在打开文件的同时规定编码/index.html","5d6ebc99eab9b2bf539f95a357c8c758"],["/2018/07/23/文件操作/index.html","d52f9b20718bf2861e61134780067b43"],["/2018/07/23/用户自己引发的异常处理/index.html","a9c9975ea1c093d78b5395373bc1436e"],["/2018/07/23/简单的异常处理/index.html","d1b4e9fd8008a62828d7031ba3dbfbab"],["/2018/07/23/类变量与对象变量/index.html","5c849865bff389243cfdab9bc49cc06e"],["/2018/07/23/继承的运用/index.html","3d89c762da68f67d9d010c9ad5295def"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","9131839d37edae5aee0852a72e32c64f"],["/2018/07/23/输入输出——简单的回文判断/index.html","50c84685b3d24e7f0cc0a93fcc0b6c7c"],["/2018/07/24/assert语句的运用/index.html","782ba6cb45b55cb2bb1f1fc51b6331b7"],["/2018/07/24/python中的lambda函数/index.html","60e1d21e802efca81cf8f371eb2ac045"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","9b0befa823bd891a89f4734503beb1bb"],["/2018/07/24/列表推导/index.html","6be5d3af2869b523d11d92d9881aec3f"],["/2018/07/24/在函数中接受元组与字典/index.html","2a106f5302605d5644445c9a17304a1c"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","9e17678230aabd0133c54e559fc564ce"],["/2018/07/24/打印九九乘法表/index.html","659371857089049cbb404dc9ba9d9315"],["/2018/07/24/打印直角三角形/index.html","4dfb96e5a1d79eda35c60cda5e8ae2d9"],["/2018/07/24/装饰器/index.html","f90e149c43fc5f1164e39b143052aa23"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","35042314146b1a75c8c5a0ea2dcabf6d"],["/2018/07/25/python中字符串的一些方法回顾/index.html","cab012e2bb99a5715bcb716d5e7710e3"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","e2ae57937c8f1cde58445d9efaf7b75d"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","1a9fb94cde75558c8e3bbb66afcc154c"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","82f4dd46b05ede5210ca227b5d36d3b1"],["/2018/07/26/python中完整for循环的实际运用/index.html","7484ca2f54a0f5fbac63953bfc1d2f53"],["/2018/07/28/python中对列表和元组的切片操作/index.html","19493f9a351af22f8294c9af64fe5d91"],["/2018/08/03/欢迎来到我的博客/index.html","2050050f860e43930fff105848072f3d"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","29fd77f07dcf563c26fb3be016dfde65"],["/2018/08/07/Python中的正则表达式/index.html","52408d353f51efa7135bc35ba2c8a29e"],["/2018/08/07/Python中的正则表达式match和search/index.html","4b47182d5d14df814eac3c7145a5e112"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","85f36c0b0a15f90e8c62c656918881c5"],["/2018/08/07/正则表达式中的compile函数/index.html","f25940c6a49bd3ccde110d3354ce6780"],["/2018/08/07/正则表达式检索与替换/index.html","61d24d241449c90a0862a7640d66e282"],["/2018/08/08/python中的__new__方法的重写/index.html","48553dfc28e42a6a804bd49f74943382"],["/2018/08/08/python中的多态/index.html","516f274e2649f034c52d7d1fcd3db1d5"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","02bb82f6b55903b5faab15ff37341b64"],["/2018/08/08/turtle绘图库/index.html","c17f6f50a47c30373d3b78235b952847"],["/2018/08/08/单例设计模式/index.html","aa3500c28a9e711d0d5decd09c659fe4"],["/2018/08/09/Numpy库的首次使用/index.html","b64263920293ed71c9291c85e51649ed"],["/2018/08/09/kNN（k-近邻算法）/index.html","19e185c5157c53c6e9817b620443d568"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","34edcda46de0f0a799e5139eae0f7ef1"],["/2018/08/16/kNN识别手写图像/index.html","6565dc49e43d21b2b5ac92c47f03613d"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","19325bf8b5de71affc0a7e5be1648fa5"],["/2018/08/22/Ndarray对象/index.html","5bc168aaad4c7042a0c73ba54fd0141f"],["/2018/08/22/Numpy中的数组维度/index.html","9515ee3bfae417e9543e5d8a512654d0"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","140e416abfb1d8f897263be0089e1dbc"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","960fb8ef0a9ed79a6db709e78dc2c145"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","106c1035d0cb3582a20fcc88c74facf2"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","04c6348b30bbf0044a34035ba4715be5"],["/2018/08/26/一些TensorFlow的基本操作/index.html","b7689360fa5091e4274ec4701c4d4b2f"],["/2018/08/26/交互式使用/index.html","cb8d916c04a136074210835fa30cf386"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","fc059a9b132ff676370e9ac296d9053e"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","03a2289f592a3c3e31c343b82d0480d8"],["/2018/08/29/将hexo自定义域名升级https/index.html","37ffe8cf8c7601192a250f8326f78b1e"],["/2018/09/17/域名备案成功/index.html","601837ca134b203ed32764982159afa7"],["/archives/2018/04/index.html","b273493d1a57bcebe012582d05f98708"],["/archives/2018/06/index.html","f09bfaad9a9a8feef3122b39cca961e8"],["/archives/2018/07/index.html","135daa3a89dea1b6ff4494273d1b77f2"],["/archives/2018/08/index.html","cd06c73771b0e41bafdd2e2a3cc4f8b0"],["/archives/2018/09/index.html","4cebe517267d44d035211cc72dc83c7f"],["/archives/2018/index.html","a5a19d57d22a52908f8a196800b24181"],["/archives/index.html","528a2e3099c9168ab2d1675723b10d94"],["/categories/C语言/index.html","a9acc3f9ae78c46aaaa8cfb9ba9b2da9"],["/categories/HTTPS/index.html","2ae5d2d687968c3122582a0cd93e97c9"],["/categories/Numpy/index.html","732870d7f43c5456eb5b06515a236098"],["/categories/Python/index.html","b30f509a9b5c22d206c91bc1925f99a3"],["/categories/Python/page/2/index.html","d8cb6bbd8af132a34816e9a8117965c8"],["/categories/Python/page/3/index.html","d6f36269a0a204d2366df64dce5c743d"],["/categories/Python/page/4/index.html","0e2a3dd81b13e993f05d1728defe47c5"],["/categories/Python/page/5/index.html","57edb49a3a99d5f3d6372fb916278cbb"],["/categories/Python/page/6/index.html","8b42d608717a1860ffe8f2904bf3d362"],["/categories/Tensorflow/index.html","5b9d2aac8722aab67fa8a3ce28c742ba"],["/categories/index.html","aed8f728fce7f46c16de6638da31d24a"],["/categories/博客测试文件/index.html","d800ec10e7bf508bfd72238f8c632fcf"],["/categories/机器学习/index.html","90d44ac524bc9998ab268f07ec7b1665"],["/categories/算法/index.html","aaef008a9c1d5a78273db70be4006d21"],["/categories/随笔/index.html","5188b801b9b387871bf94ebb681fdc3a"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","3f066304f7298bd53468fc9cd55c05c7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d6de704dddc138c5c7bdcbac45bb4a45"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","89793af9b84530d928eea591c3349dc2"],["/page/3/index.html","644a744ee99f219f43754d4cdc82e4db"],["/page/4/index.html","a54725ef037772f22a3198c7f2b3faea"],["/page/5/index.html","cf084ccc4dfe1c22c5363a1f07962d54"],["/page/6/index.html","8b7cb844f34a66285f9bd264eccd3269"],["/page/7/index.html","939e7741b8d754b52895b5674a8381e4"],["/page/8/index.html","9fb79d94dda00046a2dad26a6d6fadec"],["/sw-register.js","e1e0fa41208f592b47f74ba272523ec3"],["/tags/Face/index.html","514755a8c87acc27403fc0886667b3b1"],["/tags/Hexo/index.html","e1abf974ea780256d18b9b0ad523e53e"],["/tags/Java/index.html","539057ccbb9b6a6b81d61dcbcba1968b"],["/tags/MNIST/index.html","76d2ad57b785542022f137d4f2d97b5b"],["/tags/Numpy/index.html","ed7223eb438d110bce609951018619bc"],["/tags/Tensorflow/index.html","541ef2ec38d97db10eceb1c8b70e4f5b"],["/tags/index.html","79141ae5189e9df331cb3a85ba92b607"],["/tags/k-近邻算法/index.html","799f4326b833d1bd3091c4d5a640b5fe"],["/tags/matplotlib/index.html","5a82f381ecfa9432f3331017732d081b"],["/tags/python/index.html","2ac2a5bb904f9807f1d202e1006cf495"],["/tags/python/page/2/index.html","1f8fa867a1a4fea1d48a035172e9ffe7"],["/tags/python函数/index.html","d2231b7ee05864c96afdb6878bcb4377"],["/tags/python库/index.html","dc342c50013d280dff125aa31c976905"],["/tags/python异常处理/index.html","4dea25b643e75b9a0d4393565250d0af"],["/tags/python模块/index.html","b332a16c0099350d65ae85bf0c76ff20"],["/tags/python正则表达式/index.html","b5be17079f3103b48a60c9b60eed890f"],["/tags/python面向对象/index.html","bc6add9ca794439abf8131fed2e84221"],["/tags/python面向对象/page/2/index.html","3509bd720d910c9f91290e0a14aea197"],["/tags/动态规划/index.html","3940f7e20957032db745c654ddc2ac70"],["/tags/基本教程/index.html","9d0fc1f01b5384ccb0f062c045937e1f"],["/tags/基本教程/page/2/index.html","9d324b9077731d793c4444d17e64d55b"],["/tags/基本教程/page/3/index.html","6fbcc5be310365fbcd9ac48f8f0cbfeb"],["/tags/多态/index.html","5e96e7433abbae61816f77112e629e09"],["/tags/排序算法/index.html","3dfee3c87604d00f932420ba17736138"],["/tags/机器学习/index.html","8531c108c0613ef2b886fc159f0f27a9"],["/tags/测试/index.html","68f80587b2ed06b83b69d6e419756817"],["/tags/矩阵/index.html","41aa413ca25a802abe157d7026c48271"],["/tags/算法/index.html","98f62c7cb3733d750673f44f8d470e3a"],["/tags/链表/index.html","4ee9d23e4c2c7a16556c87cb15ab22ed"],["/top/index.html","4b7e32393a5c326ce110e1cce8cbabd0"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
