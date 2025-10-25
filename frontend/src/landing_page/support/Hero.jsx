
export default function Hero(){
    return (
        <section  id="supportHero">
        <div className="row p-5" id="supportWrapper">
              <h4 className="fs-2"> Support Portal</h4><br/>
              <a href="">Track Ticket</a>
      </div>
     <div className="row p-3 m-3" >
     <div className="col-6 p-5">
        <h3 className="fs-3">Search for an answer of browse help topics to create a table</h3>
        <input type="text" placeholder="Eg. how do I activate FSO"/><br/>
        <a href="">Track account opening</a>
        <a href="">Track segment activation</a>
        <a href="">Intraday margins</a>
        <a href="">Kite user manual</a>
     </div>
     <div className="col-6 p-5 mb-3" >
     <h3 className="fs-3">Featured</h3>
    <ol type="1">
     <li><a href="">Current Takeover and DeListing - January 2024</a></li>
     <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
     </ol>
     </div>

              <h2 className="fs-2"> Support Portal</h2><br/>
              <a href="">Track Ticket</a>
      </div>
      </section>
    )
}