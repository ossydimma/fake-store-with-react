import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Nav from './component/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    <Nav/>
    </>
  )
}

export default App
