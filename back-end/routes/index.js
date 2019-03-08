const docController=require("../controllers/doc/doc-controller.js");
const addDocController=require("../controllers/doc/add-controller");
const deleteDocController=require("../controllers/doc/delete-controller");
const editeDocController=require("../controllers/doc/edite-controller");
const {documentList,addedDocumentList,deleteDocumentList,editeDocumentList}=require("../middlewares/document");
const express=require("express");
let router=express();
console.log(docController);
router.get("/doc",docController,documentList);
router.post("/add",addDocController,addedDocumentList);
router.get("/delete",deleteDocController,deleteDocumentList);
router.post("/edite",editeDocController,editeDocumentList)
module.exports=router;