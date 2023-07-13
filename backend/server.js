// importing necessary files
const express = require("express");
const db = require("./db/connection");
const cors = require("cors");
const app = express();
const PORT = 5000;

const userRoutes = require("./Routes/userRoute");
const shopRoutes = require("./Routes/shopRoute");
const productRoutes = require("./Routes/productRoute");
const cartRoutes = require("./Routes/cartRoute");
const wishlistRoutes = require("./Routes/wishlistRoute");
const orderRoutes = require("./Routes/orderRoute");
const reviewRoutes  = require("./Routes/reviewRoute");

app.use(express.json());

app.use(cors());

// creating an api
app.use("/api/user", userRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart" , cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/order",orderRoutes);
app.use("/api/review", reviewRoutes);

// running the server in port
app.listen(PORT, () => console.log(`Server is running in port : ${PORT}`));
