const appIndexHead=require("../views/homePage/index-head.html");
const appIndexAside=require("../views/homePage/index-aside.html");
const appIndexContent=require("../views/homePage/content.html");
const img=require("../../static/assets/user2.jpg");
const addClick=require("./aside");
const headerClick=require("./header");
const render=()=>{
    $(".wrapper").append(appIndexHead);
    $(".wrapper").append(appIndexAside);
    $(".wrapper").append(appIndexContent);
    $(".pull-left img")[0].src=img;
    $(".user-header img")[0].src=img;
    $(".user img")[0].src=img;
    addClick();
    headerClick();
}   

module.exports=render;