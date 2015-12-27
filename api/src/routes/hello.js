var server = require('./../index.js')
var resources = require('./../resources')
/*
1. (internal definition of MedicalAct acts, and MedicalActReimbursement policies and
reimbursements)
2. CRUD of users, including Doctors, Patients, and Mediators
3. CRUD of MedicalReport
4. CRUD of ReimbursementRequest
*/

// CRUD Users
server.route({	// Add user
  method: 'POST',
  path: '/add/{user}',
  handler: resources.hello.addUser
})

server.route({	// Read all Users
  method: 'GET',
  path: '/{user}',
  handler: resources.hello.getAllUsers
})

server.route({	// Read User
  method: 'GET',
  path: '/{user}/{id}',
  handler: resources.hello.getUser
})

server.route({	// Update User
  method: 'POST',
  path: '/update/{user}',
  handler: resources.hello.updateUser
})

server.route({	// Delete User
  method: 'DELETE',
  path: '/{user}/{id}',
  handler: resources.hello.dropUser
})
