const mongoose = require("mongoose");
require("../db/conn");

const newSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: String,
  country: String,
  score: Number,
  event: String,
});

const Player = new mongoose.model("Player", newSchema);

module.exports = Player;
