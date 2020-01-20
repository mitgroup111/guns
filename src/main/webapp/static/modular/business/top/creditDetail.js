/**
 * 信用信息管理初始化
 */
var CreditinfoList = {
    id: "CreditinfoTable",	//表格id
    layerIndex: -1
};

/**
 * 查询信用信息列表
 */
CreditinfoList.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val().trim();
    window.location.href=Feng.ctxPath+"/top/list?condition="+ $("#condition").val().trim();
};

$(function () {
    var $div_li =$(".company-showmessage-box .tab-title li");
    $div_li.click(function(){
        $(this).addClass("active") .siblings().removeClass("active");
        var index =  $div_li.index(this);
        $(".result-tabs > div").eq(index).show().siblings().hide();
    })
});
