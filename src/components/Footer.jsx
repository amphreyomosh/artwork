import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        {/* Top Section */}
        <div className='flex flex-wrap justify-between items-center border-b border-gray-700 pb-6'>
          {/* Logo & About */}
          <div className='w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold mb-2'>ArtWebsite</h2>
            <p className='text-gray-400 text-sm'>
              Discover beautiful artworks from talented artists across the globe. Be inspired by
              creativity and passion.
            </p>
          </div>

          {/* Newsletter */}
          <div className='w-full md:w-1/3 text-center md:text-right'>
            <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
            <form>
              <input
                type='email'
                placeholder='Enter your email'
                className='px-4 py-2 rounded-lg bg-gray-700 text-gray-200 w-2/3 md:w-full focus:outline-none'
              />
              <button
                type='submit'
                className='mt-2 md:mt-0 md:ml-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-wrap justify-between items-center pt-6'>
          {/* Social Media */}
          <div className='w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0'>
            <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
            <div className='space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-facebook-f'></i> Facebook
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-twitter'></i> Twitter
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-instagram'></i> Instagram
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-pinterest'></i> Pinterest
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className='w-full md:w-1/2 text-center md:text-right'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} ArtWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
