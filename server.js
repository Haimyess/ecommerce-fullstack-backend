/** @format */

//Requiring the express node.js package to create the server
const express = require("express");

const products_router = require("./productsRoutes.js");

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

app.use("/api/products", products_router);

app.use(express.static(__dirname + "/public"));
