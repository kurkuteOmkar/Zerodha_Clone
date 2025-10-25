import { useEffect, useState } from "react"
import {Toaster} from "react-hot-toast"
import { handleSuccess,handleError } from "../../util"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./SignUp.css"
export default function SignUp(){
    const [signUpInfo,setSignUpInfo]=useState(
        {
            name:"",
        email:"",
        password:"",
    }
)
const navigate=useNavigate()
const handleChange=(e)=>{
    const {name,value}=e.target
    const info={...signUpInfo}
     info[name]=value
     setSignUpInfo(info)
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!signUpInfo.name || !signUpInfo.email ||!signUpInfo.password){
    return    handleError("Please enter your name,email and Password")
    }
  else{
    console.log(signUpInfo)
  }
  try{
    const result=await axios.post("http://localhost:8000/signup",signUpInfo)
    console.log(result)
    handleSuccess("User registered successfully")
    navigate("/signin")
   
  }catch(err){
    const errorMessage = err.response?.data?.message || err.message || "An unknown error occurred";
    return handleError(errorMessage);
  }
}

return (
    <div className="container1">
        <h1>Signup or Create Account</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label>Enter Your name</label>
                <input type="text" name="name" onChange={handleChange} value={signUpInfo.name} placeholder="Your name"/>
            </div>
            <div>
                <label>Enter Your email</label>
                <input type="email" name='email'onChange={handleChange} value={signUpInfo.email} placeholder="abc@gmail.com"/>
            </div>
            <div>
                <label>Enter Your password</label>
                <input type="password" name="password" onChange={handleChange} value={signUpInfo.password} placeholder="*****"/>
            </div>
            <button>SignUp</button>
        </form>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
   )
}