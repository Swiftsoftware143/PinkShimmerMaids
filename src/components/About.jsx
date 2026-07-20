import React from 'react';
import { Button } from './ui/button';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Your Trusted Maid Service in Tampa, Florida</h2>
          <p className="about-text">
            At The Pink Shimmer Maids, we believe a clean home is the foundation of a happy life. 
            Our dedicated team provides top-notch house cleaning in Tampa, tailored to your unique needs. 
            Our meticulous approach ensures every corner shines, giving you more time to enjoy what matters most.
          </p>
          <p className="about-text">
            Founded with a passion for excellence, The Pink Shimmer Maids stands out in the cleaning industry 
            with our commitment to quality and customer satisfaction. Whether you need a one-time deep cleaning 
            or regular maid service in Tampa, we deliver results that exceed expectations, making your home 
            a place of comfort and joy.
          </p>
          <Button 
            size="lg" 
            className="about-cta"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1647381518264-97ff1835026f" 
            alt="Professional cleaning team"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;