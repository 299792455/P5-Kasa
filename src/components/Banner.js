import React from 'react';
import '../styles/banner.scss';

const Banner = ({ image, text }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;