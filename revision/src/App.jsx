import React from "react"
import {Routes, Route, Navigate} from 'react-router-dom'
import Features from "./components/Features";
import About from "./components/About";
import Layout from "./Layout";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  )
}

export default App
