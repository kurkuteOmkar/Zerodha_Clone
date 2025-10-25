import {Tooltip,Grow} from "@mui/material"
import { useState } from "react"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const WatchListItem=({stock})=>{
    const [showWatchlistAction,setShowWatchlistAction]=useState(false);
    const handleMouseEnter=(e)=>{
        setShowWatchlistAction(true);
    }
    const handleMouseExist=(e)=>{
        setShowWatchlistAction(false);
    }
    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExist} >
            <div className="item">
                <p className={stock.isDown?"down":"up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                   {stock.isDown?(
                    <KeyboardArrowUpIcon className="down"/>
                   ):( <KeyboardArrowDownIcon className="up"/>)}
                   <span className="price" >{stock.price}</span>
                </div>
            </div>
            {showWatchlistAction && <WatchListAction uid={stock.name}/>}
        </li>
    )
}
export default WatchListItem;

const WatchListAction=({uid})=>{
    return (
     <span className="actions">
        <span>
            <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                <button className="buy">Buy</button>
            </Tooltip>
            <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
                <button className="sell">Sell</button>
            </Tooltip>
            <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
                <button className="action">
                <BarChartIcon className="icon"/>
                </button>
            </Tooltip>
            <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                <button className=""><MoreHorizIcon className="icon"/></button>
            </Tooltip>

        </span>
     </span>
    )
}