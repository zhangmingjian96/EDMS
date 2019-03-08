const {editeDoc}=require("../../models/doc/docList.js");


const docController=async (req,res,next)=>{
    console.log(req.body);
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.documentList=await editeDoc(req.body.theme) ? await editeDoc(req.body.theme) : res.documentList;
 
    res.status=status;
        next();
}

module.exports=docController;