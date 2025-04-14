import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactEnquirySection = ({ formData, handleFormChange, handleFormSubmit, programmes }) => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-blue-700 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
              <p className="mb-6">Our admission counsellors are here to help you with any queries about our programmes, admission process, or career opportunities.</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p>+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p>admissions@cimage.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p>CIMAGE Campus, Patna, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Enquire Now</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700 mb-1">
                      Programme of Interest
                    </label>
                    <select
                      id="courseInterest"
                      name="courseInterest"
                      value={formData.courseInterest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a programme</option>
                      {programmes && programmes.map((programme) => (
                        <option key={programme.id} value={programme.name}>
                          {programme.name} - {programme.fullName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEnquirySection;