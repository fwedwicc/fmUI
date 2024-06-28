import React from 'react';
import { fmUILogo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome, HiCollection } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) => {
    return location.pathname === path
      ? 'inline-flex gap-2 items-center px-2.5 py-1.5 transition duration-300 ease-in-out text-zinc-100 hover:bg-neutral-900/90 border border-neutral-900 bg-neutral-700 font-medium rounded-md text-sm'
      : 'inline-flex gap-2 items-center px-2.5 py-1.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md text-sm';
  };

  return (
    <div className='fixed flex w-full h-[4.5rem] justify-between items-center px-[4rem] backdrop-blur-md bg-neutral-50/20 z-50'>
      <img src={fmUILogo} alt="fmUI Logo" className='w-auto h-7' />
      <div className='flex gap-1.5 border p-1.5 rounded-lg items-center'>
        <Link className={linkClasses('/home')} to='/home'>
          <HiHome />
          Home
        </Link>
        <HiChevronRight />
        <Link className={linkClasses('/components')} to='/components'>
          <HiCollection />
          Components
        </Link>
        <HiChevronRight />
        <span className='inline-flex gap-2 items-center px-2.5 py-1.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md text-sm'>Test</span>
      </div>
      <p>Test</p>
    </div>
  );
}

export default Navbar;
