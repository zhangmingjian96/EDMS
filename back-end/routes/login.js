const userRegisterController=require("../controllers/login/register-controller.js");
const userLoginController=require("../controllers/login/login-controller.js");
const {getCode}=require("../controllers/login/check-code.js")
var express = require('express');
var router = express.Router();
const {register,login,code}=require("../middlewares/document");
/* GET users listing. */
router.post("/register",userRegisterController,register);
router.post("/login",userLoginController,login);
router.get("/code",getCode,code);
module.exports = router;
