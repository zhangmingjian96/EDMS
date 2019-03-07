const addDocument=require("../views/route/addDoc.html");
const updateDoc=require("../models/addDoc");
const documentList=require("../views/route/docList.html");
const render=(req,res,next)=>{
    res.render(addDocument);
    $('#datepicker').date_input();
    var editor = new Simditor({
        textarea: $('#editor')
  
        });
   
        clickEvent();
        
}

 function  clickEvent() {
     let theme,author,operator,date,description;
     theme=$("#theme").val();
     author=$("#author").val();
     opreator=$("#operator").val();
     date=$("#datepicker").val();
     description=$("#editor").val();
    $(".btn-primary").on("click",async function(e){
        e.preventDefault();
        theme=$("#theme").val();
        author=$("#author").val();
        operator=$("#operator").val();
        date=$("#datepicker").val();
        description=$("#editor").val().split(">")[1].split("<")[0];
        location.hash="#/doc/docList";
        let data=await updateDoc("/api/v1/document/add",{
         theme,author, operator,date,description
        },"POST")
            console.log(data);
       
        
    })
    
 }  

module.exports=render;