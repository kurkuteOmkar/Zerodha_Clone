export default function Pricing(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab placeat temporibus sunt, in vel vitae! Iure ut tempore laborum eligendi.</p>
                    <a href="" style={{textDecoration:"none"}}>Try kit product</a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-2 border">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and <br/>direct ,mutual funds.</p>
                        </div>
                        <div className="col p-2 border">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}