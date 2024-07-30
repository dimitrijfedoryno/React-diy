import React from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      &copy; {currentYear} <Link to="https://fedoryno.cz/">Dimitrij Fedoryno</Link> - <Link to="/">DIY Kalkulačka</Link> | Všechna práva vyhrazena
    </footer>
  );
};

export default Footer;
