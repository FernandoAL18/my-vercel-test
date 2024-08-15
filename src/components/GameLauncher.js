import React from 'react';
import logo from '../assets/icons/logo.png'; 

const GameLauncher = ({ gameUrl, gameTitle }) => {
  const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);

  const finalUrl = isMobileDevice() ? gameUrl.mobile : gameUrl.desktop;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </header>
      <div style={styles.content}>
        <div style={styles.launcher}>
          <iframe
            src={finalUrl}
            title={gameTitle}
            style={styles.iframe}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div style={styles.gameFooter}>
          <img src={logo} alt="Logo" style={styles.footerLogo} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#171723',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#0F0E18',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  content: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  launcher: {
    width: '80%',
    height: 'calc(100vh - 200px)',
    borderRadius: '5px 5px 0 0',
    overflow: 'hidden',
    backgroundColor: '#000',
    marginBottom: '0px',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  gameFooter: {
    width: '80%',
    height: '50px',
    backgroundColor: '#0F0E18',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 0 5px 5px',
    marginTop: '0px',
  },
  footerLogo: {
    width: '50px',
    opacity: '0.2',
  },
};

export default GameLauncher;
