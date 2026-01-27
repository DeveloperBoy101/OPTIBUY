import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import OurFeatures from "../components/OurFeatures";
import CarefullyCraftedSection from "../components/CarefullyCraftedSection";


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />

      <BestSeller />
      <OurPolicy />
      <CarefullyCraftedSection />
      <OurFeatures />
    </div>
  );
};

export default Home;
