
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Book from './pages/Book'
import Auth from './pages/Auth'
import Contact from './pages/Contact'
import PNF from './pages/PNF'
import { useState } from 'react'
import Loader from './components/Loader'
import { ToastContainer } from 'react-toastify'
import Profile from './pages/Profile'
import SingleBook from './pages/SingleBook'





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
     // set flag
      <Route path='/register' element={<Auth  insideRegister={true} />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/view/:id/book' element={<SingleBook/>}/>

      <Route path='/*' element={<PNF/>} />
  </Routes>
<ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>


    </>
  )
}

export default App
