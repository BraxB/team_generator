const Manager = require('../lib/manager');

describe("Manager", () => {

    describe("getRole", () => {
        it("should return the manager's role", () => {
            const bob = new Manager('Bob', 1, 'bob@bob.net', '23A');
            const result = bob.getRole();
            expect(result).toEqual('Manager');
        });
    });

    describe("getOffice", () => {
        it("should return the manager's office", () => {
            const bob = new Manager('Bob', 1, 'bob@bob.net', '23A');
            const result = bob.getOffice();
            expect(result).toEqual('23A');
        });
    });
});