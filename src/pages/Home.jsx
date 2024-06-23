import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='text-[5rem] leading-none text-gray-600 font-black'>Home</h1>
      <p className='text-gray-800'>Just a test.</p><br />

      <Link to={'/component'} className='p-4 border bg-gray-800 text-white'>Badge component</Link>
      <Link to={'/component'} className='p-4 border bg-gray-800 text-white'>Button component</Link>
    </div>
  )
}

export default Home
