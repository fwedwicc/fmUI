import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
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
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:type" element={<ComponentOverview />} />
        </Routes>
      </BrowserRouter>
    </motion.div>
  );
};

export default App;
