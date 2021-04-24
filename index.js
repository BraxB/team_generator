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
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">${this.teamMember} ${this.id}</p>
        <p class="card-text">${this.office}</p>
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
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">${this.teamMember} ${this.id}</p>
        <a href="www.github.com/${this.github}" class="btn btn-primary">GitHub</a>
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
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Intern</h5>
            <p class="card-text">${this.teamMember} ${this.id}</p>
            <p class="card-text">${this.school}</p>
            <a href="mailto:${this.email}" class="btn btn-primary">Email</a>
        </div>
    </div>`
    }
}

// // TODO: Create a function to write HTML file
function writeHTML(fileName, data) {
    fs.writeFileSync(`team.html`, data);
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
            console.log(team[1].getHTML());
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
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internGit);
        team.push(intern);
        anotherOne();
    })
}

function init() {
    createManager();
}

init()