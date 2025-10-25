// import { holdings } from "../data/data"
import {useState,useEffect} from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
export default function Holdings(){
  const [allHoldings,setAllHoldings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/allHolding").then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data)
    })
  },[])
  const labels = allHoldings.map(stock => stock.name);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map(stock => Number(stock.price)),
        backgroundColor: "rgba(255,99,132,0.5)"
      }
    ]
  };
  
return(
    <>
    <h3 className="title">Holdings ({allHoldings.length})</h3>
     <div className="order-table">
        <table>
          <thead>
            <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th> Day chg.</th>
            </tr>
            </thead>
            <tbody>
            {allHoldings.map((stock,index)=>{
              const curValue=stock.price*stock.qty;
              const isProfit=curValue-stock.avg*stock.qty>=0;
              const profClass=isProfit?"profit":"loss";
              const dayClass=stock.isLoss?"loss":"profit";
               
              return (
                <tr key={index} className="">
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className="profClass">
                  {(curValue-stock.avg*stock.qty).toFixed(2)}
                </td>
                <td className="profClass">{stock.net}</td>
                <td className="dayClass"> {stock.day}</td>
            </tr>
              )
            })}
            </tbody>
        </table>
        <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
     </div>
    <VerticalGraph data={chartData}></VerticalGraph>
    </>
)
}