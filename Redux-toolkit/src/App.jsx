import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import Navbar from './Navbar'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
    <h1>App Component</h1>
    <p>{count}</p>
    <button onClick={() => dispatch(increment())}>increment</button><br/>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    <Navbar/>
    </>
  )
}

export default App
