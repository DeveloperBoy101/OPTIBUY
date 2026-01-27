import React, { useState } from "react";
import Title from "./Title";
import { GiRecycle, GiWaterDrop, GiPlantWatering } from "react-icons/gi";

const sustainablePillars = [
  {
    id: 1,
    title: "Ethical Sourcing",
    icon: <GiPlantWatering />,
    description:
      "We partner with small farms to ensure fair wages, safe working conditions, and complete transparency in our supply chain.",
    details:
      "Our commitment extends to using organic cotton, recycled polyester, and innovative bio-based fibers to minimize environmental impact.",
  },
  {
    id: 2,
    title: "Zero-Waste Design",
    icon: <GiRecycle />,
    description:
      "Utilizing sophisticated pattern-making to minimize fabric offcuts and transforming any remaining waste into new accessories.",
    details:
      "This closed-loop system promotes circularity. We also offer a take-back program for end-of-life garments to be upcycled or responsibly recycled.",
  },
  {
    id: 3,
    title: "Water Conservation",
    icon: <GiWaterDrop />,
    description:
      "Implementing advanced, low-impact dyeing techniques that reduce water consumption by up to 80% compared to traditional methods.",
    details:
      "All wastewater is treated and repurposed in-house. We are constantly investing in technologies that push the boundaries of water-free manufacturing.",
  },
];

const SustainableThreads = () => {
  const [activePillarId, setActivePillarId] = useState(null);
  const activePillar = sustainablePillars.find((p) => p.id === activePillarId);

  return (
    <div className="min-h-screen py-16 flex flex-col items-center justify-center font-sans ">
      <div className="text-center max-w-7xl w-full px-6 md:px-12">
        {/* Header */}
        <div className="text-center py-8 text-3xl">
          <Title text1={"SUSTAINABLE"} text2={"THREADS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Crafting the future of fashion, one conscious choice at a time.
            Explore the three pillars of our environmental and social commitment.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sustainablePillars.map((pillar) => (
            <div
              key={pillar.id}
              className=" p-6 rounded-xl shadow-xl hover:shadow-2xl border-b-4 border-pink-300"
            >
              <div className="flex justify-center items-center text-4xl mb-4">
                {pillar.icon}
              </div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                {pillar.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">{pillar.description}</p>

              <button
                onClick={() =>
                  setActivePillarId(
                    activePillarId === pillar.id ? null : pillar.id
                  )
                }
                className={`mt-3 py-2 px-4 rounded-full font-medium text-sm transition duration-300 ease-in-out bg-black text-white hover:bg-gray-800`}
              >
                {activePillarId === pillar.id ? "Hide Details" : "Read More"}
              </button>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {activePillar && (
          <div className=" p-8 md:p-12 rounded-2xl shadow-inner border border-black text-left transition-all duration-500 ease-in-out transform scale-100 opacity-100">
            <h3 className="text-3xl font-serif text-black mb-4 flex items-center justify-center">
              {activePillar.icon}
              <span className="ml-3">{activePillar.title}: Deep Dive</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {activePillar.details}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SustainableThreads;
