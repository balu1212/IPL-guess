import React from 'react';
import {  useNavigate } from 'react-router-dom';
const Home=()=>
{
   const  navigate=useNavigate();
    return(
        <div>
            <h1>IPL-GUESS GAME</h1>
            <h2>Let's find your ipl team</h2> 
            <button onClick={()=>navigate("/1")}>NEXT</button>
        </div>
    )
}
export default Home;