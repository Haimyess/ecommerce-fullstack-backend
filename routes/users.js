/** @format */

const express = require("express");
const router = express.Router();
const {
  _addUser,
  _getAllUsers,
  _checkUser,
} = require("../controlers/users.js");

// To All users
router.get("/", _getAllUsers);

// Adding users
router.post("/signup", _addUser);
router.post("/", _checkUser);

module.exports = router;

// /** @format */

// const express = require("express");
// const router = express.Router();
// const { _addUser, _getAllUsers } = require("../controlers/users.js");

// // To All users
// router.get("/", _getAllUsers);

// // Adding users
// router.post("/signup", _addUser);

// module.exports = router;
