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
      title: 'What is fmUI and how can it help me?',
      content:
        'fmUI is a robust collection of free Tailwind CSS components and templates designed to streamline your development process. Whether you’re building websites, web apps, or any digital project, fmUI offers a diverse range of components and sample pages to help you create with ease and flexibility.',
    },
    {
      title: 'Why should I choose fmUI for my projects?',
      content:
        'fmUI stands out by offering a comprehensive set of easily customizable components that enhance productivity and elevate your design quality. By integrating fmUI into your workflow, you can accelerate your project development while maintaining a high standard of design and functionality.',
    },
    {
      title: 'Is fmUI available for free use?',
      content:
        "Absolutely! fmUI is completely free to use in both personal and commercial projects. We believe in providing valuable resources without any barriers, so you can focus on bringing your ideas to life without worrying about costs.",
    },
    {
      title: 'How can I start using fmUI in my projects?',
      content:
        'Getting started with fmUI is simple. Visit our website, explore the wide range of components available, and copy the code snippets directly into your project. Each component is designed to be intuitive and easy to integrate, so you can focus on building without any hassle.',
    },
    {
      title: 'Am I required to credit fmUI in my projects?',
      content:
        'While there is no obligation to credit fmUI in your projects, we truly appreciate any recognition you can provide. If you find fmUI helpful, consider starring our project on GitHub or sharing it with your community to help us reach more developers like you.',
    },
    {
      title: 'How can I show support for the fmUI project?',
      content:
        "Supporting fmUI is easy! You can star our project on GitHub, share it with your network, or simply spread the word among your peers. Your support helps us continue to develop and maintain fmUI, ensuring it remains a valuable resource for developers everywhere.",
    },
    {
      title: 'Can I customize fmUI components to fit my project’s needs?',
      content:
        'Yes, fmUI components are designed to be fully customizable. You can easily tweak the styling and functionality to align with your specific project requirements. This flexibility ensures that you can maintain your unique design aesthetic while benefiting from our ready-to-use components.',
    },
    {
      title: 'What makes fmUI different from other UI libraries?',
      content:
        'fmUI is crafted with a focus on simplicity, flexibility, and ease of use. Unlike other UI libraries that can be complex and overwhelming, fmUI offers a user-friendly experience with components that are quick to implement and adapt. Our goal is to help you build beautiful, functional projects with minimal effort.',
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
