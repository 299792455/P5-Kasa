import React from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import '../styles/apropos.scss';
import aproposBannerImage from '../styles/images/aproposkasa.jpg';

const Apropos = () => {
  return (
    <div className="apropos-page">
    <Banner image={aproposBannerImage} /> 
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
    </div>
  );
};

export default Apropos;