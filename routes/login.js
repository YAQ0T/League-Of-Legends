var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const user = require("../mongo");
router.get("/", function (req, res, next) {
  res.render("login.hbs");
});

router.post("/login", upload.none(), async (req, res) => {
  data = req.body;
  let conf = await user.findOne({ userName: data.userName });
  if (conf) {
    console.log(conf);
    if (data.password == conf.password) {
      res.redirect(`/userPage/${data.userName}`);
    } else {
      res.send(400, "wrong password or username");
    }
  } else {
    res.send(400, "wrong password or username");
  }
});

module.exports = router;
