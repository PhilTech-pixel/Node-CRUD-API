const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const productRoutes = require("./routes/product.route.js");
const dotenv = require("dotenv").config();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoutes);

const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
