const express = require("express");
const router = require("./routers/router");
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json()); // middleware
app.use(router); // middleware
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
