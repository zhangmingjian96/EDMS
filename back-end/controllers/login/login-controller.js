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
    console.log(Decrypt(req.cookies.mark),req.body);
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
    
    res.oldUser=oldUser;
    
     next();
}

module.exports=docController;