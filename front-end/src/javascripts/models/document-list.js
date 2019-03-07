const getDocList=()=>{
   return  $.ajax({
        url:"/api/v1/document/doc"
    })
}

module.exports=getDocList;