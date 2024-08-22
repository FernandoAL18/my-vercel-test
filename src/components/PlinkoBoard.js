import React, { useEffect, useState } from 'react';
import './PlinkoBoard.css';

const PlinkoBoard = ({ rows, risk, betAmount }) => {
  const [ballPosition, setBallPosition] = useState(null);

  const initializeBoard = () => {
    const board = [];
    for (let i = 0; i < rows; i++) {
      board.push(new Array(i + 1).fill(0));
    }
    return board;
  };

  const dropBall = () => {
    let currentPos = Math.floor(Math.random() * rows);
    for (let i = 0; i < rows - 1; i++) {
      const direction = Math.random() > 0.5 ? 1 : -1;
      currentPos = Math.max(0, Math.min(currentPos + direction, i));
    }
    setBallPosition(currentPos);
  };

  useEffect(() => {
    if (ballPosition !== null) {
      dropBall();
    }
  }, [ballPosition]);

  return (
    <div className="plinko-board">
      {initializeBoard().map((row, rowIndex) => (
        <div key={rowIndex} className="plinko-row">
          {row.map((_, pegIndex) => (
            <div key={pegIndex} className="plinko-dot"></div>
          ))}
        </div>
      ))}
      {ballPosition !== null && (
        <div className="plinko-ball" style={{ left: `${ballPosition * 10}%` }}></div>
      )}
    </div>
  );
};

export default PlinkoBoard;
