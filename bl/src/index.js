fs = require('fs')

exports = module.exports
var json;
var id_field;


function findR(acts,actId,policyType){
    for (var i = 0;i <acts.length;i++){
        if (acts[i].actID === actId && acts[i].policy_type === policyType){
            return acts[i].reimb_percentage
        }
    }
    return 1
}


function findUserByID(json,id) {
	
	id_field = Object.getOwnPropertyNames(json[0])[0] // assumed ID is ALWAYS the 1st field
	
	for (var i=0;i < json.length; i++){
		if(json[i][id_field] === Number(id)){
			return json[i]
		}
	}
	return 'Couldnt find what you were looking for!'
}

function dropUserByID(json,id) {
	
	id_field = Object.getOwnPropertyNames(json[0])[0] // assumed ID is ALWAYS the 1st field
	
	for (var i=0;i < json.length; i++){
		if(json[i][id_field] === Number(id)){
			json.splice(i,1)
			console.log('User deleted')
			return json
		}
	}
	return 'Couldnt find what you were looking for!'
}

function findReportByPatientID(json,patientID){
	var rep = [];
	for (var i = 0;i <json.length;i++){
		if(json[i].patID === Number(patientID)){
			rep.push(json[i])
		}
	}
	return rep	
}

function dropReprepIDpatID(json,repID,patID){
	var rep = [];
	for (var i = 0;i <json.length;i++){
		if(json[i].patID !== Number(patID) || json[i].repID !== Number(repID)){
			rep.push(json[i])
		}
	}
	return rep
}


function dropRepPatID(buffer,id){
	filtered = buffer.filter(function(elem){
    return elem.patID !== Number(id)
})
	return filtered
}

function loginCtrl(user,pass){
			for(var i=0; i<doctor.length; i++){
			if(doctor[i].user === user){
				if(doctor[i].pass === pass){
					login=true
					doc=doctor[i]
					
					obj = {"isValid":login,
							"doc":doctor[i]
						}
					return obj
					//$scope.default_mess=""
					//$scope.currentSection = 2
				}else{
					login=false

					//$scope.default_mess="Username or Password Incorrect!"

				}
			}else{ 
				login = false
				
				//$scope.default_mess="Username or Password Incorrect!"
			}
		}
		obj = {"isValid":login,
						}
		return obj
}
// Login
exports.login = function(username,password){
	return loginCtrl(username,password)
}

// User -> User || Business entity 
// Create User

exports.addBufferReport = function(payload) {
	bufferReport.push(payload)
	return bufferReport
}


exports.addUser = function (user,payload) {
	switch (user) {
			case('act'):
				act.push(payload)
				return act;
				break;
				
			case('patient'): 
				patient.push(payload);
				return patient;
				break;
			
			case('doctor'):
				doctor.push(payload);
				return doctor;
				break;
			
			case('mediator'):
				mediator.push(payload);
				return mediator;
				break;
				
			case('act_rmb'):
				act_rmb.push(payload);
				return act;
				break;
				
			case('report'):				
				report.push(payload);
				return report;
				break;
				
			case('request'):
				request.push(payload);
				return request;
				break;
				
			default:
				return 'Ooops! Not a valid user.'
		}
}


// Read All
exports.getAllUsers = function(user) {
	
	switch (user) {
		case('buffer'):
			
			return bufferReport;
			break
		
		case('act'):
			return act;
			break;
			
		case('patient'): 
			return patient;
			break;
		
		case('doctor'):
			return doctor;
			break;
		
		case('mediator'):
			return mediator;
			break;
			
		case('act_rmb'):
			return act_rmb;
			break;
			
		case('report'):
			return report;
			break;
			
		case('save'):
			fs.writeFileSync('./reports_saved.json', JSON.stringify(report))
			fs.writeFileSync('./requests_saved.json', JSON.stringify(request))
			break
		
		case('request'):
			return request;
			break;
			
		default:
			return 'Ooops! Not a valid user.'
	
	}
}

exports.getReimb = function(actID,policyType){
	return findR(act_rmb,actID,policyType)
	
}


// Read patient medical report

exports.getReportByPatientID = function(name,patID){
	
	switch (name) {
		case('report'):
			return findReportByPatientID(report,patID)
			break;
			
		case('buffer'):
			return findReportByPatientID(bufferReport,patID)
			break;
	}

}

// Read User by ID
exports.getUser = function(user,id) {
	
	switch (user) {
		
		case('act'):
			return findUserByID(act,id);
			break;
			
		case('patient'): 
			return findUserByID(patient,id);
			break;
		
		case('doctor'):
			return findUserByID(doctor,id);
			break
		
		case('mediator'):
			return findUserByID(mediator,id);
			break;
			
		case('act_rmb'):
			return findUserByID(act_rmb,id);
			break;
			
		case('report'):
			return findUserByID(report,id);
			break;
			
		case('request'):
			return findUserByID(request,id);
			break;
			
		default:
			return 'Ooops! Not a valid user.'
	
	}
}


// Update user
exports.updateUser = function (user,payload) {
	id = Object.getOwnPropertyNames(payload)[0]
	switch (user) {
			case('act'):
				dropUserByID(act,payload[id]);
				act.push(payload)
				return act
				break;
				
			case('patient'): 
				dropUserByID(patient,payload[id]);
				patient.push(payload);
				return patient;
				break;
			
			case('doctor'):
				dropUserByID(doctor,payload[id]);
				doctor.push(payload);
				return doctor;
				break;
			
			case('mediator'):
				dropUserByID(mediator,payload[id]);
				mediator.push(payload);
				return mediator;
				break;
				
			case('act_rmb'):
				dropUserByID(act_rmb,payload[id]);
				act_rmb.push(payload);
				return act;
				break;
				
			case('report'):				
				dropUserByID(report,payload[id]);
				report.push(payload);
				return report;
				break;
				
			case('request'):
				dropUserByID(request,payload[id])
				request.push(payload);
				return request;
				break;
				
			default:
				return 'Ooops! Not a valid user.'
		}
}


// Drop User
exports.dropAllBuffRepsByPatID = function (id) {
	bufferReport = dropRepPatID(bufferReport,id)
	return bufferReport
}

exports.dropRepbyIdPat = function (repID,patID) {
	dropReprepIDpatID(bufferReport,repID,patID)
	return bufferReport
}

exports.dropUser = function (user,id) {
		switch (user) {
		
		case('buffer'):
			dropUserByID(bufferReport,id)
			return bufferReport
			break
		
		case('act'):
			dropUserByID(act,id);
			return act
			break;
			
		case('patient'): 
			dropUserByID(patient,id);
			return patient
			break;
		
		case('doctor'):
			dropUserByID(doctor,id);
			return doctor
			break
		
		case('mediator'):
			dropUserByID(mediator,id);
			return mediator
			break;
			
		case('act_rmb'):
			dropUserByID(act_rmb,id);
			return act_rmb
			break;
			
		case('report'):
			dropUserByID(report,id);
			return report
			break;
			
		case('request'):
			dropUserByID(request,id);
			return request;
			break;
			
		default:
			return 'Ooops! Not a valid user.'
	
		}
}

var patient = require('../../data/patients.json')
var doctor = require('../../data/doctors.json')
var mediator = require('../../data/mediators.json')
var act = require('../../data/acts.json')
var act_rmb = require('../../data/acts-rmb.json')
var report = require('../../data/reports.json')
var request = require('../../data/requests.json')
var bufferReport = require('../../data/bufferReports.json')
