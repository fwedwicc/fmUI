import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComponentOverview from './pages/ComponentOverview';
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
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/component/:type" element={<ComponentOverview />} />
        </Routes>
      </Router>
    </motion.div>
  );
};

export default App;
