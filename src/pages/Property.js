import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../annonces.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';

const Property = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return <div>Propriété non trouvée</div>;
  }

  return (
    <div>
      <Slideshow images={property.pictures} />
      <div className="property-details">
        <h1>{property.title}</h1>
        <p>{property.location}</p>
        <Rating rating={property.rating} />
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Property;