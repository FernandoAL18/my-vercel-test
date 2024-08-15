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
    padding: '5vh 0', // Ajuste en altura relativa al viewport
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  logo: {
    width: '20vw', // Ajuste en anchura relativa al viewport
    height: 'auto',
  },
  content: {
    marginTop: '2vh', // Añadir espacio entre el header y el contenido
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  launcher: {
    width: '90vw', // Anchura relativa a la pantalla del usuario
    height: '70vh', // Altura relativa a la pantalla del usuario
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
    width: '90vw', // Hacer coincidir el ancho con el launcher
    height: '7vh', // Ajuste en altura relativa al viewport
    backgroundColor: '#0F0E18',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 0 5px 5px',
    marginTop: '0px', 
  },
  footerLogo: {
    width: '10vw', // Ajuste en anchura relativa al viewport
    opacity: '0.2', // 90% de transparencia
  },
};


export default GameLauncher;
