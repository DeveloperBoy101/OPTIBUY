import React from "react";
import { assets } from "../assets/assets.js";
import { useState } from "react";
import axios from "axios";
import { backenedUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestseller ? "true" : "false");
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backenedUrl + "/api/product/add",
        formData,
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setBestSeller("");
        setSizes([]);
        setCategory("");
        setSubCategory("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="img1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              className="w-20"
              alt="Image 1"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="img1"
              hidden
            />
          </label>
          <label htmlFor="img2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              className="w-20"
              alt="Image 2"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="img2"
              hidden
            />
          </label>
          <label htmlFor="img3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              className="w-20"
              alt="Image 3"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="img3"
              hidden
            />
          </label>
          <label htmlFor="img4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              className="w-20"
              alt="Image 4"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="img4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type Here"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Add description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Price</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Subcategory</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="px-3 py-2"
          >
            <option value="">Select Subcategory</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
      </div>

      {/* Product Sizes aur Bestseller neeche column me */}
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <p className="mb-2">Product Sizes</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((item) => item !== size)
                      : [...prev, size]
                  )
                }
              >
                <p
                  className={`${
                    sizes.includes(size)
                      ? "bg-sky-500 text-white"
                      : "bg-slate-200 text-black"
                  } px-3 py-1 rounded-md cursor-pointer  transition-colors`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="bestseller"
            onChange={() => setBestSeller((prev) => !prev)}
            checked={bestseller}
          />
          <label className="cursor-pointer" htmlFor="bestseller">
            Add to bestseller
          </label>
        </div>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white mb-4">
        ADD
      </button>
    </form>
  );
};

export default Add;
