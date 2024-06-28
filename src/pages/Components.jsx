import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components';

const Components = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className='pt-[4.5rem] px-[0.8rem]'>
        <div className='bg-white border border-neutral-300/40 p-12 rounded-t-[1rem] flex flex-col'>
          <div>
            <Link to={'/ui/badge'} className='p-4 inline-block border bg-zinc-700 text-white'>Badge components</Link>
            <Link to={'/ui/button'} className='p-4 inline-block border bg-zinc-700 text-white'>Button component</Link>
            <Link to={'/ui/checkbox'} className='p-4 inline-block border bg-zinc-700 text-white'>Checkbox component</Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Components
