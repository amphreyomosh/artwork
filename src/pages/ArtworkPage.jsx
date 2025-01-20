// ArtworkPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ArtworkPage() {
  const location = useLocation();
  const { artwork } = location.state;

  return (
    <div className="artwork-page">
      <img src={artwork.image} alt={artwork.title} className="artwork-image" />
      <h3 className="artwork-title">{artwork.title}</h3>
      <p className="artwork-description">{artwork.description}</p>
      <p>Sold: {artwork.price.sold} | Remaining: {artwork.price.remaining}</p>
    </div>
  );
}

export default ArtworkPage;
