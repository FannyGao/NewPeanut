/**
 * Created by Admin on 2018/3/9.
 */
window.onload=function () {


    let now = 0;
    let next = 1;
    let wid = $('.banner_img').width();
    console.log(wid)
    function banner() {
        $('.banner_img').eq(now).animate({left: -wid}, 500);
        $('.banner_img').eq(next).css({'left':'100%'});
        $('.banner_img').eq(next).animate({left: 0}, 500);
        $('.dian1').eq(now).removeClass('dian2');
        $('.dian1').eq(next).addClass('dian2');
        let tmp=now;
        now=next;
        next=tmp;
    }
    $('.jiantou_right').click(function () {
        $('.banner_img').eq(now).animate({left: -wid}, 500);
        $('.banner_img').eq(next).css({'left':'100%'});
        $('.banner_img').eq(next).animate({left: 0}, 500);
        $('.dian1').eq(now).removeClass('dian2');
        $('.dian1').eq(next).addClass('dian2');
        let tmp=now;
        now=next;
        next=tmp;
    })
    $('.jiantou_left').click(function () {
        $('.banner_img').eq(now).animate({left: wid}, 500);
        $('.banner_img').eq(next).css({'left':'-100%'});
        $('.banner_img').eq(next).animate({left: 0}, 500);
        $('.dian1').eq(now).removeClass('dian2');
        $('.dian1').eq(next).addClass('dian2');
        let tmp=now;
        now=next;
        next=tmp;
    })
    let time = setInterval(banner, 2000);
    $('.banner').mouseenter(function () {
        clearInterval(time);
    }).mouseleave(function () {
        time = setInterval(banner, 2000);
    })
        $('.backtop').click(function (e) {
            e.preventDefault();
            $('body,html').animate({scrollTop:0},1000);
        })
}