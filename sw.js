/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","326176bd4e6b4823aba20e93ef01cd7f"],["/2018/04/08/整合建立输出增删改查的链表/index.html","52f23f2af67cc185a9bc2f20bd45ed31"],["/2018/04/08/选择排序/index.html","f9b9881667c60c4c736933da96007631"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","8f370252fdcd859a922d405d07930c1b"],["/2018/04/10/冒泡排序/index.html","d22d6475087e426383052dd23135fe7b"],["/2018/04/10/折半查找/index.html","149ea032b8db05d8953d46a911e86e7e"],["/2018/04/10/最大公约数和最小公倍数/index.html","493e350be74f3dc937aee4e3f7e0a6db"],["/2018/06/27/python中的Docstring/index.html","a0d80893fb3f1e3dd76f07c65abebc73"],["/2018/07/07/python中字典（key-value）/index.html","9e4eb78504bc186f10275d4186633803"],["/2018/07/07/python中字符串的一些基本操作/index.html","f0543143ff8da92bf8366b047ed0754e"],["/2018/07/07/python中的元组/index.html","545b0d48783e305ae86abe1052a0acc0"],["/2018/07/07/python中的列表/index.html","6735ee3f2362c5a905d0f8d0ff760a59"],["/2018/07/07/python中的序列以及切片的解释/index.html","1e7205310228c33b11afe45d7cef6b80"],["/2018/07/07/python中的引用和切片/index.html","b6433a25e25e89aa07d069387555bb65"],["/2018/07/07/python中的集合/index.html","99f5a118b76d61edc529982216b5cd9d"],["/2018/07/22/利用python进行文件的自动备份/index.html","174a0cba6901d396bbb33ae988ac3fe7"],["/2018/07/23/finally异常处理/index.html","e7bc24531e0edcda0dda7792e1885872"],["/2018/07/23/python对象的实例化/index.html","4aa3a07cdd0295e4242703251c01393e"],["/2018/07/23/python日志模块/index.html","e4a14b019076925e42c2758027b3e46d"],["/2018/07/23/python的pickle模块/index.html","fd3bc31eaf86f3a00992a49da4d47996"],["/2018/07/23/with-open异常处理/index.html","5752c1f682bd234b9251bcd1095878c8"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","3e1ac64f3d34231d6985bd522940abff"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","9b25b8c9b6219be8652a7775b041443f"],["/2018/07/23/在打开文件的同时规定编码/index.html","18d3eb4365493d4f2df3f6d011eaad2c"],["/2018/07/23/文件操作/index.html","3105f1e2cb97399d63dbe624466bead3"],["/2018/07/23/用户自己引发的异常处理/index.html","a6fd1d4d42632e1032e023d732e8840a"],["/2018/07/23/简单的异常处理/index.html","86c5d0b871d1e5cbed952413d306cd76"],["/2018/07/23/类变量与对象变量/index.html","634117f94f1dfdb0a6c9e5e5f3fc116f"],["/2018/07/23/继承的运用/index.html","5223d8c4c8425a502d587399882b9270"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","1006a4fd8e80b5410d98206884d18885"],["/2018/07/23/输入输出——简单的回文判断/index.html","f14498d0da64463bb35407b7639e9a0c"],["/2018/07/24/assert语句的运用/index.html","5ad68cb2ef735081d6d1b69ba7784165"],["/2018/07/24/python中的lambda函数/index.html","d01129da420d205bd1794d5b982ae6c7"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","dc0ae4b593df547fdbf5b5ae01ce1399"],["/2018/07/24/列表推导/index.html","26a6d085f195d82d9d55bf96eb565560"],["/2018/07/24/在函数中接受元组与字典/index.html","b34485b1529aa4c9054012ca98c449b5"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","d1577350bb158846ce1a3cd79fb6f8c0"],["/2018/07/24/打印九九乘法表/index.html","f94589699a8c8b89404d6f1acc924c42"],["/2018/07/24/打印直角三角形/index.html","d5fe4ac672177c3c47bf368d7bccfe50"],["/2018/07/24/装饰器/index.html","86ae902770a4f16c5980a949b05882dc"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","8c2034747f54db9aa08d37a1d2895d8c"],["/2018/07/25/python中字符串的一些方法回顾/index.html","93f641dd7f0d997c71bf0da5d10d48c4"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","423dad15c838e225c4914fa83e85162f"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","5ab1cb3c838758efaef02e274bfecc61"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","528e42f1a2de6b5bb99a616c0e682277"],["/2018/07/26/python中完整for循环的实际运用/index.html","c5c6bb59fdcfb010c6b5dfc967bf0ab3"],["/2018/07/28/python中对列表和元组的切片操作/index.html","af4e2017433d91cb19b64edcb5b4ffd1"],["/2018/08/03/欢迎来到我的博客/index.html","78c562f42f93df79b146399bcb2d6087"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","8c4a7c9d32b9ac220b9ee1c2eb8c5175"],["/2018/08/07/Python中的正则表达式/index.html","3de6cbd687c5f81135ab9f46f4507340"],["/2018/08/07/Python中的正则表达式match和search/index.html","bcde60b103cda0f2d9f6ec4546be2120"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","b8d6861d0463179e66495702f6a99eaf"],["/2018/08/07/正则表达式中的compile函数/index.html","fa0073168fba8436450c7e7a8925fe41"],["/2018/08/07/正则表达式检索与替换/index.html","63bc75527198d63a51f0da3e8cc59612"],["/2018/08/08/python中的__new__方法的重写/index.html","2ad3eb97589e70f7c401c33014e0f20e"],["/2018/08/08/python中的多态/index.html","8fab6af82b1080d2f970a7da3cac1f6e"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","d78e72b519df89e4cb9298d680e360c8"],["/2018/08/08/turtle绘图库/index.html","70f3ce0a6aed08f580fb612cf08843c5"],["/2018/08/08/单例设计模式/index.html","855e3c963d0fadd419ecab0536d24283"],["/2018/08/09/Numpy库的首次使用/index.html","c45ea5011a461d06d8a884f61bf950bd"],["/2018/08/09/kNN（k-近邻算法）/index.html","7e6b749d18e1190de1c12f2f7a13830e"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","ee66fa4ff46cda192be66c52f4794a04"],["/2018/08/16/kNN识别手写图像/index.html","0f5761582c85d15eb01a9ce564dfb4ba"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","23f31ca899e6ffa4a4d0a53abc4e973e"],["/2018/08/22/Ndarray对象/index.html","1e0318320a01fa23cdc78640a32412ab"],["/2018/08/22/Numpy中的数组维度/index.html","798b660844dc95c8cfd59b61c981cdb4"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","e19f74f69c4d618ca99db5710b3cda9f"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","7f8fb01eda9d38e21d3bbae3e9f108d4"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","8264b02580b0892d08a0c82cc3c5c7ea"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","3010eb8b9bdd65884bd44cd6081c0e99"],["/2018/08/26/一些TensorFlow的基本操作/index.html","4b065d3d9698ba459a3a263a9afad3fc"],["/2018/08/26/交互式使用/index.html","6b16b3d9d511defbd065f2c9df23aa60"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","28fd01c3d266a0bd09786d2358ba1fbd"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","d8b1884018ced1d7768e2d165a4f5301"],["/2018/08/29/将hexo自定义域名升级https/index.html","634c4549ee7736397ef8afeae010603f"],["/2018/09/17/域名备案成功/index.html","a284f431d5de7487cc88514d6d9df7bb"],["/2018/10/07/Coursera课后作业——ex1/index.html","5b95cbdd242b962ebbbc92525e6b9a1e"],["/2018/10/21/LogisticRegression(逻辑回归)/index.html","fdcd4ce52ede3bc3422f8a23ab484f09"],["/archives/2018/04/index.html","ed8da958efdfbd4debe9bc2b11d8c280"],["/archives/2018/06/index.html","37b52588e1b350c5d081791ecd07a380"],["/archives/2018/07/index.html","042207efab323df7206d9acd83442f50"],["/archives/2018/08/index.html","4600421217b8e62b1ee9c3e3c8269cec"],["/archives/2018/09/index.html","daa6da28346df6c2c951445845f13148"],["/archives/2018/10/index.html","3a8b0607960297267e6a1a46f5839b78"],["/archives/2018/index.html","3640d18157925f56db5d3cc98814432b"],["/archives/index.html","52a1beab029d97d24b65fc8eee616b8a"],["/categories/C语言/index.html","f3398ce70fe52d7b4325ea9af4ccf3b9"],["/categories/HTTPS/index.html","35519c4d011b5514d5ab970a8fe2dfcd"],["/categories/Numpy/index.html","a4f5aed27abf1364d9ba84c07aee7f23"],["/categories/Python/index.html","83b408525869f4007eb54773839ac7b1"],["/categories/Python/page/2/index.html","f1f65237b7103e014ee02c374574dc77"],["/categories/Python/page/3/index.html","641f25497aefec2ec7cf8093e74b1d7a"],["/categories/Python/page/4/index.html","5a92b66bd2b1fb6d4ab493f13bd85ff2"],["/categories/Python/page/5/index.html","179d027cf1a313fb0c7e033f58ef2cb3"],["/categories/Python/page/6/index.html","3818c9d0e77a29079d1442935d555f83"],["/categories/Tensorflow/index.html","096b8b1e6d3191f67cdf9669638d7dd7"],["/categories/index.html","3bce52ced02ff72191b1140387b061e5"],["/categories/博客测试文件/index.html","f245983b18576a47b04906984032a0fb"],["/categories/机器学习/index.html","33d073ac4df8ac89485b6f5ff8404d1f"],["/categories/算法/index.html","519aef75e6d0780a6d61edbbb8b0a6fb"],["/categories/随笔/index.html","705c12b70212812980ab51282d7ada57"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","9d9a0d5b5c4957c76eb12265972a23bb"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","498b293d6668332c1cb181a72363d947"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6913129efa3a2b70f0df9828dcfb4c68"],["/page/3/index.html","beddd7cc0abf703468c3ac9bbba5077e"],["/page/4/index.html","ff2e1b2ec2ac75cbb5197262167c030b"],["/page/5/index.html","0936aa016c4cb53af7876af4ad83ec9f"],["/page/6/index.html","849a3372ed697e14e6f74b16dcbfbba8"],["/page/7/index.html","5c818a18bb18e5993e93f9c52089b610"],["/page/8/index.html","2d972ca01b4006dbb6ef451dd249156d"],["/sw-register.js","13fecc973790340e18f75de933a5a1af"],["/tags/Coursera/index.html","2fcd2902ce91577080d9fbd0c0ad1a07"],["/tags/Face/index.html","8b76bd9b2d6fcfd6795092528d640b3d"],["/tags/Hexo/index.html","68af81fc0b41aefc20e934798ee56647"],["/tags/Java/index.html","0bda7bf3ecd4b48189dc758f61ec1e99"],["/tags/MNIST/index.html","fb74f801791828fe7c1c4351b2dda957"],["/tags/Numpy/index.html","dbfbc011724caa16d237f66bb9d12d42"],["/tags/Tensorflow/index.html","714dc0864c5a2431575ca95c7c42e9d0"],["/tags/index.html","b0835eeb629953af39164f0bbe9a06a0"],["/tags/k-近邻算法/index.html","2fe7d1109ac02a417095d9d7f3b7f1f3"],["/tags/matlab/index.html","adeed648c04b0e5494512608995b12a7"],["/tags/matplotlib/index.html","677af2c850c3087a3a267e4edfc5e1eb"],["/tags/python/index.html","f4771717abf1f36ec93c08af60e9f994"],["/tags/python/page/2/index.html","96cd1a1865b9bd338cc1bdb97ce978f0"],["/tags/python函数/index.html","36962a500582f38fe6280bf90a9de274"],["/tags/python库/index.html","f3608ea8423a2aa8b77ec5367a2b4287"],["/tags/python异常处理/index.html","424eccb26b393368d66f28ba5a39aa58"],["/tags/python模块/index.html","21868ea0c21ae4dde573a9752ef70584"],["/tags/python正则表达式/index.html","bc96b710888861571f2f23ccdf932abb"],["/tags/python面向对象/index.html","79595888d8711e8d010d9a2d16decc06"],["/tags/python面向对象/page/2/index.html","aa3eecb0712e235745e134269040b612"],["/tags/动态规划/index.html","899e56126f094fbfae93a544410ea185"],["/tags/基本教程/index.html","f3a8206726960c2ba9c971501f76d4c3"],["/tags/基本教程/page/2/index.html","e398aeade7138ed81ce2768bf4211770"],["/tags/基本教程/page/3/index.html","34719390b9b36d0c845a1ea117639fb2"],["/tags/多态/index.html","9a25dd1027280955781525e496fdeb17"],["/tags/排序算法/index.html","7828e92f6b01eb901d941fa669fb19f4"],["/tags/机器学习/index.html","7ac7fe5dcfa3a19d35f0618b781b72bb"],["/tags/测试/index.html","2545c1c4f94f46cfa6e017e1474228a2"],["/tags/矩阵/index.html","d2fd37cae899e22434a37bbb420e6fdc"],["/tags/算法/index.html","6f3cc306d109efbb35cfecf82bc2574b"],["/tags/逻辑回归/index.html","3cf7a02cc036fdfe7be9219f6676ac03"],["/tags/链表/index.html","5134a746ab8d7464bf162c8414ed9215"],["/top/index.html","fea53b3d0958b6d1c8ae55ab59b17df3"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
