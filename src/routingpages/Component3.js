import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { context } from "../App";
const Component3=()=>
{
    const navigate=useNavigate();
    const{count,setCount}=useContext(context);
   return(
    <div>
      <h3>KKR</h3>
      <h3>DC</h3>
      <h3>RCB</h3>
      <h3>CSK</h3>
      <h3>SRH</h3>
      <h4>Count Value : {count}</h4>
     <div>
     <button onClick={()=>{navigate("/4");setCount(count+3)}}>YES</button>
      <button onClick={()=>navigate("/4")}>NO</button>
     </div>
    </div>
   )
}
export default Component3;