const express = require("express");
const router = express.Router();
const Player = require("../models/data");

router.post("/playerProfile", async (req, res) => {
  try {
    const d = new Player(req.body);
    const result = await d.save();
    if (!result) {
      res.status(404).send();
      console.log("Data not inserted");
    } else {
      res.send(result);
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/playerProfile", async (req, res) => {
  try {
    const d = await Player.find();
    if (!d) {
      res.status(404).send();
      console.log("Data not fetched ! ");
    } else {
      res.send(d);
      console.log(d);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/playerProfile/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const data1 = await Player.find({ name: name });
    if (!data1) {
      res.status(404);
    } else {
      res.send(data1);
    }
    console.log(data1);
    res.send(data1);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/playerProfile/:name", async (req, res) => {
  try {
    const name1 = req.params.name;
    if (!Player.find({ name: name1 })) {
      res.status(404).send();
    } else {
      const ok = await Player.findOneAndUpdate(name1, req.body);
      console.log("Updated !");
      res.send(ok);
    }
  } catch (err) {
    res.send(err);
  }
});

router.delete("/playerProfile/:name1", async (req, res) => {
  try {
    // const name11 = req.params.name;
    const ok = await Player.findOneAndDelete(req.body.name);
    if (!ok) {
      console.log("Errorr! ");
    }
    res.send(ok);
    console.log(ok);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
