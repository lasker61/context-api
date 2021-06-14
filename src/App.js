// import logo from './logo.svg';
import React, { createContext,useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

export const catagoryContext =createContext();

function App() {
  const[count,setCount] = useState(0);
  return (
    
  <catagoryContext.Provider value="laptop">

      <p>count value:{count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>

  </catagoryContext.Provider>
   
  );
}

export default App;
