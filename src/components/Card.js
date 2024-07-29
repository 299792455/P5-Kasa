import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/property/${id}`} className="card">
      <img src={cover} alt={title} />
      <div className="card-title">{title}</div>
    </Link>
  );
};

export default Card;