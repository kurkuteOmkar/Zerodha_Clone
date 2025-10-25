export default function Universe(){
    return(
        <div className="container">
            <div style={{textAlign:"center",}}>
            <h1 style={{fontSize:"25px",marginBottom:"20px",fontWeight:"450"}}>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
           <div className="row">

            <div className="col-4">

                <div style={{marginTop:"40px"}}>
              <a href=""> <img src="media/images/smallcaseLogo.png" style={{width:"60%",height:"50%"}} alt="" /></a>
            <p className="text-small text-muted mt-4">Thematic investment platform</p>
                </div>
              
                <div style={{marginTop:"40px"}}>
              <a href=""> <img src="media/images/zerodhaFundhouse.png" style={{width:"60%",height:"50%"}} alt="" /></a>
            <p className="text-small text-muted mt-4">Asset management</p>
                </div>
            </div>  

            <div className="col-4">

            <div style={{marginTop:"40px"}}>
              <a href=""> <img src="media/images/streakLogo.png" style={{width:"40%",height:"50%"}} alt="" /></a>
            <p className="text-small text-muted mt-4">Algo & strategy platform</p>
                </div>
                <div style={{marginTop:"40px"}}>
              <a href=""> <img src="media/images/goldenpiLogo.png" style={{width:"60%",height:"50%"}}  alt="" /></a>
            <p className="text-small text-muted mt-4">Bonds trading platform</p>
                </div>
                </div>

            <div className="col-4">
            <div style={{marginTop:"40px"}}>
              <a href=""> <img src="media/images/sensibullLogo.svg" style={{width:"60%",height:"50%"}}  alt="" /></a>
            <p className="text-small text-muted mt-4">Option trading platform</p>
                </div>
                <div style={{marginTop:"40px"}}>
              <a href=""> <img src="media/images/dittoLogo.png" style={{width:"50%",height:"40%"}}  alt="" /></a>
            <p className="text-small text-muted mt-4">Insurance</p>
            </div>
                </div>
           </div>
           <div style={{textAlign:"center" ,marginTop:"50px",marginBottom:"50px"}}>
           <button className="p-2 fs-5" style={{width:"25%",backgroundColor:"blue",color:"white"}}>Signup now  </button>
           </div>
        </div>
    )
}