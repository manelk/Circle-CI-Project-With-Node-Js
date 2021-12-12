var MyClass = require("../src/MyClass");
var MyObj = new MyClass();
var chai = require("chai");
var sinon = require("sinon");
var expect = chai.expect;

describe("It IS Test Unit!!", function () {
    it("Test the add function", function () {
        expect(MyObj.add(1, 2)).to.be.equal(3);
    })

    it("Test the multiply function", function () {
        expect(MyObj.multiply(2, 2)).to.be.equal(4);
    })
})