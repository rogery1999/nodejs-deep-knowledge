const cluster = require("cluster");
cluster.schedulingPolicy = cluster.SCHED_RR;
const process = require("process");
const { cpus } = require("os");

if (cluster.isMaster) {
  const cpusNum = cpus().length;
  console.log("cpus: ", cpusNum);
  console.log(`Master Process ${process.pid} running`);

  for (let index = 0; index < 4; index++) {
    cluster.fork();
  }
} else {
  const express = require("express");

  const PORT = 3000;
  const app = express();

  const doWork = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  };

  app.get("/", (req, res, next) => {
    doWork(5000);
    res.json({
      message: "Home page",
    });
  });

  app.get("/fast", (req, res, next) => {
    res.json("This was fast");
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
