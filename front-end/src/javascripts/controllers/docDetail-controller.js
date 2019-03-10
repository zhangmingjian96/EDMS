const docDetail=require("../views/route/addDetail.html");

const editeDoc=require("../models/editeDoc");
const updateDoc=require("../models/addDoc");
const query=require("querystring");
const render=async (req,res,next)=>{
    console.log(123);
   
    let data=await editeDoc("/api/v1/document/edite",{theme:query.parse(req.params.theme.split(":")[1]).theme},"POST");
    console.log(data);
    console.log(data.data[0]._id);
    res.render(template.compile(docDetail)({items:data.data[0]}));
    
    $('#datepicker').date_input();
    var editor = new Simditor({
        textarea: $('#editor')
  
        });
        clickEvent(data.data[0]._id);
}
async function clickEvent(id) {

    $(".btn-primary").on("click",async function(e){
        e.preventDefault();
        id=id;
        theme=$("#theme").val();
        author=$("#author").val();
        operator=$("#operator").val();
        date=$("#datepicker").val();
        description=$("#cate").val();
       
        
       
        addData=await updateDoc("/api/v1/document/update",{
         id,theme,author, operator,date,description
        },"POST")
        location.hash="#/doc/docList";
       
        
    })
    
 }  

module.exports=render;