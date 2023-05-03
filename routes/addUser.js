var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const user = require("../mongo");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("addUser.hbs");
});

router.post("/Upload", upload.none(), (req, res) => {
  data = req.body;
  console.log(data);
  // if (data.password != data.confirmPassword) {
  //   res.send(400, "ur password doesn't match the confirm password");
  // } else {
  //   let newUser = new user({
  //     userName: data.userName,
  //     password: data.password,
  //     confirmPassword: data.confirmPassword,

  //     email: data.email,
  //     games: data.games,
  //     lang: data.lang,
  //     titlePhoto: data.titlePhoto,
  //     description: data.description,
  //     bigPhoto: data.bigPhoto,
  //   });
  //   newUser
  //     .save()
  //     .then(() => {
  //       console.log("success");
  //       res.redirect(`/userPage/${data.userName}`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.send(
  //         400,
  //         "Bad Request ('maybe you didn't fill all the data correctly')"
  //       );
  //     });
  // }
});
module.exports = router;
