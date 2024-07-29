import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <button onClick={prevImage}>Précédent</button>
      <img src={images[currentIndex]} alt="Gallery" />
      <button onClick={nextImage}>Suivant</button>
    </div>
  );
};

export default Gallery;