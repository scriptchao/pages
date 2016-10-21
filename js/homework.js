$.fn.extend({
    createBox : function(num){
        for(var i = 1;i < num+1;i++){
            $('<a>'+ i +'</a>').appendTo('.boxMain')
        }
        $('<a>上一页</a>').prependTo('.boxAll');
        $('<a>下一页</a>').appendTo('.boxAll');
        $('.boxAll').children('a').eq(0).addClass('none');
        this.children('a').eq(0).addClass('border color');
        return this;
    },
    _show : function(index,len){
        console.log(index,len);
        var box = this.children('a');
        if(index == 0)$('.boxAll').children('a').eq(0).addClass('none');
        if(index == len - 1)$('.boxAll').children('a').eq(1).addClass('none');
        if(index !== 0)$('.boxAll').children('a').eq(0).removeClass('none');
        if(index !== len - 1)$('.boxAll').children('a').eq(1).removeClass('none');
        if( index >= 5 && index <= len - 6)this.animate({
            left : -40*(index-5) + 'px'
        });
        if(index < 5)this.animate({
            left : 0 + 'px'
        });
        if(index > len - 6)this.animate({
            left : -40*(len - 5 - 5) + 'px'
        });
        console.log(this[0].style.left);
        box.eq(index).addClass('border color').siblings('.border.color').removeClass('border color');
    },
    boxClick : function(){
        var _this = this,
            box = this.children('a');
            lenBox = box.length;
        box.click(function(){
           _this._show($(this).index(),lenBox)
        })
    },
    left : function(){
        var indexLeft = ($('.boxMain').children('a.border.color').index() - 1 < 0 ? 0 : $('.boxMain').children('a.border.color').index() - 1);
            lenLeft = $('.boxMain').children('a').length;
        console.log(indexLeft,lenLeft);
        /*console.log(this);*/
        $('.boxMain')._show(indexLeft,lenLeft);

    },
    right : function(){
        var lenRight = $('.boxMain').children('a').length,
            indexRight = ($('.boxMain').children('a.border.color').index() + 1 >= lenRight ? lenRight - 1 : $('.boxMain').children('a.border.color').index() + 1);

        /*console.log(indexLeft,lenLeft);*/
        /*console.log(this);*/
        $('.boxMain')._show(indexRight,lenRight);

    }
});
$('.boxMain').createBox(50).boxClick();
$('.boxAll').children('a').eq(0).click(function(){
    $(this).left()
});
$('.boxAll').children('a').eq(1).click(function(){
    $(this).right()
});

/*
function a(){
    console.log(this);
}
a();

(function (){
    console.log(this)
})();
b = function(){
    console.log(this)
};
b();
c = function r(){
    console.log(this)
};
c();
*/
