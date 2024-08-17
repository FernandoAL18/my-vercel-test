import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Layout.css';

// Importa los íconos que se utilizarán en el sidebar
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as GamesIcon } from '../assets/icons/games.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';

const Layout = () => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`layout-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <img src={require('../assets/icons/menu.svg')} alt="Toggle Sidebar" className="menu-icon" />
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
      <div className={`main-content ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <header className={`header ${isSidebarCollapsed ? 'header-collapsed' : ''}`}>
          <img 
            src={require('../assets/icons/logo.png')} 
            alt="Logo" 
            className="logo" 
            onClick={() => navigate('/dashboard')}
          />
        </header>
        <div className="content">
          <Outlet />
        </div>
      </div>
      {isMobile && <MobileMenu className="menu" />}
    </div>
  );
};

export default Layout;
