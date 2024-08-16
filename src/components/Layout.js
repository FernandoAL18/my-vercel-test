import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Ensure this component is correctly imported

const Layout = () => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header} onClick={() => navigate('/dashboard')}>
        <img src={require('../assets/icons/logo.png')} alt="Logo" style={styles.logo} />
      </header>
      <div style={styles.content}>
        <Outlet />
      </div>
      {isMobile && <MobileMenu />}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#171723',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#0F0E18',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
    width: '100%',
    cursor: 'pointer',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  content: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
};

export default Layout;
