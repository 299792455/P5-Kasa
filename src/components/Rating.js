import React from 'react';
import '../styles/rating.scss'

const Rating = ({ rating }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={index < rating ? 'filled-star' : 'empty-star'}>
      ★
    </span>
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;