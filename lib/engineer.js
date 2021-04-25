const Employee = require('./employee');

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

module.exports = Engineer;