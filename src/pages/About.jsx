import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About ArtSite</h1>
        <p className="text-lg text-gray-600">
          Welcome to ArtSite! Here, we celebrate creativity, art, and innovation.
        </p>
      </div>

      {/* Mission Statement Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
          Our mission is to provide a platform where artists can showcase their work, 
          collaborate, and gain inspiration from a community of like-minded creatives. 
          We aim to foster growth and creativity in the digital art space.
        </p>
      </div>

      {/* Technologies Used */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Technologies We Use</h2>
        <p className="text-lg text-gray-600 mt-4">
          This website was built using modern web technologies:
        </p>
        <ul className="flex justify-center mt-6 space-x-8">
          <li className="text-xl font-medium text-gray-800">React</li>
          <li className="text-xl font-medium text-gray-800">TailwindCSS</li>
          <li className="text-xl font-medium text-gray-800">Node.js</li>
        </ul>
      </div>

      {/* Team Section (optional) */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
        <div className="flex justify-center space-x-8 mt-8">
          <div className="text-center">
            <img src="your-image.jpg" alt="team-member" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="text-center">
            <img src="your-image.jpg" alt="team-member" className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600">
        <p>© 2025 ArtSite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
