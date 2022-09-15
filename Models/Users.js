const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userid: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  pasword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
