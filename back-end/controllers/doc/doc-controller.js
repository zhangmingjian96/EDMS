const docList=require("../../models/doc/docList.js");

const docController=async (req,res,next)=>{
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.documentList=await docList();

    res.status=status;
        next();
}

module.exports=docController;