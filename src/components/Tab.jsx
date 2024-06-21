import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('preview');
  const codeSnippets = `
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
        </div>
        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <div class="flex items-center gap-x-6">
              <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                <p class="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
              </div>
            </div>
          </li>

          <!-- More people... -->
        </ul>
      </div>
    </div>
  `;

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
              <p>This is where the preview content will be displayed.</p>
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
              <SyntaxHighlighter language="html" style={duotoneDark} className='rounded-lg'>
                {codeSnippets}
              </SyntaxHighlighter>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Tab;
