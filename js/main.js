$(function(){
	$('.registered').click(function(){
		$('#registered-form').show();
		$('#login-form').hide();
	})
	$('.login').click(function(){
		
		var temp= $("#login-form").is(":hidden");
		if (temp==false){
			window.location.href= 'list.html';
		}else{
			$('#registered-form').hide();
			$('#login-form').show();
		}
		
	})


})