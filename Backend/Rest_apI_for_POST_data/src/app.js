const express = require("express");
require("./db/conn");
const app = express();
const Student = require("./models/students");
const port = process.env.PORT || 4000;
app.use(express.json());
app.post("/students", (req, res) => {
  console.log(req.body);
  const data1 = new Student(req.body);
  data1
    .save()
    .then(() => {
      res.send(data1);
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
