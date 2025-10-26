import { useState,memo } from 'react'
// import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil'
import './App.css'

const  CurrentCount= memo (function ({count}){
  
  return <div>{count}</div>
})

const  Increase= memo (function ({setCount}) {
  
  function handleIncrease() {
    setCount((c) => c + 1);
  }
return <div>
  <button onClick={handleIncrease}>Increase</button>
</div>
})

const  Decrease= memo (function ({setCount}) {
  
  function handleDecrease() {
    setCount((c) => c - 1);
  }
  return <div>
    <button onClick={handleDecrease}>Decrease</button>
  </div>
})

function App() {
return (

  <Counter/>

)
}
function Counter() {
 const [count,setCount]=useState(0);

  return <div>

      <CurrentCount count={count}/>
        <Increase setCount={setCount}/>
      <Decrease setCount={setCount}/>
    
  </div>
}

const memorizedCurrentCount = memo(CurrentCount);
export default App

