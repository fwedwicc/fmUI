import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Badges01, { codeSnippet } from './application-ui/elements/badges/01/Badges01';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <>
      <div className='inline-flex p-1.5 border gap-2 rounded-[0.4rem]'>
        <motion.button
          className={`text-center px-4 py-2 rounded-md ${activeTab === 'preview' ? 'text-indigo-500 bg-indigo-500/10 font-medium' : 'text-gray-500'
            }`}
          onClick={() => setActiveTab('preview')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Preview
        </motion.button>
        <motion.button
          className={`text-center px-4 py-2 rounded-md ${activeTab === 'code' ? 'text-indigo-500 bg-indigo-500/10 font-medium' : 'text-gray-500'
            }`}
          onClick={() => setActiveTab('code')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Code
        </motion.button>
      </div>
      <div className="mt-3">
        <AnimatePresence mode="wait">
          {activeTab === 'preview' ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='border p-4'
            >
              <Badges01 />
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='border'
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
