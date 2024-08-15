import React from 'react';
import slotsIcon from '../assets/icons/slots.svg';
import liveCasinoIcon from '../assets/icons/livecasino.svg';
import logo from '../assets/icons/logo.png';
import wantedImage from '../assets/icons/wanteddeadorawild.png'; 
import sweetBonanzaImage from '../assets/icons/sweetbonanza1000.png';
import gatesOfOlympusImage from '../assets/icons/gatesofolympus.png'; 
import leBanditImage from '../assets/icons/lebandit.png';
import zeusVsHadesImage from '../assets/icons/zeusvshades.png';
import firePortalsImage from '../assets/icons/fireportals.png';
import sweetBonanzaImage2 from '../assets/icons/sweetbonanza.png';
import gatesOfOlympusImage2 from '../assets/icons/gatesofolympus1000.png';
import blackjackLiveImage from '../assets/icons/blackjacklive.png';
import rouletteLiveImage from '../assets/icons/roulettelive.png';
import baccaratImage from '../assets/icons/baccarat.png';

const Dashboard = () => {
  // Función para detectar si es móvil o desktop
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // URLS para los juegos
  const wantedDeadOrWildUrl = isMobileDevice()
    ? "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=mobile&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
    : "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=desktop&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api";

  const sweetBonanzaUrl = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitswx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD";

  const gatesOfOlympusUrl = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD";

  const leBanditUrl = isMobileDevice()
    ? "https://static-live.hacksawgaming.com/1309/1.16.2/index.html?language=en&channel=mobile&gameid=1309&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
    : "https://static-live.hacksawgaming.com/1309/1.16.2/index.html?language=en&channel=desktop&gameid=1309&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api";

  const zeusVsHadesUrl = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs15godsofwar&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD";

  const firePortalsUrl = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20portals&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD";

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </header>
      <div style={styles.mainContainer}>
        <div style={styles.mainContent}>
          <div style={styles.popularSlotsSection}>
            <div style={styles.titleContainer}>
              <img src={slotsIcon} alt="Slots Icon" style={styles.icon} />
              <h3 style={styles.subHeading}>Slots</h3>
            </div>
            <div style={styles.slotsWrapper}>
              <div style={styles.slotsContainer}>
                <div style={styles.slotCard}>
                  <img 
                    src={wantedImage} 
                    alt="Wanted Dead Or A Wild" 
                    style={styles.slotImage}
                    onClick={() => window.location.href = wantedDeadOrWildUrl}
                  />
                </div>
                <div style={styles.slotCard}>
                  <img 
                    src={sweetBonanzaImage} 
                    alt="Sweet Bonanza 1000" 
                    style={styles.slotImage}
                    onClick={() => window.location.href = sweetBonanzaUrl}
                  />
                </div>
                <div style={styles.slotCard}>
                  <img 
                    src={gatesOfOlympusImage} 
                    alt="Gates of Olympus" 
                    style={styles.slotImage}
                    onClick={() => window.location.href = gatesOfOlympusUrl}
                  />
                </div>
                <div style={styles.slotCard}>
                  <img 
                    src={leBanditImage} 
                    alt="Le Bandit" 
                    style={styles.slotImage}
                    onClick={() => window.location.href = leBanditUrl}
                  />
                </div>
                <div style={styles.slotCard}>
                  <img 
                    src={zeusVsHadesImage} 
                    alt="Zeus VS Hades Gods of War" 
                    style={styles.slotImage}
                    onClick={() => window.location.href = zeusVsHadesUrl}
                  />
                </div>
                <div style={styles.slotCard}>
                  <img 
                    src={firePortalsImage} 
                    alt="Fire Portals" 
                    style={styles.slotImage}
                    onClick={() => window.location.href = firePortalsUrl}
                  />
                </div>
                <div style={styles.slotCard}>
                  <img src={sweetBonanzaImage2} alt="Sweet Bonanza" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard}>
                  <img src={gatesOfOlympusImage2} alt="Gates of Olympus 1000" style={styles.slotImage} />
                </div>
              </div>
              <div style={styles.fadeRight}></div> {/* Fade añadido */}
            </div>
          </div>
              <div style={styles.fadeRight}></div> {/* Fade añadido */}
            </div>
          </div>
        </div>
  );
};

const styles = {
    dashboard: {
      backgroundColor: '#0E0D17',
      color: '#ffffff',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#151424',
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    logo: {
      width: '120px',
      height: 'auto',
    },
    mainContainer: {
      display: 'flex',
      flex: 1,
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#151424',
      padding: '20px',
      overflowY: 'auto',
      transition: 'all 0.3s ease',
      color: '#ffffff',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    icon: {
      width: '24px',
      height: '24px',
      marginRight: '10px',
    },
    popularSlotsSection: {
      marginBottom: '40px',
      position: 'relative',
    },
    slotsWrapper: {
      display: 'flex',
      overflowX: 'scroll',
      paddingBottom: '10px',
    },
    slotsContainer: {
      display: 'flex',
      gap: '10px',
    },
    slotCard: {
      minWidth: '150px',
      cursor: 'pointer',
    },
    slotImage: {
      width: '100%',
      borderRadius: '8px',
    },
    fadeRight: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50px',
      height: '100%',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0), #0E0D17)',
      pointerEvents: 'none',
    },
    liveCasinoSection: {
      marginBottom: '40px',
      position: 'relative',
    },
    subHeading: {
      fontSize: '20px',
      fontWeight: '600',
      marginLeft: '10px',
    },
  };
  

export default Dashboard;
