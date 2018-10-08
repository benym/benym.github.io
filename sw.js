/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","f587479d856d85620191c1b15a50050e"],["/2018/04/08/整合建立输出增删改查的链表/index.html","2bff4f3076e24da7b63cb446515e0390"],["/2018/04/08/选择排序/index.html","2dee6b47ca922e2868f15a2c62ff6019"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","aa0e343a17566835a17eb064e86ffd51"],["/2018/04/10/冒泡排序/index.html","c8db50c5f70920085a383878f9cdba56"],["/2018/04/10/折半查找/index.html","4af5b8d2c08d859918a2171a0fee82ee"],["/2018/04/10/最大公约数和最小公倍数/index.html","80049143a546e21e1c5b17be6ca77fe2"],["/2018/06/27/python中的Docstring/index.html","17739b5e93ae273410a1293908c691b4"],["/2018/07/07/python中字典（key-value）/index.html","72e0139f8e3c49a86f0a87f903ccc20d"],["/2018/07/07/python中字符串的一些基本操作/index.html","cb6d5164ebfa45b0ea7e26a916c8bf5b"],["/2018/07/07/python中的元组/index.html","02ac28eb72fee05b0883d265f16a6cca"],["/2018/07/07/python中的列表/index.html","73e3bbe9473478b432ba1f099c10dc28"],["/2018/07/07/python中的序列以及切片的解释/index.html","03326bb7722aad85169d672de0979980"],["/2018/07/07/python中的引用和切片/index.html","825eee79e39cd4d612df4bad95782cd2"],["/2018/07/07/python中的集合/index.html","d327d0945975a89659459837d2d80f38"],["/2018/07/22/利用python进行文件的自动备份/index.html","22257138be46645158a2ae7f30bcf0e5"],["/2018/07/23/finally异常处理/index.html","8ad2f275313a3ba64ca3f2f405c28e81"],["/2018/07/23/python对象的实例化/index.html","3f9fa32f69060f1f3a2a42c6399ee7f4"],["/2018/07/23/python日志模块/index.html","de5f9b8e99ffb58f3a92831b70a3e113"],["/2018/07/23/python的pickle模块/index.html","9babd3c1dda4958a84e94aea97918f4a"],["/2018/07/23/with-open异常处理/index.html","f342008904f3a3856acdf29bef1d6cbc"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","79297a4787e63b1b7ef5a30a624d1c44"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","441b60d2a59fe946c240700488ae48b7"],["/2018/07/23/在打开文件的同时规定编码/index.html","d0b930a55f9c81162567fd6bbfbb9fc0"],["/2018/07/23/文件操作/index.html","37940672ec3fc76e1d372006e9caa2a9"],["/2018/07/23/用户自己引发的异常处理/index.html","bd54805c95299e93d34459d7ba4c0114"],["/2018/07/23/简单的异常处理/index.html","fe19104735e584093ad9f91899d7af7d"],["/2018/07/23/类变量与对象变量/index.html","1c11b92453e326ec599c046c655c405c"],["/2018/07/23/继承的运用/index.html","2eace0a6abf859f9161eba54b3f09b84"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","3166f1bfb6136d77ce8f9b07fb33997a"],["/2018/07/23/输入输出——简单的回文判断/index.html","26d888528856cf0a899f3db915b68187"],["/2018/07/24/assert语句的运用/index.html","e81c5cbc0c0d5dfe60ab694afb386203"],["/2018/07/24/python中的lambda函数/index.html","24bfaf67990cb0651028aecb4ba0b454"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","c4afaded3a37c17cb2170be752c4fe5d"],["/2018/07/24/列表推导/index.html","8f806cc094e26071146d5fc5a88b779f"],["/2018/07/24/在函数中接受元组与字典/index.html","c0114d3cdac473ce8819551d0e6fc0b1"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","08209945d380416d3e9976480582a1f8"],["/2018/07/24/打印九九乘法表/index.html","43f61472b6a8815aa17e83502855f792"],["/2018/07/24/打印直角三角形/index.html","ea52892c5101b4433f06b5cdb39e5249"],["/2018/07/24/装饰器/index.html","5ca4eeb425fab76cfdc258341d376281"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","87029d24cea55915e928a98e19e77f29"],["/2018/07/25/python中字符串的一些方法回顾/index.html","1d44e7aa663ba561bb74618cf46fe6ce"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","2a78b740337ec080de9d1edfc4197b84"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","66efe22c9c7a88dd89ec43e860be8e48"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","79272b0247097b69f41fc2428faec1e8"],["/2018/07/26/python中完整for循环的实际运用/index.html","d6a59c358531d4dddc1af69f7b537e32"],["/2018/07/28/python中对列表和元组的切片操作/index.html","987f6b0a8b27c86e1fc399e667564dd1"],["/2018/08/03/欢迎来到我的博客/index.html","bf977f2c38d0accda23414531c7cd12e"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","a7e813e6d3fa29528dd9bd6eb0573e6b"],["/2018/08/07/Python中的正则表达式/index.html","0f00f7f93c2da2fb225b0b68cb7dd9d9"],["/2018/08/07/Python中的正则表达式match和search/index.html","0cc7396baa8633ce2a64655a873fd18f"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","2845e2dd729580cc839ffae86e12a7f0"],["/2018/08/07/正则表达式中的compile函数/index.html","65768d6c50de75998c3800f75352f47e"],["/2018/08/07/正则表达式检索与替换/index.html","3920d672ed61a6e712ac817c03278178"],["/2018/08/08/python中的__new__方法的重写/index.html","231b218c6712ef144bd737f18e1e1bda"],["/2018/08/08/python中的多态/index.html","72773ec4d0295e04111861473f7be064"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","3aaca9d63903f476a0532e6ef1573ede"],["/2018/08/08/turtle绘图库/index.html","b7acc1b228db63c2b70c4e60b9c73115"],["/2018/08/08/单例设计模式/index.html","ac3defddd2a83e804559a80cd34708b6"],["/2018/08/09/Numpy库的首次使用/index.html","36386caacd0df8fba905804ff48d64c6"],["/2018/08/09/kNN（k-近邻算法）/index.html","99839d94dae3da003c97f11775b9172a"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","fc4a54d1997ae3113f6410f7265a815e"],["/2018/08/16/kNN识别手写图像/index.html","d94dc0b9bab7993ae54dfc17c4aeb598"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","d06d4522fff609d36bf66abf82e11110"],["/2018/08/22/Ndarray对象/index.html","b4ed2d0a9df6317d38a793dbb1ef7bcc"],["/2018/08/22/Numpy中的数组维度/index.html","15939c2a4c93d9dc5e1f48aa994fa275"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","9dd07ed14f7ae198ceb8a425d38e9a0a"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","8e6ae96d8c60044fea0f6d6cd07e29af"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","58cbcd178d4360d2d00a018850393cc0"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","d29071172007c30624e2d55ca5686d91"],["/2018/08/26/一些TensorFlow的基本操作/index.html","88adbc7952c3cfcf0c6b975dc4d1463c"],["/2018/08/26/交互式使用/index.html","1407cc4ea760ac3ceb67dfeda9381d6e"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","89537448369b7619eb4965d9eafec01a"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","ba7325ab70c92736d71230fbf818b486"],["/2018/08/29/将hexo自定义域名升级https/index.html","0e59860abfd4d89e500545a2d8a871ba"],["/2018/09/17/域名备案成功/index.html","23257304df934a385b4c14123bc4e0ca"],["/2018/10/07/Coursera课后作业——ex1/index.html","5089341d9776dadef3a695b22375cb38"],["/archives/2018/04/index.html","5810b8cc22cc56143e8ba22443c2f82d"],["/archives/2018/06/index.html","c56998d3b01beb92d88c70fae00f200e"],["/archives/2018/07/index.html","170e4c63cf62aeb352b8d358f32ffec2"],["/archives/2018/08/index.html","f86120ace34cee06bc0b1591b5edd650"],["/archives/2018/09/index.html","3c08a3b7a92d894261add366dba78bb2"],["/archives/2018/10/index.html","361b355781b0cec7517b151dcb8ecf35"],["/archives/2018/index.html","6b61adcd34968f19a9acade20cf46303"],["/archives/index.html","d525d1cd89d81ebf88b5c76f453d370d"],["/categories/C语言/index.html","216aa30289daaf810f244be6c824c58d"],["/categories/HTTPS/index.html","e43bc681e69e76a4f6a3bab2fa1e144b"],["/categories/Numpy/index.html","709725366dc1e92095764278dee1052b"],["/categories/Python/index.html","9ef8658e619e81e386c354c20fa79716"],["/categories/Python/page/2/index.html","b497c7a73ad5c3c1e3745714c66f010b"],["/categories/Python/page/3/index.html","b2ebc5d9ac576914bbdcd3a0d3725937"],["/categories/Python/page/4/index.html","0f4bde91c9bed8af14d2b673d30d859c"],["/categories/Python/page/5/index.html","a01bcca76e3422a9ac9621eb0f405e27"],["/categories/Python/page/6/index.html","f414c8192dd113f96571bf6077867009"],["/categories/Tensorflow/index.html","60e755335465f406db571dea12432186"],["/categories/index.html","fa4b1c5143b9ce448357e9c9e3bdd3c0"],["/categories/博客测试文件/index.html","0652a164f725344e46ffaf4d394eca1d"],["/categories/机器学习/index.html","97e3f37cf1990e2ced06ffd1238265e0"],["/categories/算法/index.html","4f9f8792a81f4c2efa60dc5e00025641"],["/categories/随笔/index.html","c5b8fc3e13d9da9eac2a0eaa5c2a8857"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","90822f59dc9b7b8a3d3d414190f8da93"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f749e6f8e14b2cd1c82e8c77304c15ca"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","89da44ebf1d0467798866c0ce69fa05c"],["/page/3/index.html","4be38a52f671f0250ace2c069560ac57"],["/page/4/index.html","395e3ff6c321fcabe37e9a3aa784e1c0"],["/page/5/index.html","bb8e8332f777c2598bf6707773bf391e"],["/page/6/index.html","a72d2c3c18f058cbe82a39e04e541c06"],["/page/7/index.html","8ddea3ad295e72fbf5dddcbb1eac0e78"],["/page/8/index.html","75d2245e56ea5dc130ae5fe1afa0c12c"],["/sw-register.js","708dc270fac7e97448b4a28d6727315b"],["/tags/Coursera/index.html","0f061579b9ff552b58b034121c0d7ede"],["/tags/Face/index.html","ce9a955c681a3b2a99b9a2e6be0a4499"],["/tags/Hexo/index.html","27496051c017ac9450263232e1062a7f"],["/tags/Java/index.html","208a6004332bf231f755652b877d7f54"],["/tags/MNIST/index.html","0e51010e3a8d6f0a383143edb55ea158"],["/tags/Numpy/index.html","236a59822ef67b9f07a62a4e5c90f897"],["/tags/Tensorflow/index.html","613042fffc7aa5fcd6ea94b3cc6d404a"],["/tags/index.html","7c9db64e3de02ba473b178a6e2374a55"],["/tags/k-近邻算法/index.html","60d8b81ebf6ca6e542363e7b7a2cf79f"],["/tags/matlab/index.html","939f8a24baecc7a90c033e6ab738b682"],["/tags/matplotlib/index.html","30f345b1a0bacde52db69cdedf30d830"],["/tags/python/index.html","baaf940b4eb2c5583ba4113e798f0651"],["/tags/python/page/2/index.html","4685ab6644f84adf2a430ddeab221c9d"],["/tags/python函数/index.html","838261eb54d44692958bca2bd94eb44c"],["/tags/python库/index.html","b80afbe679e3a02d061c5bdb8504051b"],["/tags/python异常处理/index.html","ea27a49b1f1db720ea46f0fc12353ae6"],["/tags/python模块/index.html","89e06b258bff4819cb7b2f2c559be77a"],["/tags/python正则表达式/index.html","05301d2ec545bc52eebc12e7f33d9ba4"],["/tags/python面向对象/index.html","904f9a1272da02b2d65476dc759c4ef9"],["/tags/python面向对象/page/2/index.html","c225b47bcb244354c6277b8722ba7183"],["/tags/动态规划/index.html","85a2b146616d9fa95bb91a000240b867"],["/tags/基本教程/index.html","25f3df3e4eaccb6dd53f9628e1a64074"],["/tags/基本教程/page/2/index.html","aacafcf95943c76ddb8e686529e5765f"],["/tags/基本教程/page/3/index.html","023af0e7000110a35018c2e3e8be4374"],["/tags/多态/index.html","808ece4b1c80b1dc551ea9c5eaf34b3b"],["/tags/排序算法/index.html","57e724a2731cee7a82dd7463706024e2"],["/tags/机器学习/index.html","3b558fac1b1bff9834ae3329d28c6e7c"],["/tags/测试/index.html","f64373b2cf85d3be53f33fd939d9b339"],["/tags/矩阵/index.html","84cd6cadf60caf93d75fe172cff0b8de"],["/tags/算法/index.html","3cbe071e19564c4057860d9ae41eb576"],["/tags/链表/index.html","f90c776bc0fd41b892323fedc2c4d121"],["/top/index.html","263be6d0b1065c17b4a9a4dca499a903"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
