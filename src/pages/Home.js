import React from 'react';
import Calculator from '../components/Calculator';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vítejte na DIY E-Liquid Kalkulačka</h1>
      <Calculator />
    </div>
  );
};

export default Home;
