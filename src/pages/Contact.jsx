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
    <div className="isolate bg-white px-4 py-12 sm:py-16 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-start mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            I will create your favorite artwork.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <form
            action="https://formspree.io/f/xrbbnprj"
            method="POST"
            className="lg:col-span-1 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900">
                Phone number
              </label>
              <div className="flex mt-2">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="block w-1/3 bg-white px-3 py-2 text-base border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-l-md"
                >
                  <option value="US">+1 (US)</option>
                  <option value="KE">+254 (Kenya)</option>
                  {/* Add more countries */}
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  className="block w-2/3 bg-white px-3 py-2 text-base border border-l-0 border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-r-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
            >
              Let's talk
            </button>
          </form>
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551806235-6692cbfc690b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lJTIwcmluZ2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Contact"
              className="w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
