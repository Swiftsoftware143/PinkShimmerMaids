import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import '../styles/CookieConsent.css';

const STORAGE_KEY = 'psm_cookie_consent';
const SHOW_DELAY_MS = 800;

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, timestamp: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-wrapper" data-testid="cookie-consent-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-consent-card">
        <button
          className="cookie-close-btn"
          onClick={() => handleChoice('dismissed')}
          aria-label="Close cookie banner"
          data-testid="cookie-close-btn"
        >
          <X size={18} />
        </button>

        <div className="cookie-icon-wrap">
          <Cookie size={28} />
        </div>

        <div className="cookie-content">
          <h3 className="cookie-title">A Sprinkle of Cookies</h3>
          <p className="cookie-text">
            We use cookies to make your visit to <strong>The Pink Shimmer Maids</strong> sparkle —
            improving site performance, remembering your preferences, and helping us deliver a cleaner experience.
            By clicking <em>Accept</em>, you agree to our use of cookies.
          </p>

          <div className="cookie-actions">
            <button
              className="cookie-btn cookie-btn-secondary"
              onClick={() => handleChoice('declined')}
              data-testid="cookie-decline-btn"
            >
              Decline
            </button>
            <button
              className="cookie-btn cookie-btn-primary"
              onClick={() => handleChoice('accepted')}
              data-testid="cookie-accept-btn"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
