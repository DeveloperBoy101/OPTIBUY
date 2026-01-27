import React from "react";
import {Link} from 'react-router-dom'
const GlobeIcon = () => (
  <svg className="w-24 h-24 mb-6 text-[#d4af37] stroke-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <circle cx="50" cy="50" r="45" />
    <path d="M 50 5 C 20 40, 20 60, 50 95" />
    <path d="M 50 5 C 80 40, 80 60, 50 95" />
    <ellipse cx="50" cy="50" rx="45" ry="15" opacity="0.8" />
    <path d="M 50 5 C 5 20, 5 80, 50 95" opacity="0.6" />
    <path d="M 50 5 C 95 20, 95 80, 50 95" opacity="0.6" />
    <ellipse cx="50" cy="30" rx="35" ry="10" opacity="0.6" />
    <ellipse cx="50" cy="70" rx="35" ry="10" opacity="0.6" />
  </svg>
);

const Offers = () => {
  const bgColor = "bg-[#F2F2F2]";
  const textColor = "text-[#1A1A1A]";

  return (
    <div className={`h-[300px] ${bgColor} flex items-center justify-center p-2 font-sans mb-10`}>
      <div className={`flex flex-col items-center text-center max-w-md w-full ${textColor}`}>
        <GlobeIcon />

        <p className="text-xs tracking-wide uppercase mb-2 opacity-60">Exclusive</p>

        <h1 className="text-4xl font-semibold mb-3 tracking-tight">Limited Offer</h1>

        <p className="text-sm mb-6 opacity-80 leading-relaxed max-w-sm">
          Shop now and enjoy seasonal discounts on selected items.
        </p>

        <Link to='/collection'
          onClick={() => console.log("Shop Now Clicked")}
          className="bg-[#1A1A1A] text-white px-6 py-2 text-xs font-medium rounded-full shadow-md transition duration-300 hover:bg-black hover:shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Offers;
