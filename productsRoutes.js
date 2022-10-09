/** @format */

const express = require("express");
const router = express.Router();
const { _getAllProducts } = require("./productsControlers.js");

// To All products
router.get("/all", _getAllProducts);

module.exports = router;
