import React from 'react'
import { fmUILogo } from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-12 lg:px-24 md:px-12 px-6'>
      <div className='flex md:flex-row flex-col gap-7 justify-between md:items-end items-start'>
        <div className='space-y-4'>
          <Link to='/fmUI/home'>
            <img src={fmUILogo} alt="fmUI Logo" className='w-auto lg:h-7 md:h-7 h-5' />
          </Link>
          <p className='text-sm w-full max-w-md'>fmUI: a project aimed at providing a diverse range of open-source Tailwind CSS components and templates for seamless web development.</p>
        </div>
        <span className='text-xs'>Designed and developed by <strong><a href="https://github.com/fwedwicc" target='_blank' rel='noopener noreferrer'>Frederick Moreno</a></strong></span>
      </div>
    </footer>
  )
}

export default Footer
