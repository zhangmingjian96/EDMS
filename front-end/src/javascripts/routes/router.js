const SMERouter=require("sme-router");
const appContentDocList=require("../views/route/docList.html");
const appContentaddDoc=require("../views/route/addDoc.html");
const appContent=require("../views/homePage/content-mini.html");
const addDocRender=require("../controllers/addDoc-controller");
const docListRender=require("../controllers/doclist-controller");
const appContentDoc=require("../views/homePage/content-doc.html");
const docDetailController=require("../controllers/docDetail-controller");
const render=()=>{
    const router=new SMERouter.default("router-view");
    

    
    router.route("/document",(req,res,next)=>{
        res.render(appContentDoc);
    })
    router.route("/doc/addDoc",addDocRender.render)
    router.route("/doc/docList",docListRender)
    router.route("/doc/docdetail/:theme",docDetailController)
    router.route("/user",(req,res,next)=>{
        res.render(123);
    })
    router.route("/user/userList",(req,res,next)=>{
        res.render(1231);
    })
    router.route("/user/addUser",(req,res,next)=>{
        res.render(1232);
    })
    router.route("/user/userLeave",(req,res,next)=>{
        res.render(1233);
    })
    router.route("/home",(req,res,next)=>{
        res.render(appContent);
    })
    router.route("*",(req,res,next)=>{
        res.redirect("/home");
    })
  
    
}
const routerClick=()=>{
    
}
module.exports=render;