/** @format */

// /** @format */
// // Requiring the the function getAllProducts located in the modules folder, to get all the products of the website
// const { getAllUsers, addUser } = require("../modules/users.js");

// //Getting all users
// const _getAllUsers = (req, res) => {
//   getAllUsers()
//     .then((data) => {
//       res.json(data);

//       console.log(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };

// const _addUser = (req, res) => {
//   console.log(req.body);
//   addUser(req.body)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };

// module.exports = {
//   _getAllUsers,
//   _addUser,
// };

/** @format */
// Requiring the the function getAllProducts located in the modules folder, to get all the products of the website
const { getAllUsers, addUser } = require("../models/users.js");

//Getting all users
const _getAllUsers = (req, res) => {
  getAllUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

const _addUser = (req, res) => {
  console.log(req.body);
  addUser(req.body)
    .then((data) => {
      res.json(data);

      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};

module.exports = {
  _getAllUsers,
  _addUser,
};
