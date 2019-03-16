const {findUser}=require("../../models/login/login.js");
const crypto = require('crypto')
let Decrypt = (encrypted) => {
    let key="gp9";
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
const docController=async (req,res,next)=>{
  
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.status=status;
    if(Decrypt(req.cookies.mark)!==(req.body.code).toLowerCase()){
        res.status.code=350;
        res.oldUser=[];
         next();
         
         return;
    }
    let oldUser=await findUser({user:req.body.user,password:req.body.password});
        
    if(oldUser.length===0){
       
        res.status.code=351;
    }
    if(oldUser.length!==0){
     
        req.session.user={
            user:oldUser[0]._id,
            username:oldUser[0].username,
            
        }
    
    }
    
    res.oldUser=oldUser;
    
     next();
}
const authController=(req,res,next)=>{
    console.log(req.session.user)
    if(req.session.user){
    res.status={
        code:200,
        msg:"登陆成功"
    }
    }else{
        res.status={
            code:207,
            msg:"请登录"
        } 
    }
    res.oldUser=[];
     next();
}

module.exports={docController,authController};