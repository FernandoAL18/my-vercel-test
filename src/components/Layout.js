import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Layout.css';

// Import the icons used in the sidebar and header
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as GamesIcon } from '../assets/icons/games.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import userIcon from '../assets/icons/user.svg';
import menuIcon from '../assets/icons/menu.svg';

const Layout = () => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsUserMenuOpen(false); // Close the menu after selection
  };

  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
  };

  return (
    <div className={`layout-container ${isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <img src={menuIcon} alt="Toggle Sidebar" className="menu-icon" />
        </button>
        <ul className="sidebar-menu">
          <li onClick={() => navigate('/dashboard')}>
            <DashboardIcon className="sidebar-icon" />
            {!isSidebarCollapsed && <span>Dashboard</span>}
          </li>
          <li onClick={() => navigate('/all-slots')}>
            <GamesIcon className="sidebar-icon" />
            {!isSidebarCollapsed && <span>All Slots</span>}
          </li>
          <li onClick={() => navigate('/settings')}>
            <SettingsIcon className="sidebar-icon" />
            {!isSidebarCollapsed && <span>Settings</span>}
          </li>
        </ul>
      </aside>
      <div className={`main-content ${isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
        <header className={`header ${isSidebarCollapsed ? 'header-collapsed' : 'header-expanded'}`}>
          <img 
            src={require('../assets/icons/logo.png')} 
            alt="Logo" 
            className="logo" 
            onClick={() => navigate('/dashboard')}
          />
          
          {/* Wallet Button */}
          <button className="wallet-button" onClick={toggleWalletModal}>
            Wallet
          </button>

          <div className="user-menu-wrapper">
            <img 
              src={userIcon} 
              alt="User Menu" 
              className="user-icon" 
              onClick={toggleUserMenu} 
            />
            {isUserMenuOpen && (
              <div className="user-menu">
                <ul>
                  <li onClick={() => handleMenuItemClick('/wallet')}>Wallet</li>
                  <li onClick={() => handleMenuItemClick('/vault')}>Vault</li>
                  <li onClick={() => handleMenuItemClick('/vip')}>VIP</li>
                  <li onClick={() => handleMenuItemClick('/affiliate')}>Affiliate</li>
                  <li onClick={() => handleMenuItemClick('/statistics')}>Statistics</li>
                  <li onClick={() => handleMenuItemClick('/transactions')}>Transactions</li>
                  <li onClick={() => handleMenuItemClick('/my-bets')}>My Bets</li>
                  <li onClick={() => handleMenuItemClick('/settings')}>Settings</li>
                  <li onClick={() => handleMenuItemClick('/live-support')}>Live Support</li>
                  <li onClick={() => handleMenuItemClick('/logout')}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <div className="content">
          <Outlet />
        </div>
      </div>
      {isMobile && <MobileMenu className="menu" />}

      {/* Wallet Modal */}
      {isWalletModalOpen && (
        <div className="wallet-modal">
          <div className="wallet-modal-content">
            <button className="wallet-modal-close" onClick={toggleWalletModal}>×</button>
            <h2>Estimated Balance</h2>
            <div className="wallet-balance">0.00 USD</div>
            <div className="crypto-container">
              {/* Crypto balances should be dynamically populated here */}
              <div className="crypto-item">Bitcoin: 0.00 BTC</div>
              <div className="crypto-item">Ethereum: 0.00 ETH</div>
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
      )}
    </div>
  );
};

export default Layout;
