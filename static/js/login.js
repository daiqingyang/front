$(function(){
	var oPwd=document.getElementById('password');
	var oLogin=document.getElementById('owl-login');
	var oForgot = document.getElementById('forgot');
	var oSign = document.getElementById('sign');
	var oShowError = document.getElementById('showError');
	var oLoading = $('<div class="spinner"><div class="rect1"></div>'+
			  '<div class="rect2"></div>'+
			  '<div class="rect3"></div>'+
			  '<div class="rect4"></div>'+
			  '<div class="rect5"></div></div>');
	oPwd.onfocus=function()
	{
		oLogin.className='password';
	}
	oPwd.onblur=function()
	{
		oLogin.className='';
	}
	oForgot.onclick = function(){
		var msg = '请联系it管理员重置密码';
		showError(msg);
	}
	oSign.onclick = function(){
		var msg = '请联系it管理员申请域账号';
		showError(msg);
	}
	function showError(msg){
		oShowError.innerHTML = msg;
		oShowError.style.display = 'block';
		setTimeout(function() {
            oShowError.style.display = 'none';
        }, 1500);
	}
	$('#userName,#password').focus(function(){
		$('.error').text('');
	})
	$('#login').click(function(){
		var userName = $('#userName').val();
		var password = $('#password').val();
		if(!userName && !password){
			$('.error').text('请输入用户名及密码');
			return;
		}
		$.ajax({
			type:'post',
			url:host,
			data:'userName='+userName+'&password='+password,
			timeout:1500,
			beforeSend:function(){
				oLoading.hide();
				oLoading.appendTo('.login-form');
			},
			success:function(s){
				if(s == 'failed'){//请求不成功
					$('.error').html('您输入的密码和用户名不匹配');
				}else{
					window.location.href = '/';
				}
			}
		})
	})
})