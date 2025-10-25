import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="container p-5 text-center mb-5">
            
                <h1 className="mt-5">404 not found</h1><br ></br>
                <p>Sorry ,the page you are looking for does not exist.</p><br />
                <Link to="/"  className="p-2 fs-5" style={{width:"25%",backgroundColor:"blue",color:"white",borderRadius:"30px"}}>Go Home </Link>
        </div>
    )
}