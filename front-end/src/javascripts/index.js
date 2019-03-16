const style=require("../stylesheets/index.scss");
const appHomePageRender=require("./controllers/home-page");
const routerRender=require("./routes/router");
const auth=require("./utils.js/auth");
const authLogin=async ()=>{
   await auth().then((res)=>{
       console.log(123)
    appHomePageRender();
    routerRender(); 
    console.log(res)
    $(".name").text(res.data[0].username)
   }).catch((rej)=>{
    $.Toast("Warning","请登录后在操作","warning");
    setTimeout(() => {
        window.location.href="login.html"
    }, 1000);
   }) 
}
authLogin();
