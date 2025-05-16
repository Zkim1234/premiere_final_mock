'use client';
import { useState } from 'react';
import styles from './EventSlider.module.css';

const slides = [
  {
    image: '/images/tina_banner.png',
    title: 'TINA – The Tina Turner Musical',
    description: 'Queen Elizabeth Theatre 630 Hamilton Street, Vancouver\n2hrs, 40mins with 1 intermission.',
  },
  {
    image: '/images/blossom_banner.png',
    title: 'Blossoms After Dark',
    description: 'Blossoms After Dark takes place at David Lam Park.\nFriday, March 28, 6:30PM – 10:00PM\nSaturday, March 29, 6:30PM – 10:00PM',
  },
  {
    image: '/images/squamish_banner.png',
    title: 'Squamish Spring Dance (Grade 7-9)',
    description: 'Squamish Nation Totem Hall\nFri, May 16, 2025 7:30 PM - 9:30 PM PDT',
  },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 400); // This should match the fade-out duration
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
