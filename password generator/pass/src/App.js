import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length,setlength]=useState(4)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState('')
const passwordRef=useRef(null)
  const generatePassword=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed) str+="0123456789"
if(charallowed) str+="!@#$%^&*()_+]|?"
for(let i=1;i<length;i++){
const char=Math.floor(Math.random()* str.length +1)
pass +=str.charAt(char)
}

setpassword(pass)
},[length,numberallowed,charallowed])

const copyPasswordToClipboard=()=>{
window.navigator.clipboard.writeText(password)
passwordRef.current?.select()
}

useEffect(()=>{
generatePassword()

},[length,numberallowed,charallowed])
  return (
    <>
    <div>

<h1>password generator</h1>
<input type="text"

value={password}
placeholder='password'
readOnly
ref={passwordRef}

/>
<button onClick={copyPasswordToClipboard}>copy</button>
    </div>
<div>
  <input type="range" 
  min={6}
  max={8}
  value={length}
  onChange={(e)=>setlength(e.target.value)}
  />
  <label htmlFor="length">length:{length}</label>
</div>

<div>
<input type="checkbox" 
defaultChecked={numberallowed}
  onChange={()=>{

    setnumberallowed((prev)=>!prev) 
  }}
  />
  <label htmlFor="numbers">numbers</label>
</div>

<div>
<input type="checkbox" 
defaultChecked={charallowed}
  onChange={()=>{

    setcharallowed((prev)=>!prev) 
  }}
  />
  <label htmlFor="charinput">characters</label>
</div>

    </>

  )
}

export default App