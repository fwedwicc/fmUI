import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RxCode, RxEyeOpen } from "react-icons/rx";
import { BsClipboardPlus } from "react-icons/bs";

const Tab = ({ previewContent, codeSnippet, label }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        setTooltipText('Copied!');
        setTimeout(() => setTooltipText('Copy to clipboard'), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
      });
  };

  return (
    <>
      <div className='flex justify-between gap-2 items-end'>
        <h2 className='md:text-[1.5rem] text-[1.2rem] leading-none font-medium'>{label}</h2>
        <div className='space-x-2 flex'>
          <div className='inline-flex p-1.5 border border-neutral-400/40 gap-2 rounded-[0.4rem]'>
            <motion.button
              className={`inline-flex text-sm justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'preview' ? 'text-zinc-200 bg-neutral-700 font-medium' : 'text-zinc-600 bg-neutral-200 hover:bg-neutral-400/40 transition duration-300 ease-in-out'
                }`}
              onClick={() => setActiveTab('preview')}
              whileTap={{ scale: 0.95 }}
            >
              <RxEyeOpen />
              Preview
            </motion.button>
            <motion.button
              className={`inline-flex text-sm justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'code' ? 'text-zinc-200 bg-neutral-700 font-medium' : 'text-zinc-600 bg-neutral-200 hover:bg-neutral-400/40 transition duration-300 ease-in-out'
                }`}
              onClick={() => setActiveTab('code')}
              whileTap={{ scale: 0.95 }}
            >
              <RxCode />
              Code
            </motion.button>
          </div>
          <div className='relative'>
            <button
              className='p-1.5 border border-neutral-400/40 rounded-md h-full'
              onClick={handleCopyToClipboard}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span className='relative hover:bg-neutral-200 transition duration-300 ease-in-out rounded-[0.3rem] p-4 block w-full h-full'>
                <BsClipboardPlus className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5' />
              </span>
            </button>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  className='absolute bottom-full mb-2 -left-[23%] transform text-center -translate-x-1/2 bg-neutral-700 text-zinc-200 text-xs font-medium py-1 px-2 rounded'
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {tooltipText}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="mt-3 border border-neutral-400/40 rounded-lg">
        <AnimatePresence mode="wait">
          {activeTab === 'preview' ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='p-4 bg-white rounded-lg'
            >
              {previewContent}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='px-2'
            >
              <SyntaxHighlighter language="html" style={oneDark} className='rounded-lg'>
                {codeSnippet}
              </SyntaxHighlighter>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Tab;
