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
  let newUser = new user({
    userName: data.userName,
    password: data.password,
    age: data.age,
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
      res.send(500, "Username Already Used");
    });
});
router.post("/login", upload.none(), (req, res) => {
  data = req.body;
  res.redirect(`/userPage/${data.userName}`);
});
module.exports = router;
