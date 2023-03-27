const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");
//const bcrypt = require("bcrypt");
const User = require("./models/user");
const app = express();
app.use(bodyParser.json());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("regester_form");
});

app.post("/register", async (req, res) => {
  // const User=new newModel(req.body);
  console.log(req.body.email);
  console.log(req.body);

  const token = jwt.sign(
    { email: req.body.email, password: req.body.password },
    "aaaaaubbfuefbwdcnlwkcdb",
    { expiresIn: "1h" }
  );
  req.token = token;

  console.log(`token is ${req.token}`);
  const da = new User({
    first_name: req.body.first_name,
    marks: req.body.marks,
    email: req.body.email,
    password: req.body.password,
  });

  const saved = await da.save();
  console.log(saved);
  if (saved) {
    console.log("Data saved ! ");
    //res.send("Saved data ! ");
  }
  res.send(da);
});

// app.post("/register", async (req, res) => {
//   try {
//     // const User=new newModel(req.body);
//     console.log(req.body);
//     const password1 = req.body.password;
//     const email1 = req.body.email;
//     console.log(`${req.body} pass: ${password1} email : ${email1}`);
//     const secure = await bcrypt.hash(password1, 10);
//     const secure1 = await bcrypt.hash(email1, 10);

//     console.log("Secured ! ");
//     console.log(`Hashs are ${secure} and ${secure1}`);

//     const data = new User({
//       first_name: req.body.first_name,
//       marks: req.body.marks,
//       email: secure1,
//       password: secure,
//     });

//     const saved = await data.save();
//     if (!saved) {
//       console.log("Data Not saved ! ");
//       res.send("Error insaving data ! ");
//     } else {
//       console.log("Data saved ! ");
//       res.send(data);
//     }
//   } catch (err) {
//     res.status(400).send("unable to save to database");
//   }
// });

app.get("/login", (req, res) => {
  res.render("login_form");
});

app.post("/login", async (req, res) => {
  //const password1 = req.body.password;
  //const email1 = req.body.email;
  //const User1 = await User.findOne({ email: email1 });

  const newToken = jwt.sign(
    { email: req.body.email, password: req.body.password },
    "aaaaaubbfuefbwdcnlwkcdb"
  );

  const verification = await jwt.verify(
    newToken,
    "aaaaaubbfuefbwdcnlwkcdb",
    function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(`result is ${result}`);
    }
  );
  //console.log(verification);
  if (verification) {
    // res.send("verified ");
    console.log("VErified using JWT ");
  } else {
    console.log("Not verifed ");
    res.send("Not verifed ");
  }
});

app.listen(3000, () => {
  console.log("Listening on 3000 port ");
});
