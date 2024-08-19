import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AllSlots from './components/AllSlots';
import Dashboard from './components/Dashboard';
import GameLauncher from './components/GameLauncher';

// Importa las imágenes necesarias
const sweetBonanzaImage = require('./assets/icons/sweetbonanza1000.png');
const gatesOfOlympusImage = require('./assets/icons/gatesofolympus.png');
const wantedDeadOrWildImage = require('./assets/icons/wanteddeadorawild.png');
const leBanditImage = require('./assets/icons/lebandit.png');
const zeusVsHadesImage = require('./assets/icons/zeusvshades.png');
const firePortalsImage = require('./assets/icons/fireportals.png');
const ripCityImage = require('./assets/icons/ripcity.png');
const sugarRushImage = require('./assets/icons/sugarrush.png');
const fruitPartyImage = require('./assets/icons/fruitparty.png');
const fistOfDestructionImage = require('./assets/icons/fistofdestruction.png');
const theDogHouseImage = require('./assets/icons/thedoghouse.png');
const bigBassSplashImage = require('./assets/icons/bigbasssplash.png');
const donnyDoughImage = require('./assets/icons/donnydough.png');
const sixSixSixImage = require('./assets/icons/sixsixsix.png');
const dragonsDomainImage = require('./assets/icons/dragonsdomain.png');
const taiTheToadImage = require('./assets/icons/taithetoad.png');
const moneyStacksImage = require('./assets/icons/moneystacks.png');
const oldGunImage = require('./assets/icons/oldgun.png');
const bowOfArtemisImage = require('./assets/icons/bowofartemis.png');
const slayersIncImage = require('./assets/icons/slayersinc.png');

// Importa las imágenes de Game Shows
const crazyTimeImage = require('./assets/live-casino/crazytime.png');
const lightningStormImage = require('./assets/live-casino/lightningstorm.png');
const lightningRouletteImage = require('./assets/live-casino/lightningroulette.png');
const stockMarketImage = require('./assets/live-casino/stockmarket.png');
const monopolyImage = require('./assets/live-casino/monopoly.png');
const xxxtremeLightningRouletteImage = require('./assets/live-casino/xxxtremelightningroulette.png');
const redDoorRouletteImage = require('./assets/live-casino/reddoorroulette.png');
const balloonRaceImage = require('./assets/live-casino/balloonrace.png');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-slots" element={<AllSlots />} />

          {/* Rutas para los Game Shows */}
          <Route path="/game/crazy-time" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#provider=evolution&ua_launch_id=17ed058afb0a778e1c11dd1c&game=crazytime&table_id=CrazyTime0000001&app=",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#provider=evolution&ua_launch_id=17ed058afb0a778e1c11dd1c&game=crazytime&table_id=CrazyTime0000001&app="
              }} 
              gameTitle="Crazy Time" 
            />
          } />
          <Route path="/game/lightning-storm" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=lightningstorm&table_id=LightningStorm01&lobby_launch_id=a619755629034d5fa39d120dbfe4e596",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=lightningstorm&table_id=LightningStorm01&lobby_launch_id=a619755629034d5fa39d120dbfe4e596"
              }} 
              gameTitle="Lightning Storm" 
            />
          } />
          <Route path="/game/lightning-roulette" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=roulette&table_id=LightningTable01&lobby_launch_id=fe39db8e2bf449a39e5124552e5cef7d",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=roulette&table_id=LightningTable01&lobby_launch_id=fe39db8e2bf449a39e5124552e5cef7d"
              }} 
              gameTitle="Lightning Roulette" 
            />
          } />
          <Route path="/game/stock-market" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=stockmarket&table_id=StockMarket00001&lobby_launch_id=e1811856e0c64eb0a59b1adca56ed091",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=stockmarket&table_id=StockMarket00001&lobby_launch_id=e1811856e0c64eb0a59b1adca56ed091"
              }} 
              gameTitle="Stock Market" 
            />
          } />
          <Route path="/game/monopoly" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=monopoly&table_id=Monopoly00000001&lobby_launch_id=7655d75e9fb440519ebed084740f43aa",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=monopoly&table_id=Monopoly00000001&lobby_launch_id=7655d75e9fb440519ebed084740f43aa"
              }} 
              gameTitle="Monopoly" 
            />
          } />
          <Route path="/game/xxxtreme-lightning-roulette" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=roulette&table_id=XxxtremeLigh0001&lobby_launch_id=4a847dedfa0e404ab20bac9ecd206753",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=roulette&table_id=XxxtremeLigh0001&lobby_launch_id=4a847dedfa0e404ab20bac9ecd206753"
              }} 
              gameTitle="XXXtreme Lightning Roulette" 
            />
          } />
          <Route path="/game/red-door-roulette" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=reddoorroulette&table_id=RedDoorRoulette1&lobby_launch_id=1ce1d86ffc9d4440b1b51d3936e9129d",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=reddoorroulette&table_id=RedDoorRoulette1&lobby_launch_id=1ce1d86ffc9d4440b1b51d3936e9129d"
              }} 
              gameTitle="Red Door Roulette" 
            />
          } />
          <Route path="/game/balloon-race" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=balloonrace&table_id=BalloonRace00001&lobby_launch_id=dd7d9b8fefdd449ead00fb995b863e35",
                desktop: "https://babylonstkn.evo-games.com/frontend/evo/r2/#category=all_games&game=balloonrace&table_id=BalloonRace00001&lobby_launch_id=dd7d9b8fefdd449ead00fb995b863e35"
              }} 
              gameTitle="Balloon Race" 
            />
          } />

          {/* Aquí irían los otros juegos que ya estaban en el código */}

          <Route path="/game/sweet-bonanza" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitswx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitswx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Sweet Bonanza" 
            />
          } />
          <Route path="/game/gates-of-olympus" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Gates of Olympus" 
            />
          } />
          <Route path="/game/wanted-dead-or-a-wild" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=mobile&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=desktop&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Wanted Dead or a Wild" 
            />
          } />
          <Route path="/game/le-bandit" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1309/1.16.2/index.html?language=en&channel=mobile&gameid=1309&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1309/1.16.2/index.html?language=en&channel=desktop&gameid=1309&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Le Bandit" 
            />
          } />
          <Route path="/game/zeus-vs-hades" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs15godsofwar&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs15godsofwar&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Zeus vs Hades: Gods of War" 
            />
          } />
          <Route path="/game/fire-portals" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20portals&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20portals&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Fire Portals" 
            />
          } />
          <Route path="/game/rip-city" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1233/1.29.4/index.html?language=en&channel=mobile&gameid=1233&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1233/1.29.4/index.html?language=en&channel=desktop&gameid=1233&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Rip City" 
            />
          } />
          <Route path="/game/sugar-rush" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sugarrush&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sugarrush&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Sugar Rush" 
            />
          } />
          <Route path="/game/fruit-party" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs15fruitparty&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs15fruitparty&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Fruit Party" 
            />
          } />
          <Route path="/game/fist-of-destruction" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1408/1.51.0/index.html?language=en&channel=mobile&gameid=1408&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1408/1.51.0/index.html?language=en&channel=desktop&gameid=1408&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Fist of Destruction" 
            />
          } />
          <Route path="/game/the-dog-house" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20doghouse&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20doghouse&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="The Dog House" 
            />
          } />
          <Route path="/game/big-bass-splash" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10txbigbass&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10txbigbass&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Big Bass Splash" 
            />
          } />
          <Route path="/game/donny-dough" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1530/1.33.0/index.html?language=en&channel=mobile&gameid=1530&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1530/1.33.0/index.html?language=en&channel=desktop&gameid=1530&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Donny Dough" 
            />
          } />
          <Route path="/game/six-six-six" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1534/1.32.4/index.html?language=en&channel=mobile&gameid=1534&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1534/1.32.4/index.html?language=en&channel=desktop&gameid=1534&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="SIXSIXSIX" 
            />
          } />
          <Route path="/game/dragons-domain" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1360/1.15.2/index.html?language=en&channel=mobile&gameid=1360&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1360/1.15.2/index.html?language=en&channel=desktop&gameid=1360&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Dragon’s Domain" 
            />
          } />
          <Route path="/game/tai-the-toad" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1478/1.18.0/index.html?language=en&channel=mobile&gameid=1478&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1478/1.18.0/index.html?language=en&channel=desktop&gameid=1478&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Tai The Toad" 
            />
          } />
          <Route path="/game/money-stacks" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20bblitz&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20bblitz&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Money Stacks" 
            />
          } />
          <Route path="/game/old-gun" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1568/1.15.0/index.html?language=en&channel=mobile&gameid=1568&mode=2&token=demo&lobbyurl=https%3A%2F%2Fstake.com&currency=EUR&partner=stake&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-cu.hacksawgaming.com/api&iniframe=true",
                desktop: "https://static-live.hacksawgaming.com/1568/1.15.0/index.html?language=en&channel=desktop&gameid=1568&mode=2&token=demo&lobbyurl=https%3A%2F%2Fstake.com&currency=EUR&partner=stake&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-cu.hacksawgaming.com/api&iniframe=true"
              }} 
              gameTitle="Old Gun" 
            />
          } />
          <Route path="/game/bow-of-artemis" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20gembondx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
                desktop: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20gembondx&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD"
              }} 
              gameTitle="Bow of Artemis" 
            />
          } />
          <Route path="/game/slayers-inc" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1482/1.38.1/index.html?language=en&channel=mobile&gameid=1482&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1482/1.38.1/index.html?language=en&channel=desktop&gameid=1482&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Slayers Inc" 
            />
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
