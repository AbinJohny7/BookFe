import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-3 bg-gray-900 p-10 text-white'>
    <div>
      <h4>About As</h4>
      <p className='mt-4 text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem veniam deserunt quisquam eius ad hic maxime dicta ipsum nemo itaque necessitatibus quas nobis, illum voluptate, pariatur recusandae alias harum!
      </p>
    </div>
    <div className='flex justify-center'>
      <div  className='mt-4 '>
        <h4>NEWSLETTER</h4>
        <p className='mt-4 text-justify'>Stay updated with our latest trends</p>
        <div className='flex mt-3'>
          <input placeholder='Email ID' className='bg-white placeholder-gray-600 p-2' type="text" />
          <button className='bg-yellow-300 py-2 px-3 text-black'>
            <span > <FontAwesomeIcon icon={faArrowRight} /> </span>
          </button>
        </div>
      </div>
    </div>
    <div className='mt-5'>
      <h4>FOLLOW US</h4>
      <p className='mt-4'>Let us be social</p>
      <div className='flex mt-3'>
         <span><FontAwesomeIcon icon={faInstagram} /></span>
                <span><FontAwesomeIcon icon={faXTwitter} /></span>
                  <span><FontAwesomeIcon icon={faFacebook} /></span>
                  <span><FontAwesomeIcon icon={faLinkedin} /></span>

      </div>
    </div>
    </div>
    <div className='bg-black p-3 flex justify-center items-center text-white'>
      <h6 className='text-center  '>Copyright © 2025 All rights reserved | This website is made with by Abin </h6>

    </div>
    </>
  )
}

export default Footer