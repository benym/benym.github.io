/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","115af03c1687bed7d1d93666224c741c"],["/2018/04/08/整合建立输出增删改查的链表/index.html","f7621ed72c53ed4e73769b9fccfbf719"],["/2018/04/08/选择排序/index.html","18c477040e5cbe48c9b2b31f36dce4fd"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","de745a6c3cc681d4c8f26e23fee4c6b6"],["/2018/04/10/冒泡排序/index.html","7bc93f1c61211757b4a2e2a686f507e3"],["/2018/04/10/折半查找/index.html","71b1234e5a30bccececbe56bf1c1f94c"],["/2018/04/10/最大公约数和最小公倍数/index.html","92f2990b81831ab6303dcbabae2a39cc"],["/2018/06/27/python中的Docstring/index.html","45a55c29a9bcdf09297b5ce159a0a7cf"],["/2018/07/07/python中字典（key-value）/index.html","d5a92fdc6c15716c040d079678a91b44"],["/2018/07/07/python中字符串的一些基本操作/index.html","be4b80eae4a76762f31c7aafb9a96f15"],["/2018/07/07/python中的元组/index.html","f2b445a3217ea6d335a3cc80f5c9c277"],["/2018/07/07/python中的列表/index.html","69a15d88e38d1986c45d217c1c75612b"],["/2018/07/07/python中的序列以及切片的解释/index.html","45706897e93c286f1cd05b2231a19bf1"],["/2018/07/07/python中的引用和切片/index.html","125b8f5404b0639435f77e8072f6cbca"],["/2018/07/07/python中的集合/index.html","a5205d9f61ba54d1aaa85176c004bf69"],["/2018/07/22/利用python进行文件的自动备份/index.html","06edb8f2dcb0bd77b1e0d7f8e9c61394"],["/2018/07/23/finally异常处理/index.html","17a4714f1b136125b9ff6d767fafd8fc"],["/2018/07/23/python对象的实例化/index.html","7395acc268986b6cf5a9793b2f644cd6"],["/2018/07/23/python日志模块/index.html","fb8fb638ccc63229ed9d11ef56475e5a"],["/2018/07/23/python的pickle模块/index.html","49a2551c52ecf44ba89aa0b03ea28ccd"],["/2018/07/23/with-open异常处理/index.html","26d67b8fd5e4a3ec6ccde4d1318e2b7b"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","b41da656ab4d4ddaf50594a3dd353345"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","2762dd365f9686764737d5b9e5a53eeb"],["/2018/07/23/在打开文件的同时规定编码/index.html","62e6a8eb0d70a3840fae28417873c8cf"],["/2018/07/23/文件操作/index.html","dfccd4a54450bbf9f061802e67323172"],["/2018/07/23/用户自己引发的异常处理/index.html","b76ff45ce21cfdbf19061c630dbfb522"],["/2018/07/23/简单的异常处理/index.html","8e5942c4349f8c7e1d2d5f2563ae2bdc"],["/2018/07/23/类变量与对象变量/index.html","f011327cd376d0d64d42d0a50873ff0d"],["/2018/07/23/继承的运用/index.html","4168548a7b3ea857eb6ebe08dbf4463c"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","06ce0d64fab1219b9c16c134938e1b47"],["/2018/07/23/输入输出——简单的回文判断/index.html","ad002d82517c2e8226728780cf62c2b7"],["/2018/07/24/assert语句的运用/index.html","242dec3dff86173ee1400a6cc23c4ebd"],["/2018/07/24/python中的lambda函数/index.html","56cb77a90e9d05365ec75faf3fe4634b"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","73787adda61cb21b32125dd67b44d236"],["/2018/07/24/列表推导/index.html","ccaa4385fe54cd9d5fcf078a66a92087"],["/2018/07/24/在函数中接受元组与字典/index.html","7d790cb2c493325b7bc32ac0ab51cf7c"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","eb41fd38ef3d2603ae40a0376f3f8d6d"],["/2018/07/24/打印九九乘法表/index.html","3c9315266bff467a1a4d26f65bd15e77"],["/2018/07/24/打印直角三角形/index.html","57880519be48ca09366234fa836aa7ed"],["/2018/07/24/装饰器/index.html","27e8115a44a3933eabd84295dcc22c57"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","2aae702aa68de79c96d85a7512bc1d6d"],["/2018/07/25/python中字符串的一些方法回顾/index.html","826824980a3767fe4df231c49239322f"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","d1d2bf988f3a300efef1fbb08d4b15e1"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","4e5114d36ce3c8c87bfe75e7b1fec35f"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","9976e70fc0b8c5d396f7c8ce34759375"],["/2018/07/26/python中完整for循环的实际运用/index.html","79bbef2f9adfcad90224af863210640c"],["/2018/07/28/python中对列表和元组的切片操作/index.html","a94e5f1172ae5d410acd40138f71c544"],["/2018/08/03/欢迎来到我的博客/index.html","d6701fda1da65bbde835a5b06c36d661"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","64c3f924a7ae05135af802ce2c144576"],["/2018/08/07/Python中的正则表达式/index.html","ac533a22103de9fd6cbe29a15a7f89d2"],["/2018/08/07/Python中的正则表达式match和search/index.html","46626f704219a7a4710619c5fef0acfe"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","50baa81b9339792224825ea38075ba2c"],["/2018/08/07/正则表达式中的compile函数/index.html","ecb69a0f61a3147a56467b5eb0e18284"],["/2018/08/07/正则表达式检索与替换/index.html","2198ba3ee7ff0cc6f8d542b4730372f2"],["/2018/08/08/python中的__new__方法的重写/index.html","7662daade92e8d597ffc806626f5c94e"],["/2018/08/08/python中的多态/index.html","73260059ceb7e8b80b958ac430af49a0"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","f962c16a543750d5e89042ca1260acc7"],["/2018/08/08/turtle绘图库/index.html","9ec9fc0d91aee77f83065e4aaa4cfdbf"],["/2018/08/08/单例设计模式/index.html","2e605280ed46a39ca40990a7cc9fc760"],["/2018/08/09/Numpy库的首次使用/index.html","35104146b9e2829417e906a4ca552dd9"],["/2018/08/09/kNN（k-近邻算法）/index.html","79194f58f7231e0ed9ac31d175ae7010"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","cb8db30924cb97d79e9c51ee3ba281ba"],["/2018/08/16/kNN识别手写图像/index.html","7f294ef1678e227eaafad006c00faf4f"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","98595a4f0c19e2eda10771db5b7f51c0"],["/2018/08/22/Ndarray对象/index.html","b6f82da84b75c8c6271d540dd17d59b8"],["/2018/08/22/Numpy中的数组维度/index.html","c32102eb868bbd851e9365400cd25492"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","74d33fd6f4d2b2a66da3ebda34a1e301"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","8afcd86fa7e04efec98a9ab48946fc13"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","98d7281a03171ffb11bd3f5b4e354bdd"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","b24e11fb2233c198e3059ed65613b418"],["/2018/08/26/一些TensorFlow的基本操作/index.html","81513911b0579a7faa93745bc18ddb64"],["/2018/08/26/交互式使用/index.html","5ab059f3821aa14fe74c5baa848495bc"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","cc1af89192c318203579eb43431d075d"],["/archives/2018/04/index.html","fc986322ab9eac60f3e4bc05608f836c"],["/archives/2018/06/index.html","eab0398092b3b73e4ef4c77190d136b7"],["/archives/2018/07/index.html","3743c9813ded89d0e7f03a9931147dc7"],["/archives/2018/08/index.html","53192bdb1e3be330bcf7307df65fb90f"],["/archives/2018/index.html","77590a9b8b2d4732eb520579994e2d40"],["/archives/index.html","5b119e29ba332bb41d497d6e0e1acd90"],["/categories/C语言/index.html","98c52568e3a4e0c7280c1b2f16ac0f39"],["/categories/Numpy/index.html","25c2eb2c51d76de646511e5ff13ed71b"],["/categories/Python/index.html","d8733c76ba58a8b4c20807b4fc69b88b"],["/categories/Python/page/2/index.html","c4b12038d3873b1041d42138a754f9c5"],["/categories/Python/page/3/index.html","6710617070a3973fa03df685e109188c"],["/categories/Python/page/4/index.html","4ae30d87b9b16dc3c4f4db431fb26396"],["/categories/Python/page/5/index.html","d6d439f7311c50ec21d5cfe2addef068"],["/categories/Python/page/6/index.html","c5698e67d5cd1a4e47d6dae2d784b423"],["/categories/Tensorflow/index.html","bc6c40de5962aa046a61dc00fde246a9"],["/categories/index.html","58f464f7dcd77d56ee39bf9cea8035f2"],["/categories/博客测试文件/index.html","8a5ecb166da75c9b4a27c68446fa19ae"],["/categories/机器学习/index.html","b79f1adf397158bf3cbe47bd46d5f535"],["/categories/算法/index.html","6431e096e4f25d2da23a5a7a9d880c41"],["/categories/随笔/index.html","40f88f00360dc295cc7950a7af4fa923"],["/css/main.css","b5b52c20520e4deb8ada3457f54aaec7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","033b724d3ea4af56f8d1c1740eced104"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","52c43685be3284e394ad0c8151cbf9a3"],["/page/3/index.html","5eee4de53554887c44a0734f0c9c72fc"],["/page/4/index.html","14884b38744d0fb79d907c1b4491b53c"],["/page/5/index.html","eae33e912e6e7d3ffc8b91a3390337ea"],["/page/6/index.html","a4a3017da53289b048f45ee5132fea7e"],["/page/7/index.html","f4bab7b98a2dc1e0d8aff23f31c1aad7"],["/page/8/index.html","fa3896aecec3f6efc5f9e5db9981f387"],["/sw-register.js","e9f002ac9284269934de6a3a9388aa48"],["/tags/Face/index.html","1d7659333e881f32528f3d7162256a83"],["/tags/Java/index.html","34bf77b8f7c4f21b20d0b2ff74bb37cd"],["/tags/Numpy/index.html","33391b9da05f7ef8f30d9f35b9eb385f"],["/tags/Tensorflow/index.html","211b6b2d900cfe95ba2707b73d97518c"],["/tags/index.html","104c1c8a325e29a3d7fa7a5f1e7d97f5"],["/tags/k-近邻算法/index.html","b65f4432801182ebec0e1b1eaf3ee636"],["/tags/matplotlib/index.html","605f64db4b6a49f1e01f614048a52a42"],["/tags/python/index.html","440c461f6a6d2f80ba7fe224b361e91d"],["/tags/python/page/2/index.html","22dce4eeeba9234601ebf6d0be62d76b"],["/tags/python函数/index.html","db36a4747f69d3eda23bdd6f755c2f0c"],["/tags/python库/index.html","ecba741dd9b6bc93395a4ca35dba027d"],["/tags/python异常处理/index.html","1dd7808da2e91a2ac9095068bca71f2b"],["/tags/python模块/index.html","5c2e2e674bd2521cf7f46fed23cf0c75"],["/tags/python正则表达式/index.html","aa790836e3abc1b7785588471f8c78f0"],["/tags/python面向对象/index.html","21cec992f19158a499e097d856547f7e"],["/tags/python面向对象/page/2/index.html","d00ee3a42b7cc475891ce7d5179f8590"],["/tags/动态规划/index.html","1cfc6031677885e51c40c043dd7aa68d"],["/tags/基本教程/index.html","66e70cad4014adee773788f9fca48ca9"],["/tags/基本教程/page/2/index.html","a78779518da5b76acba2bff712ce7d95"],["/tags/基本教程/page/3/index.html","ddde47872967f8087fdc65fb4209270f"],["/tags/多态/index.html","4c51c323abe9361c8f465ac8d0bbe501"],["/tags/排序算法/index.html","2db5dcb7ba47dd185b8065233bf99310"],["/tags/机器学习/index.html","001965be44e60e840803cfdbdff6a709"],["/tags/测试/index.html","0444209d99b64e1a6944c9c86ab2b217"],["/tags/矩阵/index.html","68d1533920bed78b0d5ec6e5c8e51d8f"],["/tags/算法/index.html","328863799a308fcfdf4ccbf0da079ec1"],["/tags/链表/index.html","a76ac8938b44fc3c40ac67ea62d7e93b"],["/top/index.html","42a85f59d06d6798538382c4c948113a"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
