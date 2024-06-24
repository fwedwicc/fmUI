import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-[5rem] leading-none font-black'>Home</h1>
      <p>Just a test.</p><br />

      <Link to={'/component/badge'} className='p-4 border bg-zinc-700 text-white'>Badge components</Link>
      <Link to={'/component/button'} className='p-4 border bg-zinc-700 text-white'>Button component</Link>
    </motion.div>
  );
}

export default Home;
