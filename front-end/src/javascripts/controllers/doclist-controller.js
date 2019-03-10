const docList=require("../models/document-list");
const documentList=require("../views/route/docList.html");
const deleteDoc=require("../models/deleteDoc");
const editeDoc=require("../models/editeDoc");
const query=require("querystring");
const docListContent=require("../views/route/docListContent.html")
let pageNum=1,pageSize=10;
const render=async (req,res,next)=>{
   
   res.render(template.compile(documentList)())
   console.log(123);
   let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize});
   console.log(data);
   let count=data.count;
   console.log(count)
   
   $(".box").html(template.compile(docListContent)({items:data.data}))
    
   $(".zxf_pagediv").createPage({
      pageNum: Math.ceil(count/pageSize),
      current: pageNum,
      backfun: function(e) {
         pageNum=e.current;
            render(req,res,next);
          //console.log(e);//回调
      }
  });
   
   console.log(data);
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