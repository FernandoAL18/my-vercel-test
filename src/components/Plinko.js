import React, { useState } from 'react';
import PlinkoBoard from './PlinkoBoard';
import PlinkoConfigurator from './PlinkoConfigurator';
import './Plinko.css';

const Plinko = () => {
  const [rows, setRows] = useState(8);
  const [risk, setRisk] = useState('Medium');
  const [betAmount, setBetAmount] = useState(0);

  const handleConfigChange = (newConfig) => {
    setRows(newConfig.rows);
    setRisk(newConfig.risk);
    setBetAmount(newConfig.betAmount);
  };

  return (
    <div className="plinko-container">
      <h1>Plinko Game</h1>
      <PlinkoConfigurator onConfigChange={handleConfigChange} />
      <PlinkoBoard rows={rows} risk={risk} betAmount={betAmount} />
    </div>
  );
};

export default Plinko;
