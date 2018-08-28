/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","32802cab14f5ca8f5f67df79ef996372"],["/2018/04/08/整合建立输出增删改查的链表/index.html","d14862caaa4aae1aee6567527d9f9d9c"],["/2018/04/08/选择排序/index.html","fac10a42a0888ed08702cca1dc0ba1a0"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","042c58a4ab8332560fe33760c082dec4"],["/2018/04/10/冒泡排序/index.html","a24c081b72b198e5566e476408352e3b"],["/2018/04/10/折半查找/index.html","172d95c15bb1d6dc05764df6aac6473a"],["/2018/04/10/最大公约数和最小公倍数/index.html","7a88e9f89697dc82c82e945c7bd6abae"],["/2018/06/27/python中的Docstring/index.html","f639a7f2fd6320c0774e6e19be8e5a6c"],["/2018/07/07/python中字典（key-value）/index.html","827befbbe71fb0ecf9e6795fdc329e24"],["/2018/07/07/python中字符串的一些基本操作/index.html","269c6c8704403832f0067cadc93503f6"],["/2018/07/07/python中的元组/index.html","daabe691fb7cade18b102c366eed7854"],["/2018/07/07/python中的列表/index.html","5e5c8ebb46f3a365c4fc3fe988573c73"],["/2018/07/07/python中的序列以及切片的解释/index.html","5a084ae28a032236139388c3d719545d"],["/2018/07/07/python中的引用和切片/index.html","9d0f7ab20f2a1f30883e3f7048728e77"],["/2018/07/07/python中的集合/index.html","5343cd3ed46523c68b4b2728cf646a53"],["/2018/07/22/利用python进行文件的自动备份/index.html","deee78b5fcc19c1f921341c4adbdb2ef"],["/2018/07/23/finally异常处理/index.html","2b2527ee0491cfdcaeef1e73e06ac99f"],["/2018/07/23/python对象的实例化/index.html","d7e8beeab8b28ad1046fbb502509705b"],["/2018/07/23/python日志模块/index.html","3a84c23b616c887ff76321907b031505"],["/2018/07/23/python的pickle模块/index.html","090b544f4a8396097f133ee9ea6a5206"],["/2018/07/23/with-open异常处理/index.html","0930a55eff284de2d18a6098eb924e08"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","b86b37650829535b285855051d5bab9e"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","18edccbf9a4704f2c89cd825793023cf"],["/2018/07/23/在打开文件的同时规定编码/index.html","39810b0e3ff381854d4e1c3630fbb3c1"],["/2018/07/23/文件操作/index.html","5ed71dc2c9ed4b56a91e9b8ccd2f0c56"],["/2018/07/23/用户自己引发的异常处理/index.html","3eb9e4f365d492dba26e6a3c37a1de54"],["/2018/07/23/简单的异常处理/index.html","6f09b0a4348c6c2f6eb944673bda995b"],["/2018/07/23/类变量与对象变量/index.html","e2b56c34419ff1f2ee07e6bacb2689c7"],["/2018/07/23/继承的运用/index.html","7012375c2f4cf319c758ac6e23fcc06e"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","74bffad706d433b261845cc86df0d0f3"],["/2018/07/23/输入输出——简单的回文判断/index.html","8aa7a720acfd89c96fb31e82f3cec58b"],["/2018/07/24/assert语句的运用/index.html","c63355e3d85e9d88377379ad1331338c"],["/2018/07/24/python中的lambda函数/index.html","831aef155c2ffe62556c3f3b4bd96433"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","4a09baee9e3ab6bfd16d56f04ccd8feb"],["/2018/07/24/列表推导/index.html","cca9bcaaba57754a56f6cfe1ff4221a0"],["/2018/07/24/在函数中接受元组与字典/index.html","3f1d4f84ce2008b026ff0414633d98ed"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","dc31b09a6e7d712ef431e5e3da6b809c"],["/2018/07/24/打印九九乘法表/index.html","0bd89a25b3e5accc1a182308b6ae26e2"],["/2018/07/24/打印直角三角形/index.html","1e16858967777d9180bfa249443cc889"],["/2018/07/24/装饰器/index.html","52131d7b0fb9af922841165d7562d475"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","20155d08c5adce3f672240680f75a526"],["/2018/07/25/python中字符串的一些方法回顾/index.html","3a0cd75fd9c54e005195a08c0fcdb204"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","c26a97d6fef4570334bbafa1f3a1ce78"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","15f55a9adf79a3a7436ef9f67b99e16e"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","3408d20f242cc355ce02b53071576e36"],["/2018/07/26/python中完整for循环的实际运用/index.html","af5df07dba612a49e57c876861baf198"],["/2018/07/28/python中对列表和元组的切片操作/index.html","ecaf61a6d8835bd5217c34f89a973705"],["/2018/08/03/欢迎来到我的博客/index.html","63b30b7c1212fd2b2e466a9ab8e08e38"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","43b776dd99954bd637e065bf5ca1e5bc"],["/2018/08/07/Python中的正则表达式/index.html","a8e0a4b5c37da0b61956ae6e8f00d3ef"],["/2018/08/07/Python中的正则表达式match和search/index.html","4dcf7ca43330409a6da34c4897a6ab2d"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","433769e99cadd0f2b53113aec218c14a"],["/2018/08/07/正则表达式中的compile函数/index.html","fa32fe4bc3b0b5fd6ae6cea63689ed69"],["/2018/08/07/正则表达式检索与替换/index.html","d3c03e1b0289bbb7e8e2a03debfa7002"],["/2018/08/08/python中的__new__方法的重写/index.html","0c107aa496706cf4d002a20c603d212c"],["/2018/08/08/python中的多态/index.html","8c1fbf26e0af20be0b2ba5387c23b439"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","62e763ea163fba21494b44639291c703"],["/2018/08/08/turtle绘图库/index.html","6da1960e41b55215a39cf8fbdf0ef54a"],["/2018/08/08/单例设计模式/index.html","0d1cd8b1c657140145c0e66a87987ba3"],["/2018/08/09/Numpy库的首次使用/index.html","677a105c90be9190defcfce25dbd88b6"],["/2018/08/09/kNN（k-近邻算法）/index.html","15bdc5e491af60e2a21ea7a052c4b747"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","c9126d0b88b76f8bd10df7bdce05cfbf"],["/2018/08/16/kNN识别手写图像/index.html","546f56830c66a5de6eeae4409b95fe9d"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","c1b40f95d7b9e191b0540cfcab03d9ef"],["/2018/08/22/Ndarray对象/index.html","d188bf0d3fa82bcadd8dfdc8b7033348"],["/2018/08/22/Numpy中的数组维度/index.html","1bdbf6e91b29308a6bbe3cba7c287851"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","346a00308dfafc6de2cc162ccac4adcb"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","938dd10eaf6d042871e829ffe16e6b00"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","68cb42977404e7b64679b7622555d726"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","a20f5a2e99f5a34fc6f348840fa27b17"],["/2018/08/26/一些TensorFlow的基本操作/index.html","842426ca5d05decffcb43b4b70e8911d"],["/2018/08/26/交互式使用/index.html","92a84a5fc55a638e4cb5590c4e4acfed"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","0500fc998e3ff1c9b724c959ed3fde34"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","5e6b14d547c9d39152b4ef7205cd6c86"],["/archives/2018/04/index.html","b9b86982ba05ac103345260b5429a82c"],["/archives/2018/06/index.html","13e40a07bd766322ee5c34adab143cbc"],["/archives/2018/07/index.html","badaff6d3a8bcb75f552a19b838d5306"],["/archives/2018/08/index.html","044bfc69b2f84a69c00d0cc1cc6a0bda"],["/archives/2018/index.html","fa76d8fca962a89d407048f739ae6ae5"],["/archives/index.html","f960df0164d1c887d21f1673534e4d06"],["/bundle.js","b72599c81276ebe8e810936c96d3b802"],["/categories/C语言/index.html","06fe542f1115da5b751bb04774f97d5e"],["/categories/Numpy/index.html","ccb11ad39dec9036254a4f3c925c5306"],["/categories/Python/index.html","87b2354971fc2cabf58d36276dce46ed"],["/categories/Python/page/2/index.html","aa0d47d90bf923b1c0af7e755abfd016"],["/categories/Python/page/3/index.html","43156df3f9808b0244255ad706bccd6f"],["/categories/Python/page/4/index.html","2f82781bf537b9d2699b6956f3d5152a"],["/categories/Python/page/5/index.html","f883927f936b57eb7bd68f5a68957894"],["/categories/Python/page/6/index.html","555d1662a2f17364fddb6f6612d7f812"],["/categories/Tensorflow/index.html","972cf08f1ef12af193355012d4af0289"],["/categories/index.html","6ce1c44845d4a38c0151af2d1e902a0e"],["/categories/博客测试文件/index.html","a886af76f771e1f467e68891db8ad726"],["/categories/机器学习/index.html","ca5512a7a42563b67292d9c2c315a402"],["/categories/算法/index.html","774f551a129bef9c6d61bd5e6cb19e2b"],["/categories/随笔/index.html","7dda8714b703ff970281de4a741c05db"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","9e65c10cdf3574dbad5adaefa0da9416"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f89f142e76ef6af4644704e5541ad80f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","4b84da5e3a2ab5dc55ea03d1b1830446"],["/page/11/index.html","1e9a3edf8cadab121e7a5fd7eb781bd1"],["/page/12/index.html","c084e4e8cad0a367379424ad3631aa85"],["/page/13/index.html","db99ed7f82c4b9473d35bad9feea19b0"],["/page/2/index.html","76951286f1b1b46890350bd5c479b994"],["/page/3/index.html","ae273078618da7d5f6dbc6561dc97aaa"],["/page/4/index.html","ac3029cee908cad9feb1eecf64941a8a"],["/page/5/index.html","8d79954e12175df090189f096aa26b95"],["/page/6/index.html","4a337cd0eea5f709fe437c216219ee3a"],["/page/7/index.html","fd8e204590d3eddb74590e26b4e234b3"],["/page/8/index.html","eff0d76e280e356949d865e0c1f3ea11"],["/page/9/index.html","8a1fee1ce51e6ae62f66a52f096e6cf9"],["/style.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/sw-register.js","0ed6fdddde2b08af66d067deb486f74e"],["/tags/Face/index.html","2f538616f6edd36846dcfd9e6a94b7f8"],["/tags/Java/index.html","deadfbf04dbd4c30575daf3e22cee9cb"],["/tags/MNIST/index.html","5e34987bb76deaf52644fc3a11939cef"],["/tags/Numpy/index.html","4def3d81cc3f689662bafe559c69019f"],["/tags/Tensorflow/index.html","01db97ba906cacfd3bec659eec4c97ad"],["/tags/index.html","102217a3bc1238994f6eae1a852bcae3"],["/tags/k-近邻算法/index.html","d3c86c72111e434a51118e023d2bde5c"],["/tags/matplotlib/index.html","9716b6f250564e7f91f503cf514d4bec"],["/tags/python/index.html","097cbc750e4f977bf341b40d1d2b0903"],["/tags/python/page/2/index.html","957a0b82132baa66e27399f78c3f61df"],["/tags/python函数/index.html","f3bb34e3cda9126f668946723dcc0ec5"],["/tags/python库/index.html","b87c03acb9280ccdfdf0ebdd712ff740"],["/tags/python异常处理/index.html","bbe44ea96c1f43ac92cc7447f43d2c92"],["/tags/python模块/index.html","a3a218ac43a1c9a48efe61bc3f669e20"],["/tags/python正则表达式/index.html","81ca48ea56c763af6ddb2aafb8b4f44a"],["/tags/python面向对象/index.html","4732cef2d3b2a8257f57fb5d4bf05239"],["/tags/python面向对象/page/2/index.html","f73ab2a31f7a2915c421beecf60285e0"],["/tags/动态规划/index.html","fbf5fed85e4e1b0cfe022fe104cd8579"],["/tags/基本教程/index.html","1776fcfb763c49abe13b84a25cc358b6"],["/tags/基本教程/page/2/index.html","cfd1ef9b7c6e3b010438e54942623090"],["/tags/基本教程/page/3/index.html","03c5bbcf5311e97d7e7b84a7e41feabe"],["/tags/多态/index.html","65cd8bc14ef660867b2b3edb2bf4751b"],["/tags/排序算法/index.html","a7ac2dcea5e895b39ea854841c51c8d7"],["/tags/机器学习/index.html","76c675054faa19a142f2fd40cb31a562"],["/tags/测试/index.html","e18dd41f441c50ed62833ba55d88e42f"],["/tags/矩阵/index.html","b4cfd591063f58340eb8c3b49a2b945f"],["/tags/算法/index.html","28b27a093bb8f7f441d5c2b53d39284c"],["/tags/链表/index.html","ccba1d16c4179962612e493b13efa6b1"],["/top/index.html","a51172be1c4b5b7ab8cba2b7d090b219"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
