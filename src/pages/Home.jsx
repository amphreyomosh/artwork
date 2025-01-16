import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        {/* SEO Tags */}
        <title>Welcome to the Art Website - Discover Beautiful Artworks</title>
        <meta name="description" content="Explore a collection of beautiful artwork created by talented artists. Learn about the creators and their stories on this art website." />
        <meta name="keywords" content="art, artwork, paintings, talented artists, artwork collection, art gallery" />
        <meta property="og:title" content="Welcome to the Art Website - Discover Beautiful Artworks" />
        <meta property="og:description" content="Explore a collection of beautiful artwork created by talented artists. Learn about the creators and their stories on this art website." />
        <meta property="og:image" content="https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to the Art Website - Discover Beautiful Artworks" />
        <meta name="twitter:description" content="Explore a collection of beautiful artwork created by talented artists. Learn about the creators and their stories on this art website." />
        <meta name="twitter:image" content="https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Welcome to the Art Website</h1>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">About This Art Website</h2>
        <p className="text-xl max-w-3xl mx-auto text-gray-700">
          This website showcases a collection of beautiful artwork created by talented artists. Explore the various
          sections to learn more about the art, the creators, and their stories. Our mission is to bring art to the
          forefront and share it with the world.
        </p>
      </section>

      {/* More Section with Images */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">More Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <img
              src="/path-to-image-1.jpg"
              alt="Artwork 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/path-to-image-2.jpg"
              alt="Artwork 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/path-to-image-3.jpg"
              alt="Artwork 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
