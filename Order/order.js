// (document).ready(function(){

// })

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
// 選單
$(function(){
	$(".am").each(function(){
		$("button").on('click',function(){
			if($(this).attr("id") === "shopSendBtn") {
                return;
            }
			$(".prodImg").each(function(){
                $(this).hide();
			});
            $("#" + $(this).attr("id") + "Img").show();
            console.log("#" + $(this).attr("id") + "Img");
            // if($(this).attr("id") === "salad") {
            //     $("#saladImg").show();
            // }
			$("#exampleModalLabel").text($(this).text());
			$(".selectStyle").each(function(){
				$(this).val(0).hide();
			});
			switch($(this).text()){
				case "炒麵": {
					$("#bodylist_friedNoodles").show();
					break;
				}
				case "湯麵": {
					$("#bodylist_soupNoodles").show();
					break;
				}
				case "乾麵": {
					$("#bodylist_dryNoodles").show();
					break;
				}
				case "炒泡麵": {
					$("#bodylist_friedInstantNoodles").show();
					break;
				}
				case "酸辣粉": {
					$("#bodylist_powder").show();
					break;
				}
				case "燴飯": {
					$("#bodylist_risotto").show();
					break;
				}
				case "炒飯": {
					$("#bodylist_friedRice").show();
					break;
				}
				case "咖哩飯": {
					$("#bodylist_curryRice").show();
					break;
				}
				case "丼飯": {
					$("#bodylist_donburi").show();
					break;
				}
                case "沙拉": {
					$("#bodylist_salad").show();
					break;
				}
                case "濃湯": {
					$("#bodylist_thickSoup").show();
					break;
				}
                case "炸物": {
					$("#bodylist_friedfood").show();
					break;
				}
                case "燙青菜": {
					$("#bodylist_vegetables").show();
					break;
				}
                case "滷味": {
					$("#bodylist_luWei").show();
					break;
				}
                case "茶類": {
					$("#bodylist_tea").show();
					break;
				}
                case "果汁": {
					$("#bodylist_juice").show();
					break;
				}
                case "咖啡": {
					$("#bodylist_coffee").show();
					break;
				}
                case "碳酸飲料": {
					$("#bodylist_carbonatedDrinks").show();
					break;
				}
                case "布丁": {
					$("#bodylist_pudding").show();
					break;
				}
                case "蛋糕": {
					$("#bodylist_cake").show();
					break;
				}
                case "奶酪": {
					$("#bodylist_pannaCotta").show();
					break;
				}
                case "餅乾": {
					$("#bodylist_cookies").show();
					break;
				}
			}
		});
		
	});
});
// 根據選單切換圖片
$(function(){
    $(".selectStyle").change(function(){
		$(".prodImg").each(function(){
			$(this).hide();
		});
		switch($("#exampleModalLabel").text()){
            case"炒麵":{
                $("#bodylist_friedNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_friedNoodles")[0].selectedIndex) {
                        $("#friedNoodlesImg"+index).show();
                    }
                });
                break;
            }
            case"湯麵":{
                $("#bodylist_soupNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_soupNoodles")[0].selectedIndex) {
                        $("#soupNoodlesImg"+index).show();
                    } 
                });
                break;
            }
			case"乾麵":{
                $("#bodylist_dryNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_dryNoodles")[0].selectedIndex) {
                        $("#dryNoodlesImg"+index).show();
                    } 
                });
                break;
            }
			case"炒泡麵":{
                $("#bodylist_friedInstantNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_friedInstantNoodles")[0].selectedIndex) {
                        $("#friedInstantNoodlesImg"+index).show();
                    } 
                });
                break;
            }
			case"酸辣粉":{
                $("#bodylist_powder").find("option").each(function(index){
                    if(index === $("#bodylist_powder")[0].selectedIndex) {
                        $("#powderImg"+index).show();
                    } 
                });
                break;
            }
			case"燴飯":{
                $("#bodylist_risotto").find("option").each(function(index){
                    if(index === $("#bodylist_risotto")[0].selectedIndex) {
                        $("#risottoImg"+index).show();
                    } 
                });
                break;
            }
			case"炒飯":{
                $("#bodylist_friedRice").find("option").each(function(index){
                    if(index === $("#bodylist_friedRice")[0].selectedIndex) {
                        $("#friedRiceImg"+index).show();
                    } 
                });
                break;
            }
			case"咖哩飯":{
                $("#bodylist_curryRice").find("option").each(function(index){
                    if(index === $("#bodylist_curryRice")[0].selectedIndex) {
                        $("#curryRiceImg"+index).show();
                    } 
                });
                break;
            }
			case"丼飯":{
                $("#bodylist_donburi").find("option").each(function(index){
                    if(index === $("#bodylist_donburi")[0].selectedIndex) {
                        $("#donburiImg"+index).show();
                    } 
                });
                break;
            }
			case"沙拉":{
                    $("#saladImg").show();
                break;
            }
            case"濃湯":{
                    $("#thickSoupImg").show();
                break;
            }
            case"炸物":{
                    $("#friedfoodImg").show();
                break;
            }
            case"燙青菜":{
                $("#bodylist_vegetables").find("option").each(function(index){
                    if(index === $("#bodylist_vegetables")[0].selectedIndex) {
                        $("#vegetablesImg"+index).show();
                    }
                });
                break;
            }
            case"滷味":{
                $("#bodylist_luWei").find("option").each(function(index){
                    if(index === $("#bodylist_luWei")[0].selectedIndex) {
                        $("#luWeiImg"+index).show();
                    }
                });
                break;
            }
            case"茶類":{
                $("#bodylist_tea").find("option").each(function(index){
                    if(index === $("#bodylist_tea")[0].selectedIndex) {
                        $("#teaImg"+index).show();
                    }
                });
                break;
            }
            case"果汁":{
                $("#bodylist_juice").find("option").each(function(index){
                    if(index === $("#bodylist_juice")[0].selectedIndex) {
                        $("#juiceImg"+index).show();
                    }
                });
                break;
            }
            case"咖啡":{
                $("#bodylist_coffee").find("option").each(function(index){
                    if(index === $("#bodylist_coffee")[0].selectedIndex) {
                        $("#coffeeImg"+index).show();
                    }
                });
                break;
            }
            case"碳酸飲料":{
                $("#bodylist_carbonatedDrinks").find("option").each(function(index){
                    if(index === $("#bodylist_carbonatedDrinks")[0].selectedIndex) {
                        $("#carbonatedDrinksImg"+index).show();
                    }
                });
                break;
            }
            case"布丁":{
                $("#bodylist_pudding").find("option").each(function(index){
                    if(index === $("#bodylist_pudding")[0].selectedIndex) {
                        $("#puddingImg"+index).show();
                    }
                });
                break;
            }
            case"蛋糕":{
                $("#bodylist_cake").find("option").each(function(index){
                    if(index === $("#bodylist_cake")[0].selectedIndex) {
                        $("#cakeImg"+index).show();
                    }
                });
                break;
            }
            case"奶酪":{
                $("#bodylist_pannaCotta").find("option").each(function(index){
                    if(index === $("#bodylist_pannaCotta")[0].selectedIndex) {
                        $("#pannaCottaImg"+index).show();
                    }
                });
                break;
            }
            case"餅乾":{
                $("#bodylist_cookies").find("option").each(function(index){
                    if(index === $("#bodylist_cookies")[0].selectedIndex) {
                        $("#cookiesImg"+index).show();
                    }
                });
                break;
            }
        }
    })
});


