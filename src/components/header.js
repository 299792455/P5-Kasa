import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss';
import logo from '../styles/images/logoKasaD.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Kasa Logo" className="logo" />
      <nav>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/A-propos">À Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;