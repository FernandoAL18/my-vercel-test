import React from 'react';
import './WalletModal.css';

const WalletModal = ({ onClose }) => {
  return (
    <div className="wallet-modal">
      <div className="wallet-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Estimated Balance</h2>
        <p className="balance-amount">$0.00</p>
        <div className="crypto-container">
          {/* Add a loop here to dynamically list cryptos if needed */}
          <div className="crypto-item">BTC: 0.00</div>
          <div className="crypto-item">ETH: 0.00</div>
          <div className="crypto-item">USDT: 0.00</div>
          {/* Add more cryptos as needed */}
        </div>
        <div className="wallet-buttons">
          <button className="wallet-action-button">Deposit</button>
          <button className="wallet-action-button">Withdraw</button>
          <button className="wallet-action-button">Buy Crypto</button>
          <button className="wallet-action-button">Tip</button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
