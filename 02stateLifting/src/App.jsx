import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import GetName from './GetName'
import DisplayName from './DisplayName'

function App() {
  const [name, setName] = useState("");

  return (
    <>
    <GetName name={name} setName={setName}/>
    <DisplayName name={name}/>
    </>
  )
}

export default App
