
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Book from './pages/Book'
import Auth from './pages/Auth'
import Contact from './pages/Contact'
import PNF from './pages/PNF'
import { useState } from 'react'
import Loader from './components/Loader'




function App() {
const [showHome,setShowHome]=useState(false)
setTimeout(()=>{
  setShowHome(true)
},2000)

return (
    <>
  <Routes>
    <Route path="/" element={showHome?<Home/>: <Loader/> }/>
    <Route path='/books' element={<Book/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth/>} />
      

      <Route path='/*' element={<PNF/>} />
  </Routes>
    </>
  )
}

export default App
