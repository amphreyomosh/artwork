import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    country: 'US',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-start ml-5'>
        <h2 className='text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
          Contact Me!
        </h2>
        <p className='mt-2 text-lg text-gray-600'>I will create your favourite art work.</p>
      </div>
      <div className='mt-1 lg:grid lg:grid-cols-2 lg:gap-8 lg:gap-x-16 ml-8'>
        <form
          action='https://formspree.io/f/xrbbnprj'
          method='POST'
          className='lg:col-span-1 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-semibold text-gray-900'>
                First name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='mt-2.5 block w-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600'
              />
            </div>
            <div>
              <label htmlFor='lastName' className='block text-sm font-semibold text-gray-900'>
                Last name
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='mt-2.5 block w-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600'
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='company' className='block text-sm font-semibold text-gray-900'>
                Company
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                className='mt-2.5 block w-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600'
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-900'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='mt-2.5 block w-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600'
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='phoneNumber' className='block text-sm font-semibold text-gray-900'>
                Phone number
              </label>
              <div className='mt-2.5 flex'>
                <select
                  id='country'
                  name='country'
                  value={formData.country}
                  onChange={handleChange}
                  className='-l px-3.5 py-2 bg-white outline outline-1 outline-gray-300 focus:outline-indigo-600'
                >
                  <option value='US'>+1 (US)</option>
                  <option value='CA'>+1 (Canada)</option>
                  <option value='KE'>+254 (Kenya)</option>
                  <option value='GB'>+44 (UK)</option>
                  <option value='IN'>+91 (India)</option>
                  <option value='NG'>+234 (Nigeria)</option>
                  <option value='AU'>+61 (Australia)</option>
                  <option value='DE'>+49 (Germany)</option>
                  <option value='FR'>+33 (France)</option>
                  <option value='IT'>+39 (Italy)</option>
                  <option value='ZA'>+27 (South Africa)</option>
                  <option value='ES'>+34 (Spain)</option>
                  <option value='SG'>+65 (Singapore)</option>
                  <option value='MX'>+52 (Mexico)</option>
                  <option value='BR'>+55 (Brazil)</option>
                  <option value='JP'>+81 (Japan)</option>
                  <option value='KR'>+82 (South Korea)</option>
                  <option value='RU'>+7 (Russia)</option>
                  <option value='CN'>+86 (China)</option>
                </select>
                <input
                  type='text'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder='123-456-7890'
                  className='flex-grow -r px-3.5 py-2 bg-white outline outline-1 outline-gray-300 focus:outline-indigo-600'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block text-sm font-semibold text-gray-900'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                className='mt-2.5 block w-full bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600'
              ></textarea>
            </div>
          </div>
          <div className='mt-10'>
            <button
              type='submit'
              className='block w-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-indigo-600'
            >
              Let's talk
            </button>
          </div>
        </form>

        <div className='lg:col-span-1 mt-8 lg:mt-0'>
          <img
            src='https://media.istockphoto.com/id/2187808597/photo/lioness-drinking-from-a-tranquil-waterhole-at-night-in-southern-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=ePjlV3Mg40TbG-kQmAUvHtlOxHaeNbV5VFpUX3Ck-PI=' // Replace with your actual image URL
            alt='Contact Image'
            className='w-full h-auto shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
