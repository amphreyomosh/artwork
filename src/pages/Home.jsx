import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Helmet>
        {/* SEO Tags */}
        <title>Welcome to the Art Website - Discover Beautiful Artworks</title>
        <meta
          name='description'
          content='Explore a collection of beautiful artwork created by talented artists. Learn about the creators and their stories on this art website.'
        />
        <meta
          name='keywords'
          content='art, artwork, paintings, talented artists, artwork collection, art gallery, jopegraphic'
        />
        {/* Social Tags */}
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

      {/* Featured Artists */}
      <section className='py-16 px-4 bg-gray-50'>
        <h2 className='text-3xl font-semibold text-center mb-6'>Featured Artists</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='text-center'>
            <img
              src='/path-to-artist-1.jpg'
              alt='Artist 1'
              className='w-32 h-32 rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-bold'>Artist Name 1</h3>
            <p className='text-gray-600'>Abstract & Modern Art</p>
          </div>
          <div className='text-center'>
            <img
              src='/path-to-artist-2.jpg'
              alt='Artist 2'
              className='w-32 h-32 rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-bold'>Artist Name 2</h3>
            <p className='text-gray-600'>Sculptures & Installations</p>
          </div>
          <div className='text-center'>
            <img
              src='/path-to-artist-3.jpg'
              alt='Artist 3'
              className='w-32 h-32 rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-bold'>Artist Name 3</h3>
            <p className='text-gray-600'>Realistic Oil Paintings</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 px-4'>
        <h2 className='text-3xl font-semibold text-center mb-6'>Testimonials</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <blockquote className='text-lg text-gray-700'>
            "This website is a treasure trove of inspiration! The artworks are stunning, and the
            platform is user-friendly." – Jane Doe
          </blockquote>
          <blockquote className='text-lg text-gray-700'>
            "As an artist, I love how this platform showcases diverse styles and connects art lovers
            with creators." – John Smith
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default Home;
