const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/login', {useNewUrlParser: true});

let loginSchema=new mongoose.Schema({
  username:String,
  user:String,
  password:String,
})
const loginUser=mongoose.model("login",loginSchema);

const whetherRepeat=(req)=>{
    return loginUser.find(req);
}
const findUser=(req)=>{
    return loginUser.find(req);
}

const userRegister=async (req)=>{

    return loginUser.insertMany(req);
}

    module.exports={
        whetherRepeat,
        userRegister,
        findUser,
    }