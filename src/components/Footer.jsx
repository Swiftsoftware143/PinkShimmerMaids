import React from 'react';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-logo">The Pink Shimmer Maids</h3>
          <p className="footer-tagline">Your trusted cleaning partner in Tampa</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Office Hours</h4>
          <div className="footer-hours">
            <p>Mon - Fri: 7:00 am - 5:00 pm</p>
            <p>Saturday: 8:00 am - 4:00 pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Cleaning Hours</h4>
          <div className="footer-hours">
            <p>Mon - Fri: 8:00 am - 6:00 pm</p>
            <p>Saturday: 8:00 am - 2:00 pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <div className="footer-contact">
            <a href="tel:8137032974" className="footer-link">
              (813) 703-2974
            </a>
            <a href="mailto:info@pinkshimmermaids.com" className="footer-link">
              <Mail className="footer-icon" />
              info@pinkshimmermaids.com
            </a>
            <div className="footer-address">
              <MapPin className="footer-icon" />
              <span>Tampa, Florida</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-social">
            <h4 className="social-heading">Social</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2026 The Pink Shimmer Maids. All rights reserved.</p>
            <p className="domain-text">pinkshimmermaids.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;