import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTestimonialNavigation } from './hooks/useTestimonialNavigation';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      department: 'BCA Graduate',
      year: '2023',
      quote:
        'CIMAGE has transformed my career prospects. The unique teaching pedagogy and focus on practical skills helped me secure a position at TCS. The faculty mentorship and industry connections are unparalleled.',
    },
    {
      name: 'Priya Singh',
      department: 'BBA Graduate',
      year: '2022',
      quote:
        'The hands-on experience and real-world projects made learning enjoyable. I feel confident stepping into the corporate world.',
    },
    {
      name: 'Amit Verma',
      department: 'BCA',
      year: '2021',
      quote:
        'Supportive faculty and great placement opportunities. Highly recommend CIMAGE to anyone serious about their career.',
    },
  ];

  const { activeIndex, goToNext, goToPrev, goToIndex } = useTestimonialNavigation(testimonials.length);

  return (
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
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    {/* Quote block with FaQuoteLeft at start and end */}
                    <div className="flex items-start text-lg text-gray-700 mb-6">
                      <FaQuoteLeft className="text-blue-300 text-xl mr-2 mt-1" />
                      <p className="flex-1 pt-3">{testimonial.quote}</p>
                      <FaQuoteLeft className="text-blue-300 text-xl ml-2 mt-1 transform rotate-180 self-end" />
                    </div>

                    {/* Centered name and department/year */}
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">
                        {testimonial.department}, {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
