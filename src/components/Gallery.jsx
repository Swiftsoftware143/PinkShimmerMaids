import React from 'react';
import '../styles/Gallery.css';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df',
    alt: 'Professional vacuuming service'
  },
  {
    url: 'https://images.unsplash.com/photo-1736433622548-4adbbc1c2cf2',
    alt: 'Kitchen sink cleaning'
  },
  {
    url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2',
    alt: 'Clean organized kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
    alt: 'Clean bright bathroom'
  },
  {
    url: 'https://images.pexels.com/photos/4108713/pexels-photo-4108713.jpeg',
    alt: 'Professional kitchen cleaning'
  },
  {
    url: 'https://images.pexels.com/photos/4108672/pexels-photo-4108672.jpeg',
    alt: 'Professional bathroom cleaning'
  },
  {
    url: 'https://images.pexels.com/photos/4108673/pexels-photo-4108673.jpeg',
    alt: 'Kitchen cleaning detail'
  },
  {
    url: 'https://images.pexels.com/photos/9462643/pexels-photo-9462643.jpeg',
    alt: 'Bathroom cleaning in action'
  },
  {
    url: 'https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg',
    alt: 'Professional cleaning team'
  },
  {
    url: 'https://images.pexels.com/photos/6196694/pexels-photo-6196694.jpeg',
    alt: 'Professional mopping'
  },
  {
    url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb',
    alt: 'Clean living room'
  },
  {
    url: 'https://images.unsplash.com/photo-1647381518264-97ff1835026f',
    alt: 'Professional cleaner at work'
  }
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Cleaning in Action</h2>
        <p className="gallery-description">
          Explore our gallery to see the transformative power of our cleaning services, showcasing cleanliness in every detail.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.url} className="gallery-item">
              <img 
                src={image.url} 
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="overlay-text">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;