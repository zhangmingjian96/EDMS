const docList=require("../models/document-list");
const documentList=require("../views/route/docList.html");
const deleteDoc=require("../models/deleteDoc");
const editeDoc=require("../models/editeDoc");
const query=require("querystring");
const render=async (req,res,next)=>{

   let data=await docList();
 
   
   console.log(data);
  
   res.render(template.compile(documentList)({items:data}))
   bindEvent();
}

function bindEvent(){
   $("#deleteAndEdite span").on("click",function(){
      let theme=($(this).parent().parent()).children()[1].textContent;
         console.log(theme);
      if($(this).text()==="删除"){
         $(this).parent().parent().remove();
         deleteDoc("/api/v1/document/delete",{theme:theme});
      }else{
         
        
         location.hash="#/doc/docDetail/:"+"theme="+theme;
         console.log($("#theme"))
         // editeDoc("/api/v1/document/edite/"+theme,{theme:theme},"POST");
      }
      })
}

module.exports=render;