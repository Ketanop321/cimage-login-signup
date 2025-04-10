// LandingPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ThreeDModel from "../components/ThreeDModel";
import { ChevronRight, BookOpen, UserPlus, LogIn } from "lucide-react";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation on component mount
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="landing-container bg-gradient-to-br from-sky-50 to-blue-100 min-h-screen font-sans">
      {/* Custom cursor styles will be in CSS */}
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-50 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="text-sky-600 mr-2" />
            <span className="text-xl font-semibold text-sky-800">cimage</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">About</a>
            <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">Programs</a>
            <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">Campus Life</a>
            <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Model Overlapping Text */}
      <div className="hero-section pt-20 pb-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Text Content (Behind the 3D Model) */}
          <div className={`text-center mx-auto max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-800 mb-6 z-0 relative">
              Begin Your Academic Journey
            </h1>
            <p className="text-lg text-gray-600 mb-8 z-0 relative">
              Step into a world of opportunities, innovation, and excellence. 
              Join our community of scholars and shape your future today.
            </p>
          </div>
          
          {/* 3D Model Content (Overlaid on top) */}
          <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="h-100 w-full">
              <ThreeDModel />
            </div>
          </div>
          
          {/* Buttons (Below and Visible) */}
          <div className={`flex flex-wrap justify-center gap-4 mt-64 relative z-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Link 
              to="/login" 
              className="px-6 py-3 bg-white text-sky-600 border border-sky-600 rounded-lg flex items-center gap-2 hover:bg-sky-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-sky-100"

             >
              <LogIn size={20} />
                Student login
            </Link>
            
            <Link 
              to="/register" 
              className="px-6 py-3 bg-white text-sky-600 border border-sky-600 rounded-lg flex items-center gap-2 hover:bg-sky-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-sky-100"
            >
              <UserPlus size={20} />
              New Registration
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      {/* Features Section */}
      <div className="features-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">Why Choose Our College</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all duration-300 border border-sky-100 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">Excellence in Education</h3>
              <p className="text-gray-600">Access top-tier academic programs designed to foster critical thinking and practical skills.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all duration-300 border border-sky-100 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">Modern Campus Facilities</h3>
              <p className="text-gray-600">Enjoy state-of-the-art facilities designed to enhance your learning and campus experience.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card p-6 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-all duration-300 border border-sky-100 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-sky-800 mb-2">Vibrant Community</h3>
              <p className="text-gray-600">Join a diverse community of students and faculty committed to personal and academic growth.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rest of the content remains the same */}
      {/* Call to Action */}
      <div className="cta-section py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">Take the first step toward a successful future. Join our academic community today.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/register" 
              className="px-6 py-3 bg-white text-sky-700 rounded-lg flex items-center gap-2 hover:bg-sky-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Begin Application
              <ChevronRight size={20} />
            </Link>
            <a 
              href="#" 
              className="px-6 py-3 bg-transparent text-white border border-white rounded-lg flex items-center gap-2 hover:bg-sky-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-sky-900 text-sky-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">cimage</h4>
              <p className="text-sky-200">Empowering students to achieve their dreams through quality education.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sky-200 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="text-sky-200 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="text-sky-200 hover:text-white transition-colors">Student Life</a></li>
                <li><a href="#" className="text-sky-200 hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-sky-200">
                <p>123 Education Ave</p>
                <p>College Town, ST 12345</p>
                <p>info@campusconnect.edu</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-sky-200 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-sky-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-sky-200 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.808.06 1.064.05 1.79.215 2.427.465.66.254 1.216.598 1.772 1.153a4.81 4.81 0 011.153 1.772c.25.637.415 1.363.465 2.427.047 1.024.06 1.379.06 3.808s-.01 2.784-.06 3.808c-.05 1.064-.215 1.79-.465 2.427a4.81 4.81 0 01-1.153 1.772 4.81 4.81 0 01-1.772 1.153c-.637.25-1.363.415-2.427.465-1.024.047-1.379.06-3.808.06s-2.784-.01-3.808-.06c-1.064-.05-1.79-.215-2.427-.465a4.81 4.81 0 01-1.772-1.153 4.81 4.81 0 01-1.153-1.772c-.25-.637-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808s.01-2.784.06-3.808c.05-1.064.215-1.79.465-2.427a4.81 4.81 0 011.153-1.772A4.81 4.81 0 014.08 2.525c.637-.25 1.363-.415 2.427-.465 1.024-.047 1.379-.06 3.808-.06zm0 1.44c-2.136 0-2.39.01-3.233.048-.784.036-1.211.167-1.496.276-.376.145-.645.319-.92.594a2.38 2.38 0 00-.594.92c-.11.285-.24.712-.276 1.496-.038.844-.048 1.097-.048 3.233s.01 2.39.048 3.233c.036.784.167 1.211.276 1.496.145.376.319.645.594.92.28.28.546.453.92.594.285.11.712.24 1.496.276.844.038 1.097.048 3.233.048s2.39-.01 3.233-.048c.784-.036 1.211-.167 1.496-.276.376-.145.645-.319.92-.594.28-.28.453-.546.594-.92.11-.285.24-.712.276-1.496.038-.844.048-1.097.048-3.233s-.01-2.39-.048-3.233c-.036-.784-.167-1.211-.276-1.496a2.38 2.38 0 00-.594-.92 2.38 2.38 0 00-.92-.594c-.285-.11-.712-.24-1.496-.276-.844-.038-1.097-.048-3.233-.048z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12.315 6.863a5.137 5.137 0 100 10.275 5.137 5.137 0 000-10.275zm0 8.468a3.331 3.331 0 110-6.662 3.331 3.331 0 010 6.662zm6.541-8.672a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-sky-800 text-center">
            <p className="text-sm text-sky-300">&copy; {new Date().getFullYear()} ct. All rights reserved.</p>
          </div>
        </div>
      </footer>    
    </div>
  );
}