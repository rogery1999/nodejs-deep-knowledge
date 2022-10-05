const { Worker } = require("worker_threads");

const worker = new Worker("./worker-thread.js", { workerData: { num: 50 } });

worker.on('error', (err) => {
  console.log(`Worker Error: ${err.message}`);
})

worker.on('exit', (exitCode) => {
  console.log(`Worker Exit: code ${exitCode}`);
})

worker.on('message', (message) => {
  console.log(`Message from child: ${message}`);
  setTimeout(() => {
    worker.emit('exit', 1)
  }, 2000);
})

worker.on('online', () => console.log('Worker online'))

worker.postMessage('Hola desde el padre')