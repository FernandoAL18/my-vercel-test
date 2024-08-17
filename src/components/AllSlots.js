import React, { useState } from 'react';
import './AllSlots.css'; // Asegúrate de tener este archivo CSS para los estilos

const AllSlots = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);
  const [sortOrder, setSortOrder] = useState('A-Z');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const results = games.filter((game) =>
      game.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredGames(results);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedGames = [...filteredGames];
    if (order === 'A-Z') {
      sortedGames.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'Z-A') {
      sortedGames.sort((a, b) => b.title.localeCompare(a.title));
    } else if (order === 'Most Popular') {
      sortedGames.sort((a, b) => b.popularity - a.popularity);
    } else if (order === 'Featured') {
      sortedGames = games.filter((game) => game.featured);
    }
    setFilteredGames(sortedGames);
  };

  return (
    <div className="all-slots-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button onClick={() => handleSort('A-Z')}>A-Z</button>
        <button onClick={() => handleSort('Z-A')}>Z-A</button>
        <button onClick={() => handleSort('Most Popular')}>Most Popular</button>
        <button onClick={() => handleSort('Featured')}>Featured</button>
      </div>
      <div className="games-grid">
        {filteredGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} />
            <div className="game-title">{game.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSlots;
