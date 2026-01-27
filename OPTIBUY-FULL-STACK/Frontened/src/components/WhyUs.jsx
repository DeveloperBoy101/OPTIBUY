import React, { useState } from "react";
import { FaHandsHelping, FaRecycle, FaMagic } from "react-icons/fa";
import Title from "./Title";

const allContent = {
  Vision: [
    {
      id: 1,
      title: "Ethical Labor Practices",
      subtitle: "Fair Wages, Safe Conditions",
      description:
        "Our commitment to fair wages, safe working conditions, and transparent manufacturing.",
      image:
        "https://media.istockphoto.com/id/2210342107/photo/young-stylish-woman-with-sunglasses-and-pink-beanie-smiling-joyfully-against-a-vibrant-pink.jpg?s=612x612&w=0&k=20&c=eQTtDQp_FB1zsL2ygqjcwGWrNrzDiUbX9UYODofiW5Q=",
      icon: <FaHandsHelping className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
    {
      id: 2,
      title: "Eco-Friendly Materials",
      subtitle: "Organic, Recycled, Sustainable",
      description:
        "Using GOTS-certified organic cotton, recycled polyester, and innovative bio-based fabrics.",
      image:
        "https://media.istockphoto.com/id/1927132924/photo/photo-of-positive-cheerful-girl-look-empty-space-enjoy-birthday-noel-advertisement-isolated.jpg?s=612x612&w=0&k=20&c=ocBH7GZgM1WOPm52Kmiwmvb09hzcQ5igsGUQnLTO9rY=",
      icon: <FaRecycle className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
    {
      id: 3,
      title: "Quality Assurance",
      subtitle: "Durability and Comfort Guaranteed",
      description:
        "Every garment undergoes rigorous quality checks for durability and comfort.",
      image:
        "https://media.istockphoto.com/id/1729258627/photo/portrait-of-beautiful-smiling-curly-woman-wearing-ski-overalls-hat-protective-ski-mask.jpg?s=612x612&w=0&k=20&c=81U4eLm8jPC5Fg1m5gnR3SXcOga7JQ_HYwMTCV5pOlc=",
      icon: <FaMagic className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
  ],
  Process: [
    {
      id: 4,
      title: "Circular Design",
      subtitle: "Zero-Waste Focused",
      description:
        "Our production process is designed to eliminate textile waste.",
      image:
        "https://media.istockphoto.com/id/1061038394/photo/cheerful-attractive-pretty-young-woman-in-knitted-pink-sweater-standing-isolated-on-blue.jpg?s=612x612&w=0&k=20&c=IeHob1z8aN6bxA7_z2j2scB1OF7KFwiTWaKnMuVV4Nw=",
      icon: <FaRecycle className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
    {
      id: 5,
      title: "Low-Impact Dyeing",
      subtitle: "80% Less Water",
      description:
        "Advanced dyeing systems cut water usage drastically.",
      image:
        "https://media.istockphoto.com/id/1156988440/photo/cheerful-plus-size-model-looking-away.jpg?s=612x612&w=0&k=20&c=pODeO74w8TyHc7J1XXLUuILWdGDg-f2YjIFeDwkZVmk=",
      icon: <FaRecycle className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
    {
      id: 6,
      title: "Renewable Energy",
      subtitle: "Solar-Powered Factories",
      description:
        "Our factories are powered by on-site solar energy.",
      image:
        "https://media.istockphoto.com/id/975689242/photo/woman-wrap-hair-around-her-neck-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Z2Ie7w2lbQjGHui1UrXNQn7GKVJ8YZVZMuc1ZiV5QDc=",
      icon: <FaMagic className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
  ],
  Impact: [
    {
      id: 7,
      title: "Community Investment",
      subtitle: "1% for the Planet",
      description:
        "1% of revenue goes to environmental non-profits.",
      image:
        "https://media.istockphoto.com/id/2228281609/photo/pensive-woman-in-traditional-attire-standing-by-window.jpg?s=612x612&w=0&k=20&c=xg83cufdlq0XsMy8dvdTfL3YsfhzGct2e09OhPJrrvM=",
      icon: <FaHandsHelping className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
    {
      id: 8,
      title: "Carbon Neutral Shipping",
      subtitle: "Offsetting Every Delivery",
      description:
        "We offset the carbon footprint of all shipments.",
      image:
        "https://media.istockphoto.com/id/537953945/photo/shes-radiantly-beautiful.jpg?s=612x612&w=0&k=20&c=P9Czk1gEL5nUdwD12x_maiGd-CroK_MdG5jqotKbI5M=",
      icon: <FaRecycle className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
    {
      id: 9,
      title: "Lifetime Repair Guarantee",
      subtitle: "Longevity Commitment",
      description:
        "We repair garments for free to reduce waste.",
      image:
        "https://media.istockphoto.com/id/1067431340/photo/young-tender-woman-in-pajamas-standing-near-window-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=3fz11ZpX2wnepNbY91H8eWd9WGLg6k9hGgJOhvpYlC4=",
      icon: <FaMagic className="text-6xl text-black mb-4 transition-transform duration-300 hover:scale-110" />,
    },
  ],
};

const ContentBlock = ({ item }) => (
  <div className="p-6 rounded-xl shadow-md border-l-4 border-black h-full flex flex-col justify-between hover:shadow-xl transition duration-300">
    {item.icon}
    <h3 className="text-2xl font-serif text-black mb-2">{item.title}</h3>
    <p className="text-lg font-medium text-gray-700 italic mb-3 border-b pb-1">
      {item.subtitle}
    </p>
    <p className="text-gray-600 leading-relaxed text-base">{item.description}</p>
    <button className="mt-4 text-sm font-semibold text-black hover:text-gray-700 transition-colors border-b-2 border-transparent hover:border-black self-start">
      Explore Initiative →
    </button>
  </div>
);

const ImageBlock = ({ item }) => (
  <div className="w-full h-64 lg:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
    <img src={item.image} className="w-full h-full object-cover" alt="" />
  </div>
);

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState("Vision");
  const currentData = allContent[activeTab];

  return (
    <div className="min-h-screen py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center py-8">
          <Title text1={"Our"} text2={activeTab} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Committed to ethical, eco-conscious, and sustainable fashion.
          </p>
        </div>

        {/* Tabs below title */}
        <div className="flex justify-center mb-12 gap-4">
          {["Vision", "Process", "Impact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-y-12">
          {currentData.map((item, i) => {
            const isImageLeft = i % 2 === 0;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
              >
                {isImageLeft ? (
                  <>
                    <ImageBlock item={item} />
                    <ContentBlock item={item} />
                  </>
                ) : (
                  <>
                    <ContentBlock item={item} />
                    <ImageBlock item={item} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
