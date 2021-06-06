const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getRole () {
        console.log(`Role: Intern`)
    }
    getSchool () {
        console.log(`School: ${this.school}`)
    }
}

  module.exports = Intern;