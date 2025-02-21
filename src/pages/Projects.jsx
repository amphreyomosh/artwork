import React from 'react';
import { Link } from 'react-router-dom';
import './src/pages/Projects.css';

const projectList = [
  {
    id: 1,
    title: 'Jaguar Paint',
    description: 'Explore vibrant, timeless paintings that tell stories and evoke emotions.',
    bgImage: '/jaguar-art.jpg',
  },
  {
    id: 2,
    title: 'Exquisite Pencil Drawings',
    description: 'Intricate pencil sketches that capture stunning details and lifelike textures.',
    bgImage: '/images/pencil-drawings.jpg',
  },
  {
    id: 3,
    title: 'Magnificent Sculptures',
    description: 'Handcrafted sculptures blending creativity and precision for lasting impressions.',
    bgImage: '/sculpture.jpg',
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
    <div id='projects' className='min-h-screen bg-white p-4 sm:p-16 mt-16'>
      <div className='max-w-6xl mx-auto text-start'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {projectList.map((project) => (
            <div
              key={project.id}
              className='project-card bg-white shadow-lg transition-shadow duration-300'
              style={{
                width: '100%',
                height: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${project.bgImage})`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = 'none')}
            >
              <div className='project-content'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-3'>{project.title}</h2>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='flex justify-start'>
                  <Link to={`/projects/${project.id}`}>
                    <button className='bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-600'>
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
