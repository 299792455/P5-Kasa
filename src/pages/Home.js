import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import properties from '../annonces.json'; // Chemin correct vers le fichier JSON

const Home = () => {
  return (
    <div>
      <Banner image="/path/to/banner/image.jpg" text="Chez vous, partout et ailleurs" />
      <div className="property-list">
        {properties.map(property => (
          <Card key={property.id} id={property.id} title={property.title} cover={property.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;