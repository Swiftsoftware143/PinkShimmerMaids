import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import '../styles/Hero.css';

const Hero = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage for now
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    toast({
      title: "Thank you for contacting us!",
      description: "We will get back to you as soon as possible.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premier House Cleaning in Tampa, Florida
          </h1>
          <p className="hero-subtitle">
            The Pink Shimmer Maids delivers exceptional cleaning services, transforming your home into a spotless sanctuary with our professional touch.
          </p>
          <Button 
            size="lg" 
            className="hero-cta"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now!
          </Button>
        </div>

        <div className="hero-form-container">
          <div className="hero-form-card">
            <h3 className="form-title">Contact Us</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <Input
                type="text"
                name="name"
                placeholder="Name:"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone:"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
              <Textarea
                name="message"
                placeholder="Message:"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows={4}
              />
              <Button type="submit" className="form-submit-btn">
                Send Message
              </Button>
            </form>
            <div className="form-note">
              <p className="note-text">You can replace this form with your own HTML code to connect to your autoresponder and CRM.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;