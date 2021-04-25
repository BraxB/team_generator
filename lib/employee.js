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

module.exports = Employee;