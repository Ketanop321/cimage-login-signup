import { useState } from 'react';
import { FaUtensils, FaBook, FaHeartbeat, FaRunning, FaUsers, FaLeaf, FaCalendarAlt, FaChevronRight, FaQuoteLeft, FaPlay } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import TestimonialCarousel from '../components/campus-life/TestimonialCarousel';
import { testimonials } from '../components/campus-life/data/testimonial';
import ContactHelp from '../components/campus-life/needhelpsection';
import MediaGallery from '../components/campus-life/MediaGallery';

const CampusLifePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sample data
  const campusSections = [
    { icon: <FaUtensils className="text-3xl" />, title: 'Dining', description: 'Explore our diverse dining options and meal plans', color: 'bg-orange-100' },
    { icon: <FaBook className="text-3xl" />, title: 'Library & Study Spaces', description: 'Modern facilities for focused learning', color: 'bg-blue-100' },
    { icon: <FaHeartbeat className="text-3xl" />, title: 'Recreation & Wellness', description: 'Gyms, yoga, and meditation spaces', color: 'bg-green-100' },
    { icon: <FaRunning className="text-3xl" />, title: 'Sports & Activities', description: 'Indoor and outdoor sports facilities', color: 'bg-red-100' },
    { icon: <FaUsers className="text-3xl" />, title: 'Clubs & Societies', description: 'Tech clubs, drama, music, and more', color: 'bg-purple-100' },
    { icon: <FaLeaf className="text-3xl" />, title: 'Campus Environment', description: 'Beautiful green spaces and gardens', color: 'bg-teal-100' },
    { icon: <FaCalendarAlt className="text-3xl" />, title: 'Events & Festivals', description: 'Cultural fests and tech events', color: 'bg-yellow-100' },
  ];
 
  return (
    <>
      <Navbar/>
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <img 
          src="https://plus.unsplash.com/premium_photo-1682075199550-037fff6d7486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNvbGxlZ2UlMjBwYXNzb3V0JTIwbGlmZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Campus life" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Experience Life at <span className="text-orange-400">Your College</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Where learning meets living and memories are made</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore More
          </button>
        </div>
      </div>

      {/* Life on Campus Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Life on <span className="text-blue-600">Campus</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all the amazing facilities and activities that make our campus vibrant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {campusSections.map((section, index) => (
              <div 
                key={index}
                className={`${section.color} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-white mr-4 group-hover:bg-blue-50 transition-colors duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn more <FaChevronRight className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Gallery */}
      
      <MediaGallery />


      {/* Testimonials */}
     
     <TestimonialCarousel testimonials={testimonials} />

      {/* Call to Action */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to join our vibrant community?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the next step in your college journey and experience everything our campus has to offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Visit Campus
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join a Club
            </button>
          </div>
        </div>
      </div>

      {/* Contact & FAQ */}
      <ContactHelp />
      

    </div>
    </>
  );
};

export default CampusLifePage;