"use strict";
//调用全屏的函数
$(function(){
    //传入一个对象
    $('#dowebok').fullpage({
    //    设置每一个屏幕的背景颜色
        sectionsColor:['#0da5d6','#2AB561','#DE8910','#16BA9D','#0DA5D6'],
        loopTop:true,
    //    提供的滚到某一屏后调用的函数
        afterLoad:function(link,index){
        //    设置一个current类名 加给谁就表示滚到了哪一屏 然后做动画
            $('.section').removeClass('current');
        //    让动画延迟100ms执行 等待加载完成后执行
            setTimeout(function () {
                $('.section').eq(index-1).addClass('current');
            },100);
        }

    });
});