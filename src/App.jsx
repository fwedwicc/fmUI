import React from 'react'
import { Tab } from './components'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='p-4' // Initial
    >
      <h1 className='text-[5rem] leading-none text-gray-600 font-black'>Just a test.</h1>
      <Tab />
    </motion.div>
  )
}

export default App
