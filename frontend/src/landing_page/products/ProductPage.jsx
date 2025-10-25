import Hero from "./Hero";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import RightSection from "./RightSection";
export default function ProductPage(){
    return (
        <>
       <Hero/>
       <LeftSection imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." link1="Try Demo" link2="Learn more" tryDemo="" learnMore="" googlePlay="" appStore=""/>
       <RightSection title="Console" content="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="Learn more" image="media/images/console.png"/>
       <LeftSection imageURL="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" link1="Coin" link2="" learnMore="" googlePlay="" appStore=""/>
       <RightSection title="Kite Connect API" content="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="Kite Connect" image="media/images/kiteconnect.png"/>
       <LeftSection imageURL="media/images/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""/>
       <p style={{marginTop:"100px",marginBottom:"100px",textAlign:"center"}}>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech blog.</a></p>
       <Universe/>
        </>
    )
}