const cluster = require("cluster");
const { cpus } = require('os');


if(cluster.isPrimary) {
  const cores = cpus().length;
  console.log(`Master Process ${process.pid} runnig, aviable cores(${cores})`)

  for (let index = 0; index < cores; index++) {
    cluster.fork();
  }

} else {
  const express = require('express');

  const PORT = 3000;
  const server = express();
  server.get('/', (_, res) => {
    res.status(200).json('Hola mundo')
  })

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}