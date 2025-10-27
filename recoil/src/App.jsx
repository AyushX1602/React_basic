import { useState, useEffect, memo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { evenSelector, countState } from './store/atoms/atoms'

function App() {
  return (
    <RecoilRoot>
      <div>
        <Button />
        <Counter />
        <IsEven />
      </div>
    </RecoilRoot>
  )
}

function Button() {
  const setCount = useSetRecoilState(countState)
  function increase() {
    setCount(c => c + 2)
  }
  function decrease() {
    setCount(c => c - 1)
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(countState)
  return <div>{count}</div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector)
  return <div>{even ? 'Even' : 'Odd'}</div>
}

export default App;

