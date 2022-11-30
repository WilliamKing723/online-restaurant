

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
            $(".addCheck").each(function(){
				$(this).hide();
			});
            $(".my-cart-btn").each(function(){
				$(this).hide();
			});
            $("input").val('');
            $("input:radio").attr("checked", false);
            $("input:checkbox").attr("checked", false);
			switch($(this).text()){
				case "炒麵": {
					$("#bodylist_friedNoodles").show();
                    $(".spicyCheck").show();
                    $("#addEgg").show();
                    $("#addXL").show();
					break;
				}
				case "湯麵": {
					$("#bodylist_soupNoodles").show();
                    $(".spicyCheck").show();
                    $("#addEgg").show();
                    $("#addXL").show();
                    $("#addSoup").show();
					break;
				}
				case "乾麵": {
					$("#bodylist_dryNoodles").show();
                    $(".spicyCheck").show();
                    $("#addEgg").show();
                    $("#addXL").show();
					break;
				}
				case "炒泡麵": {
					$("#bodylist_friedInstantNoodles").show();
                    $(".spicyCheck").show();
                    $("#addXL").show();
                    $("#addEgg").show();
                    $("#addSauce").show();
					break;
				}
				case "酸辣粉": {
					$("#bodylist_powder").show();
                    $(".spicyCheck").show();
                    $("#addXL").show();
                    $("#addEgg").show();
					break;
				}
				case "燴飯": {
					$("#bodylist_risotto").show();
                    $(".spicyCheck").show();
                    $("#addXL").show();
                    $("#addEgg").show();
					break;
				}
				case "炒飯": {
					$("#bodylist_friedRice").show();
                    $(".spicyCheck").show();
                    $("#addXL").show();
                    $("#addEgg").show();
					break;
				}
				case "咖哩飯": {
					$("#bodylist_curryRice").show();
                    $(".spicyCheck").show();
                    $("#addXL").show();
                    $("#addEgg").show();
                    $("#addSauce").show();
					break;
				}
				case "丼飯": {
					$("#bodylist_donburi").show();
                    $(".spicyCheck").show();
                    $("#addXL").show();
                    $("#addEgg").show();
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
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#soupNoodlesCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#dryNoodlesCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#friedInstantNoodlesCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#powderCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#risottoCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#friedRiceCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#curryRiceCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
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
                        $("#donburiCart"+index).show();
                        $("input:radio").attr("checked", false);
                        $("input:checkbox").attr("checked", false);
                    } 
                });
                break;
            }
			case"沙拉":{
                $("#saladImg").show();
                $("#saladText").show();
                $("#saladPrice").show();
                $("#bodylist_salad").find("option").each(function(index){
                    if(index === $("#bodylist_salad")[0].selectedIndex) {
                        $("#saladCart"+index).show();
                    }
                });
                break;
            }
            case"濃湯":{
                    $("#thickSoupImg").show();
                    $("#thickSoupText").show();
                    $("#thickSoupPrice").show();
                    $("#bodylist_thickSoup").find("option").each(function(index){
                        if(index === $("#bodylist_thickSoup")[0].selectedIndex) {
                            $("#thickSoupCart"+index).show();
                        }
                    });
                break;
            }
            case"炸物":{
                    $("#friedFoodImg").show();
                    $("#friedFoodText").show();
                    $("#friedFoodPrice").show();
                    $("#bodylist_friedFood").find("option").each(function(index){
                        if(index === $("#bodylist_friedFood")[0].selectedIndex) {
                            $("#friedFoodCart"+index).show();
                        }
                    });
                break;
            }
            case"燙青菜":{
                    $("#vegetablesImg").show();
                    $("#vegetablesText").show();
                    $("#vegetablesPrice").show();
                    $("#bodylist_vegetables").find("option").each(function(index){
                        if(index === $("#bodylist_vegetables")[0].selectedIndex) {
                            $("#vegetablesCart"+index).show();
                        }
                    });
                break;
            }
            case"滷味":{
                    $("#luWeiImg").show();
                    $("#luWeiText").show();
                    $("#luWeiPrice").show();
                    $("#bodylist_luWei").find("option").each(function(index){
                        if(index === $("#bodylist_luWei")[0].selectedIndex) {
                            $("#luWeiCart"+index).show();
                        }
                    });
                break;
            }
            case"茶類":{
                    $("#teaImg").show();
                    $("#teaText").show();
                    $("#teaPrice").show();
                    $("#bodylist_tea").find("option").each(function(index){
                        if(index === $("#bodylist_tea")[0].selectedIndex) {
                            $("#teaCart"+index).show();
                        }
                    });
                break;
            }
            case"果汁":{
                    $("#juiceImg").show();
                    $("#juiceText").show();
                    $("#juicePrice").show();
                    $("#bodylist_juice").find("option").each(function(index){
                        if(index === $("#bodylist_juice")[0].selectedIndex) {
                            $("#juiceCart"+index).show();
                        }
                    });
                break;
            }
            case"咖啡":{
                    $("#coffeeImg").show();
                    $("#coffeeText").show();
                    $("#coffeePrice").show();
                    $("#bodylist_coffee").find("option").each(function(index){
                        if(index === $("#bodylist_coffee")[0].selectedIndex) {
                            $("#coffeeCart"+index).show();
                        }
                    });
                break;
            }
            case"碳酸飲料":{
                    $("#carbonatedDrinksImg").show();
                    $("#carbonatedDrinksText").show();
                    $("#carbonatedDrinksPrice").show();
                    $("#bodylist_carbonatedDrinks").find("option").each(function(index){
                        if(index === $("#bodylist_carbonatedDrinks")[0].selectedIndex) {
                            $("#carbonatedDrinksCart"+index).show();
                        }
                    });
                break;
            }
            case"布丁":{
                    $("#puddingImg").show();
                    $("#puddingText").show();
                    $("#puddingPrice").show();
                    $("#bodylist_pudding").find("option").each(function(index){
                        if(index === $("#bodylist_pudding")[0].selectedIndex) {
                            $("#puddingCart"+index).show();
                        }
                    });
                break;
            }
            case"蛋糕":{
                    $("#cakeImg").show();
                    $("#cakeText").show();
                    $("#cakePrice").show();
                    $("#bodylist_cake").find("option").each(function(index){
                        if(index === $("#bodylist_cake")[0].selectedIndex) {
                            $("#cakeCart"+index).show();
                        }
                    });
                break;
            }
            case"奶酪":{
                    $("#pannaCottaImg").show();
                    $("#pannaCottaText").show();
                    $("#pannaCottaPrice").show();
                    $("#bodylist_pannaCotta").find("option").each(function(index){
                        if(index === $("#bodylist_pannaCotta")[0].selectedIndex) {
                            $("#pannaCottaCart"+index).show();
                        }
                    });
                break;
            }
            case"餅乾":{
                    $("#cookiesImg").show();
                    $("#cookiesText").show();
                    $("#cookiesPrice").show();
                    $("#bodylist_cookies").find("option").each(function(index){
                        if(index === $("#bodylist_cookies")[0].selectedIndex) {
                            $("#cookiesCart"+index).show();
                        }
                    });
                break;
            }
            // case"雙人餐":{
            //     $("#bodylist_friedNoodles").find("option").each(function(index){
            //         if(index === $("#bodylist_friedNoodles")[0].selectedIndex) {
            //         $("#friedNoodlesImg"+index).show();
            //         } 
            //     });
                
            //     $("#bodylist_friedRice").find("option").each(function(index){
            //         if(index === $("#bodylist_friedRice")[0].selectedIndex) {
            //         $("#friedRiceImg"+index).show();
            //         } 
            //     });
                
            //     break;
            // }
        }
    })
});

//shoppingcart
$(function(){
    sc_msg();
    $.ajax({
        url:"data.json",
        success:function(arr){
            for(var i=0; i<arr.length;i++){
                $(`<li class='goodItem'>
                    <div class="goodTitle">
                        <p>test</p>
                    </div>
                    <div class="sc">
                        <div id="${arr[i].id}" class="sc_btn"/> 加入購物車</div>
                    </div>
                    </li>`);
                }
        },
        error:function(msg){
            console.log(msg);
        } 
    })
    $(".my-cart-btn").on("click", function(){
        var id = this.id;
        
        var first = $.cookie("goods") ==  null ? true :false;
        if(first){
            var arr = [{id: id, num:1}]
            $.cookie("goods",JSON.stringify(arr),{
                expires: 7
            })
        }else{
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);

            var same = false;
            for(var i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    same = true;
                    cookieArr[i].num++;
                    break;
                }
            }

            if (!same){
                cookieArr.push({id:id, num:1});
            }

            $.cookie("goods", JSON.stringify(cookieArr),{
                expires: 7
            })
            sc_msg();
            console.log(sc_msg());
        }
    })
    
    function sc_msg(){
        $("#items_list ul").empty();
        $.ajax({
            url:"data.json",
            success:function(arr){
                var cookieStr = $.cookie("goods");
                var newArr = [] ;
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                            // 在cookie商品有紀錄
                            if(arr[i].id == cookieArr[j].id){
                                arr[i].num = cookieArr[j].num;
                                newArr.push(arr[i]);
                            }
                        }
                    }
                }
                for(var i = 0; i<newArr.length; i++){
                    var node = $(`<li>
                    <div class="sc_goodsPic">
                        <img src="${newArr[i].img}" alt=""/>
                    </div>
                    <div class="sc_goodsTitle">
                        <p>123</p>
                    </div>
                    <div class="sc_goodsDetail"></div>
                    <div class="sc_goodsNum">商品數量:${newArr[i].num}</div>
                    </li>`);
                    
                    node.appendTo($("#items_list ul"));
                }
            }
        })
    }
});


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
    classConfirmCart: 'my-cart-checkout',
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
    });
    });