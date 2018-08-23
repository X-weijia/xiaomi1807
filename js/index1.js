window.onload=function () {
    //购物车
    let car = document.getElementsByClassName("car");
    let shopCar = document.getElementsByClassName("shopCar");
    car[0].onmouseenter=function () {
        shopCar[0].style.height = "98px";
        shopCar[0].style.boxShadow = "0 8px 10px 1px rgba(0,0,0,0.6)";
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
        }
        li[i].onmouseleave=function () {
            sideCh[i].style.display="none";
        }
    }
    //家电选项卡

    let jiadian = document.getElementsByClassName("jiadian")[0];
    let top_right = jiadian.getElementsByClassName("house_top_right")[0];
    let r_list = top_right.getElementsByClassName("r_list");

    let sectionBox = document.getElementsByClassName("sectionBox");
    for (let i = 0;i< r_list.length;i++) {
        r_list[i].onmouseenter=function () {
            for (let j = 0;j< r_list.length;j++){
                sectionBox[j].style.zIndex="5";
            }
            sectionBox[i].style.zIndex="10";
        }
    }

    //banner轮播图
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
        }
        img[num].style.zIndex="10";
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
}