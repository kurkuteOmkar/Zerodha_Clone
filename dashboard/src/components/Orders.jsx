import {Link} from "react-router-dom";
export default function Orders(){
    return (
        <div className="orders">
            <div className="no-orders">
                <p>You havn't placed any orders today</p>
                <Link to={"/"} className="btn">
                Get Started
                </Link>
            </div>
        </div>
    )
}