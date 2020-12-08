/**
 * 给WP可视化编辑器增加按钮
 * 
 * @since  2.7.0
 * @date   2020.7.28
 */

/**
 * Sanitize function
 */
// function sanitizeCodeblock(str) {
//     if (str) {
//         return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
//     } else {
//         return str;
//     }
// }

(function () {
    //Receive global variables

    var varluesArr = [
        {
            text: '--选择短代码--',
            value: ''
        },
        {
            text: 'VIP&支付可见',
            value: '[dr_vipb2v number="1" vip="1" price="10" currency="cash或credit"]输入隐私内容[/dr_vipb2v]'
        },
        {
            text: '插入站内文章',
            value: '[insert_posts ids="123"][/insert_posts]'
        },
        {
            text: '登录可见',
            value: '[tinl2v]隐藏内容[/tinl2v]'
        },
        {
            text: '回复可见',
            value: '[tinr2v login="1"]隐藏内容[/tinr2v]'
        },
        {
            text: '公众号可见',
            value: '[gzh2v keyword="关键字" key="验证码"]隐藏内容[/gzh2v]'
        },
        {
            text: '密码可见',
            value: '[dr_passwd2v key="密码"]输入隐私内容[/dr_passwd2v]'
        },
        {
            text: '购买指定商品可见',
            value: '[drb2v id="商品ID"]输入隐私内容[/drb2v]'
        },
        {
            text: '管理员可见',
            value: '[lxtxa2v none="1"]隐藏内容[/lxtxa2v]'
        },
        {
            text: '按钮',
            value: '[button class="default或primary或success或info或warning或danger" size="lg或sm或xs" href="" title="" target="_blank" style=""]按钮[/button]'
        },
        {
            text: '信息条',
            value: '[callout class="info或warning或danger" title="" start="2014-03-15 00:00:01" expire="2038-11-11 05:06:02"]信息条[/callout]'
        },
        {
            text: '背景块',
            value: '[infobg class="tips或primary或notice或success或info或warning或danger" closebtn="" color="" bgcolor="" start="2014-03-15 00:00:01" expire="2038-11-11 05:06:02"]背景块[/infobg]'
        },
        {
            text: '下载',
            value: '[button class="download" size="lg或sm或xs" href="" title=""]此下载为直接跳转下载地址页，若要跳转站内专用下载页，请使用编辑器下方下载资源meta-box[/button]'
        },
        {
            text: '演示',
            value: '[button class="demo" size="lg或sm或xs" href="" title=""]此演示为直接跳转演示网站页，若要站内嵌入演示，请使用编辑器下方演示资源meta-box[/button]'
        },
        {
            text: '折叠板',
            value: '[toggle hide="no" title="" color=""]输入内容[/toggle]'
        },
        {
            text: '垂直手风琴',
            value: '[toggleh title="标题1,标题2,标题3" show="1"]内容1@||@内容2@||@内容3[/toggleh]'
        },
        {
            text: '水平手风琴',
            value: '[togglev title="标题1,标题2,标题3" show="1"]内容1@||@内容2@||@内容3[/togglev]'
        },
        {
            text: '图片相册',
            value: '[dr_gallery img="图片1的src,描述1|图片2的src,描述2|图片3的src,描述3"][/dr_gallery]'
        },
        {
            text: '图片幻灯',
            value: '[sliderimg img="图片1链接|图片2链接|图片3链接" auto="1或者0"][/sliderimg]'
        },
        {
            text: '图片幻灯-带缩略图',
            value: '[thumbsliderimg img="图片1链接|图片2链接|图片3链接"][/thumbsliderimg]'
        },
    ];
    // varluesArr.push({ text: 'VIP付费可见', value: '[dr_vipb2v number="1" vip="1" price="10" currency="cash或credit"]输入隐私内容[/dr_vipb2v]' });

    // console.log(varluesArr);

    tinymce.create('tinymce.plugins.dr_external_rich_mce_script', {
        init: function (editor, url) {
            editor.addButton('dr_rich_mce_select', {
                title: 'Dragon 短代码',
                text: '短代码',
                type: 'listbox',
                values: varluesArr,
                onselect: function (e) {
                    var thisV = this.value();
                    var thisT = this.text();
                    if (thisV === '') return;

                    editor.execCommand('mceInsertContent', false, thisV);
                },
            });

        },
        createControl: function (n, cm) {
            return null;
        },
    });

    tinymce.PluginManager.add('dr_external_rich_mce_script', tinymce.plugins.dr_external_rich_mce_script);

})();