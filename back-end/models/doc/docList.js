const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/document', {useNewUrlParser: true});

let docSchema=new mongoose.Schema({
  id:Number,
  theme:String,
  author:String,
  operator:String,
  date:String,
  description:String,
})
const DocumentList=mongoose.model("DocumentList",docSchema);
// const zmj=new DocumentList({
//   id:1,
//   theme:"zmj",
//   author:"zmj",
//   operator:"zmj",
//   date:"zmj",
//   description:"zmj",

// })

  const docList=()=>{
    
    return DocumentList.find({theme:"for the horde"}).exec();
    

  } 


    module.exports=docList;
