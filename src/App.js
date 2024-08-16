import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import GameLauncher from './components/GameLauncher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/game/wanted-dead-or-a-wild" element={
            <GameLauncher 
              gameUrl={{
                mobile: "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=mobile&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api",
                desktop: "https://static-live.hacksawgaming.com/1067/1.62.0/index.html?language=en&channel=desktop&gameid=1067&mode=2&token=123131&lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&currency=EUR&partner=demo&env=https://rgs-demo.hacksawgaming.com/api&realmoneyenv=https://rgs-demo.hacksawgaming.com/api"
              }} 
              gameTitle="Wanted Dead or a Wild" 
            />
          } />
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
          <Route path="/game/see-all" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
