import React from 'react';
import { Link } from 'react-router-dom';

const projectList = [
  {
    id: 1,
    title: 'Masterful Paintings',
    description: 'Explore vibrant, timeless paintings that tell stories and evoke emotions.',
    bgImage:
      'url(https://plus.unsplash.com/premium_photo-1674815483003-e0334e1e33d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hc3RlcmZ1bCUyMHBhaW50aW5nfGVufDB8fDB8fHww)', // Replace with the actual image path or URL
  },
  {
    id: 2,
    title: 'Exquisite Pencil Drawings',
    description: 'Intricate pencil sketches that capture stunning details and lifelike textures.',
    bgImage: 'url(/images/pencil-drawings.jpg)',
  },
  {
    id: 3,
    title: 'Magnificent Sculptures',
    description:
      'Handcrafted sculptures blending creativity and precision for lasting impressions.',
    bgImage: 'url(/images/sculptures.jpg)',
  },
  {
    id: 4,
    title: 'Expressive Canvas Art',
    description: 'Dynamic and abstract canvas art pieces to inspire and captivate.',
    bgImage: 'url(/images/canvas-art.jpg)',
  },
  {
    id: 5,
    title: 'Contemporary Digital Art',
    description: 'Cutting-edge digital creations that redefine artistic boundaries.',
    bgImage: 'url(/images/digital-art.jpg)',
  },
  {
    id: 6,
    title: 'Photography Masterpieces',
    description: 'Breathtaking photographs that frame life’s most beautiful moments.',
    bgImage: 'url(/images/photography.jpg)',
  },
  {
    id: 7,
    title: 'Mixed Media Creations',
    description: 'Innovative art pieces combining different media to craft unique expressions.',
    bgImage: 'url(/images/mixed-media.jpg)',
  },
  {
    id: 8,
    title: 'Iconic Mural Designs',
    description: 'Large-scale murals that transform spaces into vibrant works of art.',
    bgImage: 'url(/images/murals.jpg)',
  },
  {
    id: 9,
    title: 'Artistic Installations',
    description:
      'Immersive installations that create unforgettable visual and spatial experiences.',
    bgImage: 'url(/images/installations.jpg)',
  },
  {
    id: 10,
    title: 'Ceramic Artistry',
    description: 'Delicate and detailed ceramic pieces showcasing precision and artistry.',
    bgImage: 'url(/images/ceramic-art.jpg)',
  },
  {
    id: 11,
    title: 'Calligraphy Wonders',
    description: 'Beautifully handcrafted calligraphy that celebrates the art of lettering.',
    bgImage: 'url(/images/calligraphy.jpg)',
  },
  {
    id: 12,
    title: 'Glass Art Creations',
    description: 'Dazzling glass art pieces blending color, light, and creativity.',
    bgImage: 'url(/images/glass-art.jpg)',
  },
  {
    id: 13,
    title: 'Wooden Masterpieces',
    description: 'Carved wooden art combining traditional craftsmanship with contemporary design.',
    bgImage: 'url(/images/wooden-art.jpg)',
  },
  {
    id: 14,
    title: 'Metalwork Marvels',
    description: 'Intricate metal art that highlights elegance and durability.',
    bgImage: 'url(/images/metal-art.jpg)',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen bg-white p-16 mt-16'>
      {/* Added 'mt-16' to create space below the navbar */}
      <div className='max-w-6xl mx-auto text-startr'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectList.map((project) => (
            <div
              key={project.id}
              className='bg-white p-11  shadow-lg hover:shadow-xl transition-shadow duration-300'
              style={{
                backgroundImage: project.bgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <h2 className='text-2xl font-semibold text-gray-800 mb-3'>{project.title}</h2>
              <p className='text-gray-600 mb-4'>{project.description}</p>
              <div className='flex justify-start'>
                {/* Wrapping the button inside a flex container */}
                <Link to={`/projects/${project.id}`}>
                  <button className='bg-yellow-500 text-white py-2 px-4  hover:bg-yellow-600'>
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
