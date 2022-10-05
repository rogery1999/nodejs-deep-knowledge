const {parentPort, workerData} = require('worker_threads');

parentPort.on('message', (message) => {
  console.log(`Mensaje desde el papa: ${message}`)
  setTimeout(() => {
    parentPort.postMessage(`Hola desde el hijo, num= ${workerData.num}`);
  }, 2000);
})
