var express = require("express");
const bodyParser = require("body-parser");

var router = express.Router();
const fs = require("fs");

const mongoose = require("mongoose");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const user = require("../mongo");
/* GET users listing. */
router.get("/:userName", async function (req, res, next) {
  info = req.params.userName;
  console.log(info);
  try {
    newUser = await user.findOne({ userName: info });
    res.render("userPage", {
      userName: newUser.userName,
      img: newUser.titlePhoto,
      des: newUser.description,
      bigPhoto: newUser.bigPhoto,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
