$(document).ready(function(){
	$(".username").focus(function() {
		$(this).addClass("focus");
		$(".username-group label").css({
			display: 'none'
		});
		var userVal=$(this).val();
		console.log(userVal);
		if (userVal=="username") {
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		checkUsername($(this).val());
		
	});

	$(".password").focus(function() {
		$(this).addClass("focus");
		$(".password-group label").css({
			display: 'none'
		});
		var userVal=$(this).val();
		if (userVal=="password") {
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		checkPassword($(this).val());
		
	});

	$(".confpsw").focus(function() {
		$(this).addClass("focus");
		$(".confpsw-group label").css({
			display: 'none'
		});
		var userVal=$(this).val();
		if (userVal=="confirm password") {
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		checkConfpsw($(".password").val(),$(this).val());
		
	});


function checkUsername(username){
	var reg = /[a-z_]{1}\w{5,15}/;
	var result = username.match(reg);
	if (result ==null) {
		$(".username-group label").css({
			display: 'inline'
		});
		$(".register-group .register").attr({
			disabled: 'true'
		});
		$(".login-group .login").attr({
			disabled: 'true'
		});
	}else{
		$(".register-group .register").removeAttr('disabled');
		$(".login-group .login").removeAttr('disabled');
	}
}
function checkPassword(password){
	var len = password.length;
	if (len<=8 || len>=16) {
		$(".password-group label").css({
			display: 'inline'
		});
		$(".register-group .register").attr({
			disabled: 'true'
		});
		$(".login-group .login").attr({
			disabled: 'true'
		});
	}else{
		$(".register-group .register").removeAttr('disabled');
		$(".login-group .login").removeAttr('disabled');
	}
}

function checkConfpsw(password,confpsw){

	if (password!=confpsw) {
		$(".confpsw-group label").css({
			display: 'inline'
		});
		$(".register-group .register").attr({
			disabled: 'true'
		});
		$(".login-group .login").attr({
			disabled: 'true'
		});
	}else{
		$(".register-group .register").removeAttr('disabled');
		$(".login-group .login").removeAttr('disabled');
	}
}

$(".register").click(function(event) {
	$username = $(".register-model .username").val();
	$password = $(".register-model .password").val();

	$.ajax({
		url: '/register',
		type: 'POST',
		dataType: 'json',
		data: {username: $username, password: $password, registerAction:'register'},
	})
	.done(function(data) {
		console.log("success:"+data);
	})
	.fail(function(data) {
		console.log("error"+data);
	})
	// .always(function(data) {
	// 	console.log("complete"+data);
	// });
	
});

$(".login").click(function(){
	$username = $(".login-model .username").val();
	$password = $(".login-model .password").val();
	// $param = JSON.stringify({"loginAction":"loginCheck","username":$username,"password":$password});
	$.ajax({
		url: '/login',
		type: 'POST',
		dataType: 'json',
		data: {username: $username,password:$password,loginAction:'loginCheck'},
		success: function(data){
			alert("用户名或密码正确");
			console.log(data);
		},
		error: function(data){
			alert("用户名或密码不正确请重新输入");
			console.log(data);
		}
	})
	// .done(function(response) {
	// 	alert("success"+response['responseText']);
		
	// })
	// .fail(function(data) {
	// 	alert("用户名或密码不正确请重新输入");
	// 	console.log(data);
	// })
	// .always(function() {
	// 	console.log("complete");
	// });
	
});



$(".logon-tab .log").click(function(){
	$(".register-model").css({
		display: 'none'
	});

	$(".login-model").css({
		display: 'block'
	});
});

$(".logon-tab .reg").click(function(){
	$(".login-model").css({
		display: 'none'
	});
	$(".register-model").css({
		display: 'block'
	});
});


});