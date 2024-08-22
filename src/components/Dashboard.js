import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

// Importa las imágenes de los juegos
const sweetBonanzaImage = require('../assets/slots/sweetbonanza1000.png');
const gatesOfOlympusImage = require('../assets/slots/gatesofolympus.png');
const wantedDeadOrWildImage = require('../assets/slots/wanteddeadorawild.png');
const leBanditImage = require('../assets/slots/lebandit.png');
const zeusVsHadesImage = require('../assets/slots/zeusvshades.png');
const firePortalsImage = require('../assets/slots/fireportals.png');
const ripCityImage = require('../assets/slots/ripcity.png');
const sugarRushImage = require('../assets/slots/sugarrush.png');
const fruitPartyImage = require('../assets/slots/fruitparty.png');
const fistOfDestructionImage = require('../assets/slots/fistofdestruction.png');
const theDogHouseImage = require('../assets/slots/thedoghouse.png');
const bigBassSplashImage = require('../assets/slots/bigbasssplash.png');
const donnyDoughImage = require('../assets/slots/donnydough.png');
const sixSixSixImage = require('../assets/slots/sixsixsix.png');
const dragonsDomainImage = require('../assets/slots/dragonsdomain.png');
const taiTheToadImage = require('../assets/slots/taithetoad.png');
const moneyStacksImage = require('../assets/slots/moneystacks.png');
const oldGunImage = require('../assets/slots/oldgun.png');
const bowOfArtemisImage = require('../assets/slots/bowofartemis.png');
const slayersIncImage = require('../assets/slots/slayersinc.png');

// Importa las imágenes de Game Shows
const crazyTimeImage = require('../assets/live-casino/crazytime.png');
const lightningStormImage = require('../assets/live-casino/lightningstorm.png');
const lightningRouletteImage = require('../assets/live-casino/lightningroulette.png');
const stockMarketImage = require('../assets/live-casino/stockmarket.png');
const monopolyImage = require('../assets/live-casino/monopoly.png');
const xxxtremeLightningRouletteImage = require('../assets/live-casino/xxxtremelightningroulette.png');
const redDoorRouletteImage = require('../assets/live-casino/reddoorroulette.png');
const balloonRaceImage = require('../assets/live-casino/balloonrace.png');

// Importa las imágenes de promociones
const promoImage = require('../assets/slots/Artboard.png');
const promoImage2 = require('../assets/slots/Artboard2.png');
const promoImage3 = require('../assets/slots/Artboard3.png'); 
const promoImage4 = require('../assets/slots/Artboard4.png');


const originalsIcon = require('../assets/icons/originals.svg');
const liveCasinoIcon = require('../assets/icons/livecasino.svg');
const newReleasesIcon = require('../assets/icons/newreleases.svg');
const gameShowsIcon = require('../assets/icons/gameshows.svg');

const Dashboard = () => {
  const navigate = useNavigate();

  const popularSlots = [
    { id: 1, title: 'Sweet Bonanza', image: sweetBonanzaImage, path: '/game/sweet-bonanza' },
    { id: 2, title: 'Gates of Olympus', image: gatesOfOlympusImage, path: '/game/gates-of-olympus' },
    { id: 3, title: 'Wanted Dead or a Wild', image: wantedDeadOrWildImage, path: '/game/wanted-dead-or-a-wild' },
    { id: 4, title: 'Le Bandit', image: leBanditImage, path: '/game/le-bandit' },
    { id: 5, title: 'Zeus vs Hades: Gods of War', image: zeusVsHadesImage, path: '/game/zeus-vs-hades' },
  ];

  const liveCasinoGames = [
    { id: 1, title: 'Fire Portals', image: firePortalsImage, path: '/game/fire-portals' },
    { id: 2, title: 'Rip City', image: ripCityImage, path: '/game/rip-city' },
    { id: 3, title: 'Sugar Rush', image: sugarRushImage, path: '/game/sugar-rush' },
    { id: 4, title: 'Fruit Party', image: fruitPartyImage, path: '/game/fruit-party' },
  ];

  const newReleases = [
    { id: 1, title: 'Donny Dough', image: donnyDoughImage, path: '/game/donny-dough' },
    { id: 2, title: 'SixSixSix', image: sixSixSixImage, path: '/game/sixsixsix' },
    { id: 3, title: 'Dragons Domain', image: dragonsDomainImage, path: '/game/dragons-domain' },
    { id: 4, title: 'Tai The Toad', image: taiTheToadImage, path: '/game/tai-the-toad' },
    { id: 5, title: 'Money Stacks', image: moneyStacksImage, path: '/game/money-stacks' },
    { id: 6, title: 'Old Gun', image: oldGunImage, path: '/game/old-gun' },
    { id: 7, title: 'Bow of Artemis', image: bowOfArtemisImage, path: '/game/bow-of-artemis' },
    { id: 8, title: 'Slayers Inc', image: slayersIncImage, path: '/game/slayers-inc' },
  ];

  const gameShows = [
    { id: 1, title: 'Crazy Time', image: crazyTimeImage, path: '/game/crazytime' },
    { id: 2, title: 'Lightning Storm', image: lightningStormImage, path: '/game/lightningstorm' },
    { id: 3, title: 'Lightning Roulette', image: lightningRouletteImage, path: '/game/lightningroulette' },
    { id: 4, title: 'Stock Market', image: stockMarketImage, path: '/game/stockmarket' },
    { id: 5, title: 'Monopoly', image: monopolyImage, path: '/game/monopoly' },
    { id: 6, title: 'XXXtreme Lightning Roulette', image: xxxtremeLightningRouletteImage, path: '/game/xxxtremelightningroulette' },
    { id: 7, title: 'Red Door Roulette', image: redDoorRouletteImage, path: '/game/reddoorroulette' },
    { id: 8, title: 'Balloon Race', image: balloonRaceImage, path: '/game/balloonrace' },
  ];

  const promotions = [
    { id: 1, title: 'Artboard Promo', image: promoImage },
    { id: 2, title: 'Artboard Promo 2', image: promoImage2 },
    { id: 3, title: 'Artboard Promo 3', image: promoImage3 },
    { id: 4, title: 'Artboard Promo 4', image: promoImage4 },

  ];

  const renderGameCards = (games) => {
    return games.map((game) => (
      <div key={game.id} className="slot-card" onClick={() => navigate(game.path)}>
        <img src={game.image} alt={game.title} className="slot-image" />
      </div>
    ));
  };

  const renderPromotions = () => {
    return promotions.map((promo) => (
      <div key={promo.id} className="promo-card">
        <img src={promo.image} alt={promo.title} className="promo-image" />
      </div>
    ));
  };

  return (
    <div className="dashboard">
      <div className="main-container">
        <div className="main-content">
          <div className="promotions-section">
            <div className="promotions-wrapper">
              <div className="promotions-container">
                {renderPromotions()}
              </div>
            </div>
          </div>

          <div className="popular-slots-section">
            <div className="title-container">
              <img src={originalsIcon} alt="Originals" className="icon" />
              <span className="sub-heading">Popular Slots</span>
            </div>
            <div className="slots-wrapper">
              <div className="slots-container">
                {renderGameCards(popularSlots)}
              </div>
            </div>
          </div>
          <div className="live-casino-section">
            <div className="title-container">
              <img src={liveCasinoIcon} alt="Live Casino" className="icon" />
              <span className="sub-heading">Live Casino</span>
            </div>
            <div className="slots-wrapper">
              <div className="slots-container">
                {renderGameCards(liveCasinoGames)}
              </div>
            </div>
          </div>

          <div className="new-releases-section">
            <div className="title-container">
              <img src={newReleasesIcon} alt="New Releases" className="icon" />

            <span className="sub-heading">New Releases</span>
            </div>
            <div className="slots-wrapper">
              <div className="slots-container">
                {renderGameCards(newReleases)}
              </div>
            </div>
          </div>

          <div className="game-shows-section">
            <div className="title-container">
              <img src={gameShowsIcon} alt="Game Shows" className="icon" />
              <span className="sub-heading">Game Shows</span>
            </div>
            <div className="slots-wrapper">
              <div className="slots-container">
                {renderGameCards(gameShows)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
