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
//复选框全选
var inp=document.querySelectorAll("input.zi");
var array=[];
var fu=document.querySelector("input.inp1");
var jiesuan=document.querySelector(".inner-bottom .right button span");
var fu_jiage=document.querySelector(".inner-top .bottom .txt p span");
var diyu=document.querySelector(".inner-top .main span");
var main=document.querySelector(".inner-main .main");
var arr=[];
function fun(){
    inp=document.querySelectorAll("input.zi");
    if(fu.checked==false){
        for(var i = 0;i<array.length;i++){
            if(inp[i].type == "checkbox") inp[i].checked = false;
            arr=[];
        }
    }else{
        for(var i = 0;i<inp.length;i++){
            if(inp[i].type == "checkbox") inp[i].checked = true;
            arr.push(1);
        }
    }
    if(fu.checked==true){
        fu.style.border="none";
        for(let n=0;n<inp.length;n++){
            inp[n].style.border="none";
        }
    }else{
        fu.style.border="1px #c6c6c6 solid";
        for(let n=0;n<inp.length;n++){
            inp[n].style.border="1px #c6c6c6 solid";
        }
    }
    if(array.length==0){
        main.style.height="300px";
        main.style.backgroundImage="url(img/timg.jpg)";
        main.style.backgroundPosition="center";
        main.style.backgroundRepeat="no-repeat";
    }else{
        main.style.height="";
        main.style.backgroundImage="";
        main.style.backgroundPosition="";
        main.style.backgroundRepeat="";
    }
    jiesuan.innerHTML=Number(array.length);
}
fun();

//购物车的添加and删除
var shangpin=document.querySelectorAll(".cainixihuan i");
var biaoti=document.querySelectorAll(".cainixihuan li h5");
var imgs=document.querySelectorAll(".cainixihuan li img.m1");
var jiage=document.querySelectorAll(".cainixihuan li .jiage");
var jiage2,jiage1,name1,img1;
var shan=document.querySelectorAll(".inner-main .main i.fa-trash-o");
var main_li=document.querySelector(".inner-main .main");
var main_lis=document.querySelectorAll(".inner-main .main>li");
for(let n=0;n<shangpin.length;n++){
    shangpin[n].ff=n;
    shangpin[n].onclick=function(){
        arr.push(1);
        name1=biaoti[this.ff].innerHTML;
        jiage1=Number(jiage[this.ff].innerHTML);
        img1=imgs[this.ff].src;
        if(jiage2==null){
            jiage2=88-jiage1;
            fu_jiage.innerHTML=jiage2;
        }else if(jiage2>0){
            jiage2=Math.round((Number(jiage2)-Number(jiage1))*10)/10;
            if(jiage2<=0){
                fu_jiage.innerHTML=0;
            }else{
                fu_jiage.innerHTML=jiage2;
            }
        }else if(jiage2<=0){
            jiage2=0;
        }
        array.push({name:name1,jiage:jiage1,img:img1});
        jiesuan.innerHTML=Number(array.length);
        main_li.innerHTML="";
        for(let i=0;i<array.length;i++){
            main_li.innerHTML+="<li class='clearfix'><input type='checkbox' checked class='zi'><img src="+array[i].img+" alt=''><div class='txt'><p>"+array[i].name+"</p><div class='shuliang'><button class='btn2'>-</button><p>1</p><button class='btn3'>+</button></div></div><div class='text'><p>数量<span>x1</span></p><p>￥"+array[i].jiage+"</p><p><i class='fa fa-trash-o'></i></p></div></li>";
        }
        if(arr.length==1){
            inp=document.querySelector("input.zi");
            shan=document.querySelector(".inner-main .main i.fa-trash-o");
            main_lis=document.querySelector(".inner-main .main>li");
        }else if(arr.length>1){
            inp=document.querySelectorAll("input.zi");
            shan=document.querySelectorAll(".inner-main .main i.fa-trash-o");
            main_lis=document.querySelectorAll(".inner-main .main>li");
        }
        if(array.length==0){
            main.style.height="300px";
            main.style.backgroundImage="url(img/timg.jpg)";
            main.style.backgroundPosition="center";
            main.style.backgroundRepeat="no-repeat";
        }else{
            main.style.height="";
            main.style.backgroundImage="";
            main.style.backgroundPosition="";
            main.style.backgroundRepeat="";
        }
        for(let n=0;n<inp.length;n++){
            inp[n].ee=n;
            inp[n].onclick=function(){
                if(inp[n].checked==true){
                    inp[this.ee].style.border="none";
                    arr.push(1);
                    if(arr.length==inp.length&&arr[n]==1){
                        fu.checked=true;
                        fu.style.border="none";
                    }else{
                        fu.checked=false;
                        fu.style.border="1px #c6c6c6 solid";
                    }
                }else{
                    inp[this.ee].style.border="1px #c6c6c6 solid";
                    arr.pop(1);
                    if(arr.length==inp.length&&arr[n]==1){
                        fu.checked=true;
                        fu.style.border="none";
                    }else{
                        fu.checked=false;
                        fu.style.border="1px #c6c6c6 solid";
                    }
                }
            }
        }
        for(let i=0;i<shan.length;i++){
            shan[i].gg=i;
            shan[i].onclick=function(){
                array.shift();
                arr.pop(1);
                main_li.removeChild(main_lis[this.gg]);
                jiesuan.innerHTML=Number(array.length);
                if(array.length==0){
                    fu_jiage.innerHTML=88;
                    main.style.height="300px";
                    main.style.backgroundImage="url(img/timg.jpg)";
                    main.style.backgroundPosition="center";
                    main.style.backgroundRepeat="no-repeat";
                }else{
                    main.style.height="";
                    main.style.backgroundImage="";
                    main.style.backgroundPosition="";
                    main.style.backgroundRepeat="";
                }
            }
        }
    }
}
//}