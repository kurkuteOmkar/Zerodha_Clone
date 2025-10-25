const jwt=require("jsonwebtoken");
require("dotenv").config();
const {compare}=require("bcrypt")
const userInfoModel=require("../../model/userInfoModel.js")
const Authsignin=async (req,res,next)=>{
const {email,password}=req.body;
const user =await userInfoModel.findOne({email})
if(!user)
{
 return   res.status(400).json({
        message:"You havn't signup yet please signup first",
        success:false
    })
}
const pass=await compare(password,user.password);
if(!pass){
   return res.status(400).json({
        message:"Invalid password",
        success:false
    })
}
jsonToken=jwt.sign({
name:user.name,
email:user.email
},process.env.JWT_SECREAT_KEY,{expiresIn:"24h"})
res.status(200).json({
    message:"Login successfull",
    success:true,
    jsonToken,
    email,
    user:user.name
})
// next();
}
module.exports=Authsignin;