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
    if (newUser.LeagueOfLegends == "on") {
      newUser.LeagueOfLegends = "/images/League of Legends.svg";
    }
    if (newUser.Valorant == "on") {
      newUser.Valorant = "/images/Valorant.svg";
    }
    if (newUser.TFT == "on") {
      newUser.TFT = "/images/Teamfight Tactics.svg";
    }
    if (newUser.Arabic == "on") {
      newUser.Arabic = "/images/saudi-arabia-flag-icon.svg";
    }
    if (newUser.English == "on") {
      newUser.English = "/images/Flag_US.svg";
    }

    res.render("userPage", {
      id: newUser._id,

      userName: newUser.userName,
      password: newUser.password,
      LeagueOfLegends: newUser.LeagueOfLegends,
      Valorant: newUser.Valorant,
      Arabic: newUser.Arabic,
      English: newUser.English,
      TFT: newUser.TFT,
      email: newUser.email,
      titlePhoto: newUser.titlePhoto,
      description: newUser.description,
      bigPhoto: newUser.bigPhoto,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
