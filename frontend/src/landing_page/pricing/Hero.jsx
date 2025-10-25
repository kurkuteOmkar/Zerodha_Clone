export default function Hero(){
    return (
        <>
        <div className="container">
            <div className="text-center " style={{marginTop:"55px",marginBottom:"170px"}}>
        <h1 style={{fontSize:"28px",paddingTop:"30px"}}>Charges</h1>
        <p style={{fontSize:"17px",paddingTop:"7px"}} className="text-muted">List of all charges and taxes</p>
        </div>
        <div className="row text-center" >
            <div className="col-4">
                <img src="media/images/pricingEquity.svg" alt="" style={{width:"250px"}}/>
                <h1 style={{fontSize:"28px",paddingTop:"30px"}}>Free equity delivery</h1>
                <p style={{fontSize:"17px",paddingTop:"7px"}} className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4" >
                <img src="media/images/intradayTrades.svg" alt="" style={{width:"250px"}}/>
                <h1 style={{fontSize:"28px",paddingTop:"30px"}}>Intraday and F&O trades</h1>
                <p style={{fontSize:"17px",paddingTop:"7px"}} className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
                <img src="media/images/pricingEquity.svg" alt="" style={{width:"250px"}}/>
                <h1 style={{fontSize:"28px",paddingTop:"30px"}}>Free direct MF</h1>
                <p style={{fontSize:"17px",paddingTop:"7px"}} className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.

</p>
            </div>
            
        </div>
        </div>
        </>
    )
}