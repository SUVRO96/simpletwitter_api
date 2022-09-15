const express = require("express");

const Tweets = require("../Models/Tweets");
const router = express.Router();

router.get("/alltweets", async (req, res) => {
  try {
    const response = await Tweets.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/addtweet", async (req, res) => {
  try {
    const tempTweet = new Tweets({
      text: req.body.text,
      tweetid: req.body.tweetid,
      userid: req.body.userid,
      name: req.body.name,
    });
    const response = await tempTweet.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
