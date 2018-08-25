/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","f72ea965d3ef74907720eabdbfa10300"],["/2018/04/08/整合建立输出增删改查的链表/index.html","9d5ea46811ae8a0a47a6d3a25ade3ec6"],["/2018/04/08/选择排序/index.html","4f3277f6e29ff2bb082dadabb1145f4f"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","49c51a5d4220b9a004ae2b9efa533a41"],["/2018/04/10/冒泡排序/index.html","6f505a37ec88982a8e289d7a9b0cb0bf"],["/2018/04/10/折半查找/index.html","26e2fc0d0c20f73c0904707170f0d5d7"],["/2018/04/10/最大公约数和最小公倍数/index.html","d24647079a47ec275ffa873fe91915b4"],["/2018/06/27/python中的Docstring/index.html","76c0328018cb4520d25a969a05f2f0b2"],["/2018/07/07/python中字典（key-value）/index.html","fa731ef0b2f368fa8d4a99b083dfaa89"],["/2018/07/07/python中字符串的一些基本操作/index.html","0ba3bb97c95b065446ed2392227ebd45"],["/2018/07/07/python中的元组/index.html","dcca63cf7aa6d6e431586dea2159fd39"],["/2018/07/07/python中的列表/index.html","506b87961af8bea798967b5765db477c"],["/2018/07/07/python中的序列以及切片的解释/index.html","3d0443c37b3633afb178d6bbe58b6dee"],["/2018/07/07/python中的引用和切片/index.html","ffaa337a6d159a21dabafa847505f2d3"],["/2018/07/07/python中的集合/index.html","97b9415c0b57bf7ac1260ee03b10f6ae"],["/2018/07/22/利用python进行文件的自动备份/index.html","687366c4e9549d300b8e2b98c57a3678"],["/2018/07/23/finally异常处理/index.html","626191b4ae8bce37abbed95c98219a49"],["/2018/07/23/python对象的实例化/index.html","1248265b66a9bc28c2bf8e20266c1267"],["/2018/07/23/python日志模块/index.html","31d6c8d691f432e199cd6818fb6b2c91"],["/2018/07/23/python的pickle模块/index.html","4de1cd1673a90bf59c7de9129a9b6aa3"],["/2018/07/23/with-open异常处理/index.html","d60ff366106591610020401aff469c77"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","e4d210c2a875f5786bafe5e1cbc9b886"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","ad1f9e979d483c3128e48ed688986cf2"],["/2018/07/23/在打开文件的同时规定编码/index.html","eec6cd133387938d06e1cbe348a58fd3"],["/2018/07/23/文件操作/index.html","d311d3b9ffb8374bc2ba5d5aa98a8078"],["/2018/07/23/用户自己引发的异常处理/index.html","09521bd0d0539ac7ad37624cefefecb7"],["/2018/07/23/简单的异常处理/index.html","d7b270eb8aade94cdb5e2df464f1d430"],["/2018/07/23/类变量与对象变量/index.html","5332dfdef90a566dd36b1170b097b46a"],["/2018/07/23/继承的运用/index.html","e227bcfb750b30e9970efe46aae984dc"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","ad9bd6e2b4d30740f2f017a634f9480d"],["/2018/07/23/输入输出——简单的回文判断/index.html","3d1d0f18ccfae3e588ef30210a9525f0"],["/2018/07/24/assert语句的运用/index.html","adb06269dcd89d53c596ec63d700c205"],["/2018/07/24/python中的lambda函数/index.html","aa585172a77109e478cca3e5de494286"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","348834828d9e7f8ece3f096d3b004172"],["/2018/07/24/列表推导/index.html","a3f6e10a653fbed7de9043f7fa99238c"],["/2018/07/24/在函数中接受元组与字典/index.html","ea82cbb735351c1243517d57e38dbb99"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","78f544b045d2ac3fce9d8153f2f47435"],["/2018/07/24/打印九九乘法表/index.html","2ea6666e3f81dc0567abbc8b85d790df"],["/2018/07/24/打印直角三角形/index.html","31ff9560dec94861cc232e44ca7c5ed4"],["/2018/07/24/装饰器/index.html","8a95f8f67cef255bc59aa213e3dcc257"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","11cbfff48ef793f138d0163f89e40aae"],["/2018/07/25/python中字符串的一些方法回顾/index.html","5ebadef0a63355c4a68b4be418302543"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","cf2354ec2826d3830b76525a17e237ac"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","6d1f74b4874234ee176b04a15f481017"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","70fbb181290158c80a43f91e24308cd6"],["/2018/07/26/python中完整for循环的实际运用/index.html","a911da525dd895cbb6ac4f68991add40"],["/2018/07/28/python中对列表和元组的切片操作/index.html","81dee48ffab43e6560f4b0a9c5bc33b4"],["/2018/08/03/欢迎来到我的博客/index.html","b6b30cddb190b51e2741a9630c25136c"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","ae267468814b4db1ae581ca370635fe5"],["/2018/08/07/Python中的正则表达式/index.html","95d0289d1ed09a7cd85fb79eec92b296"],["/2018/08/07/Python中的正则表达式match和search/index.html","6b21bc8cea85c31ef89e02ed0c9597ea"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","a2803ed17cf3ba1b6772e91692094c9f"],["/2018/08/07/正则表达式中的compile函数/index.html","589aa3699d9f7dbd4f7ed0302b2a0685"],["/2018/08/07/正则表达式检索与替换/index.html","a7b628955949df1eb0073b4bc2f1a381"],["/2018/08/08/python中的__new__方法的重写/index.html","9f9bf3296b81604a100dce8a5316b16a"],["/2018/08/08/python中的多态/index.html","1a75746c738b7422142dddd27d4693f4"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","9536f73addb66654d1a107ac91787361"],["/2018/08/08/turtle绘图库/index.html","a342b9385ae65ca8b2dc4501a95fe75d"],["/2018/08/08/单例设计模式/index.html","8651ef58e2324a7140d0d6cb6ffd7d1b"],["/2018/08/09/Numpy库的首次使用/index.html","214304fe10712bf7eeab32b247b58617"],["/2018/08/09/kNN（k-近邻算法）/index.html","ace55aace4ec93236c6f3a21323d2119"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","b48da118afe56b6738582a955f690fb1"],["/2018/08/16/kNN识别手写图像/index.html","c35771c285f7e58be9799dc4ed38a157"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","1443a9ed87a3112afdb00202b5f1520f"],["/2018/08/22/Ndarray对象/index.html","01102ea85310796b564d2aee461ae7ad"],["/2018/08/22/Numpy中的数组维度/index.html","d66657db434f76feed9ef1130ea1aadc"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","311ba86fc813e470794b5a3fa5b89dd5"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","b5f2519179967ec5d4857c3e8ede80fa"],["/archives/2018/04/index.html","9a36191f5b656c75ba50e74fcee9220f"],["/archives/2018/06/index.html","ac417a63dbbfd3705e43d5488f7fad00"],["/archives/2018/07/index.html","9a082e7a3353d71ef4e735944c5c8b60"],["/archives/2018/08/index.html","9d4d990c5f6c0f1d34fb4b7d0f70ad26"],["/archives/2018/index.html","0ffaa83431013407a481ffbce6b3571c"],["/archives/index.html","fcd05cda42120fdd12d763f3bd86c422"],["/categories/C语言/index.html","e3d62ee89c0e51f51486f2aa9eb1428f"],["/categories/Numpy/index.html","2c4b3e4011fd969f3b404f1f3d30b3f4"],["/categories/Python/index.html","23908f904a624c6512def5a9f5225389"],["/categories/Python/page/2/index.html","59d10a5f4d69920e61708b52d1b6d62f"],["/categories/Python/page/3/index.html","980cad71c8611867b22084aba0487722"],["/categories/Python/page/4/index.html","f14a659b73ede6e8f90730ed2a896e1a"],["/categories/Python/page/5/index.html","d9cc62e772c3873acdbf8f735fc89e3a"],["/categories/Python/page/6/index.html","ca6cbdd9e95be1e4c998f8c3bd9aed73"],["/categories/Tensorflow/index.html","3fd873e14dc46614856867636e7aa6cc"],["/categories/index.html","a4e1c0b6ea02fcfe91fe4a6543b6d7d9"],["/categories/博客测试文件/index.html","4e22105fa033c672a518e9c741462328"],["/categories/机器学习/index.html","ce781996d2f7bb8dc7882b5b77ea9fef"],["/categories/随笔/index.html","6cb65a11af05196b61357be7a33324aa"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0c0e0b5a88db416afd0bfeb93be80dee"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","18130ce9956287c99e3acf1a65c9626d"],["/page/3/index.html","2692d5257a30bc714dee00931bec55cd"],["/page/4/index.html","3e4c82006b3e90e4bafaf4fbac80e6b3"],["/page/5/index.html","f207fd15407d9eed060640abbf29ab7c"],["/page/6/index.html","35c70a725cf4e066845b2b8fec702e6c"],["/page/7/index.html","3b6ffe4b18c94adaf9c1c5fd03efea0f"],["/sw-register.js","f8b2cfc7a37c71e1b4b417c699a69bda"],["/tags/Face/index.html","19410fc2699194555fa394d0f42118a3"],["/tags/Numpy/index.html","93c29b861420311958601e0d443b387e"],["/tags/Tensorflow/index.html","32f3b1c43406bf2d31f495d6d07de8df"],["/tags/index.html","2d3e0ca0a4a3b2fbc1c39c146dd5e44e"],["/tags/k-近邻算法/index.html","40e6c7e3dbc44795638b63578a15062d"],["/tags/matplotlib/index.html","273658d06de564c6d641638e59b0a7a7"],["/tags/python/index.html","6fd24879a6454a8fa670b04df7bccf21"],["/tags/python函数/index.html","7133cccb61103abbe0240a10a6999c7d"],["/tags/python库/index.html","3be3a74348fd50c17bf9df3463782013"],["/tags/python异常处理/index.html","3e66816833381054e6c3becc1cecb35a"],["/tags/python模块/index.html","72c5724346e4e06443326a2259e0904d"],["/tags/python正则表达式/index.html","f843db4505d33ff0aada718586379925"],["/tags/python面向对象/index.html","3d02ee865eaf81d00d7555620ec31106"],["/tags/python面向对象/page/2/index.html","4c6ff71696d18448cdc87de071b90df3"],["/tags/基本教程/index.html","f1ec6828d84a833d6cd4e0f83ee4bc42"],["/tags/基本教程/page/2/index.html","6fecd6bcc65ecc5b6679972c485dfe93"],["/tags/基本教程/page/3/index.html","e34cee08010ebcc8f56addbc06e3006f"],["/tags/多态/index.html","14d467224623f62aa104e94b9d753ad4"],["/tags/排序算法/index.html","4bf2919336b5915c43b988176d683b0c"],["/tags/机器学习/index.html","a3a8d17af9c8a3e490c3b3fc49c450fd"],["/tags/测试/index.html","3e264fde78dbf42b83d38d4a5d544b48"],["/tags/矩阵/index.html","63082c826e4ee46efbdac33c9d3ba7e8"],["/tags/经典算法/index.html","629632764c9c7f0402bd8497ef616781"],["/tags/链表算法/index.html","26cc2f03d9d471f81a9ecc1fa827d231"],["/top/index.html","584eefbaae27e2520ae7ccda370ea2f1"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
