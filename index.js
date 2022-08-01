const { Worker } = require("worker_threads");
const path = require("path");
const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (req, res, next) => {
  const workerFilePath = path.join(__dirname, "worker.js");
  const worker = new Worker(workerFilePath);

  worker.on("message", function ({ message, duration }) {
    res.json({ message: `Worker finish its job in ${duration}` });
  });

  worker.postMessage({ indication: "start" });
});

app.get("/fast", (req, res, next) => {
  res.json("This was fast");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
