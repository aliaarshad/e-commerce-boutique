import { useState, useEffect } from 'react';
import './FeaturedSection.css';

const slides = [
  { title: 'The Chloe Collection', subtitle: 'The Project Jacket' },
  { title: 'The Chloe Collection', subtitle: 'The New Look Jacket' },
  { title: 'The Chloe Collection', subtitle: 'The Classic Jacket' },
];

const FeaturedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Adjust time as needed
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="featured-section">
      <div className="slide-content" key={currentSlide}>
        <h4 className="small-heading">{slides[currentSlide].title}</h4>
        <h1 className="large-heading">{slides[currentSlide].subtitle}</h1>
        <a href="/shop" className="shop-now">Shop Now</a>
      </div>

      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
