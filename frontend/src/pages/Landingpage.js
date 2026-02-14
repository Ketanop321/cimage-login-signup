// src/pages/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { 
  ChevronRight, 
  UserPlus, 
  LogIn 
} from "lucide-react";

import FeatureCard from "../components/FeatureCard";
import CTAButton from "../components/CTAButton";
import ThreeDModel from "../components/ThreeDModel";

// Data
import { features } from "../data/featureData";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation on component mount with a slight delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 min-h-screen font-sans">

      <div className="pt-10">  
        {/* Hero Section */}
        <HeroSection isLoaded={isLoaded} />
        
        {/* Features Section */}
        <FeaturesSection features={features} />
        
        {/* Call to Action */}
        <CTASection />
      </div>
    </div>
  );
}

// Hero Section Component - Moving to a separate file but keeping within the landing page for now
function HeroSection({ isLoaded }) {
  return (
    <section className="pt-20 pb-10 relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Text Content */}
        <div className={`text-center mx-auto max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-800 mb-6 z-0 relative"
          >
            Begin Your Academic Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8 z-0 relative">
            Step into a world of opportunities, innovation, and excellence. 
            Join our community of scholars and shape your future today.
          </p>
        </div>
        
        {/* 3D Model */}
        <div 
          className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          aria-hidden="true"
        >
          <div className="h-100 w-full">
            <ThreeDModel />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mt-64 relative z-20 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <CTAButton 
            to="/login" 
            icon={<LogIn size={20} />}
            variant="outline"
          >
            Student Login
          </CTAButton>
          
          <CTAButton 
            to="/register" 
            icon={<UserPlus size={20} />}
            variant="outline"
          >
            New Registration
          </CTAButton>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl" aria-hidden="true"></div>
    </section>
  );
}

// Features Section Component - Moving to a separate file but keeping within the landing page for now
function FeaturesSection({ features }) {
  return (
    <section className="py-12 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          id="features-heading"
          className="text-3xl font-bold text-center text-sky-800 mb-12"
        >
          Why Choose Our College
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component - Moving to a separate file but keeping within the landing page for now
function CTASection() {
  return (
    <section
      className="py-16 bg-gradient-to-r from-sky-600 to-blue-700 text-white"
      style={{ background: "linear-gradient(to right, #0284c7, #1d4ed8)", color: "#ffffff" }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 
          id="cta-heading"
          className="text-3xl font-bold mb-4 text-white"
        >
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
          Take the first step toward a successful future. Join our academic community today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton 
            to="/register" 
            icon={<ChevronRight size={20} />}
            iconPosition="right"
            variant="filled"
          >
            Begin Application
          </CTAButton>
          
          <CTAButton 
            to="/about" 
            variant="transparent"
          >
            Learn More
          </CTAButton>
        </div>
      </div>
    </section>
  );
}