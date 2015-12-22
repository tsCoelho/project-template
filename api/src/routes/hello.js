var server = require('./../index.js')
var resources = require('./../resources')

server.route({
  method: 'GET',
  path: '/hello',
  handler: resources.hello.get
})

server.route({
  method: 'POST',
  path: '/hello',
  handler: resources.hello.post
})

server.route({
  method: 'GET',
  path: '/patient/{id}',
  handler: resources.hello.getPatID
})

server.route({
  method: 'GET',
  path: '/patient',
  handler: resources.hello.getAllPatients
})
