//addingCamera = require('./SerialTests/addingCamera')
logIn = require('./SerialTests/logIn')
addingProject = require('./SerialTests/addingProject')
logOut = require('./SerialTests/logOut');


//Befoereach Aftereach
describe('Sequentially run Tests', () => {
   logIn
   addingProject
   logOut

   //logIn
   //addingCamera
   //logOut
})