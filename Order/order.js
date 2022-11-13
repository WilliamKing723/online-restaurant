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
	$(".am").each(function(){
		$("button").on('click',function(){
			$("#exampleModalLabel").text($(this).text());
			$(".selectStyle").each(function(){
				$(this).hide();
			});
			switch($(this).text()){
				case "炒麵": {
					$("#bodytlist_friedNoodles").show();
					break;
				}
				case "湯麵": {
					$("#bodytlist_soupNoodles").show();
					break;
				}
				case "乾麵": {
					break;
				}
				case "炒泡麵": {
					break;
				}
				case "酸辣粉": {
					break;
				}
			}
		});
		
	});
});

$(function(){
    $(".selectStyle").change(function(){
		$(".prodImg").each(function(){
			$(this).hide();
		});
		switch($("#exampleModalLabel").text()){
			case"炒麵":{
				$("#bodytlist_friedNoodles").each(function(index){
					if(index === $(".selectStyle")[0].selectedIndex) {
						$("#friedNoodlesImg"+index).show();
					}
				});
				break;
			}
			case"湯麵":{
				$("#bodytlist_soupNoodles").each(function(index){
					if(index === $(".selectStyle")[0].selectedIndex) {
						$("#soupNoodlesImg"+index).show();
					} 
				});
				break;
			}
		}
	});
});

// $(function(){
// 	$('#bodytlist_friedNoddles select option:selected').mouseover(function(){
// 		$("#")
// 	})
// })