$(document).ready(function(){
	//账户效果
	$('.uer-set a:last-child').click(function(){
		$('.hiddle').toggle();
		$(this).toggleClass('bg');
	})
	console.log($('.nav li a'))
	$('.nav li a').click(function(){
		console.log($(this).index())
	})
	//欢迎
	$('.welcome').click(function(){
		$(this).css('display','none');
	})
	//侧边栏
	console.log($('.sidebar-nav h2'))
	$('.sidebar-nav h2').click(function(){
		console.log($(this))
		$(this).next().stop().slideToggle();
		console.log($('this').next('section'))
	});
})
