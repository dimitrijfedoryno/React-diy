import React from 'react';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <br />
      <Testimonial />
      <br />
      &copy; {currentYear} <Link to="https://fedoryno.cz/">Dimitrij Fedoryno</Link> - <Link to="/">DIY Kalkulačka</Link> | Všechna práva vyhrazena
    </footer>
  );
};

export default Footer;
