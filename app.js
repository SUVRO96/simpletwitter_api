const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("Api running");
  } catch (err) {
    res.status(400).json(err);
  }
});

mongoose.connect(
  "mongodb+srv://Suvro_96:Suvro_96@cluster0.twza7d2.mongodb.net/simpletwitter?retryWrites=true&w=majority",
  () => {
    console.log("db connected..");
  }
);

app.use("/users", userRoute);

app.listen(4000);
