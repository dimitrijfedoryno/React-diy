import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 animate-slide-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <div className="text-white font-bold text-xl">DIY Kalkulačka</div>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link
            to="/"
            className="text-white px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Home</span>
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
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
