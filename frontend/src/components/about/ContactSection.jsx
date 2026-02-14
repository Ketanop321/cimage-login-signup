// ContactSection.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (e.g., send to API or show a success message)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side Info */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Interested in joining CIMAGE? Have questions about our programs? Reach out to us today!
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="text-blue-800 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Address</h4>
                <p className="text-gray-700">CIMAGE Group of Institutions, Patna, Bihar</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-blue-800 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-gray-700">+91 123-456-7890</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="text-blue-800 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-700">admissions@cimage.edu.in</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/cimage" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .6 0 1.334v21.333C0 23.4.596 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.408c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.1 2.794.144v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.4 24 22.667V1.333C24 .6 23.403 0 22.675 0z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a href="https://twitter.com/cimagecollege" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.39 3H17.6l-5.09 6.53L7.33 3H3l6.96 9.26L3 21h3.86l5.41-6.95L16.67 21h4.33l-7.19-9.49L20.39 3z" />
              </svg>
            </a>

            {/* Instagram (new recognizable logo) */}
            <a href="https://www.instagram.com/cimagecollege" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
              </svg>
            </a>
          </div>


        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
