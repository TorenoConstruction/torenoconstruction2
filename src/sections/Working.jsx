import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
  return (
    <div id='working' className='w-full bg-white'>
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
      <motion.h1 variants={slideUpVariants} 
      className='text-blue-500 text-2xl uppercase'>
        Step by step
      </motion.h1>
      <motion.h1 
      variants={slideUpVariants}
      className='text-blue-800 text-[40px] uppercase font-bold text-center'>
        how it's working
      </motion.h1>
      <motion.div
      variants={slideUpVariants}
      className='w-[120px] h-[6px] bg-blue-500'>
      </motion.div>
      {/*make div for services mapping from export file*/}
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={zoomInVariants}
      className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>
      {
        planning.map((item, index) =>(
          <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-blue-800 rounded-mg p-6'>
          <div>
            <item.icon className='size-[80px] bg-blue-500 hover:fill-white p-4 rounded-full cursor-pointer'/>
          </div>
          <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
          <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
          </div>
        ))
      }
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Working