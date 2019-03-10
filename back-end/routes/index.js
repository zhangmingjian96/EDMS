const docController=require("../controllers/doc/doc-controller.js");
const addDocController=require("../controllers/doc/add-controller");
const deleteDocController=require("../controllers/doc/delete-controller");
const editeDocController=require("../controllers/doc/edite-controller");
const updateDocController=require("../controllers/doc/update-controller");
const {documentList,addedDocumentList,deleteDocumentList,editeDocumentList,updateDocumentList}=require("../middlewares/document");
const express=require("express");
let router=express();
console.log(docController);
router.get("/doc",docController,documentList);
router.post("/add",addDocController,addedDocumentList);
router.get("/delete",deleteDocController,deleteDocumentList);
router.post("/edite",editeDocController,editeDocumentList);
router.post("/update",updateDocController,updateDocumentList)
module.exports=router;