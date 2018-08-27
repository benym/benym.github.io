/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","ed690144a5f1d5b63d6d8d0525685f6a"],["/2018/04/08/整合建立输出增删改查的链表/index.html","96a8f163d44247ca20637d7e01fa82fa"],["/2018/04/08/选择排序/index.html","3a2f9ad05c1afe6d615b4e82f07825ca"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","93e939723744a09acf53ad5b5af6694a"],["/2018/04/10/冒泡排序/index.html","7eb0d3bbf23761e85aae666284c97acd"],["/2018/04/10/折半查找/index.html","7c11c65aa2fbfe6726bf14e9b110bfcb"],["/2018/04/10/最大公约数和最小公倍数/index.html","3ffc535f471f14798f680fe7effc8b96"],["/2018/06/27/python中的Docstring/index.html","018b0738e7ec37038bc477600b6b2816"],["/2018/07/07/python中字典（key-value）/index.html","88f9f15641480e4900769fd918243ce3"],["/2018/07/07/python中字符串的一些基本操作/index.html","2239f93fb33823307759586e09138007"],["/2018/07/07/python中的元组/index.html","83f40961d10905a7c9e8815866304fff"],["/2018/07/07/python中的列表/index.html","afdca94849b63b99fde1199d20edb2ac"],["/2018/07/07/python中的序列以及切片的解释/index.html","458c5b79f823fa6ee9bf0d8a0e9fa98f"],["/2018/07/07/python中的引用和切片/index.html","0e1f65677edd254609ab5f2cb85eb8e6"],["/2018/07/07/python中的集合/index.html","a04f057f27d2ba5876670b1d77b0487d"],["/2018/07/22/利用python进行文件的自动备份/index.html","25d29ec3b896de2283c86252c6b53d47"],["/2018/07/23/finally异常处理/index.html","9ade264def8a16c99145144e16089243"],["/2018/07/23/python对象的实例化/index.html","f85f0694e4964ffa58dd53d6b7adf542"],["/2018/07/23/python日志模块/index.html","3b957f4a980e95f8d20aeaedf56c173b"],["/2018/07/23/python的pickle模块/index.html","8cb924c1f876369004cadc955389df64"],["/2018/07/23/with-open异常处理/index.html","79a835f10c8d9ac30d819e6504426bb7"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","29b4a1ae07e57e5c7cca3a3ef5e68435"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","01cbde39c6e091f4ef7e43bc6c779488"],["/2018/07/23/在打开文件的同时规定编码/index.html","246e42be13821d6729abcf4f632b3ca0"],["/2018/07/23/文件操作/index.html","a4b03d0fb825b407f54ccfad9ae033ec"],["/2018/07/23/用户自己引发的异常处理/index.html","acafe76c9c2d88230fae2d4425107f77"],["/2018/07/23/简单的异常处理/index.html","a54a0fc814bc57b2c66c79e538df471c"],["/2018/07/23/类变量与对象变量/index.html","324fdae80f4dd631ef70134721a62af5"],["/2018/07/23/继承的运用/index.html","97f30b382a6dc336c1fde771e153b26c"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","3befaa7412ca8a0c3ad956482660a47d"],["/2018/07/23/输入输出——简单的回文判断/index.html","8d7b05314fd3922bb9fa411174a16c4f"],["/2018/07/24/assert语句的运用/index.html","7d4f2d737b9cdb2141abc293cb4b0fc6"],["/2018/07/24/python中的lambda函数/index.html","382c6bad24daf5d2efe2fb724ad9734f"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","f99d6e396e2f089b3db80f8e4a5d2108"],["/2018/07/24/列表推导/index.html","08965440cc998c35336214d30d38cd96"],["/2018/07/24/在函数中接受元组与字典/index.html","7cfacc7567a540e995bcdacdcd3b481c"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","a9f4c03d67db8636ccd43967424c3449"],["/2018/07/24/打印九九乘法表/index.html","9c4b8f727979a8292231d3370d667301"],["/2018/07/24/打印直角三角形/index.html","57818c6ce0f220944909b3a9e20f0256"],["/2018/07/24/装饰器/index.html","d3d46f5f6133b72081205cda875de830"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","973ae0520d5d1604f6a9d7188152235c"],["/2018/07/25/python中字符串的一些方法回顾/index.html","21a9935da57890e2d8a39c3939360f0e"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","324df2f4a5812f8dbe99b216ec09d596"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","dedf0362504df6ea4ac5412d67fda34a"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","980e3927f937a7911bf30c675976eeac"],["/2018/07/26/python中完整for循环的实际运用/index.html","3333334e0fcdfe815ae8e6f8451a2d0b"],["/2018/07/28/python中对列表和元组的切片操作/index.html","f71fcb9c37093e1dfec6f9c92f1b758a"],["/2018/08/03/欢迎来到我的博客/index.html","a1fd5fd0ada88b84df4ad7d3acbb4b8d"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","fb778c270de8ddbd0f91213981e44f27"],["/2018/08/07/Python中的正则表达式/index.html","345fabeba9afba2ccba0537e5639b7b6"],["/2018/08/07/Python中的正则表达式match和search/index.html","fb03655a11eaf38fe4068460862a0c0a"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","7a67362056ee399e01576446e6cdc353"],["/2018/08/07/正则表达式中的compile函数/index.html","d24db8e8afeb48927f9aab49edfb589e"],["/2018/08/07/正则表达式检索与替换/index.html","33cf64334b4b9cfdbedfeb9bd4f0ffe5"],["/2018/08/08/python中的__new__方法的重写/index.html","1cc124d83a1211a75b58eed0b8c65c5c"],["/2018/08/08/python中的多态/index.html","594982e98224c5ae0af6ef4ea5a21532"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","e4c8c82027dfecc74b4b514fa994893b"],["/2018/08/08/turtle绘图库/index.html","f7b1f430a32545f74a904414bece071b"],["/2018/08/08/单例设计模式/index.html","f6d2d4667d632445e3ab5fa18af4984a"],["/2018/08/09/Numpy库的首次使用/index.html","80fb35cd037b55417604513b68e4288c"],["/2018/08/09/kNN（k-近邻算法）/index.html","7398ca48b75c190428900b0f5967b877"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","43e006408250925ecdb0c9e41a0c34a5"],["/2018/08/16/kNN识别手写图像/index.html","e93c3058b3f979b36fe7a7fe4117ef08"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","54d92fcbb698c6cf514a9240030c87d1"],["/2018/08/22/Ndarray对象/index.html","58aea65666262e08d7bee799d3bb243f"],["/2018/08/22/Numpy中的数组维度/index.html","9b9c86d018816bb6bf8bc2074eb53a5c"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","004bc0ce643a157c179b4e320dd68ce6"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","50d71584d00c7d4a5a905a602a50624d"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","8047e7118ca2e58ca95270e618106d61"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","3bc4b297e6984804024061a0c7e42575"],["/2018/08/26/一些TensorFlow的基本操作/index.html","cca5c8d0545b25d72a9b25c52ddf83cb"],["/2018/08/26/交互式使用/index.html","101c12f52d9b0db019ab7cfb0ee3b2a3"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","405ee21e18f5ff7b65cb0c89dbb09cbd"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","f4ef3047fee600bae53eb3ba40e2cb19"],["/archives/2018/04/index.html","c26611012270ba2950e75fcb5fae90ad"],["/archives/2018/06/index.html","1ff5b9a5edf0cf0f48cc20f758fe27d9"],["/archives/2018/07/index.html","37af5ef393755ec352280de3dcf2596d"],["/archives/2018/08/index.html","a9a1f90638f06d06c03b06dc540f6cc4"],["/archives/2018/index.html","85576e7b96f55e54db8d39f744419754"],["/archives/index.html","4998c12f90e4312c88f0968f230668d7"],["/categories/C语言/index.html","ba88a9c05eab8c4f728751b97f2feda5"],["/categories/Numpy/index.html","218f8dd443d0bc6619f2eb8d107bdcfc"],["/categories/Python/index.html","926bc915bb27c8de618325121bf72168"],["/categories/Python/page/2/index.html","ee1ad242d4da6884676fcc3f9c12d653"],["/categories/Python/page/3/index.html","1c544c6b86dcfe0c6bb751aa21c5305c"],["/categories/Python/page/4/index.html","b2a181b9ba436e8181ac25e28254c155"],["/categories/Python/page/5/index.html","3c0fb1d017495fab423a971a2fbde30a"],["/categories/Python/page/6/index.html","ed9a34fe9bd5312e4fa35e044fb06e82"],["/categories/Tensorflow/index.html","547bb6db9de0150b0a8833fc09c09ef0"],["/categories/index.html","fcb673a00371285cc3246a7cc5d57949"],["/categories/博客测试文件/index.html","c88dd0ad138a9fccdb04eb73fe70d1a9"],["/categories/机器学习/index.html","3218731ad1fa2d90b37c0e3d57fa4a5c"],["/categories/算法/index.html","110bb2136de197ed23990eeb5f2afd81"],["/categories/随笔/index.html","148e8018d0be5f5691c05c37285744ad"],["/css/main.css","27668761e73bc9d0faf913e89fb2e395"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b4111ec6a34ff75a73dbe4e0ffeab9fd"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","73796c0fa3ed5961d69c95d1bd79144f"],["/page/11/index.html","85e82f70c8835927200ec7f80bb144b9"],["/page/12/index.html","88c740d5bfe175c1959503f9ae424e5f"],["/page/13/index.html","6ec867df88d4a1122bf94223aceb7a31"],["/page/2/index.html","0b62e9e7404f2da6e24c189123b13674"],["/page/3/index.html","3fb8669f8ee40d8a3da4741f111f676f"],["/page/4/index.html","eef249b52b1e6df4e49aef0be455a6d3"],["/page/5/index.html","b309f94936b0ee90d3c5eba6d7862330"],["/page/6/index.html","3f735af3e329021bb4c32c7912bb95d1"],["/page/7/index.html","f92528a0e5bd01d5e9dd19482ed82fe0"],["/page/8/index.html","5c497b340bd3ce1f104ff452dab02523"],["/page/9/index.html","001b59b7a424f9e6bae8f8920eac7bde"],["/sw-register.js","30123c4345318a46923f4444303ef0ef"],["/tags/Face/index.html","4ee0e09b39cc29284362a10417ee5c0b"],["/tags/Java/index.html","f16efeabc9306b7773a86cbac575f66c"],["/tags/MNIST/index.html","ffae229e824d601e1723407ed742a676"],["/tags/Numpy/index.html","d01f4a77b0022186f6cf6aeabba99faf"],["/tags/Tensorflow/index.html","d0b0fbbdd04457cbc5f3f6dfc292a0c7"],["/tags/index.html","21e3670671ffc2bda45b06db0921a6ca"],["/tags/k-近邻算法/index.html","1f38cca0514ef90a5372b09af33ad35b"],["/tags/matplotlib/index.html","7cf9900b10144f7d38eae58528568628"],["/tags/python/index.html","93554fb0bf4b2381d2013381b4ff3927"],["/tags/python/page/2/index.html","62da67548a635cd85f81cd45e4f41ff5"],["/tags/python函数/index.html","a843d187ceb5784e6ba7a04e83e56591"],["/tags/python库/index.html","e13c2625a42d52882740d9ba9592b197"],["/tags/python异常处理/index.html","23805ef331c45baccddd8dc703de9d0f"],["/tags/python模块/index.html","ccaa160ebe65a7d193c2264fda525878"],["/tags/python正则表达式/index.html","72a4a4405e293ca48cc6f3c07b64aea9"],["/tags/python面向对象/index.html","7888d932f3efa138bfa1456d815a4d08"],["/tags/python面向对象/page/2/index.html","de8f70cf4a6e27684e9ec9346d80def8"],["/tags/动态规划/index.html","f215e0131b897f5afe345525e30ab432"],["/tags/基本教程/index.html","1895c7d8efd543d07ca56d2519444ac5"],["/tags/基本教程/page/2/index.html","25061f6f9ee9452ff025f23cb9fd3f15"],["/tags/基本教程/page/3/index.html","944b7190d67704b0dc18a002cef02f1f"],["/tags/多态/index.html","985feaf6e1b76eace5dff004f8a50a95"],["/tags/排序算法/index.html","e7542da211973596a43a99a812a555a9"],["/tags/机器学习/index.html","3d0d6b3313c07a148ef821bcc59e1f85"],["/tags/测试/index.html","594fa1abe3b8f532bf53a2516ca240b6"],["/tags/矩阵/index.html","2141b5d73c58bbfdd679b6e2924e1673"],["/tags/算法/index.html","21e12a26fbe7f7d4f1aec7512eb9e9c0"],["/tags/链表/index.html","54213fae76f30c34d66ee2b65742133f"],["/top/index.html","16c3a800fba4e3255899027efb3fd7de"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
