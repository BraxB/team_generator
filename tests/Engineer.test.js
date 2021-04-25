const Engineer = require('../lib/engineer');

describe("Engineer", () => {

    describe("getRole", () => {
        it("should return the engineer's role", () => {
            const bob = new Engineer('Bob', 1, 'bob@bob.net', 'bobby');
            const result = bob.getRole();
            expect(result).toEqual('Engineer');
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's Github", () => {
            const bob = new Engineer('Bob', 1, 'bob@bob.net', 'bobby');
            const result = bob.getGithub();
            expect(result).toEqual('bobby');
        });
    });
});