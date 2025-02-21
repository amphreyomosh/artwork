import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';

const projectDetails = {
  1: {
    title: 'Jaguar Paint',
    description:
      'Painted a jaguar on a canva with black piece of art. This piece captures the raw beauty and power of the jaguar, with intricate details and vibrant colors that bring the animal to life.',
    image: '/jaguar-art.jpg', // Replace with actual image URL
  },
  2: {
    title: 'Exquisite Pencil Drawings',
    description:
      'Intricate pencil sketches that capture stunning details and lifelike textures, bringing art to life with every stroke. Each drawing is a testament to the artist’s skill and dedication to realism.',
    image: 'https://source.unsplash.com/random/800x600/?pencil,drawing',
  },
  3: {
    title: 'Magnificent Sculptures',
    description:
      'Handcrafted sculptures blending creativity and precision, designed to leave a lasting impression with every curve and contour. These sculptures are perfect for adding a touch of elegance to any space.',
    image: '/sculpture.jpg',
  },
  4: {
    title: 'Expressive Canvas Art',
    description:
      'Dynamic and abstract canvas art pieces to inspire and captivate the imagination, creating a world of emotion through color and form. Each piece is a unique expression of the artist’s vision.',
    image: 'https://source.unsplash.com/random/800x600/?canvas,art',
  },
  5: {
    title: 'Contemporary Digital Art',
    description:
      'Cutting-edge digital creations that redefine artistic boundaries, blending technology with creativity to create unique, modern masterpieces. These pieces are perfect for the tech-savvy art lover.',
    image: 'https://source.unsplash.com/random/800x600/?digital,art',
  },
  6: {
    title: 'Photography Masterpieces',
    description:
      'Breathtaking photographs that capture life’s most beautiful moments, freezing time and emotion in a single frame. Each photograph tells a story and evokes a sense of wonder.',
    image: 'https://source.unsplash.com/random/800x600/?photography,art',
  },
  7: {
    title: 'Mixed Media Creations',
    description:
      'Innovative art pieces combining different media to craft unique expressions, breaking traditional boundaries and experimenting with materials. These creations are a testament to the artist’s versatility and creativity.',
    image: 'https://source.unsplash.com/random/800x600/?mixed,media,art',
  },
  8: {
    title: 'Iconic Mural Designs',
    description:
      'Large-scale murals that transform spaces into vibrant works of art, turning walls into canvases for storytelling and visual impact. These murals are perfect for making a bold statement.',
    image: 'https://source.unsplash.com/random/800x600/?mural,art',
  },
  9: {
    title: 'Artistic Installations',
    description:
      'Immersive installations that create unforgettable visual and spatial experiences, combining art, architecture, and design to challenge perception. These installations are perfect for public spaces and galleries.',
    image: 'https://source.unsplash.com/random/800x600/?installation,art',
  },
  10: {
    title: 'Ceramic Artistry',
    description:
      'Delicate and detailed ceramic pieces showcasing precision, craftsmanship, and the timeless beauty of hand-formed clay. Each piece is a unique work of art that adds elegance to any setting.',
    image: 'https://source.unsplash.com/random/800x600/?ceramic,art',
  },
  11: {
    title: 'Calligraphy Wonders',
    description:
      'Beautifully handcrafted calligraphy that celebrates the art of lettering, blending tradition with modern aesthetics to create timeless works. These pieces are perfect for adding a touch of sophistication to any space.',
    image: 'https://source.unsplash.com/random/800x600/?calligraphy,art',
  },
  12: {
    title: 'Glass Art Creations',
    description:
      'Dazzling glass art pieces blending color, light, and creativity, turning fragile material into stunning visual art that captivates and inspires. These pieces are perfect for adding a touch of elegance to any space.',
    image: 'https://source.unsplash.com/random/800x600/?glass,art',
  },
  13: {
    title: 'Wooden Masterpieces',
    description:
      'Carved wooden art combining traditional craftsmanship with contemporary design, resulting in timeless and durable pieces of functional art. These pieces are perfect for adding a touch of rustic charm to any space.',
    image: 'https://source.unsplash.com/random/800x600/?wood,art',
  },
  14: {
    title: 'Metalwork Marvels',
    description:
      'Intricate metal art that highlights elegance, durability, and design, using the strength of metal to create artistic expressions that stand the test of time. These pieces are perfect for adding a touch of industrial chic to any space.',
    image: 'https://source.unsplash.com/random/800x600/?metal,art',
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className='min-h-screen bg-gray-100 p-4 sm:p-16 mt-16'>
      <div className='sm:max-w-4xl w-full mx-auto mt-16'>
        {/* Breadcrumb Navigation */}
        <nav className='mb-4'>
          <Link to='/projects' className='text-yellow-500 hover:underline'>
            Projects
          </Link>{' '}
          / <span>{project.title}</span>
        </nav>
        <div className='bg-white p-6 w-full shadow-lg'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>{project.title}</h1>
          <img src={project.image} alt={project.title}/>
          <p className='text-gray-600 mb-4'>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
