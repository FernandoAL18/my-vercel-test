import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.png';
import './Header.css';  // Importa el archivo CSS

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img 
        src={logo} 
        alt="Logo" 
        className="logo" 
        onClick={() => navigate('/dashboard')}  // Redirigir al dashboard al hacer clic en el logo
      />
    </header>
  );
};

export default Header;
