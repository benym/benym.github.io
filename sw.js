/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","1a9616b282dcec5ae20b2cc83a32bbab"],["/2018/04/08/整合建立输出增删改查的链表/index.html","9afeafb1556fa2adb41df703f853c369"],["/2018/04/08/选择排序/index.html","a6f5b299f967818251fbd365700b25cc"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","f537756d85d92e03c892496dbfa9dd69"],["/2018/04/10/冒泡排序/index.html","9c71d8a453a223fb2228cadb8ff728e4"],["/2018/04/10/折半查找/index.html","bc9e5cddf8fa83ee4736429dcfe6ca6e"],["/2018/04/10/最大公约数和最小公倍数/index.html","69b39deab737a01e7d5a6e2cead468be"],["/2018/06/27/python中的Docstring/index.html","745553ea8a1f692877722c9f6239bc34"],["/2018/07/07/python中字典（key-value）/index.html","f7dc14023f6346d0fdfe929a747664d2"],["/2018/07/07/python中字符串的一些基本操作/index.html","7e2b8c47c6255c68f7fbd9a2f496ffc2"],["/2018/07/07/python中的元组/index.html","408852e9a5700c69f160ea0c486bdb4c"],["/2018/07/07/python中的列表/index.html","01df3aba9861b077e4b4d09f8272564b"],["/2018/07/07/python中的序列以及切片的解释/index.html","5d4f79f4a45a6ffc9ce9112903b20364"],["/2018/07/07/python中的引用和切片/index.html","41ee9e31c460b391dfe9273d69970717"],["/2018/07/07/python中的集合/index.html","35746eec7918dbba7d14979eb356cfa8"],["/2018/07/22/利用python进行文件的自动备份/index.html","477eb31466fdf01fcc609d81bc86c00d"],["/2018/07/23/finally异常处理/index.html","f5c44c04a306b86d2b0bb61cf326689e"],["/2018/07/23/python对象的实例化/index.html","5a6c1f4594cbc2a74414b0c6f09dabfa"],["/2018/07/23/python日志模块/index.html","41f8cbd3a577dca1d8420223ae1454f6"],["/2018/07/23/python的pickle模块/index.html","74ed165af63eed62c607b98a9431d9d1"],["/2018/07/23/with-open异常处理/index.html","cf267f2490eee0bf999758c23b9bffe1"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","1d2251044d7d4d111243d9b96edc67da"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","9d1edf15bff074a8b9b96f648e87b108"],["/2018/07/23/在打开文件的同时规定编码/index.html","951e00371746c1383512b2870ca2e460"],["/2018/07/23/文件操作/index.html","9cfa53652014e3c927dff5040c2a9859"],["/2018/07/23/用户自己引发的异常处理/index.html","e114d3fe51ac33f966fec8dedd1cca80"],["/2018/07/23/简单的异常处理/index.html","bdee46467dd40fea73f6813ed4de5927"],["/2018/07/23/类变量与对象变量/index.html","506758bdc10b8b5f4b07316330d2b23a"],["/2018/07/23/继承的运用/index.html","dd4814ae17b9fd203d8a36a6646fc624"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","debe56dcccc2a9ee3bcab88b88bd4d49"],["/2018/07/23/输入输出——简单的回文判断/index.html","94619433d566b99233229b988938d9c2"],["/2018/07/24/assert语句的运用/index.html","ef280f88ab3f02eb0e50b373c9294ab9"],["/2018/07/24/python中的lambda函数/index.html","b049e31aec7a0c1c02ef671befa449de"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","f597984dc535712e5d2b87e5ef151bf5"],["/2018/07/24/列表推导/index.html","af89d8b0607c8d392f6e86c6f1433304"],["/2018/07/24/在函数中接受元组与字典/index.html","9c3645ec43090fcfd8b32a5a7892d24a"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","ca44c0612853f1a334061ba09984b23b"],["/2018/07/24/打印九九乘法表/index.html","8f379b37b3ee08cf040dd15d02fbb771"],["/2018/07/24/打印直角三角形/index.html","17cda473e6944e4963684ccc4fb5dffb"],["/2018/07/24/装饰器/index.html","d021f243be3e27fa38b29d3439c247e2"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","3b2ba2f019b6699dfb893229dc50f1ba"],["/2018/07/25/python中字符串的一些方法回顾/index.html","f1c4556969b332ec5baf84c09d1c7dfc"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","f36fe5070f927cd7d14a2c2d580d60fa"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","d8f8bfa013c860fc22e6f02be5143246"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","60d81b96dda334812a90c98206208ad9"],["/2018/07/26/python中完整for循环的实际运用/index.html","ab8e1a6f91a9c283ba436ed0b5bb19d7"],["/2018/07/28/python中对列表和元组的切片操作/index.html","70ac27a8a542dd03f9549edfe5c4d5ac"],["/2018/08/03/欢迎来到我的博客/index.html","854ada163009a6e653a5b8e0525219aa"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","fe717b2fe9e5f519974b14f2cab033f2"],["/2018/08/07/Python中的正则表达式/index.html","4f74be129554a8a198b74b22903603e7"],["/2018/08/07/Python中的正则表达式match和search/index.html","83965eb8ad1086b6581c85bbf25a11f2"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","457ee172402da96954bd0e4d7715dfe9"],["/2018/08/07/正则表达式中的compile函数/index.html","ebcc06df2882893d4e47cac78e7889ed"],["/2018/08/07/正则表达式检索与替换/index.html","bbf9e1ba780f893d8e4c6d58932115c6"],["/2018/08/08/python中的__new__方法的重写/index.html","4028c381c89e847abe11be38896be592"],["/2018/08/08/python中的多态/index.html","674ad9af643ba214aede2bf3f30293f8"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","86bb77b502b269a247cfdfb0a28f273f"],["/2018/08/08/turtle绘图库/index.html","0537ec78f120c92cd35d3ae19100071c"],["/2018/08/08/单例设计模式/index.html","9c12d29ce3b02996ca10a648b48a6351"],["/2018/08/09/Numpy库的首次使用/index.html","bda2056d69066445ea4ec1a361e0eae9"],["/2018/08/09/kNN（k-近邻算法）/index.html","65896e7af3a5966f45cfa69aeb9410be"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","d55cd68de985fad24a25d116e37faa4c"],["/archives/2018/04/index.html","746aaa7477b18090475aaa204c7c0374"],["/archives/2018/06/index.html","a59c9e5018196ddfa1d217a6a2ce562d"],["/archives/2018/07/index.html","5014ab06432255cd25d2bfdc890bfc30"],["/archives/2018/08/index.html","5967d42ae36507641808dfe319fb72eb"],["/archives/2018/index.html","3e9e97f481795a5296ab2a9a5cf1dcb9"],["/archives/index.html","0de901406a04cd2ffd1fd3a4b6a33342"],["/categories/C语言/index.html","71ba83b493d052b00fe0e73bac72736a"],["/categories/Python/index.html","987ba3f992d25e3cb0a59d5902b25b94"],["/categories/Python/page/2/index.html","e3fb830b1c771ecdd5954be3def3e616"],["/categories/Python/page/3/index.html","631eeef591ceb874a9f29cec9176648a"],["/categories/Python/page/4/index.html","e9334c186a8235a853ff914e7c625abe"],["/categories/Python/page/5/index.html","9b40f62881e7923907a99eb8758042a7"],["/categories/Python/page/6/index.html","22b0a7cd604692a26dc29066e2d18be8"],["/categories/index.html","2104d5a4c8faba7aecd1a7a10f452ec7"],["/categories/博客测试文件/index.html","a19bdce3de44e2e895e49f1dc2be5199"],["/categories/机器学习/index.html","ea3d2b7aa1b897105d1f398180aa6edc"],["/categories/随笔/index.html","64e23357063a5a191a76c44004d45288"],["/css/main.css","57c0189a53c3aac865f60364efe86b9e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f6d34c80b64669188f276b875bda0345"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","209c6e2b18d2a011061adadc779458a0"],["/page/3/index.html","50d2d25187302912276866edba5b2ea4"],["/page/4/index.html","b497d6339e5ab3b42c1f55a62a9adb03"],["/page/5/index.html","f1240caa758a1b4388da04b70fd7a2a8"],["/page/6/index.html","6ce6154e42d3e896b673e598f698bc0a"],["/page/7/index.html","ae1b0e90373b7dd411711c4a17cb6587"],["/sw-register.js","4d49a743eea61110bffc8114b82bb974"],["/tags/Face/index.html","c72025a2ae44977b50e7b8666bc5ba3d"],["/tags/Numpy/index.html","b5f4da93e29e0128a87ed67e3d57d49e"],["/tags/index.html","bd73b84c836b963eb57081148220d9af"],["/tags/k-近邻算法/index.html","461d36b80758b37dcb07b4d5d32ccd9e"],["/tags/matplotlib/index.html","29120c439712c37a1460564a1903e259"],["/tags/python/index.html","941d8cf39997e0b45a97ba1eb32f062f"],["/tags/python函数/index.html","f80fe2c756f4c43ff2c44a68c5d94706"],["/tags/python库/index.html","ef5c0b79895da16272c7bd1d0fe8c39d"],["/tags/python异常处理/index.html","af5979ae3000529aa2fb7877fc9cb99e"],["/tags/python模块/index.html","63543679bd6a770be0d39774ff49c094"],["/tags/python正则表达式/index.html","495228c5f031007366f501f7268c09f9"],["/tags/python面向对象/index.html","3cdb38d63970e5c68b861fc8e2019976"],["/tags/python面向对象/page/2/index.html","2f76f92f481cfa537f8e0d0767c4fc11"],["/tags/基本教程/index.html","71a5500e0ba6f5aeb3c19fd966eec407"],["/tags/基本教程/page/2/index.html","46f3db1beef2d52175a0e47c2c11a93d"],["/tags/基本教程/page/3/index.html","c36f59217cb3c609b76c34a999f41a23"],["/tags/多态/index.html","314d39fef3c19d961d60cd715353cc08"],["/tags/排序算法/index.html","ed2f838892db46a18c2ee9278aa46d19"],["/tags/机器学习/index.html","48daea9dabd8c2116752fbebae873927"],["/tags/测试/index.html","3937005687217c7887cabaf77a678f1c"],["/tags/矩阵/index.html","7c00cb54e2101e81e62056bcb21398e2"],["/tags/经典算法/index.html","4efb620a9bd1a73f62e6876d2656c6de"],["/tags/链表算法/index.html","6887ac576fc844a7004ec1f2a7ce06ee"],["/top/index.html","ddb0044380eba32a50de6f9277e11ae9"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
