const mongoose = require("mongoose");
require("../db/conn");

const newSchema = new mongoose.Schema({
  first_name: String,
  marks: Number,
  email: String,
  password: String,
});

const User = mongoose.model("valid", newSchema);

module.exports = User;
