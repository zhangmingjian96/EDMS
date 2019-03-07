const request=require("../utils.js/api")
const getDocList=()=>{
   return  request("/api/v1/document/doc")
}


module.exports=getDocList;