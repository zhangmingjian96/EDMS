const addDocument=require("../views/route/addDoc.html");
const updateDoc=require("../models/addDoc");
const editeDoc=require("../models/editeDoc");
const documentList=require("../views/route/docList.html");
let addData;
const render=(req,res,next)=>{
    res.render(addDocument);
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
        
        addData=await updateDoc("/api/v1/document/add",{
         theme,author, operator,date,description
        },"POST")
        console.log(addData);
        location.hash="#/doc/docList";
       
        
    })
    
 }  

module.exports={render,addData};