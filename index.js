const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path")
const pathToTop = path.join(__dirname, "./dist/top.html")
const pathToNewDestination = path.join(__dirname, "sample", "sample.html")

// This was a placeholder for an idea I was unable to get to work. It should work, but I couldn't 
//figure it out. I used some console logs of it to watch how the data was being saved as I went through different prompts.
let team = [];


// This is the initial function that will kick everything off
// Because it's coded to alway require a manager, when you run index.js
// whoIsManager() is what is ran.
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
        const managerNew = []
        managerNew.push( new Manager(response.nameManager, response.idManager, response.email, response.officeNumber))
        team.push( managerNew);
        // console.log(team)
        generateTop();  // this sets up the top of the the html file, by coping over a template called top.html into the sample folder called sample.html
        const managerCard =
        `<div class="row">
            <div class="col s12 m6">
            <div class="card deep-purple darken-1">
                <div class="card-content white-text">
                <span class="card-title">${response.nameManager}</span>
                <ul>
                    <li>Role: Manager</li>
                    <li>ID: ${response.idManager} </li>
                    <li>Office Number: ${response.officeNumber} </li>
                </ul>
                </div>
                <div class="card-action">
                <a href="mailto:${response.email}">${response.email}</a>
                </div>
            </div>
            </div>
        </div>`
        // this just appends the manager data newly created as a card to the sample.html located in the sample folder
        fs.appendFile('./sample/sample.html', managerCard, (err) => err ? console.log(err) : '')
        
           
   
    nextPerson();

    
})
.catch(function(err) {
    console.log("Oh Noes:", err); 

    process.exit(1)
})
}
// WhoIsEngineer is the line of prompts to create the Engineer cards
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
        // console.log(team)
        const engineerCard =
        `<div class="row">
            <div class="col s12 m6">
            <div class="card green darken-1">
                <div class="card-content white-text">
                <span class="card-title">${response.nameEngineer}</span>
                <ul>
                    <li>Role: Engineer</li>
                    <li>ID: ${response.idEngineer} </li>                    
                </ul>
                </div>
                <div class="card-action">
                <a href="mailto:${response.email}">${response.email}</a>
                <a href="https://github.com/${response.gitHub}" target="_blank" >${response.gitHub}</a>
                </div>
            </div>
            </div>
        </div>`
        //as before, this will append the engineer card into sample.html
        fs.appendFile('./sample/sample.html', engineerCard, (err) => err ? console.log(err) : '')
        nextPerson();
    }
    
        )}
// Lastly, the whoIsIntern prompts for the interns questions.
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
        // console.log(team)
        const internCard =
        `<div class="row">
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">${response.nameIntern}</span>
                <ul>
                    <li>Role: Intern</li>
                    <li>ID: ${response.idIntern} </li>   
                    <li>ID: ${response.school} </li>                 
                </ul>
                </div>
                <div class="card-action">
                <a href="mailto:${response.email}">${response.email}</a>
                
                </div>
            </div>
            </div>
        </div>`

        // this adds the intern cards to the sample.html in the sample folder.
        fs.appendFile('./sample/sample.html', internCard, (err) => err ? console.log(err) : '')
        
        nextPerson();
    }
    
        )}
// This just asks if you'd want to add another intern or engineer. If you chose no one else it'll console log your team, and 
// invote the generateBot() function.
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
                console.log('A preview of your team. sample.html can be found in the sample folder', team)
                generateBot();



                
                
            }
        })
        .catch(function(err) {
            console.log("Oh Noes:", err); 
        
        
        })

}
    

// The code that initiates when node index.js is ran
whoIsManager();


//generateTop() just copies the top half a boiler plate html called topl.html as sample.html in the sample folder.
generateTop = () => {

    fs.copyFile(pathToTop, pathToNewDestination, function(err) {
        if (err) {
            throw err
        } else {
            console.log("Successfully copied and moved the file!")
        }
    })
}

generateBot = () => {

    const bothtml =
    `    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>`
fs.appendFile('./sample/sample.html', bothtml, (err) => err ? console.log(err) : '')
}

