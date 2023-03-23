// Create Mongodb connection

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students", {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Established ! ");
  })
  .catch((err) => {
    console.log(err);
  });
