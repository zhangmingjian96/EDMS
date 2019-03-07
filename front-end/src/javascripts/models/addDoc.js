const request=require("../utils.js/api");

const addDoc=(url,data,method)=>{
   return request(url,data,method)
}

module.exports=addDoc;