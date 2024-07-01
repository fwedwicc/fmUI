import { motion } from 'framer-motion';
import React from 'react';
import { Navbar, Card } from '../components';
import { componentData } from '../constants';

const Components = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className='pt-[4.5rem] px-[0.8rem]'>
        <div className='bg-white border border-neutral-300/40 py-12 px-24 rounded-[1rem] flex flex-col'>
          <div className='space-y-10'>
            <div className='space-y-6'>
              <h1 className='text-[2.5rem] leading-none font-semibold'>Elements</h1>
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                {Object.keys(componentData).map(key => (
                  <Card
                    key={key}
                    link={`/components/${key}`}
                    title={componentData[key].cardTitle}
                    desc={componentData[key].cardDescription}
                    numOfComps={componentData[key].tabs.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Components;
