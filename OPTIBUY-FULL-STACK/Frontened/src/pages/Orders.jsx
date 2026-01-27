import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const { products, currency, backendUrl, token } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userOrders",
        {},
        { headers: { token } }
      );
      //console.log(response.data);
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        //console.log(allOrdersItem);
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {orderData.map((item, idx) => (
          <div
            key={idx}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                className="w-16 sm:w-20"
                alt={item.name}
              />
            </div>

            <div className="flex-1">
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p>
                  {currency} {item.price}
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
              </div>
              <p>
                Date:{" "}
                <span className="text-gray-400">
                  {new Date(item.date).toDateString()}
                </span>
              </p>
              <p>
                Payment Method:{" "}
                <span className="text-gray-400">
                  {item.paymentMethod}
                </span>
              </p>
            </div>

            {/* Container for status and button - now in better layout */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 md:mt-0 md:w-1/2">
              {/* Status - Centered */}
              <div className="flex items-center justify-center gap-2 flex-1">
                <div className="min-w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>

              {/* Button - Right aligned */}
              <div className="flex justify-end md:justify-center flex-1">
                <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
