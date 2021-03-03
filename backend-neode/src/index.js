const Server = require('./server')

new Server().listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
