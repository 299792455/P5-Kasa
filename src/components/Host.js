import React from 'react';

const Host = ({ host }) => {
  return (
    <div className="host">
      <img src={host.picture} alt={host.name} />
      <p>{host.name}</p>
    </div>
  );
};

export default Host;