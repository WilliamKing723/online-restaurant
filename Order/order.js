function shoppingcart() { 

} 
//backTop
$(function(){
	$('#BackTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#BackTop').fadeIn(222);
		} else {
			$('#BackTop').stop().fadeOut(222);
		}
	}).scroll();
});

//button
$(function(){
	var duration=300;
	$('#button1 button')
		.on('mouseover', function(){
			$(this).stop(true).animate({
				backgroundColor:'#ae5e9b',
				color: '#fff'
			}, duration);
		})
		.on('mouseout button', function(){
			$(this).stop(true).animate({
				backgroundColor:'#fff',
				color: '#ebc000'
			}, duration);
		});
});

