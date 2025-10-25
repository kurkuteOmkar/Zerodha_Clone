export default function Brokerage(){
    return(
        <>
        <div className="container">
            <div className="row p-5 mt-5 ">
                <div className="col-8 p-4">
              <a href="" style={{textDecoration:"none"}}> <h1 style={{fontSize:"28px",paddingTop:"30px"}}>Brokerage calculator</h1></a> 
              <ul style={{marginTop:"35px"}}>
                <li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</li><br/>
                <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li><br/>
                <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li><br/>
                <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li><br/>
                <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li><br/>
                <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li><br/>
                <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li><br/>
              </ul>
                </div>
                <div className="col-4 p-4">
                <a href="" style={{textDecoration:"none"}}><h1 style={{fontSize:"28px",paddingTop:"30px"}}>List of charges</h1></a>
                </div>
            </div>
        </div>
        </>
    )
}