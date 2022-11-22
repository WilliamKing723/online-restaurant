

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
		$(".buttonJs").on('click',function(){
			if($(this).attr("id") === "shopSendBtn" ) {
                return;
            }
			$(".prodImg").each(function(){
                $(this).hide();
			});
            $(".prodText").each(function(){
                $(this).hide();
			});
            $("#" + $(this).attr("id") + "Img").show();
            
			$("#exampleModalLabel").text($(this).text());
			$(".selectStyle").each(function(){
				$(this).val(0).hide();
			});
            $(".prodPrice").each(function(){
				$(this).val(0).hide();
			});
            $(".spicyCheck").each(function(){
				$(this).hide();
			});
            $(".my-cart-btn").each(function(){
				$(this).hide();
			});

			switch($(this).text()){
				case "炒麵": {
					$("#bodylist_friedNoodles").show();
                    $((".spicyCheck")).show();
					break;
				}
				case "湯麵": {
					$("#bodylist_soupNoodles").show();
                    $((".spicyCheck")).show();
					break;
				}
				case "乾麵": {
					$("#bodylist_dryNoodles").show();
                    $(".spicyCheck").show();
					break;
				}
				case "炒泡麵": {
					$("#bodylist_friedInstantNoodles").show();
                    $(".spicyCheck").show();
					break;
				}
				case "酸辣粉": {
					$("#bodylist_powder").show();
                    $(".spicyCheck").show();
					break;
				}
				case "燴飯": {
					$("#bodylist_risotto").show();
                    $(".spicyCheck").show();
					break;
				}
				case "炒飯": {
					$("#bodylist_friedRice").show();
                    $(".spicyCheck").show();
					break;
				}
				case "咖哩飯": {
					$("#bodylist_curryRice").show();
                    $(".spicyCheck").show();
					break;
				}
				case "丼飯": {
					$("#bodylist_donburi").show();
                    $(".spicyCheck").show();
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
					$("#bodylist_friedFood").show();
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
                case "雙人餐": {
					$("#bodylist_friedNoodles").show();
                    $("#bodylist_friedRice").show() ;
                    $(".spicyCheck").show();
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
        $(".prodPrice").each(function(){
			$(this).hide();
		});
        $(".prodText").each(function(){
            $(this).hide();
        });
        $(".my-cart-btn").each(function(){
            $(this).hide();
        });
        
		switch($("#exampleModalLabel").text()){
            case"炒麵":{
                $("#bodylist_friedNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_friedNoodles")[0].selectedIndex) {
                        $("#friedNoodlesImg"+index).show();
                        $("#friedNoodlesText"+index).show();
                        $("#friedNoodlesPrice"+index).show();
                        $("#friedNoodlesCart"+index).show();
                    }
                    
                });
                
                
                break;
            }
            case"湯麵":{
                $("#bodylist_soupNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_soupNoodles")[0].selectedIndex) {
                        $("#soupNoodlesImg"+index).show();
                        $("#soupNoodlesText"+index).show();
                        $("#soupNoodlesPrice"+index).show();
                        
                    } 
                });
                break;
            }
			case"乾麵":{
                $("#bodylist_dryNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_dryNoodles")[0].selectedIndex) {
                        $("#dryNoodlesImg"+index).show();
                        $("#dryNoodlesText"+index).show();
                        $("#dryNoodlesPrice"+index).show();
                    } 
                });
                break;
            }
			case"炒泡麵":{
                $("#bodylist_friedInstantNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_friedInstantNoodles")[0].selectedIndex) {
                        $("#friedInstantNoodlesImg"+index).show();
                        $("#friedInstantNoodlesText"+index).show();
                        $("#friedInstantNoodlesPrice"+index).show();
                    } 
                });
                break;
            }
			case"酸辣粉":{
                $("#bodylist_powder").find("option").each(function(index){
                    if(index === $("#bodylist_powder")[0].selectedIndex) {
                        $("#powderImg"+index).show();
                        $("#powderText"+index).show();
                        $("#powderPrice"+index).show();
                    } 
                });
                break;
            }
			case"燴飯":{
                $("#bodylist_risotto").find("option").each(function(index){
                    if(index === $("#bodylist_risotto")[0].selectedIndex) {
                        $("#risottoImg"+index).show();
                        $("#risottoText"+index).show();
                        $("#risottoPrice"+index).show();
                    } 
                });
                break;
            }
			case"炒飯":{
                $("#bodylist_friedRice").find("option").each(function(index){
                    if(index === $("#bodylist_friedRice")[0].selectedIndex) {
                        $("#friedRiceImg"+index).show();
                        $("#friedRiceText"+index).show();
                        $("#friedRicePrice"+index).show();
                    } 
                });
                break;
            }
			case"咖哩飯":{
                $("#bodylist_curryRice").find("option").each(function(index){
                    if(index === $("#bodylist_curryRice")[0].selectedIndex) {
                        $("#curryRiceImg"+index).show();
                        $("#curryRiceText"+index).show();
                        $("#curryRicePrice"+index).show();
                    } 
                });
                break;
            }
			case"丼飯":{
                $("#bodylist_donburi").find("option").each(function(index){
                    if(index === $("#bodylist_donburi")[0].selectedIndex) {
                        $("#donburiImg"+index).show();
                        $("#donburiText"+index).show();
                        $("#donburiPrice"+index).show();
                    } 
                });
                break;
            }
			case"沙拉":{
                    $("#saladImg").show();
                    $("#saladText").show();
                    $("#saladPrice").show();
                break;
            }
            case"濃湯":{
                    $("#thickSoupImg").show();
                    $("#thickSoupText").show();
                    $("#thickSoupPrice").show();
                break;
            }
            case"炸物":{
                    $("#friedFoodImg").show();
                    $("#friedFoodText").show();
                    $("#friedFoodPrice").show();
                break;
            }
            case"燙青菜":{
                    $("#vegetablesImg").show();
                    $("#vegetablesText").show();
                    $("#vegetablesPrice").show();
                break;
            }
            case"滷味":{
                    $("#luWeiImg").show();
                    $("#luWeiText").show();
                    $("#luWeiPrice").show();
                break;
            }
            case"茶類":{
                    $("#teaImg").show();
                    $("#teaText").show();
                    $("#teaPrice").show();
                break;
            }
            case"果汁":{
                    $("#juiceImg").show();
                    $("#juiceText").show();
                    $("#juicePrice").show();
                break;
            }
            case"咖啡":{
                    $("#coffeeImg").show();
                    $("#coffeeText").show();
                    $("#coffeePrice").show();
                break;
            }
            case"碳酸飲料":{
                    $("#carbonatedDrinksImg").show();
                    $("#carbonatedDrinksText").show();
                    $("#carbonatedDrinksPrice").show();
                break;
            }
            case"布丁":{
                    $("#puddingImg").show();
                    $("#puddingText").show();
                    $("#puddingPrice").show();
                break;
            }
            case"蛋糕":{
                    $("#cakeImg").show();
                    $("#cakeText").show();
                    $("#cakePrice").show();
                break;
            }
            case"奶酪":{
                    $("#pannaCottaImg").show();
                    $("#pannaCottaText").show();
                    $("#pannaCottaPrice").show();
                break;
            }
            case"餅乾":{
                    $("#cookiesImg").show();
                    $("#cookiesText").show();
                    $("#cookiesPrice").show();
                break;
            }
            case"雙人餐":{
                $("#bodylist_friedNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_friedNoodles")[0].selectedIndex) {
                    $("#friedNoodlesImg"+index).show();
                    } 
                });
                $("#bodylist_friedRice").find("option").each(function(index){
                    if(index === $("#bodylist_friedRice")[0].selectedIndex) {
                    $("#friedRiceImg"+index).show();
                    } 
                });
                break;
            }
        }
    })
});

// //shoppingcart
// $(function(){
//     $.ajax({
//         url:"data.json",
//         success:function(arr){
//             for(var i=0; i<arr.lengh;i++){
//                 var node = $(`<li class='goodItem'>
//                     <div class="goodPic">
//                         <img src="${arr[i].img}" alt=""/>
//                     </div>
//                     <div class="goodTitle">
//                         <p>test</p>
//                     </div>
//                     <div class="sc">
//                         <div id="${arr[i].id}" class="sc_btn"/> 加入購物車</div>
//                     </div>
//                     </li>`);
//                     node.appendTo(".items_list ul")
//                 }
//         },
//         error:function(msg){
//             console.log(msg);
//         } 
//     })
// });

//shoppingcart
$(function () {
    var goToCartIcon = function($addTocartBtn){
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
    top: position.top,
    left: position.left
    }, 500 , "linear", function() {
    $image.remove();
    });
    }

    $('.my-cart-btn').myCart({
    currencySymbol: '$',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
    clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
    },
    afterAddOnCart: function(products, totalPrice, totalQuantity) {
        console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    // clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
    //     console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    // },
    checkoutCart: function(products, totalPrice, totalQuantity) {
        
    },
    // getDiscountPrice: function(products, totalPrice, totalQuantity) {
    //     console.log("calculating discount", products, totalPrice, totalQuantity);
    //     return totalPrice * 0.5;
    // }
    })
    ;
    });