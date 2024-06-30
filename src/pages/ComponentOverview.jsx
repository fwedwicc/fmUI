import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Navbar } from '../components';
import { componentData } from '../constants';
import { motion } from 'framer-motion';

const ComponentOverview = () => {
  const { type } = useParams();
  const { title, description, tabs } = componentData[type] || { title: 'Unknown Component', description: 'No component found for this type.', tabs: [] };

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
          <div className='gap-3 mb-8 grid lg:grid-cols-2 grid-cols-1'>
            <h1 className='text-[4rem] leading-none font-black col-span-2'>{title}</h1>
            <p>{description}</p>
          </div>
          {
            tabs.map((tab, index) => (
              <div key={index} className='mb-8'>
                <Tab
                  label={tab.label}
                  previewContent={<tab.component />}
                  codeSnippet={tab.codeSnippet}
                />
              </div>
            ))
          }
          <h1>Footah</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentOverview;
