const docList=require("../models/document-list");
const documentList=require("../views/route/docList.html");
const deleteDoc=require("../models/deleteDoc");
const docListContent=require("../views/route/docListContent.html")
let pageNum=1,pageSize=10;
const render=(req,res,next)=>{
   
   res.render(template.compile(documentList)())
  
   renderList(req,res,next);
      
   
   bindEvent(req,res,next);
  
   
}
 async function renderList(req,res,next,searchTheme){
   let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,searchTheme:searchTheme});
   console.log(data);
   let count=data.count;
   console.log(count)
   
   $(".box-content").html(template.compile(docListContent)({items:data.data}))
    
   $(".zxf_pagediv").createPage({
      pageNum: Math.ceil(count/pageSize),
      current: pageNum,
      backfun: function(e) {
         pageNum=e.current;
         renderList(req,res,next,searchTheme);
         bindEvent(req,res,next);
          //console.log(e);//回调
      }
  });
}

function bindEvent(req,res,next){
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
      $(".search-button").on("click",async function(){
        
          let searchTheme=$(this).siblings().val();
          let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,searchTheme:searchTheme});
          let count=data.count;
          $(".box-content").html(template.compile(docListContent)({items:data.data}))
          $(".zxf_pagediv").createPage({
             pageNum: Math.ceil(count/pageSize),
             current: pageNum,
             backfun: function(e) {
                pageNum=e.current;
                renderList(req,res,next,searchTheme);
                bindEvent(req,res,next);
                 //console.log(e);//回调
             }
         });
      
         })
      $(".sort").on("click",async function(){
         $(this).addClass("sortActive");
         $(this).siblings("span").removeClass("sortActive");
         let count;
       
         if(!($(this).text().indexOf("升序")+1)){
            let sort=-1;
            let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,_sort:sort});
         
            count=data.count;
           
            
            $(".box-content").html(template.compile(docListContent)({items:data.data}))
         }else{
            let sort=1;
            let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,_sort:sort});
            count=data.count;

            $(".box-content").html(template.compile(docListContent)({items:data.data}))
         }
        
         $(".zxf_pagediv").createPage({
            pageNum: Math.ceil(count/pageSize),
            current: pageNum,
            backfun: function(e) {
               pageNum=e.current;
               renderList(req,res,next,searchTheme);
               bindEvent(req,res,next);
                //console.log(e);//回调
            }
        })
         
      })
}

module.exports=render;