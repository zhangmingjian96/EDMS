const request=require("../utils.js/api")
const getDocList=(url,data)=>{
   return  request(url,data)
}


module.exports=getDocList;