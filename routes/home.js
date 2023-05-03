var express = require("express");
var router = express.Router();
const user = require("../mongo");

router.get("/", (req, res) => {
  res.render("home.hbs");
});
router.post("/search", async (req, res) => {
  data = req.body.searchFelid;
  if (data.length >= 1) {
    result = await user.find({
      userName: { $regex: "^" + data, $options: "i" },
    });
    count = 0;
    res.send(
      200,
      result.map((r) => {
        if (count < 5) {
          count += 1;
          return r.userName;
        } else {
          return;
        }
      })
    );
  }
});
module.exports = router;
