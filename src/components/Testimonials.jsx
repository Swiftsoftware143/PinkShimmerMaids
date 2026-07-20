import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'The Pink Shimmer Maids transformed my home! Their attention to detail is incredible. I come home to a sparkling clean house every week.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    text: 'Professional, reliable, and thorough. Best cleaning service in Tampa! They handle my AirBNB properties with care and efficiency.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    text: 'Outstanding service! The team is friendly and always goes above and beyond. My house has never looked better.',
    rating: 5
  },
  {
    name: 'David Thompson',
    text: 'I highly recommend The Pink Shimmer Maids. Their deep cleaning service is worth every penny. Exceptional work!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Happy Clients,</h2>
          <h2 className="testimonials-subtitle">Clean Spaces</h2>
        </div>
        <p className="testimonials-description">
          Our clients rave about our impeccable services, ensuring your satisfaction every time, without fail.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={`${testimonial.name}-star-${i}`} className="star-icon" fill="#FDB9C8" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;