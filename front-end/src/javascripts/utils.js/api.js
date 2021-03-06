const request=(url,data,method)=>{
    return new Promise(function(resolve,rejected){
       
        $.ajax({
               url:url,
               data:data,
               type:method,
            success:(res)=>{
               
                if(res.code>=200 && res.code <=304){
                    $.Toast("Success","request is success!","success");
                    console.log("success");
                    
                    resolve(res);
                }else{
                    $.Toast("Error","request is failed!","error");
                    console.log("danger")
                }
            error:(err)=>{
                $.Toast("Error","Dangerous","error");
                 console.log(err);
                 rejected(err);
            }
            }
        }
        
            )
    })
}

module.exports=request;