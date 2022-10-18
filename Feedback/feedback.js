jQuery(function ($) {
    $.mask.definitions['y'] = '[2]';
    $.mask.definitions['m'] = '[01]';
    $.mask.definitions['d'] = '[0-3]';

$('input[name="InvoiceType"]').on("click", function (e) {

    var InvoiceType = $(this).val();

    $("#InvoiceNo_Eng").removeAttr('value');
    $("#InvoiceNo_Number").removeAttr('value');     

    if (InvoiceType === '1') {
        $("#InvoiceNo_Eng").show();
        $("#InvoiceNo_Number").show();
        $("#InvoiceNo_Note").show();            
    }

    if (InvoiceType === '2') { 
        $("#InvoiceNo_Eng").hide();
        $("#InvoiceNo_Number").hide();
        $("#InvoiceNo_Note").hide();
    }

});

function ShowErrorMsg() {
    //debugger;

    var ErrorMsg = '';
    if (ErrorMsg.length > 0) {
        alert(ErrorMsg);
        CheckInput();
    }
}
function SelectCustSex() {
    
    var CustSex = 0;
    if (CustSex == 1) 
    {
        var CustM = document.getElementById("CustM");
        CustM.checked=true;
    }else if (CustSex == 2) 
    {
        var CustF = document.getElementById("CustF");
        CustF.checked=true;
    }else if (CustSex == 3) 
    {
        var CustOther = document.getElementById("CustOther");
        CustOther.checked=true;
    }
}

$(document).ready(function () {
    

    SelectCustSex();
    
    var isInit = '';
    if (isInit == "True") {
        var errormsg_Valid = document.getElementById("errormsg_Valid");
        errormsg_Valid.style.display = "none";
    }

    ShowErrorMsg();
});

function SetLabel(Qlist) {
    var MainLabel = document.getElementById("MainLabel");
    var AppLabel = document.getElementById("AppLabel");
    var AppDDL = document.getElementById("AppDDL");
    var PointCardDDL = document.getElementById("PointCardDDL");

    if (Qlist.value == "1") {
        MainLabel.style.display = "block";
        InvoiceAndDateLabel.style.display = "block";
        AppLabel.style.display = "none";
    }
    else if (Qlist.value == "2") {
        MainLabel.style.display = "none";
        AppLabel.style.display = "block";
        AppDDL.style.display = "none";
        PointCardDDL.style.display = "block";
    }
    else if (Qlist.value == "3") {
        MainLabel.style.display = "none";
        AppLabel.style.display = "block";
        AppDDL.style.display = "block";
        PointCardDDL.style.display = "none";
    }
    else if (Qlist.value == "5" || Qlist.value == "6") {
        MainLabel.style.display = "block";             
        InvoiceAndDateLabel.style.display = "none";
        AppLabel.style.display = "none";
    }
    else {
        MainLabel.style.display = "none";
        AppLabel.style.display = "none";
    }
}

function SetContactLabel(checkValue,isNeed) {

    var ContactLabel = document.getElementById("ContactLabel");

    if (isNeed.value == "True" || isNeed) {
        ContactLabel.style.display = "block";
    }
    else {
        ContactLabel.style.display = "none";
    }
}

function CheckInput() {
    var subMit = true;

    var TermChecked = document.getElementById("TermChecked");
    var errormsg_TermsOfService = document.getElementById("errormsg_TermsOfService");
    if (TermChecked.checked == false) {
        subMit = false;
        errormsg_TermsOfService.style.display = "block";
    } else {
        errormsg_TermsOfService.style.display = "none";
    }

    var Name = document.getElementById("Name");
    var errormsg_Name = document.getElementById("errormsg_Name");
    if (Name.value.toString().trim().length <= 0) {
        subMit = false;
        errormsg_Name.style.display = "block";
    } else {
        errormsg_Name.style.display = "none";
    }

    if ($('input[name*=NeedContact]:checked').val() == "True") {
        var MobilePhone = document.getElementById("MobilePhone");
        var errormsg_MobilePhone = document.getElementById("errormsg_MobilePhone");
        var errormsg_MobilePhoneLength = document.getElementById("errormsg_MobilePhoneLength");
        if (MobilePhone.value.toString().trim().length <= 0) {
            subMit = false;
            errormsg_MobilePhone.style.display = "block";
        } else {
            errormsg_MobilePhone.style.display = "none";


            if (MobilePhone.value.toString().trim().length == 10) {
                errormsg_MobilePhoneLength.style.display = "none";
            } else {
                subMit = false;
                errormsg_MobilePhoneLength.style.display = "block";
            }
        }

        
        var ContactTimeName = document.getElementById("sContactTime");
        var errormsg_ContactTimeList = document.getElementById("errormsg_ContactTimeList");
        if (ContactTimeName.value == "") {
            subMit = false;
            errormsg_ContactTimeList.style.display = "block";
        } else {
            errormsg_ContactTimeList.style.display = "none";
        }
    }
    

    var QuestionName = document.getElementById("sQuestionName");
    var errormsg_QuestionList = document.getElementById("errormsg_QuestionList");
    if (QuestionName.value == "") {
        subMit = false;
        errormsg_QuestionList.style.display = "block";
    } else {
        errormsg_QuestionList.style.display = "none";
    }

    var AppQuestionName = document.getElementById("sAppQuestionName");
    var errormsg_AppQuestionList = document.getElementById("errormsg_AppQuestionList");
    if (AppQuestionName.value == "" && QuestionName.value == "3") {
        subMit = false;
        errormsg_AppQuestionList.style.display = "block";
    } else {
        errormsg_AppQuestionList.style.display = "none";
    }

    var PointCardQuestionName = document.getElementById("sPointCardQuestionName");
    var errormsg_PointCardQuestionList = document.getElementById("errormsg_PointCardQuestionList");
    if (PointCardQuestionName.value == "" && QuestionName.value == "2") {
        subMit = false;
        errormsg_PointCardQuestionList.style.display = "block";
    } else {
        errormsg_PointCardQuestionList.style.display = "none";
    }

    var StoreName = document.getElementById("Store");
    var errormsg_StoreName = document.getElementById("errormsg_StoreName");
    if (StoreName.value == "" && (QuestionName.value == "1" || QuestionName.value == "5" || QuestionName.value == "6")) {
        subMit = false;
        errormsg_StoreName.style.display = "block";
    } else {
        errormsg_StoreName.style.display = "none";
    }

    var errormsg_TradeInfo = document.getElementById("errormsg_TradeInfo");

    if (QuestionName.value == "1") {

        var InvoiceNo_Eng = document.getElementById("InvoiceNo_Eng");
        var InvoiceNo_Number = document.getElementById("InvoiceNo_Number");
        var InvoiceType = $('input[name="InvoiceType"]:checked').val();
        var HappenDate = document.getElementById("HappenDate");
        var HappenTime = document.getElementById("HappenTime");                

        if (InvoiceType == '1') {

            if ((InvoiceNo_Eng.value == '' && InvoiceNo_Number.value == '') && (HappenDate.value == '' && HappenTime.value == '')) {
                subMit = false;
                errormsg_TradeInfo.style.display = "block";
            }
            else {
                errormsg_TradeInfo.style.display = "none";
            }

        }

        if (InvoiceType == '2') {
            errormsg_TradeInfo.style.display = "none";
        }

    } else {
        errormsg_TradeInfo.style.display = "none";
    }

    var Email = document.getElementById("Email");
    var errormsg_Email = document.getElementById("errormsg_Email");
    var errormsg_WrongEmail = document.getElementById("errormsg_WrongEmail");
    if (Email.value.toString().trim().length <= 0 && (QuestionName.value == "2" || QuestionName.value == "3")) {
        subMit = false;
        errormsg_Email.style.display = "block";
    } else {
        errormsg_Email.style.display = "none";

        if (Email.value.toString().trim().length > 0 && (QuestionName.value == "2" || QuestionName.value == "3")) {
            if (Email.value.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) != -1) {
                errormsg_WrongEmail.style.display = "none";
            } else {
                subMit = false;
                errormsg_WrongEmail.style.display = "block";
            }

        }
    }

    var Suggestion = document.getElementById("Suggestion");
    var errormsg_Suggestion = document.getElementById("errormsg_Suggestion");
    if (Suggestion.value.toString().trim().length <= 0) {
        subMit = false;
        errormsg_Suggestion.style.display = "block";
    } else {
        errormsg_Suggestion.style.display = "none";
    }


    //驗證碼
    var txtValidCode = document.getElementById("txtValidCode");
    var errormsg_Codes = document.getElementById("errormsg_Codes");
    var errormsg_Valid = document.getElementById("errormsg_Valid");
    if (txtValidCode.value.toString().trim().length <= 0) {
        subMit = false;
        errormsg_Codes.style.display = "block";
        errormsg_Valid.style.display = "none";
    } else {
        errormsg_Codes.style.display = "none";
        errormsg_Valid.style.display = "none";
    }

    return subMit

}

function ChangeVal(DroId) {

    var sUrl = "";
    var data = {};


    switch (DroId) {
        case "County":

            sUrl = '/contact/Index/GetZoneList';
            data = { 'County': $('#County option:selected').val() };
            DorAjax("#Zone", sUrl, data);

            sUrl = '/contact/Index/GetStoreList';
            data = { 'Zone': '' };
            DorAjax("#Store", sUrl, data);

            break;
        case "Zone":

            sUrl = '/contact/Index/GetStoreList';
            data = {
                'County': $('#County option:selected').val(),
                'Zone': $('#Zone option:selected').val()
            };
            DorAjax("#Store", sUrl, data);


            break;

        case "Store":

            sUrl = '/contact/Index/GetStoreAddress';
            data = {
                'County': $('#County option:selected').val(),
                'Zone': $('#Zone option:selected').val(),
                'Store': $('#Store option:selected').val()
            };
            $.ajax({
                url: sUrl,
                type: 'get',
                cache: false,
                data: data,
                success: function (data) {
                    debugger;
                    $('#StoreAddress').empty();
                    $('#StoreAddress').val(data);
                }
            })


            break;
        default:
    }


}

function DorAjax(jDroId, sUrl, data) {
    if (jDroId != "") {
        $.ajax({
            url: sUrl,
            type: 'get',
            cache: false,
            data: data,
            success: function (data) {
                $(jDroId).empty();
                $.each(data, function (i, item) {
                    $(jDroId).append($('<option></option>').val(item.Value).text(item.Text));
                });
            }
        })
    }

}


function ValidateNumber(e, pnumber) {
    if (!/^\d+$/.test(pnumber)) {
        e.value = /^\d+/.exec(e.value);
    }
    return false;
}



function checkLength(which) {

    var maxChars = 500;

    if (which.value.length > maxChars)

        which.value = which.value.substring(0, maxChars);

    var curr = maxChars - which.value.length;

    document.getElementById("chLeft").innerHTML = curr.toString();

}
})
