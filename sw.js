/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","ad679d5294cd7ff7a7d81006bbeb614e"],["/2018/04/08/整合建立输出增删改查的链表/index.html","d3d2d178a5f9f44886a300859f73f13f"],["/2018/04/08/选择排序/index.html","a686fbd76f3eed1d652e93e9d6904c59"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","d00d914d8920ad88cf2b46bfe81f966f"],["/2018/04/10/冒泡排序/index.html","ac953dc11905f392edbfda8b8f32e10d"],["/2018/04/10/折半查找/index.html","dc190494c663c5cf630149d4828a3f20"],["/2018/04/10/最大公约数和最小公倍数/index.html","e736e8ad94f9b13e7bc93661de31324d"],["/2018/06/27/python中的Docstring/index.html","7d5f251947a6b88d43ec2449f60fa3ee"],["/2018/07/07/python中字典（key-value）/index.html","2fcc45797164e6d4056ad9a57bd99fb5"],["/2018/07/07/python中字符串的一些基本操作/index.html","db668f3007313326f460ebf5a0f8fb09"],["/2018/07/07/python中的元组/index.html","8ebfa9e30a8e9a78dc40f03ba3237487"],["/2018/07/07/python中的列表/index.html","cfd305d761a8565d4c16873c0423d701"],["/2018/07/07/python中的序列以及切片的解释/index.html","b16cdafd07642fb2bda75fd6355a1bc5"],["/2018/07/07/python中的引用和切片/index.html","678d21a6ecba44fbc8c580ab229a25bd"],["/2018/07/07/python中的集合/index.html","a2c9fc8977c122fa30c74cba5b570e84"],["/2018/07/22/利用python进行文件的自动备份/index.html","d57949de8585d19df5d3e1ab98c3acd9"],["/2018/07/23/finally异常处理/index.html","fd7d19fa60bba86bd9cef9f249674db6"],["/2018/07/23/python对象的实例化/index.html","b6ac7a3d08c95ad0a002a503ec0870e5"],["/2018/07/23/python日志模块/index.html","03467b97c91faf718bde16efd1de5acc"],["/2018/07/23/python的pickle模块/index.html","1cab6193185970513b612986de37dab6"],["/2018/07/23/with-open异常处理/index.html","5ca19f76db2fa31e87b2641940e1ea31"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","9085c8b01455e607150129f6cfc04de0"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","fabde9cb4b9d6b4e1936e635c46dd857"],["/2018/07/23/在打开文件的同时规定编码/index.html","de7eae1692a6dc9ef86fcaeefa0695aa"],["/2018/07/23/文件操作/index.html","59c9a6ed48c1b0ca6362d0466c730b53"],["/2018/07/23/用户自己引发的异常处理/index.html","0de06e5335ada11ae8827106585b9c08"],["/2018/07/23/简单的异常处理/index.html","b79ef2a884518efadef12bbad49d2705"],["/2018/07/23/类变量与对象变量/index.html","44be85c2e2876893a12d7817b844e5d1"],["/2018/07/23/继承的运用/index.html","318ab3157a1ebe04f47728f08374b903"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","9d0c053b01e95d98db07b7ccbb51dbca"],["/2018/07/23/输入输出——简单的回文判断/index.html","c33f1df3eeddc2e83ebec12c097e5df2"],["/2018/07/24/assert语句的运用/index.html","a4ef3b74a94d50462d69310a53f0df12"],["/2018/07/24/python中的lambda函数/index.html","bb283d48994ea13f4e373036c4298c44"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","7271bd26d9564c75d6efee516085c0a7"],["/2018/07/24/列表推导/index.html","9ce977c67c52ada423eedf09670d616a"],["/2018/07/24/在函数中接受元组与字典/index.html","aa00d63ee0ec9ca60e76e3fbac13984f"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","ce1ad6dfe464c3a061a8f890960b841b"],["/2018/07/24/打印九九乘法表/index.html","7f92f6935f20a0f6bffd3305f834f0df"],["/2018/07/24/打印直角三角形/index.html","dc0ff5a4e8ef39725316a3ea80524d82"],["/2018/07/24/装饰器/index.html","916694c45a7f8920220bfc55b37248ee"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","216a824533271705ef3ef8dae987b788"],["/2018/07/25/python中字符串的一些方法回顾/index.html","9e11d0d7b0312cbfa0ac12538959e4de"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","34604e7344faf7457aacff5272c7a262"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","54ed7d791fd39c3850c5374ca4cee01d"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","eedfa0d85931fc600444caa918ef95c7"],["/2018/07/26/python中完整for循环的实际运用/index.html","f7ec077e710a1fb63059a805c01aea57"],["/2018/07/28/python中对列表和元组的切片操作/index.html","c66aedb3a51bf62fa908164f0ff97d08"],["/2018/08/03/欢迎来到我的博客/index.html","54e9ed9c8832c43f320f6d03d90de189"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","27a050a7a0671e4ae13e09b794182063"],["/2018/08/07/Python中的正则表达式/index.html","8a96ed8ccd3349ed85d9a99485402fa7"],["/2018/08/07/Python中的正则表达式match和search/index.html","0313583283caf6642398aef657353efb"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","4c078841d647b7c116599f31de7b731b"],["/2018/08/07/正则表达式中的compile函数/index.html","8f80eff66b1d9f43bedceff9b4f7deb7"],["/2018/08/07/正则表达式检索与替换/index.html","901d72fc1f7e78db19d76dce12d39f82"],["/2018/08/08/python中的__new__方法的重写/index.html","fc05516165da41ee91cafe3dedb7d8bf"],["/2018/08/08/python中的多态/index.html","cbdc3948021afee40c98aaed17ccb72c"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","ebdfff8331ae51f5b269924bad39abb5"],["/2018/08/08/turtle绘图库/index.html","bf97e742b6005300a8c0f1a4269156ea"],["/2018/08/08/单例设计模式/index.html","a6417ece3310d184c6bb709cadd9b2dd"],["/2018/08/09/Numpy库的首次使用/index.html","972ca49565c24eef9b45d4d246e9db78"],["/2018/08/09/kNN（k-近邻算法）/index.html","37c6290f8d2b063a956b8b3549f81a51"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","efde33f93707802c52da58e672ea96d3"],["/archives/2018/04/index.html","47eb7d7e2705832a0b5b9a8ed3c6bafd"],["/archives/2018/06/index.html","9127309a310d7f42fddac18741b07d10"],["/archives/2018/07/index.html","0e59a07694b02fb5a3ed32e12531ecce"],["/archives/2018/08/index.html","444fc1bfaaa089fbdbebecf890ad648b"],["/archives/2018/index.html","0377a34b39ba7eb40ea541b150d7b675"],["/archives/index.html","3192f48b8a713d2a056e8f09b8697ef9"],["/categories/C语言/index.html","04330257c220c1025d2f486a535e3e3b"],["/categories/Python/index.html","a6425b52523f85f4e8c5f43623ce3ae2"],["/categories/Python/page/2/index.html","872de8918acca13463182ab1acf0e7b1"],["/categories/Python/page/3/index.html","be5092de0080370b25e56a9c8eed822a"],["/categories/Python/page/4/index.html","d14a3acb7c9fb46093a15cd4eea13a6e"],["/categories/Python/page/5/index.html","3e0362add2148c30b1f4dc8da8b9a592"],["/categories/Python/page/6/index.html","1af7521070c8f591459cce443af0823a"],["/categories/index.html","9dd0a695b2b1cff5166fe225705d2a1f"],["/categories/博客测试文件/index.html","b7d345dafb59d5f2cc7391a0d8dda73a"],["/categories/机器学习/index.html","4090365d262a3d0bad31c115468c46c6"],["/categories/随笔/index.html","187d95159545d6679617e05a35013496"],["/css/main.css","49cfa756be3d324cebd8effee1501cdc"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","05a6686585a5afdec7e54621368d0434"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4a3470dd6182b865f19582794b14eef3"],["/page/3/index.html","a2f7132b10d52fd25a82ee0ba654547d"],["/page/4/index.html","1f913368abfdd25f7b38079112d7453c"],["/page/5/index.html","219c2a1ef2ffb65ec41409a364613534"],["/page/6/index.html","9238f0b01545a7db86a47f1d0cd9a567"],["/page/7/index.html","a358b896814788a410d019d917933679"],["/sw-register.js","f1d1f59bf84367a3107ef39ea3824d42"],["/tags/Face/index.html","a80975d5969557e3e87f74aac252dee6"],["/tags/Numpy/index.html","762cdb2936fcd37718c9f5ccf0bcde40"],["/tags/index.html","68d1479be01dc05bcb9a9c4d8f0caca4"],["/tags/k-近邻算法/index.html","ef54801a63b73efbc7d43c0962c36703"],["/tags/matplotlib/index.html","41c0f82d8536ba098eec301f38da9bad"],["/tags/python/index.html","941ea1455f410c207b98cbf26aa387f1"],["/tags/python函数/index.html","eebf1e7d234c895c85cfc4ae1b769480"],["/tags/python库/index.html","e922c047581737b0ceea6b5729b78aad"],["/tags/python异常处理/index.html","e64940fb27d0ea565d938f423e32734c"],["/tags/python模块/index.html","b1697f01b3e880dd731c5ce64d2e5cb3"],["/tags/python正则表达式/index.html","ac6509915a28c1637c2159dc7b3bd80b"],["/tags/python面向对象/index.html","ecbf9d2fe090f18d510000754c2b88c5"],["/tags/python面向对象/page/2/index.html","8dc8e21a05616dabf64525b95c13463a"],["/tags/基本教程/index.html","f578f05ad3af434a0cbd4f0614df33ed"],["/tags/基本教程/page/2/index.html","34f9ad28fa8764d98178bcdfb3d71892"],["/tags/基本教程/page/3/index.html","39eea14d79dcc459eb2a6a3300cce071"],["/tags/多态/index.html","b4fdb08c0e8b9b5ce12b4df198caf313"],["/tags/排序算法/index.html","c8c2d6b401708bf4ce37885ce2445cb0"],["/tags/机器学习/index.html","1e35cb27c669b50880a403b687792d8a"],["/tags/测试/index.html","ba2be4c606ce43b0bf540d0ec119733a"],["/tags/矩阵/index.html","cc566ee9bc81b00d5220e0eb09699a74"],["/tags/经典算法/index.html","35518b3c976fa142143b0cf88b9a2662"],["/tags/链表算法/index.html","6cc607923cb5d3c4c9407cd1a4623fc1"],["/top/index.html","a4290d14a3326247e8a0023db5b9bd8f"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
