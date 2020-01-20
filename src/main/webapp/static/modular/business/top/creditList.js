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
    $(".sub-tag dd a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
});
