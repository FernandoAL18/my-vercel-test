import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';  // Importa el archivo CSS
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

  return (
    <div className="dashboard">
      <div className="main-container">
        <div className="main-content">
          <div className="popular-slots-section">
            <div className="title-container">
              <img src={slotsIcon} alt="Slots Icon" className="icon" />
              <h3 className="sub-heading">Slots</h3>
            </div>
            <div className="slots-wrapper">
              <div className="slots-container">
                <div className="slot-card" onClick={() => navigate('/game/wanted-dead-or-a-wild')}>
                  <img src={wantedImage} alt="Wanted Dead Or A Wild" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/sweet-bonanza')}>
                  <img src={sweetBonanzaImage} alt="Sweet Bonanza 1000" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/gates-of-olympus')}>
                  <img src={gatesOfOlympusImage} alt="Gates of Olympus" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/le-bandit')}>
                  <img src={leBanditImage} alt="Le Bandit" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/zeus-vs-hades')}>
                  <img src={zeusVsHadesImage} alt="Zeus VS Hades Gods of War" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/fire-portals')}>
                  <img src={firePortalsImage} alt="Fire Portals" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/rip-city')}>
                  <img src={ripCityImage} alt="Rip City" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/sugar-rush')}>
                  <img src={sugarRushImage} alt="Sugar Rush" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/fruit-party')}>
                  <img src={fruitPartyImage} alt="Fruit Party" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/fist-of-destruction')}>
                  <img src={fistOfDestructionImage} alt="Fist of Destruction" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/the-dog-house')}>
                  <img src={theDogHouseImage} alt="The Dog House" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/big-bass-splash')}>
                  <img src={bigBassSplashImage} alt="Big Bass Splash" className="slot-image" />
                </div>
                <div className="slot-card" onClick={() => navigate('/game/see-all')}>
                  <img src={seeAllImage} alt="See All" className="slot-image" />
                </div>
              </div>
              <div className="fade-right"></div>
            </div>
          </div>

          <div className="live-casino-section">
            <div className="title-container">
              <img src={liveCasinoIcon} alt="Live Casino Icon" className="icon" />
              <h3 className="sub-heading">Live Casino</h3>
            </div>
            <div className="slots-wrapper">
              <div className="slots-container">
                <div className="slot-card">
                  <img src={blackjackLiveImage} alt="Blackjack Live" className="slot-image" />
                </div>
                <div className="slot-card">
                  <img src={rouletteLiveImage} alt="Roulette Live" className="slot-image" />
                </div>
                <div className="slot-card">
                  <img src={baccaratImage} alt="Baccarat" className="slot-image" />
                </div>
              </div>
              <div className="fade-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
