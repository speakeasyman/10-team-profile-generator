const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require('inquirer')

let team = [];

whoisManager = () => {
    inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is the name of the team manager?',
        name: 'nameManager'
    },
    {
        type: 'input',
        message: 'What is the employee ID of the team manager?',
        name: 'idManager'
    },
    {
        type: 'input',
        message: 'What is the email of the team manager?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the Office Number of the team manager?',
        name: 'officeNumber'
    },
    ])
    .then((response) =>     
    
    console.log(response)
    
    
    )
  
}

    


whoisManager();