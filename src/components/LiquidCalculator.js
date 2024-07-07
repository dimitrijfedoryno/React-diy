import React, { useState } from 'react';

const LiquidCalculator = () => {
  const [nicotineBooster, setNicotineBooster] = useState('20'); // Předvyplněná hodnota 20 mg/ml
  const [desiredNicotine, setDesiredNicotine] = useState('');
  const [totalEliquid, setTotalEliquid] = useState('');
  const [flavorPercentage, setFlavorPercentage] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const totalMl = parseFloat(totalEliquid);
    const flavorMl = (parseFloat(flavorPercentage) / 100) * totalMl;
    const baseMl = totalMl - flavorMl;

    const nicotineBoosterMl = (parseFloat(desiredNicotine) * baseMl) / parseFloat(nicotineBooster);

    const result = {
      nicotineBoosterMl: nicotineBoosterMl.toFixed(2),
      flavorMl: flavorMl.toFixed(2),
    };

    setResult(result);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">DIY E-Liquid Kalkulačka</h1>
        {result && (
          <>
          
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
          <h1 className="text-2xl font-bold mb-6 text-center">Výsledek</h1>
            <hr />
            <p><b>Množství příchuti:</b> {result.flavorMl} ml</p>
            <p><b>Množství nikotinového boosteru:</b> {result.nicotineBoosterMl} ml</p>
            <hr />
          </div>
          </>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Obsah nikotinu v boosterech (mg/ml)</label>
            <input 
              type="number" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={nicotineBooster}
              onChange={(e) => setNicotineBooster(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Požadovaný obsah nikotinu (mg/ml)</label>
            <input 
              type="number" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={desiredNicotine}
              onChange={(e) => setDesiredNicotine(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Celkové množství e-liquidu (ml)</label>
            <input 
              type="number" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={totalEliquid}
              onChange={(e) => setTotalEliquid(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Podíl příchuti (%)</label>
            <input 
              type="number" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={flavorPercentage}
              onChange={(e) => setFlavorPercentage(e.target.value)}
            />
          </div>
        </div>
        <button 
          onClick={handleCalculate} 
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Vypočítat
        </button>
      </div>
    </div>
  );
};

export default LiquidCalculator;
