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

$(function(){
	$(".am").each(function(){
		$("button").on('click',function(){
			if($(this).attr("id") === "shopSendBtn" || $(this).attr("id") === "shopQuit") {
                return;
            }
			$(".prodImg").each(function(){
				$(this).hide();
			});
			$("#exampleModalLabel").text($(this).text());
			$(".selectStyle").each(function(){
				$(this).val(0).hide();
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
					$("#bodytlist_dryNoodles").show();
					break;
				}
				case "炒泡麵": {
					$("#bodytlist_friedInstantNoodles").show();
					break;
				}
				case "酸辣粉": {
					$("#bodytlist_powder").show();
					break;
				}
				case "燴飯": {
					$("#bodytlist_risotto").show();
					break;
				}
				case "炒飯": {
					$("#bodytlist_friedRice").show();
					break;
				}
				case "咖哩飯": {
					$("#bodytlist_curryRice").show();
					break;
				}
				case "丼飯": {
					$("#bodytlist_donburi").show();
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
                $("#bodytlist_friedNoodles").find("option").each(function(index){
                    if(index === $("#bodytlist_friedNoodles")[0].selectedIndex) {
                        $("#friedNoodlesImg"+index).show();
                    }
                });
                break;
            }
            case"湯麵":{
                $("#bodytlist_soupNoodles").find("option").each(function(index){
                    if(index === $("#bodytlist_soupNoodles")[0].selectedIndex) {
                        $("#soupNoodlesImg"+index).show();
                    } 
                });
                break;
            }
			case"乾麵":{
                $("#bodytlist_dryNoodles").find("option").each(function(index){
                    if(index === $("#bodytlist_dryNoodles")[0].selectedIndex) {
                        $("#dryNoodlesImg"+index).show();
                    } 
                });
                break;
            }
			case"炒泡麵":{
                $("#bodytlist_friedInstantNoodles").find("option").each(function(index){
                    if(index === $("#bodytlist_friedInstantNoodles")[0].selectedIndex) {
                        $("#friedInstantNoodlesImg"+index).show();
                    } 
                });
                break;
            }
			case"酸辣粉":{
                $("#bodytlist_powder").find("option").each(function(index){
                    if(index === $("#bodytlist_powder")[0].selectedIndex) {
                        $("#powderImg"+index).show();
                    } 
                });
                break;
            }
			case"燴飯":{
                $("#bodytlist_risotto").find("option").each(function(index){
                    if(index === $("#bodytlist_risotto")[0].selectedIndex) {
                        $("#risottoImg"+index).show();
                    } 
                });
                break;
            }
			case"炒飯":{
                $("#bodytlist_friedRice").find("option").each(function(index){
                    if(index === $("#bodytlist_friedRice")[0].selectedIndex) {
                        $("#friedRiceImg"+index).show();
                    } 
                });
                break;
            }
			case"咖哩飯":{
                $("#bodytlist_curryRice").find("option").each(function(index){
                    if(index === $("#bodytlist_curryRice")[0].selectedIndex) {
                        $("#curryRiceImg"+index).show();
                    } 
                });
                break;
            }
			case"丼飯":{
                $("#bodytlist_donburi").find("option").each(function(index){
                    if(index === $("#bodytlist_donburi")[0].selectedIndex) {
                        $("#donburiImg"+index).show();
                    } 
                });
                break;
            }
			case"沙拉":{
                $("#bodytlist_powder").find("option").each(function(index){
                    if(index === $("#bodytlist_powder")[0].selectedIndex) {
                        $("#powderImg"+index).show();
                    } 
                });
                break;
            }
        }
	});
});

