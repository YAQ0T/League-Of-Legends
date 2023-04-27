const mongoose = require("mongoose");
const properties = require("./properties");
const URL = properties.URL;

const { Schema } = mongoose;

mongoose.connect(URL);
mongoose.connection.on("connected", () => {
  console.log("200 connect good");
});

let userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickName: { type: String, required: true },
  gender: { type: String, required: true },
  from: { type: String, required: true },
  // lang: { type: String, required: true },
  email: { type: String, required: true },
  // games: { type: String, required: true },
  birthday: { type: String, required: true },
  titlePhoto: { type: String, required: true },
  description: { type: String, required: true },
  bigPhoto: { type: String, required: true },
});

let user = mongoose.model("user", userSchema);
module.exports = user;
