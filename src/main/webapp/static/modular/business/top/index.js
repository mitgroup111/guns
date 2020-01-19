/**
 * 信用信息管理初始化
 */
var Creditinfo = {
    id: "CreditinfoTable",	//表格id
    layerIndex: -1
};

/**
 * 查询信用信息列表
 */
Creditinfo.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val().trim();
    window.location.href=Feng.ctxPath+"/top/list?condition="+ $("#condition").val().trim();
};



$(function(){
    var $div_li =$(".search-tab ul li");
    $div_li.click(function(){
        $(this).addClass("active") .siblings().removeClass("active");
        var index =  $div_li.index(this);
        $(".search-content > div").eq(index).show().siblings().hide();
    })

})
