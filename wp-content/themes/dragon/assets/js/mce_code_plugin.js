/**
 * Function Javascript of Dragon WordPress Theme
 *
 * @package   Dragon
 * @version   2.5.0
 * @date      2020.4.3
 * @author    龙笑天下 <lxt@ilxtx.com>
 * @site      龙笑天下 <www.ilxtx.com>
 * @link      https://www.ilxtx.com/dragon.html
**/
(function($) {
	tinymce.create('tinymce.plugins.specs_code_plugin', {
		init: function(editor, url) {
			editor.addButton('specs_code_plugin', {
				title: "插入图片", // 鼠标放在按钮上时的提示文字
				// image: url + '/code.png', // 按钮图标
				icon: 'image',
				cmd: 'tdsk_commands' // 点击时执行的方法
			});
			editor.addCommand('tdsk_commands', function() {
				// 20170809 弃用
				// var urlfix = url.replace(/wp-content\/themes\/lxtx\/includes\/js/i,"api/img");

				// 20180422 弃用
				// // http://www.jb51.net/article/86847.htm
				// //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
				// var curWwwPath = window.document.location.href;
				// //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
				// var pathName = window.document.location.pathname;
				// var pos = curWwwPath.indexOf(pathName);
				// //获取主机地址，如： http://localhost:8083
				// var localhostPaht = curWwwPath.substring(0, pos);
				// //获取带"/"的项目名，如：/uimcardprj
				// // var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
				// var urlfix = localhostPaht+'/api/img';

				// 20190109 可用
				// var urlfix = url.replace(/includes\/js/i,"functions");

				// 20200403
				var urlfix = tin.tin_url+'/functions';
				
				editor.windowManager.open(
					{
						title: "插入图片", // 对话框的标题
						file: urlfix + '/upload.php', // 放置对话框内容的HTML文件
						// file: url + '/weibo_img_upload.html', // 放置对话框内容的HTML文件
						width: 300, // 对话框宽度  500
						// height: 280, // 对话框高度  280
						inline: 1 // Whether to use modal dialog instead of separate browser window.
					}
				);
			});
		}
	});
	tinymce.PluginManager.add('specs_code_plugin', tinymce.plugins.specs_code_plugin);
})(jQuery);