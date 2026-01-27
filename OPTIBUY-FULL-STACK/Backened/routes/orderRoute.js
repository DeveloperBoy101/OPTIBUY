import express from "express";

import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrderData,
  updateStatus,
  userOrder,
  verifyStripe
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

//Admin features : 
orderRouter.post('/list',adminAuth,allOrderData);
orderRouter.post('/status',adminAuth,updateStatus);

//Payment features : 
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

//user feature : 
orderRouter.post('/userOrders',authUser, userOrder);

//verify payment : 
orderRouter.post('/verifyStripe', authUser,verifyStripe)
export default orderRouter;