 const Employee = require('./employee')

 class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
 
        this.gitHub = gitHub
      
    }
    getGitHub() {
        console.log(`Git Hub: ${this.gitHub}`)
    }

    getRole () {
        console.log(`Role: Engineer`)
    }
}



 const jon = new Engineer('Jon', '10022079', 'jonathan.nance@gmail.com', 'tokenGitHub')

  console.log('jon:', jon);

  jon.getName();

  jon.getID();

  jon.getEmail();

  jon.getRole();

  jon.getGitHub();

  module.exports = Engineer;