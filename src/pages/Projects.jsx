import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Projects</h1>
        <p className="text-lg mb-6 text-gray-600">
          Here are some of the amazing projects we’ve worked on. Explore our work and see the results of our passion and dedication!
        </p>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 1: Website Redesign</h2>
            <p className="text-gray-600 mb-4">
              We helped a local business revamp their website with a fresh, modern design that improved user engagement and sales.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 2: E-commerce Platform</h2>
            <p className="text-gray-600 mb-4">
              We developed a robust e-commerce platform with custom features for a smooth and secure shopping experience.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 3: Mobile App Development</h2>
            <p className="text-gray-600 mb-4">
              We created a mobile app that enhances the user experience for customers with easy navigation and intuitive design.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 4: Branding & Logo Design</h2>
            <p className="text-gray-600 mb-4">
              Our team crafted a unique and memorable brand identity, including a custom logo and brand guidelines.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 5: Digital Marketing Campaign</h2>
            <p className="text-gray-600 mb-4">
              We executed a comprehensive digital marketing campaign that increased brand awareness and online sales for our client.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 6: Custom Software Solution</h2>
            <p className="text-gray-600 mb-4">
              We developed a custom software solution tailored to a client's unique business needs, improving efficiency and operations.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 7: Interactive Dashboard</h2>
            <p className="text-gray-600 mb-4">
              We created an interactive dashboard for tracking business metrics in real-time, offering valuable insights to decision-makers.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 8: Social Media Integration</h2>
            <p className="text-gray-600 mb-4">
              Our team integrated social media sharing and tracking features to enhance user engagement and social proof for our client.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>

          {/* Card 9 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project 9: SEO Optimization</h2>
            <p className="text-gray-600 mb-4">
              We optimized our client's website for search engines, improving visibility and driving more organic traffic to their site.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
