import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Header = () => {
  return (
   <>
   <div className='flex justify-between items-center'>
    <img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXpuQU_VSCwtvRoBYAotTfMCqJhKtLXTAsg&s" alt="" />
    <h1 className='text-3xl font-bold'>Book Store</h1>
    <div>
      <span><FontAwesomeIcon icon={faInstagram} /></span>
        <span><FontAwesomeIcon icon={faXTwitter} /></span>
          <span><FontAwesomeIcon icon={faFacebook} /></span>
      <button className='border rounded-3xl font-bold  m-2 p-3 hover:bg-black hover:text-white'> <span>
       <FontAwesomeIcon icon={faUser} /> </span> Login</button>
    </div>
   </div>
   </>
  )
}

export default Header