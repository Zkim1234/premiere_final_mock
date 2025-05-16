'use client';
import { useState } from 'react';
import styles from './EventSlider.module.css';

export default function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 400); // match fade duration
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} 
            ${index === currentIndex ? styles.active : ''} 
            ${isAnimating ? styles.fadeOut : ''}`}
        >
          <img src={slide.image} alt={slide.title} className={styles.slideImage} />
          <div className={styles.caption}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <button className={`${styles.nav} ${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.nav} ${styles.next}`} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
            onClick={() => handleSlideChange(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
