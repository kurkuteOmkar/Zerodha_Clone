export default function Hero(){
    return (
        <div className="container p-5 text-center mb-5">
            <div  >
                <img src="media/images/homeHero.png" alt="Hero Image" style={{ height: "600px", objectFit: "cover" }}className="mb-5 img-fluid "/>
            </div>
                <h1 className="mt-5">Invest in everything</h1><br ></br>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more </p><br />
                <button className="p-2 fs-5" style={{width:"25%",backgroundColor:"blue",color:"white"}}>Signup now  </button>
        </div>
    )
}