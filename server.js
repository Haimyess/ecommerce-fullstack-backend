/** @format */

//Requiring the express node.js package to create the server
const express = require("express");

const products_router = require("../backend/routes/productsRoutes.js");
// const order_router = require("../backend/routes/orders.js");

// Creating the server
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());
// Listenting to the port 5000 in localhost
app.listen(process.env.PORT || 3001, () => {
  console.log(`listen on port ${process.env.PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "https://ecommerce-fullstack-backend.herokuapp.com/api/products",
  products_router
);
// app.use("/api/order", order_router);

app.use(express.static(__dirname + "/public"));
