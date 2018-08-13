/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","4494728a16b954d615f1822c1f75c04e"],["/2018/04/08/整合建立输出增删改查的链表/index.html","1f200518810bc3fddb655d53a4f54dab"],["/2018/04/08/选择排序/index.html","48f55635425513f56376adc9bd658dbe"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","f0554dd963d6b7e2a365913ec9462b26"],["/2018/04/10/冒泡排序/index.html","21ea41e5c5977e4ab134570f01615c5e"],["/2018/04/10/折半查找/index.html","4126cbd0e017dac5041d6072b7ec1f50"],["/2018/04/10/最大公约数和最小公倍数/index.html","4117612d87f44c8745bf7628031bff44"],["/2018/06/27/python中的Docstring/index.html","18240fb4904b2e93bc960a6c29b6d9e3"],["/2018/07/07/python中字典（key-value）/index.html","204efe76a9c01cb9c093a319c6e6fded"],["/2018/07/07/python中字符串的一些基本操作/index.html","dd6ddff04cdf277fc6b61337a1d9e1ab"],["/2018/07/07/python中的元组/index.html","96eacd26b69a07e8652c11ee482f2fcb"],["/2018/07/07/python中的列表/index.html","5bdc915af196e56075ff7f09505a6d26"],["/2018/07/07/python中的序列以及切片的解释/index.html","2a9539a4ab7906fbbad2f82901831842"],["/2018/07/07/python中的引用和切片/index.html","21dbc9f6072893a545cb70613570b8c2"],["/2018/07/07/python中的集合/index.html","34c3b155204fd423c155988e83fc4364"],["/2018/07/22/利用python进行文件的自动备份/index.html","9baca8e0d560f77ded8f02c97888482b"],["/2018/07/23/finally异常处理/index.html","6552ac50706b8e6e98c195b57db327c4"],["/2018/07/23/python对象的实例化/index.html","fba6ca28bb88858692a39347dedcec73"],["/2018/07/23/python日志模块/index.html","da44c89a49bc22aab0a20e07f5065548"],["/2018/07/23/python的pickle模块/index.html","8256e56528402834fad7daf8a480986a"],["/2018/07/23/with-open异常处理/index.html","262178ba1f37f70a3dd48d12eb82bb42"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","1f72a99a980fc30a4f7fc9469a31fbc1"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","33463aa8d7ae9982e0a1007734c0897b"],["/2018/07/23/在打开文件的同时规定编码/index.html","6d617d94cf7c6990c020b05e053ca48c"],["/2018/07/23/文件操作/index.html","8b35174eb8890a7ae25075ec1084fe9a"],["/2018/07/23/用户自己引发的异常处理/index.html","164d95a839df2ba1039293185f7a8561"],["/2018/07/23/简单的异常处理/index.html","268fc1bb03727f86b8180d8b3e2cfc5c"],["/2018/07/23/类变量与对象变量/index.html","5113b9eaa90aadef8e4b5d24e933261a"],["/2018/07/23/继承的运用/index.html","60cdba464b236098f7aa6ce39c5ebb01"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","2567eefc3d86ea24aad64bed32dafcd8"],["/2018/07/23/输入输出——简单的回文判断/index.html","95c2d5ca64808507344dd2f0c1e5d996"],["/2018/07/24/assert语句的运用/index.html","306f6cb8f2d3637d3ffd81bdf32e8cca"],["/2018/07/24/python中的lambda函数/index.html","1040817a9384561363b3f36fd4c577aa"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","f4dc4131e4056bf555985aa9d1b410e0"],["/2018/07/24/列表推导/index.html","5962dfd75b4345036072c39909be892f"],["/2018/07/24/在函数中接受元组与字典/index.html","5316f2ffcb3015fb96f2c0a5b9c1f1b4"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","4b6a89d014e571150191b79e92a33c7a"],["/2018/07/24/打印九九乘法表/index.html","c99b06541523b88b37f5359eda2e767e"],["/2018/07/24/打印直角三角形/index.html","07ed1da5c87d42784b42efc80920b592"],["/2018/07/24/装饰器/index.html","3bfa925b0598ca4f33f9255e9d88ec45"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","332aa6685c01e570c927c10b340e9db5"],["/2018/07/25/python中字符串的一些方法回顾/index.html","0662a9c26740f7f8580f86fc55b3523a"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","2803df67395fc868b0165a0ea293c06e"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","6939814100b6faf4bab96a43ff92e637"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","303f4f334bdb13c05cf25e3d2e2084f9"],["/2018/07/26/python中完整for循环的实际运用/index.html","0bc34fd71aacaded04a157242ae1d3ad"],["/2018/07/28/python中对列表和元组的切片操作/index.html","454718c7dbe083b0e3d9481ea3baaa27"],["/2018/08/03/欢迎来到我的博客/index.html","789826ece5d264584d7ff3e4762b54a5"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","2dc05cd403fff9e06183a58ccf6d39e2"],["/2018/08/07/Python中的正则表达式/index.html","78ce7eea6249fe7c5f7c9649c3726813"],["/2018/08/07/Python中的正则表达式match和search/index.html","0f5c9f2d7c9ae83cb1fa1887a21ff41f"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","3ccf19f35d0626e7ae0ac1c768f258de"],["/2018/08/07/正则表达式中的compile函数/index.html","5ed9de1398f81b897cbf7c7c310b4473"],["/2018/08/07/正则表达式检索与替换/index.html","292c9b6abb5f1a2f6afa5a2cfeca23c4"],["/2018/08/08/python中的__new__方法的重写/index.html","be600e355a543a407c01144cf84f3504"],["/2018/08/08/python中的多态/index.html","355d0610c6da8bc966d74bf8ac7874bf"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","cfa2dd9a8a1ad593756af681b185eb86"],["/2018/08/08/turtle绘图库/index.html","bfe85fc248d3462137ae1a4fce258184"],["/2018/08/08/单例设计模式/index.html","ef52ca0d9ffcb9a0d042450c8c066ae4"],["/2018/08/09/Numpy库的首次使用/index.html","d989c66102b12fb429431e162ba3b50d"],["/2018/08/09/kNN（k-近邻算法）/index.html","69809da543a74b44ccb40a3266ca9e27"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","e582ab4c1c72a6d5564a78d5622509db"],["/archives/2018/04/index.html","b232ae81e79d4c9389a40009f396c9c2"],["/archives/2018/06/index.html","80a4e3807d699c46091486fc8001c682"],["/archives/2018/07/index.html","1614e7d23a7296a4d5ed92e9bc79d2c4"],["/archives/2018/08/index.html","e99ebf8613ee24be39584122824a98f2"],["/archives/2018/index.html","46fb4c65a9c18bef27460403d27ced1e"],["/archives/index.html","67cb456381f0f427fd92acaa97268c44"],["/categories/C语言/index.html","ad8848562e22911f170b2d7f420ea551"],["/categories/Python/index.html","7a84f7c886a93ce080b596a3001a7c9e"],["/categories/Python/page/2/index.html","1d8927ce3fce1d58eea67a2ac8f391ec"],["/categories/Python/page/3/index.html","52e99d4601438ebecbcbf7932f8b0403"],["/categories/Python/page/4/index.html","cf00fca271e3a792539d14aefaee1a5c"],["/categories/Python/page/5/index.html","4a2869381df830816379d3c86e833323"],["/categories/Python/page/6/index.html","078c31a67a2ddf438b999252c5fe49b3"],["/categories/index.html","d5b623bf047f6c29e60f474d88962a6f"],["/categories/博客测试文件/index.html","9c3855d9689832b7b7ba593410721b20"],["/categories/机器学习/index.html","a6dd9bd45900addabe5ccdf97e537fc9"],["/categories/随笔/index.html","731542eb2315ee374b9ea567991cf6c7"],["/css/main.css","5178fd70f92a47d89495aff301d2db1e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","db1da451ec0f59883d85104e893de85e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ba6bb974f6d5c3cf8532a5e16e26e9dd"],["/page/3/index.html","46ba5d21559fbc10e651091ee72b3f04"],["/page/4/index.html","86d75d1648d069b8b293caa4a477ce76"],["/page/5/index.html","ef280bad1604fd4aa36923a9838ed703"],["/page/6/index.html","989caee741ddbc77faff9ac5c582bd14"],["/page/7/index.html","83d6828757b58b42492579f1f817ed58"],["/sw-register.js","65e4deadb1dcdc6cbf1490993be5f6e1"],["/tags/Face/index.html","77d2c24d7a86948aa48910a4d3634cda"],["/tags/Numpy/index.html","169f1766a6476f6dd78ae9c861a81852"],["/tags/index.html","0f028981affef336866ee963fbdab9ad"],["/tags/k-近邻算法/index.html","dc8ed062b3855720df1466342ee99446"],["/tags/matplotlib/index.html","32342a1d16e2f050284bf488f95cf449"],["/tags/python/index.html","58fb4dc52bea4993814569b30a744a28"],["/tags/python函数/index.html","7995e50ef6d36c105db4b02146234b48"],["/tags/python库/index.html","16ab5f60c15ef3ef7961a847027ae163"],["/tags/python异常处理/index.html","196769e876f74e54fe8022af2381fff6"],["/tags/python模块/index.html","c08cb96da512a5243be14284423048db"],["/tags/python正则表达式/index.html","9fba2a306f52b884abd963c726553012"],["/tags/python面向对象/index.html","9f1aa2002f9ef174d2803ec8b0cb95e6"],["/tags/python面向对象/page/2/index.html","5986b4aabbccd6dc57ccec9b913d6c4e"],["/tags/基本教程/index.html","cbe81cc63f50a0e235df63b18710d335"],["/tags/基本教程/page/2/index.html","6db0c6213422138cfa686692d57948a3"],["/tags/基本教程/page/3/index.html","e98cb7edcd85bb08a28a686258dddaef"],["/tags/多态/index.html","856a29112c2194543563ce708e69037b"],["/tags/排序算法/index.html","8322f7b3dfed7d924823a05067d83dbc"],["/tags/机器学习/index.html","7f601f35f5eaa9939d9328db8364f9e2"],["/tags/测试/index.html","babb87ebe7d69d4ba19abfc35f5b6cdf"],["/tags/矩阵/index.html","74a08f17fa953088758bbad3d8b3fc86"],["/tags/经典算法/index.html","856936cfbfd355c9c325279eab561bbd"],["/tags/链表算法/index.html","57ffb2a3ecf8f18d483f59ce196201da"],["/top/index.html","7d2ad1d2fc69c69dde3e945b637e5799"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
