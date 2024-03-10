
import { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-slider">
      <img src={images[currentImageIndex]} alt={`club${currentImageIndex + 1}`} />
    </div>
  );
};

export default Slider;
