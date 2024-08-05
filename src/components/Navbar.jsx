import React, { useState, useEffect } from 'react';
import { fmUILogo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome, HiCollection, HiHeart } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
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
    return (location.pathname === path || (path === '/fmUI/home' && location.pathname === '/fmUI'))
      ? 'inline-flex gap-2 items-center px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-100 hover:bg-neutral-900/90 border border-neutral-900 bg-neutral-700 font-medium rounded-md text-sm'
      : 'inline-flex gap-2 items-center px-2.5 py-1.5 active:scale-95 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md text-sm';
  }

  // Active/inactive span style
  const spanClasses = () => {
    return location.pathname.startsWith('/fmUI/components')
      ? 'inline-flex gap-2 items-center px-2.5 py-1.5 text-zinc-100 border border-neutral-900 bg-neutral-700 font-medium rounded-md text-sm'
      : 'inline-flex gap-2 items-center px-2.5 py-1.5 text-zinc-600 bg-neutral-200 border border-neutral-300 font-medium rounded-md text-sm';
  };

  // To get the current path/loc
  const getPageName = () => {
    switch (location.pathname) {
      // Components
      case '/fmUI/components/alert':
        return 'Alerts';
      case '/fmUI/components/avatar':
        return 'Avatars';
      case '/fmUI/components/badge':
        return 'Badges';
      case '/fmUI/components/breadcrumbs':
        return 'Breadcrumbs';
      case '/fmUI/components/button':
        return 'Buttons';
      case '/fmUI/components/checkbox':
        return 'Checkboxes';
      case '/fmUI/components/inputField':
        return 'Input Fields';
      case '/fmUI/components/radio':
        return 'Radio';
      case '/fmUI/components/tab':
        return 'Tab';
      case '/fmUI/components/toggle':
        return 'Toggles';
      // Templates
      case '/fmUI/components/authPage':
        return 'Auth Pages';
      default:
        return <HiHeart />;
    }
  };

  return (
    <div className={`fixed flex w-full h-[4.5rem] justify-between items-center lg:px-[7rem] md:px-[4rem] px-7 backdrop-blur-md bg-neutral-50/60 z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link to='/fmUI/home'>
        <img src={fmUILogo} alt="fmUI Logo" className='w-auto lg:h-7 md:h-7 h-5' />
      </Link>
      <div className='flex gap-1.5 border p-1.5 rounded-lg items-center'>
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
      <header className='lg:flex md:flex items-center gap-4 hidden'>
        <span className='text-sm font-bold'>v1.0</span>
        <a href='https://github.com/fwedwicc/fmUI' target='_blank' rel='noopener noreferrer' className="block p-2 rounded-full transition duration-300 ease-in-out hover:bg-neutral-200 focus:ring-2 focus:ring-neutral-200">
          <FaGithub className="w-5 h-auto" />
        </a>
      </header>
    </div>
  );
}

export default Navbar;
