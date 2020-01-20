$(function () {
    $(".sub-tag dd a").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
});
