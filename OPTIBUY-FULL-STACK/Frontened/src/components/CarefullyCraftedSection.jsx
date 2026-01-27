import React from 'react';
import { assets } from '../assets/assets';

const CarefullyCraftedSection = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={assets.clothes}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Clothes background"
      />

      {/* Overlay Card */}
      <div className="relative bg-[#FBF7E7] p-6 md:p-10 lg:p-12 max-w-2xl h-[250px] text-center z-10 mx-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1F3647] mb-4 md:mb-6 leading-snug">
          Carefully crafted for people 
        </h2>
        <p className="text-gray-700 text-sm md:text-base lg:text-xs leading-relaxed mb-6 md:mb-4">
          I'm a paragraph. Click here to add your own text and edit me. 
          I'm a great place for you to tell a story, and let your users 
          know a little more about you.
        </p>
        <button className="bg-[#B57C5B] text-white font-semibold py-2.5 px-6 md:py-3 md:px-4 rounded-md hover:bg-[#a16e51] transition duration-300 ease-in-out text-sm md:text-base lg:text-xs">
          See More
        </button>
      </div>
    </div>
  );
};

export default CarefullyCraftedSection;
