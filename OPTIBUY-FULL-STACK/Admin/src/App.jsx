import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login";
import Sidebar from "./components/Sidebar";

export const backenedUrl = import.meta.env.VITE_BACKENED_URL;
export const currency = "Pkr";

const App = () => {

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <ToastContainer />
        {token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Navbar setToken={setToken} />
            <hr />
            <div className="flex w-full">
              <Sidebar />
              <div className=" w-[70%] mx-auto ml-[max(5vw, 25px)] text-gray-600 text-base">
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
