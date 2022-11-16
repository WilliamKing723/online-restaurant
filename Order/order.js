

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
            $(".prodText").each(function(){
                $(this).hide();
			});
            $("#" + $(this).attr("id") + "Img").show();
            console.log("#" + $(this).attr("id") + "Img");
            
			$("#exampleModalLabel").text($(this).text());
			$(".selectStyle").each(function(){
				$(this).val(0).hide();
			});
            $(".prodPrice").each(function(){
				$(this).val(0).hide();
			});
            
            $("#spicyChoose1").each(function(){
				$(this).val(null);
			});
			switch($(this).text()){
				case "炒麵": {
					$("#bodylist_friedNoodles").show();
                    $(".spicyCheck").show();
					break;
				}
				case "湯麵": {
					$("#bodylist_soupNoodles").show();
                    $(".spicyCheck").show();
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
		switch($("#exampleModalLabel").text()){
            case"炒麵":{
                $("#bodylist_friedNoodles").find("option").each(function(index){
                    if(index === $("#bodylist_friedNoodles")[0].selectedIndex) {
                        $("#friedNoodlesImg"+index).show();
                        $("#friedNoodlesText"+index).show();
                        $("#friedNoodlesPrice"+index).show();
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

var shoplist = {}

shoplist.name = "MyBuylist 購物清單"
shoplist.time = "2020/12/30"
shoplist.list = [

]


function showlist(){
    $("#items_list").html("")
    
    let total_price = 0

for(let i=0; i<shoplist.list.length; i++){
    let item = shoplist.list[i]

    let id = 0,num = 0,name = 0,price = 0,del_id = 0

    id = `buyItem${i+1}`
    num = i+1
    name = item.name
    price = item.price
    del_id = `delItem${i+1}`
    total_price += parseInt(item.price) 

    let item_html=`<li id=${id} class="buy_item">${num}.${name}
        <div class="price">${price}</div>
        <div id=${del_id} class="del_btn">X</div>
    </li>`



    $("#items_list").append(item_html)
    $(`#${del_id}`).click(function(){
    removeItem(i)
    })
}

let total = `<li class="buy_item total">總價
    <div class="price">${total_price}</div>
</li>`
$("#items_list").append(total)
}
showlist()



$(".addbtn").click(function(){
shoplist.list.push({
    name:$("#input_name").val(),
    price:$("#input_price").val()
})

$("#input_name").val("")
$("#input_price").val("")

showlist()
})

function removeItem(id){
shoplist.list.splice(id,1)
showlist()
}

