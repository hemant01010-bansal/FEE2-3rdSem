import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LogIn from './components/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LogIn/>
    <p>App Component</p>
    </>
  )
}

export default App
