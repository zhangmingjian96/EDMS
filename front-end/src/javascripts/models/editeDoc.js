const request=require("../utils.js/api")
const editeDoc=(url,data,method)=>{
   return  request(url,data,method)
}


module.exports=editeDoc;