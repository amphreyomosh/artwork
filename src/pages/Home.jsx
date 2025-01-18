import { Helmet } from 'react-helmet';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Typing from 'react-typing-effect';
import './Home.css';

function Home() {
  const words = ['Distinction,', 'Beauty,', 'and Creativity'];

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 7 seconds for each slide
    infinite: true, // Ensures the carousel loops indefinitely
    speed: 20000, // Slowest speed for the animation (20 seconds for a full slide transition)
    autoplay: true, // Enables autoplay
    autoplaySpeed: 0, // Disables delay between slides
    cssEase: 'linear', // Creates a smooth, continuous motion

    arrows: false, // Hides navigation arrows
    draggable: false, // Disables manual dragging
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1653987255814-3b4c05832660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3N8ZW58MHx8MHx8fDA%3D',
  ];

  return (
    <div className='min-h-screen bg-gray-100 overflow-x-hidden'>
      <Helmet>
        <title>Welcome to the Art Website - Discover Beautiful Artworks</title>
        <meta
          name='description'
          content='Explore a collection of beautiful artwork created by talented artists. Learn about the creators and their stories on this art website.'
        />
        <meta
          name='keywords'
          content='art, artwork, paintings, talented artists, artwork collection, art gallery, jopegraphic'
        />
        <meta
          property='og:image'
          content='https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      {/* Hero Section */}
      <section
        className='relative w-full h-[100vh] bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww')",
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 flex items-center justify-start h-full text-white'>
          <h1 className='text-4xl sm:text-6xl lg:text-8xl font-bold pl-4 ml-4'>
            Discover The Art <br />
            That Comes with <br />
            <Typing
              text={words}
              speed={100}
              eraseSpeed={80}
              eraseDelay={2000}
              typingDelay={100}
              cursor='|'
            />
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-4'>
        <div className='flex flex-wrap lg:flex-nowrap items-center gap-6'>
          {/* Left Image */}
          <div className='w-full lg:w-1/2'>
            <img
              id='imageOne'
              src='https://images.unsplash.com/photo-1613833684940-e15a515aa1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHdvcmtzfGVufDB8fDB8fHww'
              alt='Artwork on the left side'
              className='shadow-md w-full object-cover'
            />
          </div>

          {/* Center Text */}
          <div className='w-full lg:w-3/10 text-black text-center lg:text-left px-4'>
            <p className='text-lg leading-relaxed'>
              Art is a timeless expression of creativity, passion, and imagination. Each piece tells
              a unique story, capturing emotions and moments that resonate with the soul. Explore
              the vibrant creations of talented artists, their inspirations, and the techniques that
              bring their visions to life.
            </p>
          </div>

          {/* Right Image */}
          <div className='w-full lg:w-7/20'>
            <img
              src='https://images.unsplash.com/photo-1728675437270-0878c337e5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHdvcmtzfGVufDB8fDB8fHww'
              alt='Artwork on the right side'
              className='shadow-md w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className='py-16 bg-white'>
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index} className='p-3'>
              <img
                src={image}
                alt={`Artwork ${index + 1}`}
                className='shadow-md w-full h-auto object-cover'
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Home;
