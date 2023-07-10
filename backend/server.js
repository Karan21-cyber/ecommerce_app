const express = require("express");
const db  = require("./db/connection");
const cors = require("cors");
const app = express();
const PORT = 5000;

const userRoutes = require("./Routes/userRoute");
const shopRoutes = require("./Routes/shopRoute");
const productRoutes = require("./Routes/productRoute");

app.use(express.json());
app.use(cors());

app.use("/api/user",userRoutes);
app.use("/api/shop" ,shopRoutes);
app.use("/api/product", productRoutes);


app.listen(PORT, () => console.log(`Server is running in port : ${PORT}`));