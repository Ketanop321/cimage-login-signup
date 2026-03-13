import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: "review-01",
    rating: 5,
    quote:
      "CIMAGE transformed my career. The practical approach to education and outstanding faculty mentorship helped me land my dream job at Infosys right after graduation.",
    author: {
      name: "Rahul Sharma",
      title: "BCA Graduate '23 · Software Engineer, Infosys",
      initials: "RS",
      color: "bg-blue-600",
    },
  },
  {
    id: "review-02",
    rating: 5,
    quote:
      "The placement cell at CIMAGE is phenomenal. I secured a position at TCS even before my final exams. The industry exposure we get here is unmatched in Patna.",
    author: {
      name: "Priya Singh",
      title: "BBA Graduate '22 · Business Analyst, TCS",
      initials: "PS",
      color: "bg-indigo-600",
    },
  },
  {
    id: "review-03",
    rating: 5,
    quote:
      "CIMAGE's PGDM program blends theory with real-world projects perfectly. The collaborations with industry leaders gave me the edge I needed in the corporate world.",
    author: {
      name: "Amit Verma",
      title: "PGDM Graduate '23 · Operations Manager, Wipro",
      initials: "AV",
      color: "bg-violet-600",
    },
  },
  {
    id: "review-04",
    rating: 5,
    quote:
      "From the very first day the faculty made me feel welcome. The campus facilities, tech labs, and extracurriculars create a perfect learning environment.",
    author: {
      name: "Sneha Kumari",
      title: "B.Sc-IT Graduate '23 · Junior Developer, HCL",
      initials: "SK",
      color: "bg-teal-600",
    },
  },
  {
    id: "review-05",
    rating: 5,
    quote:
      "I joined CIMAGE for BBA and got so much more — leadership training, guest lectures from CEOs, and a network that continues to help me grow every single day.",
    author: {
      name: "Rohan Mishra",
      title: "BBA Graduate '22 · Marketing Executive, Deloitte",
      initials: "RM",
      color: "bg-orange-500",
    },
  },
];

const StarIcon = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
    className="w-5 h-5 text-yellow-400"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
);

const Avatar = ({ initials, color }) => (
  <div
    className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0 ${color}`}
    aria-label={initials}
  >
    {initials}
  </div>
);

const PaginationDot = ({ active, onClick, index }) => (
  <button
    onClick={onClick}
    aria-label={`Go to review ${index + 1}`}
    className={`transition-all duration-300 rounded-full focus:outline-none ${
      active ? "w-6 h-2.5 bg-blue-600" : "w-2.5 h-2.5 bg-gray-300 hover:bg-blue-400"
    }`}
  />
);

const transition = {
  type: "spring",
  duration: 0.8,
};

const AUTO_PLAY_INTERVAL = 5000;

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [resetKey, setResetKey] = useState(0);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setResetKey((k) => k + 1);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setResetKey((k) => k + 1);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setResetKey((k) => k + 1);
  };

  // Auto-play — restarted whenever the user manually navigates
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [resetKey]);

  const review = reviews[currentIndex];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section heading */}
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">
          Student Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          What our students say
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Hear directly from CIMAGE graduates about how their time here shaped
          their careers and lives.
        </p>

        {/* Review card */}
        <div className="relative overflow-hidden min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={review.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={transition}
              className="flex flex-col items-center px-4"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar initials={review.author.initials} color={review.author.color} />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{review.author.name}</p>
                  <p className="text-sm text-gray-500">{review.author.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {reviews.map((_, i) => (
            <PaginationDot
              key={i}
              index={i}
              active={i === currentIndex}
              onClick={() => goTo(i)}
            />
          ))}

          <button
            onClick={goNext}
            aria-label="Next review"
            className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
