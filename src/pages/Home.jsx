import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components';

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
        <div className='bg-white border border-neutral-300/40 p-12 rounded-t-[1rem]'>
          <h1 className='text-[5rem] leading-none font-black'>fmUI, crafted with Tailwind CSS.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis optio dolores illo suscipit atque exercitationem molestias magnam voluptates aspernatur.</p><br />
          <Link to={'/component/badge'} className='p-4 border bg-zinc-700 text-white'>Badge components</Link>
          <Link to={'/component/button'} className='p-4 border bg-zinc-700 text-white'>Button component</Link>
          <Link to={'/component/checkbox'} className='p-4 border bg-zinc-700 text-white'>Checkbox component</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
