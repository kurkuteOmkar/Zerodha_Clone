
export default function Awards(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">        
                    <img src="media/images/largestBroker.svg" style={{width:"100%"}} alt="img" />
                </div>
                <div className="col-6 p-5 mt-3">  
                    <h1>Largest stock broker in India</h1>  
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all volumes in india daily by trading and investion in:</p>
                    <div className="row">
                        <div className="col-6">
                    <ul>
                        <li>
                            Futures and Options
                        </li>
                        <li>
                           Commodity derivatives
                        </li>
                        <li>
                            Currency derivatives
                        </li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                        <li>
                           Stocks & IPOs
                        </li>
                        <li>
                         Direct mutual funds
                        </li>
                        <li>
                            Bonds and Govt. Securities
                        </li>
                    </ul>
                    </div>
                    </div> 
                    <img src="media/images/pressLogos.png" style={{width:"99%"}} alt="" /> 
               </div>
            </div>
        </div>
    )
}