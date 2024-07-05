// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Kalkulacka from './pages/Kalkulacka';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kalkulacka" element={<Kalkulacka />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="bg-gray-800 text-white py-4 text-center">
          © 2024 DIY Kalkulačka. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
