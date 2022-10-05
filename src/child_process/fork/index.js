const { fork } = require('child_process')
const { resolve } = require('path')

const forkedChildProcess = fork(resolve('child-process.js'));

forkedChildProcess.on('message', ({type, data}) => {
  console.log(`On Message => type ${type}, data:${data}`);
})

forkedChildProcess.on('exit', (code, signal) => {
  console.log(`Exit => code ${code}, signal ${signal}`);
})

forkedChildProcess.send({type: 'F1', data: 'Rogery'});

setTimeout(() => {
  forkedChildProcess.kill()
}, 2000);