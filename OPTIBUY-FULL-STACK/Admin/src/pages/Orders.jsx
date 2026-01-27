import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backenedUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  console.log("Orders component rendered with token:", token);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    if (!token) {
      toast.error("Token not found. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        backenedUrl + "/api/order/list",
        {},
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("- Error message:", error.message);
      toast.error(response.data.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      fetchAllOrders();
    }
  }, [token]);

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backenedUrl + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log("- Error message:", error.message);
      toast.error(response.data.message);
    }
  };
  if (loading) {
    return <div className="p-4">Loading orders...</div>;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Orders</h3>

      {orders.length === 0 ? (
        <div className="border border-gray-300 rounded p-6 text-center">
          <p className="text-gray-600 mb-4">No orders found</p>
          <button
            onClick={fetchAllOrders}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Refresh
          </button>
        </div>
      ) : (
        <div>
          {orders.map((order, idx) => (
            <div
              key={order._id || idx}
              className="border border-gray-300 rounded p-4 mb-4"
            >
              <div className="flex items-start mb-4">
                <img
                  src={assets.parcel_icon}
                  alt="order"
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <p className="font-bold">Order #{idx + 1}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Customer Info */}
                <div className="border border-gray-200 rounded p-3">
                  <h4 className="font-bold mb-2">Customer Info</h4>
                  <p className="mb-1">
                    {order.address?.firstName} {order.address?.lastName}
                  </p>
                  <p className="mb-1">{order.address?.phone}</p>
                  <p className="text-sm text-gray-600">
                    {order.address?.street}, {order.address?.city},{" "}
                    {order.address?.state}
                  </p>
                </div>

                {/* Items */}
                <div className="border border-gray-200 rounded p-3">
                  <h4 className="font-bold mb-2">
                    Items ({order.items.length})
                  </h4>
                  <div className="space-y-1">
                    {order.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-gray-600">
                          x{item.quantity} {item.size && `(${item.size})`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Info */}
                <div className="border border-gray-200 rounded p-3">
                  <h4 className="font-bold mb-2">Payment Info</h4>
                  <div className="mb-2">
                    <span className="font-bold">Amount: </span>
                    {currency}
                    {order.amount}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Method: </span>
                    {order.paymentMethod}
                  </div>
                  <div>
                    <span className="font-bold">Status: </span>
                    <span
                      className={
                        order.payment ? "text-green-600" : "text-red-600"
                      }
                    >
                      {order.payment ? "Paid" : "Pending"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Selector */}
              <div className="mt-4">
                <label className="block mb-2 font-bold">Update Status</label>
                <select
                  value={order.status}
                  onChange={(e) => statusHandler(e,order._id)}
                  className="w-full border border-gray-300 rounded p-2"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delievered">Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
