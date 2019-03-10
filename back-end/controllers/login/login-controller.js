const {findUser}=require("../../models/login/login.js");


const docController=async (req,res,next)=>{
    console.log(req.body);
    let status={
        code:200,
        msg:"request is success",
        
    }
    let oldUser=await findUser({user:req.body.user,password:req.body.password});
    console.log(oldUser);
    res.oldUser=oldUser;
    res.status=status;
     next();
}

module.exports=docController;