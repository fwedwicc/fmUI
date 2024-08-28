import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ title, svg, children, isOpen, onClick, styles }) => {
  return (
    <div className={`w-full rounded-2xl overflow-hidden`}>
      <button
        className={`${styles} w-full flex justify-between items-center px-4 py-3 text-gray-800 font-medium focus:outline-none ${isOpen ? 'bg-neutral-50' : ''}`}
        onClick={onClick}
      >
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${isOpen ? 'text-neutral-700' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d={svg} />
          </svg>
          <span className={`md:text-base text-sm ${isOpen ? 'text-neutral-800' : 'text-neutral-700'}`}>{title}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`shrink-0 size-4 transition-opacity ${isOpen ? 'text-neutral-700' : 'text-neutral-400'}`}>
          {isOpen ? (
            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          )}
        </svg>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-8 pt-4 pb-8 bg-neutral-50">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqsData = [
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
    {
      title: 'Wachu gana du wedu bip bap bo? wigi wigi wigi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo consequatur soluta, totam beatae consectetur voluptatum dolor vel quasi, quod velit.',
    },
  ];

  return (
    <section className='flex flex-col md:gap-12 gap-10 justify-center items-center px-6'>
      {/* Title and Description */}
      <div className='flex flex-col items-center gap-3'>
        <h1 className='md:text-[5rem] text-[3rem] leading-none font-black'>FAQs</h1>
        <p className='text-center w-full max-w-xl'>These are the most commonly asked questions about fmUI. <br className='md:block hidden' />
        </p>
      </div>
      {/* Accordion */}
      <div className='w-full max-w-4xl'>
        {faqsData.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            isOpen={openIndex === index}
            styles={'pt-6 gap-12 text-start pr-7'}
            onClick={() => handleAccordionClick(index)}
          >
            <div className='md:text-sm text-xs text-neutral-600'>
              {accordion.content}
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default FAQs
