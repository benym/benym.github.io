/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","eb216fd679da7e2458e2a45ea66d95bc"],["/2018/04/08/整合建立输出增删改查的链表/index.html","33ad0c23c62dc59d7244377ba5873385"],["/2018/04/08/选择排序/index.html","69dd618d472d92d0978d7031c4254d5c"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","2e59a3c9f6d6ecfe6988321f05dcf757"],["/2018/04/10/冒泡排序/index.html","cd65ad75592f35a570f258c697ccf40f"],["/2018/04/10/折半查找/index.html","2f067a658cc60d6b9c5c1359e7b05e3d"],["/2018/04/10/最大公约数和最小公倍数/index.html","285ef885640ecd9c87129307e76b6512"],["/2018/06/27/python中的Docstring/index.html","8e48e63c59fda001bbbe397f1cec5a96"],["/2018/07/07/python中字典（key-value）/index.html","088952652fc69eb8b0a97a82438b06d9"],["/2018/07/07/python中字符串的一些基本操作/index.html","9675c4e575de98c1d174b651004b7d1e"],["/2018/07/07/python中的元组/index.html","354d19f6c64aa5595727b5a0ab2e4f15"],["/2018/07/07/python中的列表/index.html","a24198b4a7c092c3b03b73326911382b"],["/2018/07/07/python中的序列以及切片的解释/index.html","1214f6e17444d511db2c669f88b12a09"],["/2018/07/07/python中的引用和切片/index.html","306fc69207281046a1cb26bda3f8c6a5"],["/2018/07/07/python中的集合/index.html","e0e0ae711f7f590e981afa04a89962f1"],["/2018/07/22/利用python进行文件的自动备份/index.html","d39bbb5bcb9911507d92316c0098a877"],["/2018/07/23/finally异常处理/index.html","4a76ac65040196a440e136d2b7e596ba"],["/2018/07/23/python对象的实例化/index.html","dda00657e53029c43129a52e667ced46"],["/2018/07/23/python日志模块/index.html","39b2e5dcc215bfd7ebef3e6393700ca8"],["/2018/07/23/python的pickle模块/index.html","8d6a897d11e37b118992e2452a148426"],["/2018/07/23/with-open异常处理/index.html","575f2d03ae181e8f6f0b9eefc81fc04b"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","ea5c6578b020b044c3b636c542a84322"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","fda343a879441d52c4182dd53c22bbc2"],["/2018/07/23/在打开文件的同时规定编码/index.html","7970531d14a15e21a20fe35b202b4a42"],["/2018/07/23/文件操作/index.html","77a821d59c609498a8275c7a6258ccf0"],["/2018/07/23/用户自己引发的异常处理/index.html","19bc60c6934d187086545bcde7e7d9df"],["/2018/07/23/简单的异常处理/index.html","d4092875ee769328829c82063a0479f8"],["/2018/07/23/类变量与对象变量/index.html","58d2c9bc7ce4009a7a34a4019c4f9bbc"],["/2018/07/23/继承的运用/index.html","15a42475a194db9bf12aac964f313745"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","56ff7f552f080b1c95ee5936cde2daed"],["/2018/07/23/输入输出——简单的回文判断/index.html","8a066483f9352bcc3dac0c0f1e69895d"],["/2018/07/24/assert语句的运用/index.html","1b0669d05c9918ca2365e2eb4b86d1a4"],["/2018/07/24/python中的lambda函数/index.html","b4f9fa9a5b573eb2fa864958a2732496"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","b86a7e5b18004545edbca835bc96ca80"],["/2018/07/24/列表推导/index.html","2e789aaa47272f1c0617e5f14fe54df1"],["/2018/07/24/在函数中接受元组与字典/index.html","f0cc2d06bb4c17daf3491e1ec50369d3"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","19201c7bb36a13d2486e1a0723c402af"],["/2018/07/24/打印九九乘法表/index.html","28679d7cd09e9175aa46eba25b8dd988"],["/2018/07/24/打印直角三角形/index.html","8c628f7242e17384f322ad57326dd6e0"],["/2018/07/24/装饰器/index.html","81373363d53e3834fbca60c372e0a23b"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","fa36459411482ae30480e328876752cf"],["/2018/07/25/python中字符串的一些方法回顾/index.html","56a654f0e05609c5f43ef0bc04c4e3b7"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","a0c70aa2a3581e1d9994eb0a3c7ca0ac"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","b397e217bfc24409eda6c806ca9a5b7f"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","a0ee78e49f8101714fe1749bdba7bcfa"],["/2018/07/26/python中完整for循环的实际运用/index.html","cccb418dc64dfd0c142544bfb254a08c"],["/2018/07/28/python中对列表和元组的切片操作/index.html","ec951fa1123b317453ce215a9f70f9fa"],["/2018/08/03/欢迎来到我的博客/index.html","0d1faa16284d8c35622715716fb96a6b"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","75dcb93bdb56c7e670a0b4d7f873e37f"],["/2018/08/07/Python中的正则表达式/index.html","238fc24ede226253364757d30f816a51"],["/2018/08/07/Python中的正则表达式match和search/index.html","ce0df2f0b6ae7a476f916fdbfa096024"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","8fc68eaee1c88a2dc7a0adada9a9f089"],["/2018/08/07/正则表达式中的compile函数/index.html","05ee13a134442b36e5be669c21c47066"],["/2018/08/07/正则表达式检索与替换/index.html","f97dbb104730f29a50f59c9483b6c71d"],["/2018/08/08/python中的__new__方法的重写/index.html","8fdc7940a3477e03444a7f837751ece9"],["/2018/08/08/python中的多态/index.html","d5dcf4828633f781ec3caac4bb08745b"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","451f61167462c73edb51c49ab419dcfb"],["/2018/08/08/turtle绘图库/index.html","18774d67325cc247ef51587365554a98"],["/2018/08/08/单例设计模式/index.html","aa059abf240f71262ea1c760fea87f01"],["/2018/08/09/Numpy库的首次使用/index.html","b0177b7838c1da0f2854b7d29c620f0a"],["/2018/08/09/kNN（k-近邻算法）/index.html","7f336776dcd9776a6eecaa38a61ccc95"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","eba3856e63759965ed2a4612a35a6341"],["/2018/08/16/kNN识别手写图像/index.html","0dc1a300c52c8785c726fb241e1c1724"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","561f087e205ee544064fdff5013504fd"],["/2018/08/22/Ndarray对象/index.html","f0729228ff86907388f3eb60e832a1e2"],["/2018/08/22/Numpy中的数组维度/index.html","b68ee89ba0e0235adecf2516933e459e"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","aff4975a384e84b0e0ad62a3c6c4e0f0"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","f755a0325abb83ad166617051024749d"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","28cb165c0364f78aab592baee6d67f83"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","7ef00f0977aec68658c5a6790854b067"],["/2018/08/26/一些TensorFlow的基本操作/index.html","56eb00279d1b962a3301badc61f5bf19"],["/2018/08/26/交互式使用/index.html","98d6499a94bcc3e981668619394ce58b"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","bcef6f6c66787eec55663be8d4ad9769"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","224a55db8726dbdd57ae4035adf8a8cd"],["/2018/08/29/将hexo自定义域名升级https/index.html","3fe396d3b9e2ea9719aac67c64437126"],["/archives/2018/04/index.html","7e4f726fa4b3ce417e73d8e54dd14489"],["/archives/2018/06/index.html","95908484ca96a7ad7ee9041265ff7686"],["/archives/2018/07/index.html","1aedbeacf1a50e26550e1402179c1b37"],["/archives/2018/08/index.html","3e3fd48a183a002eaf33cce2daa63600"],["/archives/2018/index.html","69795a79aabc706b7393aa77f4ec0ccd"],["/archives/index.html","22934bca438c4f5ea65987f26e41cb40"],["/categories/C语言/index.html","710d251c489eae001aeb1c5c46ccc7cd"],["/categories/HTTPS/index.html","ef0968a1784101253c8facc5f35d9360"],["/categories/Numpy/index.html","8eff3dfbe9df78c81e3963feb8840b0c"],["/categories/Python/index.html","5414d6ede89174541ea8b546afc9a6ab"],["/categories/Python/page/2/index.html","13caa3b4a4c6f6667ae74a6025b32e5b"],["/categories/Python/page/3/index.html","2958bfd10f1b911009bc8a2520ec1441"],["/categories/Python/page/4/index.html","06e103a9c195cb03fb024ee20f511863"],["/categories/Python/page/5/index.html","5ac47fad6775f6e63562d72761a60b69"],["/categories/Python/page/6/index.html","e0a5cf01b5a1d0ba4f0283e6344e3c8d"],["/categories/Tensorflow/index.html","d83176cb3033846c97aab7a0b8d925e7"],["/categories/index.html","0ee47fd054722d0d1ec8e90f46cd118d"],["/categories/博客测试文件/index.html","81a3bf80fe9472e044bf05a8c63f779f"],["/categories/机器学习/index.html","b2144cd31dc5d3fa04185508e56335f2"],["/categories/算法/index.html","9a443ed0e94b60a50f99b8bfce1e58e9"],["/categories/随笔/index.html","778bf7a0e414eb97ad79c95054e38e02"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","4d042c7e087ee8f658fb7fb9d8c756b8"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2a78ea10bcda252e88eba0e49edfcb5f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","29d43e8ec37196162ee524d3d77f9bb6"],["/page/3/index.html","0f5e9109568c30e79d50e391170ee27e"],["/page/4/index.html","f4c80195e0f956ad3a01dc84ea890362"],["/page/5/index.html","f6562f485f8c127601181e4cc56de28f"],["/page/6/index.html","f8c171983d85918e3035a671b8715045"],["/page/7/index.html","1da3e0f0a3a759c55f48d5e8422b438a"],["/page/8/index.html","a0d3b8fc177ed1a28a8a08ccd3df65ef"],["/sw-register.js","f3d8996583bdeebebf2d2302f52097c9"],["/tags/Face/index.html","54165bec309bec0a061c36aab181fa69"],["/tags/Hexo/index.html","945961e8e57feec952025855f807e8bf"],["/tags/Java/index.html","448d78aedf9a36b9ada785aa7fe539e7"],["/tags/MNIST/index.html","3fb36da4ae3643aa7d16909c140e8d53"],["/tags/Numpy/index.html","23ad387fb3f9a1b03dd91d76c4ea6fdb"],["/tags/Tensorflow/index.html","0d6a760f80ddf6c7f9264c61c03d976b"],["/tags/index.html","63c1b1317e474666648868fd59f3659f"],["/tags/k-近邻算法/index.html","da476cb89bd5956fd03640b99b8d8b2c"],["/tags/matplotlib/index.html","c09f07cd0877ec85dff7455e3c598845"],["/tags/python/index.html","7d7b3d248b7c7df34c81584606f8c322"],["/tags/python/page/2/index.html","ef39227707e925aa2ef03479c6ce849e"],["/tags/python函数/index.html","058dff35b987cf31b5b70c9f5c260117"],["/tags/python库/index.html","1cd8843624f23eabce6357de169a10ed"],["/tags/python异常处理/index.html","e717fbe66cf8abfe6c6eb92084a0f9ca"],["/tags/python模块/index.html","454f7fb0339c2c5542162fe769e2846d"],["/tags/python正则表达式/index.html","eb196fe81fcff3a2319e1a0522e8028c"],["/tags/python面向对象/index.html","261361c576f89911df7532211a390ee7"],["/tags/python面向对象/page/2/index.html","e3be3aa80160a91ee630e0531c604951"],["/tags/动态规划/index.html","3a608a1ca46e8c3849acb8620def3d5b"],["/tags/基本教程/index.html","8fddd8308edcb050b237060cf6a458fd"],["/tags/基本教程/page/2/index.html","f6952144c6bd556baba9f1f162a38dbc"],["/tags/基本教程/page/3/index.html","557f8a2deeeb8d8b05d74678d2be2eb3"],["/tags/多态/index.html","15d70233c537c693c563e68060a76d03"],["/tags/排序算法/index.html","b2d5f6de674d08d70531c077d67cb958"],["/tags/机器学习/index.html","e86aa3ee06dda0858323067612c6be7f"],["/tags/测试/index.html","d22e447d08745dd7b523d7081ca6b3ed"],["/tags/矩阵/index.html","8c137420f9a75509b77776e8f9d902f4"],["/tags/算法/index.html","150b5f3240be50910c982057f35c0a68"],["/tags/链表/index.html","e96661952813961cd3e0da00d45ae48a"],["/top/index.html","d713851591d60791a39f88e6ca47d440"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
