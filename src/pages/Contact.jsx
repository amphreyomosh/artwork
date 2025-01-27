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
    <div className='isolate bg-white px-4 py-12 sm:py-16 lg:px-8 mt-16'>
      <div className='container mx-auto max-w-7xl'>
        <div className='text-start mb-8'>
          <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>
            Contact Me!
          </h2>
          <p className='mt-2 text-lg text-gray-600'>I will create your favorite artwork.</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-12'>
          <form
            action='https://formspree.io/f/xrbbnprj'
            method='POST'
            className='lg:col-span-1 space-y-6'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='firstName' className='block text-sm font-semibold text-gray-900'>
                  First name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className='mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600'
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
                  className='mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600'
                />
              </div>
            </div>
            <div>
              <label htmlFor='company' className='block text-sm font-semibold text-gray-900'>
                Company
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                className='mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-900'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600'
              />
            </div>
            <div>
              <label htmlFor='phoneNumber' className='block text-sm font-semibold text-gray-900'>
                Phone number
              </label>
              <div className='flex mt-2'>
                <select
                  id='country'
                  name='country'
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className='block w-1/3 bg-white px-3 py-2 text-base border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 0'
                >
                  <option value='KE'>+254 (Kenya)</option>
                  <option value='UG'>+256 (Uganda)</option>
                  <option value='TZ'>+255 (Tanzania)</option>
                  <option value='RW'>+250 (Rwanda)</option>
                  <option value='ET'>+251 (Ethiopia)</option>
                  <option value='SO'>+252 (Somalia)</option>
                  <option value='SS'>+211 (South Sudan)</option>
                  <option value='ER'>+291 (Eritrea)</option>
                  <option value='BI'>+257 (Burundi)</option>
                  <option value='DJ'>+253 (Djibouti)</option>

                  <option value='NG'>+234 (Nigeria)</option>
                  <option value='GH'>+233 (Ghana)</option>
                  <option value='CI'>+225 (Ivory Coast)</option>
                  <option value='SN'>+221 (Senegal)</option>
                  <option value='ML'>+223 (Mali)</option>
                  <option value='BF'>+226 (Burkina Faso)</option>
                  <option value='NE'>+227 (Niger)</option>
                  <option value='TG'>+228 (Togo)</option>
                  <option value='BJ'>+229 (Benin)</option>
                  <option value='LR'>+231 (Liberia)</option>

                  <option value='ZA'>+27 (South Africa)</option>
                  <option value='ZM'>+260 (Zambia)</option>
                  <option value='ZW'>+263 (Zimbabwe)</option>
                  <option value='MW'>+265 (Malawi)</option>
                  <option value='NA'>+264 (Namibia)</option>
                  <option value='BW'>+267 (Botswana)</option>
                  <option value='SZ'>+268 (Eswatini)</option>
                  <option value='LS'>+266 (Lesotho)</option>
                  <option value='AO'>+244 (Angola)</option>
                  <option value='MZ'>+258 (Mozambique)</option>
                  {/* Add more countries */}
                </select>
                <input
                  type='text'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder='123-456-7890'
                  className='block w-2/3 bg-white px-3 py-2 text-base border border-l-0 border-gray-300 focus:border-indigo-600 focus:ring-indigo-600'
                />
              </div>
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-semibold text-gray-900'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                className='mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-yellow-500 text-white py-4 px-3 text-sm font-semibold hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-600'
            >
              Send Message
            </button>
          </form>
          <div className='lg:col-span-1 flex justify-center'>
            <img
              src='https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFpbnRzfGVufDB8fDB8fHww'
              alt='Contact'
              className='w-f0 object-cover shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
