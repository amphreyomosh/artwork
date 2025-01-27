import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className='bg-gray-600 text-white py-8'>
      <div className='container mx-auto px-4'>
        {/* Top Section */}
        <div className='flex flex-wrap justify-between items-center border-b border-gray-700 pb-6'>
          {/* Logo & About */}
          <div className='w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0'>
            <p className='text-gray-400 text-md'>
              Discover beautiful art from <strong>Jope Graphics</strong> based in Kenya and be
              inspired by creativity and passion.
            </p>
          </div>

          {/* Newsletter */}
          <div className='w-full md:w-1/3 text-center md:text-right'>
            <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
            <form
              action='https://<your-datacenter>.api.mailchimp.com/subscribe/post?u=xxxxxxx&amp;id=yyyyyyy'
              method='POST'
              className='flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end'
            >
              <input
                type='email'
                name='EMAIL'
                placeholder='Enter your email'
                required
                className='px-4 py-2 rounded-lg bg-gray-700 text-gray-200 w-2/3 md:w-auto focus:outline-none mb-2 md:mb-0 md:mr-2'
              />
              <button
                type='submit'
                className='px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300'
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
            <div className='flex space-x-6 justify-center md:justify-start'>
              <a href='#' className='text-gray-400 hover:text-white transition duration-300'>
                <i className='fab fa-facebook-f fa-2x'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition duration-300'>
                <i className='fab fa-twitter fa-2x'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition duration-300'>
                <i className='fab fa-instagram fa-2x'></i>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className='w-full md:w-1/2 text-center md:text-right'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} JopeGraphics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
