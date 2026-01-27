import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row md:h-[450px] border border-gray-420">
      {/* {Hero left side} */}
      <div className="w-full sm:w-1/2  flex items-center justify-center py-10 sm:py-0  text-gray-900">
        <div className="">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[1px] bg-black"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW </p>
            <p className="w-8 md:w-11 h-[1px] bg-black "></p>
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
      {/* {hero right side} */}
      <img src="https://media.istockphoto.com/id/2211422378/photo/smiling-young-woman-making-a-playful-hand-gesture-in-a-colorful-outfit-against-a-vibrant-pink.jpg?s=612x612&w=0&k=20&c=Hz5M_tbne9DFpxDHPu5kGTG4i6YYIkXLwko1VZTwom0=" className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Hero;
