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
/*
var patient = [{"patID":0,"name":"Tomás Silva","policy_number":1000,"policy_type":0},{"patID":1,"name":"Tomás Santos","policy_number":1001,"policy_type":2},{"patID":2,"name":"Francisco Santos","policy_number":1002,"policy_type":1},{"patID":3,"name":"Mariana Pereira","policy_number":1003,"policy_type":2}]

var mediator = [{"medID":0,"name":"Beatriz Santos","user":"med0","pass":"pass"},{"medID":1,"name":"Guilherme Silva","user":"med1","pass":"pass"},{"medID":2,"name":"Rodrigo Santos","user":"med2","pass":"pass"}]

var act = [{"actID":0,"name":"consulta","cost":50},{"actID":1,"name":"raio-X","cost":100},{"actID":2,"name":"tomografia","cost":150},{"actID":3,"name":"exame","cost":75},{"actID":4,"name":"cirurgia","cost":5000},{"actID":5,"name":"transfusão","cost":1000},{"actID":6,"name":"ecograma","cost":200}]

var doctor = [{"docID":0,"name":"Leonor Pereira","speciality":"Clínica Geral","user":"doc0","pass":"pass"},{"docID":1,"name":"João Santos","speciality":"Ortopedia","user":"doc1","pass":"pass"}]

var act_rmb = [{"actID":0,"policy_type":0,"reimb_percentage":1},{"actID":0,"policy_type":1,"reimb_percentage":0.8},{"actID":0,"policy_type":2,"reimb_percentage":0.5},{"actID":0,"policy_type":3,"reimb_percentage":0.2},{"actID":1,"policy_type":0,"reimb_percentage":1},{"actID":1,"policy_type":1,"reimb_percentage":0.8},{"actID":1,"policy_type":2,"reimb_percentage":0.5},{"actID":1,"policy_type":3,"reimb_percentage":0.2},{"actID":2,"policy_type":0,"reimb_percentage":1},{"actID":2,"policy_type":1,"reimb_percentage":0.8},{"actID":2,"policy_type":2,"reimb_percentage":0.5},{"actID":2,"policy_type":3,"reimb_percentage":0.2},{"actID":3,"policy_type":0,"reimb_percentage":1},{"actID":3,"policy_type":1,"reimb_percentage":0.8},{"actID":3,"policy_type":2,"reimb_percentage":0.5},{"actID":3,"policy_type":3,"reimb_percentage":0.2},{"actID":4,"policy_type":0,"reimb_percentage":1},{"actID":4,"policy_type":1,"reimb_percentage":0.8},{"actID":4,"policy_type":2,"reimb_percentage":0.5},{"actID":4,"policy_type":3,"reimb_percentage":0.2},{"actID":5,"policy_type":0,"reimb_percentage":1},{"actID":5,"policy_type":1,"reimb_percentage":0.8},{"actID":5,"policy_type":2,"reimb_percentage":0.5},{"actID":5,"policy_type":3,"reimb_percentage":0.2},{"actID":6,"policy_type":0,"reimb_percentage":1},{"actID":6,"policy_type":1,"reimb_percentage":0.8},{"actID":6,"policy_type":2,"reimb_percentage":0.5},{"actID":6,"policy_type":3,"reimb_percentage":0.2}]

var report = [{"repID":0,"date":"1/1/2012","docID":7,"patID":0,"actID":3,"actual_reimb_perc":1},{"repID":1,"date":"4/8/2012","docID":7,"patID":0,"actID":6,"actual_reimb_perc":1},{"repID":2,"date":"10/11/2014","docID":7,"patID":0,"actID":4,"actual_reimb_perc":1},{"repID":3,"date":"18/2/2010","docID":2,"patID":0,"actID":4,"actual_reimb_perc":1}]

var request = [{"reqID":0,"repID":99,"status":"REJECTED"},{"reqID":1,"repID":98,"status":"REQUESTED"},{"reqID":2,"repID":97,"status":"REJECTED"},{"reqID":3,"repID":96,"status":"PENDING"},{"reqID":4,"repID":95,"status":"ACCEPTED"},{"reqID":5,"repID":94,"status":"REQUESTED"},{"reqID":6,"repID":93,"status":"PENDING"},{"reqID":7,"repID":92,"status":"PENDING"},{"reqID":8,"repID":91,"status":"PENDING"},{"reqID":9,"repID":90,"status":"PENDING"},{"reqID":10,"repID":89,"status":"REQUESTED"},{"reqID":11,"repID":88,"status":"REQUESTED"},{"reqID":12,"repID":87,"status":"REQUESTED"},{"reqID":13,"repID":86,"status":"REQUESTED"},{"reqID":14,"repID":85,"status":"REQUESTED"},{"reqID":15,"repID":84,"status":"ACCEPTED"},{"reqID":16,"repID":83,"status":"PENDING"},{"reqID":17,"repID":82,"status":"PENDING"},{"reqID":18,"repID":81,"status":"REJECTED"},{"reqID":19,"repID":80,"status":"REQUESTED"}]
*/
