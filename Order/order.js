// sidebar
$(document).ready(function() {
            
    $("#collapse").on("click", function() {

        $("#sidebar").toggleClass("active");
        $(".fa-align-left").toggleClass("fa-chevron-circle-right");
    })
})

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

window.open("https://www.w3schools.com");