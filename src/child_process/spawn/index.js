const { spawn } = require("child_process");

// const spawnedChildProcess = spawn("ls", ["-lh"]);
// const spawnedChildProcess = spawn("pwd");
// const spawnedChildProcess = spawn("find", [".", "-type", "f"]);
const spawnedChildProcess = spawn("wc");

// spawnedChildProcess.on("exit", (code, signal) => {
//   console.log(`child process exited with code ${code} and signal ${signal}`);
// });

// spawnedChildProcess.stdout.on("data", (data) => {
//   console.log(`child stdout:\n${data}`);
// });

// spawnedChildProcess.stderr.on("data", (data) => {
//   console.error(`child stderr:\n${data}`);
// });

process.stdin.pipe(spawnedChildProcess.stdin);

spawnedChildProcess.stdout.on("data", (data) => {
  console.log(`child stdout:\n${data}`);
});
