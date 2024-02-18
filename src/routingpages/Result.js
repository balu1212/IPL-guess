import React, { useContext } from "react";
import { context } from "../App";
import { useNavigate } from "react-router-dom";
import { data } from "../data";
const Result=()=>
{
    const navigate=useNavigate();
    const{count,setCount}=useContext(context);
    return (
        <div> 
         <h1>Count value is : {count}</h1>
         <h2>Your Favorite team is : {data[count-1]}</h2>
         <button onClick={()=>{navigate('/');setCount(count*0)}}>Go To Homepage</button>
        </div>);
     
}
export default Result;