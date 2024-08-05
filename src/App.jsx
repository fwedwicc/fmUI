import React from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import useLenisScroll from './hooks/useLenisScroll';

const App = () => {
  useLenisScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default App;
