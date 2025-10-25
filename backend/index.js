require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const {compare,hash}=require("bcrypt")
const PORT=process.env.PORT ||3002;
const Authsignup=require("./authentication/middleware/Authsignup.js")
const Authsignin=require("./authentication/middleware/Authsignin.js")
const app=express();
const URL=process.env.MONGO_URL;
const {PositionModel}=require("./model/PositionModel")
const {HoldingModel}=require("./model/HoldingModel.js")
const userInfoModel=require("./model/userInfoModel.js")
const bodyParser=require("body-parser")
const cors=require("cors")
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
mongoose.connect(URL).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

app.get("/Holding",async(req,res)=>{
    const holdingData= [
        {
          name: "BHARTIARTL",
          qty: 2,
          avg: 538.05,
          price: 541.15,
          net: "+0.58%",
          day: "+2.99%",
        },
        {
          name: "HDFCBANK",
          qty: 2,
          avg: 1383.4,
          price: 1522.35,
          net: "+10.04%",
          day: "+0.11%",
        },
        {
          name: "HINDUNILVR",
          qty: 1,
          avg: 2335.85,
          price: 2417.4,
          net: "+3.49%",
          day: "+0.21%",
        },
        {
          name: "INFY",
          qty: 1,
          avg: 1350.5,
          price: 1555.45,
          net: "+15.18%",
          day: "-1.60%",
          isLoss: true,
        },
        {
          name: "ITC",
          qty: 5,
          avg: 202.0,
          price: 207.9,
          net: "+2.92%",
          day: "+0.80%",
        },
        {
          name: "KPITTECH",
          qty: 5,
          avg: 250.3,
          price: 266.45,
          net: "+6.45%",
          day: "+3.54%",
        },
        {
          name: "M&M",
          qty: 2,
          avg: 809.9,
          price: 779.8,
          net: "-3.72%",
          day: "-0.01%",
          isLoss: true,
        },
        {
          name: "RELIANCE",
          qty: 1,
          avg: 2193.7,
          price: 2112.4,
          net: "-3.71%",
          day: "+1.44%",
        },
        {
          name: "SBIN",
          qty: 4,
          avg: 324.35,
          price: 430.2,
          net: "+32.63%",
          day: "-0.34%",
          isLoss: true,
        },
        {
          name: "SGBMAY29",
          qty: 2,
          avg: 4727.0,
          price: 4719.0,
          net: "-0.17%",
          day: "+0.15%",
        },
        {
          name: "TATAPOWER",
          qty: 5,
          avg: 104.2,
          price: 124.15,
          net: "+19.15%",
          day: "-0.24%",
          isLoss: true,
        }]
holdingData.forEach((data)=>{
    let newHoliding=new HoldingModel({
        name:data.name,
        qty: data.qty,
        avg: data.avg,
        price: data.price,
        net: data.net,
        day: data.day,
        isLoss:data.isLoss,
    })
    // newHoliding.save();
  })
  res.send("holding the data succefully")
})
app.get("/allHolding",async(req,res)=>{
  let holdingData=await HoldingModel.find({});
  res.json(holdingData);
})
app.get("/allPosition",async(req,res)=>{
  let positionData=await PositionModel.find({});
  res.json(positionData);
})
app.post("/signup",Authsignup,async(req,res)=>{
 const {name,email,password}=req.body;
 try{
  const user=await userInfoModel.findOne({email});
  if(user){
   return  res.status(400).json({
      message:"user already exist please try again"
    })
  }
    const newUser=new userInfoModel({name,email,password})
    newUser.password=await hash(password,10)
    await newUser.save();
res.status(200).send("User registered successfully")
 }catch(err){
 res.status(400).json({
  message:"Internal server error"
 })
 }
})
app.post("/signin",Authsignin)
app.listen(PORT,()=>{
    console.log("App Started");
});