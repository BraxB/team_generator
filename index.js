// add dependencies
const fs = require('fs');
const inquirer = require('inquirer');

const team = [];

// creates an overarching employee class
class Employee {
    constructor(teamMember, id, email){
        this.teamMember = teamMember;
        this.id = id;
        this.email = email;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// creates an Engineer class off of the Employee class w/ function to create card
class Manager extends Employee {
    constructor(teamMember, id, email, office) {
        super(teamMember, id, email);
        this.office = office;
    }

    getRole() {
        return 'Manager';
    }

    getHTML() {
        return `
<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${this.teamMember}</p>
        <p class="card-text">ID: ${this.id}</p>
        <p class="card-text">Office: ${this.office}</p>
        <a href="mailto:${this.email}" class="btn btn-primary">Email</a>
    </div>
</div>`
    }
}

// creates an Engineer class off of the Employee class w/ function to create card
class Engineer extends Employee {
    constructor(teamMember, id, email, github) {
        super(teamMember, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer'
    }

    getGithub() {
        return this.github;
    }

    getHTML() {
        return `
<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">Name: ${this.teamMember}</p>
        <p class="card-text">ID: ${this.id}</p>
        <a href="https://github.com/${this.github}" class="btn btn-primary">GitHub</a>
        <a href="mailto:${this.email}" class="btn btn-primary">Email</a>
    </div>
</div>`
    }
}

// creates an Intern class off of the Employee class w/ function to create card
class Intern extends Employee {
    constructor(teamMember, id, email, school) {
        super(teamMember, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }

    getHTML() {
        return `
<div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Intern</h5>
            <p class="card-text">Name: ${this.teamMember}</p>
            <p class="card-text">ID: ${this.id}</p>
            <p class="card-text">School: ${this.school}</p>
            <a href="mailto:${this.email}" class="btn btn-primary">Email</a>
        </div>
    </div>`
    }
}

// // TODO: Create a function to write HTML file
function writeHTML(fileName, data) {
    fs.writeFileSync(fileName, data);
}

//function to ask prompts that will create an manager
function createManager() {
    inquirer.prompt([
        {
            type:'input',
            message:"What is your manager's name?",
            name:'managerName'
        },
        {
            type:'input',
            message:"What is your manager's ID?",
            name:'managerID'
        },
        {
            type:'input',
            message:"What is your manager's email address?",
            name:'managerEmail'
        },
        {
            type:'input',
            message:"What is your manager's office number?",
            name:'managerOffice'
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
        team.push(manager);
        anotherOne();
    });
}

//function that prompts users to add another engineer, intern, or end which will initiate the file creation
function anotherOne() {
    inquirer.prompt([
        {
            type:'list',
            message: 'Would you like to add an engineer, intern, or call it quits?',
            name: 'menu',
            choices: ['Add engineer', 'Add intern', 'The whole gang is here']
        }
    ])
    .then(answers => {
        if (answers.menu === 'The whole gang is here') {
            let teamHTML = team.map(teamMember => {return teamMember.getHTML()});
            formattedHTML = teamHTML.join("");
            let fileName = 'Team.html';
            let data = `
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <script src= "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"> </script> 
            <script src= "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"> </script>
            <title>Team</title>
            <meta name="description" content="My Team" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid" style="background-color: blue; color: white; padding: 1rem">
                <div class="container">
                    <h1 class="display-4" style="text-align: center">My Team</h1>
                </div>
            </div>
            <div class="container" style="display: flex">
                ${formattedHTML}
            </div>
        </body>
    </html>`
            writeHTML(fileName, data)
        }
        else if (answers.menu === 'Add engineer') {
            addEngineer();
        }
        else {addIntern()};
    })
}

//function to ask prompts that will create an engineer
function addEngineer() {
    inquirer.prompt([
        {
            type:'input',
            message: "What is your engineer's name",
            name: 'engineerName'
        },
        {
            type:'input',
            message: "What is your engineer's ID",
            name: 'engineerID'
        },
        {
            type:'input',
            message: "What is your engineer's email",
            name: 'engineerEmail'
        },
        {
            type:'input',
            message: "What is your engineer's github",
            name: 'engineerGit'
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGit);
        team.push(engineer);
        anotherOne();
    })
}

//function to ask prompts that will create an intern
function addIntern() {
    inquirer.prompt([
        {
            type:'input',
            message: "What is your intern's name",
            name: 'internName'
        },
        {
            type:'input',
            message: "What is your intern's ID",
            name: 'internID'
        },
        {
            type:'input',
            message: "What is your intern's email",
            name: 'internEmail'
        },
        {
            type:'input',
            message: "What is your intern's school",
            name: 'internSchool'
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        team.push(intern);
        anotherOne();
    })
}

function init() {
    createManager();
}

init()