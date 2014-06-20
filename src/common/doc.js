/**
 * Copyright (c) 2012, Yahoo! Inc.  All rights reserved.
 * Copyright (c) 2013, Marcel Duran and other contributors. All rights reserved.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

/*global YSLOW*/
/*jslint white: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true */

/**
 * A class that collects all in-product text.
 * @namespace YSLOW
 * @class doc
 * @static
 */
YSLOW.doc = {

    tools_desc: undefined,

    view_names: {},

    splash: {},

    rules: {},

    tools: {},

    components_legend: {},

    addRuleInfo: function (id, name, info) {
        if (typeof id === "string" && typeof name === "string" && typeof info === "string") {
            this.rules[id] = {
                'name': name,
                'info': info
            };
        }
    },

    addToolInfo: function (id, name, info) {
        if (typeof id === "string" && typeof name === "string" && typeof info === "string") {
            this.tools[id] = {
                'name': name,
                'info': info
            };
        }
    }

};

//
// Rules text
//
YSLOW.doc.addRuleInfo('ynumreq', '减少HTTP请求次数', '通过减少页面构件的数量来减少页面的请求次数可以加快页面的加载速度。减少页面构件的方式主要是合并文件：把多个JS脚本合并到一个JS脚本中；把多个CSS文件合并到一个CSS文件中; 使用CSS精灵(CSS Sprites)或者图像地图(Image Maps)');

YSLOW.doc.addRuleInfo('ycdn', '使用CDN', '使用CDN把内容部署到离用户最近的地方可以大幅提高页面的响应速度，缩短响应时间。');

YSLOW.doc.addRuleInfo('yexpires', '添加过期时间到响应头', '随着更多的JS脚本、CSS样式、图片和Flash添加到页面上，Web页面变得越来越复杂。第一次访问一个页面需要发送多个请求去加载这些静态资源，通过使用过期时间响应头，可以让后续访问的页面缓存这些资源，从而减少HTTP请求数量。过期时间响应头通常在图片请求上设置，但是其他的JS脚本、CSS样式表和Flash也都应该设置。');

YSLOW.doc.addRuleInfo('ycompress', '启用Gzip压缩', '启用压缩可以减小服务器端数据传输量，从而加快响应速度。Gzip是使用最广泛、效率最高的服务器端压缩算法，可以减少约70%的内容传输。目前90%的浏览器流量支持Gzip。');

YSLOW.doc.addRuleInfo('ycsstop', '把CSS放到页面的顶部', '把CSS样式表放到HEAD元素中可以加快首屏页面的正确展示，改进用户体验。');

YSLOW.doc.addRuleInfo('yjsbottom', '把JS脚本放到页面的底部', 'JS文件会阻塞浏览器的并行下载，当一个JS文件下载的时候，浏览器会停止其他文件的下载直到这个JS下载完成。为了提高页面加载速度，应该尽可能的把JS文件放到页面底部。');

YSLOW.doc.addRuleInfo('yexpressions', '不用CSS表达式', 'CSS表达式(从IE5开始支持)是一个强大但危险的动态设置CSS属性的方式。这种表达式的计算在页面渲染、窗口大小调整、页面滚动甚至用户在页面上移动鼠标的时候都会触发，这种频发的计算和解析会降低页面性能，破坏用户体验。');

YSLOW.doc.addRuleInfo('yexternal', '把JS脚本和CSS写到文件中', '使用外部的JS和CSS文件一般来讲可以提高页面加载速度是因为静态文件会被浏览器缓存，而HTML文档中的JS和CSS每次都会下载。虽然把JS和CSS写在页面中可以减少HTTP请求次数，但是由于通常JS和CSS文件会被缓存，所以也并不会在减小HTML文档大小的同时增加HTTP请求次数。');

YSLOW.doc.addRuleInfo('ydns', '减少DNS查询次数', 'DNS解析域名到IP地址，就像电话号码本匹配人们的姓名和他们的电话号码一样。当你在浏览器地址栏里面敲www.yahoo.com的时候，浏览器连接一个DNS解析服务器以找到实际的IP地址。DNS解析是有开销的，通常是20~120毫秒，而且在DNS解析完成之前，浏览器是不会下载任何内容的。');

YSLOW.doc.addRuleInfo('yminify', '最小化JS脚本和CSS文件', '最小化文件通过删除无用的字符来减少文件大小，从而减少加载时间。当一个文件被最小化之后，注释和其它无用的空白字符(如空格、换行、Tab)都会被删除，所以文件大小会显著减小，下载时间显著加快。');

YSLOW.doc.addRuleInfo('yredirects', '避免URL跳转', 'URL跳转一般是通过HTTP的301/302状态码来实现。这个状态码告知浏览器跳转到实际的HTML文档地址。在用户和实际的HTML文档之间插入一个跳转将会导致页面加载延迟，因为在实际HTML文档完成下载之前，不会有任何页面内容或组件被下载、渲染。');

YSLOW.doc.addRuleInfo('ydupes', '移除重复的JS脚本和CSS样式', '重复的JS和CSS文件会伤害页面性能因为它会造成不必要的HTTP请求(IE)和无用的JS执行(IE和Firefox)。使用IE时，如果一个JS文件被引入2次并且文件不能缓存，将会导致浏览器在页面加载的时候发出2个HTTP请求。在IE和Firefox中，无论JS文件是否可以被缓存，重复的JS文件引入都会导致重复的JS执行。');

YSLOW.doc.addRuleInfo('yetags', '合理配置ETags', 'Etags是服务器和浏览器的一个功能，它用来判断浏览器缓存里的元素是否和原来服务器上的一致。ETags比last-modified date更具有弹性，它用一个独一无二的字符串来标识一个元素的版本。 源服务器用响应头里的ETag来特定一个元素的ETag之后，如果浏览器要验证这个元素，它就会用If-None-Match头来回传ETag到源服务器。如果符合的话，一个304状态的代码就会从源服务器返回到浏览器，这样源服务器就节省了传输具体数据的开销。用Etags的问题就在于它会标识那个特定的服务器，如果换了服务器，Etags也就失去了原有的功能，但是这种现在在网络上太常见了，因为我们经常用服务器集群。默认情况下，Apache和IIS会在Etag中内嵌数据，这样会动态减少验证成功的机会。所以在使用服务器集群的情况下，我们要根据实际情况合理配置ETags。');

YSLOW.doc.addRuleInfo('yxhr', '让Ajax请求可以被缓存', '使用Ajax的好处是让用户可以获得实时反馈而无需刷新页面，然而使用Ajax并不能保证用户无需等待服务器端响应返回，所以优化Ajax的响应从而提高Ajax性能十分重要，而让Ajax的响应可以被缓存是最好的优化方法。');

YSLOW.doc.addRuleInfo('yxhrmethod', '使用GET方法发送Ajax请求', '当调用XMLHttpRequest这个对象的时候，浏览器会分2步发送POST请求：1),发送HTTP头。2),发送数据。所以最好的方式就是使用GET替换POST，因为GET会在发送HTTP头的同时发送数据(除非Cookie太多了)。IE规定的最大URL长度是2KB，所以如果你要发送的数据小于这个限制，应该尽量使用GET。');

YSLOW.doc.addRuleInfo('ymindom', '减少DOM元素数量', '一个复杂的页面通常意味着更多的下载字节数，同时也意味着通过JS来访问DOM会更慢。减少DOM元素数量可以提高页面性能。');

YSLOW.doc.addRuleInfo('yno404', '避免出现404', '发送一个HTTP请求但是结果是404的开销巨大，并且会降低用户体验。尽管许多网站有很友好的404消息页面(例如，QQ的寻人页面)，或许对用户有些帮助，但是服务器端资源已然被浪费了。');

YSLOW.doc.addRuleInfo('ymincookie', '减少Cookie大小', 'HTTP Cookie被用来做用户认证、用户个性化或者其他的目的。Cookie信息通过HTTP头在服务器和浏览器之间交换，所以保持最小的Cookie大小有利于减少响应时间。');

YSLOW.doc.addRuleInfo('ycookiefree', '使用无须发送Cookie的域名', '当浏览器请求一个静态图片的同时也会发送Cookie给服务器，但是服务器通常会忽略它因为Cookie对于静态文件来说没有必要。为了坚决这种问题，通常是使用一个独立的二级域名来存储这些静态资源，同时设置主域名的Cookie作用域来防止提交Cookie信息到独立的二级域名。');

YSLOW.doc.addRuleInfo('ynofilter', '不使用AlphaImageLoader滤镜', 'AlphaImageLoader滤镜通常被用来解决在低于IE7版本的IE上的透明图片问题，但是这个滤镜会十分消耗内存，同时在图片在被下载的过程中阻止浏览器渲染和其它动作，更严重的是多个使用AlphaImageLoader的元素会被串行处理，从而导致页面渲染延迟倍增。');

YSLOW.doc.addRuleInfo('yimgnoscale', '不在HTML里面缩放图片', 'Web页面设计师有时会通过设置HTML Image元素的高度和宽度来调整图片的尺寸。这种行为是不鼓励的，因为它可能会导致下载的图片远远大于实际需要的图片尺寸。例如，如果你的页面下载一个尺寸为240X720像素的图片，但是实际显示的尺寸是120X360像素，浏览器就浪费了时间在下载更大尺寸的图片上。');

YSLOW.doc.addRuleInfo('yfavicon', '缩小并且缓存网站图标', '网站图标通常是放在网站根目录下的favicon.ico文件，在每个页面上都会加载这个图标。如果图标丢失，浏览器得到一个404错误(参看上文”避免出现404”)。由于favicon.ico存放在服务器的根目录，所以每次浏览器发送请求都会带上所有的cookies。所以减小favicon的尺寸和cookie信息的大小可以在请求favicon.ico是提高性能，同时缓存favicon.ico还可以减少请求');

YSLOW.doc.addRuleInfo('yemptysrc', '避免HTML元素的空SRC或者HREF属性', '你或许会认为当你把一个Image元素的SRC设置为空的时候，浏览器什么也不会做。但是事实是，IE会发起一个到页面路径目录的请求，而Safari、Chrome、Firefox 3以下版本会发起一个请求试图加载当前页面。这种行为可能会搞坏用户数据，浪费服务器计算资源，极端情况下大量的这种请求甚至会压垮你的服务器。');

//
// Tools text
//
YSLOW.doc.tools_desc = 'Click on the tool name to launch the tool.';

YSLOW.doc.addToolInfo('jslint', 'JSLint', 'Run JSLint on all JavaScript code in this document');

YSLOW.doc.addToolInfo('alljs', 'All JS', 'Show all JavaScript code in this document');

YSLOW.doc.addToolInfo('jsbeautified', 'All JS Beautified', 'Show all JavaScript code in this document in an easy to read format');

YSLOW.doc.addToolInfo('jsminified', 'All JS Minified', 'Show all JavaScript code in this document in a minified (no comments or white space) format');

YSLOW.doc.addToolInfo('allcss', 'All CSS', 'Show all CSS code in this document');

YSLOW.doc.addToolInfo('cssmin', 'YUI CSS Compressor', 'Show all CSS code in the document in a minified format');

YSLOW.doc.addToolInfo('smushItAll', 'All Smush.it&trade;', 'Run Smush.it&trade; on all image components in this document');

YSLOW.doc.addToolInfo('printableview', 'Printable View', 'Show a printable view of grades, component lists, and statistics');

//
// Splash text
//
YSLOW.doc.splash.title = 'Grade your web pages with YSlow';

YSLOW.doc.splash.content = {
    'header': 'YSlow gives you:',
    'text': '<ul><li>Grade based on the performance of the page (you can define your own ruleset)</li><li>Summary of the page components</li><li>Chart with statistics</li><li>Tools for analyzing performance, including Smush.it&trade; and JSLint</li></ul>'
};

YSLOW.doc.splash.more_info = 'Learn more about YSlow and the Yahoo! Developer Network';

//
// Rule Settings
//
YSLOW.doc.rulesettings_desc = 'Choose which ruleset (YSlow V2, Classic V1, or Small Site/Blog) best fits your specific needs.  Or create a new set and click Save as... to save it.';

//
// Components table legend
//
YSLOW.doc.components_legend.beacon = 'type column indicates the component is loaded after window onload event';
YSLOW.doc.components_legend.after_onload = 'denotes 1x1 pixels image that may be image beacon';

//
// View names
//
YSLOW.doc.view_names = {
    grade: 'Grade',
    components: 'Components',
    stats: 'Statistics',
    tools: 'Tools',
    rulesetedit: 'Rule Settings'
};

// copyright text
YSLOW.doc.copyright = 'Copyright &copy; ' + (new Date()).getFullYear() + ' Yahoo! Inc. All rights reserved.';
