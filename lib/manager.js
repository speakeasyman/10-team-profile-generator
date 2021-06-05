const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole () {
        console.log(`Role: Manager`)
    }
}

const jon = new Manager('Jon', '10022079', 'jonathan.nance@gmail.com', '709')

  console.log('jon:', jon);

  jon.getName();

  jon.getID();

  jon.getEmail();

  jon.getRole();

  

  module.exports = Manager;