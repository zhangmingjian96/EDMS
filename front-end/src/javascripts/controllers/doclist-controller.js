const docList=require("../models/document-list");
const documentList=require("../views/route/docList.html");
const deleteDoc=require("../models/deleteDoc");
const docListContent=require("../views/route/docListContent.html")
let pageNum=1,pageSize=10;
let sort;
const render=(req,res,next)=>{
   
   res.render(template.compile(documentList)())
  
   renderList(req,res,next);
      
   
   
  
   
}
 async function renderList(req,res,next,searchTheme,_sort){
   let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,searchTheme:searchTheme?searchTheme:"",_sort:_sort});

   let count=data.count;
   
 
   $(".box-content").html(template.compile(docListContent)({items:data.data}))
    
   $(".zxf_pagediv").createPage({
      pageNum: Math.ceil(count/pageSize),
      current: pageNum,
      backfun: function(e) {
         pageNum=e.current;
         renderList(req,res,next,searchTheme,sort);
         
          //console.log(e);//回调
      }
  });
  bindEvent(req,res,next);
}

function bindEvent(req,res,next){
   $("#deleteAndEdite span").on("click",function(){ 
      console.log(123);
      let theme=($(this).parent().parent()).children()[1].textContent;
        
      if($(this).text()==="删除"){
         $(this).parent().parent().remove();
         deleteDoc("/api/v1/document/delete",{theme:theme});
      }else{
         
        
         location.hash="#/doc/docDetail/:"+"theme="+theme;
        
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
             
                 //console.log(e);//回调
             }
         });
      
         })
      $(".sort").on("click",async function(){
         $(this).addClass("sortActive");
         $(this).siblings("span").removeClass("sortActive");
         let count;
         let searchTheme=$(".search-button").siblings().val(); 
         if(!($(this).text().indexOf("升序")+1)){
            sort=-1;
            let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,_sort:sort});
         
            count=data.count;
           
            
            $(".box-content").html(template.compile(docListContent)({items:data.data}))
         }else{
            sort=1;
            let data=await docList("/api/v1/document/doc",{pageNum:pageNum,pageSize:pageSize,_sort:sort});
            count=data.count;

            $(".box-content").html(template.compile(docListContent)({items:data.data}))
         }
        
         $(".zxf_pagediv").createPage({
            pageNum: Math.ceil(count/pageSize),
            current: pageNum,
            backfun: function(e) {
               pageNum=e.current;
               console.log(e);
               renderList(req,res,next,searchTheme,sort);
         
               
                //console.log(e);//回调
            }
        })
         
      })
}

module.exports=render;