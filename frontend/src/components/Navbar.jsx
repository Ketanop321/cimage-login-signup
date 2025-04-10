import React from "react";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { label: "About", href: "#" },
    { label: "Programs", href: "#" },
    { label: "Campus Life", href: "#" },
    { label: "Contact", href: "#" }
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-50 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="text-sky-600 mr-2" aria-hidden="true" />
          <span className="text-xl font-semibold text-sky-800">cimage</span>
        </div>
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
      </div>
    </nav>
  );
}