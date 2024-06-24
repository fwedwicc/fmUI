import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../components';
import { componentData } from '../components/constants';
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
      <h1 className='text-[5rem] leading-none font-black'>{title}</h1>
      <p>{description}</p>
      {
        tabs.map((tab, index) => (
          <div key={index} className='mb-8'>
            <h2 className='text-[2.5rem] leading-none font-bold'>{tab.label}</h2>
            <Tab
              previewContent={<tab.component />}
              codeSnippet={tab.codeSnippet}
            />
          </div>
        ))
      }
      <h1>Footah</h1>
    </motion.div >
  );
};

export default ComponentOverview;
