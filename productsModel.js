/** @format */

const database = require("./database.js");

// Getting from database table products, all of the products in it
const getAllProducts = () => {
  return database("products").select("*").orderBy("product_name");
};

module.exports = {
  getAllProducts,
};
