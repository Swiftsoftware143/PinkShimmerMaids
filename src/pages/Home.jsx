import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import AccessibilityWidget from '../components/AccessibilityWidget';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <CookieConsent />
      <AccessibilityWidget />
    </div>
  );
};

export default Home;