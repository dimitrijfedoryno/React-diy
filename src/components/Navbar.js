import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">DIY E-Liquid Kalkulačka</div>
        <div className="space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/faq" className="text-white">FAQ</a>
          <a href="/contact" className="text-white">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
