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
        title_i.style.transform="rotateZ(-180deg)";
    }else{
        inner_black.style.opacity="0";
        setTimeout(function(){
            inner_black.style.display="none";
        },300);
        inner_top.style.top="-140px";
        inner_top.style.opacity="0";
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
nav_li[4].childNodes[1].style.color="#cbbe76";
for(let n=0;n<nav_li.length;n++){
    nav_li[n].bb=n;
    nav_li[n].onclick=function(){
        for(let n=0;n<nav_li.length;n++){
            nav_li[n].style.color="#000";
        }
        nav_li[this.bb].style.color="#cbbe76";
    }
}