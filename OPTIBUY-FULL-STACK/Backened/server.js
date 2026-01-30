import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

//App config:
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares :
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'../Admin/dist')))

//api endpoints :
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
//general route :
// app.get("/", (req, res) => {
//   res.send(`API is working at localhost = ${port}`);
// });
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ 
      success: false,
      message: 'API endpoint not found' 
    });
  }
  
  // For all non-API routes, serve the React app
  res.sendFile(path.join(__dirname, '../Admin/dist/index.html'));
});


//server listening port :
app.listen(port, () => {
  console.log(`Server is listeneing on port ${port}`);
});
