import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; 

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa Logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  );
};

export default Header;