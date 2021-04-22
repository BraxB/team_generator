// add dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// creates an overarching team member class
class Teammate {
    constructor(teamMember, id, email){
        this.teamMember = teamMember;
        this.id = id;
        this.email = email;
    }
}

// creates an Engineer class off of the Teammate class
class Manager extends Teammate {
    constructor(teamMember, id, email, office) {
        super(teamMember, id, email);
        this.office = office;
    }
}

// creates an Engineer class off of the Teammate class
class Engineer extends Teammate {
    constructor(teamMember, id, email, github) {
        super(teamMember, id, email);
        this.github = github;
    }
}

// creates an Intern class off of the Teammate class
class Intern extends Teammate {
    constructor(teamMember, id, email, school) {
        super(teamMember, id, email);
        this.school = school;
    }
}

// // TODO: Create a function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(`team.html`, data);
// }

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
        anotherOne();
    });
}

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
            writeHTML();
        }
        else if (answers.menu === 'Add engineer') {
            addEngineer();
        }
        else {addIntern()};
    })
}

function init() {
    createManager();
}

init()