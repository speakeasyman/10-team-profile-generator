const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    getRole () {
        console.log(`role ${this.role}`)
    }
}

  module.exports = Manager;