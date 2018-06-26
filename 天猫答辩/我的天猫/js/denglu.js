//nav 点击
var nav_li=document.querySelectorAll(".nav-bottom li");
nav_li[4].style.color="#cbbe76";
for(let n=0;n<nav_li.length;n++){
    nav_li[n].bb=n;
    nav_li[n].onclick=function(){
        for(let n=0;n<nav_li.length;n++){
            nav_li[n].style.color="#000";
        }
        nav_li[this.bb].style.color="#cbbe76";
    }
}
//正则表达式
var zhanghu=document.querySelector(".zhanghu");
var mima=document.querySelector(".mima");
var main_btn=document.querySelector(".inner-main button");
var reg1 = /^123456$/;
var reg2 = /^123456$/;
var reg3 = /^123456789$/;
var reg4 = /^123456789$/;
var str1;
var str2;
main_btn.onclick=function(){
    zhanghu=document.querySelector(".zhanghu");
    mima=document.querySelector(".mima");
    str1=zhanghu.value;
    str2=mima.value;
    if(reg1.test(str1)&&reg2.test(str2)){
        window.location.href="guwuche.html";
    }else if(reg3.test(str1)&&reg4.test(str2)){
        window.location.href="wode.html";
    }
}
