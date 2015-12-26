var bl = require('../../../bl/src')

exports = module.exports


exports.getPatID = function handler (request, reply) {
  reply(bl.getPatient(request.params.id))
}

exports.getAllPatients = function handler (request, reply) {
  reply(bl.getAllPatients())
}

exports.getAllDoctors = function handler (request, reply) {
  reply(bl.getAllDoctors())
}
//~ 
//~ exports.getAllRequests= function handler (request, reply) {
  //~ reply(bl.getAllRequests())
//~ }
//~ 
//~ exports.getAllActs= function handler (request, reply) {
  //~ reply(bl.getAllActs())
//~ }
//~ 
//~ exports.addMedReport= function handler (request, reply) {
  //~ reply(bl.addMedReport(request.payload.repID,request.payload.date,request.payload.docID,request.payload.patID,request.payload.actID,request.payload.actual_reimb_perc))
//~ }
//~ 
