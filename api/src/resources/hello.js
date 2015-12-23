var bl = require('../../../bl/src')

exports = module.exports

exports.get = function handler (request, reply) {
  reply(bl.sayHello())
}

exports.getGB = function handler (request, reply) {
  reply(bl.sayGoodbye())
}


exports.post = function handler (request, reply) {
  reply(bl.sayHello(request.payload.name))
}

exports.getPatID = function handler (request, reply) {
  reply(bl.getPatient(request.params.id))
}

exports.getAllPatients = function handler (request, reply) {
  reply(bl.getAllPatients())
}

exports.getAllRequests= function handler (request, reply) {
  reply(bl.getAllRequests())
}

exports.getAllActs= function handler (request, reply) {
  reply(bl.getAllActs())
}


