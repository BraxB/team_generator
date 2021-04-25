const Intern = require('../lib/intern');

describe("Intern", () => {

    describe("getRole", () => {
        it("should return the intern's role", () => {
            const bob = new Intern('Bob', 1, 'bob@bob.net', 'UGA');
            const result = bob.getRole();
            expect(result).toEqual('Intern');
        });
    });

    describe("getGithub", () => {
        it("should return the intern's Github", () => {
            const bob = new Intern('Bob', 1, 'bob@bob.net', 'UGA');
            const result = bob.getSchool();
            expect(result).toEqual('UGA');
        });
    });
});