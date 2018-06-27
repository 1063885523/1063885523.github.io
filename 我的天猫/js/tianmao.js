//关闭广告
var guanbi=document.querySelector(".guanbi");
var fa_remove=document.querySelector(".fa-remove");
fa_remove.onclick=function(){
    guanbi.style.display="none";
}
//忽大忽小的一元起
var yiyuan=document.querySelector(".yiyuan");
setInterval(function(){
    yiyuan.style.transform="scale(1.1)";
    setTimeout(function(){
        yiyuan.style.transform="scale(1)";
    },300)
},3000)
//滑轮滚动事件
var sou=document.querySelector(".sou");
var sou_container=document.querySelector(".sou .container");
var inpt=document.querySelector(".input");
var fangdajing=document.querySelector(".input i");
var input=document.querySelector(".sou input");
var xiao_nav=document.querySelector(".xiao-nav");
var sou_i=document.querySelectorAll(".sou .col-xs-2 i");
var tianmao=document.querySelectorAll(".sou .col-xs-8");
window.addEventListener("scroll",function(){
    if(document.body.scrollTop>50){
        sou.style.background = "#fff";
        sou_i[0].style.color = "#5f646e";
        sou_i[1].style.color = "#5f646e";
        input.style.width="60%";
        input.style.paddingLeft="8%";
        input.style.backgroundColor="#f7f7f7";
        fangdajing.style.left="23%";
        inpt.style.marginTop="14px";
        sou_container.style.marginTop="-42px";
    }else{
        sou.style.background = "none";
        sou_i[0].style.color = "#fff";
        sou_i[1].style.color = "#fff";
        fangdajing.style.left="13%";
        input.style.width="80%";
        input.style.paddingLeft="8%";
        inpt.style.marginTop="43px";
        sou_container.style.marginTop="-71px";
        input.style.backgroundColor="rgba(255, 255, 255, 0.74)";
    }
    if(document.body.scrollTop>510){
        xiao_nav.style.opacity="1";
        xiao_nav.style.display="block";
    }else{
        xiao_nav.style.opacity="0";
        setTimeout(function(){
            xiao_nav.style.display="none";
        },300)
    }
})
//轮播
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
})
var lunbo=document.querySelector(".lunbo");
var lunbo_li=document.querySelectorAll(".lunbo li");
var a=0;
function run(){
    a++;
    if(a==6){
        a=0
    }
    for(let n=0;n<lunbo_li.length;n++){
        lunbo_li[n].style.transform="scale(.3)";
        lunbo_li[n].style.opacity="0";
    }
    lunbo_li[a].style.opacity="1";
    lunbo_li[a].style.transform="scale(1)";
}
setInterval(run,2000);
//按钮切屏
var sou_bars=document.querySelector(".sou .fa-bars");
var inner_black=document.querySelector(".inner-black");
var right_black=document.querySelector(".right-black");
var inner_left=document.querySelector(".inner-left");
var inner_right=document.querySelector(".inner-right");
var inner_top=document.querySelector(".inner-top");
var inner_bottom=document.querySelector(".inner-bottom");
var title=document.querySelector(".title");
var diqu=document.querySelector(".diqu");
var Aab=document.querySelectorAll(".chengshi li");
var title_i=document.querySelector(".title i");
var chengshi_i=document.querySelector(".inner-right .top i");
var Aba_i=document.querySelector(".aba i");
var h4_h4=document.querySelectorAll(".h4 h4");
var b=0;
sou_bars.onclick=function(){
    inner_black.style.display="block";
    setTimeout(function(){
        inner_black.style.opacity="1";
    },10);
    inner_left.style.left="0px";
    inner_black.style.zIndex="6";
}
title.onclick=function(){
    inner_black.style.zIndex="2";
    b++;
    if(b==2){
        b=0
    }
    if(b==1){
        inner_black.style.display="block";
        setTimeout(function(){
            inner_black.style.opacity="1";
        },10);
        inner_top.style.top="0px";
        inner_top.style.opacity="1";
        inpt.style.opacity="0";
        title_i.style.transform="rotateZ(-180deg)";
    }else{
        inner_black.style.opacity="0";
        setTimeout(function(){
            inner_black.style.display="none";
        },300);
        inner_top.style.top="-140px";
        inner_top.style.opacity="0";
        inpt.style.opacity="1";
        title_i.style.transform="rotateZ(0deg)";    
    }
}
diqu.onclick=function(){
    inner_right.style.right="0";
}
Aab[0].onclick=function(){
    right_black.style.display="block";
    setTimeout(function(){
        right_black.style.opacity="1";
    })
    inner_bottom.style.bottom="0";
}
Aba_i.onclick=function(){
    right_black.style.opacity="0";
    setTimeout(function(){
        right_black.style.display="none";
    },300)
    inner_bottom.style.bottom="-60%";
}
right_black.onclick=function(){
    right_black.style.opacity="0";
    setTimeout(function(){
        right_black.style.display="none";
    },300)
    inner_bottom.style.bottom="-60%";
}
chengshi_i.onclick=function(){
    inner_right.style.right="-100%";
}
inner_black.onclick=function(){
    b=0;
    inner_black.style.opacity="0";
    setTimeout(function(){
        inner_black.style.display="none";
    },300);
    inner_left.style.left="-75%";
    inner_top.style.top="-140px";
    inner_top.style.opacity="0";
    inpt.style.opacity="1";
    title_i.style.transform="rotateZ(0deg)";
}
for(let n=0;n<h4_h4.length;n++){
    h4_h4[n].aa=n;
    h4_h4[n].onclick=function(){
        for(let n=0;n<h4_h4.length;n++){
            h4_h4[n].style.backgroundColor="rgba(100, 191, 67, 0)";
            h4_h4[n].style.boxShadow="0px 0px 0px 0px #64bf43";
        }
        h4_h4[this.aa].style.backgroundColor="#64bf43";
        h4_h4[this.aa].style.boxShadow="1px 3px 18px -5px #4c4c4c";
    }
}
//地区选取
var xianchengs=document.querySelectorAll(".xiancheng li");
var shiying=document.querySelector(".big-title");
for(let n=0;n<xianchengs.length;n++){
    xianchengs[n].cc=n;
    xianchengs[n].onclick=function(){
        var diyu=xianchengs[this.cc].innerHTML;
        diqu.innerHTML=diyu+"<i class='fa fa-caret-down'></i>";
        if(diyu.length==2){
            shiying.style.width="140px";
        }else if(diyu.length==3){
            shiying.style.width="155px";
        }else if(diyu.length==4){
            shiying.style.width="170px";
        }
        right_black.style.opacity="0";
        setTimeout(function(){
            right_black.style.display="none";
            inner_right.style.right="-100%";
        },300)
        inner_bottom.style.bottom="-60%";
    }
}
//nav 点击
var nav_li=document.querySelectorAll(".nav-bottom li");
nav_li[0].style.color="#cbbe76";
for(let n=0;n<nav_li.length;n++){
    nav_li[n].bb=n;
    nav_li[n].onclick=function(){
        for(let n=0;n<nav_li.length;n++){
            nav_li[n].style.color="#000";
        }
        nav_li[this.bb].style.color="#cbbe76";
    }
}
//倒计时
var jishis=document.querySelectorAll(".jishi span");
function countTime() {
    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var str = "2018/7/31 18:00:00";
    var endDate = new Date(str);
    var end = endDate.getTime();

    //时间差
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    //将倒计时赋值到div中
    //document.getElementById("_d").innerHTML = d + "天";
    if(h!==undefined){
        if(h<10){
            jishis[0].innerHTML = "0"+h;
        }else{
            jishis[0].innerHTML = h;
        }
        if(m<10){
            jishis[1].innerHTML = "0"+m;
        }else{
            jishis[1].innerHTML = m;
        }
        if(s<10){
            jishis[2].innerHTML = "0"+s;
        }else{
            jishis[2].innerHTML = s;
        }
    }else{
        jishis[0].innerHTML = "00";
        jishis[1].innerHTML = "00";
        jishis[2].innerHTML = "00";
    }
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 1000);
}
countTime();
//弹窗广告
var tanchu=document.querySelector(".tanchu");
var miao=document.querySelector(".tanchu p span");
var miaoshu=5;
setInterval(function(){
    miaoshu--;
    miao.innerHTML=miaoshu;
    if(miaoshu==-1){
        tanchu.style.display="none";
    }
},1000);
var p=document.querySelector(".tanchu p");
p.onclick=function(){
    tanchu.style.display="none";
}