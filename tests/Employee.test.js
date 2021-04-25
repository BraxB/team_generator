const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("getID", () => {
        it("should return the employee's ID", () => {
            const bob = new Employee('Bob', 1, 'bob@bob.net');
            const result = bob.getID();
            expect(result).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const bob = new Employee('Bob', 1, 'bob@bob.net');
            const result = bob.getEmail();
            expect(result).toEqual('bob@bob.net');
        });
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const bob = new Employee('Bob', 1, 'bob@bob.net');
            const result = bob.getRole();
            expect(result).toEqual('Employee');
        });
    });
});