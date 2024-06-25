import React from 'react'
import { fmUILogo } from '../assets'

const Navbar = () => {
  return (
    <div className='fixed flex w-full h-[4.5rem] justify-between items-center px-[4rem] backdrop-blur-md bg-neutral-50/20 z-50'>
      <img src={fmUILogo} alt="fmUI Logo" className='w-auto h-7' />
      <p>Test</p>
    </div>
  )
}

export default Navbar
