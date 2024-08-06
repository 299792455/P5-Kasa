import React from 'react';
import '../styles/host.scss';

const Host = ({ host }) => {
  return (
    <div className="host">
      <p className="host-name">{host.name}</p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

export default Host;