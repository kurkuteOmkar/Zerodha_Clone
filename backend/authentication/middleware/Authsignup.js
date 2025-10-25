const joi=require("joi")
const Authsignup=(req,res,next)=>{
  const {name,email,password}=req.body;
  console.log(name,email,password)
  const schema=joi.object({
    name:joi.string().min(3).max(20).required(),
    
  email: joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required(),
 password:joi.string().min(4).max(10).required()
  })
  const {error}=schema.validate(req.body)
  if(error){
    return res.status(400).json({
        message:"Bad request",
        error:error.details[0].message
    })
  }
 next()
}
module.exports=Authsignup