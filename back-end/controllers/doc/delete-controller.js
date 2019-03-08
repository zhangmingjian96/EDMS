const {deleteDoc}=require("../../models/doc/docList.js");


const docController=async (req,res,next)=>{
    console.log(req.query,req.body);
    let status={
        code:200,
        msg:"request is success",
        
    }
    res.documentList=await deleteDoc(req.query);
 
    res.status=status;
        next();
}

module.exports=docController;