import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'

const Components = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='p-8'
    >
      <Link to={'/ui/badge'} className='p-4 inline-block border bg-zinc-700 text-white'>Badge components</Link>
      <Link to={'/ui/button'} className='p-4 inline-block border bg-zinc-700 text-white'>Button component</Link>
      <Link to={'/ui/checkbox'} className='p-4 inline-block border bg-zinc-700 text-white'>Checkbox component</Link>
    </motion.div>
  )
}

export default Components
