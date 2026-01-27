import React from "react";
import Title from "./Title";
// --- Original Color Definitions ---
// Card Background: #ece4a9 (Soft, saturated yellow/beige)
// Text/Icon Color: text-teal-800 or a dark shade of gray/teal for consistency

const offerings = [
  {
    title: "Mix-and-Match Outfits",
    description:
      "Effortlessly combine different clothing pieces to create stylish, versatile looks that suit every occasion and personal taste.",
    icon: (
      <svg
        className="w-10 h-10 text-teal-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.586a2 2 0 012.828 0L20.828 7.757a2 2 0 010 2.828l-8.686 8.686a1 1 0 01-.391.244L6.92 19.51a1 1 0 01-1.267-1.267l1.547-5.385a1 1 0 01.244-.391L14.414 5.414z"
        />
      </svg>
    ),
  },
  {
    title: "Personalization Service",
    description:
      "Custom tailoring, perfect fitting, and personalized adjustments designed specifically for your body shape and style.",
    icon: (
      <svg
        className="w-10 h-10 text-teal-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Durable & Stylish Apparel",
    description:
      "Premium-quality fabric designed to last long, retain shape, and stay fashionable even with frequent use.",
    icon: (
      <svg
        className="w-10 h-10 text-teal-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Eye-Catching Designs",
    description:
      "Unique patterns, cuts, and modern aesthetics designed to catch attention and elevate your entire wardrobe.",
    icon: (
      <svg
        className="w-10 h-10 text-teal-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5a2.5 2.5 0 002.5 2.5h7.745l2.067 2.067a3 3 0 010 4.243l-2.067 2.067H11.5a2.5 2.5 0 01-2.5-2.5V16.065"
        />
      </svg>
    ),
  },
  {
    title: "Versatile Clothing Options",
    description:
      "From casual to party wear, every outfit is crafted to suit multiple occasions with effortless styling.",
    icon: (
      <svg
        className="w-10 h-10 text-teal-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2v5l-4-4V7l4-4v3c1.657 0 3 .895 3 2s-1.343 2-3 2z"
        />
      </svg>
    ),
  },
  {
    title: "Tailored Recommendations",
    description:
      "Smart style suggestions based on your purchase history, trends, and personalized fashion profile.",
    icon: (
      <svg
        className="w-10 h-10 text-teal-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12h6m-6 4h6m2-10H7a4 4 0 00-4 4v10a2 2 0 002 2h14a2 2 0 002-2V7a4 4 0 00-4-4z"
        />
      </svg>
    ),
  },
];

const OfferingsGrid = () => {
  return (
    <div className="bg-white py-16">
      <div className="text-center py-8 text-3xl">
        <Title text1={"OUR"} text2={"OFFERINGS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at numquam quisquam magnam.
        </p>
      </div>
      <div className="">
        {/* The responsive grid structure: 1 on small, 2 on medium, 3 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <div
              key={i}
              className={`
                // Restored Original Styling
                bg-[#ece4a9] border border-gray-200 
                p-8 flex flex-col items-center text-center
                shadow-sm hover:shadow-lg transition duration-200 ease-in-out
                h-60 // Fixed height for alignment
              `}
            >
              {/* Icon Container: Restored original styling */}
              <div className="p-3 mb-4 rounded-full bg-yellow-100/50">
                <svg
                  className="w-10 h-10 text-teal-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* The actual icon path from the item */}
                  {item.icon.props.children}
                </svg>
              </div>

              {/* Title: Restored to dark gray, bold, slightly smaller font */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description: Restored to slightly darker text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferingsGrid;
