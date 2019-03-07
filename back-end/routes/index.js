const docController=require("../controllers/doc/doc-controller.js");
const {documentList}=require("../middlewares/document");
const express=require("express");
let router=express();
console.log(docController);
router.get("/doc",docController,documentList);

module.exports=router;