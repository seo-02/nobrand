$(function(){

    //모든 a태그 이벤트 초기화
    $('a').on('click',function(evt){
        evt.preventDefault();
    });

    let nowidx = null;

    //스크롤이벤트(메뉴)
    $(window).on('scroll',function(){
        const scroll = $(this).scrollTop();
        if(scroll>1){
            $('header').css({
                position:'fixed',
                zIndex:1000
            });
            $('header > .header-con > .logo').css({
                height:0,
                backgroundImage:'none'
            });
            $('header > .gnb-bg').css({top:30});
            $(' header > .header-con > nav ').css({
                top : 30
            })
            $('section.visual').css({
                // marginTop:145
            });
        }else{
            $('header').css({
                position:'relative'
            });
            $('header > .header-con > .logo').css({
                height:110,
                backgroundImage:'url(./image/brand_logo_.png)'
            });
            $('header > .gnb-bg').css({top:145});
            $(' header > .header-con > nav ').css({
                top : 145
            })
            $('section.visual').css({
                // marginTop:0
            });
        }
    });

    const $Nextbtn = $('section.visual > p.next');
    const $Prevbtn = $('section.visual > p.prev');
    const $VSslide = $('section.visual > .slide-con > .visual_slide');
    
    //비주얼슬라이드 버튼
    $Nextbtn.on('click',function(){
        if(nowidx<3){
            nowidx++;
        }else{
            nowidx=0;
        }
        $VSslide.stop().animate({
            left : '-400%'
        },400,function(){
            $('section.visual > .slide-con > .visual_slide').children().first().appendTo($VSslide);
            $VSslide.css({left:'-300%'})
        });
    });
    $Prevbtn.on('click',function(){
        if(nowidx>0){
            nowidx--;
        }else{
            nowidx=0
        }
        $VSslide.stop().animate({
            left:'-200%'
        },400,function(){
            $('section.visual > .slide-con > .visual_slide').children().last().prependTo($VSslide);
            $VSslide.css({left:'-300%'})
        })
    });

    //뉴스 자동재생
    const $newS = $('.visual > .visual-sub > .news-con > .news > .news-slide');
    $(window).on('load',function(){
        play = setInterval(()=>{
            $newS.stop().animate({
                top:-35
            },400,function(){
                $newS.children('li').first().appendTo($newS);
                $newS.css({top:0})
            });
        },2500);
    });

    //브랜드소개 애니메이션
    const $brand = $('.brand');
    const $brandText = $('section.brand > .brand-con > .B-left > p');
    const $brandImg= $('section.brand > .brand-con > .B-right > img');
    
    $(window).on('scroll',function(){
        const scroll = $(this).scrollTop();
        
        if(scroll>=$brand.offset().top){
            $brandText.fadeIn(400);
            $brandImg.fadeIn(400);
        }else{
            $brandText.fadeOut(400);
            $brandImg.fadeOut(400);
        }

        //aside 위치
        const view = (scroll + $(this).height()) -$('footer').offset().top;
        if (view>0) {
            $('aside>p').css({
                marginBottom : view
            });
        }else{
            $('aside>p').css({
                marginBottom: 0
            });
        }
    });
    
    const $menu = $('.menu');
    const $menucon = $('.menu > .menu-con > .menu-con-flex >div');
    const $indicator = $('.menu > div > .menu-tab >li');

    $menucon.eq(0).show().siblings().hide();
    $indicator.eq(0).addClass('on');

    $indicator.on('click',function(){
        let nowIdx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $menucon.eq(nowIdx).fadeIn(400).siblings().fadeOut(400);
    });

    //스크롤 맨위로
    $('aside>p').on('click',function(){
        $('html,body').stop().animate({
            scrollTop:0
        },400);
    })

   
});