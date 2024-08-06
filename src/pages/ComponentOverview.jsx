import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Navbar, Footer } from '../components';
import { elementsData, templatesData } from '../constants';
import useScrollToTop from '../hooks/useScrollToTop';
import { motion } from 'framer-motion';

const ComponentOverview = () => {
  useScrollToTop();
  const { type } = useParams();

  const elementData = elementsData[type];
  const templateData = templatesData[type];

  // Combine the data or use fallback values
  const title = elementData?.title || templateData?.title || 'Unknown Component';
  const description = elementData?.description || templateData?.description || 'No component found for this type.';
  const tabs = elementData?.tabs || templateData?.tabs || [];

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
          <div className='gap-3 mb-8 grid lg:grid-cols-2 grid-cols-1'>
            <h1 className='md:text-[4rem] text-[3rem] leading-none font-black col-span-2'>{title}</h1>
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
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default ComponentOverview;
