import React, { useState } from 'react';

const CoilCalculator = () => {
  const [material, setMaterial] = useState('Kanthal A1');
  const [awg, setAwg] = useState('');
  const [coilDiameter, setCoilDiameter] = useState('');
  const [numberOfWraps, setNumberOfWraps] = useState('');
  const [materialResistancePerFoot, setMaterialResistancePerFoot] = useState('');
  const [result, setResult] = useState(null);

  // AWG to mm conversion table
  const awgToMm = {
    20: 0.812,
    21: 0.723,
    22: 0.644,
    23: 0.573,
    24: 0.511,
    25: 0.455,
    26: 0.405,
    27: 0.361,
    28: 0.321,
    29: 0.286,
    30: 0.255,
  };

  // Resistances per meter for common coil materials (in ohms/meter)
  const materialResistances = {
    'Kanthal A1': 2.64,
    'Nichrome Ni80': 1.08,
    'Nickel Ni200': 0.06,
    'Titanium Ti1': 0.35,
    'Stainless Steel SS316': 0.73,
  };

  const handleCalculate = () => {
    const resistancePerMeter = materialResistances[material];
    const wireDiameter = awgToMm[awg]; // Convert AWG to mm
    if (!wireDiameter) {
      setResult('Invalid AWG value');
      return;
    }
    const wireLength = (Math.PI * (parseFloat(coilDiameter) + parseFloat(wireDiameter)) * parseFloat(numberOfWraps)) / 1000; // Length in meters
    const resistance = wireLength * resistancePerMeter;

    setResult(resistance.toFixed(2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Coil Wrapping Kalkulačka</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Materiál cívky</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          >
            <option value="Kanthal A1">Kanthal A1</option>
            <option value="Nichrome Ni80">Nichrome N80</option>
            <option value="Stainless Steel SS316">Stainless Steel SS316</option>
            <option value="Nickel Ni200">Nickel Ni200</option>
            <option value="Titanium Ti1">Titanium Ti1</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Odpor materiálu na 1 ft (Ω)</label>
          <input
            type="number"
            value={materialResistancePerFoot}
            onChange={(e) => setMaterialResistancePerFoot(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Průměr drátu (AWG)</label>
          <input
            type="number"
            value={awg}
            onChange={(e) => setAwg(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Velikost trnu</label>
          <input
            type="number"
            value={coilDiameter}
            onChange={(e) => setCoilDiameter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Počet otáček</label>
          <input
            type="number"
            value={numberOfWraps}
            onChange={(e) => setNumberOfWraps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
        >
          Vypočítat
        </button>
        {result && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-6">
            <p className="font-bold">Výsledek</p>
            <p>Odpor cívky: {result} Ω</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoilCalculator;
