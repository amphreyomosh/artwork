import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
  1: {
    title: 'Masterful Paintings',
    description:
      'Dive deep into the world of vibrant and evocative paintings, where each brushstroke tells a story and captures the essence of timeless artistry.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 500, // Price for sold items
      remaining: 600, // Price for remaining items
    },
  },
  2: {
    title: 'Exquisite Pencil Drawings',
    description:
      'Intricate pencil sketches that capture stunning details and lifelike textures, bringing art to life with every stroke.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 300,
      remaining: 350,
    },
  },
  3: {
    title: 'Magnificent Sculptures',
    description:
      'Handcrafted sculptures blending creativity and precision, designed to leave a lasting impression with every curve and contour.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 800,
      remaining: 1000,
    },
  },
  4: {
    title: 'Expressive Canvas Art',
    description:
      'Dynamic and abstract canvas art pieces to inspire and captivate the imagination, creating a world of emotion through color and form.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 450,
      remaining: 550,
    },
  },
  5: {
    title: 'Contemporary Digital Art',
    description:
      'Cutting-edge digital creations that redefine artistic boundaries, blending technology with creativity to create unique, modern masterpieces.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 700,
      remaining: 800,
    },
  },
  6: {
    title: 'Photography Masterpieces',
    description:
      'Breathtaking photographs that capture life’s most beautiful moments, freezing time and emotion in a single frame.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 600,
      remaining: 750,
    },
  },
  7: {
    title: 'Mixed Media Creations',
    description:
      'Innovative art pieces combining different media to craft unique expressions, breaking traditional boundaries and experimenting with materials.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 350,
      remaining: 400,
    },
  },
  8: {
    title: 'Iconic Mural Designs',
    description:
      'Large-scale murals that transform spaces into vibrant works of art, turning walls into canvases for storytelling and visual impact.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 1000,
      remaining: 1200,
    },
  },
  9: {
    title: 'Artistic Installations',
    description:
      'Immersive installations that create unforgettable visual and spatial experiences, combining art, architecture, and design to challenge perception.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 1200,
      remaining: 1500,
    },
  },
  10: {
    title: 'Ceramic Artistry',
    description:
      'Delicate and detailed ceramic pieces showcasing precision, craftsmanship, and the timeless beauty of hand-formed clay.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 400,
      remaining: 500,
    },
  },
  11: {
    title: 'Calligraphy Wonders',
    description:
      'Beautifully handcrafted calligraphy that celebrates the art of lettering, blending tradition with modern aesthetics to create timeless works.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 250,
      remaining: 300,
    },
  },
  12: {
    title: 'Glass Art Creations',
    description:
      'Dazzling glass art pieces blending color, light, and creativity, turning fragile material into stunning visual art that captivates and inspires.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 900,
      remaining: 1100,
    },
  },
  13: {
    title: 'Wooden Masterpieces',
    description:
      'Carved wooden art combining traditional craftsmanship with contemporary design, resulting in timeless and durable pieces of functional art.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 650,
      remaining: 800,
    },
  },
  14: {
    title: 'Metalwork Marvels',
    description:
      'Intricate metal art that highlights elegance, durability, and design, using the strength of metal to create artistic expressions that stand the test of time.',
    image: 'url_to_image', // Replace with actual image URL
    price: {
      sold: 750,
      remaining: 950,
    },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className='min-h-screen bg-gray-100 p-16 mt-16'>
      <div className='max-w-4xl mx-auto'>
        {/* Breadcrumb Navigation */}
        <nav className='mb-4'>
          <Link to='/projects' className='text-yellow-500 hover:underline'>
            Projects
          </Link>{' '}
          / <span>{project.title}</span>
        </nav>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>{project.title}</h1>
          <img src={project.image} alt={project.title} className='w-full h-auto mb-4 rounded-lg' />
          <p className='text-gray-600 mb-4'>{project.description}</p>
          <p><strong>Price for sold pieces:</strong> ${project.price.sold}</p>
          <p><strong>Price for remaining pieces:</strong> ${project.price.remaining}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
