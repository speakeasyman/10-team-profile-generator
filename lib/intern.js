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

const jon = new Intern('Jon', '10022079', 'jonathan.nance@gmail.com', 'NCSU')

  console.log('jon:', jon);

  jon.getName();

  jon.getID();

  jon.getEmail();

  jon.getRole();

  jon.getSchool();

  

  module.exports = Intern;