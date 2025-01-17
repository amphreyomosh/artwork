import React from 'react';
import { Helmet } from 'react-helmet';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 7 seconds for each slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
  ];

  return (
    <div className='min-h-screen bg-gray-100 overflow-x-hidden'>
      <Helmet>
        <title>Welcome to the Art Website - Discover Beautiful Artworks</title>
        <meta
          name='description'
          content='Explore a collection of beautiful artwork created by talented artists. Learn about the creators and their stories on this art website.'
        />
        <meta
          name='keywords'
          content='art, artwork, paintings, talented artists, artwork collection, art gallery, jopegraphic'
        />
        <meta
          property='og:image'
          content='https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      {/* Hero Section */}
      <section
        className='relative w-full h-[60vh] bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww')",
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 flex items-center justify-center h-full text-white text-center'>
          <h1 className='text-5xl font-bold'>Welcome to the Art Website</h1>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-4 text-center'>
        <h2 className='text-3xl font-semibold mb-6'>About This Art Website</h2>
        <p className='text-xl max-w-3xl mx-auto text-gray-700'>
          This website showcases a collection of beautiful artwork created by talented artists.
          Explore the various sections to learn more about the art, the creators, and their stories.
          Our mission is to bring art to the forefront and share it with the world.
        </p>
      </section>

      {/* Carousel Section */}
      <section className='py-16 px-4 bg-white'>
        <h2 className='text-3xl font-semibold text-center mb-6'>Artwork Carousel</h2>
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index} className='p-4'>
              <img
                src={image}
                alt={`Artwork ${index + 1}`}
                className='rounded-lg shadow-md w-full h-48 object-cover'
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Other Sections */}
      {/* ... */}
    </div>
  );
}

export default Home;
