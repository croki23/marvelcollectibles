import React, { useState, useEffect } from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image1 from '../Assets/hero.jpg';
import hero_image2 from '../Assets/hero1.jpg';
import hero_image3 from '../Assets/hero2.jpg';
import hero_image4 from '../Assets/hero3.jpg';
import hero_image5 from '../Assets/hero4.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [hero_image1, hero_image2, hero_image3, hero_image4, hero_image5]; // Remove hero_image4

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='hero marvel'>
      <div className="hero-left">
        <h2>Heal Your INNER CHILD</h2>
        <div className="hero-hand-icon">
          <img src={hand_icon} alt="" />
          <p>New</p>
        </div>
        <p>Action Figures</p>
        <p>and Collectibles</p>
        <div className="hero-latest-btn">
          <div>
            <span>Explore Now</span>
            <img src={arrow_icon} alt=""/>
          </div>
        </div>
      </div>
      <div className='hero-right'>
        {heroImages.map((image, index) => (
          <img
            key={index}
            className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default Hero;
