import React from "react";
import Title from "./Title";
const EthicallyMadeOverlap = () => {
  const CARD_BG = "#FBF7E7";
  const TITLE_COLOR = "#1F3647";
  const BUTTON_COLOR = "#B57C5B";
  const ACCENT_COLOR = "#E4D5B7";
  const SECONDARY_CARD_COLOR = "#FFFFFF";

  return (
    <>
      <div className="text-center  text-3xl mt-20 ">
        <Title text1={"Ethically"} text2={"Made Fashion"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Every piece is created with purpose — responsibly sourced materials,
          fair practices, and mindful craftsmanship. Fashion that looks good and
          feels even better, for you and the planet.
        </p>
      </div>

      <div className="relative w-full bg-white py-24 overflow-hidden">
        {/* Background decorative shapes */}
        {/* Subtle light pink & yellow circles, slightly smaller than XL */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-300 rounded-full opacity-25 z-0"></div>
        <div className="absolute top-32 left-10 w-56 h-56 bg-pink-300 rounded-full opacity-20 z-0 hidden sm:block"></div>
        <div className="absolute top-1/4 right-0 w-52 h-52 bg-yellow-300 rounded-full opacity-30 z-0"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-pink-300 rounded-full opacity-25 z-0 hidden md:block"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-yellow-300 rounded-full opacity-30 z-0"></div>
        <div className="absolute top-1/3 left-3/4 w-40 h-40 bg-pink-300 rounded-full opacity-25 z-0 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-1/3 w-52 h-52 bg-yellow-300 rounded-full opacity-20 z-0"></div>

        <div className="max-w-7xl mx-auto relative h-[1000px]">
          {/* --- Layered Fashion Images --- */}
          <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shadow-xl overflow-hidden rounded-lg z-0 opacity-70">
            <img
              src="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?w=600&auto=format&fit=crop&q=60"
              alt="Fashion image 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-5 right-5 w-60 h-60 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] shadow-2xl overflow-hidden rounded-lg z-10 border-white">
            <img
              src="https://images.unsplash.com/photo-1645907169133-3fd877ef2a8c?w=600&auto=format&fit=crop&q=60"
              alt="Fashion image 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-28 left-40 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 shadow-lg overflow-hidden rounded-lg z-5 opacity-95 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?w=600&auto=format&fit=crop&q=60"
              alt="Fashion image 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-16 right-32 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 shadow-lg overflow-hidden rounded-lg z-5 opacity-90 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60"
              alt="Fashion image 4"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-12 left-12 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 shadow-xl overflow-hidden rounded-lg z-15 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1634727035093-30011246c9c4?w=600&auto=format&fit=crop&q=60"
              alt="Fashion image 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* New additional images for complexity */}
          <div className="absolute top-64 left-10 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-lg overflow-hidden rounded-lg z-10 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1645997098653-ed4519760b10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Fashion image 6"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative small card overlay */}
          <div
            className="absolute bottom-[29%] right-[35%] w-48 h-20 p-4 shadow-xl rounded-lg z-50 hidden md:block"
            style={{ backgroundColor: SECONDARY_CARD_COLOR }}
          >
            <p
              className="text-xs font-serif text-center italic"
              style={{ color: TITLE_COLOR }}
            >
              "Sustainability is our signature."
            </p>
            <div className="mt-3 w-10 h-1 bg-gray-300 mx-auto"></div>
          </div>

          {/* Central Ethically Made Card */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 lg:w-[500px] xl:w-[520px] p-10 lg:p-14 shadow-2xl rounded-lg z-40"
            style={{ backgroundColor: CARD_BG }}
          >
            <div className="relative z-10">
              <h2
                className="text-3xl md:text-4xl font-serif mb-6 text-center"
                style={{ color: TITLE_COLOR }}
              >
                Ethically Made
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-sm text-center">
                Each piece is crafted with care, respect for people, and a
                commitment to sustainable fashion. Tell your story through
                responsible choices.
              </p>
              <div className="text-center">
                <button
                  className="text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out"
                  style={{ backgroundColor: BUTTON_COLOR }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EthicallyMadeOverlap;
