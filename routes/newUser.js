var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const user = require("../mongo");
const { data } = require("jquery");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("newUser.hbs");
});

router.post("/upload", upload.none(), (req, res) => {
  let data = req.body;
  if (data.password != data.confirmPassword) {
    res.send(400, "ur password doesn't match the confirm password");
  } else {
    let newUser = new user({
      userName: data.userName,
      password: data.password,
      LeagueOfLegends: data.LeagueOfLegends,
      Valorant: data.Valorant,
      Arabic: data.Arabic,
      English: data.English,
      TFT: data.TFT,
      email: data.email,
      titlePhoto: data.titlePhoto,
      description: data.description,
      bigPhoto: data.bigPhoto,
    });
    newUser
      .save()
      .then(() => {
        console.log("success");
        res.redirect(`/userPage/${data.userName}`);
      })
      .catch((err) => {
        console.log(err);
        res.send(
          400,
          "Bad Request ('maybe you didn't fill all the data correctly')"
        );
      });
  }
});
module.exports = router;
