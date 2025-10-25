export default function Team(){
    return (
        <div >
        <div className="container" >
            <div className="row" style={{borderBottom:"1px solid #EFEFEF",padding:"40px 0"}}>
                <h1 className=" p-5" style={{fontSize:"25px",margin:"5px auto",color:"#424242"}}>
                People
                </h1>
            </div>
            <div className="row text-muted "> 
                <div className="col fs-5" style={{paddingTop:"55px" ,textAlign:"center"}}>
                    <img src="media/images/nithinKamath.jpg" alt="" style={{borderRadius:"60%",objectFit:"cover",height:"300px",width:"300px"}}/>
                    <h1 style={{fontSize:"17px",color:"#424242",marginTop:"15px"}}>
                    Nithin Kamath
                </h1>
                <p style={{fontSize:"13px"}}>Founder, CEO</p>
                    </div>

                <div className="col fs-5" style={{paddingTop:"55px"}}>
               <p className="pt-3"> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
<br/></p>
<p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
<br/></p>
<p>Playing basketball is his zen.</p>
<p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
                </div>
           
        </div>
        </div>
        </div>
    )
}