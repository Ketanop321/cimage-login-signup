// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <img 
        src="https://cimage.in/sitepanel/uploads/images/Background_01.jpg" 
        alt="CIMAGE Campus" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About CIMAGE Group of Institutions
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Shaping Tomorrow's Leaders Since 2009
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
