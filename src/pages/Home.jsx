function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
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
  