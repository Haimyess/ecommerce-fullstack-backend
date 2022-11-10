/** @format */
// Requiring the the function getAllProducts located in the modules folder, to get all the products of the website
const { getAllUsers, addUser, checkUser } = require("../models/users.js");

//Getting all users - TESTING PURPOSES
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

// Getting data from frontend and passing it

const _checkUser = (req, res) => {
  checkUser(req.body.user_email) //email --> model
    .then((data) => {
      if (data[0].user_password === req.body.user_password) {
        res.json(data);
      } else {
        res.status(401).json({ msg: "incorrect password" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message, notexist: "User not exist" });
    });
};

module.exports = {
  _getAllUsers,
  _addUser,
  _checkUser,
};
