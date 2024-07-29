import React, { useState } from 'react';
import '../styles/Slideshow.scss';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 1) {
    return (
      <div className="slideshow">
        <img src={images[0]} alt="Slideshow" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt="Slideshow" />
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="num">{currentIndex + 1} / {images.length}</div>
    </div>
  );
};

export default Slideshow;