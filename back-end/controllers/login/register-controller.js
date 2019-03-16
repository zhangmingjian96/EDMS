const {whetherRepeat,userRegister}=require("../../models/login/login.js");


const docController=async (req,res,next)=>{
    console.log(req.body);
    let status={
        code:200,
        msg:"request is success",
        
    }
    let repeatUser=await whetherRepeat({user:req.body.user});
    console.log(repeatUser);
    if(repeatUser.length){
        console.log("账号已存在")
        res.status.code=799;
        res.newUser=[];
        next();
        return;
    }
    let repeatUserName=await whetherRepeat({username:req.body.username});
    console.log(repeatUserName);
    if(repeatUserName.length){
        console.log("用户名已存在")
        res.status.code=798;
        res.newUser=[];
        next();
        return;
    } 
    let newUser=await userRegister(req.body);
    res.newUser=newUser;
    res.status=status;
     next();
}

module.exports=docController;