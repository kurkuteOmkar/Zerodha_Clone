const {Schema}=require("mongoose");
const userInfoSchema=new Schema({
    name:String,
    email:String,
    password:String
})
module.exports=userInfoSchema