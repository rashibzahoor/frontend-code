import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function handleAdd() {
    setCount(count=>count + 1)
    setCount(count=>count + 1)
    setCount(count=>count + 1)

  }
  function handleSub() {
    setCount(count - 1)
  }
  function handleReset() {
    setCount(0)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
export default App