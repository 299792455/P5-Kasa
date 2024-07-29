import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const Apropos = () => {
  return (
    <div>
      <Header />
      <div className="about-content">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
        </Collapse>
        <Collapse title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite...</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa...</p>
        </Collapse>
      </div>
      <Footer />
    </div>
  );
};

export default Apropos;