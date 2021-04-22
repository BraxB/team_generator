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
