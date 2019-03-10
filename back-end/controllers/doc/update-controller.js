const {updateDoc}=require("../../models/doc/docList.js");


const docController=async (req,res,next)=>{
    console.log(req.body.id);
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.documentList=await updateDoc(req.body.id,req.body) ;
   
    res.status=status;
        next();
}

module.exports=docController;