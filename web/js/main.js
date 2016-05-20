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
	}
}
function checkPassword(password){
	var len = password.length;
	if (len<=8 || len>=16) {
		$(".password-group label").css({
			display: 'inline'
		});
	}
}

function checkConfpsw(password,confpsw){

	if (password!=confpsw) {
		$(".confpsw-group label").css({
			display: 'inline'
		});
	}
}

$(".register").click(function(event) {

	$.post('/path/to/file', {param1: 'value1'}, function(data, textStatus, xhr) {
		
	});
});

$(".login").click(function(){
	$.post('/path/to/file', {param1: 'value1'}, function(data, textStatus, xhr) {
		/*optional stuff to do after success */
	});
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