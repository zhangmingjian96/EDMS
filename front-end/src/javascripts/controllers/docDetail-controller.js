const docDetail=require("../views/route/addDetail.html");
const addDocument=require("../views/route/addDoc.html");
const editeDoc=require("../models/editeDoc");
const updateDoc=require("../models/addDoc");
const query=require("querystring");
const render=async (req,res,next)=>{
    console.log();
   
    let data=await editeDoc("/api/v1/document/edite",{theme:query.parse(req.params.theme.split(":")[1]).theme},"POST");
    console.log(data);
    res.render(template.compile(docDetail)({items:data[0]}));
    
    $('#datepicker').date_input();
    var editor = new Simditor({
        textarea: $('#editor')
  
        });
        clickEvent();
}
async function clickEvent() {

    $(".btn-primary").on("click",async function(e){
        e.preventDefault();
        theme=$("#theme").val();
        author=$("#author").val();
        operator=$("#operator").val();
        date=$("#datepicker").val();
        description=$("#cate").val();
      
        location.hash="#/doc/docList";
        addData=await updateDoc("/api/v1/document/add",{
         theme,author, operator,date,description 
        },"POST")
       
       
        
    })
    
 }  

module.exports=render;