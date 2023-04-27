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
  try {
    newUser = await user.findOne({ userName: info });
    console.log(newUser.gender);

    res.render("userPage", {
      userName: newUser.userName,
      nickName: newUser.nickName,
      gender: newUser.gender,
      from: newUser.from,
      lang: newUser.lang,
      email: newUser.email,
      games: newUser.games,

      img: newUser.titlePhoto,
      des: newUser.description,
      bigPhoto: newUser.bigPhoto,
      birthday: newUser.birthday,
      id: newUser._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
