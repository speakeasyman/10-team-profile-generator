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

  module.exports = Manager;