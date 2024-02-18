import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { context } from "../App";
const Component2=()=>
{
    const navigate=useNavigate();
    const {count,setCount}=useContext(context);
   return(
    <div>
      <h3>GT</h3>
      <h3>MI</h3>
      <h3>RR</h3>
      <h3>CSK</h3>
      <h3>DC</h3>
      <h3>SRH</h3>
      <h4>Count Value : {count}</h4>
     <div>
     <button onClick={()=>{navigate("/3");setCount(count+2)}}>YES</button>
      <button onClick={()=>navigate("/3")}>NO</button>
     </div>
    </div>
   )
}
export default Component2;