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
            <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .6 0 1.334v21.333C0 23.4.596 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.408c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.1 2.794.144v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.4 24 22.667V1.333C24 .6 23.403 0 22.675 0z" />
                </svg>

              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675..." />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300">
              <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2c2.717..." clipRule="evenodd" />
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
