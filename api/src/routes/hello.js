var server = require('./../index.js')
var resources = require('./../resources')

/*
1. (internal definition of MedicalAct acts, and MedicalActReimbursement policies and
reimbursements)
2. CRUD of users, including Doctors, Patients, and Mediators
3. CRUD of MedicalReport
4. CRUD of ReimbursementRequest
*/

// CRUD Patient

//~ server.route({	// Add Patient
  //~ method: 'POST',
  //~ path: '/patient/add',
  //~ handler: resources.hello.addPatient
//~ })

server.route({   // Read Patient by ID
  method: 'GET',
  path: '/patient/{id}',
  handler: resources.hello.getPatID
})


server.route({	// Read all Patients
  method: 'GET',
  path: '/patient',
  handler: resources.hello.getAllPatients
})
/*
server.route({	// Update Patient (sera PUT?)
  method: 'POST',
  path: '/patient/update',
  handler: resources.hello.updatePatient
})

server.route({	// Delete Patient
  method: 'DELETE',
  path: '/patient/delete',
  handler: resources.hello.dropPatient
})


// CRUD Doctor

server.route({	// Add Doctor
  method: 'POST',
  path: '/doctor/add',
  handler: resources.hello.addDoctor
})

server.route({   // Read Doctor by ID
  method: 'GET',
  path: '/doctor/{id}',
  handler: resources.hello.getDocID
})
*/

server.route({	// Read all Doctors
  method: 'GET',
  path: '/doctor',
  handler: resources.hello.getAllDoctors
})

/*
server.route({	// Update Doctor (sera PUT?)
  method: 'POST',
  path: '/doctor/update',
  handler: resources.hello.updateDoctor
})

server.route({	// Delete Doctor
  method: 'DELETE',
  path: '/doctor/delete',
  handler: resources.hello.dropDoctor
})


// CRUD Mediator

server.route({	// Add Mediator
  method: 'POST',
  path: '/mediator/add',
  handler: resources.hello.addMediator
})

server.route({   // Read Mediator by ID
  method: 'GET',
  path: '/mediator/{id}',
  handler: resources.hello.getMediatorID
})

server.route({	// Read all Mediators
  method: 'GET',
  path: '/mediator',
  handler: resources.hello.getAllMediators
})

server.route({	// Update Mediator (sera PUT?)
  method: 'POST',
  path: '/mediator/update',
  handler: resources.hello.updateMediator
})

server.route({	// Delete Mediator
  method: 'DELETE',
  path: '/mediator/delete',
  handler: resources.hello.deleteMediator
})


// CRUD Medical Reports

server.route({	// Add MedReport
  method: 'POST',
  path: '/medreport/add',
  handler: resources.hello.addMedReport
})

server.route({   // Read MedReport by ID
  method: 'GET',
  path: '/medreport/{id}',
  handler: resources.hello.getMedReportID
})

server.route({	// Read all MedReports
  method: 'GET',
  path: '/medreport',
  handler: resources.hello.getAllMedReports
})

server.route({	// Update MedReport (sera PUT?)
  method: 'POST',
  path: '/medreport/update',
  handler: resources.hello.updateMedReport
})

// Este nao devia ser possivel ?????????????
/*
server.route({	// Delete MedReport
  method: 'DELETE',
  path: '/medreport/delete',
  handler: resources.hello.deleteMedReport
})


// CRUD Requests

server.route({	// Add Request
  method: 'POST',
  path: '/request/add',
  handler: resources.hello.addRequest
})

server.route({   // Read Request by ID
  method: 'GET',
  path: '/request/{id}',
  handler: resources.hello.getRequestID
})

server.route({	// Read all Requests
  method: 'GET',
  path: '/request',
  handler: resources.hello.getAllRequests
})

server.route({	// Update Request (sera PUT?)
  method: 'POST',
  path: '/request/update',
  handler: resources.hello.updateRequest
})

server.route({	// Delete Request
  method: 'DELETE',
  path: '/request/delete',
  handler: resources.hello.deleteRequest
})



// CRUD Medical Acts

server.route({	// Add MedAct
  method: 'POST',
  path: '/act/add',
  handler: resources.hello.addAct
})

server.route({   // Read MedAct by ID
  method: 'GET',
  path: '/act/{id}',
  handler: resources.hello.getActID
})

server.route({	// Read all MedActs
  method: 'GET',
  path: '/act',
  handler: resources.hello.getAllActs
})

server.route({	// Update Act (sera PUT?)
  method: 'POST',
  path: '/act/update',
  handler: resources.hello.updateAct
})

server.route({	// Delete Act
  method: 'DELETE',
  path: '/act/delete',
  handler: resources.hello.deleteAct
})
*/


