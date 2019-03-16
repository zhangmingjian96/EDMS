

const auth=()=>{
   return new Promise((resolve,rej)=>{
      return $.ajax({
        url:"/api/v1/login/auth",
        success(res){
           
           if(res.code===200){
             
            resolve(res)
           }else{
               rej(res);
           }
        }
    })
    res 
   })
}


module.exports=auth;