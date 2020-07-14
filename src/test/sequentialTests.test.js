addingProject = require('./SerialTests/addingProject')
addingCamera = require('./SerialTests/addingCamera')


//Befoereach Aftereach
describe('Sequentially run Tests', () => {
   addingProject
   addingCamera
})