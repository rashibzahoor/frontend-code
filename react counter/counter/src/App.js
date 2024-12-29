import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setcount] =useState(0)
                                                                       //let count=15
  function add() {

                                                                    //console.log(count)
//setcount(count +1)
  setcount((prevcount)=>prevcount +1)
  setcount((prevcount)=>prevcount +1)
  setcount((prevcount)=>prevcount +1)
  setcount((prevcount)=>prevcount +1)
  
  }

  function sub() {

   // setcount(count - 1)
  
  setcount((prevcount)=>prevcount +1)
  setcount((prevcount)=>prevcount +1)
  setcount((prevcount)=>prevcount +1)
  setcount((prevcount)=>prevcount +1)

  }
  return (
    <>

      <h1>couner app</h1>
      <h2>count:{count}</h2>
      <button onClick={add}>add</button>  { }
      <button onClick={sub}>sub</button>
      <p>footer:{count}</p>
    </>
  );
}

export default App;
