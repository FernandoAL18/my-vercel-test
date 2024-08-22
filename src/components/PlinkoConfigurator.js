import React from 'react';
import './PlinkoConfigurator.css';

const PlinkoConfigurator = ({ onConfigChange }) => {
  const handleConfigChange = (e) => {
    const newConfig = {
      rows: parseInt(e.target.rows.value, 10),
      risk: e.target.risk.value,
      betAmount: parseFloat(e.target.betAmount.value),
    };
    onConfigChange(newConfig);
  };

  return (
    <form className="plinko-configurator" onSubmit={handleConfigChange}>
      <label>
        Rows:
        <input type="number" name="rows" defaultValue={8} />
      </label>
      <label>
        Risk:
        <select name="risk" defaultValue="Medium">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <label>
        Bet Amount:
        <input type="number" name="betAmount" defaultValue={0.00} step="0.01" />
      </label>
      <button type="submit">Apply</button>
    </form>
  );
};

export default PlinkoConfigurator;
