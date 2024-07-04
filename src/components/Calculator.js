import React, { useState } from 'react';

const Calculator = () => {
  const [nicotineBooster, setNicotineBooster] = useState('');
  const [vgRatio, setVgRatio] = useState('');
  const [pgRatio, setPgRatio] = useState('');
  const [desiredNicotine, setDesiredNicotine] = useState('');
  const [desiredVgPgRatio, setDesiredVgPgRatio] = useState('');
  const [totalEliquid, setTotalEliquid] = useState('');
  const [flavorPercentage, setFlavorPercentage] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const vgPgRatio = desiredVgPgRatio.split('/');
    const desiredVg = parseFloat(vgPgRatio[0]);
    const desiredPg = parseFloat(vgPgRatio[1]);

    const totalMl = parseFloat(totalEliquid);
    const flavorMl = (parseFloat(flavorPercentage) / 100) * totalMl;
    const baseMl = totalMl - flavorMl;

    const nicotineBoosterMl = (parseFloat(desiredNicotine) * baseMl) / parseFloat(nicotineBooster);

    const result = {
      nicotineBoosterMl: nicotineBoosterMl.toFixed(2),
      vgMl: ((desiredVg / 100) * baseMl).toFixed(2),
      pgMl: ((desiredPg / 100) * baseMl).toFixed(2),
      flavorMl: flavorMl.toFixed(2),
    };

    setResult(result);
  };

  return (
    <div className="flex flex-col items-center">
      <img src="logo.png" alt="Logo" className="w-24 h-24 mb-8" />
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">DIY E-Liquid Kalkulačka</h1>
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
            <label className="block text-gray-700">Poměr VG v nikotin boosteru (%)</label>
            <input 
              type="number" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={vgRatio}
              onChange={(e) => setVgRatio(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Poměr PG v nikotin boosteru (%)</label>
            <input 
              type="number" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={pgRatio}
              onChange={(e) => setPgRatio(e.target.value)}
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
            <label className="block text-gray-700">Požadovaný poměr VG/PG (%)</label>
            <input 
              type="text" 
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={desiredVgPgRatio}
              onChange={(e) => setDesiredVgPgRatio(e.target.value)}
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
        {result && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Výsledek</h2>
            <p>Požadované množství nikotinového boosteru: {result.nicotineBoosterMl} ml</p>
            <p>Požadované množství VG: {result.vgMl} ml</p>
            <p>Požadované množství PG: {result.pgMl} ml</p>
            <p>Požadované množství příchuti: {result.flavorMl} ml</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
