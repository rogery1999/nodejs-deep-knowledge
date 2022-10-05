process.on('message', ({type, data}) => {
  if(type === 'F1'){
    process.send({type: 'Response 200', data: `Hola mundo soy ${data}`})
  }
})

process.stdin.on('data', (buffer) => {
  console.log(`mensaje desde el stdin dentro el child process, data => ${buffer.toString('utf-8')}`)
})