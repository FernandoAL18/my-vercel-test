import React from 'react';
import logo from '../assets/icons/logo.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="Logo" style={styles.logo} />
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#0F0E18',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  logo: {
    width: '120px',
    height: 'auto',
  },
};

export default Header;
