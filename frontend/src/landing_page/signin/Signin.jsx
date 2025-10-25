import { useEffect, useState } from "react"
import {Toaster} from "react-hot-toast"
import { handleSuccess,handleError } from "../../util"
import axios from "axios"
import "../signup/SignUp.css"
export default function Signin(){
    const [signInInfo,setSignInInfo]=useState(
        {
        email:"",
        password:"",
        }
    )
const handleChange=(e)=>{
    const {name,value}=e.target
    const info={...signInInfo}
     info[name]=value
     setSignInInfo(info)
}
const handleSubmit=async(e)=>{
   e.preventDefault();
   console.log(signInInfo)
   try{
   const result=await axios.post("http://localhost:8000/signin",signInInfo);
   console.log(result)
   const {user,jsonToken}=result.data;
   console.log(user,jsonToken)
   localStorage.setItem("user",user);
   localStorage.setItem("token",jsonToken)
   setTimeout(()=>{
    window.location.href="http://localhost:5174/"
        },1000)
   }catch(err){
    console.log(err)
   }
}

return (
    <div className="container1">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
           
            <div>
                <label>Enter Your email</label>
                <input type="email" name='email'onChange={handleChange} value={signInInfo.email} placeholder="abc@gmail.com"/>
            </div>
            <div>
                <label>Enter Your password</label>
                <input type="password" name="password" onChange={handleChange} value={signInInfo.password} placeholder="*****"/>
            </div>
            <button>Login</button>
        </form>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
   )
}