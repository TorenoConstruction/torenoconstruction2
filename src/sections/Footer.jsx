import React from 'react'
import { FaCopyright, FaInstagram, FaFacebook } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa6'


const Footer = () => {
  return (
    <>
      <div className='text-blue-800 flex justify-start items-center gap-2 p-5 '>
      <FaCopyright className='lg:size-5 size-8' />
      <p className='text-lg text-center'>Copyright 2024, TorenoConstructio, All Rights Reserved </p>
  
      <div className='text-blue-800 flex justify-end gap-2 p-5 '>
      <p className='text-lg text-center'>Follow Us</p>
      <Link to="https://www.instagram.com/"><FaInstagram className='lg:size-5 size-8' /></Link>
      <Link to="https://www.facebook.com"><FaFacebook className='lg:size-5 size-8'/></Link>
      </div>
      </div>

      {/* scroll to top button */}
      <div id='icon-box' className='bg-blue-800 text-black p-3 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer fixed lg:bottom-6 right-6
      bottom-6'>
      <Link to='home' spy={true} offset={-100} smooth={true}><FaArrowUp className='size-6'/></Link>

      </div>
    </>
  )
}

export default Footer