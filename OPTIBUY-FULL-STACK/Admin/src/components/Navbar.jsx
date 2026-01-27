import React, { useState } from "react";
import { toast } from "react-toastify";

const Navbar = ({setToken}) => {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
        setToken("");
        localStorage.removeItem("token")
      toast.success("You are logged out");
      setLoading(false);
    },2000);
  };
  return (
    <div className="w-full flex items-center justify-between px-6 sm:px-12 py-4 bg-white">
      <span className="prata-regular text-xl mt-1">Urban {" "}
<span className="font-extrabold prata-regular bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Threads.</span>
      </span>
      <button
      onClick={handleLogout}
      disabled={loading}
        className={`px-6 py-2 rounded-full text-sm sm:text-base transition ${
          loading
            ? "bg-gray-500 text-white cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-gray-900"
        } `}
      >
        {loading ? "Logging Out" : "LogOut"}
      </button>
    </div>
  );
};

export default Navbar;
