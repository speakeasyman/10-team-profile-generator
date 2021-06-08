const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require('inquirer')


let team = [];

whoIsManager = () => {
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
    .then((response) =>   {
    team.push( new Manager(response.nameManager, response.idManager, response.email, response.officeNumber));
    console.log(team)
    nextPerson();

    
})
.catch(function(err) {
    console.log("Oh Noes:", error); 

    process.exit(1)
})
}

    whoIsEngineer = () => {
        inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'nameEngineer'
        },
        {
            type: 'input',
            message: 'What is the employee ID of the engineer?',
            name: 'idEngineer'
        },
        {
            type: 'input',
            message: 'What is the email of the engineer?',
            name: 'email'
        },        
        {
            type: 'input',
            message: 'What is the GitHub of the engineer?',
            name: 'gitHub'
        },
        ])
        .then((response) =>   {
        team.push( new Engineer(response.nameEngineer, response.idEngineer, response.email, response.gitHub));
        console.log(team)
        nextPerson();
    }
    
        )}

    whoIsIntern = () => {
        inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is the name of the Intern?',
            name: 'nameIntern'
        },
        {
            type: 'input',
            message: 'What is the employee ID of the Intern?',
            name: 'idIntern'
        },
        {
            type: 'input',
            message: 'What is the email of the Intern?',
            name: 'email'
        },        
        {
            type: 'input',
            message: 'What is the School of the Intern?',
            name: 'school'
        },
        ])
        .then((response) =>   {
        team.push( new Intern(response.nameIntern, response.idIntern, response.email, response.school));
        console.log(team)
        nextPerson();
    }
    
        )}

nextPerson = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Which class of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'No one else to add'],
        }])
        .then((response) => {
            let answer = response.employee
            if (answer === 'Engineer' ) {
                whoIsEngineer();
            } else if (answer === 'Intern' ) {
                whoIsIntern();
            } else {
                console.log(`end: end function goes here`)
                
            }
        })

}
    


whoIsManager();
