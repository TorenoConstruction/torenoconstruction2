import React from 'react'
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
    <div className='lg:w[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start'>
    <motion.div
    initial='hidden'
    whileInView='visible'
    variants={slideUpVariants}
    className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-500 text-2xl uppercase'>
        book your appointment
    
      </motion.h1>
      <motion.h1
      variants={slideUpVariants}
      className='text-blue-800 uppercase text-[40px] font-bold'>
        let's work together 
        <p className='text-[15px] text-blue-500'> Or rich us via: info@torenoconstruction.com</p>
      </motion.h1>
      {/* line */}
      <div className='w-[120px] h-[6px] bg-blue-500'></div> 
      {/*text under line*/}
      <p className='text-3xl italic text-gray-700 mt-[60px] mr-6'>We are the leader with 25 years of experience in the construction market!</p>
      </motion.div>
    <motion.div
    initial='hidden'
    whileInView='visible'
    variants={slideUpVariants}
    className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
      <motion.form
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      className='flex flex-col justify-center items-center gap-4 w-full'
      >
      <input type='text' placeholder='Enter Fullname' className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full ' />
      <input type='email' placeholder='Enter E-mail' className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full ' />
      <input type='number' placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full ' />
      <textarea name='' placeholder='Enter your message' id='' rows='4' 
      className='px-6 py-3 border-[2px] border-blue-800 text-blue-800 rounded-lg w-full' />
      <motion.button
      variants={zoomInVariants}
      className='bg-blue-800 hover:bg-blue-500 hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full '>
        Submit
      </motion.button>
      </motion.form>
      </motion.div>
    

    </div>
    </div>
    
  )
}

export default Contact