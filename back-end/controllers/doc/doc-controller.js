const {docList}=require("../../models/doc/docList.js");


const docController=async (req,res,next)=>{
    console.log(req.query);
    let status={
        code:200,
        msg:"request is success",
        
    }
    
    res.documentList=await docList(req.query);
    res.count=await res.documentList.count;
    res.documentList=res.documentList.document;
    console.log(res.count,res.documentList);
    res.status=status;
//   =pagination;
//     console.log(res.documentList)
//     res.count=count;
    next();     
}

module.exports=docController;