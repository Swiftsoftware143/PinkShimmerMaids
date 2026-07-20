import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have questions or need a quote? Choose one of the following options, and we'll get back to you promptly.
        </p>
        <div className="contact-options">
          <div className="contact-option">
            <div className="option-icon-wrapper">
              <Phone className="option-icon" />
            </div>
            <h3 className="option-title">Fast Response</h3>
            <Button 
              className="option-btn"
              onClick={() => window.location.href = 'tel:8137032974'}
            >
              Call us
            </Button>
          </div>
          <div className="contact-option">
            <div className="option-icon-wrapper">
              <MessageCircle className="option-icon" />
            </div>
            <h3 className="option-title">Quick Questions?</h3>
            <Button 
              className="option-btn"
              onClick={() => window.open('mailto:info@pinkshimmermaids.com', '_blank')}
            >
              Email us
            </Button>
          </div>
          <div className="contact-option">
            <div className="option-icon-wrapper">
              <Phone className="option-icon" />
            </div>
            <h3 className="option-title">Book instantly!</h3>
            <Button 
              className="option-btn"
              onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;