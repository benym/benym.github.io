/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","2851ed4db3d04e85a4a8a60f40554ffb"],["/2018/04/08/整合建立输出增删改查的链表/index.html","96e2a83a2588456996d22ded0371ce0a"],["/2018/04/08/选择排序/index.html","c36bc25259ede311e6f0d3c01e78fdb2"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","7f4485e6832094a70f09f0bfecbfb3ff"],["/2018/04/10/冒泡排序/index.html","8aa700363b82d97cb5068055c633b99c"],["/2018/04/10/折半查找/index.html","6247fed399d03d2b1d678e7f23e52ee1"],["/2018/04/10/最大公约数和最小公倍数/index.html","4d47dbf55e2ea5077f9cd6be9f607e3c"],["/2018/06/27/python中的Docstring/index.html","b5df9cf6a7c8af4af2a6ac389de0be46"],["/2018/07/07/python中字典（key-value）/index.html","c73c988288bc869405f3b9e321298972"],["/2018/07/07/python中字符串的一些基本操作/index.html","d43598b0bab421502d2af0dfc7a9f4b1"],["/2018/07/07/python中的元组/index.html","9afb52ed5ed4f164046f8fc507739d78"],["/2018/07/07/python中的列表/index.html","034191b517af5fc4a56c7c543760c2e4"],["/2018/07/07/python中的序列以及切片的解释/index.html","7aa242e904d2141f5aa70c12e05d1ddb"],["/2018/07/07/python中的引用和切片/index.html","ff436cfa3b141c80d255319bbd5cf504"],["/2018/07/07/python中的集合/index.html","623916bbdac9e173cb6f2023b5cfbdbf"],["/2018/07/22/利用python进行文件的自动备份/index.html","836172417f218d716c52d3af41397272"],["/2018/07/23/finally异常处理/index.html","b3ca60b8633b1c7bb93e1f8ffacdb0d8"],["/2018/07/23/python对象的实例化/index.html","366e103b6ae013b83ebab994f34540e1"],["/2018/07/23/python日志模块/index.html","a570f075d71f8080b36561577a7c935b"],["/2018/07/23/python的pickle模块/index.html","060135177c8895ac5cf3f4cd0526a8a7"],["/2018/07/23/with-open异常处理/index.html","e36ea8dbc3c27bce8929afb7c282c0c9"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","a9039c3efc1352a74ed25673b0467467"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","0f479be2a177852a01297c1302bd5349"],["/2018/07/23/在打开文件的同时规定编码/index.html","bd3ec4f0764baa78c1738df3a4ee45d9"],["/2018/07/23/文件操作/index.html","5927e96f1358e8e42ed261b81b833224"],["/2018/07/23/用户自己引发的异常处理/index.html","a00c16af966fb4b90c3a131315a42691"],["/2018/07/23/简单的异常处理/index.html","94046ab9096ae40af54ed2424fcca2ab"],["/2018/07/23/类变量与对象变量/index.html","1e3d0e3980a44c7af8de519e2e7910ef"],["/2018/07/23/继承的运用/index.html","1361a898124f6dadaa3bc7068aa3c161"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","06f31a5e9d115d1b684928933fcc2c17"],["/2018/07/23/输入输出——简单的回文判断/index.html","44a07816ffd5297a63b2fe229ff702ca"],["/2018/07/24/assert语句的运用/index.html","c89c024831f943d4b51a30b8a705be73"],["/2018/07/24/python中的lambda函数/index.html","f98566be108dbe7fc0e009c23caf8e4e"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","337caa15526cd42372cfeb68d866419e"],["/2018/07/24/列表推导/index.html","edec2ab96e4580d18e164bd7bd28b878"],["/2018/07/24/在函数中接受元组与字典/index.html","606728797678f7d1af4a2535c2a9b11a"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","1af6bd289a5fd3a7eb62f4fb160da5e8"],["/2018/07/24/打印九九乘法表/index.html","15a9c411d7bd65a0d9b8420d627ddc30"],["/2018/07/24/打印直角三角形/index.html","30b76f8dabce5ea485fe7dfd156b20b0"],["/2018/07/24/装饰器/index.html","448af19cb06f4ca4f9066a35cf67146a"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","b25e2314c43a6ea478a72194f69f8727"],["/2018/07/25/python中字符串的一些方法回顾/index.html","716ee870b0a64d1a46e0f4d9c7e7caee"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","63bea3b310f85b8735fb274d63cf1250"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","5727bf639f572f2eaf4bc3ea8512e567"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","04e4581bed8b9c503aeb0ef9846eca12"],["/2018/07/26/python中完整for循环的实际运用/index.html","1e4c32409ef107e43acb2505e11c025c"],["/2018/07/28/python中对列表和元组的切片操作/index.html","32ad667fe134bb493656e868ba2b7765"],["/2018/08/03/欢迎来到我的博客/index.html","043595c495a801546011d327b27f4b81"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","ddfcd838f3fd8b0aacbc89d05cbd61e3"],["/2018/08/07/Python中的正则表达式/index.html","4091b44ab649228ceb5fae2d1a853e5c"],["/2018/08/07/Python中的正则表达式match和search/index.html","387f37c2b5d6b34f7d392b10a1d8452b"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","e581587761fb3e9d0af87660876b4b89"],["/2018/08/07/正则表达式中的compile函数/index.html","b5a7f24c69763e50c7ddf38280645826"],["/2018/08/07/正则表达式检索与替换/index.html","0a87b7a2b14c5f17cdbfc63b10a73320"],["/2018/08/08/python中的__new__方法的重写/index.html","9fc51ea27cb0d00c01ac6d260c3b6d3a"],["/2018/08/08/python中的多态/index.html","7335a43b52e64e0efabe199e6a634a2b"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","e7b7648ff4acf4535dd1d555eb3c184f"],["/2018/08/08/turtle绘图库/index.html","89a699c68f0dee977ef2aa1be6769ed8"],["/2018/08/08/单例设计模式/index.html","a7d81c3598c1c7b14cb4837819c91992"],["/2018/08/09/Numpy库的首次使用/index.html","3820f72eb5a50b5c19745ed71642d56a"],["/2018/08/09/kNN（k-近邻算法）/index.html","ef8957d49b730373af1797a661f82108"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","df01a62f2c8aa154a978d548cc111a5c"],["/2018/08/16/kNN识别手写图像/index.html","16e23cdfe5d13f49c82efe6d19cddfb0"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","31e4d09eeefae0ab7badce002bbde8e7"],["/archives/2018/04/index.html","b36d213c563bb14e7685b26878615ce1"],["/archives/2018/06/index.html","47f8c1f93d7b662d85980f717e6973d8"],["/archives/2018/07/index.html","c6e3f09c7e4e296ed5cc619a47bd59d1"],["/archives/2018/08/index.html","acc8086074019c38efe7317ff82c5c7b"],["/archives/2018/index.html","6afda8ac9023af6213fefcc1d3c49cce"],["/archives/index.html","c8717cf9f2df92d7b10381692f8418c1"],["/categories/C语言/index.html","8b69f77a7eb5dcf0c538905dc9b057bf"],["/categories/Python/index.html","89c11761a20d8ef0de10ce4467a242da"],["/categories/Python/page/2/index.html","f0f5fe6c6d9d66ec49973bbd077da95b"],["/categories/Python/page/3/index.html","e0865f1e54128bca25a87a21d58d7ac4"],["/categories/Python/page/4/index.html","3b5f095c1c073c3f9550014eca569cb5"],["/categories/Python/page/5/index.html","f4925ef46e7b0ae4bdbb4d7fbbbaa207"],["/categories/Python/page/6/index.html","7e0328a8062c177bb32e8cb72235dfdd"],["/categories/index.html","663ce94c11ae2aed25415f5772988fcb"],["/categories/博客测试文件/index.html","d395ebfce75f3756ad31a71f43b8e21c"],["/categories/机器学习/index.html","e3d3a26b979592c63eeddb87848e2901"],["/categories/随笔/index.html","caee5495a66955bc8208387ac55bfb06"],["/css/main.css","c3f1c229eeb26030ccb99d947e53816d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b585271e299302b0e66919bdcd8eec22"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d5e08285cc6ae888fd22b6fe6c16419a"],["/page/3/index.html","b5f54c271abc4c1c1ad50bc16b5ce00d"],["/page/4/index.html","54654b23c424f32f6a4a840249801a6b"],["/page/5/index.html","13ae846eda39cb8beee81fc0fa54a778"],["/page/6/index.html","c9139962c11d047eb49d5c04180ff575"],["/page/7/index.html","9e22cda94061ae82c3c24103e406cc90"],["/sw-register.js","31ae5bf31934c993065d00e4cc158e73"],["/tags/Face/index.html","07dadc3d577eb0728d799d00b24799e7"],["/tags/Numpy/index.html","2f5e25af29ec1718e290fd044cd78a4e"],["/tags/index.html","3de8e501d056ff1331dbd1550ab87079"],["/tags/k-近邻算法/index.html","9438b77b5921e2ef52fdb91aad9a5792"],["/tags/matplotlib/index.html","50738f5f9ed0de33db1bf2955ce6843d"],["/tags/python/index.html","81a0a6f1a0ac92f97bbea4c869b18376"],["/tags/python函数/index.html","cfaac5b7df678cf459a4f222ee9d2f5c"],["/tags/python库/index.html","9b94912d84edb9c219e82ff3058de27c"],["/tags/python异常处理/index.html","c534be63bf7e2615f25a583bd19dcc20"],["/tags/python模块/index.html","48d4c918423877d49de46e12cb2814cb"],["/tags/python正则表达式/index.html","a0d6c91af149adff5d00f182c5a2e12d"],["/tags/python面向对象/index.html","91a32db098b4cc62cbab7a061147a3ce"],["/tags/python面向对象/page/2/index.html","a112e77fa83a6f1227f829510a1c528f"],["/tags/基本教程/index.html","bd01ae39abdbac3d8c886e064881df49"],["/tags/基本教程/page/2/index.html","65cdcecd47269c62369f2099ffb052b1"],["/tags/基本教程/page/3/index.html","2347f19a9ccb08db385254e551431c89"],["/tags/多态/index.html","9045f0d4b7e71dae4ce944b014431ae7"],["/tags/排序算法/index.html","733263c7b05e95e9ccf86b0b8866f701"],["/tags/机器学习/index.html","d1a7f495ee20758e7ec9133870135a6e"],["/tags/测试/index.html","04707f43f2f5f499363cd8fd2c647ebd"],["/tags/矩阵/index.html","c51b11e69cc5ee313978485bc74ede57"],["/tags/经典算法/index.html","62660d7debe807d58d0abc8d361a3a2d"],["/tags/链表算法/index.html","b07d674b2f77d181f171538dcc678248"],["/top/index.html","8920e79b72becc381ee6fed0e015f565"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
