import React, { useState } from 'react';

const Calculator = () => {
  const [nicotineBooster, setNicotineBooster] = useState('');
  const [vgRatio, setVgRatio] = useState('');
  const [pgRatio, setPgRatio] = useState('');
  const [desiredNicotine, setDesiredNicotine] = useState('');
  const [desiredVgPgRatio, setDesiredVgPgRatio] = useState('');
  const [totalEliquid, setTotalEliquid] = useState('');
  const [flavorPercentage, setFlavorPercentage] = useState('');

  const handleCalculate = () => {
    // Zde můžete implementovat logiku kalkulace e-liquidu
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">DIY E-Liquid Kalkulačka</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="number" 
          placeholder="Obsah nikotinu v boosterech (mg/ml)" 
          className="p-2 border border-gray-300 rounded" 
          value={nicotineBooster}
          onChange={(e) => setNicotineBooster(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Poměr VG v nikotin boosteru (%)" 
          className="p-2 border border-gray-300 rounded" 
          value={vgRatio}
          onChange={(e) => setVgRatio(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Poměr PG v nikotin boosteru (%)" 
          className="p-2 border border-gray-300 rounded" 
          value={pgRatio}
          onChange={(e) => setPgRatio(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Požadovaný obsah nikotinu (mg/ml)" 
          className="p-2 border border-gray-300 rounded" 
          value={desiredNicotine}
          onChange={(e) => setDesiredNicotine(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Požadovaný poměr VG/PG (%)" 
          className="p-2 border border-gray-300 rounded" 
          value={desiredVgPgRatio}
          onChange={(e) => setDesiredVgPgRatio(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Celkové množství e-liquidu (ml)" 
          className="p-2 border border-gray-300 rounded" 
          value={totalEliquid}
          onChange={(e) => setTotalEliquid(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Podíl příchuti (%)" 
          className="p-2 border border-gray-300 rounded" 
          value={flavorPercentage}
          onChange={(e) => setFlavorPercentage(e.target.value)}
        />
      </div>
      <button 
        onClick={handleCalculate} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Vypočítat
      </button>
    </div>
  );
};

export default Calculator;
