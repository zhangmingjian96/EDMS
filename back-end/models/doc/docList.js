const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/document', {useNewUrlParser: true});

let docSchema=new mongoose.Schema({
  totalDescription:String,
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
  const docCount=(req)=>{
      return DocumentList.countDocuments(req.searchTheme? {theme:{$regex:req.searchTheme}}:{},function(err,count){
       
      });
  }
  const docList=async (req)=>{
    // let count=await docCount();
    let count=await docCount(req);
    let document=await DocumentList.find(req.searchTheme? {theme:{$regex:req.searchTheme}}:{}).sort({_id:req._sort}).limit(~~req.pageSize).skip((req.pageNum-1)*req.pageSize);
    return new Promise((res,rej)=>{
      res({count,document})
    })
    
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
  const updateDoc=(req,body)=>{
    console.log(req)
    return DocumentList.updateOne({_id:req},body,function(error){
      try{
        console.log(123);
      }catch{
        console.log(error);
      }
    })
  }


    module.exports={docList,addDoc,deleteDoc,editeDoc,updateDoc};
