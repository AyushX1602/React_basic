import { useRef , useState } from "react"
import './App.css'

function App(){
const inputRef = useRef();

function focusonsubmit(){
  inputRef.current.focus();
}
  return <div>
    signup form
    <input ref={inputRef} type="text"></input>
    <input type="text"></input>
    <button onClick={focusonsubmit}>submit</button>
  </div>
}

export default App
