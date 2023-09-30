import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Nav from './component/Nav'
import Home from './component/Home'
import Products from './component/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    <Nav/>
    <Home/>
    <Products/>
    </>
  )
}

export default App
