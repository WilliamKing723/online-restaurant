// (document).ready(function(){

// })
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
	$('#button1')
		.on('mouseover', function(){
			$(this).stop(true).animate({
				backgroundColor:'#ae5e9b',
				color: '#fff'
			}, duration);
		})
		.on('mouseout', function(){
			$(this).stop(true).animate({
				backgroundColor:'#fff',
				color: '#ebc000'
			}, duration);
		});
});

$(function(){
	$("select").change(function(){
		$("select option:selected").each(function(){
			var n=
			$(".prodPic").show()
		});
	});

})


// $(function(){
// 	$('#bodytlist_friedNoddles select option:selected').mouseover(function(){
// 		$("#")
// 	})
// })