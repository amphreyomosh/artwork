import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800 pt-16'>
      {/* Artist Bio Section */}
      <div className='container mx-auto py-16 px-6'>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='w-full md:w-1/2'>
            <img
              src='https://images.unsplash.com/photo-1517825738774-7de9363ef735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB0aWdlcnxlbnwwfHwwfHx8MA%3D%3D'
              alt='Artist'
              className='shadow-lg w-full h-400'
            />
          </div>
          <div className='w-full md:w-1/2 mt-8 md:mt-0'>
            <h2 className='text-3xl font-bold mb-4'>JOPE</h2>
            <p className='text-lg leading-relaxed mb-4'>
              I'm a visionary artist with a deep passion for storytelling through visuals. With
              years of experience and a dedication to creativity, their work reflects a unique blend
              of emotion, technique, and innovation.
            </p>
            <p className='text-lg leading-relaxed'>
              From humble beginnings to mastering their craft, I have continuously pushed
              boundaries, exploring new mediums and styles. Their art captures the essence of human
              experiences, sparking inspiration and connection with every piece.
            </p>
          </div>
        </div>
      </div>
      {/* Inspirational Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto text-end px-6'>
          <h2 className='text-3xl font-bold mb-6'>The Vision Behind the Art</h2>
          <p className='text-lg max-w-4xl ml-auto mb-8 text-end px-6'>
            “I believe that art has the power to transform lives, connect communities, and ignite
            change. Each piece is a reflection of their journey, designed to inspire and evoke
            emotion.”
          </p>

          <blockquote className='italic text-gray-600'>
            "Art speaks where words are unable to explain." – [jope]
          </blockquote>
        </div>
      </div>
      {/* Featured Works */}
      <div className='container mx-auto py-16 px-6'>
        <h2 className='text-3xl font-bold text-start mb-8'>Featured Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white shadow-lg overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FwdHVyZXMlMjB0aGUlMjBlc3NlbmNlJTIwb2YlMjBzZWxmJTIwZGlzY292ZXJ5JTIwYW5kJTIwZ3Jvd3RoJTIwYW5kJTIwYXJ0fGVufDB8fDB8fHww'
              alt='Artwork 1'
              className='w-full h-64 object-cover'
            />
            <div className='p-11'>
              <h3 className='text-xl font-bold mb-2'>"The Journey"</h3>
              <p className='text-gray-600'>Captures the essence of self-discovery and growth.</p>
            </div>
          </div>
          <div className='bg-white shadow-lg overflow-hidden'>
            <img
              src='https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QSUyMHZpc3VhbCUyMHJlcHJlc2VudGF0aW9uJTIwb2YlMjBsaWZlJ3MlMjBmbGVldGluZyUyMGJlYXV0eSUyMGFuZCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D'
              alt='Artwork 2'
              className='w-full h-64 object-cover'
            />
            <div className='p-11'>
              <h3 className='text-xl font-bold mb-2'>"Moments in Time"</h3>
              <p className='text-gray-600'>A visual representation of life's fleeting beauty.</p>
            </div>
          </div>
          <div className='bg-white shadow-lg overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eHBsb3JpbmclMjBiYWxhbmNlJTIwYW5kJTIwdW5pdHklMjBpbiUyMGRpdmVyc2l0eS58ZW58MHx8MHx8fDA%3D'
              alt='Artwork 3'
              className='w-full h-64 object-cover'
            />
            <div className='p-11'>
              <h3 className='text-xl font-bold mb-2'>"Harmony"</h3>
              <p className='text-gray-600'>Exploring balance and unity in diversity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
