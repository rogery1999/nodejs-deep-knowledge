const { fork } = require("child_process");
const path = require("path");
const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (req, res, next) => {
  const workerFilePath = path.join(__dirname, "child-process.js");
  const childProcess = fork(workerFilePath);

  childProcess.on("message", ({ message, duration }) => {
    res.json({ message: `Worker finish its job in ${duration}` });
  });

  childProcess.send({ indication: "start" });
});

app.get("/fast", (req, res, next) => {
  res.json("This was fast");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
