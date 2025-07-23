// components/TestimonialSection.jsx
import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Students Say</h2>
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg text-black">
          <div className="text-center">
            <p className="text-xl italic mb-6">
              "CIMAGE has transformed my career prospects. The unique teaching pedagogy and focus on practical skills 
              helped me secure a position at TCS. The faculty mentorship and industry connections are unparalleled."
            </p>
            <h4 className="text-lg font-bold">Rajesh Kumar</h4>
            <p className="text-sm">BCA Graduate, Software Engineer at TCS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
