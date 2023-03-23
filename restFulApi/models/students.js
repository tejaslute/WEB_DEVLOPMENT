const mongoose = require("mongoose");
const validator = require("validator");

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Already registered email ! "],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Mail ! ");
      }
    },
  },
  phone: {
    type: Number,

    min: 10,

    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// We will create new Collection

const Student = new mongoose.model("Student", newSchema);

module.exports = Student;
