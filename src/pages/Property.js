import React from 'react';

const Property = ({ match }) => {
  return (
    <div>
      <h1>Propriété {match.params.id}</h1>
      <p>Détails de la propriété</p>
    </div>
  );
};

export default Property;