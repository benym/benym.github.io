/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","f2c04853ead1225e35f312c9218493d2"],["/2018/04/08/整合建立输出增删改查的链表/index.html","6a68ab1734aae2bb6535daacfd539875"],["/2018/04/08/选择排序/index.html","90cab1f37ed9bef708b549a906d30cda"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","f77221d839fd0faa5ce4877ee1586c9b"],["/2018/04/10/冒泡排序/index.html","68fb15e6ecbefceceff8031ee4f42477"],["/2018/04/10/折半查找/index.html","403c82c8a47d4a0d443b2a6766d98fb7"],["/2018/04/10/最大公约数和最小公倍数/index.html","366fbc6c8e37633aa1a4e3662e18a752"],["/2018/06/27/python中的Docstring/index.html","67b7cd77067ed3e8a5240164694f8602"],["/2018/07/07/python中字典（key-value）/index.html","f15e139db416b65c62fd76b4199fded4"],["/2018/07/07/python中字符串的一些基本操作/index.html","891fd85701e3e521574e66bdb797e72c"],["/2018/07/07/python中的元组/index.html","03e959e5ecf21de5232e5c870182ccaa"],["/2018/07/07/python中的列表/index.html","9c07379e73ca3f7c5497c3f7bc3211a1"],["/2018/07/07/python中的序列以及切片的解释/index.html","a6c65e5010d1280f92cff79691ed915c"],["/2018/07/07/python中的引用和切片/index.html","7e82b820e8903157f08bb11a4204fbcb"],["/2018/07/07/python中的集合/index.html","c7d7a081ce15d20b3336f0fbafda6db2"],["/2018/07/22/利用python进行文件的自动备份/index.html","4683140ae3bb42c8cb29768de35eeac5"],["/2018/07/23/finally异常处理/index.html","09248874aa23ee92b86255d18e16dd1a"],["/2018/07/23/python对象的实例化/index.html","1b2b5e35fe19826eb2b0844d666f8c99"],["/2018/07/23/python日志模块/index.html","bfdab2388e8137977714458c5888d9e0"],["/2018/07/23/python的pickle模块/index.html","4284f0b35f725487a3d1f14edb4c628d"],["/2018/07/23/with-open异常处理/index.html","dc7c17f0956e35597bdce5ec0a339f98"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","65417cd0d810339e5221c6741b1ec702"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","29fc79395436cd5d28cc9ff37d65a6ab"],["/2018/07/23/在打开文件的同时规定编码/index.html","1743319d6c64c8705bdc84322726490e"],["/2018/07/23/文件操作/index.html","b7267708c1753579229420a18a5a3dab"],["/2018/07/23/用户自己引发的异常处理/index.html","16c325f79f81c43626b1aeb17cb280d6"],["/2018/07/23/简单的异常处理/index.html","6fa285f4a982c0baafcfef23cea4c2e9"],["/2018/07/23/类变量与对象变量/index.html","63b3ee18b332ab7128ac8b30115e64d2"],["/2018/07/23/继承的运用/index.html","13201b1c65e66617886d2d95569540a9"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","92653c509d39aa5649d134568e1df73d"],["/2018/07/23/输入输出——简单的回文判断/index.html","76370ea13c1ba507bd052bf9dd0443c8"],["/2018/07/24/assert语句的运用/index.html","03cca813bed15863cbd367abd687f1e3"],["/2018/07/24/python中的lambda函数/index.html","e0a3b02e09f229c0d788049d67a5a3c5"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","20ef1752ecfc12b4efcbd5db7e8ac5b0"],["/2018/07/24/列表推导/index.html","0a6ca986daac95aeb8a05c790ce0a627"],["/2018/07/24/在函数中接受元组与字典/index.html","039389a68ec62da6c69a270aed687170"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","47228f3ffb53863f28fe1f177faa6d4c"],["/2018/07/24/打印九九乘法表/index.html","869c17953c52f665db6b72e9c6912c66"],["/2018/07/24/打印直角三角形/index.html","27c2a5081917d5b4793e589c1ed1caf8"],["/2018/07/24/装饰器/index.html","ffece378fbda2caf67086a1f07384d70"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","3eed503e2941c6e7c77eb6e01faef98d"],["/2018/07/25/python中字符串的一些方法回顾/index.html","d32981612a80674835bc873c863c072e"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","cd5f7fb50b0720fa6ec3c176c28a47be"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","43e20734c5a6d6f1ea999a75cfd3e936"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","1a4c7a3f73e1feda6868512967b6eca0"],["/2018/07/26/python中完整for循环的实际运用/index.html","4480e193fcc3696f437e4a58bd83d57c"],["/2018/07/28/python中对列表和元组的切片操作/index.html","f49a995d898954a6ea8b52bd2be26cf0"],["/2018/08/03/欢迎来到我的博客/index.html","fc2d3a5398357f821de544c16653bf9d"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","7304b3bfa61349c549dafdaa9a200ac4"],["/2018/08/07/Python中的正则表达式/index.html","19c411956789d1cf992f2905d98e92a7"],["/2018/08/07/Python中的正则表达式match和search/index.html","d769de1b16b6715ce9f54dacaaff733f"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","f30d3b9aecaf4095b4896cbaa4fda547"],["/2018/08/07/正则表达式中的compile函数/index.html","cdf42088a6ccdc81bb619513f0b4d161"],["/2018/08/07/正则表达式检索与替换/index.html","68e743b632d3776bcc3a72d6d53aa781"],["/2018/08/08/python中的__new__方法的重写/index.html","d0a10db68ee724441b8a3dc29d3199fb"],["/2018/08/08/python中的多态/index.html","ab8ad983081a685e5132628db1920f92"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","8249072cc80b76310b10772c3d695b12"],["/2018/08/08/turtle绘图库/index.html","6820551f527b20451500e0614bc5b1c1"],["/2018/08/08/单例设计模式/index.html","66c400eb6898b043af38df1aac4f7dbe"],["/2018/08/09/Numpy库的首次使用/index.html","e0e7520bf14648f30afa320bdd4d3536"],["/2018/08/09/kNN（k-近邻算法）/index.html","8ed3b5222da948484cdcc2a13f611060"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","8d0b80fa0afb2788a6f2428bca8590ac"],["/2018/08/16/kNN识别手写图像/index.html","56ff561d06d69cc380ce4ceb52b7ae67"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","aff126bd0f8c560418604475124b4cd3"],["/2018/08/22/Ndarray对象/index.html","1b4b07119a1228c8dca0d64e4a0da2b7"],["/2018/08/22/Numpy中的数组维度/index.html","c385319db5d8fdfa263081404501ceb6"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","9ecb69a45c042cae7c92b3d69c3331c6"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","1fb9299b090b659791bc65e9eeb87f18"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","2c2e3ad4b2f75cadad75806b9fd6c66a"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","841acac930f65c5db37db7d2ae27c1f1"],["/2018/08/26/一些TensorFlow的基本操作/index.html","cf263dab717cf5156609a281cde8240b"],["/2018/08/26/交互式使用/index.html","ab07cb39abe7f0f6e7079fdf6027e1b7"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","353b5bb9397dc7d1ac8ec0e751f90588"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","34ce801343fb5a6ab0226d4fe072daf4"],["/archives/2018/04/index.html","4063cf70e537b8062aec662529b50e09"],["/archives/2018/06/index.html","3587968e9759ea820bb137c8115e0cdc"],["/archives/2018/07/index.html","88e3caa48148f92572662897383e26b8"],["/archives/2018/08/index.html","656a88c1f8a19eaf6c88c3324c494198"],["/archives/2018/index.html","16f975648d0b328169662c2785aa4386"],["/archives/index.html","b23528ac7a29abfc20bdfb5913ae2dd0"],["/categories/C语言/index.html","c37332b6b3cd1ed6b58e22ab6c73fbab"],["/categories/Numpy/index.html","1524207ffacdeabc610c0eaf428dcc47"],["/categories/Python/index.html","5fff8c4bc1921d48c58ae6335160b315"],["/categories/Python/page/2/index.html","7066e909460a184d200cb629b9f1e4a5"],["/categories/Python/page/3/index.html","bee64cfd4b5a40f4a47c3111a3612bb7"],["/categories/Python/page/4/index.html","f75fd38b80bc1b395e1ea100374ed6a7"],["/categories/Python/page/5/index.html","74f9e7d64073903fd0274e443dbca3c3"],["/categories/Python/page/6/index.html","88456578ed8c07b6441d10caba4219d1"],["/categories/Tensorflow/index.html","dc107a811aec444eade66bd0bddd7d3a"],["/categories/index.html","f3e3376d48f7329e95e54785f8fec548"],["/categories/博客测试文件/index.html","b3b7344e11984c6a68b2ce35196d3bee"],["/categories/机器学习/index.html","2e7b1683d57862555d051e0f38ef3475"],["/categories/算法/index.html","65f2db3a0f96df827b17ee3e9c863470"],["/categories/随笔/index.html","9de0142536410aec329ff76d93aa3277"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","89f5497730d58a18b4f37940828ec2a6"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ff8ec2e4a1d93dbaed728a0e29550fdf"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","9ab93e59991e8820ecd99d868d35a292"],["/page/11/index.html","0fd5db4076d12aa2ae5c44069d35369f"],["/page/12/index.html","ac4c61d895414541425da78dcee9a239"],["/page/13/index.html","ea67533f0dadb2a3e1bdc5af93d277f0"],["/page/2/index.html","40b86cb183f042f747b2921d0df1fd14"],["/page/3/index.html","4e6cd918cb3bc4ec84999cf9804ce866"],["/page/4/index.html","0f61eaca968e19082b81e11a09d73bd2"],["/page/5/index.html","b836360bfdf0e5152d91f1c7cf34410e"],["/page/6/index.html","582881acf03ca1fa874b16ab1e25b3a5"],["/page/7/index.html","208ccffed1c0c5e5c7a5cdbb87978e91"],["/page/8/index.html","10726b824a21361d9c5923df2d027c8b"],["/page/9/index.html","6971a7c190f3d72f12a6c623254238c5"],["/sw-register.js","15205b751bca8c13e2186e03788bde86"],["/tags/Face/index.html","16c8fdf584b2577e7fec0417b9c3a77c"],["/tags/Java/index.html","062d2d70139a064c9c9c33151a23caeb"],["/tags/MNIST/index.html","06b51787a00de83f51f8259bf59b3642"],["/tags/Numpy/index.html","a335aa68b014e0f6a11c1e9ac1cb5da6"],["/tags/Tensorflow/index.html","80954b5086acbfcdddf8c1ba8228fbab"],["/tags/index.html","d2a53f819c6b87d0c8c3b9bd7ed9ab67"],["/tags/k-近邻算法/index.html","580610cd05dabfa77c055517f778782d"],["/tags/matplotlib/index.html","67ce3f485b336f77273902eb43db7fc9"],["/tags/python/index.html","a3c47519cc539420fe6051588c377c66"],["/tags/python/page/2/index.html","6560a44817de645fe3b3fef6062dfa1a"],["/tags/python函数/index.html","135201287ab6615e2001de04b360e694"],["/tags/python库/index.html","9a9e5f49fd26353be15415b7591538e4"],["/tags/python异常处理/index.html","17ad8b1ddba154bf431e259f90a31504"],["/tags/python模块/index.html","f364db7ed4d579c2643fb2c3ceae9af6"],["/tags/python正则表达式/index.html","d49c99aa5bd7b2cae2521db3dc992d9e"],["/tags/python面向对象/index.html","63316a5e49fc431deff2399ed4016977"],["/tags/python面向对象/page/2/index.html","d26d652c04ffb451428df902120b853c"],["/tags/动态规划/index.html","aa1942d3f8670658d2cbbe4d00b7d34d"],["/tags/基本教程/index.html","7237e6638be63d05be39434441711f3f"],["/tags/基本教程/page/2/index.html","52fe31edc7c6ab025ff2e538fd95a7aa"],["/tags/基本教程/page/3/index.html","fb9c35680d4c5c31b2e4962166c41979"],["/tags/多态/index.html","282abbbab1916afb99b455dc017e3f52"],["/tags/排序算法/index.html","bf9b6c9dc8f748d4ccd91e1e96af0620"],["/tags/机器学习/index.html","7a062e9e41fd25a670e04e32b0ab8932"],["/tags/测试/index.html","46c82113e504b92f129b50180d39c859"],["/tags/矩阵/index.html","962b3cd0b33cf5950bff368a76442eb0"],["/tags/算法/index.html","445b85e64c21a3e457a6ce8594526512"],["/tags/链表/index.html","e0e1be0dc04329304f0a8facc3758f8b"],["/top/index.html","75b96704c52285bb1d789f71c284d149"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
