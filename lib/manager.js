const Employee = require('./employee');

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

module.exports = Manager;