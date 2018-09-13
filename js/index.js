$(function () {
    //////////////////////////    购物车    //////////////////////////////////
    $(".car").mouseenter(function () {
        $(".shopCar").css({ "height": "98px", "boxShadow": "0 4px 1px 1px rgba(0,0,0,0.4)" });
    })
    $(".car").mouseleave(function () {
        $(".shopCar").css({ "height": "0", "boxShadow": "none" });
    })
    //////////////////////////     导航栏    ////////////////////////////////////
    let n_list = $(".nav_list .n_b");
    let n_box = $(".nav_b");
    n_list.hover(function () {
        let index1 = $(this).index();
        n_box.css({ "height": "235px", "z-index": "50" }).eq(index1).css({ "height": "235px", "z-index": "100" });
    }, function () {
        n_box.css("height", "0");
    })
    ///////////////////////       侧导航       /////////////////////////////////////
    let li = $(".LT");
    let sideCh = $(".sideCh");
    li.hover(function () {
        let index = $(this).index();
        sideCh.eq(index).css({ "display": "block", "boxShadow": "0 1px 6px 1px rgba(0,0,0,0.4)" });
    }, function () {
        let index = $(this).index();
        sideCh.eq(index).css("display", "none");
    })
    /////////////////////////     banner轮播图     /////////////////////////////////////
    let banner = $(".banner");
    let img = $(".img");
    let right = $(".pull_right");
    let left = $(".pull_left");
    let point = $(".point");
    // console.log(banner,img,right,left,point)
    let t = setInterval(move, 1000);
    let index = 0;
    function move(type = "next") {
        if (type == "next") {
            index++;
            if (index >= img.length) {
                index = 0;
            }
        } else if (type = "prev") {
            index--;
            if (index < 0) {
                index = img.length - 1;
            }
        }
        img.css("zIndex", 5).eq(index).css("zIndex", 10);
        point.removeClass("p_t").eq(index).addClass("p_t");
    }
    banner.hover(function () { clearInterval(t); }, function () { t = setInterval(move, 1000) });
    right.click(function () {
        move("next");
    })
    left.click(function () {
        move("prev");
    })
    point.click(function () {
        let index = $(this).index();
        point.removeClass("p_t").eq(index).addClass("p_t");
        img.css("zIndex", 5).eq(index).css("zIndex", 10);
    })
    ////////////////////////////////   小米闪购    ///////////////////////////////////////
    let s_right = $(".sr_choice");
    let s_left = $(".sl_choice");
    let s_Box = $(".l_buy ul");
    let s_width = s_Box.outerWidth() / 9;
    // console.log(s_right,s_left,s_Box,s_width);
    let s_times = 0;
    let x = 4;
    s_right.hover(function () { s_right.addClass("choice1"); }, function () { s_right.removeClass("choice1"); })
    s_right.click(function () {
        s_times++;
        if (s_times >= 2) {
            s_times = 2;
        }
        if (s_times == 2) {
            s_times = 2;
            x = 5;
        } else if (s_times == 1) {
            x = 4;
        }
        s_Box.css("transform", "translateX(" + (-s_width * x) + "px)");
    })
    s_left.hover(function () { s_left.addClass("choice1"); }, function () { s_left.removeClass("choice1"); })
    s_left.click(function () {
        s_times--;
        if (s_times < 0) {
            s_times = 0;
        }
        if (s_times == 0) {
            s_times = 0;
            x = 0;
        } else if (s_times == 1) {
            x = 4;
        }
        s_Box.css("transform", "translateX(" + (-s_width * x) + "px)");
    })
    /////////////////////////     家电选项卡     /////////////////////////////////////
    function house(name, Box) {
        let r_list = $(name);
        let sectionBox = $(Box);
        // console.log(r_list,sectionBox)
        r_list.mouseenter(function () {
            let index = $(this).index();
            sectionBox.css("zIndex", "5").eq(index).css("zIndex", "10");
            r_list.removeClass("ch").eq(index).addClass("ch");
        })
    }
    house(".jiadian .r_list", ".Box1");
    house(".zhineng .r_list", ".Box2");
    house(".dapei .r_list", ".Box3");
    house(".peijian .r_list", ".Box4");
    house(".zhgoubao .r_list", ".Box5");
    //////////////////////////////   为您推荐   ///////////////////////////////////////////
    function choice_t(rc, lc, ul) {
        let t_right = $(rc);
        let t_left = $(lc);
        let t_Box = $(ul);
        let t_width = t_Box.outerWidth() / 3;
        t_right.hover(function () { t_right.addClass("choice1"); }, function () { t_right.removeClass("choice1"); })
        t_left.hover(function () { t_left.addClass("choice1"); }, function () { t_left.removeClass("choice1"); })
        let t_times = 0;
        t_right.click(function () {
            t_times++;
            if (t_times == 3) {
                t_times = 2;
            }
            t_Box.css("transform", "translateX(" + (-t_width * t_times) + "px)");
        })
        t_left.click(function () {
            t_times--;
            if (t_times == -1) {
                t_times = 0;
            }
            t_Box.css("transform", "translateX(" + (-t_width * t_times) + "px)");
        })
    }
    choice_t(".tr_choice", ".tl_choice", ".fy_push");
    choice_t(".rr_choice", ".rl_choice", ".hot_list");

    /////////////////////////////   内容部分轮播   获取元素   ///////////////////////////////
    function wheel(screen_w, imgs, points, left, right, Now, Next) {      //封装轮播函数 
        let bigBox = $(screen_w);
        let width = bigBox.width();
        let books = $(imgs);
        let Left = $(left);
        let Right = $(right);
        let s_point = $(points);
        // console.log(bigBox,width,books,Left,Right);
        //点击左右切换
        let now = Now;
        let next = Next;
        let flag;
        Right.click(function () {
            if (next == books.length - 1) {
                return;
            }
            N_move();
        })
        function N_move() {
            if (flag == false) {
                return;
            }
            next++;
            if (next == books.length) {
                next = 0;
            }
            books.eq(next).css("left", width + "px");
            books.eq(now).animate({ left: -width }, function () { flag = true });
            books.eq(next).animate({ left: 0 }, function () { flag = true });
            s_point.eq(now).removeClass("hot");
            s_point.eq(next).addClass("hot");
            now = next;
            flag = false;
        }
        Left.click(function () {
            if (now == 0) {
                return;
            }
            N_moveL();
        })
        function N_moveL() {
            if (!flag) {
                return;
            }
            next--;
            if (next < 0) {
                next = books.length - 1;
            }
            books.eq(next).css("left", -width + "px");
            books.eq(now).animate({ left: width }, function () { flag = true });
            books.eq(next).animate({ left: 0 }, function () { flag = true });
            s_point.eq(now).removeClass("hot");
            s_point.eq(next).addClass("hot");
            now = next;
            flag = false;
        }
        // 小点 点击
        // console.log(s_point);
        s_point.each(function (i, v) {
            $(v).click(function () {
                if (i == now) {
                    return;
                } else if (i > now) {
                    books.eq(i).css("left", width + "px");
                    books.eq(now).animate({ left: -width }, function () { flag = true });
                    books.eq(i).animate({ left: 0 }, function () { flag = true });
                    s_point.eq(now).removeClass("hot");
                    s_point.eq(i).addClass("hot");
                } else {
                    books.eq(i).css("left", -width + "px");
                    books.eq(now).animate({ left: width }, function () { flag = true });
                    books.eq(i).animate({ left: 0 }, function () { flag = true });
                    s_point.eq(now).removeClass("hot");
                    s_point.eq(i).addClass("hot");
                }
                now = next = i;
            })
        })
    }
    wheel(".one", ".one li", ".s_point1 span", ".conL1", ".conR1", 0, 0);
    wheel(".two", ".two li", ".s_point2 span", ".conL2", ".conR2", 0, 0);
    wheel(".three", ".three li", ".s_point3 span", ".conL3", ".conR3", 0, 0);
    wheel(".four", ".four li", ".s_point4 span", ".conL4", ".conR4", 0, 0);
    ///////////////////////////////////   返回顶部    /////////////////////////////////////////////

    let t_top = $(".fixed_bottom");
    let t_wh = window.innerHeight;
    window.onscroll = function () {
        let t_sh = document.body.scrollTop || document.documentElement.scrollTop;
        if (t_sh >= t_wh + 300) {
            t_top.css("display","block");
        }
        if (t_sh <= t_wh + 300) {
            t_top.css("display","none");
        }
    }
    t_top.click(function(){
        animate(document.body,{scrollTop:0});   
        animate(document.documentElement,{scrollTop:0});
    })











})