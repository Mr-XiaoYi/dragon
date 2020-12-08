/**
 * Main Javascript of Dragon WordPress Theme
 *
 * @package   Dragon
 * @version   3.0.0
 * @date      2020.9.10
 * @author    龙笑天下 <lxt@ilxtx.com>
 * @site      龙笑天下 <www.ilxtx.com>
 * @link      https://www.ilxtx.com/dragon.html
**/
QTags.addButton( 'hr', '水平线', "\n<hr />\n", '' );//添加横线
QTags.addButton( 'h2', '标题2', "<h2>", "</h2>" ); //添加标题2
QTags.addButton( 'h3', '标题3', "<h3>", "</h3>" ); //添加标题3
QTags.addButton( 'p', 'p', '<p>\n', "\n</p>" );//添加段落p
QTags.addButton( 'span', 'span', '<span>\n', "\n</span>" );//添加span
QTags.addButton( 'dr_pre', 'pre', '<pre>\n', "\n</pre>" );//添加pre
QTags.addButton( 'dr_pre_php', '代码高亮-PHP', '<pre class="language-php line-numbers"><code class="language-php">\n', "\n</code</pre>" );//添加代码高亮-php
QTags.addButton( 'dr_pre_html', '代码高亮-HTML', '<pre class="language-html line-numbers"><code class="language-html">\n', "\n</code</pre>" );//添加代码高亮-html
QTags.addButton( 'dr_pre_javascript', '代码高亮-JS', '<pre class="language-javascript line-numbers"><code class="language-javascript">\n', "\n</code</pre>" );//添加代码高亮-javascript
QTags.addButton( 'dr_pre_css', '代码高亮-CSS', '<pre class="language-css line-numbers"><code class="language-css">\n', "\n</code</pre>" );//添加代码高亮-css
QTags.addButton( 'dr_pre_css', '代码高亮-Bash', '<pre class="language-bash line-numbers"><code class="language-bash">\n', "\n</code</pre>" );//添加代码高亮-css
QTags.addButton( 'paged', '分页', '<!--nextpage-->\n', "" );//添加文章分页
// QTags.addButton( 'pre', 'Pre', '<pre>\n', "\n</pre>" );//添加代码块
QTags.addButton( 'toggle', '折叠板', '\n[toggle hide="no" title="" color=""]\n\n[/toggle]', "" );//添加Toggle内容块
QTags.addButton( 'toggleh', '垂直手风琴', '\n[toggleh title="标题1,标题2,标题3" show="1"]内容1@||@内容2@||@内容3[/toggleh]', "" );//添加垂直手风琴内容块
QTags.addButton( 'togglev', '水平手风琴', '\n[togglev title="标题1,标题2,标题3" show="1"]内容1@||@内容2@||@内容3[/togglev]', "" );//添加水平手风琴内容块
QTags.addButton( 'button', '按钮', '\n[button class="default或primary或success或info或warning或danger" size="lg或sm或xs" href="" title="" target="_blank" style=""]\n\n[/button]', "" );//添加按钮短代码
QTags.addButton( 'callout', '信息条', '\n[callout class="info或warning或danger" title="" start="2014-03-15 00:00:01" expire="2038-11-11 05:06:02"]\n\n[/callout]', "" );//添加提示信息短代码
QTags.addButton( 'infobg', '背景块', '\n[infobg class="tips或primary或notice或success或info或warning或danger" closebtn="" color="" bgcolor="" start="2014-03-15 00:00:01" expire="2038-11-11 05:06:02"]\n\n[/infobg]', "" );//添加可关闭背景块短代码
QTags.addButton( 'l2v', '登录可见', '[tinl2v]隐藏内容[/tinl2v]', "" );//添加登录可见短代码
QTags.addButton( 'a2v', '管理员可见', '[lxtxa2v none="1"]隐藏内容[/lxtxa2v]', "" );//添加管理员可见短代码
QTags.addButton( 'gzh2v', '公众号可见', '[gzh2v keyword="关键字" key="验证码"]隐藏内容[/gzh2v]', "" );//添加公众号验证码可见短代码
QTags.addButton( 'r2v', '回复可见', '[tinr2v login="1"]隐藏内容[/tinr2v]', "" );//添加回复可见短代码
QTags.addButton( 'vipbuy2v', 'VIP&支付可见', '[dr_vipb2v number="1" vip="1" price="10" currency="cash或credit"]输入隐私内容[/dr_vipb2v]', "" );//添加VIP会员或支付可见短代码
QTags.addButton( 'drb2v', '购买指定商品可见', '[drb2v id="商品ID"]输入隐私内容[/drb2v]', "" );//添加购买指定商品可见短代码
QTags.addButton( 'dr_passwd2v', '密码可见', '[dr_passwd2v key="密码"]输入隐私内容[/dr_passwd2v]', "" );//密码可见
QTags.addButton( 'download', '下载', '[button class="download" size="lg或sm或xs" href="" title=""]此下载为直接跳转下载地址页，若要跳转站内专用下载页，请使用编辑器下方下载资源meta-box\n[/button]', "" );//添加下载按钮短代码
QTags.addButton( 'demo', '演示', '[button class="demo" size="lg或sm或xs" href="" title=""]此演示为直接跳转演示网站页，若要站内嵌入演示，请使用编辑器下方演示资源meta-box\n[/button]', "" );//添加演示按钮短代码
QTags.addButton( 'iframe', '网页弹窗', '<a data-fancybox data-type="iframe" data-src="网页url" href="javascript:;">弹窗文字</a>', "" );//添加嵌入网页短代码
QTags.addButton( 'movieinfojm', '电影信息',
    '<h2>基本信息</h2>\n'+
    '<blockquote>\n删除内容\n'+
    '评分：<a class="db-score" href="https://movie.douban.com/subject/1295644/" target="_blank" rel="external nofollow">豆瓣 940</a>（623343） / <a class="imdb-score" href="https://www.imdb.com/title/tt0110413" target="_blank" rel="external nofollow">IMDB 860</a>（659710）\n</blockquote>\n\n'+
    '<img src="imgsrc" />\n\n'+
    '<h2>剧情简介</h2>\n'+
    '删除内容\n\n'+
    '<h2>在线观看</h2>\n'+
    '删除内容\n\n'+
    '<h2>精彩影评</h2>\n'+
    '<blockquote>\n'+
	'<p style="text-indent:2em">删除内容</p>\n'+
	'<em style="float:right;"> ---- 摘自<a href="src" title="title" target="_blank" rel="external nofollow">@name</a></em>\n'+
	'</blockquote>\n\n'+
	'<blockquote>\n'+
	'<p style="text-indent:2em">删除内容</p>\n'+
	'<em style="float:right;"> ---- 摘自<a href="src" title="title" target="_blank" rel="external nofollow">@name</a></em>\n'+
	'</blockquote>\n\n'+
    '<h2>下载地址</h2>\n'+
    '720\n'+
    '<style type="text/css">.post_nav,#lxtx-index {display:block;}</style>', "" );
QTags.addButton( 'musicinfojm', '音乐信息',
	'<h2>基本信息</h2>\n'+
	'<blockquote><strong>中文名：</strong>\n'+ 
	'<strong>外文名/别名：</strong>\n'+
	'<strong>国籍：</strong>\n'+   
	'<strong>代表作：</strong></blockquote>\n\n'+    
	'<img src="imgsrc" />\n\n'+
	'<h2>歌手简介</h2>\n'+
	'删除内容\n\n'+
	'<h2>推荐歌曲</h2>\n'+
	'删除内容\n<p class="post-videosrc"><a href="src" target="_blank" rel="nofollow" title="如果视频无法播放，点击这里试试">如果视频无法播放，点击这里试试</a></p>\n\n'+   
	'[toggle hide="yes" title="Lyric歌词" color=""]歌词内容[/toggle]\n\n'+
	'<h2>下载地址</h2>\n'+
	'320K高音质MP3下载<style type="text/css">.post_nav,#lxtx-index {display:block;}.toggle-wrap .toggle-content{text-align:center;}</style>', "" );
QTags.addButton( 'videosrcjm', '视频链接', 
	'<p class="post-videosrc"><a href="src" target="_blank" rel="nofollow" title="如果视频无法播放，点击这里试试">如果视频无法播放，点击这里试试</a></p>', "" );
QTags.addButton( 'h5videoshipinjm', 'Video', 
	'<p class="lxtx-video"><video src="视频地址" width="320" height="240" controlslist="nodownload" oncontextmenu="return false;" controls><source type="video/mp4">您的浏览器不支持H5视频，建议使用最新版Chrome或Firefox浏览器。</video></p>\n', "" );
QTags.addButton( 'youkushipinjm', 'youku', 
	'<p class="lxtx-video"><iframe src="https://player.youku.com/embed/视频特征字母码" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>\n', "" );  
QTags.addButton( 'acfunshipinjm', 'AcFun', 
	'<p class="lxtx-video"><iframe src="https://www.acfun.cn/player/视频号码" id="ACPlayer-re"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>\n', "" );
QTags.addButton( 'bilibilihipinjm', 'bilibili', 
	'<p class="lxtx-video nonfullvideo"><iframe src="src地址" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe></p>\n', "" );
QTags.addButton( 'qqshipinjm', 'QQ', 
	'<p class="lxtx-video"><iframe frameborder="0" src="通用代码中的src地址" allowfullscreen></iframe></p>\n', "" );
QTags.addButton( 'iqiyishipinjm', '爱奇艺',
	'<p class="lxtx-video"><iframe src="通用代码中的src" frameborder="0" allowfullscreen="true"></iframe></p>\n\n'+
	'<p class="lxtx-video"><embed src="HTML代码中的src地址" quality="high" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed></p>\n', "" );
QTags.addButton( 'yinyuetaishipinjm', '音悦台E', 
	'<p class="lxtx-video"><embed src="HTML代码中的swf地址的a改为v" quality="high" align="middle"  allowScriptAccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash"></embed></p>\n', "" );
QTags.addButton( 'souhushipinjm', '搜狐', 
	'<p class="lxtx-video"><iframe frameborder="0" src="通用代码中的src" allowFullScreen="true" scrolling="no"></iframe></p>\n\n'+
	'<p class="lxtx-video"><embed wmode="Transparent" allowfullscreen="true" allowscriptaccess="always" quality="high" src="HTML代码中的src地址" type="application/x-shockwave-flash"/></embed></p>\n', "" );
QTags.addButton( '56shipinjm', '56', 
	'<p class="lxtx-video"><iframe src="http://www.56.com/iframe/视频特征字母码" frameborder="0" allowfullscreen=""></iframe></p>\n', "" );
QTags.addButton( 'tudoushipinjm', 'tudou', 
	'<p class="lxtx-video"><iframe src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=OETSRI4JBtQ&lcode=&resourceId=0_06_05_99" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>\n', "" ); 
QTags.addButton( 'wpplayerjm', '网易-虾米音乐', 
	'[player autoplay="0"]\n', "" );
QTags.addButton( 'suojin2gejm', 'P标签带缩进', 
	'<p class="textindent">\n', "\n</p>" );
QTags.addButton( 'fieldsettishijm', 'fieldset提示', 
	'<fieldset>\n<legend>提示</legend>\n<p class="textindent">内容</p>\n<p class="textindent">内容</p>\n</fieldset>', "" );
QTags.addButton( 'tupiandaidescjm', '带描述图片', 
	'<p class="article_img"><img src="http" alt="WordPress" title="WordPress" /></p>\n<p class="article_img_desc"><em>wordpress</em></p>', "" );
QTags.addButton( 'tupiangalleryjm', '图片相册', 
	'[dr_gallery img="图片1的src,描述1|图片2的src,描述2|图片3的src,描述3"][/dr_gallery]', "" );
QTags.addButton( 'tupiangalleryslidejm', '图片幻灯', 
	'[sliderimg img="图片1链接|图片2链接|图片3链接" auto="1或者0"][/sliderimg]', "" );
QTags.addButton( 'tupiangallerythumbslidejm', '图片幻灯-带缩略图', 
	'[thumbsliderimg img="图片1链接|图片2链接|图片3链接"][/thumbsliderimg]', "" );
QTags.addButton( 'charuzhanneipostsjm', '插入站内文章', 
	'[insert_posts ids="123"]', "" );
//这儿共有四对引号，分别是按钮的ID、显示名、点一下输入内容、再点一下关闭内容（此为空则一次输入全部内容），\n表示换行。