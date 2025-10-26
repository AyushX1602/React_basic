import { useState } from 'react'
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { countState } from './store/atoms/atoms.js'

function App() {
return (
  <RecoilRoot>
  <Counter/>
  </RecoilRoot>
)
}
function Counter() {
 
  return <div>
  
      <CurrentCount/>
      <Increase/>
      <Decrease/>
    
  </div>
}

function CurrentCount(){
  const count = useRecoilValue(countState);
  return <div>{count}</div>
}

function Increase() {
  const setCount = useSetRecoilState(countState);
  function handleIncrease() {
    setCount((c) => c + 1)
  }
return <div>
  <button onClick={handleIncrease}>Increase</button>
</div>
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  function handleDecrease() {
    setCount((c) => c - 1)
  }
  return <div>
    <button onClick={handleDecrease}>Decrease</button>
  </div>
}
export default App

