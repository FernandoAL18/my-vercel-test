import React from 'react';
import { useNavigate } from 'react-router-dom';
import slotsIcon from '../assets/icons/slots.svg';
import liveCasinoIcon from '../assets/icons/livecasino.svg';
import wantedImage from '../assets/icons/wanteddeadorawild.png'; 
import sweetBonanzaImage from '../assets/icons/sweetbonanza1000.png';
import gatesOfOlympusImage from '../assets/icons/gatesofolympus.png'; 
import leBanditImage from '../assets/icons/lebandit.png';
import zeusVsHadesImage from '../assets/icons/zeusvshades.png';
import firePortalsImage from '../assets/icons/fireportals.png';
import ripCityImage from '../assets/icons/ripcity.png';
import sugarRushImage from '../assets/icons/sugarrush.png';
import fruitPartyImage from '../assets/icons/fruitparty.png';
import fistOfDestructionImage from '../assets/icons/fistofdestruction.png';
import theDogHouseImage from '../assets/icons/thedoghouse.png';
import bigBassSplashImage from '../assets/icons/bigbasssplash.png';
import seeAllImage from '../assets/icons/seeall.png';
import blackjackLiveImage from '../assets/icons/blackjacklive.png';
import rouletteLiveImage from '../assets/icons/roulettelive.png';
import baccaratImage from '../assets/icons/baccarat.png';

const Dashboard = () => {
  const navigate = useNavigate();

  const styles = {
    dashboard: {
      backgroundColor: '#171723',
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
      backgroundColor: '#171723',
      padding: '20px',
      overflowY: 'auto',
      transition: 'all 0.3s ease',
      color: '#ffffff',
    },
    popularSlotsSection: {
      marginBottom: '40px',
      position: 'relative',
    },
    liveCasinoSection: {
      marginBottom: '40px',
      position: 'relative',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    icon: {
      width: '20px',
      height: 'auto',
      marginRight: '10px',
    },
    subHeading: {
      fontSize: '20px',
    },
    slotsWrapper: {
      position: 'relative',
    },
    slotsContainer: {
      display: 'flex',
      gap: '3px',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      paddingBottom: '10px',
      scrollbarWidth: 'none',
      WebkitOverflowScrolling: 'touch',
      msOverflowStyle: 'none',
    },
    slotCard: {
      backgroundColor: 'transparent',
      padding: '10px',
      borderRadius: '10px',
      textAlign: 'center',
      color: '#ffffff',
      flex: '0 0 auto',
      width: '120px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    slotImage: {
      width: '110%',
      height: 'auto',
      maxWidth: '150px',
      borderRadius: '10px',
      boxShadow: '0px 4px 15px rgba(128, 0, 128, 0.5)',
      transition: 'transform 0.3s ease',
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

  return (
    <div style={styles.dashboard}>
      <div style={styles.mainContainer}>
        <div style={styles.mainContent}>
          <div style={styles.popularSlotsSection}>
            <div style={styles.titleContainer}>
              <img src={slotsIcon} alt="Slots Icon" style={styles.icon} />
              <h3 style={styles.subHeading}>Slots</h3>
            </div>
            <div style={styles.slotsWrapper}>
              <div style={styles.slotsContainer}>
                <div style={styles.slotCard} onClick={() => navigate('/game/wanted-dead-or-a-wild')}>
                  <img src={wantedImage} alt="Wanted Dead Or A Wild" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/sweet-bonanza')}>
                  <img src={sweetBonanzaImage} alt="Sweet Bonanza 1000" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/gates-of-olympus')}>
                  <img src={gatesOfOlympusImage} alt="Gates of Olympus" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/le-bandit')}>
                  <img src={leBanditImage} alt="Le Bandit" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/zeus-vs-hades')}>
                  <img src={zeusVsHadesImage} alt="Zeus VS Hades Gods of War" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/fire-portals')}>
                  <img src={firePortalsImage} alt="Fire Portals" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/rip-city')}>
                  <img src={ripCityImage} alt="Rip City" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/sugar-rush')}>
                  <img src={sugarRushImage} alt="Sugar Rush" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/fruit-party')}>
                  <img src={fruitPartyImage} alt="Fruit Party" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/fist-of-destruction')}>
                  <img src={fistOfDestructionImage} alt="Fist of Destruction" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/the-dog-house')}>
                  <img src={theDogHouseImage} alt="The Dog House" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/big-bass-splash')}>
                  <img src={bigBassSplashImage} alt="Big Bass Splash" style={styles.slotImage} />
                </div>
                <div style={styles.slotCard} onClick={() => navigate('/game/see-all')}>
                  <img src={seeAllImage} alt="See All" style={styles.slotImage} />
                </div>
              </div>
              <div style={styles.fadeRight}></div>
            </div>
          </div>

          <div style={styles.liveCasinoSection}>
            <div style={styles.titleContainer}>
              <img src={liveCasinoIcon} alt="Live Casino Icon" style={styles.icon} />
              <h3 style={styles.subHeading}>Live Casino</h3>
            </div>
            <div style={styles.slotsWrapper}>
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
              </div>
              <div style={styles.fadeRight}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
