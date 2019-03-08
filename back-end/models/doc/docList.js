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
    
    return DocumentList.find({}).exec();
    

  } 
  const addDoc=(res)=>{
   return new Promise(function(resolve,rejected){
    DocumentList.insertMany(res,function(error){
      try{
        resolve(res);
        console.log(123);
      }catch{
        console.log(error);
      }
    });
   })
    
  }

  const deleteDoc=(req)=>{
    console.log(req);
    return DocumentList.deleteMany(req,function(err){
      try{
        console.log(123);
      }catch{
        console.log(err);
      }
    })
  }
  const editeDoc=(req)=>{
    console.log(req)
    // return DocumentList.updateOne({theme:req},body,function(error){
    //   try{
    //     console.log(123);
    //   }catch{
    //     console.log(error);
    //   }
    // })
    return DocumentList.find({theme:req}).exec();
  }


    module.exports={docList,addDoc,deleteDoc,editeDoc};
