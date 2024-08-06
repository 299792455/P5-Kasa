import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import properties from '../annonces.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import Host from '../components/Host';
import '../styles/property.scss';

const Property = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
    if (!property) {
      navigate('/not-found');
    }
  }, [property, navigate]);

  if (!property) {
    return null;
  }

  return (
    <div>
      <Slideshow images={property.pictures} />
      <div className="property-details">
        <div className="property-infos">
          <div className="property-title">
            <h1>{property.title}</h1>
            <p>{property.location}</p>
          </div>
          <div className="property-host">
            <Host host={property.host} />
          </div>
        </div>
        <div className='property-subinfo'>
          <div className="tags">
            {property.tags.map(tag => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <Rating rating={property.rating} />
        </div>
      
        <div className="collapses">
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
    </div>
  );
};

export default Property;