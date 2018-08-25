/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","58024afb090728118b68e9207d718230"],["/2018/04/08/整合建立输出增删改查的链表/index.html","8e350113a2b6390dcce2637fc7655687"],["/2018/04/08/选择排序/index.html","d8aacbf1c1238f461b7fbf86579fc7a1"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","510e8593561646db859445cd1f32e980"],["/2018/04/10/冒泡排序/index.html","262f42bd823ee19e624b6423060e6603"],["/2018/04/10/折半查找/index.html","9ab8ed2f9b5efb90bc8c96e7eaef2090"],["/2018/04/10/最大公约数和最小公倍数/index.html","f2a6f622b3213e30bdd2862122d52f22"],["/2018/06/27/python中的Docstring/index.html","cdf68db435a91c4f7c1632f415408d94"],["/2018/07/07/python中字典（key-value）/index.html","59bfd51f1dc6959b30499c7584afe7f6"],["/2018/07/07/python中字符串的一些基本操作/index.html","8a6d824f1e71268a83931b4d820a5517"],["/2018/07/07/python中的元组/index.html","30ce689331ab2747fa16f07fe6058c5c"],["/2018/07/07/python中的列表/index.html","35e417f30761475e3a5a0ec0508aca5b"],["/2018/07/07/python中的序列以及切片的解释/index.html","4d36e7f4f385f4ab7d3d228430d87b31"],["/2018/07/07/python中的引用和切片/index.html","6b26e09046cd101b9d9c79b09192e588"],["/2018/07/07/python中的集合/index.html","6cabf160d75db82d80c2691b277ffd44"],["/2018/07/22/利用python进行文件的自动备份/index.html","33ed5cbc9c1823cb7e909a168084f6c7"],["/2018/07/23/finally异常处理/index.html","cf45c1aa5f5c2cff26e02ecc0454b36e"],["/2018/07/23/python对象的实例化/index.html","f1385db902caadb2083e9a342a332ec7"],["/2018/07/23/python日志模块/index.html","0c426fd1f2d337437406544cc6547557"],["/2018/07/23/python的pickle模块/index.html","3627419efe4e5cfd31dae441c4ed54a5"],["/2018/07/23/with-open异常处理/index.html","7f470b75897c201934ef5e40afb8285a"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","c8c96a7070239a36e9d87d74d2d63b82"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","c60bfbce7dfef74e26d984e22b46d8f6"],["/2018/07/23/在打开文件的同时规定编码/index.html","42ba7e6f6b4ed43f0a5fa2eb68b6d9d4"],["/2018/07/23/文件操作/index.html","143473c38bbb4a3d9ae37103d118b763"],["/2018/07/23/用户自己引发的异常处理/index.html","a8405a750b3bf2bf7bf68d8faab57676"],["/2018/07/23/简单的异常处理/index.html","dae4193397a6e5ebe7b22aaf29364cdf"],["/2018/07/23/类变量与对象变量/index.html","f14d86da8aa8cfd573b785ce7b7910b1"],["/2018/07/23/继承的运用/index.html","4d56ec92ef1b7c4cd0f5abc256adf8aa"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","dca77968458eee4d2f675540b77af045"],["/2018/07/23/输入输出——简单的回文判断/index.html","140d89455c8d396d34f5650f7b1bc965"],["/2018/07/24/assert语句的运用/index.html","063b2dcdf958b65685174a528cef3bad"],["/2018/07/24/python中的lambda函数/index.html","f29b7d88402affeb464f9220a1580495"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","e8e37afd3a8ffb0650290fb28f494ce2"],["/2018/07/24/列表推导/index.html","897a4065310477579f212a092072b753"],["/2018/07/24/在函数中接受元组与字典/index.html","cd6e709275e38fbcc87119fe8bd44c38"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","5f361f309400b34bb7639b48b44c90cd"],["/2018/07/24/打印九九乘法表/index.html","3b5ad7c05a0a70d5912750801a871ea5"],["/2018/07/24/打印直角三角形/index.html","d747fd53fa40a4645d23b271f7ba80f2"],["/2018/07/24/装饰器/index.html","727e0f3a8b505b847d6c18290b91ff4d"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","a4465729fcb61ab945cbc65e72f4bae5"],["/2018/07/25/python中字符串的一些方法回顾/index.html","27d39b757372b888791b865658ad8a23"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","6581103047ce2029cd661e50d4d29687"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","22a562132cd876f213f7a24de320f62a"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","13ed397fec96da56a25c4666af0fa7f5"],["/2018/07/26/python中完整for循环的实际运用/index.html","cc20caf3fd101b1eca57e47e55619e26"],["/2018/07/28/python中对列表和元组的切片操作/index.html","b66de1f515e6e9e3c0d32df44d177f9c"],["/2018/08/03/欢迎来到我的博客/index.html","49b31bc79c934a1e9a8b2a52d669b009"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","ffeac69726497c38086752500c2ae24e"],["/2018/08/07/Python中的正则表达式/index.html","ae27157ac014e4e78f1a123fe4b236a1"],["/2018/08/07/Python中的正则表达式match和search/index.html","da95b9f478191aeeb72f1f0cd2f47480"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","b8c826e73881ea96f0f7b2c8b5cc8b78"],["/2018/08/07/正则表达式中的compile函数/index.html","fa032a18c8aee2c4bbf005163ae150a9"],["/2018/08/07/正则表达式检索与替换/index.html","35861cf31f472f7f25d7b270c88abef8"],["/2018/08/08/python中的__new__方法的重写/index.html","cde85a5d0496160ad0eb713f660212ad"],["/2018/08/08/python中的多态/index.html","8717ab3da6ebd50210607ae82e19acc7"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","731ddb9c104845b66e95cf8ece6ed22e"],["/2018/08/08/turtle绘图库/index.html","ea724cfb9ba0e134443e8bf878145ce6"],["/2018/08/08/单例设计模式/index.html","740f216ecf201a355fd4da0a3b21c69d"],["/2018/08/09/Numpy库的首次使用/index.html","04ebd9c31d1bcaa4b031c5ce5fc69e8d"],["/2018/08/09/kNN（k-近邻算法）/index.html","6742e4b6b0618c96f9f02f67531ec649"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","72b1e28436b98728a2d7b5545d8fbf38"],["/2018/08/16/kNN识别手写图像/index.html","9a5d73fee22feaf3e9071e2095117cb2"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","daaf69cbfaaf7ec04e5ee732ebee607c"],["/2018/08/22/Ndarray对象/index.html","a67c643bae13088bf3d9cc4c3a9652b1"],["/2018/08/22/Numpy中的数组维度/index.html","e2c05696db4918592ac722cae31b2cf2"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","7489046c4c4a569d746969300c58ef20"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","a667531d035048a7ccad77e7ddc9de8b"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","b667eedc6b821224554796e82fdc0300"],["/archives/2018/04/index.html","67632be480c720cff7be20dde164c08b"],["/archives/2018/06/index.html","df9819aaa199b952c34548aa4132954f"],["/archives/2018/07/index.html","ea972ec00a9987c1d0472d33b7518b5f"],["/archives/2018/08/index.html","1de562956171fc5944714016de9eff1e"],["/archives/2018/index.html","f31c5b7a74c0d81c9f243098d95a2e75"],["/archives/index.html","74f3e0cc69fa54182af0d877a810daa5"],["/categories/C语言/index.html","ca7e58180374bb11ff60a282bb00ff1c"],["/categories/Numpy/index.html","82f0d071708f377c18fde6216ab80980"],["/categories/Python/index.html","8ef42d7406a52a581aebb4f2af21520e"],["/categories/Python/page/2/index.html","e5f6fe048dcc26c9a2592293dc592846"],["/categories/Python/page/3/index.html","065eddfe16fb3d691cb7bc3d1240f09a"],["/categories/Python/page/4/index.html","54a9a834de7f26fc746348710a183020"],["/categories/Python/page/5/index.html","0b6bb896a8bb25d2b2a67f77ed352682"],["/categories/Python/page/6/index.html","00e0fe85706d93efc4096fb3e21cfd9f"],["/categories/Tensorflow/index.html","5d709be06fa8349ca57399275b551db0"],["/categories/index.html","8aca3493dc0a007d518fa8e561feb269"],["/categories/博客测试文件/index.html","f9794ec199159016dcac380333adf899"],["/categories/机器学习/index.html","904398d4c8d6d37855f6f9a8c256cbfb"],["/categories/算法/index.html","7dc7b7e196c81e6285ad6e254b455e3a"],["/categories/随笔/index.html","7211ebda546b89ae742503a1f2326063"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6e2c489752fbf267e83c6298f484a115"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e6dd04e493fc9b71fa1b8308bf737adc"],["/page/3/index.html","6a47fdf8a7791988c117680df3ec8c9f"],["/page/4/index.html","3acffad9560c96e15bf5cc3818b7a4de"],["/page/5/index.html","ff27d09a489384b1c2dbe32b0a1140e8"],["/page/6/index.html","f69c12441776182d8c2149796ae10ce0"],["/page/7/index.html","bb5eb4c3759eba47e722992ccfdc372c"],["/sw-register.js","b36bf3f44733604c6a4fb94ddb2dc4dc"],["/tags/Face/index.html","176ab550396baa9942729d00e171fb77"],["/tags/Java/index.html","575c4161d7033a2fd7a28e95bf53f692"],["/tags/Numpy/index.html","b3b74ef9f31b340a40136ca54a75df61"],["/tags/Tensorflow/index.html","3194a0de629caa424b87d53561fa1875"],["/tags/index.html","aee7fd6b76dfa9d149995fcd88ad026d"],["/tags/k-近邻算法/index.html","b363d4712a96f57bfbaad9e798b08ad2"],["/tags/matplotlib/index.html","ad3ca04eb558f97f48b241b3e251e672"],["/tags/python/index.html","5e7b5df1b91fe4c92e834794f4e49f93"],["/tags/python函数/index.html","373ea56899ab3d2dcc91d982ca2c790e"],["/tags/python库/index.html","1711f84da7056a65a43bb944aa4fa7b3"],["/tags/python异常处理/index.html","bb22023d0f9c8ab9de225f75a055dc94"],["/tags/python模块/index.html","e6f4310cc92959c5ef4843d6b3ed2f47"],["/tags/python正则表达式/index.html","26d761f67cf09965a3afbf97d68757d6"],["/tags/python面向对象/index.html","f6722acd7d69e8979d10e1e67201cd39"],["/tags/python面向对象/page/2/index.html","c62ef6a38274a2ddbbb3b476243b99b9"],["/tags/动态规划/index.html","033d22f28acc2979476f826dbc06866c"],["/tags/基本教程/index.html","f8af6407fb59149129afed927bec2847"],["/tags/基本教程/page/2/index.html","faad3f70d5998bf52e1528f1f7425c0c"],["/tags/基本教程/page/3/index.html","26e762c6c0a7bb30828413b82ff9d046"],["/tags/多态/index.html","f30a618e2d1ed328c9e6492ff5f0404b"],["/tags/排序算法/index.html","2357cec4d3a506b95be1d8085b10f842"],["/tags/机器学习/index.html","2ac2d2f262449da2ef00370ddbb2354f"],["/tags/测试/index.html","09491e6d3ffe489eb6b925aab48395b8"],["/tags/矩阵/index.html","51edbb15dc8a98784da15ecba2cd4923"],["/tags/算法/index.html","9e55828b15d8fc30a95e38d16fccb7c3"],["/tags/经典算法/index.html","b8fd68f2d1ffd3699392286a49af4f1d"],["/tags/链表算法/index.html","3884a1f05b481e25fa5b6659c6ce0785"],["/top/index.html","5f443ae9d4eaa118afbe3af679cf7ce5"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
