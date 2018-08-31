/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","8b2badda990aa7ad70f465f43658873e"],["/2018/04/08/整合建立输出增删改查的链表/index.html","9fc619866dfa66ae0342702a738563a9"],["/2018/04/08/选择排序/index.html","e2b63b3a6c2ebf9c06752bc631f5ecbc"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","db4bbf39d53a177f4b51a889c67263c2"],["/2018/04/10/冒泡排序/index.html","9ae2574bcca0f0907e25f37365bd05c4"],["/2018/04/10/折半查找/index.html","d478405778e9b4fa2731eb8c38132fc2"],["/2018/04/10/最大公约数和最小公倍数/index.html","c4712e2b8fe88a7422eb34d4728a9510"],["/2018/06/27/python中的Docstring/index.html","a79e1293f4c1342f1ce7e1e5f8bafb99"],["/2018/07/07/python中字典（key-value）/index.html","080a05f84a0644a0e87a4c8ca0a0f456"],["/2018/07/07/python中字符串的一些基本操作/index.html","1cbb3edbe9682d304ee9657bb2b2ac9c"],["/2018/07/07/python中的元组/index.html","7f3d66c5ec84a414f00a8dcddc027a47"],["/2018/07/07/python中的列表/index.html","d645c22f12b448cf530dbee8a3f969a5"],["/2018/07/07/python中的序列以及切片的解释/index.html","825953a09fcdce870d4f82823b9134bf"],["/2018/07/07/python中的引用和切片/index.html","4495b834eda648fe16e0d64483e478bb"],["/2018/07/07/python中的集合/index.html","bbd3edbf1979d595a938195c2ab9677b"],["/2018/07/22/利用python进行文件的自动备份/index.html","91b67bf79c3c15410b45d4066f643f6b"],["/2018/07/23/finally异常处理/index.html","e5764ca6bd7c51f5c674301c1e3a6750"],["/2018/07/23/python对象的实例化/index.html","a108e9002ab9c7f4af91378b7ddfb0b0"],["/2018/07/23/python日志模块/index.html","930012f2eeb6fc2394fea575efa6b240"],["/2018/07/23/python的pickle模块/index.html","27b805efaf455b625496bff6b9d60717"],["/2018/07/23/with-open异常处理/index.html","2b5144f5a383e9e050fa2fad49d14096"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","19363713e9059eb78529400579e68163"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","adfa03b8e36d8e596b0be73d9f65471c"],["/2018/07/23/在打开文件的同时规定编码/index.html","a9148a269aa11b6627b8700e327b2010"],["/2018/07/23/文件操作/index.html","a5a0ead730a5e811f4f36a7cd2b29acf"],["/2018/07/23/用户自己引发的异常处理/index.html","ba1dbf0011aa17096e4c1c5adfaf332a"],["/2018/07/23/简单的异常处理/index.html","d8e90e3dfe810ee0a3410aa5b4d3c47f"],["/2018/07/23/类变量与对象变量/index.html","e0fbfe35108e7d3c9c6ade10d01da959"],["/2018/07/23/继承的运用/index.html","e6984e7928add2451ece8cc65740c163"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","fb1f370db8eccb35385fab0757d4a3e2"],["/2018/07/23/输入输出——简单的回文判断/index.html","8ef89ec40b482fd6087309e087d227ef"],["/2018/07/24/assert语句的运用/index.html","7dad56976d3851f91972910da5e27422"],["/2018/07/24/python中的lambda函数/index.html","a5825cac73650edb1267d1f3a43c840e"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","ea143cba605ecc1e8d5eccc60e27bfdf"],["/2018/07/24/列表推导/index.html","9a3fac791d34a2f4ad8e9753ce9ea320"],["/2018/07/24/在函数中接受元组与字典/index.html","39e8b22623728c20b859580f736a8c94"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","2dd10066036eb5516ec1885b6b6bfce4"],["/2018/07/24/打印九九乘法表/index.html","13bf797309fc1016dc077fa84b1c30dc"],["/2018/07/24/打印直角三角形/index.html","011b6a03ec1c2c03d5666631b5877fd9"],["/2018/07/24/装饰器/index.html","c94d87b228da0b7f0222b58bebe9e3b5"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","f3c2ce2129334a12eada47fdc9deecc6"],["/2018/07/25/python中字符串的一些方法回顾/index.html","ec74e079ba099573f01152278d3cb006"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","c4729c98f373cce6bceed0620e433cbb"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","4e393a320fb004875b9d61870975875c"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","5865a708dba2482c4268302d54f39c29"],["/2018/07/26/python中完整for循环的实际运用/index.html","b57ce7a4c51f558ea7112efc029a5163"],["/2018/07/28/python中对列表和元组的切片操作/index.html","408a1a954423bd8c09194fab82875e7a"],["/2018/08/03/欢迎来到我的博客/index.html","ebe216ad13d66817e646a6a109f342cd"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","85323ee7adb3df35a38c93c82a7548e1"],["/2018/08/07/Python中的正则表达式/index.html","b2f7486f4afac220e9fb87540a768f74"],["/2018/08/07/Python中的正则表达式match和search/index.html","1c0b6b3820cacb3f32c70f8d4663e601"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","303aa841cf261cb538bef8985955e27b"],["/2018/08/07/正则表达式中的compile函数/index.html","f54bcc1c4336a1b6229bba29b1ca82f6"],["/2018/08/07/正则表达式检索与替换/index.html","43c45305436b86ff9d294142465054b5"],["/2018/08/08/python中的__new__方法的重写/index.html","eef54dc8bca3a2736c6919b1a9c6377c"],["/2018/08/08/python中的多态/index.html","b825c68c9f987fbfacd76081ff709b24"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","6c75b1ebfc52c06d3454df2289f109bf"],["/2018/08/08/turtle绘图库/index.html","03fedf29dcd68225026437bc29bc4637"],["/2018/08/08/单例设计模式/index.html","0e5390821028fa214d489ac6e67ccb4e"],["/2018/08/09/Numpy库的首次使用/index.html","b2deeda02448186114a5e9fbf47d6c53"],["/2018/08/09/kNN（k-近邻算法）/index.html","0d0ddfdc37ee6d48182a6308944f5c05"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","df504c5a22f1ee678392b3b563a64c98"],["/2018/08/16/kNN识别手写图像/index.html","8c7f44c196eb1d02fb0c42f42ae9524e"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","688bf5bfec42c53142e1dc7ac91c5a40"],["/2018/08/22/Ndarray对象/index.html","be5cfddd7c2b4138df0f3c42dc5b8097"],["/2018/08/22/Numpy中的数组维度/index.html","0a0534722d9eeb45a1f217e55a5cd175"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","3bf093667502d927b475493cbcb9fb88"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","def7c9e179d0bf35505bccb51f5599ac"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","4e7605332c08579d27a2a31e53be5a4e"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","7949b90da080bd051b87dddd52161e75"],["/2018/08/26/一些TensorFlow的基本操作/index.html","741ad6bf78d38ccf98c2074a2f86d488"],["/2018/08/26/交互式使用/index.html","95ae9348c9e4d7ab6e4ec642a5ed06aa"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","0d52c0958b519f94bfaa5a0bd6ac6abe"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","afd3be49143109e906e6a3a486cfc421"],["/2018/08/29/将hexo自定义域名升级https/index.html","462f2f7e7dfc6a11dea2e6d8d72c2308"],["/archives/2018/04/index.html","8fa7a71c502641b8b8be9f5e6b42371b"],["/archives/2018/06/index.html","1e995aaaa751e1c3e0c5d6484acb294f"],["/archives/2018/07/index.html","5a1a40c98f137adbe91771dfaee99b8e"],["/archives/2018/08/index.html","e6e12cbdfe1f999d33cfcdb9c4213a10"],["/archives/2018/index.html","316bc913b071c29fdfe531feaff3e17c"],["/archives/index.html","320cf7b11e10483bfdb6e34495d8da54"],["/categories/C语言/index.html","76fb63f7a9b85df67392d6a8a4190105"],["/categories/HTTPS/index.html","df6a92495796624853748485d004ba2a"],["/categories/Numpy/index.html","b735f3959062984def4b87ab5689ae05"],["/categories/Python/index.html","9573f84d7cb5e96eab5920e184d86dc4"],["/categories/Python/page/2/index.html","b5be61de7024e8186e4740de8bb7707c"],["/categories/Python/page/3/index.html","1994c469ba8567c650e72309ae2f87cf"],["/categories/Python/page/4/index.html","49c65fa7020b571be5e710ca7a95fa48"],["/categories/Python/page/5/index.html","6f47855bcd82a93e80e05cf710d74bb5"],["/categories/Python/page/6/index.html","f0c8cf5f5e9266b5ea611ea400cb869b"],["/categories/Tensorflow/index.html","09c60279d08af3c73becb466ccdeb0bf"],["/categories/index.html","398d356bd418ef7fd2d12ec9971f657e"],["/categories/博客测试文件/index.html","46c37f2d9799ae7a51e77ca88f0241bb"],["/categories/机器学习/index.html","69275b0a8ee3c795dc7daf036b471160"],["/categories/算法/index.html","86cb83f347f04a3a8f11241003f708e6"],["/categories/随笔/index.html","7f69dfa6aba18bbf84563c53bbb2bf5f"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","26ede9b01d98efe1125ec2b58f5670dd"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3117eb1fdd0763e53def9ef87cf94c0f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","52123e4085c4787b5af83493f0aacc47"],["/page/3/index.html","03e647fcf6ec173186c871627d61e549"],["/page/4/index.html","609e86e7f582115027c4c6cd916e477e"],["/page/5/index.html","0c822dc075028588bd2c5824e0995edb"],["/page/6/index.html","a7d9165d1911957c215b65c2db07bfab"],["/page/7/index.html","8372af999691a55b4f849a4fd0eb2b9c"],["/page/8/index.html","9a90f48d01c058df89d2e1cb9226585b"],["/sw-register.js","4e29c42195812f4ab6a9a641019ae358"],["/tags/Face/index.html","92908dac4f528849b196a9b628301b68"],["/tags/Hexo/index.html","52818ed868ab644c59f3576e97a6c929"],["/tags/Java/index.html","8b566c27b7e186f74bec49d89558f1ce"],["/tags/MNIST/index.html","2966f56f819ce668bca4236070268e1d"],["/tags/Numpy/index.html","b2cfb5702edda969f6f86442770bc367"],["/tags/Tensorflow/index.html","0487a76fd61febe905d1b59935fb8c0b"],["/tags/index.html","41ba8a496218ad2700e0cd5c87310e3f"],["/tags/k-近邻算法/index.html","8c75064e87cf42130518472ae139eac7"],["/tags/matplotlib/index.html","852fbf4d8cad23b742864c3ccd3307cd"],["/tags/python/index.html","7f25f17b732fe3489e30e93635e9f152"],["/tags/python/page/2/index.html","543838977966d04de3e162425cfb865e"],["/tags/python函数/index.html","fd6602f5210121f4ff88164f0e41d848"],["/tags/python库/index.html","9dd4bb278e0072b2f5b4b81cb2f510fa"],["/tags/python异常处理/index.html","ebecb19a686c1c131b43c3c401f44663"],["/tags/python模块/index.html","ee8e1f5ed458e4f638fd5454f261bbfc"],["/tags/python正则表达式/index.html","545f785b7f30ef9dac77d220a97df92e"],["/tags/python面向对象/index.html","d8128c3a9c9bdb4389b2c05ccd24ae19"],["/tags/python面向对象/page/2/index.html","477450792e4f959308b11a348db02280"],["/tags/动态规划/index.html","00641a4ee5069a9a87f5e89f29eff792"],["/tags/基本教程/index.html","dcae8e29a7a66db66f9036d7cb8384ad"],["/tags/基本教程/page/2/index.html","732cf1700bc92bc55c198e3f527ff9d5"],["/tags/基本教程/page/3/index.html","7c61094e9cf6335b7dac6321e8a825c7"],["/tags/多态/index.html","7fafad82b9b7f285ae176c3af62727f8"],["/tags/排序算法/index.html","941dffd0dc2380fbd596f0ab099d9a4d"],["/tags/机器学习/index.html","e6636918c9aff48c44ade9537658ca36"],["/tags/测试/index.html","be4af04ba66ba1e861b39b093d0a6d62"],["/tags/矩阵/index.html","f9cff514095e17973290eb0fc3f594a4"],["/tags/算法/index.html","184e29c55bf98987413a604967f93de8"],["/tags/链表/index.html","8fecd74a60d4f0330e326f3fee5a8fa2"],["/top/index.html","85267067ee21980085ed64206a9bb313"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
