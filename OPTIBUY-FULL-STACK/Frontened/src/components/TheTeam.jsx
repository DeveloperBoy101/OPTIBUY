import React from "react";
import Title from "./Title";
// Sample data for the team members
const teamMembers = [
  {
    id: 1,
    name: "Ella John",
    title: "Designer",
    // Replace with actual image URLs if available, using placeholders for now
    imageUrl:
      "https://static.wixstatic.com/media/88aac0_93cbac072ea447eda5d893d386dd0c64~mv2.png",
  },
  {
    id: 2,
    name: "Michael Frank",
    title: "Stylist",
    imageUrl:
      "https://static.wixstatic.com/media/88aac0_6a2ad3200405494d92ae1924da490cc0~mv2.png",
  },
  {
    id: 3,
    name: "Luna Chenson",
    title: "Marketing",
    imageUrl:
      "https://static.wixstatic.com/media/88aac0_cdf18b7c1acb4b01818f986437e4596a~mv2.png",
  },
];

const TheTeam = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8 text-3xl">
          <Title text1={"OUR"} text2={"TEAM"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae at numquam quisquam magnam.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-left">
              {/* Image Container with Aspect Ratio */}
              <div
                className="w-full  overflow-hidden mb-4 bg-gray-100"
                style={{
                  // Simulating the light teal/mint background color shown in the image
                  backgroundColor: "#E6F4E6",
                }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover mix-blend-multiply" // Added mix-blend-multiply to better match the image effect
                />
              </div>

              {/* Name and Title */}
              <p
                className="text-lg font-medium text-gray-800 mb-0"
                style={{ color: "#003366" }} // Same deep blue color for the name
              >
                {member.name}
              </p>
              <p className="text-sm text-gray-500 mt-0">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
