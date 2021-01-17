const express = require("express");
const app = express();

app.use(express.json());

app.use("/api", require("./api"));

app.use("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
