const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const { createFullDeck } = require("../src/game");

describe("createFullDeck", function() {
    it("should be a function", function() {
        expect(createFullDeck).to.be.a("function");
    });

    it("should create a full deck from provided data", function() {
        const fullDataDeck = createFullDeck(prototypeQuestions);
        expect(fullDataDeck).to.deep.equal(prototypeQuestions);
    });
});

