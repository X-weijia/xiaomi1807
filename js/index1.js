window.onload=function () {
    //购物车
    let car = document.getElementsByClassName("car");
    let shopCar = document.getElementsByClassName("shopCar");
    car[0].onmouseenter=function () {
        shopCar[0].style.height = "98px";
        shopCar[0].style.boxShadow = "0 4px 1px 1px rgba(0,0,0,0.4)";
    }
    car[0].onmouseleave=function () {
        shopCar[0].style.height = "0";
        shopCar[0].style.boxShadow = "none";
    }
    //侧导航
    let li = document.getElementsByClassName("LT");
    let sideCh = document.getElementsByClassName("sideCh");
    for (let i=0;i<li.length;i++){
        li[i].onmouseenter=function () {
            sideCh[i].style.display="block";
            sideCh[i].style.boxShadow = "0 1px 6px 1px rgba(0,0,0,0.4)";
        }
        li[i].onmouseleave=function () {
            sideCh[i].style.display="none";
        }
    }



    ///////////////////////////家电选项卡/////////////////////////////////////////////
    function house(name,hr,Box){                //选项卡封装
    let jiadian = document.getElementsByClassName(name)[0];
    let top_right = jiadian.getElementsByClassName(hr)[0];

    let r_list = top_right.getElementsByClassName("r_list");
    let sectionBox = document.getElementsByClassName(Box);
    for (let i = 0;i< r_list.length;i++) {
        r_list[i].onmouseenter=function () {
            for (let j = 0;j< r_list.length;j++){
                sectionBox[j].style.zIndex="5";
                r_list[j].classList.remove("ch");
            }
            sectionBox[i].style.zIndex="10";
            r_list[i].classList.add("ch");
        }
    }
    }
    house("jiadian","hr1","Box1");
    house("zhineng","hr2","Box2");
    house("dapei","hr3","Box3");
    house("peijian","hr4","Box4");
    house("zhoubian","hr5","Box5");

    ///////////////////////////////banner轮播图/////////////////////////////////////////////
    let banner = document.getElementsByClassName("banner")[0];
    let imgbox = document.getElementsByClassName("imgbox")[0];
    let img = imgbox.getElementsByTagName("img");

    // console.log(img, point);
    let t = setInterval(move,2000);
    let num = 0;
    function move() {
        num++;
        if (num==img.length) {
            num=0;
        }
        for (let i=0;i<img.length;i++){
            img[i].style.zIndex="5";
            point[i].style.background="";
            point[i].style.border="";
        }
        img[num].style.zIndex="10";
        point[num].style.background="#f8efe2";
        point[num].style.border="2px solid #958f88";
    }
    //鼠标移入移出
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    //点击左右切换图片
    let right = document.getElementsByClassName("pull_right")[0];
    let left = document.getElementsByClassName("pull_left")[0];
    // console.log(right, left);
    right.onclick= move;
    left.onclick=moveL;
    function moveL() {
        num--;
        if (num < 0) {
            num=img.length-1;
        }
        for (let i=0;i<img.length;i++){
            img[i].style.zIndex="5";
            point[i].style.background="";
            point[i].style.border="";
        }
        img[num].style.zIndex="10";
        point[num].style.background="#f8efe2";
        point[num].style.border="2px solid #958f88";
    }
    //点击小点切换图片
    let point = document.getElementsByClassName("point");
    for (let i=0;i<point.length;i++){
        point[i].onclick=function () {
            for (let j=0;j<point.length;j++) {
                point[j].style.background="";
                point[j].style.border="";
                img[j].style.zIndex="5";
            }
            point[i].style.background="#f8efe2";
            point[i].style.border="2px solid #958f88";
            img[i].style.zIndex="10";
            num=i;
        }
    }

    //////////////////////内容部分轮播   获取元素///////////////////////////////////////
    function wheel(screen_w,imgs,points,left,right) {      //封装轮播函数
        let bigBox = document.querySelector(screen_w);
        let width = parseInt(getComputedStyle(bigBox, null).width);

        let books = document.querySelectorAll(imgs);
        let Left = document.querySelector(left);
        let Right = document.querySelector(right);
        // console.log(bigBox,width,books,Left,Right);
        //点击左右切换
        let now = next = 0;
        let flag;

        Right.onclick = function () {
            if (next == books.length - 1) {
                return;
            }
            N_move();
        }
        function N_move() {
            if (flag == false) {
                return;
            }
            next++;
            if (next == books.length) {
                next = 0;
            }
            books[next].style.left = width + "px";
            animate(books[now], {left: -width}, function () {flag = true});
            animate(books[next], {left: 0}, function () {flag = true});
            s_point[now].classList.remove("hot");
            s_point[next].classList.add("hot");
            now = next;
            flag = false;
        }
        Left.onclick = function () {
            if (now == 0) {
                return;
            }
            N_moveL();
        }
        function N_moveL() {
            if (!flag) {
                return;
            }
            next--;
            if (next < 0) {
                next = books.length - 1;
            }
            books[next].style.left = -width + "px";
            animate(books[now], {left: width}, function () {flag = true});
            animate(books[next], {left: 0}, function () {flag = true});
            s_point[now].classList.remove("hot");
            s_point[next].classList.add("hot");
            now = next;
            flag = false;
        }
        //小点 点击
        let s_point = document.querySelectorAll(points);
        // console.log(s_point);
        s_point.forEach(function (v, i) {
            v.onclick = function () {
                if (i == now) {
                    return;
                } else if (i > now) {
                    books[i].style.left = width + "px";
                    animate(books[now], {left: -width});
                    animate(books[i], {left: 0});
                    s_point[now].classList.remove("hot");
                    s_point[i].classList.add("hot");
                } else {
                    books[i].style.left = -width + "px";
                    animate(books[now], {left: width});
                    animate(books[i], {left: 0});
                    s_point[now].classList.remove("hot");
                    s_point[i].classList.add("hot");
                }
                now = next = i;
            }
        })
    }
    wheel(".one",".one li",".s_point1 span",".conL1",".conR1");
    wheel(".two",".two li",".s_point2 span",".conL2",".conR2");
    wheel(".three",".three li",".s_point3 span",".conL3",".conR3");
    wheel(".four",".four li",".s_point4 span",".conL4",".conR4");

}