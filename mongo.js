const mongoose = require("mongoose");
const properties = require("./properties");
const URL = properties.URL;
const { Schema } = mongoose;

mongoose.connect(URL);
mongoose.connection.on("connected", () => {
  console.log("200 connect good");
});

let userSchema = new Schema({
  id: { type: Number, required: true, unique: true },

  name: { type: String },
  age: { type: Number },
  titlePhoto: { type: String },
  description: { type: String },
  bigPhoto: { type: String },
});

let user = mongoose.model("user", userSchema);
module.exports = user;
