import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { context } from "../App";
const Componet1=()=>
{
   const  navigate=useNavigate();
   const {count,setCount}=useContext(context);
   return(
    <div>
      <h3>LSG</h3>
      <h3>MI</h3>
      <h3>RCB</h3>
      <h3>CSK</h3>
      <h4>Count Value : {count}</h4>
     <div>
     <button onClick={()=>{navigate("/2");setCount(count+1)}}>YES</button>
      <button onClick={()=>navigate("/2")}>NO</button>
     </div>
    </div>
   )
}
export default Componet1