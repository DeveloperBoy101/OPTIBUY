import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Target,
  Settings,
  Sparkles,
  Globe,
  RotateCcw,
  Star,
} from "lucide-react";
import Title from "./Title";

const features = [
  { title: "Mix-and-Match Outfits", icon: Target },
  { title: "Personalization Service", icon: Settings },
  { title: "Durable & Stylish Apparel", icon: Sparkles },
  { title: "Eye-Catching Designs", icon: Globe },
  { title: "Versatile Clothing Options", icon: RotateCcw },
  { title: "Tailored Recommendations", icon: Star },
];

const FeatureCard = ({ title, Icon }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div className="w-72 h-48 bg-[#ece4a9] border border-yellow-300 rounded-lg shadow-md flex flex-col items-center justify-center p-6 text-center transition duration-300 hover:shadow-xl">
      <div className="w-12 h-12 mb-3 flex items-center justify-center border-2 border-blue-900 rounded-full text-2xl">
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <p className="text-base font-semibold text-gray-800 leading-snug">
        {title}
      </p>
    </div>
  </div>
);

const OurFeatures = () => {
  return (
    <section className="mb-20">
      <div className="text-center py-8 text-3xl">
        <Title text1={"OUR"} text2={"FEATURES"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          at numquam quisquam magnam.
        </p>
      </div>

      <div className="max-w-6xl  ">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={50}
       
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <FeatureCard title={item.title} Icon={item.icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurFeatures;
