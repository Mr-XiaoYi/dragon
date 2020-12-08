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
// lxtx
	(function ($) {
		
		// 按钮api
		$('#lxtx-input-button button').click(function(event){
		  event.preventDefault();
		  var _this = $(this);
		  var key = _this.attr('data-key');
		  // str_shuffle
		  if( key=="str_shuffle" ){
			_this.attr('disabled','disabled').css('opacity','0.6');
			var inputid = '#'+_this.attr('id')+'-input';
			var string = _this.attr('data-string');
			$.ajax({
			  type:"POST",
			  dataType:"json",  
			  // url:tin.ajax_url,
			  url:"https://www.ilxtx.com/api/query/",
			  timeout:30000,  //ajax请求超时时间80秒
			  data:{
				key : key,
				string:string
			  },
			  success:function(data){
				if(data.return_code=="SUCCESS"){
				  $(inputid).val(data.string);
				}
				_this.removeAttr('disabled').css('opacity','1');
			  },
			  error:function(){
				_this.removeAttr('disabled').css('opacity','1');
			  }
			});
		  }
		  // 加解密
		  if( key=="lauth_decode" || key=="lauth_encode" ){
			var input_key = '#'+_this.attr('id')+'-input-key';
			var input_string = '#'+_this.attr('id')+'-input-string';
			var input_data = '#'+_this.attr('id')+'-input-data';
			console.log(input_key);
			console.log(input_string);
			console.log(input_data);
			var time = _this.attr('data-time');
			var input_key = $(input_key).val();
			var input_string = $(input_string).val();
			var input_datas = $(input_data).val();
			console.log(input_datas);
			if( input_key.length>0 && input_string.length>0 && input_datas.length>0 && time.length>0 ){
			  _this.attr('disabled','disabled').css('opacity','0.6');
			  $.ajax({
				type:"POST",
				dataType:"json",  
				// url:tin.ajax_url,
				url:"https://www.ilxtx.com/api/query/",
				timeout:30000,  //ajax请求超时时间80秒
				data:{
				  key : key,
				  data : input_datas,
				  lauth_key : input_key,
				  lauth_string : input_string,
				  lauth_time : time
				},
				success:function(data){
				  if(data.return_code=="SUCCESS"){
					$(input_data).val(data.data);
				  }else if(data.return_code=="FAIL" && key=="lauth_decode"){
					$(input_data).val(data.return_message);
				  }
				  _this.removeAttr('disabled').css('opacity','1');
				},
				error:function(){
				  _this.removeAttr('disabled').css('opacity','1');
				}
			  });
			}
		  }
		});

		// 发送测试邮件
		$('#smtp_mail_testing').click(function(event){
		  event.preventDefault();
		  var _this = $(this);
		  var target_email = $('#smtp_mail_testing-input').val();
		  if( target_email.length<=0 || !(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(target_email)) ){return;}
		  _this.attr('disabled','disabled').css('opacity','0.6');
		  $.ajax({
			type:"POST",
			dataType:"json",
			url:"admin-ajax.php",
			timeout:30000,  //ajax请求超时时间10秒
			data:{
			  action : 'ajax_mail_testing',
			  target_email:target_email
			},
			beforeSend:function(){
			  $('#smtp_mail_testing_loading').html('努力发送中，请稍候...').css('color','#444444');
			},
			success:function(data){
			  if(data.success==1){
				$('#smtp_mail_testing_loading').html(data.msg).css('color','#008000');
			  }else{
				$('#smtp_mail_testing_loading').html(data.msg).css('color','#C7254E');
			  }
			  _this.removeAttr('disabled').css('opacity','1');
			},
			error:function(){
			  _this.removeAttr('disabled').css('opacity','1');
			}
		  });
		});


	})(jQuery);
	// lxtx