const { parentPort } = require("worker_threads");

parentPort.on("message", function ({ indication, duration = 5000 }) {
  if (indication === "start") {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {}

    parentPort.postMessage({ message: "Finish my job", duration });
  } else {
    console.err("Unhandle indication");
    parentPort.postMessage({ message: "Unhandle indication" });
  }
});
