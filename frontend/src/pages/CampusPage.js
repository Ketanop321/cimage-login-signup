import { useState } from 'react';
import { FaUtensils, FaBook, FaHeartbeat, FaRunning, FaUsers, FaLeaf, FaCalendarAlt, FaChevronRight, FaQuoteLeft, FaPlay } from 'react-icons/fa';
import Navbar from '../components/Navbar';

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

  const galleryItems = [
    { id: 1, category: 'events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, category: 'clubs', image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, category: 'sports', image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, category: 'hostels', image: 'https://images.unsplash.com/photo-1582719471389-8d831c6f1e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, category: 'events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, category: 'clubs', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 7, category: 'sports', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 8, category: 'hostels', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      department: 'Computer Science',
      year: 'Senior',
      quote: 'The campus life here is incredible! Between the tech clubs and sports facilities, there\'s always something exciting happening.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Williams',
      department: 'Business Administration',
      year: 'Junior',
      quote: 'I love how the college balances academics with extracurriculars. The meditation rooms help me stay centered during busy weeks.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      department: 'Engineering',
      year: 'Sophomore',
      quote: 'The maker spaces and innovation labs are game-changers. I\'ve already developed two prototypes with campus resources!',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Navbar/>
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Campus <span className="text-blue-600">Gallery</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into the vibrant life at our college
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('events')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'events' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            >
              Events
            </button>
            <button 
              onClick={() => setActiveFilter('clubs')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'clubs' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            >
              Clubs
            </button>
            <button 
              onClick={() => setActiveFilter('sports')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'sports' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            >
              Sports
            </button>
            <button 
              onClick={() => setActiveFilter('hostels')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'hostels' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
            >
              Hostels
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.image} 
                  alt="Campus life" 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="font-bold capitalize">{item.category}</h3>
                  </div>
                </div>
                {item.id === 5 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-white text-2xl" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Student <span className="text-blue-600">Voices</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our students say about campus life
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="flex items-start">
                        <div className="mr-6">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                          />
                        </div>
                        <div>
                          <FaQuoteLeft className="text-blue-200 text-3xl mb-2" />
                          <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.department}, {testimonial.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

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
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12 text-center">
            Need <span className="text-blue-600">Help?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Housing Office</h3>
              <p className="text-gray-600 mb-4">Questions about dormitories or off-campus housing</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Contact →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dining Services</h3>
              <p className="text-gray-600 mb-4">Meal plans, dietary restrictions, or cafeteria hours</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Contact →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Student Affairs</h3>
              <p className="text-gray-600 mb-4">General student life questions and support</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Contact →</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">FAQs</h3>
              <p className="text-gray-600 mb-4">Find answers to common questions</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">View FAQs →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CampusLifePage;