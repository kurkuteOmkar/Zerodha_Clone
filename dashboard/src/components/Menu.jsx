import { useState } from "react"
import {Link} from "react-router-dom";
export default function Menu(){
    const [selectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
    const handleMenuClick=(index)=>{
        setSelectedMenu(index);
    }
    const handleProfileClick=(index)=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen)
    };
    const menuClass="menu";
    const activeMenuClass="menu selected"
    const handleSignOut=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        window.location.href="http://localhost:5173/signin"
    }
    return(
        <div className="menu-container">
<img src="logo.png" style={{width:"50px"}} alt="logo image"/>
            <div className="menus">
                <ul>
                    <li>
                       <Link style={{textDecoration:"none"}} to="/" onClickCapture={()=>{handleMenuClick(0)}}> 
                       <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p></Link>
                    </li>
                    <li>
                       <Link style={{textDecoration:"none"}} to="/orders" onClickCapture={()=>{handleMenuClick(1)}}> 
                       <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p></Link>
                    </li>
                    <li>
                    <Link style={{textDecoration:"none"}} to="/holdings" onClickCapture={()=>{handleMenuClick(2)}}> 
                    <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p></Link>
                    </li>
                    <li>
                    <Link style={{textDecoration:"none"}} to="/positions" onClickCapture={()=>{handleMenuClick(3)}}> 
                    <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p></Link>
                    </li>
                    <li>
                    <Link style={{textDecoration:"none"}} to="/funds" onClickCapture={()=>{handleMenuClick(4)}}> 
                    <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p></Link>
                    </li>
                    <li>
                    <Link style={{textDecoration:"none"}} to="/apps" onClickCapture={()=>{handleMenuClick(5)}}> 
                    <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p></Link>
                    </li>
                    <li className={selectedMenu===5?activeMenuClass:menuClass} onClick={handleSignOut}>SignOut</li>
                </ul>
                <hr/>
                 <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
            </div>
        </div>
    )
}