const Employee = require('./employee');

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

module.exports = Intern;