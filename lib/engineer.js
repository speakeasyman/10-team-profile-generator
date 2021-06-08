 const Employee = require('./employee')

 class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
 
        this.gitHub = gitHub
        this.role = 'Engineer'

      
    }
    getGitHub() {
        console.log(`Git Hub: ${this.gitHub}`)
    }

    getRole () {
        console.log(`Role: Engineer`)
    }
}


  module.exports = Engineer;