import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { href } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programee", href: "/programme" },
    { label: "Campuslife", href: "/campuslife" },
    { label: "Contact", href: "/contact" }
  ];
  
  return (
    <>

    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-50 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/cimagelogo.png" alt="cimagelogo" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-sky-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-600 hover:text-sky-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  );
}