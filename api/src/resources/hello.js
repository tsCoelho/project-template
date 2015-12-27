var bl = require('../../../bl/src')

exports = module.exports

exports.addUser = function handler (request, reply) {
  reply(bl.addUser(request.params.user,request.payload))
}
exports.getAllUsers = function handler (request, reply) {
  reply(bl.getAllUsers(request.params.user))
}

exports.getUser = function handler (request, reply) {
  reply(bl.getUser(request.params.user,request.params.id))
}

exports.updateUser = function handler (request, reply) {
  reply(bl.updateUser(request.params.user, request.payload))
}

exports.dropUser = function handler (request, reply) {
  reply(bl.dropUser(request.params.user,request.params.id))
}

