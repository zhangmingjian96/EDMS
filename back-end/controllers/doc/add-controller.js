const {addDoc,docList}=require("../../models/doc/docList.js");


const addController=async (req,res,next)=>{
    let status={
        code:200,
        msg:"request is success",
        
    }
    let data=await addDoc(req.body);
    res.documentList=data;
    res.status=status;
    console.log(data);
            next();
}

module.exports=addController;