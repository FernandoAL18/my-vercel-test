import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Layout.css';

// Import the icons used in the sidebar and header
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as GamesIcon } from '../assets/icons/games.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import userIcon from '../assets/icons/user.svg';
import menuIcon from '../assets/icons/menu.svg';
import backArrowIcon from '../assets/icons/back-arrow.svg';

const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [walletScreen, setWalletScreen] = useState('main'); // Controls which screen is shown in the wallet

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarCollapsed(true); // Collapse the sidebar on mobile
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsUserMenuOpen(false);
  };

  const openWallet = () => {
    setIsWalletOpen(true);
    setWalletScreen('main'); // Reset to main screen when wallet opens
  };

  const closeWallet = () => {
    setIsWalletOpen(false);
  };

  const goToDeposit = () => {
    setWalletScreen('deposit');
  };

  const goToMain = () => {
    setWalletScreen('main');
  };

  return (
    <div className={`layout-container ${isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
      {!isMobile && (
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
      )}
      <div className={`main-content ${isSidebarCollapsed || isMobile ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
        <header className={`header ${isSidebarCollapsed || isMobile ? 'header-collapsed' : 'header-expanded'}`}>
          <img 
            src={require('../assets/icons/logo.png')} 
            alt="Logo" 
            className="logo" 
            onClick={() => navigate('/dashboard')}
          />
          <button className="wallet-button" onClick={openWallet}>Wallet</button>
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
      {isWalletOpen && (
        <div className="wallet-modal">
          {walletScreen === 'main' && (
            <>
              <button className="close-button" onClick={closeWallet}>X</button>
              <div className="balance-title">Estimated Balance</div>
              <div className="balance-amount">$0.00</div>
              <div className="crypto-container">
                <div className="crypto-item">BTC</div>
                <div className="crypto-item">ETH</div>
                <div className="crypto-item">USDT</div>
              </div>
              <div className="wallet-buttons">
                <button onClick={goToDeposit}>Deposit</button>
                <button>Withdraw</button>
                <button>Buy Crypto</button>
                <button>Tip</button>
              </div>
            </>
          )}
          {walletScreen === 'deposit' && (
            <>
              <button className="back-button" onClick={goToMain}>
                <img src={backArrowIcon} alt="Back" className="back-icon" />
              </button>
              <div className="deposit-header">Depositar</div>
              <div className="crypto-selection">
                <div className="crypto-item">
                  <div className="crypto-info">
                    <div className="crypto-name">USDT</div>
                    <div className="crypto-fullname">USD Tether</div>
                  </div>
                </div>
                <div className="network-selection">
                  <span className="network-label">Red</span>
                  <span className="network-name">ETH</span>
                </div>
              </div>
              <div className="address-container">
                <span className="address-label">Tu dirección de depósito con USDT</span>
                <div className="address-wrapper">
                  <input
                    type="text"
                    readOnly
                    value="0x71e421c5300a70ff3189fdc0c512134b250a979d"
                    className="address-input"
                  />
                  <button className="copy-button">Copy</button>
                </div>
                <div className="qr-code-container">
                  <img src="[QR Code Image]" alt="QR Code" />
                </div>
              </div>
              <div className="deposit-note">
                Envía únicamente USDT a esta dirección, se necesitan 2 confirmaciones.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Layout;