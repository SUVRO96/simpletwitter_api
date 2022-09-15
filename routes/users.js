const express = require("express");

const Users = require("../Models/Users");
const router = express.Router();

router.get("/allusers", async (req, res) => {
  try {
    const response = await Users.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/adduser", async (req, res) => {
  try {
    const tenpObj = new Users({
      userid: req.body.userid,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    });
    const response = await tenpObj.save();
    res.status(201).json(response.userid);
  } catch (err) {
    res.status(200).json(err);
  }
});

// POST->  http://localhost:4000/users/login
router.post("/login", async (req, res) => {
  const tempEmail = req.body.email;
  const tempPassword = req.body.password;
  try {
    const response = await Users.find({
      email: tempEmail,
      password: tempPassword,
    });
    if (response.length === 0) {
      res.status(422).json("User not found");
    } else if (response.length === 1) {
      res.status(200).json(response[0]);
    } else {
      res.status(421).json("error found");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
