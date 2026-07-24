import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="/logo.jpg" 
            alt="The Pink Shimmer Maids"
            className="logo-image"
          />
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        <div className="header-actions">
          <a href="tel:8137032974" className="header-phone">
            <Phone className="phone-icon" />
            <span>(813) 703-2974</span>
          </a>
          <Button onClick={() => scrollToSection('contact')} className="book-now-btn">
            Book Now!
          </Button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;