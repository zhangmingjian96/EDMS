const userRegisterController=require("../controllers/login/register-controller.js");
const userLoginController=require("../controllers/login/login-controller.js");
var express = require('express');
var router = express.Router();
const {register,login}=require("../middlewares/document");
/* GET users listing. */
router.post("/register",userRegisterController,register);
router.post("/login",userLoginController,login);
module.exports = router;
