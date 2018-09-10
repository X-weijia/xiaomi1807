$(function(){
    //////////////////////////    购物车    //////////////////////////////////
    $(".car").mouseenter(function () {
        $(".shopCar").css({"height":"98px","boxShadow":"0 4px 1px 1px rgba(0,0,0,0.4)"});
    })
    $(".car").mouseleave(function () {
        $(".shopCar").css({"height":"0","boxShadow":"none"});
    })
    //////////////////////////     导航栏    ////////////////////////////////////
    let n_list = $(".nav_list .n_b");
    let n_box = $(".nav_b");
    n_list.hover(function (){
        let index1 = $(this).index();
        n_box.css({"height":"235px","z-index":"50"}).eq(index1).css({"height":"235px","z-index":"100"});
    },function (){  
        n_box.css("height","0");    
    })
    ///////////////////////       侧导航       /////////////////////////////////////
    let li = $(".LT");
    let sideCh = $(".sideCh");
    li.hover(function () {
        let index = $(this).index();
        sideCh.eq(index).css({"display":"block","boxShadow":"0 1px 6px 1px rgba(0,0,0,0.4)"});
    },function () {
        let index = $(this).index();
        sideCh.eq(index).css("display","none");
    })
    /////////////////////////     banner轮播图     /////////////////////////////////////
    let banner = $(".banner");
    let img = $(".img");
    let right = $(".pull_right");
    let left = $(".pull_left");
    let point = $(".point");
    // console.log(banner,imgbox,img,right,left,point)
    let t = setInterval(move,1000);
    let index = 0;
    function move(type = "next"){
        if(type == "next"){
            index++;
            if(index >= img.length){
                index = 0;
            }
        }else if(type = "prev"){
            index--;
            if(index < 0){
                index = img.length-1;
            }
        }
        img.css("z-index",5).eq(index).css("z-index",10);
        point.removeClass("p_t").eq(index).addClass("p_t");
    }
    banner.hover(function(){clearInterval(t);},function(){t=setInterval(move,1000)});
    right.click(function(){
        move("next");
    })
    left.click(function(){
        move("prev");
    })
    point.click(function(){
        let index = $(this).index();
        point.removeClass("p_t").eq(index).addClass("p_t");
        img.css("z-index",5).eq(index).css("z-index",10);
    })
    



















})