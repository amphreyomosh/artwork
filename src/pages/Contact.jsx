import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API or email service)
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-300 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">Feel free to reach out to us with any questions or comments. We'd love to hear from you!</p>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>

        {/* Additional Section with Cards and Button */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Quality Support</h3>
              <p className="text-gray-600 mb-4">We offer round-the-clock customer support to ensure you have a smooth experience.</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Learn More</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Affordable Prices</h3>
              <p className="text-gray-600 mb-4">Our services come at competitive prices without compromising quality.</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Explore Services</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Experienced Team</h3>
              <p className="text-gray-600 mb-4">Our team of professionals are experts in their respective fields, ensuring top-notch results.</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Meet the Team</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
