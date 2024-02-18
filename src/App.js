import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './routingpages/Home';
import Component2 from './routingpages/Component2';
import Component3 from './routingpages/Component3';
import Component4 from './routingpages/Component4';
import Componet1 from './routingpages/Componet1';
import { createContext, useState } from 'react';
import Result from './routingpages/Result';
export const context=createContext();
function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <context.Provider value={{count,setCount}}>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/1' element={<Componet1/>}/>
        <Route path='/2' element={<Component2/>}/>
        <Route path='/3' element={<Component3/>}/>
        <Route path='/4' element={<Component4/>}/>
        <Route path="/result" element={<Result/>}/>
       </Routes>
     
      </context.Provider>
    </div>
  );
}
export default App;
