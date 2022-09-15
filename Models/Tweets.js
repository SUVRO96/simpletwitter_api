const mongoose = require("mongoose");
const TweetSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  tweetid: {
    type: String,
    required: true,
    unique: true,
  },
  userid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Tweets", TweetSchema);
