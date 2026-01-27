import { createContext, useEffect, useState } from "react";
//import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
///////////////////////////

import axios from 'axios'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Pkr";
  const deleivery_fee = 200;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  //////////////////////////////////////////
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  //////////////////////////////////////////



  //Logic for addToCart Button :
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        toast.success("Your cart added successfully")
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
        toast.success("Your cart added successfully")
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
      toast.success("Your cart added successfully")
    }
    setCartItems(cartData);

    // connect with backend
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add',{itemId, size},{headers : {token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  //Get cart count for quantity :

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers : {token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  }
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product) => product._id === items);
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item]) {
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    } 
    return totalAmount;
  }

  //GET PRODUCTS FROM BACKNENED DATABASES : 
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      console.log(response);
      if (response.data.success) {
        setProducts(response.data.products)
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  //when refresh cart cannot be 0 it remain unchanged : 
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', { }, {headers : {token}});
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getProductsData();
  },[]);

  //when you logged in then token will get 
  //in the localstorage permanently so it cant be removed
  // after mount and demount
  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      //this will make cart not zero
      getUserCart(localStorage.getItem('token'));
    }
  },[])

  //
  const value = {
    products,
    currency,
    deleivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
