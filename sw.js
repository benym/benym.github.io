/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/04/08/hello-world/index.html","ee0b6f61f32fa64e0470113d59b4f84d"],["/2018/04/08/整合建立输出增删改查的链表/index.html","39e3fd0a387abc0573240c1583c240f0"],["/2018/04/08/选择排序/index.html","089bc62455eb2f617bb02b4817d9241c"],["/2018/04/10/任意行数的杨辉三角形（动态分配）/index.html","d2c844184f7db75b6207f7dd6a904f05"],["/2018/04/10/冒泡排序/index.html","eb74589d61d9acb88633b15eefd0a278"],["/2018/04/10/折半查找/index.html","2d0784907572a1da632ffce1aa2fc793"],["/2018/04/10/最大公约数和最小公倍数/index.html","daae1243fde8040b395d51a06276fcea"],["/2018/06/27/python中的Docstring/index.html","e3cb548fc07fe37bad0b2a18adacf74c"],["/2018/07/07/python中字典（key-value）/index.html","ad7e5c588c39cc9c650aff673ba91e44"],["/2018/07/07/python中字符串的一些基本操作/index.html","8e2193dd682d0751462e9a6d56d3c67e"],["/2018/07/07/python中的元组/index.html","47ccc0ba70cc023a7f90adca172231e0"],["/2018/07/07/python中的列表/index.html","6a205f6225c701c20f9116c3a6ce9383"],["/2018/07/07/python中的序列以及切片的解释/index.html","fa4dc9be1d9e4066f0486e59da7bc58c"],["/2018/07/07/python中的引用和切片/index.html","58d1c47b35531e9c577d931ebd36aaf2"],["/2018/07/07/python中的集合/index.html","c6af33a92e61a3c458c90d8fd2eea9c3"],["/2018/07/22/利用python进行文件的自动备份/index.html","d5973251557c7ed8e475a032ad8a56b2"],["/2018/07/23/finally异常处理/index.html","e72f564c99a400b4b10280b7f04f10ce"],["/2018/07/23/python对象的实例化/index.html","d9598da82be86fb566362c7fb728ae47"],["/2018/07/23/python日志模块/index.html","c80d6ca5fdf0037a6308d53197278463"],["/2018/07/23/python的pickle模块/index.html","fbbf2871392c5be51be390b4a4667929"],["/2018/07/23/with-open异常处理/index.html","1443089c2467845e496c10750c9106e7"],["/2018/07/23/利用python进行文件的自动备份(第三版和第四版)/index.html","70d5873f3922541c97490b2f0ae42d08"],["/2018/07/23/利用python进行文件的自动备份（第二版）/index.html","76085c62ed213aa8c7304c0764eff64b"],["/2018/07/23/在打开文件的同时规定编码/index.html","33f6ca31c1268ac61892adba597fb9ce"],["/2018/07/23/文件操作/index.html","c2ce92e20f5e0d21f3d26361d5f6f9ee"],["/2018/07/23/用户自己引发的异常处理/index.html","37dd11559e8f44feab4009b2221c1a53"],["/2018/07/23/简单的异常处理/index.html","9d2c27460f57f9286a331838af06105c"],["/2018/07/23/类变量与对象变量/index.html","451b7974e8291258ff91512ee715cf44"],["/2018/07/23/继承的运用/index.html","2ed2ec3ba1fdc98d72eb0edc478df554"],["/2018/07/23/输入输出——回文字串的判断（加强版）/index.html","898bce618a4e8a0bef21b7449a8259d4"],["/2018/07/23/输入输出——简单的回文判断/index.html","d3984e3f95fe6c8b40416b20a2d431ee"],["/2018/07/24/assert语句的运用/index.html","f58a4cb787555837534b9ca77f49d57d"],["/2018/07/24/python中的lambda函数/index.html","b8ff1766e94b010dbccbf87cb4d3251d"],["/2018/07/24/python的__name__-=-__main__的作用/index.html","3370bcb5d4944f771d51f5c887efb7e6"],["/2018/07/24/列表推导/index.html","50b4b27ca27362adc9f0375b345c66e9"],["/2018/07/24/在函数中接受元组与字典/index.html","c9c036f64c214c7e8cfd8c58ab008680"],["/2018/07/24/多种方法快速交换两个变量的值/index.html","ac335daa9ad823db487506f113d684e0"],["/2018/07/24/打印九九乘法表/index.html","756b40b67c81b1ee97d4fbcc9d297ab8"],["/2018/07/24/打印直角三角形/index.html","f5c2fe3d56bbd77632721ae0f777486f"],["/2018/07/24/装饰器/index.html","63386d095056f6754f1bd828f2a85196"],["/2018/07/25/list(列表)、tuple（元组）、dict（字典）的回顾/index.html","8d9ef835b6aa2c6ba7e76b58cd3d4686"],["/2018/07/25/python中字符串的一些方法回顾/index.html","8d204aa7d2e5242dd8e0a954fd478420"],["/2018/07/26/python中字符串的一些方法回顾(切片回顾)/index.html","71ddd4a109c7e4bf7bda9f93a125212f"],["/2018/07/26/python中字符串的一些方法回顾(拆分与合并)/index.html","c0b19dc4f4589aac0199570ada850d2d"],["/2018/07/26/python中字符串的一些方法回顾(文本对齐、去除空白)/index.html","7e21904a5948e2b2661008f248b16742"],["/2018/07/26/python中完整for循环的实际运用/index.html","29014694bd68631d3e8c90174dde1ecb"],["/2018/07/28/python中对列表和元组的切片操作/index.html","6dfb5181a18ffd3ca791a85c38d5adfd"],["/2018/08/03/欢迎来到我的博客/index.html","89de2f1cb1f6028cfd7b4ab80b2b1f37"],["/2018/08/06/Python中面向对象比较简单的内部函数/index.html","34e17c08c8a205480642a0cda9012b02"],["/2018/08/07/Python中的正则表达式/index.html","7e7b8ff2e5ae88ed36cd04d179c06865"],["/2018/08/07/Python中的正则表达式match和search/index.html","8b99c1aa3b8fcbd0b64b01e0f6c57cfb"],["/2018/08/07/正则表达式中的compile函数(二)/index.html","313aded3b5dd105dfcd5b71353343659"],["/2018/08/07/正则表达式中的compile函数/index.html","58cce4e3d9b60ff90ae4146b907c8c14"],["/2018/08/07/正则表达式检索与替换/index.html","520e9aa8ca6189de9f7de9e585a61f7b"],["/2018/08/08/python中的__new__方法的重写/index.html","98511a9be94dc690d481f648defe4fe8"],["/2018/08/08/python中的多态/index.html","cfdf28848997d737871816cf964679bf"],["/2018/08/08/python中的静态方法、实例方法、类方法的区别/index.html","7d2a8a5136d744a01e8ee8f8583fce6c"],["/2018/08/08/turtle绘图库/index.html","c726f3bddae79da0be41a46c06a2ad5e"],["/2018/08/08/单例设计模式/index.html","4dd06b0554f6ba9afed996856d6e70c3"],["/2018/08/09/Numpy库的首次使用/index.html","c49e8602ae1c4bba568f1e7f6f95d7b1"],["/2018/08/09/kNN（k-近邻算法）/index.html","4fb148dac8f47a313122ace4611317da"],["/2018/08/11/使用k-近邻算法改进约会网站的配对效果/index.html","e0774ad7ce690b3022be4b1fefa5b4ce"],["/2018/08/16/kNN识别手写图像/index.html","d31531ab3750e591aab99258f10d79ba"],["/2018/08/20/Numpy中花式索引和shape用法/index.html","91996048ef7b9acbcfd2ff90b923c9d3"],["/2018/08/22/Ndarray对象/index.html","edaadc790db9ec53480adffe600f90e1"],["/2018/08/22/Numpy中的数组维度/index.html","b8d80aed78f3b13e4b157686e6758954"],["/2018/08/22/数据类型和arange方法_astype方法的使用/index.html","e9f47b353e12ac5333c454eefe7d3168"],["/2018/08/24/第一个使用Tensorflow的程序/index.html","d2e1709b295e8be875f2b45faf1e1bb9"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(一)/index.html","240e2e739ccfcdb15798018f2f24d4f5"],["/2018/08/25/动态规划问题——最长上升子序列(LIS)(二)/index.html","636fb5a5cd533991933d031322be311f"],["/2018/08/26/一些TensorFlow的基本操作/index.html","1e47cb7e73f1985849d4336f66374e15"],["/2018/08/26/交互式使用/index.html","5bfc4148a8bb041df55f91b130f9ad5f"],["/2018/08/26/动态规划问题——最长上升子序列(LIS)(三)/index.html","691b5bbd30c8af8ef101d1a4db160421"],["/2018/08/26/将下载下来的MNIST手写数字数据集转化成为图片/index.html","c09c6bad4491fa68bb9572f3b8b5a707"],["/2018/08/29/将hexo自定义域名升级https/index.html","3154bb5d0f5565e6d9ef88605b504a9a"],["/2018/09/17/域名备案成功/index.html","b02fbfc0653d50a7ba2d628d6183f6bf"],["/2018/10/07/Coursera课后作业——ex1/index.html","fdadfbd4950c2d956fb59beb093a8225"],["/2018/10/21/LogisticRegression(逻辑回归)/index.html","48f5a70af9c54d7f913a5c9a4bb0eee3"],["/archives/2018/04/index.html","61842091825a8464b81c26d816801d98"],["/archives/2018/06/index.html","81b78f55d1c5710be2137c69ab66e1a7"],["/archives/2018/07/index.html","6b73d58cdf5df25b6323efd9e1c37ac0"],["/archives/2018/08/index.html","ceb25d8f9a7e5a85f3946040d356cab7"],["/archives/2018/09/index.html","9cf008d163c052e92cdef0e8110c8736"],["/archives/2018/10/index.html","b2d6e3de3f53001b604adab62fcb7989"],["/archives/2018/index.html","6740a90ff06d451de5df039fa3afac83"],["/archives/index.html","2a4ea1c2f8ed892226736284a67615c1"],["/categories/C语言/index.html","3ee03265245f929ed898919f70d7e5a3"],["/categories/HTTPS/index.html","38e9cc80dffbaf9bddf6f490fcf4dbb3"],["/categories/Numpy/index.html","1d91f04c813af502e0b49f310b5b2bcb"],["/categories/Python/index.html","8877962a72f692435a14f6881ec4a7d6"],["/categories/Python/page/2/index.html","60429a170e85bc72471f7c3c3a278451"],["/categories/Python/page/3/index.html","41baca59b81953c433e0837551b4ded7"],["/categories/Python/page/4/index.html","d5d0a983629a1f38138d7b7e694c2be4"],["/categories/Python/page/5/index.html","de4a0d5b62ff00240985555e87ba54f3"],["/categories/Python/page/6/index.html","75a0d3bc331f5e532832637ca12f3b3f"],["/categories/Tensorflow/index.html","62d5ce16acad9626edb0aeabec591bf8"],["/categories/index.html","52c0eae5cecf3ac2a3e28560e637f774"],["/categories/博客测试文件/index.html","90843c214faf14439c659376e21074de"],["/categories/机器学习/index.html","09f90cd65d455d50bc528c83998a766e"],["/categories/算法/index.html","73352a6d34f348b4444be40ec1f67cf2"],["/categories/随笔/index.html","e31919561f94cc7acdf446ac01d4f811"],["/css/custom第一版副本.css","f06f84706306afb959bfc057795d1c5f"],["/css/main.css","f9d7d98fe2335d1dce4c844f4ab7c3fb"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16.png","ec37b37f88f5dbe9f01cbb439fddce12"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32.png","ab428c74dd9f8999c8e0c6fee3c10c0c"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6357b5039443dd143d8a1bbd39e353a8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","352de9884e44b866e435cfc92453032d"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5b6e453b5a803379aa32c764a5da589e"],["/page/3/index.html","a96af85ffa899e89da4bf7a9c5f51d4f"],["/page/4/index.html","33cbe3e7a0b58a0e4555ca8720566519"],["/page/5/index.html","19d4ff7cb0c48557e56dddf843a12b01"],["/page/6/index.html","2c2e9fb7fbe3e49be2583aca51959edd"],["/page/7/index.html","f130951f60c17973af7b8163577e57ed"],["/page/8/index.html","33a18629bc151d92848bbf5ecd4c723f"],["/sw-register.js","4445c53419fcb80071c681fc0dc691a1"],["/tags/Coursera/index.html","168f4675baad3bab4fd5f48663b436be"],["/tags/Face/index.html","3b34439884ec32b7d5ca0fb88a6b4a90"],["/tags/Hexo/index.html","cfef12ac1306dcf56a0d8549ab69545b"],["/tags/Java/index.html","e78f0944064a2bf642c58338f5bd2057"],["/tags/MNIST/index.html","c501117d031842b3dc759bbfdbfce1e7"],["/tags/Numpy/index.html","79a87dc98245453b4f132e63ea9ad889"],["/tags/Tensorflow/index.html","ce82181626f6da7e1b632800388f0418"],["/tags/index.html","6813ed9ee1d35773113933ae602ba5a3"],["/tags/k-近邻算法/index.html","9337f85e64e21b39da864477fdde91a3"],["/tags/matlab/index.html","02e976520371b2bd66b79d2a9fd90d99"],["/tags/matplotlib/index.html","277239b8d672b686546fafad7bc5d3d8"],["/tags/python/index.html","aed49e11606d4e13cdee46fe0915aab9"],["/tags/python/page/2/index.html","cd4f002a1df3ca368243dc10e27da837"],["/tags/python函数/index.html","5e894636912ef58d6f1de2ce8e897dc0"],["/tags/python库/index.html","c17d48b20f23dc48d371d4dbc3024840"],["/tags/python异常处理/index.html","fdab47c4ec53e0c4076d30685991a82f"],["/tags/python模块/index.html","69fe42c2a9863574c741c9aaf56b44df"],["/tags/python正则表达式/index.html","1d7614e3dcefd8fd2d403e2a6b551f1e"],["/tags/python面向对象/index.html","3e023cfadd4ad88d115e93d0a9f4eef1"],["/tags/python面向对象/page/2/index.html","d00f306c8ebf104d56436f418aaddfe0"],["/tags/动态规划/index.html","d9bb943754e789fd25f51e8f6c8d0cad"],["/tags/基本教程/index.html","d6dd0613e85e459ebb8b14b88d6177f5"],["/tags/基本教程/page/2/index.html","d7ee7e6f4297f0d7e5e4a71955403b15"],["/tags/基本教程/page/3/index.html","4201cab102c66586d1df0cd06ed927f7"],["/tags/多态/index.html","3000d6dada984679f9ee84be3665ea10"],["/tags/排序算法/index.html","0ac1fa2d1cab0b5852f161281341ea98"],["/tags/机器学习/index.html","953428023eddb2afcc472fcfb39bf977"],["/tags/测试/index.html","bbc147500933463ff28650fbd61fb17c"],["/tags/矩阵/index.html","79b4faa167ee111cc021bfc1797e83bc"],["/tags/算法/index.html","4da709be72b0253d77ec8246e6ce6911"],["/tags/逻辑回归/index.html","79285481f9ec08396fa90e30a902d4ad"],["/tags/链表/index.html","34d977ad55ace8c86cc6f52c10af8a10"],["/top/index.html","0ef5423d543d06a0b0418b6457aecab1"],["/uploads/abc.jpg","a8addafd7ae6032a4ab3c3267f591010"],["/uploads/ali.jpg","3a6412b42619589e6b73a0ea57d1b9f7"]];
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
