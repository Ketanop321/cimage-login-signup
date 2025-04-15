import { useState } from 'react';

export const useTestimonialNavigation = (testimonialCount: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonialCount - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialCount - 1 : prev - 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    goToNext,
    goToPrev,
    goToIndex,
  };
};