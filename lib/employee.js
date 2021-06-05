

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

  const jon = new Employee('Jon', '10022079', 'jonathan.nance@gmail.com')

  console.log('jon:', jon);

  jon.getName();

  jon.getID();

  jon.getEmail();

  jon.getRole();

  
  
  module.exports = Employee;
  