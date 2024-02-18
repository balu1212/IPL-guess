import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { context } from "../App";
const Component4=()=>
{
   const navigate=useNavigate();
   const {count,setCount}=useContext(context);
   return(
    <div>
      <h3>KXIP</h3>
      <h3>RR</h3>
      <h3>RCB</h3>
      <h3>CSK</h3>
      <h3>SRH</h3>
      <h3>MI</h3>
      <h4>Count Value : {count}</h4>
     <div>
     <button onClick={()=>{navigate("/result");setCount(count+4)}}>YES</button>
      <button onClick={()=>navigate("/result")}>NO</button>
     </div>
    </div>
   )
}
export default Component4;