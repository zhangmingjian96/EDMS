const docList=require("../models/document-list");
const documentList=require("../views/route/docList.html");
const render=async (req,res,next)=>{
    
   let data=await docList();

   console.log(data);
   res.render(template.compile(documentList)({items:data}))
  
}

module.exports=render;