

class Employee {
    constructor(name, id, email, ) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName () {
        console.log(`Employee Name: ${this.name}`)
    }
    getID () {
        console.log(`Employee ID: ${this.id}`)
    }
    getEmail () {
        console.log(`Employee e-mail: ${this.email}`)
    }
    getRole () {
        console.log(`Role: Employee`)
    }
  }

  module.exports = Employee;
  