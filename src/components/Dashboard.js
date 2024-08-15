import React from 'react';
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
  return (
    <div style={styles.dashboard}>
      <div style={styles.mainContainer}>
        <div style={styles.mainContent}>
          <div style={styles.popularSlotsSection}>
            <h3 style={styles.subHeading}>Slots</h3>
            <div style={styles.slotsContainer}>
              <div style={styles.slotCard}>
                <img 
                  src={wantedImage} 
                  alt="Wanted Dead Or A Wild" 
                  style={styles.slotImage}
                  onClick={() => window.location.href = "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=desktop&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"}
                />
              </div>
              <div style={styles.slotCard}>
                <img src={sweetBonanzaImage} alt="Sweet Bonanza 1000" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={gatesOfOlympusImage} alt="Gates of Olympus" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={leBanditImage} alt="Le Bandit" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={zeusVsHadesImage} alt="Zeus VS Hades Gods of War" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={firePortalsImage} alt="Fire Portals" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={sweetBonanzaImage2} alt="Sweet Bonanza" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={gatesOfOlympusImage2} alt="Gates of Olympus 1000" style={styles.slotImage} />
              </div>
              <div style={styles.fadeRight}></div> {/* Fade añadido */}
            </div>
          </div>

          <div style={styles.liveCasinoSection}>
            <h3 style={styles.subHeading}>Live Casino</h3>
            <div style={styles.slotsContainer}>
              <div style={styles.slotCard}>
                <img src={blackjackLiveImage} alt="Blackjack Live" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={rouletteLiveImage} alt="Roulette Live" style={styles.slotImage} />
              </div>
              <div style={styles.slotCard}>
                <img src={baccaratImage} alt="Baccarat" style={styles.slotImage} />
              </div>
              <div style={styles.fadeRight}></div> {/* Fade añadido */}
            </div>
          </div>
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
  mainContainer: {
    display: 'flex',
    flex: 1,
    transition: 'all 0.3s ease',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#151424',
    padding: '20px',
    overflowY: 'auto',
    transition: 'all 0.3s ease',
    color: '#ffffff',
  },
  popularSlotsSection: {
    marginBottom: '40px',
    position: 'relative', // Necesario para el fade
  },
  liveCasinoSection: {
    marginBottom: '40px',
    position: 'relative', // Necesario para el fade
  },
  subHeading: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  slotsContainer: {
    display: 'flex',
    gap: '15px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: '10px',
    scrollbarWidth: 'none',
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    position: 'relative', // Necesario para el fade
  },
  slotCard: {
    backgroundColor: 'transparent',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#ffffff',
    flex: '0 0 auto',
    width: '150px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  slotCardHover: {
    transform: 'translateY(-10px)',
  },
  slotImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '150px',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(128, 0, 128, 0.5)', // Sombra morada
    transition: 'transform 0.3s ease', // Efecto de levitación
  },
  fadeRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50px',
    height: '100%',
    backgroundImage: 'linear-gradient(to left, rgba(21, 20, 36, 1), rgba(21, 20, 36, 0))',
    pointerEvents: 'none',
  },
};

export default Dashboard;
