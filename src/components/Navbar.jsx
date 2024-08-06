import React, { useState, useEffect } from 'react';
import { fmUILogo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome, HiCollection, HiHeart } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Active/inactive link styles
  function linkClasses(path) {
    return (location.pathname === path || (path === '/fmUI/home' && location.pathname === '/fmUI/'))
      ? 'inline-flex gap-2 items-center px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-100 hover:bg-neutral-900/90 border border-neutral-900 bg-neutral-700 font-medium rounded-md text-sm'
      : 'inline-flex gap-2 items-center px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md text-sm';
  }

  // Active/inactive span style
  const spanClasses = () => {
    return location.pathname.startsWith('/fmUI/components/')
      ? 'inline-flex gap-2 items-center px-2.5 py-1.5 text-zinc-100 border border-neutral-900 bg-neutral-700 font-medium rounded-md text-sm'
      : 'inline-flex gap-2 items-center px-2.5 py-1.5 text-zinc-600 bg-neutral-200 border border-neutral-300 font-medium rounded-md text-sm';
  };

  // To get the current path/loc
  const getPageName = () => {
    const basePath = '/fmUI'; // Your base path
    const path = location.pathname;
    const fullPath = path.startsWith(basePath) ? path : `${basePath}${path}`;

    switch (fullPath) {
      // Components
      case `${basePath}/components/alert`:
        return 'Alerts';
      case `${basePath}/components/avatar`:
        return 'Avatars';
      case `${basePath}/components/badge`:
        return 'Badges';
      case `${basePath}/components/breadcrumbs`:
        return 'Breadcrumbs';
      case `${basePath}/components/button`:
        return 'Buttons';
      case `${basePath}/components/checkbox`:
        return 'Checkboxes';
      case `${basePath}/components/inputField`:
        return 'Input Fields';
      case `${basePath}/components/navbar`:
        return 'Navbar';
      case `${basePath}/components/radio`:
        return 'Radio';
      case `${basePath}/components/tab`:
        return 'Tab';
      case `${basePath}/components/toggle`:
        return 'Toggles';
      // Templates
      case `${basePath}/components/authPage`:
        return 'Auth Pages';
      default:
        return <HiHeart className='w-[18px] h-auto' />;
    }
  };

  return (
    <div className={`fixed flex w-full h-[4.5rem] justify-between items-center lg:px-[7rem] md:px-[4rem] px-7 backdrop-blur-md bg-neutral-50/60 z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link to='/fmUI/home'>
        <img src={fmUILogo} alt="fmUI Logo" className='w-auto lg:h-7 md:h-7 h-5' />
      </Link>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden py-2 size-8 flex justify-center items-center bg-neutral-200/50 backdrop-blur-sm hover:bg-neutral-300/70 rounded-md focus:ring-2 focus:ring-neutral-300 text-neutral-800 z-50 transition duration-300 ease-in-out'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className='absolute top-full right-[27px] p-3 mt-4 w-52 bg-neutral-100 border border-neutral-200 rounded-lg shadow-lg md:hidden'>
          <div className='w-full gap-3 flex flex-col justify-center items-center'>
            <Link className={`${linkClasses('/fmUI/home')} w-full justify-center`} to='/fmUI/home'>
              <HiHome />
              Home
            </Link>
            <Link className={`${linkClasses('/fmUI/components')} w-full justify-center`} to='/fmUI/components'>
              <HiCollection />
              Components
            </Link>
            <span className={`${spanClasses()} w-full justify-center`}>
              {getPageName()}
            </span>
          </div>
          <div className='flex items-center gap-4 justify-center mt-5'>
            <span className='text-sm font-bold'>v1.0</span>
            <a href='https://github.com/fwedwicc/fmUI' target='_blank' rel='noopener noreferrer' className="block p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200 focus:ring-2 focus:ring-neutral-200">
              <FaGithub className="w-5 h-auto" />
            </a>
          </div>
        </motion.div>
      )}
      <div className='md:flex hidden gap-1.5 border p-1.5 rounded-lg items-center'>
        <Link className={linkClasses('/fmUI/home')} to='/fmUI/home'>
          <HiHome />
          Home
        </Link>
        <HiChevronRight />
        <Link className={linkClasses('/fmUI/components')} to='/fmUI/components'>
          <HiCollection />
          Components
        </Link>
        <HiChevronRight />
        <span className={spanClasses()}>
          {getPageName()}
        </span>
      </div>
      <div className='md:flex items-center gap-4 hidden'>
        <span className='text-sm font-bold'>v1.0</span>
        <a href='https://github.com/fwedwicc/fmUI' target='_blank' rel='noopener noreferrer' className="block p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200 focus:ring-2 focus:ring-neutral-200">
          <FaGithub className="w-5 h-auto" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
