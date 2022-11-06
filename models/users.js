/** @format */
// Requiring the database from heroku from the file database.js
const database = require("../database.js");

// Getting from database table users by user_name
const getAllUsers = () => {
  return database("users").select("*").orderBy("user_firstname");
};

// Adding user to database

const addUser = (user) => {
  console.log(user);
  return database("users").insert(user).returning("*");
};

const checkUser = (user) => {
  console.log(user); //email and password that we typed

  return database("users");
};

// Exporting the functions
module.exports = {
  getAllUsers,
  addUser,
  checkUser,
};

// app.get("/", (res, req) => {
//   const getAllUsers = () => {
//     return database("users").select("*").orderBy("user_name");
//   };

//   getAllUsers()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// });

// const getAllUsers = () => {
//   return database("users").select("*").orderBy("user_name");
// };
// const _getAllUsers = (req, res) => {
//   getAllUsers()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };
/** @format */
// Requiring the database from heroku from the file database.js
// const database = require("../database.js");

// // Getting from database table users by user_name
// const getAllUsers = () => {
//   return database("users").select("*").orderBy("user_firstname");
// };

// // Adding user to database

// const addUser = (user) => {
//   return database("users").insert(user).returning("*");
// };

// // Exporting the functions
// module.exports = {
//   getAllUsers,
//   addUser,
// };
