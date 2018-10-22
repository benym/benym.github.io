/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","8fcc5418621bc904f2ca086969e58024"],["/2018/04/08/整合建立输出增删改查的链表/index.html","2fc69fecd95fc5dd2472e8c138d43af5"],["/2018/04/08/选择排序/index.html","477dabc0de6baedeb85fda79bce575ad"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","64837e0704286d272cec5d8993bc8067"],["/2018/04/10/冒泡排序/index.html","def5a00ba145bb0354e68543ea70004a"],["/2018/04/10/折半查找/index.html","5300746aa4749367b24c23941e34b79e"],["/2018/04/10/最大公约数和最小公倍数/index.html","98633f1dbbcaf8bcbf4cafb5aa89db9b"],["/2018/06/27/python中的Docstring/index.html","cce94c6464b401603edf9fa2b5d7b67b"],["/2018/07/07/python中字典（key-value）/index.html","5a758773e7d5b74e521943c438644dff"],["/2018/07/07/python中字符串的一些基本操作/index.html","beecea210ed46a0e04e213ca102ce9b0"],["/2018/07/07/python中的元组/index.html","0af0e81c80ff704390f56d567b87de6f"],["/2018/07/07/python中的列表/index.html","ce0fd0b9fe1c5451c0d5a7141290c099"],["/2018/07/07/python中的序列以及切片的解释/index.html","28ff5b501d9452ae536c5f531a06a900"],["/2018/07/07/python中的引用和切片/index.html","dfb47d4f4c22ba02b17a825e5f53c473"],["/2018/07/07/python中的集合/index.html","301c6d97112a6021ad723d79c63bec9a"],["/2018/07/22/利用python进行文件的自动备份/index.html","f06c94e3060f86c27b718f49bb5dce79"],["/2018/07/23/finally异常处理/index.html","030ffcc641e14986a02125c7661e5904"],["/2018/07/23/python对象的实例化/index.html","2d2f781d53f1790df955bdb29f8c9125"],["/2018/07/23/python日志模块/index.html","5aa246cd9cfc81b233bcd77ae2304977"],["/2018/07/23/python的pickle模块/index.html","c7be92504ccc5dc8a10a1fd3b47b3b55"],["/2018/07/23/with-open异常处理/index.html","80cd9ae5a1b4298f699f4c84dd61c754"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","b961b56b512d161b6975356ab4fb0298"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","bf6fec3843ee44e3005f9f6ad272e818"],["/2018/07/23/在打开文件的同时规定编码/index.html","7a02fdc8139fce437f395285890f5022"],["/2018/07/23/文件操作/index.html","12873bc0f349ce40970146733aabb302"],["/2018/07/23/用户自己引发的异常处理/index.html","90b2212bea13151f3b5d361acabdad2a"],["/2018/07/23/简单的异常处理/index.html","db162272b1f47af5baffb55ac11fdd0c"],["/2018/07/23/类变量与对象变量/index.html","717fc81dffee1109f9d1dbf6692c77a3"],["/2018/07/23/继承的运用/index.html","6d30dbbe8f8148306c115b6e6a3211d8"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","ea0ee4102883a0b340b0ca39014a0f58"],["/2018/07/23/输入输出——简单的回文判断/index.html","af575f87fe6df937749738dc35e28f93"],["/2018/07/24/assert语句的运用/index.html","9364054ea736bbe0a2fb02c5ed0f30f2"],["/2018/07/24/python中的lambda函数/index.html","55555cdff7ea4d3fc782c39e02dc5eb0"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","f04bef00dd16f0e3978527ac3c677cd3"],["/2018/07/24/列表推导/index.html","59dfd791da7f08ae3fa858dbdc889eef"],["/2018/07/24/在函数中接受元组与字典/index.html","694f03273f6cf70a4867c56d24a4de65"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","2f382b564a4eabe982875d435adf86fd"],["/2018/07/24/打印九九乘法表/index.html","5608f505d32db968c5ecb358882a6fb7"],["/2018/07/24/打印直角三角形/index.html","bfb97e5a0fe2c0561f907039d8235a34"],["/2018/07/24/装饰器/index.html","6b9ef7072c7dd53d5939f209240286e6"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","5fcd7feab5bff4147c57a24a9abaf1be"],["/2018/07/25/python中字符串的一些方法回顾/index.html","d39c0163c5bd380462a428379a93ec23"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","e67e1f5cdc4a1e3f6adbd2f3fda8adc0"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","ceb512ad96e10e487224f66d51e8f743"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","dd1d9469ccd568aaeb9955c52898008f"],["/2018/07/26/python中完整for循环的实际运用/index.html","a33f6eb027695b2355874447772a8faa"],["/2018/07/28/python中对列表和元组的切片操作/index.html","a9c302485ba6cf46e7df99bba4e4a0b4"],["/2018/08/03/欢迎来到我的博客/index.html","2e06f6b4dd982f329f6e64ec12280de1"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","f7bb6d0597ee49b819938e9149e03ddf"],["/2018/08/07/Python中的正则表达式/index.html","1907d9978a2db9b9b9c451109ff278e2"],["/2018/08/07/Python中的正则表达式match和search/index.html","f17ba9e9320af11aae2b0c259be23078"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","dfc166d51d1225a428e889b72bf60e3a"],["/2018/08/07/正则表达式中的compile函数/index.html","dfa306879c43dc6ffc115878cda0d064"],["/2018/08/07/正则表达式检索与替换/index.html","a7e0639143c62701d29e49ef978c2ee0"],["/2018/08/08/python中的__new__方法的重写/index.html","52e09eef36e577d02b6d3f36fc21bb3a"],["/2018/08/08/python中的多态/index.html","0bb741f6f96af302de7c3a377cd595b7"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","3eb2a7446ca7bbe25151cf6510a3f9f7"],["/2018/08/08/turtle绘图库/index.html","7c944f778f8a587c17b49074bad4a67f"],["/2018/08/08/单例设计模式/index.html","3c4297968d455e73ceb465f968756e68"],["/2018/08/09/Numpy库的首次使用/index.html","070eaaaa9ced31957dd348c81ae41e7f"],["/2018/08/09/kNN（k-近邻算法）/index.html","05969ac8263a82ea42db0024487ae300"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","76d876fea73410e52e0e92fb2f54eb0b"],["/2018/08/16/kNN识别手写图像/index.html","054ab97d8cb206148434b54e77e6b293"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","842ceda9f8561c932909c8ff475b9e50"],["/2018/08/22/Ndarray对象/index.html","16f797565560a497323a7f1748f86d73"],["/2018/08/22/Numpy中的数组维度/index.html","b591ee3b47e7b53acb4df22b38743f39"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","3e03fd0f455e386bd008ca579c5a7834"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","231591bfc81b46449b90266c916d2454"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","9e521b32fb126d6c27ff9781ec943e76"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","90c9e4d0c0cc9bf33ef40721525b8526"],["/2018/08/26/一些TensorFlow的基本操作/index.html","a4d254d18e2577faea4f4c377fdbbf9d"],["/2018/08/26/交互式使用/index.html","de7d6f37a104a9b986f7e6339463be7a"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","33d531f957fcdaa2c532715cc598bb47"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","b39990ad69e6800d52674154d46200b8"],["/2018/08/29/将hexo自定义域名升级https/index.html","34294114ca65dcf1cf29f12f4d5dc69d"],["/2018/09/17/域名备案成功/index.html","e63ae165eeb8579d740d0c83b98ccb48"],["/2018/10/07/Coursera课后作业——ex1/index.html","d8c68e9401e8f286be476c8aa7944955"],["/archives/2018/04/index.html","bbd6462a50906114e2465a3cdde061a3"],["/archives/2018/06/index.html","147f8e1d94c6397b270b02162eab6ad0"],["/archives/2018/07/index.html","f83ec7597226c760abc917cab6014c81"],["/archives/2018/08/index.html","c63ff99b90bb8b36ceab114963823319"],["/archives/2018/09/index.html","5b11afebe28f54b70423973816c91232"],["/archives/2018/10/index.html","3d920a60dc2f1239ceed5b758571adbc"],["/archives/2018/index.html","695350b9bfc9df672172ddd2c23b7f44"],["/archives/index.html","e07128dfae1bb6c6c851cf2b629bd282"],["/categories/C语言/index.html","9781ccf0560b7900eaa98dbf2525f1e1"],["/categories/HTTPS/index.html","eb8fc183e059f6fe301d59ccc3a338be"],["/categories/Numpy/index.html","305ffdf080efdda07bdb327005947ce9"],["/categories/Python/index.html","da414ce11a0a2b363bec6f7125cbd48a"],["/categories/Python/page/2/index.html","08615ed2d4dda4df417df5d00a6aea30"],["/categories/Python/page/3/index.html","2a38069c5cd62f9e26ba7f6c0eb92b57"],["/categories/Python/page/4/index.html","09fb28dd0a53bd00fbe3446a536cab00"],["/categories/Python/page/5/index.html","06d5fca6644422705248c988a3003396"],["/categories/Python/page/6/index.html","39d7a70889620834acaf8fcec6759a59"],["/categories/Tensorflow/index.html","61da9faa89be0114b3351bf52e9af3c1"],["/categories/index.html","e9c1210b7c792652012105069420987d"],["/categories/博客测试文件/index.html","ddb0c30f42853c89d56aaf35a2574612"],["/categories/机器学习/index.html","c75b64a607685d3e34219c6c3f217471"],["/categories/算法/index.html","875e4b0e967684e200bdd3bff5d78c99"],["/categories/随笔/index.html","f162869ba762678e30d4cfc89f19d889"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","0cba4d064ed83b59b694a5ee9e2d36d5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6a514553a1dd1b4c3bf36b86816a3aca"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","836379e18cc5238b16aebcbfdab77891"],["/page/3/index.html","23b47501a4046896dbb1d289d96d588b"],["/page/4/index.html","e5416bfaa5fab92931f9cb2ae3bd0226"],["/page/5/index.html","f9ef781493de12aefe8e61d97afee5a3"],["/page/6/index.html","97374233a1b3ef2de2896c71f42b843b"],["/page/7/index.html","8cdc2c6f8cc1c5b5dcd76a856678a6a4"],["/page/8/index.html","83edb405e9bfd4f5f1f405cee00aa782"],["/sw-register.js","4bef8d2eacd4105a7dcf08685b9222eb"],["/tags/Coursera/index.html","4be312befbd33bff059b731a062de439"],["/tags/Face/index.html","ea34b8bce43b7cadfbca997915baf063"],["/tags/Hexo/index.html","7dcddaf5d2fa35edb8cdc1077f86b88d"],["/tags/Java/index.html","a28c285c7c559b8313de9a7b4509872b"],["/tags/MNIST/index.html","0da581c50cbd00b14992d49ba8d6656e"],["/tags/Numpy/index.html","7a1b194fbd2a122cef374c247f9fcd90"],["/tags/Tensorflow/index.html","c9e49e74be0bf7ba64bb7bc5349e23dc"],["/tags/index.html","1228ac6a3becd9498fa05ef6e2c2647d"],["/tags/k-近邻算法/index.html","3908ed32eb2b01a543cf92902dae815e"],["/tags/matlab/index.html","8b177339697930d8efc5cfb12dc22a63"],["/tags/matplotlib/index.html","18d3830861b0a271652047289b54252f"],["/tags/python/index.html","fd360358e24e1c205acdfb4cdf25d701"],["/tags/python/page/2/index.html","30de2ef4912925f84eef7b2707bcf9b6"],["/tags/python函数/index.html","45801950bb0708d6d0809e5951310d22"],["/tags/python库/index.html","6da8d77f367430be44ffbf9afbc1ce59"],["/tags/python异常处理/index.html","c25bcfd0ab93d54288ba816e69514dc7"],["/tags/python模块/index.html","330d5848a4d985a605de1cad94b84ad8"],["/tags/python正则表达式/index.html","0ecbac04e26da65d6e4d2af1f4bf0c3f"],["/tags/python面向对象/index.html","3a29ec1782538c9ad1e83e2d6ec70480"],["/tags/python面向对象/page/2/index.html","768dc011928fcf456ad9fb87e2a210c9"],["/tags/动态规划/index.html","618cf15781c4fc0ebc3e7c5d96c4093c"],["/tags/基本教程/index.html","8906e1e21e31098ae76513131e7cf85e"],["/tags/基本教程/page/2/index.html","8ae20fecfee0ecc3b021f17dd6d2d489"],["/tags/基本教程/page/3/index.html","653786914a159290b97f0cf0e72399a1"],["/tags/多态/index.html","8348dfdc995961b7ddf2a992f498fa12"],["/tags/排序算法/index.html","4f6b8af44710d86075d3086a657a2967"],["/tags/机器学习/index.html","f9836e93ceb0dfba052a2f77824bec34"],["/tags/测试/index.html","aa3905cfc0585e8251ef43c74b4b9148"],["/tags/矩阵/index.html","23a0cba599291b17457f8cead546cd7f"],["/tags/算法/index.html","0c3c12183948b1083927301c2e60e8e6"],["/tags/链表/index.html","890ff81b1901075939387f8fc85f67ff"],["/top/index.html","a3cc2d71a9e8dba8d65bbb4d796992a8"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
