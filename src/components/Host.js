import React from 'react';
import '../styles/host.scss';

const Host = ({ host }) => {
  return (
    <div className="host">
      <img src={host.picture} alt={host.name} className="host-picture" />
      <p className="host-name">{host.name}</p>
    </div>
  );
};

export default Host;