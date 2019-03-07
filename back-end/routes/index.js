const docController=require("../controllers/doc/doc-controller.js");
const addDocController=require("../controllers/doc/add-controller");
const {documentList,addedDocumentList}=require("../middlewares/document");
const express=require("express");
let router=express();
console.log(docController);
router.get("/doc",docController,documentList);
router.post("/add",addDocController,addedDocumentList);
module.exports=router;