import React from "react";
import { assets } from "../assets/assets";
import SustainableThreads from "../components/SustainableThreads";
import WhyUs from "../components/WhyUs";
import EthicallyMadeOverlap from "../components/EthicallyMadeOverlap";
const About = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row md:h-[450px] border border-gray-400">
        {/* {Hero left side} */}
        <div className="w-full sm:w-1/2  flex items-center justify-center py-10 sm:py-0  ">
          <div className="">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[1px] bg-black"></p>
              <p className="font-medium text-sm md:text-base text-black">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed text-black">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base text-black">
                SHOP NOW{" "}
              </p>
              <p className="w-8 md:w-11 h-[1px] bg-black "></p>
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
        {/* {hero right side} */}
        <img
          src="https://media.istockphoto.com/id/2156923817/photo/a-little-girl-buried-her-nose-in-a-beautiful-big-bouquet-of-pink-peonies-with-a-black.jpg?s=612x612&w=0&k=20&c=1JfYawuSjZnvweX-kKtA2uqAjuD9oQW-N2n0bgrEv6M="
          className="w-full sm:w-1/2"
          alt=""
        />
      </div>
      <EthicallyMadeOverlap />

      <SustainableThreads />

      <WhyUs />
    </>
  );
};

export default About;
