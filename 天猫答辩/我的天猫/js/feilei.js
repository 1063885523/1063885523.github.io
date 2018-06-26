//vue
new Vue({
    el:".suoyou",
    data:{
        tuku0:[
            {img:"img/fenlei/TB1N3YXeACWBuNjy0FaXXXUlXXa-124-124.png_145x145Q50s50.jpg_.webp",name:"果冻布丁"},
            {img:"img/fenlei/TB1eP8xHpXXXXbIapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"巧克力"},
            {img:"img/fenlei/TB1J0WFHpXXXXXpapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"传统糕点"},
            {img:"img/fenlei/TB1O7XSHpXXXXcfaXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"纯牛奶"},
            {img:"img/fenlei/TB1NVCPHpXXXXXXXFXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"膨化食品"},
            {img:"img/fenlei/TB1DX61NFXXXXXvXFXXXXXXXXXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"饼干"},
            {img:"img/fenlei/TB1JNqPHpXXXXb0XpXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"果味饮料"},
            {img:"img/fenlei/TB1fbecHpXXXXaDapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"碳酸饮料"},
            {img:"img/fenlei/TB1NbyJHpXXXXXSXXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"牛肉"},
            {img:"img/fenlei/TB1hZVhHpXXXXbtapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"火腿肠"},
            {img:"img/fenlei/TB1lKJFHpXXXXXRapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"果冻/布丁"},
            {img:"img/fenlei/TB1gHWJHpXXXXbtXVXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"方便速食"},
            {img:"img/fenlei/TB1aaaTOVXXXXcOaXXXXXXXXXXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"豆干制品"},
            {img:"img/fenlei/TB1NA1PHpXXXXceXpXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"酸奶"}, {img:"img/fenlei/TB2OXwoemKI.eBjy1zcXXXIOpXa_!!1709193846.jpg_145x145Q50s50.jpg_.webp",name:"大米"},
            {img:"img/fenlei/TB1djypHpXXXXXHapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"白酒"},
            {img:"img/fenlei/TB1.ENdHpXXXXahaXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"酱油"},
            {img:"img/fenlei/TB1HZIxHXXXXXchaXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"抽纸"},
            {img:"img/fenlei/TB1.aN3HpXXXXbZaXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"纸尿裤"},
            {img:"img/fenlei/TB1fV0NHpXXXXc6XVXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"卷纸"},
            {img:"img/fenlei/TB1NypMHpXXXXcyaXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"洗发水"},
            {img:"img/fenlei/TB1nz9qHpXXXXbQXVXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"洗衣液"},
            {img:"img/fenlei/TB1NQ2nSFXXXXcqaXXXXXXXXXXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"婴儿奶粉"},
            {img:"img/fenlei/TB1dNXMHpXXXXXGaXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"手帕纸"},
            {img:"img/fenlei/TB1FE8WHpXXXXc_aXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"牙膏"},
            {img:"img/fenlei/TB1zJ9XQFXXXXXHXVXXXXXXXXXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"卫生巾"},
            {img:"img/fenlei/TB1ICRsHpXXXXb_aXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"湿巾"},
            {img:"img/fenlei/TB1b3hkHpXXXXaOaFXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"洁厕液"},
            {img:"img/fenlei/TB1xNNqHpXXXXXaapXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"牙刷"},
            {img:"img/fenlei/TB1r8KpHpXXXXbzXXXXvye07pXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"婴儿湿巾"}
            ],
        //热门1
        tuku1:[
            {img:"img/fenlei/TB1Ac1CHpXXXXctXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"牛油果"},
            {img:"img/fenlei/TB1IPywHpXXXXXFXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"柠檬"},
            {img:"img/fenlei/TB1j11YHpXXXXXvXpXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"奇异果"},
            {img:"img/fenlei/TB1mfx9HpXXXXbMapXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"苹果"},
            {img:"img/fenlei/TB1Tnk3qgMPMeJjy1XdXXasrXXa-124-124.jpg_145x145Q50s50.jpg_.webp",name:"柚子"},
            {img:"img/fenlei/TB1vrqJHpXXXXbwaXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"梨"},
            {img:"img/fenlei/TB1WBmeHpXXXXc2aXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"橙子"},
            {img:"img/fenlei/TB1zBuRHpXXXXcGXpXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"火龙果"}, {img:"img/fenlei/TB2ap8gjVXXXXXWXpXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"葡萄/提子"}, {img:"img/fenlei/TB2h6FBjVXXXXabXXXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"凤梨"}, {img:"img/fenlei/TB2YFxwjVXXXXaUXXXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"椰青"},
            {img:"img/fenlei/TB2zPJBjVXXXXX9XXXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"龙眼"}
        ],
        //水果生鲜1
        tuku2:[
            {img:"img/fenlei/TB17D9wSpXXXXXuXVXXXXXXXXXX-124-124.png_145x145Q50s50.jpg_.webp",name:"牛腱"}, {img:"img/fenlei/TB2OE4FlVXXXXX1XXXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"牛腩"},
            {img:"img/fenlei/TB1jpesHpXXXXXzaXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"羊肉"},
            {img:"img/fenlei/TB1iWyeHpXXXXXhaXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"牛排"},
            {img:"img/fenlei/TB1bnqEHpXXXXbmXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"牛肉"},
            {img:"img/fenlei/TB1bAVCMXXXXXXhaXXXXXXXXXXX-150-150.jpg_145x145Q50s50.jpg_.webp",name:"冰鲜猪肉"}
        ],
        //水果生鲜2
        tuku3:[
            {img:"img/fenlei/TB16XrJHpXXXXXZXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"蟹类"}, {img:"img/fenlei/TB2u5VmlVXXXXXfXpXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"带鱼"}, {img:"img/fenlei/TB2SKdFlVXXXXX3XXXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"鳕鱼"}, {img:"img/fenlei/TB2hfI6lFXXXXb2XpXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"虾仁"},
            {img:"img/fenlei/TB1uufyHpXXXXXKXVXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"鱼类"},
            {img:"img/fenlei/TB1OImrSpXXXXXXaXXXXXXXXXXX-124-124.png_145x145Q50s50.jpg_.webp",name:"三文鱼"},
            {img:"img/fenlei/TB1O1fHHpXXXXcGXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"虾类"},
            {img:"img/fenlei/TB1GV2CHpXXXXX2XFXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"贝类"},
            {img:"img/fenlei/TB1mm5ASpXXXXXvXVXXXXXXXXXX-124-124.png_145x145Q50s50.jpg_.webp",name:"其他海产"}
        ],
        //水果生鲜3
        tuku4:[
            {img:"img/fenlei/TB1W21qHpXXXXbnXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"蛋"},
            {img:"img/fenlei/TB1ubiYHpXXXXbgXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"鸡腿"},
            {img:"img/fenlei/TB1tArGHpXXXXbZXFXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"鸭肉"},
            {img:"img/fenlei/TB1RD2IHpXXXXXOXFXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"鸽子"},
            {img:"img/fenlei/TB1hzvEHpXXXXa5XVXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"鸡肉"},
            {img:"img/fenlei/TB1EXSwHpXXXXX9aXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"鸡翅"}
        ],
        //水果生鲜4
        tuku5:[
            {img:"img/fenlei/TB17tiLHpXXXXXJaXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"叶菜类"}, {img:"img/fenlei/TB2uyU9jFXXXXbJXpXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"根茎类"}, {img:"img/fenlei/TB2IfhzjVXXXXXYXXXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"茄果类"},
            {img:"img/fenlei/TB1SpKXSpXXXXaDaFXXXXXXXXXX-124-124.png_145x145Q50s50.jpg_.webp",name:"其他"},
            {img:"img/fenlei/TB1PhiOHpXXXXaYXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"葱姜蒜"},
            {img:"img/fenlei/TB1e6e0HpXXXXaVXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"菌菇类"}
        ],
        //水果生鲜5
        tuku6:[
            {img:"img/fenlei/TB1fEbRgOqAXuNjy1XdXXaYcVXa-124-124.png_145x145Q50s50.jpg_.webp",name:"酸牛奶"},
            {img:"img/fenlei/TB1JRIVOVXXXXcKaXXXXXXXXXXX-124-124.jpg_145x145Q50s50.jpg_.webp",name:"鲜牛奶"},
            {img:"img/fenlei/TB1MoXBMXXXXXX3aXXXXXXXXXXX-150-150.jpg_145x145Q50s50.jpg_.webp",name:"鲜果汁"},
            {img:"img/fenlei/TB1xyJ.HpXXXXcCXVXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"汤圆"}, {img:"img/fenlei/TB2cBRglVXXXXX8XpXXXXXXXXXX_!!1910146537.png_145x145Q50s50.jpg_.webp",name:"面点"},
            {img:"img/fenlei/TB1KwbIHpXXXXaVXXXXXyK07pXX-124-124.png_145x145Q50s50.jpg_.webp",name:"水饺"}
        ],
        //水果生鲜6
    }
})

//for(let n=0;n<quanbulis.length;n++){
//    
//}
//左边点击
var quanbulis=document.querySelectorAll(".quanbu li");
var yins=document.querySelectorAll(".suoyou>li");
var xian=document.querySelector(".xian");
var right=document.querySelector(".right");
var left_num=0;
quanbulis[0].style.backgroundColor="#fff";
quanbulis[0].style.color="#000";
for(let n=0;n<quanbulis.length;n++){
    quanbulis[n].dd=n;
    quanbulis[n].onclick=function(){
        for(let n=0;n<quanbulis.length;n++){
            quanbulis[n].style.backgroundColor="#eeeeee";
            quanbulis[n].style.color="#9b9b9b";
        }
        quanbulis[this.dd].style.color="#000";
        quanbulis[this.dd].style.backgroundColor="#fff";
        if(this.dd==0){
            yins[0].className="xian";
            yins[1].className="yin";
        }else if(this.dd==1){
            yins[1].className="xian";
            yins[0].className="yin";
        }
        right.addEventListener("scroll",function(){
            right.scrollTop=0;
        })
        benlei.style.display="none";
        let a=quanbulis[this.dd].innerHTML;
        benlei.childNodes[1].innerHTML=a;
        left_num=this.dd*55;
        return(left_num);
    }
}
var left=document.querySelector(".left");
var benlei=document.querySelector(".benlei");
left.addEventListener("scroll",function(){
    if(left.scrollTop>=left_num){
        benlei.style.display="block";
    }else{
        benlei.style.display="none";
    }
})
//nav 点击
var nav_li=document.querySelectorAll(".nav-bottom li");
nav_li[3].style.color="#cbbe76";
for(let n=0;n<nav_li.length;n++){
    nav_li[n].bb=n;
    nav_li[n].onclick=function(){
        for(let n=0;n<nav_li.length;n++){
            nav_li[n].style.color="#000";
        }
        nav_li[this.bb].style.color="#cbbe76";
    }
}
