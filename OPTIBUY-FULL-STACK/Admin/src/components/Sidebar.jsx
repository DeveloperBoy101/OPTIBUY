import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-white">
      <div className="flex flex-col gap-6 pt-6 pl-[15%] text-[15px] font-medium">
        <NavLink
          to="/add"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <img src={assets.add_icon} alt="" className="w-6 h-6 " />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <img src={assets.order_icon} alt="" className="w-6 h-6 " />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 text-gray-700 hover:text-black"
        >
          <img src={assets.order_icon} alt="" className="w-6 h-6 " />
          <p className="hidden md:block">Order Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
