import React from 'react';
import { Link } from 'react-router-dom';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Navbar, Interface } from '../components';

const Home = () => {
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
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='col-span-1 space-y-6'>
              <div className='space-y-3'>
                <h1 className='text-[5rem] leading-none font-black'>fmUI, crafted with Tailwind CSS.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis optio dolores illo suscipit atque exercitationem molestias magnam voluptates aspernatur.</p>
              </div>
              <div className='space-x-3'>
                <button className='px-4 py-2.5 text-zinc-100 hover:bg-neutral-900/90 transition duration-300 ease-in-out bg-neutral-700 border border-neutral-900 font-medium rounded-md'>Explore components</button>
                <button className='px-4 py-2.5 transition duration-300 ease-in-out text-zinc-600 bg-neutral-200 border border-neutral-300 hover:bg-neutral-400/40 font-medium rounded-md'>View on GitHub</button>
              </div>
            </div>
            <div className='col-span-1 grid grid-cols-2 grid-rows-2'>
              <div className='col-span-1 row-span-1 border flex flex-col justify-center items-center'>
                <h1 className='text-[5rem] leading-none font-black'>50+</h1>
                <span>Total Components</span>
              </div>
              <div className='col-span-1 row-span-1 border flex flex-col justify-center items-center'>
                <h1 className='text-[5rem] leading-none font-black'>20+</h1>
                <span>Sample Pages</span>
              </div>
              <div className='col-span-2 row-span-1 border flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-[2.5rem] leading-none font-black'>All are Freemium</h1>
                <div className='gap-3 flex'>
                  <RiTailwindCssFill className='text-zinc-300 h-10 w-auto' />
                  <FaHtml5 className='text-zinc-300 h-10 w-auto' />
                </div>
              </div>
            </div>
          </div>
          <Interface />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;

{/* <Link to={'/component/badge'} className='p-4 inline-block border bg-zinc-700 text-white'>Badge components</Link>
              <Link to={'/component/button'} className='p-4 inline-block border bg-zinc-700 text-white'>Button component</Link>
              <Link to={'/component/checkbox'} className='p-4 inline-block border bg-zinc-700 text-white'>Checkbox component</Link> */}