import "./TopNav.css"
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState } from "react"
import ScrollToTop from "./ScrollToTop";
export default function TopNav(){
    let [click,setClick]=useState("blue");
  const location=useLocation();
    return (
        <>
  <nav>
    <ScrollToTop/>
    <div className="navbar">
        <div className="logo">
            <Link to="/"><img src="media/images/logo.svg" alt="" /></Link>
        </div>
        <ul className="linkingElement">
            <li className="link"><Link to="about" style={location.pathname=="/about"?{color:"blue"}:{color:""}}>About</Link></li>
            <li className="link"><Link to="product"  style={location.pathname=="/product"?{color:"blue"}:{color:""}}>Product</Link></li>
            <li className="link"><Link to="pricing" style={location.pathname=="/pricing"?{color:"blue"}:{color:""}}>Pricing</Link></li>
            <li className="link"><Link to="support" style={location.pathname=="/support"?{color:"blue"}:{color:""}}>Support</Link></li>
            <li className="link"><Link to="signup" style={location.pathname=="/signup"?{color:"blue"}:{color:""}}>Signup</Link></li>
            <li className="link"><Link to="signin" style={location.pathname=="/signin"?{color:"blue"}:{color:""}}>Signin</Link></li>
        </ul>
    </div>
  </nav>
</>  )
}