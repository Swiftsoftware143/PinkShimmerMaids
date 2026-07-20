import React from 'react';
import { Sparkles, Home, Layers, Plus, TruckIcon, Building2 } from 'lucide-react';
import '../styles/Services.css';

const services = [
  {
    icon: Sparkles,
    title: 'Standard Cleaning Service',
    description: 'Regular maintenance cleaning to keep your home fresh and tidy'
  },
  {
    icon: Home,
    title: 'AirBNB Cleaning Services',
    description: 'Specialized cleaning for vacation rentals and short-term properties'
  },
  {
    icon: Layers,
    title: 'Deep Cleaning Service',
    description: 'Thorough, intensive cleaning for a completely refreshed home'
  },
  {
    icon: Plus,
    title: 'Extras and Upgrades',
    description: 'Additional services to customize your cleaning experience'
  },
  {
    icon: TruckIcon,
    title: 'Move In/Out Cleaning Service',
    description: 'Complete cleaning for moving transitions and new beginnings'
  },
  {
    icon: Building2,
    title: 'Office Cleaning/Janitorial Services',
    description: 'Professional cleaning solutions for commercial spaces'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Cleaning Services</h2>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card">
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;