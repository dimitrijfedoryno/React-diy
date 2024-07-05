import React from 'react';
import Background from '../components/Background';
import LiquidCalculator from '../components/LiquidCalculator';

const Liquid = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
    <Background />
    <LiquidCalculator />
    </div>
    </>
  );
};

export default Liquid;
