const express = require("express");
require("../db/conn");
const app = express();
const Student = require("./models/students");
const port = process.env.PORT || 4000;
app.use(express.json());
app.post("/students", (req, res) => {
  console.log(req.body);
  const data = new Student(req.body);
  data
    .save()
    .then(() => {
      res.send(data);
    })
    .catch((e) => {
      res.send(e);
    });
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
