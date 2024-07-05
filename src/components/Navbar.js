import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <img
            className="h-8 w-auto"
            src="logo.png"
            alt="Dimitrij Fedoryno"
          />
          <div className="text-white font-bold text-xl">DIY Kalkulačka</div>
        </div>
      </Link>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link
            to="/kalkulacka"
            className="text-white px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Kalkulačka</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link
            to="/faq"
            className="text-white px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">FAQ</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link
            to="/contact"
            className="text-white px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Kontakt</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="space-y-1 px-2 pb-3 pt-2 text-center">
          <Link
            to="/"
            className="block text-white px-3 py-2 rounded-md text-base font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link
            to="/faq"
            className="block text-white px-3 py-2 rounded-md text-base font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">FAQ</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link
            to="/contact"
            className="block text-white px-3 py-2 rounded-md text-base font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Kontakt</span>
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
