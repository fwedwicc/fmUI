import { motion } from 'framer-motion';
import React from 'react';
import { Navbar, Card, Footer } from '../components';
import { elementsData, templatesData } from '../constants';

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
        <div className='bg-white border border-neutral-300/40 py-12 lg:px-24 md:px-12 px-4 rounded-[1rem] flex flex-col'>
          <div className='space-y-10'>
            {/* Rendered Elements */}
            <div className='space-y-6'>
              <h1 className='text-[2.5rem] leading-none font-semibold'>Components</h1>
              <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
                {Object.keys(elementsData).map(key => (
                  <Card
                    key={key}
                    link={`/components/${key}`}
                    thumbnail={true}
                    img={elementsData[key].cardImage}
                    alt={elementsData[key].ImageAlt}
                    title={elementsData[key].cardTitle}
                    desc={elementsData[key].cardDescription}
                    numOfComps={elementsData[key].tabs.length}
                  />
                ))}
              </div>
            </div>
            {/* Rendered Templates */}
            <div className='space-y-6'>
              <h1 className='text-[2.5rem] leading-none font-semibold'>Templates</h1>
              <div className='grid lg:grid-cols-3 grid-cols-2 gap-4'>
                {Object.keys(templatesData).map(key => (
                  <Card
                    key={key}
                    link={`/components/${key}`}
                    title={templatesData[key].cardTitle}
                    desc={templatesData[key].cardDescription}
                    numOfComps={templatesData[key].tabs.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default Components;
