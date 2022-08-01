const { cpus, platform } = require("os");
process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
//* Only windows
if (platform() === "win32") {
  cluster.schedulingPolicy = cluster.SCHED_RR;
}
const processMod = require("process");

if (cluster.isMaster) {
  const cpusNum = cpus().length;
  console.log("cpus: ", cpusNum);
  console.log(`Master Process ${processMod.pid} running`);

  for (let index = 0; index < cpusNum / 2; index++) {
    cluster.fork();
  }
} else {
  const { pbkdf2 } = require("crypto");
  const express = require("express");

  const PORT = 3000;
  const app = express();

  app.get("/", (req, res, next) => {
    pbkdf2("rogery", "salt", 100000, 512, "sha512", (err, derivedKey) => {
      if (err) throw Error("Something went wrong");
      res.json({
        message: "Home page",
      });
    });
  });

  app.get("/fast", (req, res, next) => {
    res.json("This was fast");
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
