const mongoose=require("mongoose")
const userInfoSchema=require("../schemas/userInfo")
const userInfoModel=mongoose.model("userInfo",userInfoSchema)

module.exports=userInfoModel