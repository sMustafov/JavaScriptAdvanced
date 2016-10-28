let nuke = require("../5.ArmageDOM").nuke;
let expect = require("chai").expect;

describe("Test nuke", function () {
    it("should have property name", function () {
        expect(nuke('', '')).to.equal(undefined,
            "The function did not return the correct message!");
    });
    it("should have property name", function () {
        expect(nuke('pesho', 'pesho')).to.equal(undefined,
            "The function did not return the correct message!");
    });
    it("should have property name", function () {
        expect(nuke('pesho', '')).to.equal(undefined,
            "The function did not return the correct message!");
    });
    it("should have property name", function () {
        expect(nuke('', 'pesho')).to.equal(undefined,
            "The function did not return the correct message!");
    });
});
