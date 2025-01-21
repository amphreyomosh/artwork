// ArtworkPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ArtworkPage() {
  const location = useLocation();
  const { artwork } = location.state;

  return (
    <div className='artwork-page p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-16'>
      {/* Artwork Image */}
      <img
        src={artwork.image}
        alt={artwork.title}
        className='artwork-image w-full max-w-md shadow-md mb-6 mt-16'
      /> 

      {/* Artwork Title */}
      <h3 className='artwork-title text-2xl font-semibold text-gray-800 mb-4'>{artwork.title}</h3>

      {/* Artwork Description */}
      <p className='artwork-description text-gray-600 text-center mb-6'>{artwork.description}</p>

      {/* Price Information */}
      <p className='text-gray-800 font-medium'>
        <span className='text-green-600 font-bold'>Sold:</span> ${artwork.price.sold} |
        <span className='text-red-600 font-bold'> Remaining:</span> ${artwork.price.remaining}
      </p>
    </div>
  );
}

export default ArtworkPage;
