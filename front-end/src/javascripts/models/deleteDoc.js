const request=require("../utils.js/api")
const deleteDoc=(url,data)=>{
   return  request(url,data)
}


module.exports=deleteDoc;