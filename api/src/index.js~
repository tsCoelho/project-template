var Hapi = require('hapi');
var Blipp = require('blipp');

var server = module.exports = new Hapi.Server({
  connections: {
    routes: {
      cors: true
    }
  }
})

server.connection({
  host: 'localhost',
  port: 9000
})

// load routes
require('./routes/hello.js')
server.register({ register: Blipp, options: {} }, function (err) {
	
	server.start(function (err) {
	  if (err) {
		return console.log('err:' + err)
	  }
	  console.log('server started: ' + server.info.uri)
	})
});
