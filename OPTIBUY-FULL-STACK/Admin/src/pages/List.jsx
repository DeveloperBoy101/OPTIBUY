import React from "react";
import { useState } from "react";
import { backenedUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  
  const fetchList = async () => {
    try {
      const response = await axios.get(backenedUrl + "/api/product/list", {
        headers: {
          token: token,
        },
      });
      console.log("API Response:", response.data);
      if (response.data.success) {
        setList(response.data.products || response.data.message); // ✅ Dono check karo
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Network Error - Backend check karo");
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backenedUrl + "/api/product/remove",
        { id },
        {
          headers: {
            token: token,
          },
        }
      );
      if(response.data.success){
        toast.success(response.data.message);
        await fetchList();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 mt-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* ✅ Table Headings - Alag div mein */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        
        {/* ✅ Product List - Alag div mein headings ke baad */}
        {list.length > 0 ? (
          list.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            >
              <img src={item.image[0]} className="w-12" alt={item.name} />
              <p className="truncate">{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}  <span className="font-bold">{item.price} {""} </span>
              </p>
              <p 
                onClick={() => removeProduct(item._id)} 
                className="text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700"
              >
                X
              </p>
            </div>
          ))
        ) : (
          <p className="text-center py-4">No products found</p>
        )}
      </div>
    </>
  );
};

export default List;