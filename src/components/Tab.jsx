import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RxCode, RxEyeOpen } from "react-icons/rx";

const Tab = ({ previewContent, codeSnippet }) => {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <>
      <div className='inline-flex p-1.5 border border-neutral-400/40 gap-2 rounded-[0.4rem]'>
        <motion.button
          className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'preview' ? 'text-zinc-200 bg-neutral-700 font-medium' : 'text-zinc-600 bg-neutral-300 hover:bg-neutral-400/50 transition duration-300 ease-in-out'
            }`}
          onClick={() => setActiveTab('preview')}
          whileTap={{ scale: 0.95 }}
        >
          <RxEyeOpen />
          Preview
        </motion.button>
        <motion.button
          className={`inline-flex justify-center items-center gap-2.5 px-4 py-2 rounded-md ${activeTab === 'code' ? 'text-zinc-200 bg-neutral-700 font-medium' : 'text-zinc-600 bg-neutral-300 hover:bg-neutral-400/50 transition duration-300 ease-in-out'
            }`}
          onClick={() => setActiveTab('code')}
          whileTap={{ scale: 0.95 }}
        >
          <RxCode />
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
              {previewContent}
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
