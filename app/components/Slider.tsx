// components/Slider.tsx

import React, { useState } from 'react';

interface Review {
  img: string; // Cambiamos el tipo a string
  review: string;
}

interface SliderProps {
  reviews: Review[];
}

const Slider: React.FC<SliderProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <img src={reviews[currentIndex].img} alt="Review" className="mx-auto rounded-lg" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg">{reviews[currentIndex].review}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;
