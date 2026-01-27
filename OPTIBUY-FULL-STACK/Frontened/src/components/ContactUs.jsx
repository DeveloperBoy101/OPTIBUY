import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { assets } from "../assets/assets";
import Title from "./Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_74tywgt",
        "template_umnx71e",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "VyHHgPF_UAO3KWn0B"
      )
      .then(
        () => {
          toast.success("Message Sent!");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        () => toast.error("Failed to send message")
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col sm:flex-row w-full  mx-auto border border-gray-400 overflow-hidden lg:h-[450px] mb-10">
      <div className="w-full sm:w-1/2">
        <img
          src={assets.contactImg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full sm:w-1/2 p-8 lg:p-10 text-black">
        <div className="text-3xl">
          <Title text1={"CONTACT"} text2={"US"} />
          <p className="w-3/4 mb-4 text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex gap-8">
            <div>
              <label htmlFor="firstName" className=" text-sm mb-1 font-normal  text-gray-800">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-400 h-8 focus:outline-none focus:border-gray-800"
              />
            </div>
            <div>
              <label htmlFor="lastName" className=" text-sm mb-1 font-normal text-gray-800">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-gray-400 p-2 border h-8 focus:outline-none focus:border-gray-800"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 font-normal text-gray-800">
              Email*
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-gray-400 p-2 border h-8 focus:outline-none focus:border-gray-800"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1 font-normal text-gray-800">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-400  resize-none focus:outline-none focus:border-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#0A2A49] text-white font-semibold flex justify-center items-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUs;
