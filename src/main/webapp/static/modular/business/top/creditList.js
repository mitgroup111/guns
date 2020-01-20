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

/**
 * 查询信用信息列表
 */
CreditinfoList.detail = function (id) {
    var queryData = {};
    queryData['condition'] = $("#condition").val().trim();
    queryData['id'] = id;
    window.location.href=Feng.ctxPath+"/top/detail?condition="+ $("#condition").val().trim()+"&id="+id;
};

$(function () {
    $(".sub-tag dd a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
});
