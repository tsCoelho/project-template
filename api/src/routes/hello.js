var server = require('./../index.js')
var resources = require('./../resources')
/*
1. (internal definition of MedicalAct acts, and MedicalActReimbursement policies and
reimbursements)
2. CRUD of users, including Doctors, Patients, and Mediators
3. CRUD of MedicalReport
4. CRUD of ReimbursementRequest
*/

// Login
server.route({	// Add
  method: 'POST',
  path: '/login',
  handler: resources.hello.login
})


// CRUD 
server.route({	// Add
  method: 'POST',
  path: '/add/{user}',
  handler: resources.hello.addUser
})

server.route({	// Create buffer
  method: 'POST',
  path: '/add/buffer/report',
  handler: resources.hello.addBufferReport
})

server.route({	// Read all
  method: 'GET',
  path: '/{user}',
  handler: resources.hello.getAllUsers
})

server.route({	// Read
  method: 'GET',
  path: '/{user}/{id}',
  handler: resources.hello.getUser
})

server.route({	// Read report by Patient ID
  method: 'GET',
  path: '/report/{patID}',
  handler: resources.hello.getReportByPatientID
})


server.route({	// Update
  method: 'POST',
  path: '/update/{user}',
  handler: resources.hello.updateUser
})

server.route({	// Delete
  method: 'DELETE',
  path: '/{user}/{id}',
  handler: resources.hello.dropUser
})

server.route({	// Delete
  method: 'DELETE',
  path: '/buffer/pat/{id}',
  handler: resources.hello.dropAllBuffRepsByPatID
})

