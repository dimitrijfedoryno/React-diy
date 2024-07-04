import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 animate-slide-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Dimitrije DIY Kalkulačka</div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/faq" className="text-white">FAQ</Link>
          <Link to="/contact" className="text-white">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
