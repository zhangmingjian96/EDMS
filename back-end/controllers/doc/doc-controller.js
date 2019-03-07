const {docList,addDoc}=require("../../models/doc/docList.js");


const docController=async (req,res,next)=>{
    console.log(req.body);
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.documentList=await docList();
 
    res.status=status;
        next();
}

module.exports=docController;