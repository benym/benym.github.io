/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","25915a79a2ae76196ac076234674e5aa"],["/2018/04/08/整合建立输出增删改查的链表/index.html","f7e409655501e5ff41bab5905b804f93"],["/2018/04/08/选择排序/index.html","f2283054f30262a110c01a5300b614b3"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","44f826406abd921c1e65b7a48d6becdb"],["/2018/04/10/冒泡排序/index.html","46fe8ebafe54881ee24fdaf74587b871"],["/2018/04/10/折半查找/index.html","cae72cac7402e9cb5eacfa21abc21906"],["/2018/04/10/最大公约数和最小公倍数/index.html","f8d96a2052e8f1039190a53af83fd8e5"],["/2018/06/27/python中的Docstring/index.html","aa776177d19d4a83e57946952b7419d5"],["/2018/07/07/python中字典（key-value）/index.html","9647c8394921f006f136e5af69356c8c"],["/2018/07/07/python中字符串的一些基本操作/index.html","305c452a68c13ddaf1184d79743cd081"],["/2018/07/07/python中的元组/index.html","e15260b82acba1e995c01bc786bc1eb6"],["/2018/07/07/python中的列表/index.html","da9b279d6cbe5156c615b48f5fd9dee8"],["/2018/07/07/python中的序列以及切片的解释/index.html","d752d2f1bc4b37742c4d5ea53c4b9ae2"],["/2018/07/07/python中的引用和切片/index.html","febf311119c3cb313f4eee88230a2ebe"],["/2018/07/07/python中的集合/index.html","153e0f922cd428451bd124945205ef4f"],["/2018/07/22/利用python进行文件的自动备份/index.html","3e035815696542b61f8fc3bab7d6981f"],["/2018/07/23/finally异常处理/index.html","09ef41c95f2e5831c23d146bb2b2ac18"],["/2018/07/23/python对象的实例化/index.html","20097e615dc6b124600024d1f3bfe702"],["/2018/07/23/python日志模块/index.html","5ba425b172e48df7a5bc2dd7e6363931"],["/2018/07/23/python的pickle模块/index.html","c7ba81acddea06c59d9deba2e34aaee8"],["/2018/07/23/with-open异常处理/index.html","f9b76b54089ada0a772b875ae0a77eeb"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","52609db4c55ab54a96cbfaa986511006"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","54698d864231a7f9ed43ef5d1234de4c"],["/2018/07/23/在打开文件的同时规定编码/index.html","1ea2bf787a48c2efa5d70d0d7374e43b"],["/2018/07/23/文件操作/index.html","40913f137158e6d6d4f284aac491a260"],["/2018/07/23/用户自己引发的异常处理/index.html","6d32974d9fbad6905a648bc12b147c4f"],["/2018/07/23/简单的异常处理/index.html","0373ecd268e9c178d370bef61d63c36a"],["/2018/07/23/类变量与对象变量/index.html","2285cec85c03af444f722e3db399edff"],["/2018/07/23/继承的运用/index.html","dcd77085ad6e8fd26a36ce5aada7cb9e"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","544e3f8536e10c4d5e4098f7838df4c7"],["/2018/07/23/输入输出——简单的回文判断/index.html","49dbf3db8a3e539a192ae5eea9273dc2"],["/2018/07/24/assert语句的运用/index.html","ba06dba525e0c9fdf3000dccfb0a6a4d"],["/2018/07/24/python中的lambda函数/index.html","d47298784e6d36049f48ec0fa88fd688"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","39d74f80e7172747ef7cf82a1729ef99"],["/2018/07/24/列表推导/index.html","b09c03f2e4334b629c9d902ce2ea7298"],["/2018/07/24/在函数中接受元组与字典/index.html","0f1e1f12a5c6f5e553292cd6e0dffffd"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","2e894806dd6b12ec74b95aec006072e1"],["/2018/07/24/打印九九乘法表/index.html","2f72e40aeb29ecc56cd0a15f2efad87c"],["/2018/07/24/打印直角三角形/index.html","d1ef0acdf98398b8df114e438ca02c37"],["/2018/07/24/装饰器/index.html","9e29ec2033a5185b6a893e0204c9cd1e"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","7dbc3ee082e29c378b8a99ea66955481"],["/2018/07/25/python中字符串的一些方法回顾/index.html","141dc14979aae3a790fafc38303cdb15"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","363bf18cc728b465e2fb5d877a0625a2"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","978f53ab3fc11701b0c521d0d5e6a6ee"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","dd215d0d27d565890a079ff826e88d16"],["/2018/07/26/python中完整for循环的实际运用/index.html","3434f7b2c93abb3a3c1871b8822165bb"],["/2018/07/28/python中对列表和元组的切片操作/index.html","81f529daa1911ce663a1115e5c6733ac"],["/2018/08/03/欢迎来到我的博客/index.html","cb8f1dbed787cd68bbe059fbd7ab0fe1"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","80d5e457a483114ca339a1db2df35be8"],["/2018/08/07/Python中的正则表达式/index.html","fdbc5bb897fd7d84c7cc828905de5125"],["/2018/08/07/Python中的正则表达式match和search/index.html","1939df0d5de99edf58d911b12f927395"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","4a9202ea40939b6054f73bfe97cf2182"],["/2018/08/07/正则表达式中的compile函数/index.html","cbbc50c70b7fe38e4f4fc3d057f527b9"],["/2018/08/07/正则表达式检索与替换/index.html","cac48df21dc1457de8442ab9adce6b8d"],["/2018/08/08/python中的__new__方法的重写/index.html","899e4869c6936c16fec700e5ac33d831"],["/2018/08/08/python中的多态/index.html","07dcd2096b8b636a2157c1dbe1f30269"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","45cb36ef71fe532183490ce886a26969"],["/2018/08/08/turtle绘图库/index.html","2b25921e9b5420a2c2d0912fe70b8c71"],["/2018/08/08/单例设计模式/index.html","11f341d2af6015748a49acd3f0189854"],["/2018/08/09/Numpy库的首次使用/index.html","96d96d07174f39c004705fbfcc82a7bd"],["/2018/08/09/kNN（k-近邻算法）/index.html","2dd387a89576def9104d0a692a681d99"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","ede10bdf90e6d771ebd0a839ad9329ca"],["/2018/08/16/kNN识别手写图像/index.html","595062135aace94316102a9ccc1bba37"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","59bc6eb99c125d0f159038ffb9ce5b1a"],["/2018/08/22/Ndarray对象/index.html","735a8af65150c0be76176034f3563ced"],["/2018/08/22/Numpy中的数组维度/index.html","41e35cb3805999ddb6a84e2c57203796"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","39624800ef0a66c95ed10ae428a3baa5"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","8bf1b3a65bf053d01eb06664807b29bb"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","bfaa881faafba60e21bbe0502f51d5e0"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","838dcbd8cbfa2416ed86e94eca203e95"],["/2018/08/26/一些TensorFlow的基本操作/index.html","3ab2f8b030bf99eff6288f1ea05f7bbd"],["/2018/08/26/交互式使用/index.html","9310fb8c32963b80359e013a6f232979"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","9196440c19853878b3bbe7242e1995bb"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","d39716a7e44b46226db1b896fd3426fc"],["/2018/08/29/将hexo自定义域名升级https/index.html","c6c0137789e8cb82f12a5b3b006ab449"],["/2018/09/17/域名备案成功/index.html","182402bf9925fe2fe5991168696b7d0f"],["/archives/2018/04/index.html","9f38db759a70900bed716717bd6052e3"],["/archives/2018/06/index.html","4c3bb9a4ee33147d830033723fddea70"],["/archives/2018/07/index.html","b7fa2281ae5c8e13a3a97a0695d419e6"],["/archives/2018/08/index.html","013af663818998997198d82c60d55f45"],["/archives/2018/09/index.html","43bdf73672fed4fccb722fb504b5d98d"],["/archives/2018/index.html","0eb6ceeccc6aec73e66de13f58fd753d"],["/archives/index.html","e8391446859501f0537aaa0cb70bfac3"],["/categories/C语言/index.html","047dff0ce48eddf816df6931f436d178"],["/categories/HTTPS/index.html","7dbddab4764c0ac13ab7bbee9a3230e7"],["/categories/Numpy/index.html","3f8c02f275362ccbf7d994f91fa8eb30"],["/categories/Python/index.html","56785306a4ee5b4488f1944cc762b7dd"],["/categories/Python/page/2/index.html","8d2e54e342aae1a1a987b595adbb2583"],["/categories/Python/page/3/index.html","b7e469d09c5b86c480b3cd9bdc696447"],["/categories/Python/page/4/index.html","8083c219d89e27478e85c506a8782345"],["/categories/Python/page/5/index.html","e697d2b25685028a0fa457d953a25163"],["/categories/Python/page/6/index.html","ed92b4fe9943579712768e4b52a0f74f"],["/categories/Tensorflow/index.html","a35a4859c0cf6d7ebf098c19c5c47b3f"],["/categories/index.html","320919e90cbc083b9e7198e7ffae3661"],["/categories/博客测试文件/index.html","77765863cf1e2c7913442c8c18555450"],["/categories/机器学习/index.html","c45323d61b6dfce5b550658693f04bf2"],["/categories/算法/index.html","45a161042b28da69dca660493f2bace0"],["/categories/随笔/index.html","83dd40b9d476d89fa3cd49c4968a27bb"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","ddb4f16c398d78ec911f238fde36cb1e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6e9010495a3612f4e62b95a17315ff17"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","de6a7424efe1861913c1e3c5d06f54ac"],["/page/3/index.html","6514e9bfb5f1c0aa6afca5bd920c3b70"],["/page/4/index.html","ad841f3c01004363359fee16e783fcd1"],["/page/5/index.html","fd1f87723fe64b94b9a87dc7a0702db5"],["/page/6/index.html","c2f42d040988816f08acb94c94acabd2"],["/page/7/index.html","cd29a5bcf6fa5b6249ade53177a2cafc"],["/page/8/index.html","bcc6400b95de5dd0ea07273780d0c051"],["/sw-register.js","57ef1203cbb26b362ed07c7d3077a4c4"],["/tags/Face/index.html","66391f5f4e05a7918e63d0e41b3bbc76"],["/tags/Hexo/index.html","407f0b30de71678cba5d78e6edb278e4"],["/tags/Java/index.html","6d16889f393a09af83bd11400eacce38"],["/tags/MNIST/index.html","3e5015ad2994d46c7a4408cbc622d4b2"],["/tags/Numpy/index.html","32f9ca13bb79de0f09cbbc0c850ef95e"],["/tags/Tensorflow/index.html","89412f1991283067b2e36a2ed1764a8b"],["/tags/index.html","ca05d33135119b993c4ad8bfa458095a"],["/tags/k-近邻算法/index.html","f8074690071cb2310bf699dbf516b1fd"],["/tags/matplotlib/index.html","ef403682dbcdf838d145cdca75ff6e88"],["/tags/python/index.html","8be1c039450d8e95b3b32c794e79ccff"],["/tags/python/page/2/index.html","85720431679fc29f1975fc5e1439e07a"],["/tags/python函数/index.html","81a85c5810a403072e3cce84a479fb6e"],["/tags/python库/index.html","472d4c8477dcbb945edd5737cd0807e8"],["/tags/python异常处理/index.html","8ea6522b1960ee43e94dabf4df3e1500"],["/tags/python模块/index.html","f9da1de173a5cc31bc0d4d852db67c11"],["/tags/python正则表达式/index.html","0d373b9ef9dcc7a2bfa9561a8e8532f1"],["/tags/python面向对象/index.html","e39c9368abf3dbba775a6628c97faf45"],["/tags/python面向对象/page/2/index.html","b5cbb04722394bfe700e24a70803fbdb"],["/tags/动态规划/index.html","0d938660fe6c8214b2fd5db3e96f8b2e"],["/tags/基本教程/index.html","cbcf2f436611bb8e8dc21bd108fb0e2d"],["/tags/基本教程/page/2/index.html","f67405777e8584882ea180735e3f2bb6"],["/tags/基本教程/page/3/index.html","9d887cf93164a66054e22a2decee7d22"],["/tags/多态/index.html","177eb2bc39a2ec19ee59dc8d2807c075"],["/tags/排序算法/index.html","e711c59a5b6db95042026666eeae4d4f"],["/tags/机器学习/index.html","79d8d30fc5cc056f7adf9dae3dc6d965"],["/tags/测试/index.html","7a77033170c36976adcd2abca439f1fb"],["/tags/矩阵/index.html","eb279b56172747e367a320eddee857df"],["/tags/算法/index.html","fb5dde577fdbf221b13582317376dfcf"],["/tags/链表/index.html","04be85a191b0f210de335c3774155b7a"],["/top/index.html","c1d060edeaea9868f0e744f2335b0e81"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
