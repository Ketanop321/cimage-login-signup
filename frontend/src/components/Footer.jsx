import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // State to track which sections are expanded on mobile
  const [expandedSections, setExpandedSections] = useState({
    about: false,
    quickLinks: false,
    courses: false,
    contact: false
  });

  // Toggle function for expanding/collapsing sections
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div 
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('about')}
            >
              <h3 className="text-lg font-semibold text-white border-b border-blue-700 pb-2 mb-3 flex-grow">About Us</h3>
              <button className="md:hidden">
                {expandedSections.about ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <div className={`${expandedSections.about ? 'block' : 'hidden'} md:block`}>
              <p className="text-sm leading-relaxed">
                CIMAGE is the No.1 College in Patna Bihar for IT & Management Courses with outstanding job placement. 
                Affiliated to Aaryabhatta Knowledge University (AKU) & Patliputra University (PPU).
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.facebook.com/cimage/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/cimagecollege" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/cimagecollege/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/school/cimage/people/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.youtube.com/@cimage2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition-colors duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div 
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('quickLinks')}
            >
              <h3 className="text-lg font-semibold text-white border-b border-blue-700 pb-2 mb-3 flex-grow">Quick Links</h3>
              <button className="md:hidden">
                {expandedSections.quickLinks ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <ul className={`space-y-2 ${expandedSections.quickLinks ? 'block' : 'hidden'} md:block`}>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  CIMAGE Professional College
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/law" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  CIMAGE National Law College
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/admissions" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  Admission
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/affiliation" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  CIMAGE Affiliation
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/fee-structure" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/student-credit-card" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center hover:text-blue-300 transition-colors duration-300">
                  <ExternalLink size={16} className="mr-2" />
                  Student Credit Card
                </a>
              </li>
            </ul>
          </div>

          {/* Our Courses */}
          <div className="space-y-2">
            <div 
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('courses')}
            >
              <h3 className="text-lg font-semibold text-white border-b border-blue-700 pb-2 mb-3 flex-grow">Our Courses</h3>
              <button className="md:hidden">
                {expandedSections.courses ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <ul className={`space-y-2 ${expandedSections.courses ? 'block' : 'hidden'} md:block`}>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-sm hover:text-blue-300 transition-colors duration-300">
                  BCA (Under AKU & PPU)
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/courses/bba" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors duration-300">
                  BBA (Under AKU)
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/courses/bbm" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors duration-300">
                  BBM (Under PPU)
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/courses/bcom" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors duration-300">
                  B.Com (P) (Under AKU)
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/courses/bscit" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors duration-300">
                  B.Sc-IT (Under PPU)
                </a>
              </li>
              <li>
                <a href="https://www.cimagecollege.com/courses/pgdm" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors duration-300">
                  PGDM (Under AIMA)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div 
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              <h3 className="text-lg font-semibold text-white border-b border-blue-700 pb-2 mb-3 flex-grow">Contact Us</h3>
              <button className="md:hidden">
                {expandedSections.contact ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <div className={`space-y-3 ${expandedSections.contact ? 'block' : 'hidden'} md:block`}>
              <p className="flex items-center text-sm">
                <MapPin size={18} className="mr-2 text-blue-300" />
                S.K. Puri Park, Boring Road, Patna
              </p>
              <p className="flex items-center text-sm">
                <Phone size={18} className="mr-2 text-blue-300" />
                +91-9835024444
              </p>
              <p className="flex items-center text-sm">
                <Mail size={18} className="mr-2 text-blue-300" />
                info@cimage.in
              </p>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-8 pt-6 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 md:mb-0">
              Copyright &copy; VIJAYAM Educational Trust {currentYear}. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs text-center md:text-left">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-600 hidden md:inline">|</span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Refund Policy</a>
              <span className="text-gray-600 hidden md:inline">|</span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}