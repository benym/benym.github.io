/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","83c912eef7bfe8dc86272a9e9b15dfbd"],["/2018/04/08/整合建立输出增删改查的链表/index.html","45a3ba7ede0f1f900c4cead24dabac78"],["/2018/04/08/选择排序/index.html","1ff6b047a5f0010c90207e9af5553253"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","e1fa8332817ada50b138813145433d35"],["/2018/04/10/冒泡排序/index.html","14a683d753500a31505fe2b161fdc34a"],["/2018/04/10/折半查找/index.html","883d2d121dfa5480bb3da0b3c92f4880"],["/2018/04/10/最大公约数和最小公倍数/index.html","71ea10e62aa2e3ef24c899888636ba6e"],["/2018/06/27/python中的Docstring/index.html","6554647e05a10b151e14fa3df78923a5"],["/2018/07/07/python中字典（key-value）/index.html","9076d12f67be9772d2224ed8dea9f0d4"],["/2018/07/07/python中字符串的一些基本操作/index.html","aec056219e9d6018c02c9325b390f7dd"],["/2018/07/07/python中的元组/index.html","41d402b949185017d202148de9b52e2f"],["/2018/07/07/python中的列表/index.html","eac2cd5de128e529e6555bbecab52161"],["/2018/07/07/python中的序列以及切片的解释/index.html","5a6b6fc4313d90dcd0765dccc948b777"],["/2018/07/07/python中的引用和切片/index.html","fd14f927e260dcdaddb15bce2fa752b6"],["/2018/07/07/python中的集合/index.html","5c9230196ce81b7fecb8851e87e56c84"],["/2018/07/22/利用python进行文件的自动备份/index.html","f6ec407f8e06dbc6a61e8014eda061c6"],["/2018/07/23/finally异常处理/index.html","e0fa85095a9c941a5843891600ee04df"],["/2018/07/23/python对象的实例化/index.html","e89e20ef38e963b4ced4d2ee24c628af"],["/2018/07/23/python日志模块/index.html","956115a172e4049b4a2af1772a782e0a"],["/2018/07/23/python的pickle模块/index.html","10a429d8fa2966e0ae990e4c8fdd9acd"],["/2018/07/23/with-open异常处理/index.html","0df2bb48058a0580f01f36352d729853"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","e70b40fcf405e0a9ab5ddc98bb36c89a"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","8992bedd35468d98f99eb8453339c673"],["/2018/07/23/在打开文件的同时规定编码/index.html","f34d56bbf9a96b9f966a9b669de50c58"],["/2018/07/23/文件操作/index.html","bb3ca642404f725f8886b93d3027eb6e"],["/2018/07/23/用户自己引发的异常处理/index.html","3828eb5c83a271db714b0cfff1540c75"],["/2018/07/23/简单的异常处理/index.html","88a49ad7ef231fcaf78130d96db39707"],["/2018/07/23/类变量与对象变量/index.html","7afc8da66ed976376a0b0bbca3fc1f33"],["/2018/07/23/继承的运用/index.html","3b78eda683c19321de77b01dcb65e3b1"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","d574afeb860053360aa64a01084fb66a"],["/2018/07/23/输入输出——简单的回文判断/index.html","83ef6d36cdf6ed6b8c9576e460f63027"],["/2018/07/24/assert语句的运用/index.html","d57d27712a4390f0d09fb22008b86dab"],["/2018/07/24/python中的lambda函数/index.html","73894dea73105e1f6ebba197ffe1919b"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","105a6fa13f5241a5a01a7d752d7dede6"],["/2018/07/24/列表推导/index.html","129bb62c246e25758d7d073886b2b1ae"],["/2018/07/24/在函数中接受元组与字典/index.html","d5d0d2ca6d1e8555b58099a7f412ee78"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","0f0633e9dd42af0ae6d992de5b6acbc9"],["/2018/07/24/打印九九乘法表/index.html","7e29e8bd3b43a2eb55c0908c572f5638"],["/2018/07/24/打印直角三角形/index.html","b2f1aaf83c93caa14320e9157bd5335c"],["/2018/07/24/装饰器/index.html","452b4a4af87c1b5a43768919db72431e"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","1985f52dcda93edc0133bb5736dc9610"],["/2018/07/25/python中字符串的一些方法回顾/index.html","cd3f1965fcf350928e1f3f846c4c0267"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","044aaf92258e102c5d34c722d2b536e9"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","a46eee5f8633f0d925aaf5bb20817508"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","d4493609c2ae8cad7ddbad8838f9afa8"],["/2018/07/26/python中完整for循环的实际运用/index.html","179fb82c516fe9ed0b0190304c439474"],["/2018/07/28/python中对列表和元组的切片操作/index.html","d70d7eb13c3546d6be937d8f04055c13"],["/2018/08/03/欢迎来到我的博客/index.html","1fff89f5f8b7b5223c3f0e2b937f7d02"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","a358c1e3a61d7ad0691d93bb3164baed"],["/2018/08/07/Python中的正则表达式/index.html","97b4203324438c562de12cdcfeb033a5"],["/2018/08/07/Python中的正则表达式match和search/index.html","43c4cfc4ba71875bef0f739b25830a34"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","755cab7cec5e28944bf1e01aeb63d26a"],["/2018/08/07/正则表达式中的compile函数/index.html","a33affaf0bdd1d079bce81030d49ee39"],["/2018/08/07/正则表达式检索与替换/index.html","2268535c42f3e1341917eae0b2120934"],["/2018/08/08/python中的__new__方法的重写/index.html","f0439cdb6ffd34609c98d025ccab14f9"],["/2018/08/08/python中的多态/index.html","7d6373bfbdd572478f6d1d0b3c9e0d11"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","91339f9080d8dfe62c00aa6ce8238612"],["/2018/08/08/turtle绘图库/index.html","d7e32e70ad10f6e6d829094076f011e9"],["/2018/08/08/单例设计模式/index.html","407431d165c70640e5a3b4ecd558fab8"],["/2018/08/09/Numpy库的首次使用/index.html","32ea6cc5c80329fb2b4572b5c58948e3"],["/2018/08/09/kNN（k-近邻算法）/index.html","265e4c8b542fb5c3eab1b4563b6aa4af"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","9bf86d98cf192998407996a939891551"],["/2018/08/16/kNN识别手写图像/index.html","8e54a1f73190f9122dc0c92b3291e715"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","d165e8152be1a156c87b7f33d2afbf4e"],["/2018/08/22/Ndarray对象/index.html","03da298a1c976a4863e5f08784ebd238"],["/2018/08/22/Numpy中的数组维度/index.html","3bdd61652dc2a275cb8f4c29907c93aa"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","0d7bc90897077558006cbd85ac2dd888"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","be5ba7258af17aba8fa2c0e52f804b98"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","fc22109532ae994a682b9e08591c825e"],["/archives/2018/04/index.html","a61dbeb5405ea07b3cc4edc48754f67a"],["/archives/2018/06/index.html","03ad3b93d0425fca4f5c9f2a722d95cd"],["/archives/2018/07/index.html","8f5567594099d0b536195e351601c213"],["/archives/2018/08/index.html","5b8eb2308d26c7c34c4c9058518e4374"],["/archives/2018/index.html","7138afc49428b004442d6c33c34f7920"],["/archives/index.html","ea5288acf6723ef3ff26f405afdce5ae"],["/categories/C语言/index.html","e47a5db47c5cea48edecf030b259b45c"],["/categories/Numpy/index.html","116eca4c81b592de0dfb3c80fd682251"],["/categories/Python/index.html","7b110d12937da5f8ed0047ca25e674af"],["/categories/Python/page/2/index.html","eccdac31b63714b60795233ac3d59839"],["/categories/Python/page/3/index.html","14cd1cf331427c3122b919aeeee48f6e"],["/categories/Python/page/4/index.html","8dbcb310c9d53b0cb649baa7e16abb7b"],["/categories/Python/page/5/index.html","437aa6169d1c75f806fc1fdacc40277c"],["/categories/Python/page/6/index.html","7409a29cb18bd852f40fff6999e43268"],["/categories/Tensorflow/index.html","fc832eb3ee1f7eb636c6a4b35e8b5ae1"],["/categories/index.html","619ba162e17a23ed863a94bd83a202f3"],["/categories/博客测试文件/index.html","e586460a792b77cc9c31d52d8991a88f"],["/categories/机器学习/index.html","3200d1cece9c6e7680182940e5bcfbec"],["/categories/算法/index.html","6fbd538f522d7d404364aaf8fd848bd0"],["/categories/随笔/index.html","6f32c92fbc0770538701f7ca1379ffd5"],["/css/main.css","36b514cdf0b999a462bd821d5354be81"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0575c2c53d397f54ee371b2ab59fca0d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","602298ce7e432a72dc5d972780977fc6"],["/page/3/index.html","153c7b75ec0475fad7ccd6c7c1137906"],["/page/4/index.html","b47404035f48944455bf0583283f1ab7"],["/page/5/index.html","2d72dc0a80667f52c1d4cd91a5aee3e1"],["/page/6/index.html","340ae5bf109921adeb9113375b0859ec"],["/page/7/index.html","c6bbffaa13786537b072c3935b758ac0"],["/sw-register.js","de106546bcb01e406b04efbb7d8addec"],["/tags/Face/index.html","901168cc60c437526c8d578b58d80ae3"],["/tags/Java/index.html","3d401fc5358dd38e02821eb5000f86a0"],["/tags/Numpy/index.html","2c355ee185696adf4cc6e6e6011ffdc8"],["/tags/Tensorflow/index.html","b3373399e5a5f6eb2f7398fefaf56d4b"],["/tags/index.html","1debd67cbe2d25174629e7ded6cdf7e7"],["/tags/k-近邻算法/index.html","7030c1033885d5932f67ce2cc4dc97e5"],["/tags/matplotlib/index.html","ec904512f9ef71010bf3244ad7581e94"],["/tags/python/index.html","b63169b331327409eaa5a932435da530"],["/tags/python函数/index.html","f794cddeeb7ea96ad7f6f3d9a8e20b7b"],["/tags/python库/index.html","65d5deef76ad5c15aa58dba74b1401bc"],["/tags/python异常处理/index.html","54399b6cfeed7fdca6b18cf950eb0f65"],["/tags/python模块/index.html","5f0611eda0668a9f1013f315470ae2e8"],["/tags/python正则表达式/index.html","c1f7cdb904492f268683ddb8f979114c"],["/tags/python面向对象/index.html","1ba3a9b1e059d4814207c7eb31276c0a"],["/tags/python面向对象/page/2/index.html","7dc1d9f8af84e6644661e7e74fbbec08"],["/tags/动态规划/index.html","546f6df81a9d99b89b77ecafb1d3fe0e"],["/tags/基本教程/index.html","eaa0fab2d7fa5fc4b1606b9ca321be1d"],["/tags/基本教程/page/2/index.html","63f25b57780fee9db3b54449c38810c0"],["/tags/基本教程/page/3/index.html","c71096d1fc6c09305018080bff6832f8"],["/tags/多态/index.html","d82e80fb010f98d3a62e6980a7d3b8b3"],["/tags/排序算法/index.html","e8e0f78d8d78fdd3c45525fc7d7ea3de"],["/tags/机器学习/index.html","7c5f274b9c5598c263bbc0ad6f2e43a9"],["/tags/测试/index.html","f325377c4b3dc0b832d82cb4ab9699f7"],["/tags/矩阵/index.html","8120b229231a5edcb2cca4dd2f0cecae"],["/tags/算法/index.html","0511b9175493f931f7153836173dd6b4"],["/tags/链表/index.html","ef9d8f42f0424bc66e504038ee71c0b2"],["/top/index.html","75bc1ae5235521b859d296dc9a6475f6"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
