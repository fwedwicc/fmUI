import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Hero, SampleCard, SampleCart, SampleChat, SampleFooter, SampleLogin, SampleModal } from '../components';

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
        <div className='bg-white border border-neutral-300/40 py-12 lg:px-16 md:px-12 px-4 rounded-[1rem] flex flex-col'>
          {/* Rendered Hero */}
          <Hero />
          {/* Interface Overview */}
          {/* <div className='grid grid-cols-3 grid-rows-4 mt-12'>
            <div className='col-span-1 row-span-2 pr-2.5 pb-2.5'>
              <SampleCard />
            </div>
            <div className='col-span-1 pb-2.5 px-2.5 border-l border-b'>
              <SampleModal />
            </div>
            <div className='col-span-1 row-span-3 border-l border-b pl-2.5 pb-2.5'>
              <SampleChat />
            </div>
            <div className='col-span-1 row-span-2 p-2.5 border-l border-b'>
              <SampleLogin />
            </div>
            <div className='col-span-1 row-span-1 pr-2.5 pt-2.5 pb-2.5 border-t border-b'>
              <SampleCart />
            </div>
            <div className='col-span-1 row-span-1'>

            </div>
            <div className='col-span-2 row-span-1 border-l pl-2.5 pt-2.5'>
              <SampleFooter />
            </div>
          </div> */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12'>
            <div className='col-span-1 self-start'>
              <div className='pr-2.5 pb-2.5'>
                <SampleCard />
              </div>
              <div className='pr-2.5 pt-2.5 pb-2.5 border-t border-b'>
                <SampleCart />
              </div>
            </div>
            <div className='col-span-1 border-b self-start'>
              <div className='pb-2.5 lg:px-2.5 pl-2.5 border-l border-b self-start'>
                <SampleModal />
              </div>
              <div className='lg:p-2.5 py-2.5 pl-2.5 border-l border-b self-start'>
                <SampleLogin />
              </div>
            </div>
            <div className='col-span-1 border-l border-b pl-2.5 pb-2.5 self-start'>
              <SampleChat />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;

