

class Employee {
    constructor(name, id, email, ) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = '';
    }

    

    getName () {
        return this.name
    }
    getID () {
        console.log(`Employee ID: ${this.id}`)
    }
    getEmail () {
        console.log(`Employee e-mail: ${this.email}`)
    }
    getRole () {
        console.log(`Role: ${this.role}`)
    }
  }

  const testEmployee = new Employee('Jon Nance', '10022079', 'jonathan.w.nance@gmail.com')
  testEmployee.getName();
  module.exports = Employee;
  