import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import '../styles/CityPage.css';

const cityData = {
  'tampa': {
    name: 'Tampa', state: 'FL', slug: 'tampa',
    longTail: {
      title: 'Best Maid Service in South Tampa & Tampa Bay | Pink Shimmering Maids',
      h1: 'Best House Cleaning & Maid Service in Tampa, FL',
      description: 'Top-rated residential maid service serving South Tampa, Hyde Park, Palma Ceia & Westchase. Affordable weekly house cleaning, deep cleaning, and move-in/out services in Tampa, FL. Book online!',
      keywords: 'residential maid service south tampa fl, affordable house cleaning services in tampa bay, weekly maid service packages tampa florida, move in move out cleaning service tampa fl, post construction house cleaning tampa, eco friendly maid service tampa bay, house cleaning services hyde park tampa, maid service palm ceia tampa fl, residential cleaners westchase tampa',
      intro: 'Pink Shimmering Maids provides trusted, professional house cleaning services across the Tampa Bay area. Whether you need weekly maid service in South Tampa, a deep clean in Hyde Park, or move-in/move-out cleaning in Westchase, we deliver sparkling results every time.',
      neighborhoods: ['South Tampa', 'Hyde Park', 'Palma Ceia', 'Westchase', 'Downtown Tampa'],
      services: [
        { name: 'Residential House Cleaning', kw: 'residential maid service south tampa fl' },
        { name: 'Deep Cleaning', kw: 'post construction house cleaning tampa' },
        { name: 'Move In/Out Cleaning', kw: 'move in move out cleaning service tampa fl' },
        { name: 'Eco-Friendly Maid Service', kw: 'eco friendly maid service tampa bay' },
        { name: 'Weekly & Bi-Weekly Packages', kw: 'weekly maid service packages tampa florida' },
      ]
    }
  },
  'st-petersburg': {
    name: 'St. Petersburg', state: 'FL', slug: 'st-petersburg',
    longTail: {
      title: 'Top-Rated House Cleaning in St. Petersburg, FL | Pink Shimmering Maids',
      h1: 'Professional House Cleaning & Maid Service in St. Petersburg, FL',
      description: 'Reliable maid service in downtown St. Pete, Snell Isle, Historic Northeast & Old Northeast. Expert deep cleaning, same-day service & Airbnb vacation rental cleaning. Book your St. Petersburg clean today!',
      keywords: 'top rated home cleaning services st petersburg fl, reliable maid service downtown st pete, recurring house cleaning st petersburg florida, deep cleaning services st petersburg fl, same day maid service st pete fl, airbnb vacation rental cleaning st petersburg, house cleaners snell isle st pete, maid service historic northeast st petersburg, residential cleaning old northeast st pete',
      intro: 'From downtown St. Pete to Snell Isle and Historic Northeast, Pink Shimmering Maids delivers top-rated home cleaning services. Whether you need recurring weekly cleanings, same-day maid service, or Airbnb vacation rental turnover cleaning, we cover the entire St. Petersburg area.',
      neighborhoods: ['Downtown St. Pete', 'Snell Isle', 'Historic Northeast', 'Old Northeast', 'Grand Central District'],
      services: [
        { name: 'Recurring House Cleaning', kw: 'recurring house cleaning st petersburg florida' },
        { name: 'Deep Cleaning', kw: 'deep cleaning services st petersburg fl' },
        { name: 'Same-Day Maid Service', kw: 'same day maid service st pete fl' },
        { name: 'Airbnb Vacation Rental Cleaning', kw: 'airbnb vacation rental cleaning st petersburg' },
        { name: 'Move In/Out Cleaning', kw: '' },
      ]
    }
  },
  'clearwater': {
    name: 'Clearwater', state: 'FL', slug: 'clearwater',
    longTail: {
      title: 'Professional House Cleaners in Clearwater, FL | Pink Shimmering Maids',
      h1: 'Trusted Maid Service & House Cleaning in Clearwater, FL',
      description: 'Local maid service near Clearwater Beach, Island Estates, Countryside & Safety Harbor. Bi-weekly home cleaning, move-out cleaning, spring cleaning & pet-safe residential cleaners. Book now!',
      keywords: 'professional house cleaners clearwater fl, local maid service near me clearwater florida, bi weekly home cleaning clearwater fl, move out house cleaning clearwater fl, detailed spring cleaning service clearwater, pet safe residential cleaners clearwater, house cleaning island estates clearwater, maid service countryside clearwater fl, residential cleaning clearwater beach fl',
      intro: 'Pink Shimmering Maids serves Clearwater with professional, reliable house cleaning services. From Island Estates to Countryside and Clearwater Beach, we offer bi-weekly home cleaning, detailed spring cleaning, move-out cleaning, and pet-safe residential cleaning options.',
      neighborhoods: ['Clearwater Beach', 'Island Estates', 'Countryside', 'Safety Harbor', 'Dunedin'],
      services: [
        { name: 'Bi-Weekly Home Cleaning', kw: 'bi weekly home cleaning clearwater fl' },
        { name: 'Move-Out House Cleaning', kw: 'move out house cleaning clearwater fl' },
        { name: 'Spring Cleaning Service', kw: 'detailed spring cleaning service clearwater' },
        { name: 'Pet-Safe Residential Cleaning', kw: 'pet safe residential cleaners clearwater' },
        { name: 'Standard Maid Service', kw: 'local maid service near me clearwater florida' },
      ]
    }
  },
  'wesley-chapel': {
    name: 'Wesley Chapel', state: 'FL', slug: 'wesley-chapel',
    longTail: {
      title: 'Best Maid Service in Wesley Chapel, FL | Pink Shimmering Maids',
      h1: 'Affordable Maid Service & House Cleaning in Wesley Chapel, FL',
      description: 'Affordable home housekeepers in Wesley Chapel serving Wiregrass, Epperson Lagoon & Seven Oaks. Move-in deep cleaning, post-renovation cleaning & recurring maid service for busy families. Book online!',
      keywords: 'best maid service wesley chapel fl, affordable home housekeepers wesley chapel, trusted residential maid service wesley chapel, move in deep cleaning service wesley chapel fl, post renovation cleaning service wesley chapel, recurring maid service for busy families wesley chapel, house cleaning wiregrass wesley chapel fl, maid service epperson lagoon wesley chapel, residential cleaners Seven Oaks wesley chapel',
      intro: 'Pink Shimmering Maids is the trusted choice for Wesley Chapel home cleaning. We serve Wiregrass, Epperson Lagoon, Seven Oaks, and surrounding communities with recurring maid service, move-in deep cleaning, post-renovation cleaning, and flexible scheduling for busy families.',
      neighborhoods: ['Wiregrass', 'Epperson Lagoon', 'Seven Oaks', 'Meadow Pointe', 'Tampa Palms'],
      services: [
        { name: 'Recurring Maid Service', kw: 'recurring maid service for busy families wesley chapel' },
        { name: 'Move-In Deep Cleaning', kw: 'move in deep cleaning service wesley chapel fl' },
        { name: 'Post-Renovation Cleaning', kw: 'post renovation cleaning service wesley chapel' },
        { name: 'Residential House Cleaning', kw: 'trusted residential maid service wesley chapel' },
        { name: 'Standard & Deep Clean Packages', kw: 'best maid service wesley chapel fl' },
      ]
    }
  },
  'lutz': {
    name: 'Lutz', state: 'FL', slug: 'lutz',
    longTail: {
      title: 'Local Maid Service in Lutz, FL | Pink Shimmering Maids',
      h1: 'House Cleaning & Maid Service in Lutz, FL',
      description: 'House cleaning services in Lutz Florida serving Cheval, Heritage Isles & Stemper. Top-to-bottom deep cleaning, move-out maid service & one-time deep clean. Book routine home cleaning today!',
      keywords: 'local maid service lutz fl, house cleaning services lutz florida, routine home cleaning company lutz, top to bottom deep house cleaning lutz fl, move out maid service lutz florida, one time deep clean service lutz, house cleaning cheval lutz fl, maid service heritage isles lutz, residential cleaners stemper lutz fl',
      intro: 'Pink Shimmering Maids provides routine home cleaning, top-to-bottom deep cleaning, and move-out maid service throughout Lutz. We serve Cheval, Heritage Isles, Stemper, and nearby communities with reliable, affordable home cleaning that fits your schedule.',
      neighborhoods: ['Cheval', 'Heritage Isles', 'Stemper', 'Live Oak', 'Keystone'],
      services: [
        { name: 'Routine Home Cleaning', kw: 'routine home cleaning company lutz' },
        { name: 'Top-to-Bottom Deep Cleaning', kw: 'top to bottom deep house cleaning lutz fl' },
        { name: 'Move-Out Maid Service', kw: 'move out maid service lutz florida' },
        { name: 'One-Time Deep Clean', kw: 'one time deep clean service lutz' },
        { name: 'Residential Housekeepers', kw: 'local maid service lutz fl' },
      ]
    }
  },
  'riverview': {
    name: 'Riverview', state: 'FL', slug: 'riverview',
    longTail: {
      title: 'Best House Cleaning Company in Riverview, FL | Pink Shimmering Maids',
      h1: 'Reliable Maid Service & House Cleaning in Riverview, FL',
      description: 'Reliable maid service in Riverview Florida serving Panther Trace, Riverpointe & South Pointe. Affordable bi-weekly house cleaning, move-out cleaning & whole-house deep cleaning. Book now!',
      keywords: 'best house cleaning company riverview fl, reliable maid service riverview florida, affordable biweekly house cleaning riverview, move out house cleaning service riverview fl, whole house deep cleaning riverview, sanitizing and deep maid service riverview, house cleaning panther trace riverview fl, maid service riverpointe riverview fl, residential cleaners South Pointe riverview',
      intro: 'Pink Shimmering Maids is Riverview\'s trusted house cleaning company. We serve Panther Trace, Riverpointe, South Pointe, and surrounding communities with affordable bi-weekly cleaning, whole-house deep cleaning, move-out cleaning, and sanitizing services.',
      neighborhoods: ['Panther Trace', 'Riverpointe', 'South Pointe', 'Boyette Springs', 'Bloomingdale'],
      services: [
        { name: 'Bi-Weekly House Cleaning', kw: 'affordable biweekly house cleaning riverview' },
        { name: 'Whole-House Deep Cleaning', kw: 'whole house deep cleaning riverview' },
        { name: 'Move-Out Cleaning', kw: 'move out house cleaning service riverview fl' },
        { name: 'Sanitizing & Deep Maid Service', kw: 'sanitizing and deep maid service riverview' },
        { name: 'Residential Cleaning', kw: 'best house cleaning company riverview fl' },
      ]
    }
  },
  'brandon': {
    name: 'Brandon', state: 'FL', slug: 'brandon',
    longTail: {
      title: 'House Cleaning Services in Brandon, FL | Pink Shimmering Maids',
      h1: 'Professional House Cleaning Services in Brandon, FL',
      description: 'Trusted maid service and residential house cleaning in Brandon, FL. Local cleaners serving Kings Ave area, Valrico & Seffner. Weekly, bi-weekly & deep cleaning. Call (813) 703-2974!',
      keywords: 'house cleaning brandon fl, maid service brandon florida, residential cleaning brandon fl, weekly house cleaning brandon, deep cleaning brandon fl, local maid service brandon fl',
      intro: 'Pink Shimmering Maids is proud to serve Brandon, FL with professional, reliable house cleaning services. Located at 504 S Kings Ave, Suite 1120, we are your local cleaning experts serving all of Brandon and surrounding communities with top-rated residential maid service.',
      neighborhoods: ['Kings Ave Area', 'Brandon Town Center', 'Bloomingdale', 'Providence Lakes', 'Brandon Isles'],
      services: [
        { name: 'Residential House Cleaning', kw: 'house cleaning brandon fl' },
        { name: 'Weekly & Bi-Weekly Service', kw: 'weekly house cleaning brandon' },
        { name: 'Deep Cleaning', kw: 'deep cleaning brandon fl' },
        { name: 'Move In/Out Cleaning', kw: '' },
        { name: 'Office/Janitorial Cleaning', kw: '' },
      ]
    }
  },
  'valrico': {
    name: 'Valrico', state: 'FL', slug: 'valrico',
    longTail: {
      title: 'Maid Service in Valrico, FL | Pink Shimmering Maids',
      h1: 'Trusted Maid Service & House Cleaning in Valrico, FL',
      description: 'Professional house cleaning and maid service in Valrico, FL. Serving Bloomingdale, Boyette & FishHawk with reliable residential cleaning. Call (813) 703-2974 for a free quote!',
      keywords: 'maid service valrico fl, house cleaning valrico florida, residential cleaning valrico, bloomingdale cleaning service, boyette cleaning fl',
      intro: 'Pink Shimmering Maids provides professional cleaning services to Valrico and the Bloomingdale area. As your local Tampa Bay cleaning company, we bring the same quality and reliability to Valrico homes that our Brandon clients have come to trust.',
      neighborhoods: ['Bloomingdale', 'Boyette', 'FishHawk', 'Winthrop', 'Boyette Springs'],
      services: [
        { name: 'Residential Cleaning', kw: 'residential cleaning valrico' },
        { name: 'Deep Cleaning', kw: '' },
        { name: 'Move In/Out Cleaning', kw: '' },
        { name: 'Recurring Maid Service', kw: 'maid service valrico fl' },
        { name: 'Standard House Cleaning', kw: 'house cleaning valrico florida' },
      ]
    }
  },
  'seffner': {
    name: 'Seffner', state: 'FL', slug: 'seffner',
    longTail: {
      title: 'House Cleaning in Seffner, FL | Pink Shimmering Maids',
      h1: 'Reliable House Cleaning Service in Seffner, FL',
      description: 'Affordable maid service and home cleaning in Seffner, FL. Serving Dover, Mango & Plant City areas. Weekly, bi-weekly & deep cleaning. Call (813) 703-2974 to schedule!',
      keywords: 'house cleaning seffner fl, maid service seffner florida, home cleaning seffner, seffner cleaning service, affordable maid seffner',
      intro: 'Pink Shimmering Maids extends professional cleaning services to Seffner and the surrounding communities. Whether you need regular weekly cleaning or a one-time deep clean, our team delivers reliable, affordable service every time.',
      neighborhoods: ['Dover', 'Mango', 'Plant City area', 'Brandon border', 'I-4 corridor'],
      services: [
        { name: 'Residential House Cleaning', kw: 'house cleaning seffner fl' },
        { name: 'Affordable Maid Service', kw: 'affordable maid seffner' },
        { name: 'Deep Cleaning', kw: '' },
        { name: 'Move-Out Cleaning', kw: '' },
        { name: 'Weekly Maintenance', kw: 'home cleaning seffner' },
      ]
    }
  },
  'plant-city': {
    name: 'Plant City', state: 'FL', slug: 'plant-city',
    longTail: {
      title: 'Maid Service in Plant City, FL | Pink Shimmering Maids',
      h1: 'Professional Maid Service & House Cleaning in Plant City, FL',
      description: 'Top-rated residential cleaning service in Plant City, FL. Serving Walden Lake, Strawberry area & downtown. Weekly maid service, deep cleaning & move-in/out cleaning. Call (813) 703-2974!',
      keywords: 'maid service plant city fl, house cleaning plant city florida, residential cleaning plant city, walden lake cleaning, strawberry area cleaning fl',
      intro: 'Pink Shimmering Maids brings professional, reliable house cleaning to Plant City and the surrounding strawberry growing region. From Walden Lake to downtown, we provide the same trusted service that makes us a top choice across Tampa Bay.',
      neighborhoods: ['Walden Lake', 'Downtown Plant City', 'Strawberry Area', 'North Plant City', 'Turkey Creek'],
      services: [
        { name: 'Residential Maid Service', kw: 'maid service plant city fl' },
        { name: 'House Cleaning', kw: 'house cleaning plant city florida' },
        { name: 'Deep Cleaning', kw: '' },
        { name: 'Move In/Out Cleaning', kw: '' },
        { name: 'Weekly & Bi-Weekly Plans', kw: '' },
      ]
    }
  },
};

const CityPage = () => {
  const path = window.location.pathname
    .replace('/house-cleaning-', '')
    .replace('-fl/', '')
    .replace('/', '');
  const city = cityData[path];

  // Set document title and meta on mount
  useEffect(() => {
    if (city) {
      document.title = city.longTail.title;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = city.longTail.description;
    }
  }, [city]);

  if (!city) {
    return (
      <div className="city-page">
        <div className="city-fallback">
          <h1>House Cleaning Services in the Tampa Bay Area</h1>
          <p>Pink Shimmering Maids serves Brandon, Tampa, St. Petersburg, Clearwater, and all of Tampa Bay.</p>
          <p>Call us at <a href="tel:8137032974">(813) 703-2974</a> to book your cleaning today!</p>
        </div>
      </div>
    );
  }

  const lt = city.longTail;

  return (
    <div className="city-page">
      {/* Hero Section */}
      <div className="city-hero">
        <h1>{lt.h1}</h1>
        <p>{lt.intro}</p>
        <a href="tel:8137032974" className="city-cta-btn">
          <Phone size={22} /> (813) 703-2974 — Book Now
        </a>
      </div>

      {/* Content */}
      <div className="city-content">
        {/* Areas Served */}
        <div className="city-section">
          <h2>
            <MapPin size={26} />
            Areas We Serve in {city.name}
          </h2>
          <div className="neighborhood-tags">
            {lt.neighborhoods.map((n, i) => (
              <span key={i} className="neighborhood-tag">{n}</span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="city-section">
          <h2>
            <Star size={26} />
            Our Cleaning Services in {city.name}
          </h2>
          <div className="service-list">
            {lt.services.map((s, i) => (
              <div key={i} className="service-item">
                <CheckCircle size={22} />
                <div>
                  <strong>{s.name}</strong>
                  {s.kw && <div className="keyword-hint">"{s.kw}"</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hours + CTA */}
        <div className="city-bottom">
          <div className="hours-box">
            <h3 style={{fontFamily: "'Playfair Display', Georgia, serif"}}>
              <Clock size={18} style={{verticalAlign: 'middle', marginRight: 6}} />
              Business Hours
            </h3>
            <p>Mon - Fri: 8:00 am - 6:00 pm</p>
            <p>Saturday: 8:00 am - 2:00 pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="cta-box">
            <h3 style={{fontFamily: "'Playfair Display', Georgia, serif"}}>Ready for a Sparkling Clean Home?</h3>
            <p>Call or book online for a free quote in {city.name}.</p>
            <a href="tel:8137032974">(813) 703-2974</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
