import React from 'react'
import { Tab } from '../components'

const Interface = ({ title }) => {
  return (
    <div>
      <h1 className='text-[5rem] leading-none text-gray-600 font-black'>Interface</h1>
      <p className='text-gray-800'>Just a test.</p>
      <p className='text-gray-800'>{title}</p>
      <Tab />
    </div>
  )
}

export default Interface
