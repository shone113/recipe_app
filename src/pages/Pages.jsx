import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Home';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import Searched from './Searched';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </AnimatePresence>

  )
}

export default Pages