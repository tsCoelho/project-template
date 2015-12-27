var bl = require('../../../bl/src')

exports = module.exports

exports.login = function handler (request, reply) {
  reply(bl.login(request.payload.user,request.payload.pass))
}

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

exports.dropAllBuffRepsByPatID = function handler (request, reply) {
  reply(bl.dropAllBuffRepsByPatID(request.params.id))
}


// Report
exports.getReportByPatientID  = function handler (request, reply) {
  reply(bl.getReportByPatientID (request.params.patID))
}

exports.addBufferReport = function handler(request,reply){
	reply(bl.addBufferReport(request.payload))
}
