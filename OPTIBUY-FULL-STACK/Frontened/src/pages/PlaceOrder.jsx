import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    deleivery_fee,
    products,
  } = useContext(ShopContext);

  //////for backened connection////////////////
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id == items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      //console.log(orderItems);

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deleivery_fee,
      };

      switch (method) {
        //API CALL FOR COD :
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            navigate("/orders");
            setCartItems({});

            toast.success("Order placed");
          } else {
            toast.error(response.data.message);
            //console.log(error.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData,{headers : {token}});
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data
            window.location.replace(session_url);
          }else{
            toast.error(responseStripe.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 sm:pt-14 min-h-[80vh] border-t "
    >
      <div className="flex flex-col gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIEVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            required
            placeholder="First name"
            className="border border-gray-300 py-1.5 px-3.5 w-full "
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="lastName"
            required
            value={formData.lastName}
            placeholder="Lastname"
            className="border border-gray-300 py-1.5 px-3.5 w-full "
          />
        </div>
        <input
          type="email"
          onChange={onChangeHandler}
          name="email"
          required
          value={formData.email}
          placeholder="Email Address"
          className="border border-gray-300 py-1.5 px-3.5 w-full "
        />
        <input
          type="text"
          onChange={onChangeHandler}
          name="street"
          required
          value={formData.street}
          placeholder="street"
          className="border border-gray-300 py-1.5 px-3.5 w-full "
        />
        <div className="flex gap-3">
          <input
            type="text"
            onChange={onChangeHandler}
            name="city"
            required
            value={formData.city}
            placeholder="City"
            className="border border-gray-300 py-1.5 px-3.5 w-full "
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="state"
            required
            value={formData.state}
            placeholder="  State"
            className="border border-gray-300 py-1.5 px-3.5 w-full "
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            placeholder="zip code"
            className="border border-gray-300 py-1.5 px-3.5 w-full "
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="country"
            required
            value={formData.country}
            placeholder="country"
            className="border border-gray-300 py-1.5 px-3.5 w-full "
          />
        </div>
        <input
          type="number"
          onChange={onChangeHandler}
          name="phone"
          required
          value={formData.phone}
          placeholder="Phone"
          className="border border-gray-300 py-1.5 px-3.5 w-full "
        />
      </div>
      {/* {Right side} */}
      <div className="mt-8">
        <div className="mt-8 min-w-80 mb-20">
          <CartTotal />
        </div>
        {/* {payment method selection} */}
        <div className="mt-12">
          <Title text1={"PAYMENT "} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} />
            </div>
            {/* <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} />
            </div> */}
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELEIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8 mb-10">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
