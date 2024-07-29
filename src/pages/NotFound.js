import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner à la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;