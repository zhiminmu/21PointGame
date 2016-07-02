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

$(".register").click(function() {
	$username = $(".register-model .username").val();
	$password = $(".register-model .password").val();
	register($username,$password);
});

$(".login").click(function(){
	$username = $(".login-model .username").val();
	$password = $(".login-model .password").val();	
	login($username,$password);		
});

function login($username,$password){
	$.ajax({
		url: '/login',
		type: 'POST',
		dataType: 'json',
		data: {username: $username,password:$password,loginAction:'loginCheck'},
	})
	.done(function(response) {
		if (response['playerid']!=null) {
			$(".userOperation").css({display:'none'});
			$(".vs-mode").css({display:'block'});
			storage(response);
		}
		
	})
	.fail(function(data) {
		alert("用户名或密码不正确请重新输入");
	})
}

function register($username,$password){
	$.ajax({
		url: '/register',
		type: 'POST',
		dataType: 'json',
		data: {username: $username, password: $password, registerAction:'register'},
	})
	.done(function(data) {
		if(JSON.stringify(data).indexOf("success")<=-1){
			alert("the username has been used! please select another one.");
		}else{
			login($username,$password);			
		}
	})
	.fail(function(data) {
		console.log("error"+data);
	})
}

function storage($player){
	$playername = $player['playername']; 
	sessionStorage.setItem("playerName",$playername);
}

// function setCookie(name,value,expire){
// 	var expireTime = new Date();
// 	expireTime.setDate(date.getHours()+expire);
// 	document.cookie = name+"="+escape(value)
// 	+((expire==null)?"":";expire="expireTime.toGMTString());
// }

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

$(".battle-1").click(function(){
	$mode = 1;
	$(".vs-mode").css({
		display: 'none'
	});
	// alert($(".play button").val());
	$(".play").css({
		display:'inline-block'
	})
	// $bet = 0;
	// $(".play li").click(function(){
	// 		$i = $(this).index();
	// 		switch($i){
	// 			case 0: $bet = 5; break;
	// 			case 1: $bet = 10; break;
	// 			case 2: $bet = 15; break;
	// 			case 3: $bet = 20; break;
	// 		}
	// 	});
	$(".play button").click(function(){
		$bet = $(".play option:selected").val();
		$jetton = sessionStorage.jetton==null?100:sessionStorage.jetton;
		// alert($jetton);
		$.getScript("operation.js",function(){
			operation($mode);
		});
	});
});

$(".battle-2").click(function(){

});

$(".battle-3").click(function(){

});

$(".battle-4").click(function(){

});


});