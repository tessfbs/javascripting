//receive data/message

process.stdin.setDefaultEncoding('utf-8')

process.stdin.on('data', (messageFromStdin) => {
  console.log(messageFromStdin)
})