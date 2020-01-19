$(function(){
    var $div_li =$(".search-tab ul li");
    $div_li.click(function(){
        $(this).addClass("active") .siblings().removeClass("active");
        var index =  $div_li.index(this);
        $(".search-content > div").eq(index).show().siblings().hide();
    })
})
